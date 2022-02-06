<script setup>
import { ref } from 'vue'
console.clear();
const myAccount = ref([{course:"INT203",unit:2},{course:"INT204",unit:3}])

const newCourse =ref({})

const courseName=ref("");
const courseUnit=ref(0);

const count = ref(0);
const intervalId= ref();
const isShow=ref(true);
intervalId.value= setInterval(()=>console.log(++count.value),1000)  
const stop=()=>{
          isShow.value=false;
          clearInterval(intervalId.value)
}
const start=()=>{
          isShow.value=true;
          intervalId.value = setInterval(()=>console.log(++count.value),1000)   
}
const addCourse =()=>{
          console.log("-----------------");
          newCourse.value.course=courseName.value;
          newCourse.value.unit=courseUnit.value;
          myAccount.value.push(newCourse.value)
          for(let i in myAccount.value){
                    console.log(myAccount.value[i])
          }
}
</script>
 
<template>
<p>{{count}}</p>
<button v-if="isShow" @click="stop" style="cursor: pointer">Stop</button>
<button v-else @click="start" style="cursor: pointer">Start</button>
<input type="text" v-model="courseName" placeholder="Name Course....">
<input type="number" v-model="courseUnit" placeholder="Units Course....">
<button @click="addCourse" style="cursor: pointer">Add Course</button>
</template>
 
<style>

</style>