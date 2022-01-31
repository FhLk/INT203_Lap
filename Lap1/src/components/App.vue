<script setup>
const MyAccount =[
          {name:'Salary',amount:10000},
          {name:'rent',amount:-2500},
          {name:'parking fee',amount:0},
          {name:'car fuel',amount:-600},
          {name:'commission',amount:5500}
          ]
const greenBG="background-color:green";
const redBG="background-color:red";
let sum=0;
for(let amount of MyAccount){
          sum+=amount.amount;
}
</script>
<template>
<ul style="list-style: none;">
    <li v-for="(value, index) in MyAccount" :key="index">
      <p v-if="value.amount !=0">
      <b>Name: </b> {{ value.name }}<br>
      <b>Amount: </b>
      <span v-if="value.amount > 0" :style="greenBG"> {{ value.amount }}</span>
      <span v-else-if="value.amount < 0" :style="redBG" > {{ value.amount }}</span>
      </p>
    </li>
  </ul>
  <p><b>Total</b>: {{sum}}</p>
</template>
 
<style>

</style>