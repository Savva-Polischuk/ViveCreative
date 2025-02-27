<template lang='pug'>
SwitchButtons(
    v-model="check"
    :labels="[{id: 0, text: 'Разработка'}, {id: 1, text: 'Дизайн'}, {id: 2, text: 'Оптимизация'}]")
</template>

<script lang='ts' setup>
const check = ref(0)
</script>

<style lang='sass' scoped>

</style>