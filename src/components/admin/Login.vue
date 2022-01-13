<template>
<div class="login">
    <form @submit.prevent="login" method="post" autocomplete="true">
        <div class="form-group">
            <input type="email" class="form-control" id="email" v-model="email"
            :placeholder="lang === 'english' ? 'Please enter your email' : 'Ingrese su email'">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" id="password" v-model="password"
            :placeholder="lang === 'english' ? 'Enter your password' : 'Ingrese su contraseña'">
        </div>
        <button type="submit" class="btn">{{ lang === 'english' ? 'Login' : 'Ingresar'}}</button>
    </form>
</div>
  
</template>

<script lang=ts>
import { setUser } from '@/composables/store/store'
import { inject, Ref, ref } from 'vue'
import { useSignIn } from '@/composables/useSignIn/useSignIn'
import { FirebaseUser } from '@/customTypes/customTypes'
export default {
    name: 'Login',
    setup() {
        const email = ref('')
        const password = ref('')
        const lang = inject('lang')
        const login = (): void => {
            const user: Ref<FirebaseUser> = useSignIn(email.value, password.value)
            email.value = ''
            password.value = ''
            
        }
        return {
            login,
            lang,
            email,
            password,
        }
    }
}
</script>

<style scoped>
.login {
    margin: 50px;
}
input {
    margin: 5px auto;
    width: 275px;
    height: 40px;
    font-size: 1.2rem;
    padding-left: 25px;
    border-radius: 8px;
    outline: none;
    border: 2px solid blue;
}
input:focus {
    border: 3px solid blue;
    animation: 1s expand forwards;
}
.btn {
    margin-top: 15px;
    width: 300px;
    height: 40px;
    font-size: 1.2rem;
    border: 2px solid blue;
    border-radius: 8px;
    background: none;
    color: blue;
    outline: none;
    cursor: pointer;
}
.btn:hover{
    animation: .5s expand forwards;
    color: snow;
    background-color: blue;
    font-weight: bold;
    font-size: 1.3rem;
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
</style>