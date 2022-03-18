<script setup>
import { ref } from 'vue';

defineEmits(['add'])

const props=defineProps({
    NewProjectUrl:{
        type: String,
        require: true
    },
    NewProjectName:{
        type:String,
        require: true
    }
})

const NewProject=ref({});

const AddProject=()=>{
    NewProject.value.projectUrl= props.NewProjectUrl
    NewProject.value.projectName= props.NewProjectName
    return NewProject.value
}

</script>
 
<template>
<button @click="$emit('add',AddProject())">Add</button>
</template>
 
<style scoped>

</style>