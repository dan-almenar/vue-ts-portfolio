<template>
    <div class="contact-form">
        <form @submit="submit" method="post">
        <input type="text" v-model="name" :placeholder="lang === 'english' ? 'Name' : 'Nombre'" required>
        <br><input type="email" v-model="email" placeholder="email" required>
        <br><textarea
            :class="textAreaClass"
            v-model="message" :placeholder="lang === 'english' ? 'Write your comment here' : 'Escriba su mensaje acá'" :maxlength="maxCharacters" required />
        <p
            :class="remainingCharactersClass">
            {{ remainingCharacters }}
        </p>
      <br><button class="btn">
        {{ lang === 'english' ? 'Send' : 'Enviar' }}
      </button>        
        </form>
    </div>
    <div class="submit">

    </div>
</template>

<script lang="ts">
import { Ref, ref, inject, ComputedRef, computed } from 'vue'
import { ContactFormInput, SaveDocumentStatus, Language } from '@/customTypes/customTypes'
import { useSetComment } from '@/composables/useSetDocument/useSetDocument'
import { getters } from '@/composables/store/store'

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

        const textAreaClass: ComputedRef<string> = computed(() =>{
            if (message.value.length >= 30 && message.value.length <= 125){
                return 'expanded'
            } else if (message.value.length > 125 && message.value.length <=300) {
                return 're-expanded'
            } else if (message.value.length > 300) {
                return 'max-expanded'
            } else {
                return ''
            }
        })

        const remainingCharactersClass: ComputedRef<string> = computed(() => {
            if (remainingCharacters.value === maxCharacters) {
                return 'hidden'
            } else if (remainingCharacters.value < 100) {
                return 'remaining-warning'
            } else {
                return 'remaining'
            }
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
            textAreaClass,
            saveOK,
            lang,
            name,
            email,
            message,
            submit,
            maxCharacters,
            remainingCharacters,
            remainingCharactersClass,
        }
    }

}
</script>

<style scoped>
.hidden {
    display: none;
}
.expanded {
    width: 350px;
    height: 100px;
}
.re-expanded {
    width: 350px;
    height: 260px;
}
.max-expanded {
    width: 350px;
    height: 440px;
}
.remaining {
    margin: auto;
    width: 350px;
    font-size: 1.2rem;
    color: green;
    text-align: right;
    animation: .5s expand forwards;
}
.remaining-warning {
    margin: auto;
    width: 350px;
    font-size: 1.5rem;
    font-weight: bold;
    color: firebrick;
    text-align: right;
}
.input-warning {
    margin: auto;
    width: 350px;
    font-size: 1.5rem;
    font-weight: bold;
    color: firebrick;
    text-align: center;

}
input, textarea {
    margin: 5px auto;
    height: 40px;
    width: 280px;
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

/* media queries */
@media (max-width: 480px){
    .btn {
        margin-top: 15px;
        width: 220px;
        height: 40px;
        font-size: 1.2rem;
    }
    .btn:hover{
        animation: none;
        width: 240px;
        font-size: 1.3rem;
    }
    input, textarea {
        margin: 5px auto;
        width: 200px;
        height: 40px;
        font-size: 1rem;
        padding-left: 20px;
    }
    input:focus, textarea:focus {
        width: 220px;
        animation: none;
    }
    .expanded {
        width: 240px;
        height: 110px;
    }
    .re-expanded {
        width: 240px;
        height: 270px;
    }
    .max-expanded {
        width: 240px;
        height: 455px;
    }
    .remaining {
        width: 240px;
        font-size: .9rem;
        animation: none;
    }
    .remaining-warning {
        width: 240px;
        font-size: 1.2rem;
    }    
}
</style>