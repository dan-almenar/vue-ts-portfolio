<template>
  <div id="nav">
    <router-link to="/">
    <div class="icon">
      <HomeIcon
      :title="lang === 'english' ? 'Home' : 'Inicio'"
      size="40"
      fillColor="black"
      />
      </div>
    {{ lang === 'english' ? 'Home' : 'Inicio' }}
    </router-link>
    <router-link :to="{ name: 'Projects' }">
      <div class="icon">
      <CodeJsonIcon
      :title="lang === 'english' ? 'Projects' : 'Projectos'"
      size="40"
      fillColor="black"
      />
      </div>
    {{ lang === 'english' ? 'Projects' : 'Projectos' }}
    </router-link>
    <router-link :to="{ name: 'LangsAndTools' }">
      <div class="icon">
      <HammerScrewdriverIcon
      :title="lang === 'english' ? 'Skills' : 'Habilidades'"
      size="40"
      fillColor="black"      
      />
      </div>
    {{ lang === 'english' ? 'Skills' : 'Habilidades' }}
    </router-link>
    <router-link :to="{ name: 'Contact' }">
      <div class="icon">
      <EmailIcon
      :title="lang === 'english' ? 'Contact' : 'Contacto'"
      size="40"
      fillColor="black"      
      />
      </div>
    {{ lang === 'english' ? 'Contact' : 'Contacto' }}
    </router-link>
    <button @click="switchLang">
      <div class="icon">
      <TranslateIcon
      :title="lang === 'english' ? 'Español' : 'English'"
      size="40"
      fillColor="black"      
      />
      </div>
    {{ lang === 'english' ? 'Español' : 'English' }}
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
import { switchLanguage }  from '@/composables/store/store'
import { inject, defineComponent } from 'vue'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import CodeJsonIcon from 'vue-material-design-icons/CodeJson.vue'
import HammerScrewdriverIcon from 'vue-material-design-icons/HammerScrewdriver.vue'
import EmailIcon from 'vue-material-design-icons/Email.vue'
import TranslateIcon from 'vue-material-design-icons/Translate.vue'

export default defineComponent({
  setup() {
    const switchLang = switchLanguage
    const lang = inject('lang')
    
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

<style scoped>
#nav {
  width: 100%;
  margin: 0px;
  padding: 0px;
  justify-content: center;
  align-items: center;
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 30px;
}

#nav a.router-link-exact-active {
  color: red;
}

button {
  margin-left: 150px;
  background: none;
  border: none;
  font-weight: bold;
  color: #2c3e50;
  font-size: 1rem;  
}
</style>
