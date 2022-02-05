<script setup>
import { ref, reactive, toRef, toRefs } from 'vue'

const cube = reactive({
          Length : 30,
          Weigth : 30,
          Heigth : 30
})

const cube2 = cube.Length;

const getValue = (l,w,h)=>{
          return l*w*h;
}

const value = getValue(cube.Length,cube.Heigth,cube.Weigth);
</script>

<template>
 <p>{{cube2}}</p>
</template>
 
<style>

</style>