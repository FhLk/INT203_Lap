<script setup>
const MyAccount =[
          {name:'Salary',amount:10000},
          {name:'rent',amount:-2500},
          {name:'parking fee',amount:0},
          {name:'car fuel',amount:-600},
          {name:'commission',amount:5500}
          ]

// let startValue = 0

// let sum = MyAccount.reduce(function (total, currentValue) {

//   return total + currentValue.amount

// }, startValue)
</script>
<template>
<ul style="list-style: none;">
    <li v-for="(value, index) in MyAccount" :key="index">
      <p v-if="value.amount !=0">
      <b>Name: </b> {{ value.name }}<br>
      <b>Amount: </b>
      <span :style="value.amount > 0 ? 'background-color:green': 'background-color:red'"> {{ value.amount }}</span>
      </p>
    </li>
  </ul>
  <p><b>Total</b>: {{MyAccount.reduce( (total, account)=>total+account.amount ,0)}}</p>
</template>
 
<style>

</style>