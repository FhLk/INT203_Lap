<script setup>
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const students = [
  {studentId: 1,name: "John Weak"},
  {studentId: 2,name: "Scott Tiger"},
  {studentId: 3,name: "Ethan Summer",}
];

const mixdata = [
  1,"text1",
  2,"text2",
  {studentId: 2,name: "Scott Tiger"},
  4
];

</script>
 
<template>
<div>
  <ul>
    <li v-for="(value,index) in students" :key="index"> ID : {{value.studentId}}
    Name : {{value.name}}</li>
  </ul>
</div>
</template>
 
<style scoped>

</style>