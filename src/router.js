import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/views/Login.vue"
import Vote from "@/components/views/Vote.vue"
import NotFound from "@/components/views/NotFound.vue"
import End from "@/components/views/End.vue"
import Admin from "@/components/views/Admin.vue"

const routes = [
    {
        path: '/comma-vote',
        name: 'Login',
        component: Login,
    },
    {
        path: '/comma-vote/vote/:id',
        name: 'vote',
        component: Vote,
    },
    {
        path: '/comma-vote/end',
        name: 'end',
        component: End,
    },
    {
        path: '/comma-vote/865935',
        name: 'admin',
        component: Admin,
    },
    {
        path: '/comma-vote/:catchAll(.*)',
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

