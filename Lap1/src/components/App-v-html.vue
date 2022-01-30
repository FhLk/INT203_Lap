<script setup>
const text = "<b><i>This is test v-html</i></b>";
</script>
 
<template>
<p v-html="text"></p>
<p>{{text}}</p>
</template>
 
<style>

</style>