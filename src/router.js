import { createRouter, createWebHistory } from 'vue-router'
import AppSearchBar from './components/searchbar/AppSearchBar'
import AppUsers from './components/users/AppUsers'


const routes = [
    { path: '/', component: AppSearchBar},
    { path: '/users', component: AppUsers}
]

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })