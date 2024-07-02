import axios from "axios"
import {
    useRouter
} from "vue-router"
let router = useRouter()
export function reg(data) {
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
                    router.push({ name: 'home' })
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