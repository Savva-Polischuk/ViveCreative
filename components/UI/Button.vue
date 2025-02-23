<template lang='pug'>
button.Button(@click="handleClick")
    slot
</template>

<script lang='ts' setup>
// interface Button {
//     text?: string
// }

// const props = defineProps<Button>() 
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
    border-radius: 10px
    min-width: 265px
    min-height: 51px
    margin: 20px
    font-weight: 700
    +transition([background-color, color], 0.3)

    &:hover
        background-color: #fff
        color: #000

</style>