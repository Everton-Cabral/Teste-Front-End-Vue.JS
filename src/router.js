import { createRouter, createWebHistory } from 'vue-router'
import AppSearchBar from './components/searchbar/AppSearchBar'
import AppUsers from './components/users/AppUsers'
import AppRepositories from './components/repositories/AppRepositories'
import AppFavoriteRepositories from './components/favoriterepositories/AppFavoriteRepositories'
import AppUserDetail from './components/userdetail/AppUserDetail'


const routes = [
    { path: '/', component: AppSearchBar},
    { path: '/users', component: AppUsers},
    { path: '/repositories', component: AppRepositories},
    { path: '/favorite', component: AppFavoriteRepositories},
    { path: '/userdetail', component: AppUserDetail},
]

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })