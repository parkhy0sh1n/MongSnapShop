// 라우팅을 정의하는 배열
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Cart from "@/pages/Cart.vue";
import Order from "@/pages/Order.vue";
import Orders from "@/pages/Orders.vue";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const routes = [
    {path: '/', component: Home},     // 루트 경로('/')일 때 Home 컴포넌트를 표시
    {path: '/login', component: Login}, // '/login' 경로일 때 Login 컴포넌트를 표시
    {path: '/Cart', component: Cart}, // '/login' 경로일 때 Login 컴포넌트를 표시
    {path: '/order', component: Order},
    {path: '/orders', component: Orders}
]

// Vue Router를 생성하고 설정
const router = createRouter({
    history: createWebHistory(), // 웹 브라우저 히스토리 모드를 사용
    routes               // 위에서 정의한 라우팅 설정을 적용
})

export default router;