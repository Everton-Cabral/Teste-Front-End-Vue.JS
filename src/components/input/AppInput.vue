<template>
    <div class="c-input">
      
        <input type="text" placeholder="Buscar..." class="c-input__search">
        <span class="material-symbols-outlined">search</span>
       
    </div>
</template>

<script>
export default {
    name:'AppInput'
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
