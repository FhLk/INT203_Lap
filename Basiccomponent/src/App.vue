<script setup>
import BaseButton from './components/BaseButton.vue';
const testMe1=()=>{
  console.log("Wow")
}
</script>
 
<template>
<div>
  <div>
    <BaseButton buttonName="Click Me!!!!" @clickMe="testMe1"/>
  </div>
</div>
</template>
 
<style scoped>

</style>