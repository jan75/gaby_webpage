import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import SprecherinView from '@/views/SprecherinView.vue'
import KuenstlerinView from '@/views/KuenstlerinView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/sprecherin',
      name: 'sprecherin',
      component: SprecherinView
    },
    {
      path: '/kuenstlerin',
      name: 'kuenstlerin',
      component: KuenstlerinView
    }
  ]
})

export default router
