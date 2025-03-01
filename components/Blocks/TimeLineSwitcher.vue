<template lang='pug'>
.TimeLineSwitcher
    SwitchButtons(
        v-model="check"
        :labels="labels")
    TimeLine(
        :stages="stages[check]"
        :isDoubleLastLine="check === 0")
</template>

<script lang='ts' setup>
const check = ref(0)

const labels = [
    {id: 0, text: 'Разработка'}, 
    {id: 1, text: 'Дизайн'}, 
    {id: 2, text: 'Оптимизация'}]

const stages = reactive([
        [
            {order: 0, text: 'Лендинги'}, 
            {order: 1, text: 'Корпоративные сайты'}, 
            {order: 2, text: 'Интернет-магазины'}, 
            {order: 3, text: 'Порталы и сложные \nвеб-приложения'}
        ],
        [
            {order: 0, text: 'Разработка дизайна'}, 
            {order: 1, text: 'Адаптивная верстка'}, 
            {order: 2, text: 'Редизайн сайтов'},
        ],
        [
            {order: 0, text: 'Продвижение сайтов'}, 
            {order: 1, text: 'Аудит и аналитика'}, 
        ]
    ])
</script>

<style lang='sass' scoped>
.TimeLineSwitcher
    +flex(column, center, center, $gap: 5)

</style>