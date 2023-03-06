<template>
    <div class="c-homebutton">
        {{ text }}
    </div>
</template>

<script>
export default {
    name:'AppHomeButton',
    props:{
        text:{
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';

.c-homebutton{
    border: 2px solid #000000;
    border-radius: 5px;
    width: 186px;
    height: 51px;
    font-size: 20px;
    font-weight: 700;
    @extend .display-flex;
    justify-content: center;
    @extend .align-items-center;
    font-family: $font-principal;
    margin: 0px 15px 0px 15px;
}
</style>
