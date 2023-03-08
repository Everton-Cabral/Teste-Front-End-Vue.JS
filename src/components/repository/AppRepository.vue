<template>
    <div class="c-repository">
        <div class="c-repository__title">
            <span>{{ name }}</span>
            <img src="../../assets/star.png" alt="star" class="c-repository__title__starbig">
        </div>

        <div class="c-repository__description">
           {{ description }}
        </div>
        
        <div class="c-repository__star">
            <img src="../../assets/star.png" alt="star" class="c-repository__star__starkid">
            {{ stars }}
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    name:'AppRepository',

    props:{
        name:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        stars:{
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
    .c-repository{
        font-family: $font-user;
        padding: 30px 50px 30px 50px;

        &__title{
            font-size: 36px;
            font-weight: 400;
            @extend .display-flex;
            @extend .justify-content-space-between;
        }
        &__description{
            font-size: 24px;
            margin-top: 10px;
        }
        &__star{
            margin-top: 10px;
            margin-bottom: 10px;

            &__starkid{
                width: 24px;
                height: 22px;
            }
        }
    }
</style>
