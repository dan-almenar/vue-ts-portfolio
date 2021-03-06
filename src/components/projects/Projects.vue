<template>
<div v-if="projects.loading">
    <Loading />
</div>
    <div v-else-if="projects.err">
        <ErrorPage :err="badGateway" />
    </div>
    <div v-else>
        <div class="header">
            <h1>{{ lang === 'english' ? 'Projects' : 'Proyectos' }}</h1>
            <h3>{{ lang === 'english' ? 'A review of the proyects I\'ve worked on' : 'Una muestra de los proyectos en los que he trabajado'}}</h3>
        </div>
        <div class="filters">
            <input type="text" v-model="searchByTool"
                :placeholder="lang === 'english' ? 'Search by Languages' : 'Buscar por Lenguajes'">
            <br><input type="text" v-model="filterByDescription"
                :placeholder="lang === 'english' ? 'Search for description' : 'Buscar por descripción'">
        </div>
        <div class="projects-wrapper" v-for="project in projects.data" :key="project.links.url">
            <ProjectComponent :project="project" />
</div>
</div>
</template>

<script lang="ts">
import { FirebaseCollection, Language } from '@/customTypes/customTypes'
import { errors } from '@/customTypes/Errors'
import { provide, inject, ref, Ref, ComputedRef, computed } from 'vue'
import ProjectComponent from '@/components/projects/Project.vue'
import Loading from '@/components/common/Loading.vue'
import ErrorPage from '@/components/common/ErrorPage.vue'
import { useGetProjects } from '@/composables/useGetDocuments/useGetDocuments'
export default {
    name: 'Projects',
    setup() {
        const lang = inject('lang') as Ref<Language>
        const { badGateway } = errors
        const projects: Ref<FirebaseCollection> = useGetProjects()
        const searchByTool: Ref<string> = ref('')
        const filterByDescription: Ref<string> = ref('')

        // computed
        const filterByTool: ComputedRef<string[]> = computed(() => searchByTool.value.split(', '))

        provide('filterByTool', filterByTool)
        provide('filterByDescription', filterByDescription)


        return {
            lang,
            badGateway,
            projects,
            searchByTool,
            filterByDescription,
        }
    },
    components: {
        Loading,
        ErrorPage,
        ProjectComponent,
    }
}
</script>

<style scoped>
h1 {
    color: blue;
}
h3 {
    color: firebrick;
}
.header {
    animation: 2s fadeIn forwards;
}
.filters {
    margin-top: 50px;
    animation: 2s fadeIn forwards;
}
.projects-wrapper {
    margin-top: 25px;
}
input {
    margin: 5px auto;
    width: 300px;
    height: 40px;
    font-size: 1.2rem;
    padding-left: 25px;
    border-radius: 8px;
    outline: none;
    border: 2px solid blue;
    font-family: Helvetica;
}
input:focus {
    border: 3px solid blue;
    animation: 1s expand forwards;
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
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* media queries */
@media (max-width: 480px) {
    .header {
        position: absolute;
        width: 280px;
        top: 50px;
        left: 80px;
    }
    .filters {
        position: absolute;
        top: 140px;
        left: 100px;
    }
    input {
        margin: 5px auto;
        width: 200px;
        height: 30px;
        font-size: 1rem;
        padding-left: 25px;
        border-radius: 8px;
        outline: none;
        border: 2px solid blue;
        font-family: Helvetica;
    }
    input:focus {
        width: 230px;
        border: 3px solid blue;
        animation: none;
    }
    .projects-wrapper {
        position: relative;
        top: 20px;
        left: 40px;
    }
}
</style>