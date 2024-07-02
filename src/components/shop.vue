<template>
    <navtest></navtest>
    <div class="mainbox">
        <div class="banner">
            <h1>shop</h1>
        </div>

        <main>
            <div class="container">
                <table border="0" cellspacing="0" id="shoppingcartinfo">
                    <thead>
                        <tr>
                            <th width="75px" height="42px">
                            </th>
                            <th width="200px" height="42px">商品</th>
                            <th width="135px" height="42px">单价</th>
                            <th width="230px" height="42px">购买数量</th>
                            <th width="150px" height="42px">小计</th>
                            <th width="200px" height="42px">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in items" :key="item">
                            <td width="75px" height="90px" colspan="2" align="left" valign="top" class="pt20">
                                <img :src="'../../src/assets/images/' + item.imgname" alt="cosmetics" class="shoppingitem fl">
                                <div class="shoppingdesc fl">
                                    {{ item.name }}
                                </div>
                                <div style="clear: both;"></div>
                            </td>
                            <td width="135px" height="90px" align="center" valign="top" class="price pt20">￥{{ item.price }}
                            </td>
                            <td width="230px" height="90px" align="center" valign="top" class="purchasenum pt20">
                                <i class="minus iconfont icon-subtract"></i>
                                <input type="number" min="1" step="1" v-model="number[index]" @click="add">
                                <i class="plus iconfont icon-jiahao"></i>
                            </td>
                            <td width="150px" height="90px" align="center" valign="top" class="pt20 sumup">￥{{
                                item.price * number[index] }}</td>
                            <td width="115px" height="90px" align="left" valign="top" class="pt20 pl85 operation">
                                <button @click="del(item.name, index)">移除</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div class="paddingpanel clearfix">
                    <div class="conclude clearfix">
                        <div class="concludeleft fl">

                            <dl class="fl">
                                <dt></dt>
                                <dd>总价：￥{{ totalprice }}</dd>
                            </dl>
                            <div style="clear:both"></div>
                        </div>
                    </div>
                    <div class="continueorsubmit fr">

                        <button type="button" class="continue" @click="router.push({
                            name: 'home'
                        })">继续购物</button>
                        <button type="submit" class="submit">提交订单</button>
                    </div>

                </div>
            </div>
        </main>
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
let totalprice = ref(0);
let number = ref([1, 1, 1, 1])
let items = reactive([]);
//挂载时调用
onMounted(() => {
    axios({
        method: 'post',
        url: '/api/users/shop',
        data: {
            username: username
        }
    }).then(req => {
        console.log(req);
        for (let i = 0; i < req.data.item.length; i++) {
            items.push(req.data.item[i])
            totalprice.value += items[i].price * number.value[i];
        }
        console.log(items);
    })
})
//删除
function del(item, index) {
    axios({
        method: 'post',
        url: '/api/users/remove',
        data: {
            name: item,
            username: username
        }
    }).then(req => {
        totalprice.value = totalprice.value - items[index].price * number.value[index];
        items.splice(index, 1);
    })
}
function add() {
    totalprice.value = 0;
    for (let i = 0; i < items.length; i++) {
        totalprice.value = totalprice.value + items[i].price * number.value[i];
    }
}
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