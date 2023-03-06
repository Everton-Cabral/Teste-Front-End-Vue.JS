<template>
    <div class="c-navbar">
        <div class="c-navbar__title">
           <span class="c-navbar__title__main">
                GitHub
            </span>   

           <em class="c-navbar__title__subtitle">
                Search
            </em>
        </div>

        <div class="c-navbar__navigation">
            <span class="c-navbar__navigation__nav1">
                INÍCIO
            </span>

            <span class="c-navbar__navigation__nav2">
                FAVORITOS
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'AppNavbar'
}
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
    .c-navbar{
        font-family: $font-principal; 
        height: 84px;
        background-color: #D9D9D9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        @extend .display-flex;
        @extend .justify-content-space-between;
        @extend .align-items-center;
        padding: 0px 60px 0px 25px;
      

        &__title{
            font-size: 32px;
          
            &__main{
                font-weight: bold;
            }
        }

        &__navigation{
            font-size: 20px;
            font-weight: 700;
            width: 200px;
            @extend .display-flex;
            @extend .justify-content-space-between;
            

            &__nav1, &__nav2:hover{
                cursor: pointer;
            }
            
        }
    }

</style>
