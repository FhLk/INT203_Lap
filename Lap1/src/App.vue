<script setup>
const msg="Wow!!!!!";
const headingstyle="color:red"
const imagePath='../public/images/logo.png'
</script>
 
<template>
<h1 v-bind:style="headingstyle">{{ msg }}</h1>
<h2 :style="headingstyle">Year!!!!</h2>
<img src="./assets/logo.png" />
<img :src="imagePath" alt="" srcset="" />
</template>
 
<style>

</style>