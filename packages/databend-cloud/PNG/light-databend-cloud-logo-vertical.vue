<template>
  <img :width="width" src='./databend-cloud-logo-vertical.png' />
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: "LightDatabendCloudVerticalPng",
  props: {
    width: {
      type: [Number, String],
      default: 300
    }
  }
})
</script>