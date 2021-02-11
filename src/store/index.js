import { createStore } from 'vuex'
import student from "./student"
import vote from "./vote"

export const store = createStore({
    strict: false,
    modules: {
        student,
        vote,
    },
    state() {
        return {
            // 앱의 루트 스테이트 저장

        }
    }
})

export default store;