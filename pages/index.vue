<template lang='pug'>
Header

Block.main(isMain)
    .main-content(@mouseenter="showSpotligh", @mousemove="moveSpotlight", @mouseleave="hideSpotligh" :style="{'background-image': spotlightPos}")
        Heading.dynamic(hSize="h2") Создаем, настраиваем, продвигаем
        Heading.dynamic(hSize="h1") Вы — наслаждаетесь результатом


Block.services(titleBlock="Услуги")
    .services-body
        TimeLineSwitcher



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


Block.rates(titleBlock="Тарифы")
    .rates-body
        .rate(v-for="item,index in rates")
            .project-and-rate
                Heading(hSize="h5") {{item.project}}
                .cost
                    Text(fontSize="1.6rem", fontWeight="regular") от
                    Heading(hSize="h5") {{item.rate}}
            Line.gr-light-dark-light(v-if="index != 4")
        

Block.contacts(titleBlock="Контакты")
    .contacts-content
        .contacts-body
            .contact(v-for="item in contacts")
                NuxtLink.msg(:to="item.contLink" :style="{width: item.iconWidth}")
                    IconImg.msg-img(:name="item.contIcon")
                .contact-text
                    Text(hSize="1.2rem", fontWeight="bold") {{item.contHead}}
                    Text.contact-text-desc(hSize="1rem") {{item.contDesc}}


Block.application(
    titleBlock="Оставить заявку"
    id="application")
    .application-body
        ApplicationForm
        
Footer
</template>

<script lang='ts' setup>
const spotX = ref<string | number>(0)
const spotY = ref<string | number>(0)
const innerCircleSize = ref<string | number>(0)
const outerCircleSize = ref<string | number>(0)

const showSpotligh = () => {
    innerCircleSize.value = 100 + 'px'
    outerCircleSize.value = 200 + 'px'
}

const moveSpotlight = (event: MouseEvent) => {
    spotX.value = event.offsetX + 'px'
    spotY.value = event.offsetY + 'px'
}

const hideSpotligh = () => {
    innerCircleSize.value = 0 + 'px'
    outerCircleSize.value = 0 + 'px'
}

const spotlightPos = computed(() => {
    return 'radial-gradient(circle at ' + spotX.value  + ' ' + spotY.value + ', rgba(255, 255, 255, 1) ' + innerCircleSize.value + ', rgba(255, 255, 255, .5) ' + outerCircleSize.value + ')'
})

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

const rates = [
        {project: 'Продвижение (SEO, аналитика, аудит)', rate: '5 000 ₽'},
        {project: 'Редизайн и адаптивная верстка', rate: '20 000 ₽'},
        {project: 'Лендинг / Корпоративный сайт', rate: '30 000 ₽'},
        {project: 'Интернет-магазин', rate: '120 000 ₽'},
        {project: 'Порталы и сложные веб-приложения', rate: '300 000 ₽'}
    ]
    
const contacts = [
    {contIcon: 'msg:telegram', contHead: 'Telegram', contDesc: 'новости, статьи, чек-листы, поддержка клиентов', iconWidth: '3.05rem', contLink: 'https://t.me/vivecreative'},
    {contIcon: 'msg:instagram', contHead: 'Instagram', contDesc: 'кейсы, визуальный контент, сторис, процесс работы', iconWidth: '3.1rem', contLink: 'https://www.instagram.com/vivecreative'},
    {contIcon: 'msg:vk', contHead: 'VK', contDesc: 'новости, обсуждения, поддержка клиентов', iconWidth: '3.5rem', contLink: 'https://vk.com/vivecreative'},
    {contIcon: 'msg:youtube', contHead: 'YouTube', contDesc: 'новости, гайды, разборы кейсов', iconWidth: '3.5rem', contLink: 'https://www.youtube.com/@ViveCreativeWeb'}
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
        padding: 4rem
        margin-bottom: 4rem
        background-image: radial-gradient(circle at 0 0, rgba(255, 255, 255, 1) 0, rgba(255, 255, 255, .5) 0)
        background-clip: text

///////
.services
    background-image: url("assets/backgrounds/servicesBG.svg")
    +flex(column, $gap: 4.75)

    .services-body
        height: 48.5rem

//////
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

//////
.our-advantages
    height: 100rem
    background-image: url('assets/backgrounds/advantagesBG.svg')
    background-position-y: 60%

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
                color: rgba(255, 255, 255, .2)

            .adventage-text
                +flex(column, $gap: 1, $align-items: end)
                width: 32.25rem
                height: 9.3rem
                text-align: right
//////// 
.application
    background-image: url("assets/backgrounds/applicationBG.svg")
    background-position-y: 100%


    .application-body
        +flex($justify-content: center, $align-items: center)
        height: 38rem

/////// 
.rates
    background-image: url('assets/backgrounds/ratesBG.svg')
    background-position-y: 70%

    .rates-body
        +flex(column, center, center, $gap: 3.3)
        height: 55.5rem

        .rate
            +flex(column, $gap: 3.3)
            width: 56rem

            .project-and-rate
                +flex(row, space-between)
                width: 53.3rem

                .cost
                    +flex($justify-content: start, $gap: .5)
                    width: 10.9rem

/////// 
.contacts
    height: 28.25rem
    
    .contacts-content
        +flex($justify-content: center, $align-items: center)
        background-image: url('assets/backgrounds/contactsBG.svg')
        background-repeat: no-repeat
        background-position-x: center
        background-position-y: 30%
        width: 100%
        height: 25.75rem

        .contacts-body
            +flex(row, space-between, $wrap: wrap)
            width: 47.75rem
            height: 15rem

            .contact
                +flex(row, $gap: 2)
                height: 4.5rem
                width: 19.1rem

                .msg
                    +flex($align-items: center)

                .contact-text
                    +flex(column, center, start, $gap: .4)

                    .contact-text-desc
                        font-family: 'SpaceGrotesk'
                        font-weight: 500
                        color: rgba(255, 255, 255, .6)
</style>