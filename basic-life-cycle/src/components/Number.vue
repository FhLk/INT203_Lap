<script setup>
import { fromJSON } from 'postcss';
import {onBeforeUnmount, onUnmounted} from 'vue'

const props=defineProps({
    currentNum:{
        type: Number
        }
})
onBeforeUnmount(()=>{
    alert(`Number ${props.currentNum} before Unmount`)
})
onUnmounted(()=>{
    alert(`Number ${props.currentNum} Unmounted`)
})
</script>
 
<template>
<div>
    <p>Current Number : {{currentNum}}</p>
</div>
</template>
 
<style scoped>

</style>