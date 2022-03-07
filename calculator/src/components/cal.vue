<script setup>
import { computed, ref } from 'vue';

let num1=ref(0);
let num2=ref(0);
let sum=ref(0);
const arrSum=ref([]);

const Cal=computed(()=>{
    sum.value=num1.value+num2.value;
    arrSum.value.push(sum.value);
    num1.value=0;
    num2.value=0;
})
</script>
 
<template>
<div>
    <input type="number" v-model="num1"/>
    <input type="number" v-model="num2"/>
</div>
<button @click="Cal">Cal</button>
<p v-show="sum!=0">Result : {{Cal}}</p>
<p v-show="arrSum.length !=0" v-for="(value,index) in arrSum" :key="index">{{index}}:{{value}}</p>
</template>
 
<style scoped>

</style>