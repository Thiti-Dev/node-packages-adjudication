<template>
    <v-container>
        <v-row justify="center">
            <h1>Frontend Framework Popularity 2020-2021</h1>
            <Disclaimer @onAccept="proceedThroughTheDisclamation" :isViewing="isViewing"/>        
        </v-row>
        <div v-if="isLoading && isViewing" class="text-center mt-15">
            <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
            ></v-progress-circular>
        </div>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Disclaimer from './wrapper/Disclaimer.vue'
@Component({
    components: {Disclaimer}
})
export default class Main extends Vue{
    private isViewing = false;
    private isLoading = false;
    
    public proceedThroughTheDisclamation(): void{
        this.isViewing = true
        this.isLoading = true
    }
}
</script>
<style lang="scss" scoped>

</style>