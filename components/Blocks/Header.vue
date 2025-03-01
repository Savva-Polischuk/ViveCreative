<template lang='pug'>
header.Header
    .content
        NuxtLink.logo(
            to='/',
            aria-label="Vive Creative логотип")
            IconImg(name="icon:mainLogo")
        nav
            ul
                li
                    NuxtLink(to='/')
                        Text(fontSize="1rem") Услуги
                li 
                    NuxtLink(to='/')
                        Text(fontSize="1rem") О нас
                li 
                    NuxtLink(to='/')
                        Text(fontSize="1rem") Контакты
        Button Заказать проект
</template>

<script lang='ts' setup>

</script>

<style lang='sass' scoped>
.Header
    +flex(row, center, center)
    height: 5.1rem
    background: linear-gradient(to right, rgba(52, 52, 52, 0.2), rgba(86, 86, 86, 0.2), rgba(52, 52, 52, 0.2))

    .content
        +flex(row, space-between, center)
        width: 56rem

        .logo
            width: 3.3rem
            height: 2.1rem

        ul
            +flex($align-items: center, $gap: 6.25)
            width: 23.9rem

            a
                text-decoration: none
                color: #FFFFFF
                +transition(color, .3)

                &:hover
                    color: rgba(255, 255, 255, .7)
</style>