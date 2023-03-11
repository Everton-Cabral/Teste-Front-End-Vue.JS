<template>
    <div class="c-userdetail">
        <div class="c-userdetail__info">
            <img :src="user.avatar_url" :alt="user.name" class="c-userdetail__info__image">

            <div class="c-userdetail__info__name">
                <span>{{ user.name }}</span>
            </div>
             <div  class="c-userdetail__info__nick">
                 <span>{{ user.login }}</span>
             </div>  
           
            <div class="c-userdetail__info__add">
               
               <img src="../../assets/company.png" alt="company" class=" c-userdetail__info__add__icon">
                <span>{{ user.company }}</span>
            </div> 

            <div class="c-userdetail__info__add">
                <img src="../../assets/location.png" alt="location" class=" c-userdetail__info__add__icon">
                {{ user.location }}
            </div>

            <div class="c-userdetail__info__add">
                <img src="../../assets/repositories.png" alt="repositories" class=" c-userdetail__info__add__icon">
                {{ user.public_repos }}
            </div>

            <div class="c-userdetail__info__add">
                <img src="../../assets/followersl.png" alt="followers " class=" c-userdetail__info__add__icon">
                {{ user.followers }}
            </div>
        </div>

        <div>
            <AppRepository />
        </div>
        
    </div>
</template>

<script>
import { mapState } from 'vuex'
import AppRepository from '../repository/AppRepository'
export default {
    name:'AppUserDetail',
    components:{
        AppRepository,
    },
    computed:{
        ...mapState([
            'user',
            'userrepositories'
        ])
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
.c-userdetail{
    padding: 20px;
    font-family: $font-user;
    font-weight: 300;


    &__info{
        width: 339px;
        height: 644px;
        background-color: #D9D9D9;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 19px;
     
      

        &__image{
            width: 300px;
            height: 300px;
            border-radius: 5px;
        }
        &__name{
            font-size: 36px;
        }
        &__nick{
            font-size: 24px;
            color:#757575;
        }
        &__add{
            font-size: 20px;
            color:#757575;
            margin-top: 15px;
           
            &__icon{
                width: 22px;
                height: 18px;
                margin-right: 10px;
            }
        }
    }

}

</style>
