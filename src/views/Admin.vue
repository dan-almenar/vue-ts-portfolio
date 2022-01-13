<template>
  <div class="admin">
    <div v-if="user.loading" class="login">
      <Login />
    </div>
    <div v-else-if="user.err" class="err">
      <Error :err="user.err" />
    </div>
    <div v-else class="user">
      <h1>Welcome, Admin</h1>
      <p>({{ user.user.email }})</p>
    </div>
  </div>
</template>

<script lang="ts">
import Loading from '@/components/common/Loading.vue'
import { getters } from '@/composables/store/store'
import Error from '@/components/common/Error.vue'
import Login from '@/components/admin/Login.vue'
import { defineComponent, Ref } from 'vue'
import { FirebaseUser } from '@/customTypes/customTypes'

export default defineComponent({
  setup() {
    const user: Ref<FirebaseUser> = getters.user()
    return {
      user
    }
  },
  components: {
    Login,
    Error,
    Loading
  }
})
</script>
