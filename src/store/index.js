import Vue from 'vue';
import Vuex from 'vuex';

import Loading from './modules/loading';
import Session from './modules/session';
import Snackbar from './modules/snackbar';
import Error from './modules/error';
import User from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Loading,
    Session,
    Snackbar,
    Error,
    User,
  },
});
