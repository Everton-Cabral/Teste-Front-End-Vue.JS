<template>
    <div class="c-repositories">
        <div v-for="repository in repositories" :key="repository.id">
            <AppRepository 
                :name="repository.name"
                :description="repository.description"
                :stars="repository.stargazers_count"
            />
        </div>
          
    </div>
</template>

<script>
import AppRepository from '../repository/AppRepository'
import { mapState } from 'vuex';
export default {    
    name:'AppRepositorie',

    components:{
        AppRepository
    },
    computed:{
        ...mapState([
            'repositories'
        ])
    }

}
</script>


<style lang="scss" scoped>



</style>
