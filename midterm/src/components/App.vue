<script setup>
import { ref } from 'vue'
const myAccount={
  accoutID:'12345',
  accountName: 'FhLk',
  balance: 20000
}

const profile={
  name:'Paramat',
  age:20,
  sex: 'Female',
  favorite:['swiming','Game',20,'BNK','CGM']
}
</script>
 
<template>
<ul>
  <li v-for="(value,prop,index) in profile" :key="index">
    {{prop}}:{{value}}
  </li>
</ul>
</template>
 
<style>

</style>