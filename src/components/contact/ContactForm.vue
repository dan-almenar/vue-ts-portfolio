<template>
    <div>
    <!-- component under development -->
    </div>
</template>

<script lang="ts">
import { Ref, ref } from 'vue'
import { ContactFormInput, SaveDocumentStatus } from '@/customTypes/customTypes'
import { useSetComment } from '@/composables/useSetDocument/useSetDocument'
export default {
    setup(){
        const name: Ref<string> = ref('')
        const email: Ref<string> = ref('')
        const message: Ref<string> = ref('')


        const submit = (): void => {
            const formInput: Ref<ContactFormInput> = ref({
                name: name,
                email: email,
                message: message,
                date: new Date(Date.now())
            })

            const saveOK: Ref<SaveDocumentStatus> = useSetComment(formInput)
            
            name.value = ''
            email.value = ''
            message.value = ''
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