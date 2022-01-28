<template>
    <div class="contact-form">
        <input type="text" v-model="name" :placeholder="lang === 'english' ? 'Name' : 'Nombre'" required>
        <br><input type="email" v-model="email" placeholder="email" required>
        <br><textarea
            :class="message.length >= 40 ? 'expanded' : ''"
            v-model="message" :placeholder="lang === 'english' ? 'Write your comment here' : 'Escriba su mensaje acá'" :maxlength="maxCharacters" required />
        <br><span
            :class="remainingCharacters < maxCharacters ? 'remaining' : 'hidden'">
            {{ remainingCharacters }}
        </span>
    </div>
    <div class="submit">
      <button @click="submit" class="btn">
        {{ lang === 'english' ? 'Send' : 'Enviar' }}
      </button>        
    </div>
</template>

<script lang="ts">
import { Ref, ref, inject, ComputedRef, computed } from 'vue'
import { ContactFormInput, SaveDocumentStatus, Language } from '@/customTypes/customTypes'
import { useSetComment } from '@/composables/useSetDocument/useSetDocument'
import { getters, setSaveOK } from '@/composables/store/store'

export default {
    setup(){
        const saveOK: Ref<SaveDocumentStatus> = getters.saveOK()
        const lang: Ref<Language> = inject('lang') as Ref<Language>
        const name: Ref<string> = ref('')
        const email: Ref<string> = ref('')
        const message: Ref<string> = ref('')
        const maxCharacters = 600

        const remainingCharacters: ComputedRef<number> = computed(() =>{
            return maxCharacters - message.value.length
        })

        const clearForm: () => void = () => {
            name.value = ''
            email.value = ''
            message.value = ''
        }

        const submit = (): void => {
            const formInput: Ref<ContactFormInput> = ref({
                name: name.value,
                email: email.value,
                message: message.value,
                date: Date.now()
            })

            useSetComment(formInput)
            
            clearForm()
        }

        return {
            saveOK,
            lang,
            name,
            email,
            message,
            submit,
            maxCharacters,
            remainingCharacters,
        }
    }

}
</script>

<style scoped>
.hidden {
    display: none;
}
.expanded {
    height: 300px;
}
input, textarea {
    margin: 5px auto;
    width: 275px;
    height: 40px;
    font-size: 1.2rem;
    padding-left: 25px;
    border-radius: 8px;
    outline: none;
    border: 2px solid green;
    font-family: Helvetica;
}
input:focus, textarea:focus {
    border: 3px solid green;
    animation: 1s expand forwards;
}
.btn {
    margin-top: 15px;
    width: 300px;
    height: 40px;
    font-size: 1.2rem;
    border: 2px solid green;
    border-radius: 8px;
    background: none;
    color: green;
    outline: none;
    cursor: pointer;
}
.btn:hover{
    animation: .5s expand forwards;
    color: snow;
    background-color: green;
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
@keyframes smoothExpand {
    100% {
        height: 250;
    }
}
</style>