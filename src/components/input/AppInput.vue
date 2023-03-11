<template>
    <div class="c-input">
      
        <input type="text" 
            placeholder="Buscar..." 
            class="c-input__search" 
            v-model="text"
            @keypress.enter="submite()"
        >
        <span class="material-symbols-outlined">search</span>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

export default {
    name:'AppInput',

    data(){
        return{
            text:'',
        }
    },
    methods:{
        ...mapMutations([
            'changeAlert',
            'sendingUsers',
            'sendingRepositories'
        ]),
        submite(){
            
            if(this.userSearch){
                fetch(`https://api.github.com/search/users?q=${this.text}&page=1`)
                .then(response => response.json())
                .then(data => {
                    if(data.items.length === 0){
                        this.changeAlert()
                        this.text = ''
                    }
                    this.sendingUsers(data.items)
                })

                this.$router.push('/users')
            }else{
                fetch(`https://api.github.com/search/repositories?q=${this.text}&page=1`)
                .then(response => response.json())
                .then(data => { 
                    if(data.items.length === 0){
                        this.changeAlert()
                        this.text = ''
                    }
                    this.sendingRepositories(data.items)
                })
                this.$router.push('/repositories')
            }
        }
    },
    computed:{
        ...mapState([
            'repositorySearch',
            'userSearch',
        ])
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
    .c-input{
        &__search{
            width: 780px;
            height: 71px;
            border-radius: 10px;
            font-family: $font-principal;
            font-size: 24px;
            font-weight: 400;
            padding-left: 20px;
            color: #000000;
        }
    }
    .material-symbols-outlined {
         font-size: 50px;
         position: absolute;
         margin-left: -65px;
         margin-top: 10px;
    }
</style>
