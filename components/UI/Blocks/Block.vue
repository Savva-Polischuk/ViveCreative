<template lang='pug'>

//- При объявлении компонента пишем переменную в kebab-case для добавления заголовка
//- Например (title-block = "В чем наше преимущество")

section.Block(:aria-label="props.titleBlock")
    .left-line
        Line.gr-to-light
    Heading(hSize='h2')
        Text.bold {{titleBlock}}
    .right-line
        Line.gr-to-dark
    slot
</template>

<script lang='ts' setup>

interface Title {
    titleBlock?: String // заголовок блока
}

const props = defineProps<Title>()
</script>

<style lang='sass' scoped>
.Block
    +flex($align-items: center, $gap: 3.5)

    .left-line
        width: 16%
    
    .right-line
        width: 100%
        overflow: hidden
    
    .Text
        white-space: nowrap
</style>