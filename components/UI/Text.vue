<template lang='pug'>
p.Text(
    :class="props.fontWeight"
)
    slot
</template>

<script lang='ts' setup>
type FontWeight = "thin" | "light" | "regular" | "medium" | "semi" | "bold"

interface Text {
    fontWeight?: FontWeight
}

const props = defineProps<Text>()
</script>

<style lang='sass' scoped>
.Text
    
    &.thin
        font-weight: 100

    &.light
        font-weight: 300

    &.regular
        font-weight: 400

    &.medium
        font-weight: 500
    
    &.semi
        font-weight: 600

    &.bold
        font-weight: 700

</style>
