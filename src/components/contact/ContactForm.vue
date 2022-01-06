<template>
  
</template>

<script lang="ts">
import { Ref, ref } from 'vue'
import { ContactFormInput, SaveDocumentStatus } from '@/customTypes/customTypes'
import { useSetDoc } from '@/composables/useSetDoc/useSetDoc'
export default {
    setup(){
        const name: Ref<string> = ref('')
        const email: Ref<string> = ref('')
        const message: Ref<string> = ref('')

        const { doc, func } = useSetDoc()

        const submit = (): void => {
            const formInput: Ref<ContactFormInput> = ref({
                name: name,
                email: email,
                message: message,
                date: new Date(Date.now())
            })

            func(formInput)
        }

        return {
            name,
            email,
            message,
            submit,
        }
    }

}
</script>

<style>

</style>