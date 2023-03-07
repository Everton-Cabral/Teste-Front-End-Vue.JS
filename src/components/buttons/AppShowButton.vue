<template>
    <div class="c-showbutton">
        Ver mais
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
.c-showbutton{
    width: 168px;
    height: 46px;
    border: 2px solid #000000;
    border-radius: 10px;
    font-family: $font-user;
    font-size: 24px;
    font-weight: 400;
    color:#000000;
    @extend .display-flex;
    @extend .justify-content-center;
    @extend .align-items-center;
}
.c-showbutton:hover{
    cursor: pointer;
}
</style>
