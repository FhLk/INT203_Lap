<script setup>
defineEmits([
    'clickMe'
])
const props=defineProps({
    buttonName:{
        type:String,
        require: true
    }
})

</script>
 
<template>
    <button class="button-color" @click="$emit('clickMe')">
        {{buttonName}}
    </button>
</template>
 
<style scoped>
.button-color{
    background-color: aqua;
}
</style>