<template>
  <img :width="width" src="./databend-logo-vertical-reverse.png" />
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: "DarkDatabendVerticalPng",
  props: {
    width: {
      type: [Number, String],
      default: 300
    }
  }
})
</script>