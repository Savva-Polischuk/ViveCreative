<template lang='pug'>
button.Button(@click="handleClick")
    slot
</template>

<script lang='ts' setup>
const emit = defineEmits(['onClick'])

const handleClick = (e: Event) => {
	emit('onClick', e)
}
</script>

<style lang='sass' scoped>
.Button
    +flex(row, center, center)
    background-color: transparent
    border: 1px solid white
    border-radius: .5rem
    min-width: 13.3rem
    min-height: 2.6rem
    font: inherit
    font-weight: 700
    color: inherit
    +transition([background-color, color], .3)

    &:hover
        background-color: #fff
        color: #000

</style>