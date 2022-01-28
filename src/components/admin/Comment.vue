<template>
<div class="comment">
    <h3 class="name">{{ comment.name }}</h3>
    <h4 class="email">{{ comment.email }}</h4>
    <p class="message">{{ comment.message }}</p>
    <span class="date">{{ date }} </span>
</div>  
</template>

<script lang="ts">
import { computed, ComputedRef, Ref, ref } from 'vue'
import { ContactFormInput } from '@/customTypes/customTypes'
export default {
    name: 'Comment',
    props: {
        commentData: {
            type: Object,
            required: true,
        },
    },
    setup(props: any) {
        const comment: Ref<ContactFormInput> = ref(props.commentData)
        const date: ComputedRef<Date> = computed(() => new Date(comment.value.date))
        return {
            comment,
            date
        }
    },
}
</script>

<style scoped>
.comment {
    width: 400px;
    border-top: 4px solid firebrick;
    border-left: 4px solid firebrick;
    border-radius: 8px;
    padding: 30px;
    padding-top: 0px;
    margin: 15px auto;
    text-align: left;
}
.name {
    color: blue;
    font-size: 1.6rem;
    line-height: .8rem;
}
.email {
    color: firebrick;
    font-size: .9rem;
    line-height: .6rem;
}
.message {
    font-size: 1.4rem;
    padding-left: 30px;
}
</style>