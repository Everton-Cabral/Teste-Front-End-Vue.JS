<template>
    <div class="c-repositories">
        <div v-for="repository in visiblerepositories" :key="repository.id">
            <AppRepository 
                :name="repository.name"
                :description="repository.description"
                :stars="repository.stargazers_count"
                :id="repository.id"
            />
        </div>
        <AppShowButton 
            name="Ver mais"
            @click="showMore = true"
        />
    </div>
</template>

<script>
import AppRepository from '../repository/AppRepository'
import { mapState } from 'vuex';
import AppShowButton from '../buttons/AppShowButton';


export default {    
    name:'AppRepositorie',
    
    data(){
        return{
            showMore: false
        }
    },
    components:{
    AppRepository,
    AppShowButton
    
},
    computed:{
        ...mapState([
            'repositories'
        ]),
        visiblerepositories() {
             return this.showMore ? this.repositories : this.repositories.slice(0, 3)
        }
    }

}
</script>


<style lang="scss" scoped>



</style>
