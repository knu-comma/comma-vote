export const state = {
    resultNumber: 0,
    studentId: "ff",
    clubname: "",
    username: "",
}


export const actions = {
    setStudentId({ commit }, payload) {
        commit('mutateStudentId', payload._studentId);
    },
    setClubname({ commit }, payload) {
        commit('mutateClubname', payload._clubname);
    },
    setUsername({ commit }, payload) {
        commit('mutateUsername', payload._username);
    }
}

export const mutations = {
    mutateStudentId(state, payload) {
        console.log(payload)
        state.studentId = payload;
    },
    mutateClubname(state, payload) {
        console.log(payload);
        state.clubname = payload;
    },
    mutateUsername(state, payload) {
        console.log(payload);
        state.username = payload;
    }
}

export const getters = {
    getStudentId(state) {
        return state.studentId;
    },
    getClubname(state) {
        return state.clubname;
    },
    getUsername(state) {
        return state.username;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}