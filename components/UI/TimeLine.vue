<template lang='pug'>
.TimeLine
    .container(v-for="stage in props.stages")
        .content {{ stage.text }}
</template>

<script lang='ts' setup>
interface Stage {
    order: number
    text: string
}
interface TimeLine {
    stages: Stage[]
}

const props = defineProps<TimeLine>()
</script>

<style lang='sass' scoped>
.TimeLine
    position: relative

    &:after
        content: ''
        position: absolute
        width: 1px
        background-color: white
        top: 0
        bottom: 0
        left: 50%
        margin-left: -3px

    .container
        padding: 10px 40px
        position: relative
        background-color: #fff
        width: 50%
        left: 0

        .content
            color: #000
</style>