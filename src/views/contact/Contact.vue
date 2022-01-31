<template>
  <h1>{{ lang === 'english' ? 'Contact me:' : 'Contácteme:' }}</h1>
  <div class="contact">
    <div v-if="saveOK.loading" class="loading">
      <Loading />
    </div>
    <div v-else-if="saveOK.error" class="error">
      <ErrorPage :err="saveOK.error"/>
    </div>
    <div v-else-if="saveOK.status === 200" class="save-ok">
      <Redirect :message="redirectMessage" :destination="redirectTo" />
    </div>
    <div v-else class="contact-form">
      <ContactForm />
    </div>
  </div>
</template>

<script lang="ts">
import{ Router, useRouter } from 'vue-router'
import { computed, ComputedRef, defineComponent, inject, Ref, watch } from 'vue'
import { errors } from '@/customTypes/Errors'
import { getters } from '@/composables/store/store'
import { SaveDocumentStatus } from '@/customTypes/customTypes'
import { Language } from '@/customTypes/customTypes'
import Loading from '@/components/common/Loading.vue'
import ErrorPage from '@/components/common/ErrorPage.vue'
import Redirect from '@/components/common/Redirect.vue'
import ContactForm from '@/components/contact/ContactForm.vue'

export default defineComponent({
  setup() {
    const router: Router = useRouter()
    const lang: Ref<Language> = inject('lang') as Ref<Language>
    const badGateway: Error = errors.badGateway
    const saveOK: Ref<SaveDocumentStatus> = getters.saveOK()
    const redirectMessage: ComputedRef<string> = computed(() => {
      return lang.value == 'english' ? 'Your message has been succesfully sent' : 'Su mensaje se ha enviado correctamente'
    })
    const redirectTo: ComputedRef<string> = computed(() => {
      return lang.value === 'english' ? 'Home' : 'Inicio'
    })

    watch(saveOK, (oldVal, newVal) => {
      // oldVal.loading === false && newVal.status === 200 means the
      // comment was succesfully saved to the database
      if(oldVal.loading === false && newVal.status === 200) {
        console.log('redirecting...')
        router.push({name: 'Home'})
      }
    })

    return {
      saveOK,
      badGateway,
      lang,
      redirectMessage,
      redirectTo,
    }
  },
  components: {
    Loading,
    ErrorPage,
    ContactForm,
    Redirect,
  }
})
</script>
<style scoped>
h1 {
  color: green;
}
</style>
