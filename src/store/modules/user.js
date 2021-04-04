import User from '@/api/resources/users';

const state = {
  users: [],
  registerSuccess: false,
};

const getters = {
  getUsers: () => (state.users),
  getRegisterSuccess: () => (state.registerSuccess),
};

const actions = {
  fetchUsers({ commit, dispatch }, payload) {
    User.index(payload).then((response) => {
      commit('setUsers', response);
      dispatch('removeLoading');
    });
  },

  registerUser({ dispatch, commit }, payload) {
    User.register(payload).then(() => {
      dispatch('removeLoading');
      commit('setRegisterSuccess');
    });
  },

  updateDriver({ dispatch, commit }, payload) {
    User.update(payload).then(() => {
      dispatch('removeLoading');
      commit('setRegisterSuccess');
    });
  },

  deactivateUser({ dispatch, commit }, payload) {
    User.deactivate(payload).then(() => {
      dispatch('removeLoading');
      commit('setRegisterSuccess');
    });
  },
};

const mutations = {
  setUsers($state, payload) {
    const stateCopy = $state;
    stateCopy.users = payload;
  },
  setRegisterSuccess($state) {
    const stateCopy = $state;
    stateCopy.registerSuccess = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
