<template>
    <div class="auth-wrapper">
        <div class="auth-inner">
            <img src="../assets/loods_logo.png" alt="de loods" style="width:100%;">
            <form id="signup-form" action="#">
                
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
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<style>
    @import '../style/Login.css';
</style>

<script>
    export default {
        name: 'LoginScreen'
    }
</script>