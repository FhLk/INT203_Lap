<script setup>import { ref } from 'vue';

let score=ref(0);
let point=ref(0);
if(score.value>=10){
          score.value=0;
          point.value+=ref(1);
}
</script>
 
<template>
<p>Score {{score}} : Point {{point}}</p>
<button type="button" @click="score++">Add Score</button>
<p v-if="point > 0 && point < 10">You Add Point</p>
<p v-else-if="point >= 10">You Have Point more than 10</p>
<!-- <p v-else>You Not Have Point</p> -->
</template>
 
<style>

</style>