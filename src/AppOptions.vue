<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      count: 0
    };
  },
});
</script>

<template>
  <div>Text</div>
  <button @click='count++'>{{ count }}</button>
</template>
