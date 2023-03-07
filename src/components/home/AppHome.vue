<template>
    <div class="c-home">
        <AppNavbar />
        <router-view></router-view>
    </div>
</template>

<script>
import AppNavbar from '../navbar/AppNavbar'


export default {
    name:'AppHome',
    
    components:{
        AppNavbar  
    }
}
</script>

<style lang="scss" scoped>

</style>
