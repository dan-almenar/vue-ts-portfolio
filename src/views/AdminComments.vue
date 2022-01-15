<template>
  <div class="error" v-if="!user.user">
      <Error :err="forbidden" />
  </div>
  <div class="load-comments" v-else>
      <h2>Fetching comments from database</h2>
      <Loading />
  </div>
</template>

<script lang="ts">
import { getters } from '@/composables/store/store'
import { errors } from '@/customTypes/Errors'
import ErrorPage from '@/components/common/ErrorPage.vue'
import Loading from '@/components/common/Loading.vue'
import { FirebaseUser } from '@/customTypes/customTypes'
import { Ref } from 'vue'
export default {
    setup(){
        const user: Ref<FirebaseUser> = getters.user()
        const forbidden = errors.forbidden
        return {
            forbidden,
            user
        }
    },
    components: {
        ErrorPage,
        Loading,
    }
}
</script>

<style scoped>
.load-comments {
    margin-top: 50px;
}

</style>