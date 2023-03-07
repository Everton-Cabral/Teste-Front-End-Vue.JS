<template>
    <div class="c-home">
        <AppNavbar />
        <AppSearchBar />
    </div>
</template>

<script>
import AppNavbar from '../navbar/AppNavbar'
import AppSearchBar from '../searchbar/AppSearchBar'

export default {
    name:'AppHome',
    
    components:{
        AppNavbar,
        AppSearchBar
    }
}
</script>

<style lang="scss" scoped>

</style>
