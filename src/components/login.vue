<template>
        <div class="login-wrapper">
            <div class="left-img">
                <div class="glass">
                    <div class="tips">
                        <div class="title">
                            THE SPACE NETWORK
                        </div>
                        <h1>Explore The Universe</h1>
                        <span>5 Million+ people have joined our network.</span>
                        <span>we invite you to join the tribe</span>
                    </div>
                </div>
            </div>
            <div class="right-login-form">
                <div class="form-wrapper">
                    <h1>Login</h1>
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
                    <button class="btn" @click="Login(form)">Log in</button>
                    <div class="siginup-tips">
                        <span>Don't Have An Account?</span>
                        <router-link to="/reg">
                        <span >Signup</span></router-link>
                    </div>
                    <div class="other-login">
                        <div class="divider">
                            <span class="line"></span>
                            <span class="line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script setup>
import {reactive} from 'vue'
import axios from "axios"
import {login} from '../api/login.js'
import {
    useRouter
} from "vue-router"
let router = useRouter()

function Login(data) {
    if (data.username != "" && data.password != "") {
        axios({
            method: 'get',
            url: '/api/login',
            params: data
        }).then(res => {
            switch (res.data.flag) {
                case 0:
                    alert("登陆成功！");
                    localStorage.setItem('islogin', true);
                    localStorage.setItem('username', data.username);
                    router.push({ name: 'home' })
                    break;
                case -1:
                    alert("用户名或密码出错！");
                    break;
            }
        })
    }else{
        alert("填写不能为空！");
    }
}
let form = reactive({
		username: '',
		password: ''
	})
</script>
<style scoped src="../assets/css/reg.css"></style>

  