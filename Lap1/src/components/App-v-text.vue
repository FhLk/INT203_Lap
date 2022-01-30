<script setup>
const msg="Wow!!!!!";
const headingstyle="color:red"
const imagePath='./images/logo.png'
</script>
 
<template>
<h1 v-bind:style="headingstyle">{{ msg.toLocaleLowerCase() }}</h1>
<h2 :style="headingstyle">Year!!!!</h2>
<img src="./assets/logo.png" />
<img :src="imagePath" alt="" srcset="" />
</template>
 
<style>

</style>