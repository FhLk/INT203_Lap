<script setup>
const StudentList=[
    {id:1,fname:"Paramat",lname:"Pet-in"},
    {id:2,fname:"Chitoge",lname:"TF"},
    {id:3,fname:"A1",lname:"Bento"},
    {id:4,fname:"A2",lname:"Benta"},
    {id:5,fname:"Fuwarun",lname:"MBK"},

]
</script>
 
<template>
<div>
    <ul>
        <li v-for="(list,index) in StudentList">
        {{list.id}} | {{list.fname}} {{list.lname}} 
        <router-link :to="{name:'inforStudent',params:{studentId:list.id}}"> <button>Information</button> </router-link></li>
    </ul>
</div>
</template>
 
<style scoped>

</style>