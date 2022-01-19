<template>
    <div class="error" v-if="!user.user">
      <ErrorPage :err="forbidden" />
    </div>
    <div class="create-project-form" v-else>
      <CreateProject />
    </div>
</template>

<script lang="ts">
import CreateProject from '@/components/admin/CreateProject.vue'
import ErrorPage from '@/components/common/ErrorPage.vue'
import { inject, Ref } from 'vue'
import { getters } from '@/composables/store/store'
import { errors } from '@/customTypes/Errors'
import { FirebaseUser } from '@/customTypes/customTypes'
export default {
  setup(){
    const user: Ref<FirebaseUser> = getters.user()
    const forbidden: Error = errors.forbidden
    return {
      user,
      forbidden
    }
  },
  components: {
    ErrorPage,
    CreateProject,
  }
}
</script>

<style>

</style>