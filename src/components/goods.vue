<template>
    <navtest></navtest>
    <div class="mainbox">
        <div class="banner">
            <h1>Goods</h1>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import navtest from './navber.vue';
import { ref, reactive, onMounted } from 'vue'
import {
    useRouter
} from "vue-router"
let router = useRouter()
let username = localStorage.getItem('username')
</script>
<style scoped src="../assets/css/shop.css"></style>
<style scoped>
main {
    margin: 0 auto;
    width: 60%;
}

.banner {
    padding: 15px 0;
    width: 100%;
    background-color: antiquewhite;
}

.mainbox {
    width: 100vw;
    min-height: 900px;
    /* display: flex;
    justify-content: center; */
    background-color: rgb(255, 254, 254);
}</style>