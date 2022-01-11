<template>
  <div class="home">
    <Bio />
  </div>
</template>

<script lang="ts">
import Bio from '@/components/home/Bio.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    Bio
  }
});
</script>

<style scoped>
/* media queries */
@media (max-width: 480px) {
  .home {
    max-width: 460px;
  }
}
</style>
