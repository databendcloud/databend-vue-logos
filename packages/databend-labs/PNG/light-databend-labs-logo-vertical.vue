<template>
  <img :width="width" src="./databend-labs-logo-vertical.png" />
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: "LightDatabendLabsVerticalPng",
  props: {
    width: {
      type: [Number, String],
      default: 300
    }
  }
})
</script>