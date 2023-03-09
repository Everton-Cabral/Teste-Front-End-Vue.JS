<template>
    <div class="c-favorites">
        <div class="c-favorites__title">
            <img src="../../assets/github.png" alt="github" class="c-favorites__title__img">
            <span>Repositórios Favoritos</span>
        </div>

        <div class="c-favorites__repositories"
             v-for="repository in favoriterepositories" 
             :key="repository.id"
        >
            <AppRepository
                :name="repository.name"
                :description="repository.description"
                :stars="repository.stars"
                :id="repository.id"
            />
        </div>
    </div>
</template>

<script>
import AppRepository from '../repository/AppRepository'
import { mapState } from 'vuex'

export default {
    name:'AppFavoriteRepositories',

    components:{
        AppRepository
    },
    computed:{
        ...mapState([
            'favoriterepositories'
        ])
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
.c-favorites{

    &__title{
        font-family: $font-favorite;
        font-weight: 400;
        font-size: 45px;
        @extend .display-flex;
        @extend .align-items-center;
        padding: 20px 0px 0px 30px;
       

        &__img{
            width: 50px;
            height: 50px;
            margin-right: 15px;
        }
    }
}

</style>
