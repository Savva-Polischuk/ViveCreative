<template lang='pug'>
Header

Block.main(isMain)
    .main-content
        Heading.gradient(hSize="h2") Создаем, настраиваем, продвигаем
        Heading.gradient(hSize="h1") Вы — наслаждаетесь результатом

Block.characteristics(titleBlock="Наши ценности")
    .characteristics-content
        .top
            .char-top(v-for="item in characteristicsTop")
                Line.gr-to-dark(isVertical)
                .text
                    Text(fontSize="1.8rem", fontWeight="bold") {{item.char}}
                    Text(style="opacity: .6", fontWeight="medium") {{item.addition}}
            Line.gr-to-dark(isVertical)
        .bottom
            .char-bottom(v-for="item, index in characteristicsBottom")
                Line.gr-to-dark(v-if="index != 0", isVertical)
                .text
                    Text(fontSize="1.8rem", fontWeight="bold") {{item.char}}
                    Text(style="opacity: .6", fontWeight="medium") {{item.addition}}

Block.our-advantages(titleBlock="В чем наше преимущество")
    .our-advantages-body
        .advantage(v-for="item, index in advantages" :class="index % 2 == 0 ? 'to-left' : 'to-right'")
            Text.number(fontSize="19rem", fontWeight="bold" v-if="index != 0") 0{{index}}
            .adventage-text(v-if="index != 0")
                Heading(hSize="h3") {{item.advHead}}
                Text(fontSize="1.6rem", fontWeight="regular" style="opacity: .6") {{item.advDescription}}

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
    const advantages = [
        {advHead: '', advDescription: ''},
        {advHead: 'КОМПЛЕКСНЫЙ ПОДХОД', advDescription: 'создаем веб-решения, объединяя качество, функциональность и эффективность'},
        {advHead: 'ПОЛНЫЙ ЦИКЛ УСЛУГ', advDescription: 'от разработки и дизайна до SEO и аналитики, закрывая все потребности бизнеса'},
        {advHead: 'КОМАНДА ПРОФИ', advDescription: 'опытные специалисты обеспечивают надежную реализацию проектов.'},
        {advHead: 'РОСТ ВАШЕГО БИЗНЕСА', advDescription: 'долгосрочное сотрудничество и стратегический подход помогаютвам развиваться'}
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
            +flex(row, $gap: 5)
            height: 5.9rem
            margin-right: 1.5rem

        .bottom
            +flex(row, $gap: 2.25)

        .char-top
            height: 5.9rem
            +flex($align-items: center, $gap: 5)

            .text
                +flex(column, $align-items: center)

        .char-bottom
            height: 5.9rem
            +flex($align-items: center, $gap: 2.25)

            .text
                +flex(column, $align-items: center)

.our-advantages
    height: 100rem
    background-image: url('assets/backgrounds/advantagesBGLeft.svg'), url('assets/backgrounds/advantagesBGRight.svg')
    background-position: left, right

    .our-advantages-body
        +flex(column, center, center, $gap: 10)
        height: 91.75rem

        .to-right
            +flex(row, $align-items: center, $gap: 2.75)
            width: 54.25rem
            height: 14.25rem

            .number
                // font-family: 'JosefinSans'
                // src: url('../fonts/JosefinSans-Bold.ttf') format('truetype')
                // font-weight: 700
                // font-style: normal

            .adventage-text
                +flex(column, $gap: 1, $align-items: start)
                width: 32.25rem
                height: 9.3rem

        .to-left
            +flex(row-reverse, $align-items: center, $gap: 2.75)
            height: 14.25rem

            .number
                // font-family: 'JosefinSans'
                // src: url('../fonts/JosefinSans-Bold.ttf') format('truetype')
                // font-weight: 700
                // font-style: normal

            .adventage-text
                +flex(column, $gap: 1, $align-items: end)
                width: 32.25rem
                height: 9.3rem
                text-align: right

</style>