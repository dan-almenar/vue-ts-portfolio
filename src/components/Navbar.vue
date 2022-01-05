<template>
  <div id="nav">
    <router-link to="/">
    <div class="icon">
      <HomeIcon
      :title="lang === 'english' ? 'Home' : 'Inicio'"
      :size="iconSize"
      :fillColor="routeName === 'Home' ? 'firebrick' : 'black'"
      />
      </div>
    {{ lang === 'english' ? 'Home' : 'Inicio' }}
    </router-link>
    <router-link :to="{ name: 'Projects' }">
      <div class="icon">
      <CodeJsonIcon
      :title="lang === 'english' ? 'Projects' : 'Projectos'"
      :size="iconSize"
      :fillColor="routeName === 'Projects' ? 'firebrick' : 'black'"
      />
      </div>
    {{ lang === 'english' ? 'Projects' : 'Projectos' }}
    </router-link>
    <router-link :to="{ name: 'LangsAndTools' }">
      <div class="icon">
      <HammerScrewdriverIcon
      :title="lang === 'english' ? 'Skills' : 'Habilidades'"
      :size="iconSize"
      :fillColor="routeName === 'LangsAndTools' ? 'firebrick' : 'black'"
      />
      </div>
    {{ lang === 'english' ? 'Skills' : 'Habilidades' }}
    </router-link>
    <router-link :to="{ name: 'Contact' }">
      <div class="icon">
      <EmailIcon
      :title="lang === 'english' ? 'Contact' : 'Contacto'"
      :size="iconSize"
      :fillColor="currentRoute === 'Contact' ? 'firebrick' : 'black'"
      />
      </div>
    {{ lang === 'english' ? 'Contact' : 'Contacto' }}
    </router-link>
    <button @click="switchLang">
      <div class="icon">
      <TranslateIcon
      :title="lang === 'english' ? 'Español' : 'English'"
      :size="iconSize"
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
import { useRoute } from 'vue-router'
import { switchLanguage }  from '@/composables/store/store'
import { inject, defineComponent, computed } from 'vue'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import CodeJsonIcon from 'vue-material-design-icons/CodeJson.vue'
import HammerScrewdriverIcon from 'vue-material-design-icons/HammerScrewdriver.vue'
import EmailIcon from 'vue-material-design-icons/Email.vue'
import TranslateIcon from 'vue-material-design-icons/Translate.vue'

export default defineComponent({
  setup() {
    const switchLang = switchLanguage
    const lang = inject('lang')
    const iconSize = 20
    const route = useRoute()
    const routeName = computed(() => route.name)
    
    return {
      lang,
      switchLang,
      iconSize,
      routeName,
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
  position: fixed;
  background: lightgrey;
}

#nav a {
  font-weight: bold;
  font-size: .8rem;
  color: #2c3e50;
  margin: 15px 50px;
}

#nav a.router-link-exact-active {
  color: firebrick;
}

button {
  margin-left: 150px;
  background: none;
  border: none;
  font-weight: bold;
  color: #2c3e50;
  font-size: .8rem;
  color: firebrick;
}
</style>
