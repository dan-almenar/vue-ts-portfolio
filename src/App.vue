<template>
  <Navbar />
  <router-view/>
</template>

<script lang="ts">
import Navbar from '@/components/common/Navbar.vue'
import { getters } from '@/composables/store/store'
import { defineComponent, provide } from 'vue'

export default defineComponent({
  setup() {
    provide('lang', getters.lang())
    
    return {
    }
  },
  components: {
    Navbar,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* media queries */
@media (max-width: 480px) {
  #app {
    max-width: 460px;
    padding: 20px;
  }
}
</style>
