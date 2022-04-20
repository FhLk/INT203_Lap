<script setup>
import {ref} from 'vue'
const unKnownImg=ref('/images/shikimori.jpg')
</script>
<template>
  <div>
    <div>
      <router-link :to="{name:'Home'}" > Home</router-link><br>
      <router-link :to="{ name: 'MyPortfolio' }">My Portfolio</router-link>
    </div>
    <div>
      <router-view> </router-view>
    </div>
  </div>
  <img :src="unKnownImg" >  
</template>

<style>
a{
  color: black;
}
.router-link-active{
  color: red;
}
</style>