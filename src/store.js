import { createStore } from 'vuex'
export const store = createStore({
    state(){
        return{
            userSearch: false,
            alert: false
        }
    },
    mutations:{
        changeSearch(state){
            state.userSearch = !state.userSearch  
        },
        closeAlert(state){
            state.alert = false
        }
    }
})

