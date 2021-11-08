import { createStore } from 'vuex';
import http from 'axios';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';
import { merge, chunks } from '../utils/index';

const ls = new SecureLS({ isCompression: false });

export default createStore({
  plugins: [createPersistedState({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
  })],
  state: {
    characters: [],
    charactersFilter: [],
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

      const requests = [start, end].map((id) => http.get(`https://rickandmortyapi.com/api/character?page=${id}`)
        .then((response) => response.data)
        .catch((error) => error));

      try {
        const allresponse = await Promise.all(requests);
        const charactersData = allresponse;
        const allcharacters = merge(charactersData);
        const characters = [...chunks(allcharacters, 10)];
        commit('SET_CHARACTERS', characters);
        commit('SET_CHARACTERS_FILTER', characters[state.page]);
        commit('SET_TOTAL_PAGES', characters.length);
      } catch (error) {
        console.log(error);
      }
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
  getters: {

    findById: (state) => (id) => state.charactersFilter.find((item) => item.id === Number(id)),

  },
  modules: {
  },
});
