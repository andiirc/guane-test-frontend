import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  plugins: [createPersistedState()],
  state: {
    characters: [],
    charactersFilter: [],
    characterFilter: {},
  },
  mutations: {

    setCharacters(state, payload) {
      state.characters = payload;
    },

    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    },

    setCharacterFilter(state, payload) {
      state.characterFilter = payload;
    },

  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        commit('setCharacters', data.results);
        commit('setCharactersFilter', data.results);
      } catch (error) {
        console.error(error);
      }
    },

    findById({ commit, state }, id) {
      const result = state.characters.find((character) => character.id === Number(id));
      commit('setCharacterFilter', result);
    },

  },
  modules: {
  },
});
