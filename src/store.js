import { createStore } from 'vuex'
export const store = createStore({
    state(){
        return{
            repositorySearch: true,
            userSearch: false,
            alert: false,
            users:[]
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
        }
    }
})

