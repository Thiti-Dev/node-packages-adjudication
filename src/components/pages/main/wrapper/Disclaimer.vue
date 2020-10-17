<template>
    <div v-if="!isViewing">
        <v-alert
            class="disclaimer"
            outlined
            type="warning"
            prominent
            border="left"
        >
            Disclaimer: This website's using the statistic data from the npm.js website directly (visit them instead if you want)
        </v-alert>
        <v-btn
            @click="proceed()"
            class="proceed_btn"
            depressed
            color="primary"
            >
            Proceed
        </v-btn>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Disclaimer extends Vue{
    @Prop() isViewing!: boolean

    @Emit('onAccept')
    proceed(){
        return true
    }

}
</script>
<style lang="scss" scoped>
.disclaimer{
    margin-top: 100px;
}
.proceed_btn{
    float: right;
}
</style>