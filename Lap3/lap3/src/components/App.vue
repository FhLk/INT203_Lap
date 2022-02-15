<script setup>
import {ref} from 'vue'
const text=ref('')
const note=ref([]);
const FilterNote = ref([])
let isShow=ref(false);
const addNote=(t)=>{
    if(t!=''){
          isShow.value=true
          note.value.push(text.value)
          text.value=''
    }
}
const fil='';
let isShowFilter =ref(false)
const filter = (text)=>{
          let value =new RegExp(String(text), 'i')
          FilterNote.value = note.value.filter((t)=>t.match(value))
          isShowFilter.value=true
}
</script>
 
<template>
<p>New Note : 
          <input type="text" v-model="text" @keyup.enter="addNote(text)" placeholder="Note..."/>
          <button @click="addNote(text)" style="cursor: pointer">Add Note</button>
</p>
<ul class="bg-primary text-white" v-if="note!=''">
          <li v-for="(value,index) in isShowFilter ? FilterNote : note " :key="index">{{value}}</li>
</ul>
<p v-if="isShow">Filter Note : 
          <input type="text" v-model="fil" @keyup="filter(fil)" placeholder="Filter..."/>
</p>

</template>
 
<style>
.bg-primary{
    background-color: antiquewhite;
}

.listNote2{
    background-color: rgb(236, 129, 129);
}

</style>