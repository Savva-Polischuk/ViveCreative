<template lang='pug'>
.Input
    label(
        v-if="props.label"
        :class="{required: props.isRequired}"
        :for="props.name"
        ) {{ props.label }}
    input(
        v-model="inputModel"
        :name="props.name"
        )
</template>

<script lang='ts' setup>
interface Input {
    label: string
    isRequired?: boolean
    name: string
}

const props = defineProps<Input>()
const inputModel = defineModel()
</script>

<style lang='sass' scoped>
.Input
    +flex(column, $gap: .2)

    label
        color: rgba(255, 255, 255, .6)

        &.required:after
            content: "*"

    input
        padding: 0.1rem
        box-sizing: border-box
        background-color: transparent
        border-width: 0 0 1px 0
        border-color: rgba(255, 255, 255, .8)
        color: #fff
        outline: none
        font-size: 1.2rem 

</style>