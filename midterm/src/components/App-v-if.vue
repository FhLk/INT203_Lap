<script setup>
import { ref } from 'vue'
const depositAmt= 2000000;
const interest = ref();
</script>
 
<template>
<p>Deposit Amount: {{depositAmt}}</p>
<p v-if="depositAmt < 10000">Interest: 0</p>
<p v-else-if="depositAmt < 50000">Interest: {{ interest = depositAmt * 0.1}}</p>
<p v-else-if="depositAmt < 100000">Interest: {{ interest = depositAmt * 0.2}}</p>
<p v-else>Interest: {{interest= depositAmt * 2.5}}</p>
<p>Total : {{depositAmt + interest}}</p>


</template>
 
<style>

</style>