// 필요한 모듈 및 컴포넌트 가져오기
import {createApp} from 'vue'
import store from "@/scripts/store"
import router from "@/scripts/router";
import App from './App.vue'

// Vue 앱을 생성(createApp)하고, store, router를 사용(use)하여 App 컴포넌트를 앱에 mount한다.
// store는 상태 관리, router는 페이지 네비게이션, 그리고 mount는 Vue 앱을 웹 페이지에 부착하는 역할을 한다.
createApp(App).use(store).use(router).mount('#app')
