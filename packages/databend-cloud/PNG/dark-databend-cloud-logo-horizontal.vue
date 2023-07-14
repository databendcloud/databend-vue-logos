
<template>
  <img :width="width" src="./databend-cloud-logo-horizontal-reverse.png" />
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: "DarkDatabendCloudHorizontalPng",
  props: {
    width: {
      type: [Number, String],
      default: 300
    }
  }
})
</script>