import { createStore } from 'vuex'
export const store = createStore({
    state(){
        return{
            userSearch: false
        }
    },
    mutations:{
   
            changeSearch(state){
                state.userSearch = !state.userSearch
            
        }
    }
})

