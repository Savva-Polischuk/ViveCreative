<template lang='pug'>
.TimeLine(v-if="props.stages")
    .time(:style="{bottom: (props.isDoubleLastLine ? '23px' : '11px')}")
    .container(
        v-for="stage in props.stages"
        :class="stage.order % 2 === 0 ? 'left' : 'right'"
        ref="containerRef")
        .line(v-if="stage.order % 2 === 1")
        .content {{ stage.text }}
        .line(v-if="stage.order % 2 === 0")
</template>

<script lang='ts' setup>
interface Stage {
    order: number
    text: string
}
interface TimeLine {
    stages: Stage[]
    isDoubleLastLine?: boolean
}

const props = defineProps<TimeLine>()
// const containerRef = ref()

// const timeComputedStyle = computed(() => {
//     if (containerRef.value) {
//         // console.log(containerRef.value[0])
//         return {
//             top: containerRef.value[0].offsetHeight / 2 + 'px',
//             bottom: ((containerRef.value[props.stages.length - 1].offsetHeight / 2 - 1.5).toString() + 'px')
//         }
//     }
// })
   
</script>

<style lang='sass' scoped>
.TimeLine
    +flex(column, $gap: 6.4)
    position: relative
    margin: 0 auto
    box-sizing: border-box

    .time
        content: ''
        position: absolute
        width: 3px
        background-color: white
        top: 11px
        bottom: 11px
        left: 50%
        margin-left: -3px

    .container
        +flex($align-items: center)
        position: relative
        background-color: transparent
        width: 50%
        box-sizing: border-box

        .line
            height: 0
            min-width: 85px
            border: 1.5px solid white

        &.left
            +flex($justify-content: flex-end, $gap: 1)
            left: 0

            // &.line
            //     content: ""
            //     height: 0
            //     position: absolute
            //     top: 35px
            //     width: 85px
            //     height: 0
            //     z-index: 1
            //     right: 0
            //     border: 1.5px solid white

        &.right
            +flex($justify-content: flex-start, $gap: 1)
            left: 50%

            // &.line
            //     content: ""
            //     height: 0
            //     position: absolute
            //     top: 35px
            //     width: 85px
            //     height: 0
            //     z-index: 1
            //     left: -3px
            //     border: 1.5px solid white

        .content
            // padding: 23px 105px
            position: relative
            border-radius: 6px
            box-sizing: border-box
            white-space: pre
</style>