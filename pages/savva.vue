<template lang='pug'>
Block.application(titleBlock="Оставить заявку")
    .application-body
        .form
            .name-and-phone
                Input.name(
                    v-model="clientName"
                    label="Имя"
                    name="name"
                    isRequired)
                Input.phone(
                    v-model="clientPhone"
                    label="Телефон"
                    name="phone"
                    type="tel"
                    isRequired)
            Input.email(
                v-model="clientEmail"
                label="Эл. Почта"
                name="email"
                type="email")
            Input.appeal(
                v-model="clientAppeal"
                label="Кратко опишите Ваш запрос"
                name="appeal")
            Button(@onClick="handleSubmitClick") Отправить 
</template>

<script lang='ts' setup>
const clientName = ref('')
const clientPhone = ref('')
const clientEmail = ref('')
const clientAppeal = ref('')

const handleSubmitClick = () => {

}
</script>

<style lang='sass' scoped>
.application
    // background-image: url("assets/backgrounds/mainPageBG.svg")
    // background-position-y: 90%


    .application-body
        +flex($justify-content: center, $align-items: center)
        height: 32rem

        .form
            +flex(column, $gap: 1.5)
            width: 41.75rem

            .name-and-phone
                +flex($gap: 5.75)

            .Button
                +flex($align-self: center)
                width: 18rem
                height: 2.5rem
                margin-top: .7rem
</style>