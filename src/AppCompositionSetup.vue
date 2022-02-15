<script setup lang="ts">
import {ref} from 'vue';

let count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <div>Text</div>
  <button @click='increment'>{{ count }}</button>
</template>
