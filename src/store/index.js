
import auth from './modules/auth';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		auth,
	},
});

export default store;
