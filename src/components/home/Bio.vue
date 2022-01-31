<template>
<div v-if="bio.loading">
    <Loading />
</div>
<div v-else-if="bio.err">
    <ErrorPage :err="bio.err" />
</div>
<div v-else class="bio">

    <div class="title-card">
        <NameCard />
        <div class="title">
        <h3>{{ bio.data[lang].title }}</h3>
        <h4>{{ bio.data[lang].subtitle }}</h4>
        <p>{{ bio.data[lang].shortDescription }}</p>
        </div>
    </div>
    <!-- <div class="body" v-for="str in useSplit(bio.data[lang].path)" :key="str">
        <p class="path">{{ str }}</p>
    </div> -->
    <div class="body">{{ bio.data[lang].path }}</div>
    <div class="body">
        <p class="achievement">{{ bio.data[lang].lastAchievement }}</p>
        <p class="goals">{{ bio.data[lang].professionalGoals }}</p>
    </div>
    <TimeLine />
</div>
</template>

<script lang="ts">
import TimeLine from '@/components/home/TimeLine.vue'
import NameCard from '@/components/home/NameCard.vue'
import ErrorPage from '@/components/common/ErrorPage.vue'
import Loading from '@/components/common/Loading.vue'
import { useGetBio } from '@/composables/useGetDocument/useGetDocument'
import { FirebaseData } from '@/customTypes/customTypes'
import { Ref, inject } from 'vue'
export default {
    name: 'Bio',
    setup(){
        const bio: Ref<FirebaseData> = useGetBio()
        const lang = inject('lang')
        const splitString = (str: string): string[] => {
            return str.split('\n')
        }
        return {
            bio,
            lang,
            splitString,
        }
    },
    components: {
        Loading,
        ErrorPage,
        NameCard,
        TimeLine,
    }

}
</script>

<style scoped>
.title-card {
    max-width: 1100px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-self: center;
    align-self: center;
    margin-top: 80px;
    margin-bottom: 80px;
    gap: 30px;
    align-items: center;
}
.title {
    border-left: 4px solid firebrick;
    padding-left: 5%;
    animation: 2s slideIn;
}
h3 {
    text-align: left;
    color: firebrick;
    font-size: 1.8rem;
}
h4 {
    text-align: left;
    font-size: 1.3rem;
    color: blue;
}
.title > p {
    text-align: left;
    font-size: 1rem;
}
.body {
    max-width: 1100px;
    margin: 25px auto;
    text-align: left;
    font-size: 1.2rem;
    animation: .8s fadeIn;
    white-space: pre-line;
}
.achievement {
    font-weight: bold;
}

/* animations */
@keyframes slideIn {
    0% {
        margin-left: 100%;
        width: 300%;
    }
    100% {
        margin-right: 0%;
        width: 100%;
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
    .title-card {
        max-width: 420px;
        grid-template-columns: 1fr;
        position: relative;
        top: 50px;
        left: 80px;
    }
    .bio {
        max-width: 460px;
    }
    .title {
        border-top: 4px solid firebrick;
        border-left: none;
        position: relative;
        top: -70px;
        left: -70px;
    }
    .title > h3 {
        font-size: 1.3rem;
    }
    .title > h4 {
        font-size: 1.1rem;
    }
    .body {
        width: 420px;
        position: relative;
        top: -80px;
    }
}
</style>