<template>
    <div>
        <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="{ lat: lat, lng: lng }" :zoom="19">
            <Marker :options="{ position: { lat: 52.039943, lng: 4.328807 }, icon: icon1}" @click="changeIcon(1)">
                <InfoWindow>
                    <div id="contet">
                        <div id="siteNotice"></div>
                            <h1 id="firstHeading" class="firstHeading">Laadpaal 1</h1>
                                <div id="bodyContent">
                                    <p>
                                    Test
                                    </p>
                        </div>
                    </div>
                </InfoWindow>
            </Marker>
            <Marker :options="{ position: { lat: 52.040052, lng: 4.328697 }, icon: icon2}" @click="changeIcon(2)">
                <InfoWindow>
                    <div id="contet">
                        <div id="siteNotice"></div>
                            <h1 id="firstHeading" class="firstHeading">Laadpaal 1</h1>
                                <div id="bodyContent">
                                    <p>
                                    Test
                                    </p>
                        </div>
                    </div>
                </InfoWindow>
            </Marker>
            <Marker :options="{ position: { lat: 52.040166, lng: 4.328587 }, icon: icon3}" @click="changeIcon(3)">
                <InfoWindow>
                    <div id="contet">
                        <div id="siteNotice"></div>
                            <h1 id="firstHeading" class="firstHeading">Laadpaal 1</h1>
                                <div id="bodyContent">
                                    <p>
                                    Test
                                    </p>
                        </div>
                    </div>
                </InfoWindow>
            </Marker>
            <Marker :options="{ position: { lat: 52.040268, lng: 4.328448 }, icon: icon4}" @click="changeIcon(4)">
                <InfoWindow>
                    <div id="contet">
                        <div id="siteNotice"></div>
                            <h1 id="firstHeading" class="firstHeading">Laadpaal 1</h1>
                                <div id="bodyContent">
                                    <p>
                                    Test
                                    </p>
                        </div>
                    </div>
                </InfoWindow>
            </Marker>
            <Marker :options="{ position: { lat: 52.040369, lng: 4.328613 }, icon: icon5}" @click="changeIcon(5)">
                <InfoWindow>
                    <div id="contet">
                        <div id="siteNotice"></div>
                            <h1 id="firstHeading" class="firstHeading">Laadpaal 1</h1>
                                <div id="bodyContent">
                                    <p>
                                    Test
                                    </p>
                        </div>
                    </div>
                </InfoWindow>
            </Marker>
            <Marker :options="{ position: { lat: 52.040443, lng: 4.328507 }, icon: icon6}" @click="changeIcon(6)">
                <InfoWindow>
                    <div id="contet">
                        <div id="siteNotice"></div>
                            <h1 id="firstHeading" class="firstHeading">Laadpaal 1</h1>
                                <div id="bodyContent">
                                    <p>
                                    Test
                                    </p>
                        </div>
                    </div>
                </InfoWindow>
            </Marker>
        </GoogleMap>
    </div>
</template>

<script>
import { GoogleMap, CustomMarker, InfoWindow, Marker } from 'vue3-google-map'
export default {
    components: {
        GoogleMap,
        CustomMarker,
        InfoWindow,
        Marker
    },
    data() {
        return {
            icon1: "https://i.ibb.co/ChDZHc1/normal-charger-green.png",
            icon2: "https://i.ibb.co/ChDZHc1/normal-charger-green.png",
            icon3: "https://i.ibb.co/ChDZHc1/normal-charger-green.png",
            icon4: "https://i.ibb.co/ChDZHc1/normal-charger-green.png",
            icon5: "https://i.ibb.co/Pgw3VKf/super-charger-green.png",
            icon6: "https://i.ibb.co/Pgw3VKf/super-charger-green.png",
            apiKey: "AIzaSyAdKxFeQupIgn4N0mYqTyM1v5zRMXiw-mw",
            lat: 52.040150,
            lng: 4.328820,
        }
    },
    methods: {
        changeIcon(chargerid) {
            if (chargerid == 1) {
                if (this.icon1 == "https://i.ibb.co/xJxPbH8/normal-charger-red.png") {
                        this.icon1 = "https://i.ibb.co/ChDZHc1/normal-charger-green.png";
                }
                else {
                    this.icon1 = "https://i.ibb.co/xJxPbH8/normal-charger-red.png";
                }
            } else if (chargerid == 2) {
                if (this.icon2 == "https://i.ibb.co/xJxPbH8/normal-charger-red.png") {
                        this.icon2 = "https://i.ibb.co/ChDZHc1/normal-charger-green.png";
                }
                else {
                    this.icon2 = "https://i.ibb.co/xJxPbH8/normal-charger-red.png";
                }
            } else if (chargerid == 3) {
                if (this.icon3 == "https://i.ibb.co/xJxPbH8/normal-charger-red.png") {
                        this.icon3 = "https://i.ibb.co/ChDZHc1/normal-charger-green.png";
                }
                else {
                    this.icon3 = "https://i.ibb.co/xJxPbH8/normal-charger-red.png";
                }
            } else if (chargerid == 4) {
                if (this.icon4 == "https://i.ibb.co/xJxPbH8/normal-charger-red.png") {
                        this.icon4 = "https://i.ibb.co/ChDZHc1/normal-charger-green.png";
                }
                else {
                    this.icon4 = "https://i.ibb.co/xJxPbH8/normal-charger-red.png";
                }
            } else if (chargerid == 5) {
                if (this.icon5 == "https://i.ibb.co/y69FNM9/super-charger-red.png") {
                        this.icon5 = "https://i.ibb.co/Pgw3VKf/super-charger-green.png";
                }
                else {
                    this.icon5 = "https://i.ibb.co/y69FNM9/super-charger-red.png";
                }
            } else if (chargerid == 6) {
                if (this.icon6 == "https://i.ibb.co/y69FNM9/super-charger-red.png") {
                        this.icon6 = "https://i.ibb.co/Pgw3VKf/super-charger-green.png";
                }
                else {
                    this.icon6 = "https://i.ibb.co/y69FNM9/super-charger-red.png";
                }
            }
        }
    }
}
</script>