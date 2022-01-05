<template>
  <Navbar />
  <router-view/>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import { state, switchLanguage } from '@/composables/store/store'
import { defineComponent, provide } from 'vue'

export default defineComponent({
  setup() {
    const lang = state.lang
    const switchLang = switchLanguage

    provide('lang', lang)
    
    return {
      lang,
      switchLang
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

</style>
