<script>
    export default {
        name: 'SignUpScreen'
    }
import {ref} from 'vue'
import {supabase} from '../supabase.js'
const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
    try {
      loading.value = true
      const { error } = await supabase.auth.signInWithOtp({
        email: email.value,
      })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading.value = false
    }
  }
</script>
<template>
    <div class="auth-wrapper">
        <div class="auth-inner">
            <img src="../assets/loods_logo.png" alt="de loods" style="width:100%;">
            <form id="signup-form" action="#">
                <div class="form-group">
                    <h3 id="naam">Vul hier je naam in</h3>
                    <input type="text"
                        class="form-control"
                        placeholder="Naam"
                        v-model="$store.state.name"
                        required />
                </div>

                <div class="form-group">
                    <h3>Vul hier je kenteken in</h3>
                    <input type="text"
                        class="form-control"
                        placeholder="X-999-XX"
                        v-model="$store.state.licenseplate"
                        required />
                </div>

                <div class="form-group">
                    <h3>Vul hier je email in</h3>
                    <input type="email"
                        class="form-control"
                        placeholder="Email"
                        v-model="$store.state.email"
                        required />
                </div>

                <div class="form-group">
                    <h3>Vul hier je wachtwoord in</h3>
                    <input type="password"
                        class ="form-control"
                        placeholder ="Wachtwoord"
                        v-model="$store.state.password"
                        required/>
                </div>
                <button class="btn btn-primary btn-block" @click="$router.push('information')">
                    Sign Up
                </button>
            </form>
        </div>
    </div>
</template>

<style>
    @import '../style/Login.css';
</style>

