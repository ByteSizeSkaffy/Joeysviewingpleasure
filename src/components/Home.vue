<template>
    <div class="hello">
        <div class="menu">
            <div class="menu-item">
                <div class="menu-text" v-on:click="showinformation = !showinformation" >
                    Informatie
                </div>
            </div>
            <div class="menu-item menu-center">
                <img src="../assets/loods_logo_transparent.png" alt="de loods" style="width:125px;">
            </div>
            <div class="menu-item">
                <div class="menu-text" v-on:click="showreservation = !showreservation" >
                    Reservering
                </div>
            </div>
        </div>
        <div class="dashboard">
            <Googlemap class= "map" id="map"/>
            <ReservationScreen v-if="showreservation" id="reservation-popup"/>
            <InformationScreen v-if="showinformation" id="information-popup"/>
        </div>
    </div>
</template>

<script>
import Googlemap from '../components/Googlemap.vue'
import ReservationScreen from '../components/Reservations.vue'
import InformationScreen from '../components/Information.vue'

    export default {
        name: 'Home',
        data() {
            return {
            showreservation: false,
            showinformation: false
            }
        },
        components: {
            ReservationScreen,
            InformationScreen,
            Googlemap
        }
    }
</script>

<style>
    @import '../style/Home.css';
</style>