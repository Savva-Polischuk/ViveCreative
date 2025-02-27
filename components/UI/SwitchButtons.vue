<template lang='pug'>
.SwitchButtons(v-if="props.labels")
    .radio-button(v-for="label in props.labels")
        input(
            v-model="check"
            :id="label.id"
            :value="label.id"
            type="radio"
            name="radio"
        )
        label(:for="label.id") {{ label.text }}
</template>

<script lang='ts' setup>
interface Label {
    id: string
    text: string
}
interface SwitchButtons {
    labels: Label[]
}

const props = defineProps<SwitchButtons>()
const check = defineModel()
</script>

<style lang='sass' scoped>
.SwitchButtons
    +flex(row, center, center, $gap: 58)
    height: 3rem

    .radio-button
        label
            +flex(row, center, center)
            background-color: transparent
            border: 1px solid white
            border-radius: .5rem
            width: 16.1rem
            height: 2.5rem
            font: inherit
            font-weight: 700
            color: inherit
            cursor: pointer
            +transition([transform, color, border-color], .3)

            &:hover
                color: #bbb
                border-color: #bbb

        input[type=radio]
            display: none

            &:checked + label
                transform: scale(1.12)
                background-color: #fff
                color: #000
                cursor: default    
</style>