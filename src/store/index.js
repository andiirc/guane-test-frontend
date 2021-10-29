import { createStore } from 'vuex';
import http from 'axios';
import createPersistedState from 'vuex-persistedstate';
import chunks from '../utils/index';

export default createStore({
  plugins: [createPersistedState()],
  state: {
    characters: [],
    charactersFilter: [],
    characterFilter: {},
    page: 0,
    currentPage: 1,
    totalPages: 0,
  },
  mutations: {

    SET_CHARACTERS(state, payload) {
      state.characters = payload;
    },

    SET_CHARACTERS_FILTER(state, payload) {
      state.charactersFilter = payload;
    },

    SET_CHARACTER_FILTER(state, payload) {
      state.characterFilter = payload;
    },

    SET_TOTAL_PAGES(state, payload) {
      state.totalPages = payload;
    },

    SET_PAGE(state, payload) {
      state.page = payload;
    },

    SET_CURRENT_PAGE(state, payload) {
      state.currentPage = payload;
    },

  },
  actions: {

    async getCharacters({ commit, state }) {
      const start = 1;
      const end = 2;

      await Promise.all([start, end].map((id) => http.get(`https://rickandmortyapi.com/api/character?page=${id}`)
        .then((response) => response.data)))
        .then((response) => {
          const allcharacters = [...new Set([...response[start - 1].results,
            ...response[end - 1].results])];
          const characters = [...chunks(allcharacters, 10)];
          commit('SET_CHARACTERS', characters);
          commit('SET_CHARACTERS_FILTER', characters[state.page]);
          commit('SET_TOTAL_PAGES', characters.length);
        })
        .catch((error) => console.log(error));
    },

    findById({ commit, state }, id) {
      const result = state.charactersFilter.find((character) => character.id === Number(id));
      commit('SET_CHARACTER_FILTER', result);
    },

    nextPage({ commit, state }) {
      const page = state.page + 1;
      const currentPage = state.currentPage + 1;
      const result = state.characters[page];
      commit('SET_PAGE', page);
      commit('SET_CURRENT_PAGE', currentPage);
      commit('SET_CHARACTERS_FILTER', result);
    },

    previousPage({ commit, state }) {
      const page = state.page - 1;
      const currentPage = state.currentPage - 1;
      const result = state.characters[page];
      commit('SET_PAGE', page);
      commit('SET_CURRENT_PAGE', currentPage);
      commit('SET_CHARACTERS_FILTER', result);
    },

  },
  modules: {
  },
});
