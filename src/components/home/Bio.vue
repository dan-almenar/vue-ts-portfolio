<template>

<!-- test code -->
<div v-if="bio.loading">
    <Loading />
</div>
<div v-else-if="bio.err">
    <Error :err="bio.err" />
</div>
<div v-else>
    <p>{{ bio.data[lang] }}</p>
</div>
<!-- end of test code   -->

</template>

<script lang="ts">
import Error from '@/components/common/Error.vue'
import Loading from '@/components/common/Loading.vue'
import { useGetBio } from '@/composables/useGetDocument/useGetDocument'
import { FirebaseData } from '@/customTypes/customTypes'
import { Ref, inject } from 'vue'
export default {
    name: 'Bio',
    setup(){
        const bio: Ref<FirebaseData> = useGetBio()
        const lang = inject('lang')
        return {
            bio,
            lang,
        }
    },
    components: {
        Loading,
        Error,
    }

}
</script>

<style>

</style>