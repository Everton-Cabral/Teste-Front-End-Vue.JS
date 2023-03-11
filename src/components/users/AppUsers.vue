<template>
    <div class="c-users">
     <div v-for="user in visibleUsers" :key="user.id" class="c-users__user">
         <AppUser 
            :img="user.avatar_url"
            :name="user.login"
            @click="userdetail(user.login)"
         />
     </div>
     <div class="c-users__button">

     </div>
     <AppShowButton 
        v-if="!showMore" @click="showMore = true"
        name="Ver mais"
     />
     
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import AppUser from '../user/AppUser'
import AppShowButton from '../buttons/AppShowButton'
export default {
    name: "AppUsers",

    data(){
        return{
            showMore: false,
            teste:''
        }
    },
    components:{
        AppUser,
        AppShowButton
    },
    methods:{
        ...mapMutations([
            'selecteduser',
            'sendrepositories'
        ]),

        userdetail(params){
            fetch(`https://api.github.com/users/${params}`)
                .then(response => response.json())
                .then(data => {
                    this.selecteduser(data)
                });
            fetch(`https://api.github.com/users/${params}/repos?direction=desc`)
                .then(response => response.json())
                .then(data => {
                    this.sendrepositories(data)
                    this.$router.push('/userdetail')
                });    
        }
    },
    computed:{
        ...mapState([
            'users'
        ]),

        visibleUsers() {
             return this.showMore ? this.users : this.users.slice(0, 3)
        }
    },
   
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
    .c-users{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        &__user{
            width: 100%;
        }    
        &__button{
            margin-top: 40px;
        }
       
    }
</style>
