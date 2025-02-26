<template lang='pug'>
p.Text(
    :class="props.fontWeight"
    :style="{fontSize: props.fontSize}"
)
    slot
</template>

<script lang='ts' setup>
type FontWeight = "thin" | "light" | "medium" | "semi" | "bold"

interface Text {
    fontWeight?: FontWeight // начертание текста
    fontSize?: string // размер шрифта
}

const props = defineProps<Text>()
</script>

<style lang='sass' scoped>
.Text
    font-weight: 400

    &.grey
        color: rgba(255, 255, 255, .6)
    
    &.thin
        font-weight: 100

    &.light
        font-weight: 300

    &.medium
        font-weight: 500
    
    &.semi
        font-weight: 600

    &.bold
        font-weight: 700

</style>
