<template lang='pug'>
footer.Footer
    .content
        .info-and-logo
            NuxtLink.logo(to='/')
                IconImg(name="icon:footerLogo")
            .info
                .help
                    Heading(hSize='h5')
                        Text(fontWeight="semi") Помощь и сервис
                    .contact
                        Text(fontWeight="bold") ТГ 
                        Text @vivecreative
                    .contact
                        Text(fontWeight="bold") Почта 
                        Text vivecreative@ya.ru
                    .contact
                        Text(fontWeight="bold") ИНН 
                        Text 0000000000000000
                Line.vertical.gr-to-light
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
        .messenger
            .left-line
                Line.gr-to-light
            NuxtLink.messenger-icon(to='https://t.me/vivecreative' style="width: 1.73rem; height: 1.73rem")
                IconImg(name="msg:telegram")
            NuxtLink.messenger-icon(to='https://www.instagram.com/vivecreative' style="width: 1.55rem; height: 1.55rem")
                IconImg(name="msg:instagram")
            NuxtLink.messenger-icon(to='https://vk.com/vivecreative' style="width: 2.1rem; height: 1.25rem")
                IconImg(name="msg:vk")
            NuxtLink.messenger-icon(to='https://www.youtube.com/@ViveCreativeWeb' style="width: 1.75rem; height: 1.25rem")
                IconImg(name="msg:youtube")
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
            +flex($align-items: center, $gap: 9.1)
            width: 48.5rem

            .logo
                width: 8.6rem
                height: 3.5rem
            
            .info
                +flex($gap: 4.75, $align-items: center)
                height: 7.85rem
                
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
        .messenger
            +flex(row, $gap: 1.6, $align-items: center)
            width: 100%      

            .left-line
                width: 100%
    
            .right-line
                width: 19%
</style>