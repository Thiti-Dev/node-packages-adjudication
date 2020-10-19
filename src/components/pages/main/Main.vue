<template>
    <v-container>
        <v-row v-if="!isViewing" justify="center">
            <h2>Node packages comparison</h2>
            <Disclaimer @onAccept="proceedThroughTheDisclamation" :isViewing="isViewing"/>        
        </v-row>
        <div v-if="isLoading && isViewing" class="text-center mt-15">
            <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
            ></v-progress-circular>
        </div>
        <Npc v-if="isViewing && !isLoading"/>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Disclaimer from './wrapper/Disclaimer.vue'
import Npc from './views/npc/Npc.vue'
@Component({
    components: {Disclaimer,Npc}
})
export default class Main extends Vue{
    private isViewing = false;
    private isLoading = false;
    
    public proceedThroughTheDisclamation(): void{
        this.isViewing = true
        this.isLoading = true
        setTimeout(() => {
                this.isLoading = false
        }, 1000);
    }
}
</script>
<style lang="scss" scoped>

</style>