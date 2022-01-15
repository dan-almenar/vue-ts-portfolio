<template>
<div class="error">
    <h3>Something went awefully wrong...</h3>
    <h2>{{ errorName }}</h2>
    <p>{{ errorMessage }}</p>
</div>
  
</template>

<script lang="ts">
// needs to be fixed
import { ref } from 'vue'
export default {
    name: 'ErrorPage',
    props: {
        err: {
            type: Error,
            required: true,
        },
    },
    setup(props: any) {
        const errorName = ref(props.err.name);
        const errorMessage = ref(props.err.message);
        return  {
            errorName,
            errorMessage
        }
    }
}
</script>

<style scoped>
.error {
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
}

h3 {
    font-size: 2rem;
}

h2 {
    font-size: 4rem;
    color: firebrick;
}

p {
    font-size: 1.5rem;
}
</style>