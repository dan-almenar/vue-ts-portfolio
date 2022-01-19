<template>
  <p>&copy; {{ currentYear }} Dan Almenar Williams</p>
</template>

<script>
export default {
    name: 'Footer',
    setup(){
        const currentYear = new Date().getUTCFullYear()
        return {
            currentYear
        }
    }

}
</script>

<style scoped>
p {
    margin-top: 100px;
    margin-bottom: 100px;
}
</style>