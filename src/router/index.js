import { createRouter, createWebHistory } from 'vue-router'
import AddTodo from '../views/AddTodo.vue'
import Page from '../views/Pagination.vue'
const routes = [
  {
    path: '/',
    name: 'AddTodo',
    component: AddTodo
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: Page
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
