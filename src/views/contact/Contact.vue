<template>
  <h1>{{ lang === 'english' ? 'Contact' : 'Contacto' }}</h1>
  <div class="contact">
    <div v-if="isLoading" class="loading">
      <Loading />
    </div>
    <div v-if="isSavingComment && saveOK.error" class="error">
      <ErrorPage :err="badGateway"/>
    </div>
    <div v-if="!isLoading && !isSavingComment" class="comment-form">
      <ContactForm />
      <!-- NOTE MOVE BUTTON TO CONTACTFORM COMPONENT -->
      <button>
        {{ lang === 'english' ? 'Send' : 'Enviar' }}
      </button>
    </div>    
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, Ref } from 'vue'
import { errors } from '@/customTypes/Errors'
import { getters } from '@/composables/store/store'
import { SaveDocumentStatus } from '@/customTypes/customTypes'
import { Language } from 'highlight.js'
import Loading from '@/components/common/Loading.vue'
import ErrorPage from '@/components/common/ErrorPage.vue'
import ContactForm from '@/components/contact/ContactForm.vue'

export default defineComponent({
  setup() {
    const lang: Ref<Language> = inject('lang') as Ref<Language>
    const isLoading: Ref<boolean> = ref(false)
    const isSavingComment: Ref<boolean> =ref(false)
    const badGateway: Error = errors.badGateway
    const saveOK: Ref<SaveDocumentStatus> = getters.saveOK()
    return {
      isLoading,
      isSavingComment,
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
</style>
