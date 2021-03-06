<template>
  <div class="wrapper">
    <div class="error" v-if="!user.user">
      <ErrorPage :err="forbidden" />
    </div>
    <div v-else>
      <div v-if="saveOK.loading">
        <Loading />
      </div>
      <div v-else-if="saveOK.error">
        <ErrorPage :err="badGateway" />
      </div>
      <div v-if="!saveOK.loading && !saveOK.error && !saveOK.saveDocumentOK">
        <div class="create-project-form">
          <n-switch v-model:value="bilingual"
          :rail-style="railStyle"
          size="large">
            <template
            #checked>
              {{ labelTag }}
            </template>
            <template
            #unchecked>
              {{ labelTag }}
            </template>
          </n-switch>
          <CreateProject :isSecondForm="false" />
          <CreateProject v-if="bilingual" :isSecondForm="true" />
        </div>
        <div class="submit">
          <button @click="postProject" class="btn">{{ btnTag }}</button>
        </div>
      </div>
      <div v-if="saveOK.status === 200" class="success">
        <Redirect :message="redirectMessage" :destination="redirectTo" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  useSetProject,
  updateTitle,
  updateDescription,
  updateLangsAndTools,
  updateLinks
  } from '@/composables/createProjectHandler/createProjectHandler'
import { useRouter } from 'vue-router'
import { NSwitch } from 'naive-ui'
import CreateProject from '@/components/admin/CreateProject.vue'
import ErrorPage from '@/components/common/ErrorPage.vue'
import Loading from '@/components/common/Loading.vue'
import Redirect from '@/components/common/Redirect.vue'
import { computed, ComputedRef, inject, ref, Ref, unref, watch } from 'vue'
import { getters } from '@/composables/store/store'
import { errors } from '@/customTypes/Errors'
import { FirebaseUser, Language, SaveDocumentStatus } from '@/customTypes/customTypes'
export default {
  setup(){
    const router = useRouter()
    const lang = inject('lang') as Ref<Language>
    const user: Ref<FirebaseUser> = getters.user()
    const saveOK: Ref<SaveDocumentStatus> = getters.saveOK()
    const forbidden: Error = errors.forbidden
    const badGateway: Error = errors.badGateway
    const bilingual: Ref<boolean> = ref(false)

    // computed:
    const btnTag: ComputedRef<string> = computed(() => {
      return lang.value === 'english' ? 'Create Project' : 'Crear Proyecto'
    })
    const labelTag: ComputedRef<string> = computed(() =>{
      return lang.value === 'english' ? 'Create in both languages' : 'Crear en ambos idiomas'
    })
    const createProject:() => void = () => {
      console.log('create project')
    }
    const bilingualLanguage: ComputedRef<Language> = computed(() =>{
      return lang.value === 'english' ? 'spanish' : 'english'
    })
    const redirectMessage: ComputedRef<string> = computed(() => {
      return lang.value === 'english' ? 'Project successfully created in the database' : 'Proyecto creado satisfactoriamente en la base de datos'
    })
    const redirectTo: ComputedRef<string> = computed(() => {
      return lang.value === 'english' ? 'Projects' : 'Proyectos'
    })

    // NSwitch style
    const railStyle = ({ focused=false, checked=false }): {backgroundColor: string, boxShadow: string, fontSize: string} => {
      let style = {
        backgroundColor: '',
        boxShadow: '',
        fontSize: '1.3rem'
      }
      if (checked){
        style.backgroundColor = 'blue'
        if (focused){
          style.boxShadow = '0 0 0 2px blue'
        }
      } else {
        style.backgroundColor = 'firebrick'
        if (focused){
          style.boxShadow = '0 0 0 2px firebrick'
        }
      }
      return style
    }

    // watchers:
    watch(saveOK, (oldVal, newVal) => {
      if (oldVal.loading === false && newVal.status === 200) {
        router.push({name: 'Projects'})
      }
    })

    // button handler
    const clearProjectConstructor: () => void = () => {
      updateTitle(unref(lang), ref(''))
      updateDescription(unref(lang), ref(''))
      updateLangsAndTools(ref(''))
      updateLinks(ref({platform: '', url: ''}))
    }
    const postProject: () => void = () => {
      useSetProject()
      clearProjectConstructor()
    }

    return {
      saveOK,
      user,
      forbidden,
      bilingual,
      btnTag,
      createProject,
      labelTag,
      bilingualLanguage,
      railStyle,
      postProject,
      badGateway,
      redirectMessage,
      redirectTo,
    }
  },
  components: {
    ErrorPage,
    CreateProject,
    NSwitch,
    Loading,
    Redirect,
  }
}
</script>

<style scoped>
.create-project-form {
  margin-top: 50px;
}
.bilingual {
  width: 20px;
  height: 20px;
}
.bilingual-label {
  padding-left: 10px;
  color: blue;
  font-size: 1.2rem;
  font-weight: bold;
}
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
.btn:hover{
    animation: .5s expand forwards;
    color: snow;
    background-color: blue;
    font-weight: bold;
    font-size: 1.3rem;
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

/* media queries */
@media (max-width: 480px){
  .wrapper {
      position: relative;
      top: -250px;
      left: 30px;
  }
  .btn {
        margin-top: 15px;
        width: 220px;
        height: 40px;
        font-size: 1.2rem;
        border: 2px solid blue;
        border-radius: 8px;
        background: none;
        color: blue;
        outline: none;
        cursor: pointer;
  }
  .btn:hover{
        animation: none;
        width: 240px;
        color: snow;
        background-color: blue;
        font-weight: bold;
        font-size: 1.3rem;
  }  
}
</style>