<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue'
import Number from './Number.vue';

const num=ref(1);
const close=ref(true)

const PopupNumber=()=>{
    close.value=false;
}

</script>
 
<template>
<div>
    <p>Number : {{num}}</p>
    <div>
        <button @click="num++">Update</button>
    </div>
    <div >
        <Number :currentNum="num"  v-if="close"/>
        <button @click="PopupNumber">Close Number</button>
    </div>
</div>
</template>
 
<style scoped>

</style>