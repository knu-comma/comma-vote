import api from "./api"

export async function login(students) {
    return api.post("auth/check", {
        students: students
    })
}

export default {
    login,
}