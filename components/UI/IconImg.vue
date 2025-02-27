<template lang='pug'>
Icon.IconImg(:name="props.name")
</template>

<script lang='ts' setup>
interface Icon {
    name: string
}

const props = defineProps<Icon>()
</script>

<style lang='sass' scoped>
.IconImg
    width: inherit
    height: 100%
</style>