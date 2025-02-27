<template lang='pug'>
footer.Footer
    .content
        .info-and-logo
            .logo
                NuxtLink(to='/')
                    IconImg(name="mainLogo")
            .info
                .help
                    Heading(hSize='h5')
                        Text.semi Помощь и сервис
                    .contact
                        Text.bold ТГ 
                        Text @vivecreative
                    .contact
                        Text.bold Почта 
                        Text vivecreative@ya.ru
                    .contact
                        Text.bold ИНН 
                        Text 0000000000000000
                Line.vertical.vertical-gr-to-light
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
                                Text(fontSize="1rem") Тарифы
                        li 
                            NuxtLink(to='/')
                                Text(fontSize="1rem") Контакты
        .messangers
            .left-line
                Line.gr-to-light
            .messangers-icons
                NuxtLink(to='/')
                    IconImg(name="telegramIcon")
                NuxtLink(to='/')
                    IconImg(name="instagramIcon")
                NuxtLink(to='/')
                    IconImg(name="vkIcon")
                NuxtLink(to='/')
                    IconImg(name="youtubeIcon")
            .right-line
                Line.gr-to-dark
</template>

<script lang='ts' setup>

</script>

<style lang='sass' scoped>
.Footer
    +flex($justify-content: center, $align-items: start)

    .content
        width: 56rem
        +flex($direction: column, $align-items: center, $gap: 1.75)
    
        .info-and-logo
            +flex($gap: 10)
            width: 47.1rem

            .logo
                width: 8.55rem
                height: 3.5rem
            
            .info
                +flex($gap: 4.75, $align-items: center)
                
                .help
                    +flex($direction: column, $gap: .7)
                    width: 15.3rem

                    .contact
                        +flex(row, $gap: .5)

                ul
                    +flex(column, $gap: .7)

                    a
                        text-decoration: none
                        color: #FFFFFF
                        +transition(color, .3)

                        &:hover
                            color: rgba(255, 255, 255, .7)
        .messangers
            +flex(row, $gap: 1.6, $align-items: center)
            width: 100%
        

            .left-line
                width: 100%
    
            .right-line
                width: 24%
</style>