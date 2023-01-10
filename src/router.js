import { createRouter, createWebHashHistory } from "vue-router"
import Portofolio from '@/view/Portofolio.vue'
import Profil from '@/view/Profil.vue'
import Resume from '@/view/Resume.vue'

const route = [
    {
        name: 'profil',
        path: '/',
        component: Profil,
    },
    {
        name: 'resume',
        path: '/resume',
        component: Resume,
    },
    {
        name: 'portofolio',
        path: '/portofolio',
        component: Portofolio,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: route
})

export default router;