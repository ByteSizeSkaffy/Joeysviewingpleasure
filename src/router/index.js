import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/information',
        name: 'information',
        component: () => import('../components/Information.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('../components/SignUp.vue')
    },
    {
        path: '/reservation',
        name: 'reservation',
        component: () => import('../components/Reservations.vue')
    },
    {
        path: '/',
        name: 'root',
        component: () => import('../components/SignUp.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../components/AdminHome.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../components/Home.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
