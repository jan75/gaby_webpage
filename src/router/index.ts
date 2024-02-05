import { createRouter, createWebHistory } from 'vue-router'
import AktuellesView from '@/views/AktuellesView.vue'
import ContactView from '@/views/ContactView.vue'
import AusdruckView from '@/views/AusdruckView.vue'
import AboutView from '@/views/AboutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AktuellesView
    },
    {
      path: '/ausdruck',
      name: 'ausdruck',
      component: AusdruckView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
