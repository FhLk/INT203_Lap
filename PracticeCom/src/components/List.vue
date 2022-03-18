<script setup>
import {ref} from 'vue'

defineEmits(['confirm']);

const props=defineProps({
    list:{
        type: Array,
        require: true
    }
})

</script>
 
<template>
<div>
    <ul>
        <li v-for="(value,index) in list" :key="index">GIT Repo: {{value.projectUrl}}<br/>
        Project Title: {{value.projectName}}
        </li>
    </ul>
    <button @click="$emit('confirm','USER_CONFIRM')">Confirm</button>
</div>
</template>
 
<style scoped>

</style>