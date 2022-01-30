<template>
<h1>{{ lang === 'english' ? 'Projects' : 'Proyectos' }}</h1>
<h3>{{ lang === 'english' ? 'A review of the proyects I\'ve worked on' : 'Una muestra de los proyectos en los que he trabajado'}}</h3>
<!-- test code -->
<div v-if="isLoading">
    <Loading />
</div>
<div v-if="isError">
    <ErrorPage :err="badGateway" />
</div>
<!-- end of test code -->

</template>

<script lang="ts">
import { Language } from '@/customTypes/customTypes'
import { errors } from '@/customTypes/Errors'
import { inject, ref, Ref } from 'vue'
import Loading from '@/components/common/Loading.vue'
import ErrorPage from '@/components/common/ErrorPage.vue'
export default {
    name: 'Projects',
    setup() {
        const lang = inject('lang') as Language
        const { badGateway } = errors
        //to be deleted
        const isLoading: Ref<boolean> = ref(false)
        const isError: Ref<boolean> = ref(false)
        //end of to be deleted
        return {
            lang,
            badGateway,
            isLoading,
            isError,
        }
    },
    components: {
        Loading,
        ErrorPage,
    }
}
</script>

<style scoped>
h1, h3 {
    color: blue;
}
</style>