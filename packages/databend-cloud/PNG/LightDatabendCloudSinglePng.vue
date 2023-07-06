<template>
  <img :width="width" src='./Databend-Cloud-logo-05.png' />
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: "LightDatabendCloudSinglePng",
  props: {
    width: {
      type: Number,
      default: 200
    }
  }
})
</script>