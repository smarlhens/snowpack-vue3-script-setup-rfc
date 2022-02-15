<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    return {
      count,
      increment
    };
  }
});
</script>

<template>
  <div>Text</div>
  <button @click='increment'>{{ count }}</button>
</template>
