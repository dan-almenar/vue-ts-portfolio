<template>
  <div id="nav">
    <router-link to="/">{{ lang === 'english' ? 'Home' : 'Inicio' }}</router-link>
    <router-link :to="{ name: 'Bio' }">Bio</router-link>
    <router-link :to="{ name: 'Projects' }">{{ lang === 'english' ? 'Projects' : 'Projectos' }}</router-link>
    <router-link :to="{ name: 'LangsAndTools' }">{{ lang === 'english' ? 'Languages and Tools' : 'Lenguajes y Herramientas' }}</router-link>
    <router-link to="/contact">{{ lang === 'english' ? 'Contact' : 'Contacto' }}</router-link>
    <br><button @click="switchLang">{{ lang === 'english' ? "Cambia a Español" : "Switch to English" }}</button>
    <!-- There is no active link to the 'Admin' page for its for admin use only.
    The following router-link tag will be removed for deployment, it remains here
    just for showcase purposes.
      <router-link :to="{ name: 'Admin' }">Admin</router-link> -->
  </div>
  <router-view/>
</template>

<script lang="ts">
import { state, switchLanguage } from '@/composables/store/store'
import { defineComponent, provide } from 'vue'

export default defineComponent({
  setup() {
    const lang = state.lang
    const switchLang = switchLanguage

    // this next will most likely be removed in favor of importing
    // state directly in the components that need it
    // otherwise importing inject will be necesary.
    provide('lang', lang)
    
    return {
      lang,
      switchLang
    }
  },
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
