<template>
  <div class="wrapper">
      <div @click="pushAdmin" class="profile-pic-container">
          <img class="profile-pic" :src="require('@/assets/profile pic.png')" alt="">
      </div>
      <div class="name-container">
          <div class="name">
              <h1 class="name-initial">{{ firstName[0] }}</h1>
              <h1 class="name-rest">{{ firstName.substring(1, ) }}</h1>
          </div>
          <div class="name">
              <h1 class="name-initial">{{ lastName.split(' ')[0][0] }}</h1>
              <h1 class="name-rest">{{ lastName.split(' ')[0].substring(1, ) }}</h1>
          </div>
          <div class="name">
              <h1 class="name-initial">{{ lastName.split(' ')[1][0] }}</h1>
              <h1 class="name-rest">{{ lastName.split(' ')[1].substring(1, ) }}</h1>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
export default {
    setup(){
        const router = useRouter()
        const pushAdmin: () => void = () => {
            router.push({ name: 'Admin' })
        }
        const firstName = 'Dan'
        const lastName = 'Almenar Williams'
        return {
            firstName,
            lastName,
            pushAdmin,
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: grid;
    width: 400px;
    height: 200px;
    margin-right: 0;
    margin-left: auto;
    padding-right: 5%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    gap: 50px;
}
.profile-pic {
    width: 150px;
    height: 150px;
    grid-row: 1/3;
}
.name-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-column: 2/3;
    justify-self: end;
    padding-right: 30px;
    font-size: 1.5rem;
    line-height: 0%;
}
.name {
    display: flex;
}
.name-initial {
    color: firebrick;
}
.name-rest {
    color: blue;
}

/* media queries */
@media (max-width: 480px){
    .wrapper {
        display: block;
        width: 60px;
        position: absolute;
        bottom: 450px;
        left: 25%;
    }
    .name-container {
        font-size: 1.2rem;
    }
}

</style>