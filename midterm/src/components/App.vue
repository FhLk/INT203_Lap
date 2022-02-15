<script setup>
import { ref } from 'vue'
const randNumbers = ref([])
const buttunIngrid=ref([true,true,true,true,true,true,true,true,true]);
const listgrid=ref([])
const error = ref(false);
// generates random number in range (1-99)
const generateNumber = () => {
  let duplicate = false
  const rand = Math.floor(Math.random() * 99 + 1)
  duplicate = randNumbers.value.some((randNumber) => randNumber === rand)
  duplicate ? generateNumber() : randNumbers.value.push(rand)
}
let lastNumber;
const addNumber=(num)=>{
  lastNumber=randNumbers.value[randNumbers.value.length-1]
  if(listgrid.value.includes(lastNumber)){
    error.value = true;
    return
  }
  listgrid.value[num] = lastNumber;
  buttunIngrid.value[num]=false;
  error.value=false
}

const Reset=()=>{
  randNumbers.value=[];
  buttunIngrid.value=[true,true,true,true,true,true,true,true,true];
  listgrid.value=[];
  error.value=false;
}

const CheckStyle=(number)=>{
  if(listgrid.value.includes(number)){
    return 'text-decoration-line: line-through; color:red'
  }
}
</script>

<template>
  <div class="top-container">
    <div class="action-button">
      <button :disabled="listgrid.length == 9 && !(listgrid.includes(undefined))" @click="generateNumber">Generate New Number</button>
      <button @click="Reset">Reset</button>
    </div>
    <div class="error-message" v-show="error">
      Sorry, Your number is already exist in the bingo sheet, please generate new number again!
    </div>
    <div class="grid-container">
      <div class="grid-item" v-for="(grid,index) in 9" :key="index">
        <button :disabled="randNumbers.length == 0" @click="addNumber(index)" v-show="buttunIngrid[index]">Add Number</button>
        <p v-show="!buttunIngrid[index]">{{listgrid[index]}}</p>
      </div>
    </div> 
    <div class="generate-number">
      <p v-for="(value,index) in randNumbers" :key="index" :style="CheckStyle(value)">Generate Number #{{index+1}}: {{value}}</p>
    </div>
  </div>
</template>

<style scoped>
.top-container {
  width: 330px;
}
.action-button {
  padding: 10px;
  display: flex;
  gap: 5px;
}
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 80px 80px 80px;
  column-gap: 5px;
  row-gap: 5px;
  background-color: green;
  padding: 10px;
}
.grid-item {
  display: flex;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.generate-number {
  font-size: 20px;
}
.error-message {
  height: 40px;
  color: red;
}
</style>
