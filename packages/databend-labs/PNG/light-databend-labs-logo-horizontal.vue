<template>
  <img :width="width" src="./databend-labs-logo-horizontal.png" />
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: "LightDatabendLabsHorizontalPng",
  props: {
    width: {
      type: [Number, String],
      default: 300
    }
  }
})
</script>