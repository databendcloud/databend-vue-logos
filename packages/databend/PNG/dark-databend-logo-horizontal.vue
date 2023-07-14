<template>
  <img :width="width" src="./databend-logo-horizontal-reverse.png" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "DarkDatabendHorizontalPng",
  props: {
    width: {
      type: [Number, String],
      default: 300
    }
  }
})
</script>