<template>
	<header class="header_section">
		<div class="container-fluid">
			<nav class="navbar navbar-expand-lg custom_nav-container ">
				<a class="navbar-brand" href="index.html">
					<span>
						Odora
					</span>
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation">
					<span class=""> </span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
						<ul class="navbar-nav  pl-lg-5">
							<li class="nav-item active">
								<a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
							</li>
							<li class="nav-item">
								<router-link class="nav-link" to="/goods">
									About</router-link>
							</li>
							<li class="nav-item"><router-link class="nav-link" to="/cart">
									Products</router-link>
							</li>
							<li class="nav-item">
								<router-link class="nav-link" to="/shop">
									Shop</router-link>
							</li>
						</ul>
					</div>
					<div class="quote_btn-container">
						<router-link to="/login">
							<span>
								Login
							</span>
						</router-link>
						<router-link to="/reg">
							<span>
								Reg
							</span>
						</router-link>
						<input type="text" @keyup.enter="send" v-model="search">
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>
<script setup>
import axios from "axios";
import {
	useRouter
} from "vue-router"
import { ref } from "vue";
import {
	useSearchStore,
} from '../store/index'
let store = useSearchStore();
let router = useRouter()
let search = ref();

function send() {
	axios({
		method: 'get',
		url: '/api/search',
		params: {
			search: search.value,
		}
	}).then(req => {
		console.log(req)
		store.search = req.data.item;
		router.push({
			name: 'cart'
		})
	})
}
</script>
<style scoped src="../assets/css/style.css"></style>
<style scoped src="../assets/css/responsive.css"></style>
<style scoped src="../assets/css/bootstrap.css"></style>