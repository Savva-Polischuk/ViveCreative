<template lang='pug'>
section.Block(:aria-label="props.titleBlock")
    .section-header(v-if="!props.isMain")
        .left-line
            Line.gr-to-light
        Heading(hSize='h2') {{ props.titleBlock }}
        .right-line
            Line.gr-to-dark
    slot
</template>

<script lang='ts' setup>

interface Title {
    titleBlock?: string // заголовок блока
    isMain?: boolean    // для главного блока
}

const props = defineProps<Title>()
</script>

<style lang='sass' scoped>
.Block
    min-height: 20rem
    background-repeat: no-repeat
    background-position-x: center

    .section-header
        +flex($align-items: center, $gap: 3.5)

        .left-line
            width: 31%
        
        .right-line
            width: 100%
        
        .Heading
            white-space: nowrap
</style>