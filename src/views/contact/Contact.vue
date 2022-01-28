<template>
  <h1>{{ lang === 'english' ? 'Contact' : 'Contacto' }}</h1>
  <div class="contact">
    <div v-if="saveOK.loading" class="loading">
      <Loading />
    </div>
    <div v-else-if="saveOK.error" class="error">
      <ErrorPage :err="saveOK.error"/>
    </div>
    <div v-else-if="saveOK.status === 200" class="save-ok">
      <p>Your comment has been sent.</p>
      <p>Redirecting to Home page...</p>
    </div>
    <div v-else class="contact-form">
      <ContactForm />
    </div>
  </div>
</template>

<script lang="ts">
import{ Router, useRouter } from 'vue-router'
import { defineComponent, inject, Ref, watch } from 'vue'
import { errors } from '@/customTypes/Errors'
import { getters } from '@/composables/store/store'
import { SaveDocumentStatus } from '@/customTypes/customTypes'
import { Language } from 'highlight.js'
import Loading from '@/components/common/Loading.vue'
import ErrorPage from '@/components/common/ErrorPage.vue'
import ContactForm from '@/components/contact/ContactForm.vue'

export default defineComponent({
  setup() {
    const router: Router = useRouter()
    const lang: Ref<Language> = inject('lang') as Ref<Language>
    const badGateway: Error = errors.badGateway
    const saveOK: Ref<SaveDocumentStatus> = getters.saveOK()

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
    }
  },
  components: {
    Loading,
    ErrorPage,
    ContactForm,
  }
})
</script>
<style scoped>

</style>
