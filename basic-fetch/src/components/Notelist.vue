<script setup>
import EditNote from './AddNote.vue';
defineEmits(['deleteNote','edit'])
const props=defineProps({
    list:{
        type: Array,
        require: true
    },
    newnote:{
        type: String,
        require:true
    }

})

</script>
 
<template>
<div>
    <h2>Note List:</h2>
    <ul>
        <li v-for="(note,index) in list" :key="index">
        note ID: {{note.id}}, 
        note datail: {{note.noteDetail}}
        <button>Edit</button>
        <button @click="$emit('deleteNote',note.id)">Delete</button>
        </li>
    </ul>
</div>
</template>
 
<style scoped>

</style>