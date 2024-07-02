import axios from "axios"
import {
    useRouter
} from "vue-router"
let router = useRouter()
export function login(data) {
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
