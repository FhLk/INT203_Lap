<script setup>
const text = "This is test v-show.";
const name= "Pet-in";
let isShow;
if(name!=""){
          isShow=true;
}
else{
          isShow=false;
}
</script>
 
<template>
<p v-show="name">Hello: {{name}}</p>
</template>
 
<style>

</style>