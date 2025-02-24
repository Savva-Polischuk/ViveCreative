<template lang='pug'>
.Line
</template>

<script lang='ts' setup>
interface Props {
	isVertical?: boolean // true - вертикальная
}

const props = defineProps<Props>()
</script>

<style lang='sass' scoped>
.Line
    border-top: 1px solid #fff
    width: 100%
    height: 0

    &.vertical
        border-right: 1px solid #fff
        width: 0
        height: 100%

    &.gr-to-dark
        border: 1px solid transparent
        border-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, .5))
        -moz-border-image: -moz-linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, .5))
        -webkit-border-image: -webkit-linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, .5))
        border-image-slice: 1
    
    &.gr-to-light
        border: 1px solid transparent
        border-image: linear-gradient(to right, rgba(255, 255, 255, .5), rgba(255, 255, 255, 1))
        -moz-border-image: -moz-linear-gradient(to right, rgba(255, 255, 255, .5), rgba(255, 255, 255, 1))
        -webkit-border-image: -webkit-linear-gradient(to right, rgba(255, 255, 255, .5), rgba(255, 255, 255, 1))
        border-image-slice: 1
</style>