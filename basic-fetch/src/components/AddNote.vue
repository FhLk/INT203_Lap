<script setup>
import {ref} from 'vue'
defineEmits(['save'])
const props=defineProps({
    id:{
        type: Number,
        require:true
    }
})
const Detail=ref("")

const saveNote= async (noteDetail)=>{
    const res = await fetch(`http://localhost:5000/notes/`,{
    method:'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      noteDetail: noteDetail
    })
  })
  const newNote=await res.json()
  Detail.value="";
  return newNote;
}

</script>
 
<template>
<div>
    <input type="text" v-model="Detail"/>
    <button @click="$emit('save',saveNote(Detail))">Save</button>
</div>
</template>
 
<style scoped>

</style>