export default {
	namespaced: true,
	state: {
		user: null,
	},
	mutations: {
		SET_USER(state, user) {
			state.user = user;
		},
	},
	getters: {
		user(state) {
			return state.user;
		},
	},
	actions: {
		setUser({ commit }, user) {
			commit('SET_USER', user);
		},
	},
};
