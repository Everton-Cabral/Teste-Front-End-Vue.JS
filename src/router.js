import { createRouter, createWebHistory } from 'vue-router'
import AppSearchBar from './components/searchbar/AppSearchBar'
import AppUsers from './components/users/AppUsers'
import AppRepositories from './components/repositories/AppRepositories'
import AppFavoriteRepositories from './components/favoriterepositories/AppFavoriteRepositories'
import AppUserDetail from './components/userdetail/AppUserDetail'
import AppNotFound from './components/notfound/AppNotFound'


const routes = [
    { path: '/', component: AppSearchBar},
    { name: 'users', path: '/users', component: AppUsers},
    { name: 'repositories', path: '/repositories', component: AppRepositories},
    { path: '/favorite', component: AppFavoriteRepositories},
    { path: '/userdetail', component: AppUserDetail},
    { path: '/:pathMatch(.*)*', component: AppNotFound},
]

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })