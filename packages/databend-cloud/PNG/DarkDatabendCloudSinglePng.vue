<template>
  <img :width="width" src="./Databend-Cloud-logo-06.png" />
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: "DarkDatabendCloudSinglePng",
  props: {
    width: {
      type: [Number, String],
      default: 200
    }
  }
})
</script>