<template>
<!-- notes
move all this elements into a navbar component
end of notes -->
  <div id="nav">
    <router-link to="/">
      <HomeIcon
      :title="lang === 'english' ? 'Home' : 'Inicio'"
      size="40"
      fillColor="black"
      />
    </router-link>
    <router-link :to="{ name: 'Bio' }">Bio</router-link>
    <router-link :to="{ name: 'Projects' }">
      <CodeJsonIcon
      :title="lang === 'english' ? 'Projects' : 'Projectos'"
      size="40"
      fillColor="black"
      />
    </router-link>
    <router-link :to="{ name: 'LangsAndTools' }">
      <HammerScrewdriverIcon
      :title="lang === 'english' ? 'Languages and Tools' : 'Lenguajes y Herramientas'"
      size="40"
      fillColor="black"      
      />
    </router-link>
    <router-link :to="{ name: 'Contact' }">
      <EmailIcon
      :title="lang === 'english' ? 'Contact' : 'Contacto'"
      size="40"
      fillColor="black"      
      />
    </router-link>
    <button @click="switchLang">
      <TranslateIcon
      :title="lang === 'english' ? 'Cambiar a Español' : 'Switch to English'"
      size="40"
      fillColor="black"      
      />
    </button>
    <!-- There is no active link to the 'Admin' page for its for admin use only.
    The following router-link tag will be removed for deployment, it remains here
    just for showcase purposes.
      <router-link :to="{ name: 'Admin' }">Admin</router-link> -->
  </div>

<!-- test code -->
<!-- end of test code -->
  <router-view/>
</template>

<script lang="ts">
import { state, switchLanguage } from '@/composables/store/store'
import { defineComponent, provide } from 'vue'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import CodeJsonIcon from 'vue-material-design-icons/CodeJson.vue'
import HammerScrewdriverIcon from 'vue-material-design-icons/HammerScrewdriver.vue'
import EmailIcon from 'vue-material-design-icons/Email.vue'
import TranslateIcon from 'vue-material-design-icons/Translate.vue'

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
  components: {
    HomeIcon,
    CodeJsonIcon,
    HammerScrewdriverIcon,
    EmailIcon,
    TranslateIcon,
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

#nav {
  position: fixed;
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 30px 60px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  background: none;
  border: none;
}
</style>
