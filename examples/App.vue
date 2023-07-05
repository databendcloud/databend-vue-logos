<template>
  <div>
    <div>test</div>
    <div>{{ count }}</div>
    <light-databend-cloudHorizontal-svg width="200"></light-databend-cloudHorizontal-svg>
    <nd-button @click="handleClick">按钮</nd-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    
  },
  data() {
    return {
      count: 0
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
