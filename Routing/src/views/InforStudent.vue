<script setup>import { useRoute } from 'vue-router';


let {params} =useRoute()
</script>
 
<template>
<h1>INFORMATION STUDENT {{params.studentId}}</h1>
<router-link :to="{name:'Home'}"> <button>BACK</button> </router-link>
</template>
 
<style scoped>

</style>