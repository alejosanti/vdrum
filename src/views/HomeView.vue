<template>
    <v-container>
        <v-row justify="space-around">
            <v-btn @click="playClosedHiHat" color="primary"> Hi-hat </v-btn>
            <!-- <v-btn @click="reproduceHiHat" color="primary"> Crash </v-btn>
            <v-btn @click="reproduceHiHat" color="primary"> Ride </v-btn>
            <v-btn @click="reproduceHiHat" color="primary"> Snare </v-btn>
            <v-btn @click="reproduceHiHat" color="primary"> High Tom </v-btn>
            <v-btn @click="reproduceHiHat" color="primary"> Low Tom </v-btn>
            <v-btn @click="reproduceHiHat" color="primary"> Floor Tom </v-btn>
            <v-btn @click="reproduceHiHat" color="primary"> Bass drum</v-btn> -->
        </v-row>
    </v-container>
</template>

<script>
import closedHiHatSound from "@/assets/BasicDrumKit/ClosedHiHat.mp3";

export default {
    data: () => ({}),
    methods: {
        playClosedHiHat() {
            const audio = new Audio(closedHiHatSound);
            audio.play();
        },
    },
};
</script>
