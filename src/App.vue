<template>
  <Navbar />
  <Loading />
  <router-view/>
</template>

<script lang="ts">
import Loading from '@/components/common/Loading.vue'
import Navbar from '@/components/common/Navbar.vue'
import { state, switchLanguage } from '@/composables/store/store'
import { defineComponent, provide } from 'vue'

export default defineComponent({
  setup() {
    const switchLang = switchLanguage

    provide('lang', state.lang)
    
    return {
      switchLang
    }
  },
  components: {
    Navbar,
    Loading,
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
