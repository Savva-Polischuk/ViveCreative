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
    width: 100%

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

        // &:-webkit-autofill,
        // &:-webkit-autofill:hover,
        // &:-webkit-autofill:focus,
        // &:-webkit-autofill:active
        //     transition: background-color 5000s ease-in-out 0s;
        //     -webkit-text-fill-color: #fff !important;
</style>