<script setup>
import { ref, onBeforeMount } from "vue"
import Notelist from "./components/Notelist.vue";
import AddNote from "./components/AddNote.vue";
const notes=ref([])
const getNotes= async ()=>{
  const res = await fetch("http://localhost:5000/notes")
  notes.value= await res.json()
}


onBeforeMount(async ()=>{
  await getNotes()
})

const removeNote= async (noteId)=>{
  const res = await fetch(`http://localhost:5000/notes/${noteId}`,{
    method:'DELETE'
  })
  if(res.status===200){
    notes.value=notes.value.filter((note)=>note.id!==noteId).map((note)=>{
      return note.id>noteId ? {...note,id:note.id} : note});
    console.log("Delete Successfully")
  }
  else{
    console.log("Error")
  }
}

const saveNote =async(newNote)=>{
  notes.value.push(await newNote);
}
</script>
 
<template>
<div>
  <AddNote @save="saveNote"/>
  <Notelist :list="notes" @deleteNote="removeNote"/>
</div>

</template>
 
<style scoped>

</style>