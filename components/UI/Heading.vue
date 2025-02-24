<template lang='pug'>
h1.Heading(v-if="props.hSize === 'h1'")
    slot

h2.Heading(v-else-if="props.hSize === 'h2'")
    slot

h3.Heading(v-else-if="props.hSize === 'h3'")
    slot

h4.Heading(v-else-if="props.hSize === 'h4'")
    slot

h5.Heading(v-else="props.hSize === 'h5'")
    slot
</template>

<script lang='ts' setup>
type HSize = "h1" | "h2" | "h3" | "h4" | "h5" 

interface Heading {
    hSize: HSize // размер заголовка
}

const props = defineProps<Heading>()
</script>

<style lang='sass' scoped>
h1
        font-size: 48px

h2
        font-size: 50px

h3
        font-size: 40px

h4
        font-size: 36px

h5
        font-size: 32px

h1, h2, h3, h4, h5
    &.gradient
        color: transparent
        background-clip: text
        background-image: linear-gradient(to right, rgba(255, 255, 255, .5), rgba(255, 255, 255, 1), rgba(255, 255, 255, .5))
        white-space: nowrap
        width: min-content
    

</style>