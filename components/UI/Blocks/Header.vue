<template lang='pug'>
header.Header
    div.content
        div.plug plug
        nav
            ul
                li
                    a(href="#")
                        Text.regular(fontSize="1rem") Услуги
                li 
                    a(href="#")
                        Text.regular(fontSize="1rem") О нас
                li 
                    a(href="#")
                        Text.regular(fontSize="1rem") Контакты
        Button Заказать проект
</template>

<script lang='ts' setup>

</script>

<style lang='sass' scoped>
.plug
    width: 3.3rem
    height: 2.1rem
    background-color: white
    color: black



.Header
    +flex(row, center, center)
    height: 5.1rem
    background: linear-gradient(to right, rgba(52, 52, 52, 0.2), rgba(86, 86, 86, 0.2), rgba(52, 52, 52, 0.2))

.content
    +flex(row, space-between, center)
    width: 56rem

ul
    +flex(row, space-between, center)
    width: 23.9rem

a
    text-decoration: none
    color: #FFFFFF
</style>