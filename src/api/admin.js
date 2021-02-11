import api from "./api"

export async function getList() {
    return api.get('865935/list', {})
}

export async function deleteList() {
    return api.get('865935/delete', {})
}

export default {
    getList,
    deleteList,
}