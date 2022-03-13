import { createRouter, createWebHistory } from 'vue-router'

import CoachList from "../components/coaches/CoachList.vue"
import CoachDetail from "../components/coaches/CoachDetail.vue"
import CoachRegister from "../components/coaches/CoachRegister.vue"
import ContactCoach from "../components/requests/ContactCoach.vue"
import ReqReceived from "../components/requests/ReqReceived.vue"
import NotFound from "../components/NotFound.vue"

const routes = [
  { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    { path: '/coaches/:id', component: CoachDetail, children: [
      { path: 'contact', component: ContactCoach } // /coaches/:id/contact
    ] },
    { path: '/register', component: CoachRegister },
    { path: '/requests', component: ReqReceived },
    { path: '/:notFound(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
