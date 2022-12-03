<template>
    <div id="app">
        <nav>
            <router-link to="/information">Informatie</router-link>
            |<router-link to="/login">Inloggen</router-link>
            |<router-link to="/signup">Registreren</router-link>
            |<router-link to="/reservation">Reservering</router-link>
            |<router-link to="/dashboard">Home</router-link>
            <router-view />
        </nav>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,500,600,700,800');

* {
    box-sizing: border-box;
}

body {
    background: #ffffff;
    min-height: 100vh;
    display: flex;
    font-weight: 400;
    font-family: 'Fira Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6, label, span {
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;
}

body, html, #app, #root, .auth-wrapper {
    width: 100%;
    height: 100%;
}

#app {
    text-align: center;
}

.navbar-light {
    background-color: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

/*.auth-wrapper .form-control:focus {
    border-color: #167bff;
    box-shadow: none;
}*/

/*.auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
}*/

.auth-wrapper h5, h4, h3 {
    color: rgb(33,66,73);
    text-align: center;
    margin: 10px;
    line-height: 1;
    padding: 15px;
}

.custom-control-label {
    font-weight: 400;
}

</style>
