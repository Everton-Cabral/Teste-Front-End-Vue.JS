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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');
    .c-navbar{
        font-family: 'Inter', sans-serif; 
        height: 84px;
        background-color: #D9D9D9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: space-between;
        align-items: center;
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

            &__nav1{
                padding-right: 30px;
            }
            
        }
    }

</style>
