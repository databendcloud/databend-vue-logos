<template>
  <img :width="width" src="./databend-cloud-logo-vertical-reverse.png" />
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: "DarkDatabendCloudVerticalPng",
  props: {
    width: {
      type: [Number, String],
      default: 300
    }
  }
})
</script>