<script setup>
const redstyle={color:"red",'font-style': "italic"}
</script>
 
<template>
<!-- Object syntax -->
<p :style="redstyle">This is style with object syntax</p>
<!-- <p :style="isError ? {color:red}:{color:blue}">This is Error message</p> -->
<!-- array syntax -->
<p :style="[redstyle]">This is Test style</p>
</template>
 
<style>
.blueText{
    color: blue
}
</style>