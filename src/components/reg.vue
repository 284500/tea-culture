<template>
    <div class="login-wrapper">
       
        <div class="right-login-form">
            <div class="form-wrapper">
                <h1>Sign up</h1>
                <div class="input-items">
                    <span class="input-tips">
                        Email
                    </span>
                    <input type="text" class="inputs" placeholder="Enter your Email" v-model="form.email">
                </div>
                <div class="input-items">
                    <span class="input-tips">
                        Username
                    </span>
                    <input type="text" class="inputs" placeholder="Enter your username" v-model="form.username">
                </div>
                <div class="input-items">
                    <span class="input-tips">
                        Password
                    </span>
                    <input type="password" class="inputs" placeholder="Enter password" v-model="form.password">
                </div>
                <button class="btn" @click="Reg(form)">Sign up</button>
                <div class="siginup-tips">
                    <span>Already registered?</span>
                    <router-link to="/login">
                    <span >Login</span></router-link>
                </div>
                <div class="other-login">
                    <div class="divider">
                        <span class="line"></span>
                        <span class="line"></span>
                    </div>
                </div>
            </div>
        </div> 
        <div class="left-img">
        </div>
    </div>
</template>
<script setup>
import {reactive} from 'vue'
import axios from "axios"
import {reg} from '../api/reg.js'
import {
    useRouter
} from "vue-router"

let router = useRouter()
let form = reactive({
		username: '',
        email:'',
		password: ''
	})

function Reg(data) {
    if (data.username != "" && data.email != "" && data.password != "") {
        axios({
            method: 'post',
            url: '/api/reg',
            data: {
                username: data.username,
                email: data.email,
                password: data.password
            }
        })
        .then(res => {
            switch (res.data.flag) {
                case 0:
                    alert("注册成功！");
                    router.push({ name: 'login' })
                    break;
                case -1:
                   alert("邮箱已存在")
                    break;
            }
        })
    } else {
        alert("填写不能为空！");
    }
}
</script>
<style scoped src="../assets/css/reg.css"></style>
