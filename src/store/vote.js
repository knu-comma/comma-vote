export const state = {
    vote1: "1",
    vote2: "2",
    vote3: "3",
    vote4: "4",
}

export const actions = {
    setVote1({ commit }, payload) {
        console.log('setVote1');
        console.log("payload: " + payload.checked);
        commit('mutateVote1', payload.checked);
    },
    setVote2({ commit }, payload) {
        commit('mutateVote2', payload.checked);
    },
    setVote3({ commit }, payload) {
        commit('mutateVote3', payload.checked);
    },
    setVote4({ commit }, payload) {
        commit('mutateVote4', payload.checked);
    }
}

export const mutations = {
    mutateVote1(state, payload) {
        console.log('mutateVote1');
        console.log("payload: " + payload)
        state.vote1 = payload;
    },
    mutateVote2(state, payload) {
        state.vote2 = payload;
    },
    mutateVote3(state, payload) {
        state.vote3 = payload;
    },
    mutateVote4(state, payload) {
        state.vote4 = payload;
    }
}

export const getters = {
    getVote1(state) {
        return state.vote1;
    },
    getVote2(state) {
        return state.vote2;
    },
    getVote3(state) {
        return state.vote3;
    },
    getVote4(state) {
        return state.vote4;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}