<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">
    <div class="icon">
      <HomeIcon
      :title="lang === 'english' ? 'Home' : 'Inicio'"
      :size="iconSize"
      :fillColor="routeName === 'Home' ? 'firebrick' : 'black'"
      />
      </div>
    <span
    :class="routeName === 'Home' ? 'firebrick-text' : ''">{{ lang === 'english' ? 'Home' : 'Inicio' }}</span>
    </router-link>
    <router-link :to="{ name: 'Projects' }">
      <div class="icon">
      <CodeJsonIcon
      :title="lang === 'english' ? 'Projects' : 'Projectos'"
      :size="iconSize"
      :fillColor="routeName === 'Projects' ? 'blue' : 'black'"
      />
      </div>
    <span
    :class="routeName === 'Projects' ? 'blue-text' : ''">{{ lang === 'english' ? 'Projects' : 'Projectos' }}</span>
    </router-link>
    <router-link :to="{ name: 'LangsAndTools' }">
      <div class="icon">
      <HammerScrewdriverIcon
      :title="lang === 'english' ? 'Skills' : 'Habilidades'"
      :size="iconSize"
      :fillColor="routeName === 'LangsAndTools' ? 'orange' : 'black'"
      />
      </div>
    <span
    :class="routeName === 'LangsAndTools' ? 'orange-text' : ''">{{ lang === 'english' ? 'Skills' : 'Habilidades' }}</span>
    </router-link>
    <router-link :to="{ name: 'Contact' }">
      <div class="icon">
      <EmailIcon
      :title="lang === 'english' ? 'Contact' : 'Contacto'"
      :size="iconSize"
      :fillColor="routeName === 'Contact' ? 'green' : 'black'"
      />
      </div>
    <span
    :class="routeName === 'Contact' ? 'green-text' : ''">{{ lang === 'english' ? 'Contact' : 'Contacto' }}</span>
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
    const iconSize = 30
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
  background: lightgrey;
}

#nav a {
  font-weight: bold;
  font-size: 1rem;
  color: #2c3e50;
  margin: 15px 50px;
  text-decoration: none;
}

/* #nav a.router-link-exact-active {
  color: black;
} */
.firebrick-text {
  color: firebrick;
}

.blue-text {
  color: blue;
}

.orange-text {
  color: orange;
}

.green-text {
  color: green;
}

button {
  margin-left: 150px;
  background: none;
  border: none;
  font-weight: bold;
  color: #2c3e50;
  font-size: .8rem;
  color: black;
}
</style>
