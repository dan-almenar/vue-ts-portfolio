<template>
    <div class="save-ok">
        <p>{{ message }}</p>
        <p>Redirecting to {{ destination }}</p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Redirect',
    props: {
        message: {
            type: String,
            required: true,
        },
        destination: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        return {
            props,
        }
    },        
})
</script>
<style scoped>
.save-ok {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.5em;
  text-align: center;
  animation: 1.5s fadeIn forwards;
}

/* animations */
@keyframes fadeIn {
  from {
    margin-top: -50px;
    opacity: 0;
  }
  to {
    margin-top: 50;
    opacity: 1;
  }
}
</style>
