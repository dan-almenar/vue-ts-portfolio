<template>
<div class="wrapper">
  <div class="logo">
    <button @click="toggleShowNavbar">
    <img class="logo-img" :src="require('@/assets/logo.png')" alt="Logo">
    </button>
  </div>
  <div id="nav"
  :class="showNavbar ? 'visible' : 'hidden'">
    <router-link :to="{ name: 'Home' }">
    <div class="icon">
      <HomeIcon
      :title="lang === 'english' ? 'Home' : 'Inicio'"
      :size="iconSize"
      :fillColor="routeName === 'Home' ? 'firebrick' : 'black'"
      />
      </div>
    <span
    :class="[routeName === 'Home' ? 'firebrick-text' : '', 'span-tag']">{{ lang === 'english' ? 'Home' : 'Inicio' }}</span>
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
    :class="[routeName === 'Projects' ? 'blue-text' : '', 'span-tag']">{{ lang === 'english' ? 'Projects' : 'Projectos' }}</span>
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
    :class="[routeName === 'LangsAndTools' ? 'orange-text' : '', 'span-tag']">{{ lang === 'english' ? 'Skills' : 'Habilidades' }}</span>
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
    :class="[routeName === 'Contact' ? 'green-text' : '', 'span-tag']">{{ lang === 'english' ? 'Contact' : 'Contacto' }}</span>
    </router-link>

    <!-- There is no active link to the 'Admin' page for its for admin use only.
    The following router-link tag will be removed for deployment, it remains here
    just for showcase purposes.
      <router-link :to="{ name: 'Admin' }">Admin</router-link> -->
  </div>
    <button class="lang-btn" @click="switchLang">
      <div class="icon">
      <TranslateIcon
      :title="lang === 'english' ? 'Español' : 'English'"
      :size="iconSize"
      fillColor="black"
      />
      </div>
    <span class="span-tag">{{ lang === 'english' ? 'Español' : 'English' }}</span>
    </button>
<!-- test code -->
<!-- end of test code -->
</div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { switchLanguage }  from '@/composables/store/store'
import { inject, defineComponent, computed, ref } from 'vue'
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
    const showNavbar = ref(true)
    const toggleShowNavbar = (): void => {
      showNavbar.value = !showNavbar.value
    }
    
    return {
      lang,
      switchLang,
      iconSize,
      routeName,
      showNavbar,
      toggleShowNavbar,
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
.wrapper {
  display: flex;
  flex-direction: row;
}
#nav {
  width: 100%;
  margin: 0px;
  padding: 0px 50px;
  justify-content: space-around;
  align-items: center;
  display: flex;
  background: lightgrey;
}
.visible {
  animation: 1s fadeIn forwards;  
}
.hidden {
  animation: 1s fadeOut forwards;
}
.logo {
  justify-self: start;
}
.logo-img {
  width: 90px;
  height: 90px;
}
#nav a {
  font-weight: bold;
  font-size: 1rem;
  color: #2c3e50;
  margin: 15px 50px;
  text-decoration: none;
}
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
  border: none;
  font-weight: bold;
  background: none;
  font-size: 1rem;
  color: black;
}

/* animations */
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;    
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}

/* media queries */
@media (max-width: 480px) {
  .wrapper {
    max-width: 60px;
    margin-left: 0;
    flex-direction: column;
    justify-items: start;
    justify-self: left;
  }
  #nav {
    flex-direction: column;
    padding: 0px;
  }
  .logo-img {
    width: 60px;
    height: 60px;
  }
  button {
    padding: 0px;
    margin: 0px;
  }

  .lang-btn {
    position: fixed;
    left: 420px;
    top: 25px;
  }
  .span-tag {
    display: none;
  }
}
</style>
