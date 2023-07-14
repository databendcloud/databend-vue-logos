<template>
  <img :width="width" src="./databend-logo-horizontal.png" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "LightDatabendHorizontalPng",
  props: {
    width: {
      type: [Number, String],
      default: 300
    }
  }
})
</script>