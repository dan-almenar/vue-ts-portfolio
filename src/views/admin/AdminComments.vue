<template>
  <div class="error" v-if="!user.user">
      <ErrorPage :err="forbidden" />
  </div>
  <div class="load-comments" v-else>
      <div class="loading" v-if="comments.loading">
          <h2>Fetching comments from database</h2>
          <Loading />          
      </div>
      <div class="error" v-else-if="comments.err">
            <ErrorPage :err="comments.err" />
      </div>
      <div class="comments-success" v-else>
          <!-- to be changed -->
          <p>{{ comments }}</p>
      </div>
  </div>
</template>

<script lang="ts">
import Loading from '@/components/common/Loading.vue'
import { useGetComments } from '@/composables/useGetDocuments/useGetDocuments'
import { getters } from '@/composables/store/store'
import { errors } from '@/customTypes/Errors'
import ErrorPage from '@/components/common/ErrorPage.vue'
import { FirebaseUser } from '@/customTypes/customTypes'
import { Ref } from 'vue'
export default {
    setup(){
        const user: Ref<FirebaseUser> = getters.user()
        const forbidden = errors.forbidden
        const comments = useGetComments()
        console.log('comments:', comments)        
        return {
            forbidden,
            user,
            comments
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