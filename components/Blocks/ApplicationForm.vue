<template lang='pug'>
form.ApplicationForm(@submit.prevent="handleSubmitClick")
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
    Button(type="submit") Отправить
</template>

<script lang='ts' setup>
const clientName = ref('')
const clientPhone = ref('')
const clientEmail = ref('')
const clientAppeal = ref('')

const resetForm = () => {
    clientName.value = ''
    clientPhone.value = ''
    clientEmail.value = ''
    clientAppeal.value = ''
}

const handleSubmitClick = async () => {
    await fetch('api/telegramBot', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: clientName.value,
            phone: clientPhone.value.replaceAll(' ', ''),
            email: clientEmail.value,
            appeal: clientAppeal.value
        })
    }).then(response => response.json())
    .then(res => {
        if (res.ok) {
            alert("Данные успешно отправленны")
            navigateTo('/')
            resetForm()
        } 
        else {
            alert("Произошла ошибка, повторите отправку")
        }
    })
    .catch(error => {
        console.error(`Error: ${error}`)
    })
}
</script>

<style lang='sass' scoped>
.ApplicationForm
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