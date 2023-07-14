<template>
  <img :width="width" src="./Databend-LOGO-05.png" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "LightDatabendSinglePng",
  props: {
    width: {
      type: [Number, String],
      default: 300
    }
  }
})
</script>