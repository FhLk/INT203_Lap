<script setup>
import {ref, computed} from 'vue'

const msg = ref('')

const isEmpty=computed(()=>{
          return msg.value.trim().length===0 ? true: false
})
</script>
 
<template>
<input type="text" v-model="msg"/>
<p :class="isEmpty ? 'text-danger' : 'text-success'">{{ msg }}</p>
<p v-if="isEmpty" class="text-warning bg-dark">please input your data!</p>
</template>
 
<style>

</style>