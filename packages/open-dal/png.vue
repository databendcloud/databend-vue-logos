<template>
  <img :width="width" src="./open-dal-logo.png" />
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: "OpenDalPng",
  props: {
    width: {
      type: Number,
      default: 300
    }
  }
})
</script>