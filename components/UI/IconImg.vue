<template lang='pug'>
Icon.IconImg(:name="'icon:' + props.name")
</template>

<script lang='ts' setup>
interface Icon {
    name: string
}

const props = defineProps<Icon>()
</script>

<style lang='sass' scoped>
.IconImg
    width: 100%
    height: 100%
</style>