<template>
  <div class="create-project-form">
      <form @submit.prevent="createProject" method="post" autocomplete="true">
          <!-- TODO: add necessary fields -->
          <button type="submit">{{ btnTag }}</button>
      </form>
  </div>
</template>

<script lang="ts">
import { inject, computed, ComputedRef, Ref } from 'vue'
import { Language } from '@/customTypes/customTypes'
export default {
    name: 'CreateProject',
    setup(){
        const createProject:() => void = () => {
            console.log('create project')
        }
        const lang: Ref<Language> = inject('lang') as Ref<Language>
        const btnTag: ComputedRef<string> = computed(() => {
            const tag = lang.value === 'english' ? 'Create Project' : 'Crear Proyecto'
            return tag
        })
        return {
            lang,
            createProject,
            btnTag,
        }
    }
}
</script>

<style>

</style>