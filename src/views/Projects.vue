<template>
  <div class="projects">
    <Projects />
  </div>
</template>

<script lang="ts">
import Projects from '@/components/projects/Projects.vue' 
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
    }
  },
  components: {
    Projects,
  }
})
</script>
