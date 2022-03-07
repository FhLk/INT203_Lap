<script setup>
import { ref } from "@vue/reactivity";

const mul=ref();
const show=ref(false)
</script>

<template>
<div>
    <input type="number" v-model="mul" />
    <button @click="show=true">Multiple</button>
    <ul v-show="show">
        <p v-for="(value,index) in 12" :key="index">{{mul}}x{{value}} = {{mul*value}}</p>
    </ul>
</div>
</template>
 
<style scoped>

</style>