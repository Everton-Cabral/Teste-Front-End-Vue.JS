import { createStore } from 'vuex'
export const store = createStore({
    state(){
        return{
            repositorySearch: true,
            userSearch: false,
            alert: false,
            users:[],
            repositories:[],
            favoriterepositories:[]
        }
    },
    mutations:{
        changeSearch(state, params){
            if(params === 'Repositório'){
                state.repositorySearch = true
                state.userSearch = false
            }else{
                state.repositorySearch = false
                state.userSearch = true
            } 
        },
        changeAlert(state){
            state.alert = !state.alert 
        },
        sendingUsers(state, params){
            state.users = params
        },
        sendingRepositories(state, params){
            state.repositories = params
        },
        addfavoriterepoitory(state, params){
            state.favoriterepositories.push(params)
        }
    }
})

