<template lang='pug'>
.Input
    label(
        v-if="props.label"
        :class="{required: props.isRequired}"
        :for="props.name"
        ) {{ props.label }}
    input(
        v-model.trim="inputModel"
        :name="props.name"
        :type="props.type"
        :required="isRequired"
        :pattern="inputPattern(props.type)"
        maxlength="200")
</template>

<script lang='ts' setup>
type InputType = 'text' | 'tel' | 'email' 

interface Input {
    name: string // Уникальное название для input
    label?: string // Текст лэйбла, который над полем ввода (если не указать то лэйбла не будет)
    isRequired?: boolean // true если обязательно (появится звездочка над лэйблом)
    type?: InputType // тип инпута (текст, телефон, почта) по-умолчанию текст
}

const props = withDefaults(defineProps<Input>(), {
    type: 'text'
})
const inputModel = defineModel<string>()

const inputPattern = (type: InputType) => {
    switch (type) {
        case 'tel':
            return '^[\+]?[0-9 ]{3,45}$'
    }
}
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
        //     transition: background-color 5000s ease-in-out 0s
        //     -webkit-text-fill-color: #fff !important
</style>