<template>
  <div class="admin">
    <div v-if="user.loading" class="login">
      <Login />
    </div>
    <div v-else-if="user.err" class="err">
      <ErrorPage :err="user.err" />
    </div>
    <div v-else class="user">
      <h1>{{ lang === 'english' ? 'Admin area' : 'Área de admin'}}</h1>
      <p>({{ user.user.email }})</p>
      <button @click="loadComments" class="btn">
        {{ lang === "english" ? "Read comments" : "Ver comentarios" }}
      </button>
      <button @click="createProject" class="btn">
        {{ lang === "english" ? "Create Project" : "Crear Proyecto" }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { useGetComments } from "@/composables/useGetDocuments/useGetDocuments";
import { getters } from "@/composables/store/store";
import ErrorPage from "@/components/common/ErrorPage.vue";
import Login from "@/components/admin/Login.vue";
import { defineComponent, Ref } from "vue";
import { FirebaseUser } from "@/customTypes/customTypes";

export default defineComponent({
  setup() {
    const router = useRouter()
    const lang = getters.lang()
    const documents = useGetComments()
    const user: Ref<FirebaseUser> = getters.user()
    const loadComments = (): void => {
      router.push({name: 'AdminComments'})
    }
    const createProject = (): void => {
      router.push({name: 'AdminCreateProject'})
    }
    return {
      user,
      documents,
      lang,
      loadComments,
      createProject,
    }
  },
  components: {
    Login,
    ErrorPage,
  },
});
</script>
<style scoped>
.btn {
  margin-top: 15px;
  width: 300px;
  height: 40px;
  font-size: 1.2rem;
  border: 2px solid blue;
  border-radius: 8px;
  background: none;
  color: blue;
  outline: none;
  cursor: pointer;
}
.btn:hover {
  animation: 0.5s expand forwards;
  color: snow;
  background-color: blue;
  font-weight: bold;
  font-size: 1.3rem;
}
.user {
  line-height: .7rem;
    margin-top: 50px;
}
.user > h1 {
  font-size: 2.4rem;
  color: blue;
}
.user > p {
  color: firebrick;
  font-weight: bold;
}
/* animations */
@keyframes expand {
  0% {
    transform: scale(0.8);
    width: 300px;
  }
  100% {
    transform: scale(1);
    width: 350px;
  }
}
</style>
