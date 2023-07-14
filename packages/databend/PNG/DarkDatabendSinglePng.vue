<template>
  <img :width="width" src="./Databend-LOGO-06.png" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "DarkDatabendSinglePng",
  props: {
    width: {
      type: [Number, String],
      default: 200
    }
  }
})
</script>