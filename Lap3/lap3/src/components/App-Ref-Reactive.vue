<script setup>
import { reactive, ref } from 'vue';
const testRef = ref([1,2,3,4,5,6]);
const testReac = reactive({Name:"Paramat",Age:10,Sex:"Femal",Boolean:true})
const sum = testRef.value.reduce((prev,cur)=>prev+cur)
console.log(testReac);
console.log(testReac.Name);
console.log(testReac.Sex);
console.log(testReac.Age);
console.log(testReac.Boolean);
</script>
 
<template>
<p v-for="(value,index) in testRef" :key="index">{{ value }}: {{index}}</p>
<p>{{sum}}</p>
</template>
<style>

</style>