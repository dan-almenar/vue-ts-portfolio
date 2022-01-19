<template>
    <Bio />
</template>

<script lang="ts">
import Bio from '@/components/home/Bio.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    Bio,
  }
});
</script>
