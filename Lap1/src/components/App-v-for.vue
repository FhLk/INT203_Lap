<script setup>
const mySubject=["INT203","INT204","INT206","INT208","INT209","INT210","INT221","LNG308"];
// const Profile=[{id:1,name:"Paramat",age:20,myUnits:13,subject:mySubject},{id:2,name:"Pet-in",age:20,myUnits:13,subject:mySubject}];
const Profile={id:"1",name:"Paramat",age:20};
const courses=[
          {courseId:"INT203",courseName:"Clinent II"},
          {courseId:"INT204",courseName:"Server II"},
          {courseId:"INT209",courseName:"DevOps"}
]
</script>
 
<template>
<p v-for="(value,index) in courses" :key="courses.courseId">{{index}}#{{value.courseId}}:{{value.courseName}}</p>

<ul>
          <li v-for="(subject,index) in mySubject" :key="index">{{subject}}</li>
</ul>
<ul>
          <li v-for="(value,propKey) in Profile" :key="Profile.id" >
          {{propKey}}:{{value}}
          </li>
</ul>
</template>
 
<style>

</style>