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
          <div class="comment" v-for="comment in comments.data" :key="comment.date">
              <Comment :commentData="comment" />
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import Comment from '@/components/admin/Comment.vue'
import Loading from '@/components/common/Loading.vue'
import { useGetComments } from '@/composables/useGetDocuments/useGetDocuments'
import { getters } from '@/composables/store/store'
import { errors } from '@/customTypes/Errors'
import ErrorPage from '@/components/common/ErrorPage.vue'
import { FirebaseCollection, FirebaseUser } from '@/customTypes/customTypes'
import { Ref } from 'vue'
export default {
    setup(){
        const user: Ref<FirebaseUser> = getters.user()
        const forbidden: Error = errors.forbidden
        const comments: Ref<FirebaseCollection> = useGetComments()    
        return {
            forbidden,
            user,
            comments
        }
    },
    components: {
        ErrorPage,
        Loading,
        Comment,
    }
}
</script>

<style scoped>
.load-comments {
    margin-top: 50px;
}

</style>