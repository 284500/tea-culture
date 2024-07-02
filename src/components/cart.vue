<template>
    <navber></navber>
	<div class="main">
				<section class="product_section layout_padding">
			<div class="container adad">
				<div class="heading_container">
					<h2>
						Our Poducts
					</h2>
				</div>
				<div class="row" >
					<div class="col-md-6 col-lg-4 " v-for="item in store.search">
						<div class="box">
							<div class="img-box">
								<img :src="'../../src/assets/images/'+item.imgname" alt="">
							</div>
							<div class="detail-box">
								<h5>
									{{ item.name }}
								</h5>
								<div class="price_box">
									<h6 class="price_heading">
										<span>$</span>{{ item.price }}
									</h6>
									<button @click="addshop(item.name)">
										<i class="fa fa-shopping-cart" aria-hidden="true"></i>
										Add To Cart
									</button>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</section>
			</div>
</template>
<script setup>
import axios from 'axios';
import { ref,reactive} from 'vue'
import navber from './navber.vue';
import {useSearchStore} from '../store/index'
let username = localStorage.getItem('username')
let store=useSearchStore();
let items=ref([{
	name:'red tea',
	price:100,
	imgname:'p1.png'
},
{
	name:'green tea',
	price:100,
	imgname:'p2.png'
}])
// import { sendshop } from '../api/sendshop'

const shadow = ref("hover");
const currentDate = ref(new Date())
//添加购物车
// async function sendshop(item){
// 	let result= await getAxios('/api/users/addshop',item);
// 	console.log(result);
// }
function addshop(item) {
	axios({
		method:'post',
		url: '/api/users/addshop',
		data: {
			username:username,
			name:item
		}
	})
	alert("添加成功")
}
</script>
<style scoped >
.main {
	width: 100vw;
	min-height: 960px;
	background-color:rgb(214, 207, 207) ;
	display: flex;
	justify-content: center;
	padding: 10px;
	box-sizing: border-box;
}
.adad{
	min-width:70vw;
}
.card {
	width: 75vw;
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));}
.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
.bottom{
	float: right;
	color: 333;
	font-size:13px;
}
</style>
<style scoped src="../assets/css/style.css"></style>
<style scoped src="../assets/css/responsive.css"></style>
<style scoped src="../assets/css/bootstrap.css"></style>