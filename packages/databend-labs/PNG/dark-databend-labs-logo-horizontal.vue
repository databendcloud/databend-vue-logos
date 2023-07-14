<template>
  <img :width="width" src="./databend-labs-logo-horizontal-reverse.png" />
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: "DarkDatabendLabsHorizontalPng",
  props: {
    width: {
      type: [Number, String],
      default: 300
    }
  }
})
</script>