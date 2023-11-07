<template>
  <!-- 화면 상단에 Header 컴포넌트를 렌더링 -->
  <Header/>
  <!-- Vue Router를 통해 동적으로 렌더링되는 컴포넌트를 표시 -->
  <RouterView/>
  <!-- 화면 하단에 Footer 컴포넌트를 렌더링 -->
  <Footer/>
</template>


<script>
// Header 컴포넌트와 Footer 컴포넌트를 가져와서 사용한다.
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import store from "@/scripts/store";
import axios from "axios";
import {useRoute} from "vue-router";
import {watch} from "vue";

// 현재 Vue 컴포넌트를 다른 Vue 컴포넌트나 파일에서 가져와 사용할 수 있도록 내보낸다.
export default {
  // 현재 Vue 컴포넌트의 이름을 'App'으로 지정
  name: 'App',
  // 현재 컴포넌트에서 사용할 하위 컴포넌트를 등록
  components: {
    Footer,  // Footer 컴포넌트
    Header   // Header 컴포넌트
  },
  setup() {
    const check = ()=> {
      axios.get("/api/account/check").then(({data})=> {
        console.log(data);
          store.commit("setAccount", data || 0);
      })
    };

    const route = useRoute();

    watch(route, ()=> {
      check();
    })
  }
}
</script>


<style>
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }å

  .b-example-divider {
    width: 100%;
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
  }

  .b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
  }

  .bi {
    vertical-align: -.125em;
    fill: currentColor;
  }

  .nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
  }

  .nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }

  .btn-bd-primary {
    --bd-violet-bg: #712cf9;
    --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

    --bs-btn-font-weight: 600;
    --bs-btn-color: var(--bs-white);
    --bs-btn-bg: var(--bd-violet-bg);
    --bs-btn-border-color: var(--bd-violet-bg);
    --bs-btn-hover-color: var(--bs-white);
    --bs-btn-hover-bg: #6528e0;
    --bs-btn-hover-border-color: #6528e0;
    --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
    --bs-btn-active-color: var(--bs-btn-hover-color);
    --bs-btn-active-bg: #5a23c8;
    --bs-btn-active-border-color: #5a23c8;
  }

  .bd-mode-toggle {
    z-index: 1500;
  }

  .bd-mode-toggle .dropdown-menu .active .bi {
    display: block !important;
  }
</style>
