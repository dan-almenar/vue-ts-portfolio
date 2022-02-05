<template>
<div class="wrapper">
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
          <div class="comment" v-for="comment in comments.data" :key="comment.date">
              <Comment :commentData="comment" />
          </div>
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
.comment {
    animation: 1s fadeIn forwards;
}

/* animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* media queries */
@media (max-width: 480px){
    .wrapper {
        width: 420px;
        position: relative;
        top: -230px;
        left: 40px;
    }
    h2{
        width: 340px;
    }
    .comment {
        margin-bottom: 50px;
    }
}

</style>