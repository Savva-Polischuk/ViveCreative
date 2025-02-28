<template lang='pug'>
Header

Block(isMain).main
    .main-content
        Heading.h2.gradient Создаем, настраиваем, продвигаем
        Heading.h1.gradient Вы — наслаждаетесь результатом

Block(titleBlock="Наши ценности").characteristics
    .characteristics-content
        .top
            .char-top(v-for="item in characteristicsTop")
                Line.vertical.gr-to-dark
                .text
                    Text.bold(fontSize="1.8rem") {{item.char}}
                    Text.medium(style="opacity: .6") {{item.addition}}
            Line.vertical.gr-to-dark
        .bottom
            .char-bottom(v-for="item in characteristicsBottom")
                .text
                    Text.bold(fontSize="1.8rem") {{item.char}}
                    Text.medium(style="opacity: .6") {{item.addition}}
                Line.vertical.gr-to-dark

Footer
</template>

<script lang='ts' setup>
    const characteristicsTop = [
        {char: 'Качество', addition: 'Совершенство во всем'},
        {char: 'Инновации', addition: 'Технологии для роста'},
    ]
    const characteristicsBottom = [
        {char: 'Поддержка', addition: 'Всегда рядом'},
        {char: 'Индивидуальность', addition: 'Уникальные решения'},
        {char: 'Серьезность', addition: 'На деле, а не словах'},
    ]
</script>

<style lang='sass' scoped>
.main
    +flex($justify-content: center, $align-items: center)
    height: 34.5rem
    background-image: url("assets/backgrounds/mainPageBG.svg")
    background-position-y: center

    .main-content
        +flex(column, $align-items: center, $gap: 14.7)
        margin-bottom: 4rem

.characteristics
    height: 44.5rem
    background-image: url("assets/backgrounds/characteristicsBG.svg")
    background-position-y: 90%

    .characteristics-content
        +flex(column, center, center, $gap: 2.6)
        height: 40.7rem

        .top
            +flex(row, $gap: 4)
            height: 5.9rem

        .bottom
            +flex(row, $gap: 2.25)

        .char-top
            height: 5.9rem
            +flex($align-items: center, $gap: 4)

            .text
                +flex(column, $align-items: center)

        .char-bottom
            height: 5.9rem
            +flex($align-items: center, $gap: 2.25)

            .text
                +flex(column, $align-items: center)
</style>