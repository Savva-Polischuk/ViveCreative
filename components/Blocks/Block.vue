<template lang='pug'>
<<<<<<< HEAD

//- При объявлении компонента пишем переменную в kebab-case для добавления заголовка
//- Например (title-block = "В чем наше преимущество")

section.Block(:aria-label="props.titleBlock")
    .left-line
        Line.gr-to-light
    Heading(hSize='h2')
        Text.bold {{titleBlock}}
    .right-line
        Line.gr-to-dark
=======
section.Block(:aria-label="props.titleBlock")
    .section-header(v-if="!props.isMain")
        .left-line
            Line.gr-to-light
        Heading(hSize='h2') {{ props.titleBlock }}
        .right-line
            Line.gr-to-dark
>>>>>>> 0a48d7a58cd7b093b991fb265c567764f7c0cee3
    slot
</template>

<script lang='ts' setup>

interface Title {
<<<<<<< HEAD
    titleBlock?: String // заголовок блока
=======
    titleBlock?: string // заголовок блока
    isMain?: boolean    // для главного блока
>>>>>>> 0a48d7a58cd7b093b991fb265c567764f7c0cee3
}

const props = defineProps<Title>()
</script>

<style lang='sass' scoped>
.Block
<<<<<<< HEAD
    +flex($align-items: center, $gap: 3.5)

    .left-line
        width: 16%
    
    .right-line
        width: 100%
        overflow: hidden
    
    .Text
        white-space: nowrap
=======
    min-height: 20rem
    background-repeat: no-repeat
    background-position-x: center

    .section-header
        +flex($align-items: center, $gap: 3.5)

        .left-line
            width: 31%
            max-width: 16.5rem
        
        .right-line
            width: 100%
            max-width: 51.5rem
        
        .Heading
            white-space: nowrap
>>>>>>> 0a48d7a58cd7b093b991fb265c567764f7c0cee3
</style>