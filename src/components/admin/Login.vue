<template>
<div v-if="!loginLoading" class="login">
    <form @submit.prevent="login" method="post" autocomplete="true">
        <div class="form-group">
            <input type="email"
            :class="[email.length > 0 ? 'expanded' : '', 'form-control']" id="email" v-model="email"
            :placeholder="lang === 'english' ? 'Please enter your email' : 'Ingrese su email'">
        </div>
        <div class="form-group">
            <input :type="showPassword ? 'text' : 'password'"
            :class="[password.length > 0 ? 'expanded' : '', 'form-control']" id="password" v-model="password"
            :placeholder="lang === 'english' ? 'Enter your password' : 'Ingrese su contraseña'">
            <button @click.prevent="toggleShowPassword" class="eye-icon">
                <EyeIcon 
                :title="lang === 'english' ? 'Show password' : 'Mostrar contraseña'"
                :size="iconSize"
                fillColor='blue' /></button>
        </div>
        <button type="submit" class="btn">{{ lang === 'english' ? 'Login' : 'Ingresar'}}</button>
    </form>

</div>
<div v-else class="loading">
    <Loading />
</div>
  
</template>

<script lang=ts>
import Loading from '@/components/common/Loading.vue'
import { computed, inject, Ref, ref } from 'vue'
import { useSignIn } from '@/composables/useSignIn/useSignIn'
import { FirebaseUser, Language } from '@/customTypes/customTypes'
import EyeIcon from 'vue-material-design-icons/Eye.vue'
export default {
    name: 'Login',
    setup() {
        const iconSize = 25
        const loginLoading = ref(false)
        const email = ref('')
        const password = ref('')
        const showPassword: Ref<boolean> = ref(false) 
        const lang = inject('lang') as Ref<Language>
        const login = (): void => {
            const user: Ref<FirebaseUser> = useSignIn(email.value, password.value)
            email.value = ''
            password.value = ''
            loginLoading.value = true
            
        }
        const btnTag = computed(() => {
            const tag = lang.value === 'english' ? 'test button' : 'botón de prueba'
            return tag
        })
        const toggleShowPassword: () => void = () => {
            showPassword.value = !showPassword.value
        }
        return {
            login,
            lang,
            email,
            password,
            loginLoading,
            btnTag,
            toggleShowPassword,
            showPassword,
            iconSize,
        }
    },
    components: {
        Loading,
        EyeIcon,
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
    animation: .5s expand forwards;
}
.expanded {
    width: 350px;
    animation: none;
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
#password {
    margin-left: 33px;
}
.eye-icon {
    position: relative;
    top: 5px;
    left: 0px;
    cursor: pointer;
    background: none;
    border: none;
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

/* media queries */
@media (max-width: 480px){
    input {
        margin: 5px auto;
        width: 200px;
        height: 40px;
        font-size: 1rem;
        padding-left: 20px;
        border-radius: 8px;
        outline: none;
        border: 2px solid blue;
    }
    input:focus {
        border: 3px solid blue;
        width: 220px;
        animation: none;
    }
    .expanded {
        width: 220px;
        animation: none;
    }
    #password {
        margin-left: 33px;
    }
    .btn {
        margin-top: 15px;
        width: 220px;
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
        animation: none;
        width: 240px;
        color: snow;
        background-color: blue;
        font-weight: bold;
        font-size: 1.3rem;
    }    
}
</style>