<template>
    <Bio />
</template>

<script lang="ts">
import Bio from '@/components/home/Bio.vue'
import { Language } from '@/customTypes/customTypes';
import { computed, ComputedRef, defineComponent, inject, Ref } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const lang = inject('lang') as Ref<Language>
    const welcome: ComputedRef<string> = computed(() => {
      return lang.value === 'english' ? 'Welcome to Dan Almenar\'s portfolio site!' : 'Bienvenido al portafolio web de Dan Almenar'
    })
    console.log(welcome.value)
    return {

    }
  },
  components: {
    Bio,
  }
});
</script>
