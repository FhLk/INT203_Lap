<script setup>
import List from './components/List.vue';
import { ref } from 'vue';
import AddButton from './components/AddButton.vue';
const project=ref([
    {projectUrl:"umaporn-sup/INT203Class",projectName:"Bingo Game"},
    {projectUrl:"students/Sec2_Group1",projectName:"Flash Card"},
    {projectUrl:"students/Sec3_Group1",projectName:"Tic Tac Toe"}
]);
const url=ref("");
const title=ref("");

const AddProject=(NewProject)=>{
    project.value.push(NewProject);
    url.value="";
    title.value="";
}

let currentStatus=ref('NONE');
const updateStatus=(status)=>{
    currentStatus.value=status;
}
</script>
 
<template>
<div>
    <h1>INT203' Student Project</h1>
    <p>Add Project:<br/><input type="text" placeholder="URL...." v-model="url"><br/>
    <input type="text" placeholder="Title...." v-model="title"/>
    <br/><AddButton :NewProjectUrl="url" :NewProjectName="title" @add="AddProject"/></p>
    <List :list="project" @confirm="updateStatus"/>
    <p>current status: {{currentStatus}}</p>
</div>
</template>
 
<style scoped>

</style>