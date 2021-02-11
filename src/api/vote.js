import api from "./api"

export async function submitVote(students) {
    return api.post("vote/submit", {
        students: students,
    });
}

export default {
    submitVote,
}