<template lang='pug'>
p.Heading(
    :class="props.titleSize"
)
    slot
</template>

<script lang='ts' setup>
type TitleSize = "h1" | "h2" | "h3" | "h4" | "h5" | "gradient" | "thin" | "light" | "regular" | "medium" | "semi" | "bold"

interface Heading {
    titleSize?: TitleSize
}

const props = defineProps<Heading>()
</script>

<style lang='sass' scoped>
.Heading

    &.h1
        font-size: 50px

    &.h2
        font-size: 48px

    &.h3
        font-size: 40px

    &.h4
        font-size: 36px

    &.h5
        font-size: 32px

    &.gradient
        color: transparent
        background-clip: text
        background-image: linear-gradient(to right, #a6a6a6, #f0f0f0, #a6a6a6)
        white-space: nowrap
        width: min-content
    
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