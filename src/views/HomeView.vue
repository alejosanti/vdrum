<template>
    <v-container>
        <div class="image-container" @click="handleDrumClick($event)">
            <img
                ref="image"
                src="../assets/drum.jpg"
                alt="A drum image"
                class="image"
                usemap="#drum-map"
                @mousedown.prevent
            />
            <map name="drum-map">
                <!-- Define clickable areas for each drum part -->
                <area
                    title="Hi Hat"
                    data-drum="Symbal1"
                    coords="100,179,71"
                    shape="circle"
                />
                <area
                    title="Crash"
                    data-drum="Symbal2"
                    coords="252,61,73"
                    shape="circle"
                />
                <area
                    title="Ride"
                    data-drum="Symbal3"
                    coords="562,139,70"
                    shape="circle"
                />
                <area
                    title="Snare"
                    data-drum="Snare"
                    coords="213,377,82"
                    shape="circle"
                />
                <area
                    title="Tom 1"
                    data-drum="Tom1"
                    coords="286,234,65"
                    shape="circle"
                />
                <area
                    title="Tom 2"
                    data-drum="Tom2"
                    coords="419,238,60"
                    shape="circle"
                />
                <area
                    title="Tom 3"
                    data-drum="Tom3"
                    coords="542,377,68"
                    shape="circle"
                />
                <area
                    title="Bass 1"
                    data-drum="Bass1"
                    coords="394,581,309,345"
                    shape="rect"
                />
                <area
                    title="Bass 2"
                    data-drum="Bass2"
                    coords="83,462,169,607"
                    shape="rect"
                />
            </map>
            <div
                v-for="(area, index) in areas"
                :key="index"
                class="overlay"
                :style="area.style"
            ></div>
        </div>
    </v-container>
</template>

<script>
import hiHat from "@/assets/BasicDrumKit/HiHat.wav";
import crash from "@/assets/BasicDrumKit/Crash.wav";
import ride from "@/assets/BasicDrumKit/Ride.wav";
import snare from "@/assets/BasicDrumKit/Snare.wav";
import tom1 from "@/assets/BasicDrumKit/Tom1.wav";
import tom2 from "@/assets/BasicDrumKit/Tom2.wav";
import tom3 from "@/assets/BasicDrumKit/Tom3.wav";
import bass1 from "@/assets/BasicDrumKit/Bass1.wav";
import bass2 from "@/assets/BasicDrumKit/Bass2.wav";

export default {
    data: () => ({
        areas: [
            { coords: "100,179,71", shape: "circle" },
            // Add other areas here with their corresponding coords and shape
        ],
    }),
    methods: {
        handleDrumClick(event) {
            const areaActions = {
                Symbal1: this.playSymbal1,
                Symbal2: this.playSymbal2,
                Symbal3: this.playSymbal3,
                Snare: this.playSnare,
                Tom1: this.playTom1,
                Tom2: this.playTom2,
                Tom3: this.playTom3,
                Bass1: this.playBass1,
                Bass2: this.playBass2,
                // snare: this.playSnareSound,
                // cymbal: this.playCymbalSound,
                // Add other drum parts and their corresponding action methods here
            };

            console.log(event);

            const clickedArea = event.target.getAttribute("data-drum");
            console.log(clickedArea);
            if (clickedArea) {
                areaActions[clickedArea]();
            }
        },

        playSymbal1() {
            const audio = new Audio(hiHat);
            audio.play();
        },
        playSymbal2() {
            const audio = new Audio(crash);
            audio.play();
        },
        playSymbal3() {
            const audio = new Audio(ride);
            audio.play();
        },
        playSnare() {
            const audio = new Audio(snare);
            audio.play();
        },
        playTom1() {
            const audio = new Audio(tom1);
            audio.play();
        },
        playTom2() {
            const audio = new Audio(tom2);
            audio.play();
        },
        playTom3() {
            const audio = new Audio(tom3);
            audio.play();
        },
        playBass1() {
            const audio = new Audio(bass1);
            audio.play();
        },
        playBass2() {
            const audio = new Audio(bass2);
            audio.play();
        },
    },
};
</script>

<style scoped>
.image-container {
    display: block;
    margin: auto;
    width: 679px;
    height: 624px; /* Set a fixed height or adjust as needed */
    overflow: hidden; /* Ensure the image doesn't overflow its container */
    user-select: none; /* Prevent text selection within the image container */
}

.image {
    display: block;
    width: 100%;
    height: auto;
}

.overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3); /* Transparent black */
    cursor: pointer;
}
</style>
