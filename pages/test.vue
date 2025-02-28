<template lang='pug'>

</template>

<script lang='ts' setup>

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
                font-family: 'JosefinSans'
                color: rgba(255, 255, 255, .2)

            .adventage-text
                +flex(column, $gap: 1, $align-items: start)
                width: 32.25rem
                height: 9.3rem

        .to-left
            +flex(row-reverse, $align-items: center, $gap: 2.75)
            height: 14.25rem

            .number
                font-family: 'JosefinSans'

            .adventage-text
                +flex(column, $gap: 1, $align-items: end)
                width: 32.25rem
                height: 9.3rem
                text-align: right

</style>