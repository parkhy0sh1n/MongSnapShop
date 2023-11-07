<template>
  <header data-bs-theme="dark">
    <div class="collapse text-bg-dark" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 py-4">
            <h4 class="text-white">"몽이 스냅샵, 사랑스러운 몽이의 순간을 담다."</h4>
            <ul class="list-unstyled">
              <!-- "메인 화면"에 대한 라우터 링크를 생성한다. -->
              <li>
                <router-link to="/" class="text-white">메인 화면</router-link>
              </li>
              <!-- 사용자가 로그인한 경우에만 "주문 내역"에 대한 라우터 링크를 생성한다. -->
              <li v-if="$store.state.account.id">
                <router-link to="/orders" class="text-white">주문 내역</router-link>
              </li>
              <!-- 로그인 상태에 따라 "로그인" 또는 "로그아웃" 링크를 생한니다. -->
              <li>
                <!-- 사용자가 로그인하지 않은 경우 "로그인" 라우터 링크를 생성한다. -->
                <router-link to="/login" class="text-white" v-if="!$store.state.account.id">로그인</router-link>
                <!-- 사용자가 로그인한 경우 "로그아웃" 액션을 수행하는 링크를 생성한다. -->
                <a to="/login" class="text-white" @click="logout()" v-else>로그아웃</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor"
               stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2"
               viewBox="0 0 24 24">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg>
          <strong>MONG SnapShop</strong>
        </router-link>
        <!--
          사용자가 로그인한 경우에만 장바구니로 이동하는 라우터 링크를 생성한다.
          사용자가 로그인한 경우를 확인하기 위해 Vuex store의 account.id 상태를 사용한다.
          클릭 시, 장바구니 페이지로 이동하는 링크를 제공한다.
        -->
        <router-link to="/cart" class="cart btn" v-if="$store.state.account.id">
          <i class="fas fa-shopping-cart" style="font-size: 27px"></i>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
                aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
  <span>
    <i class="fas fa-bars" style="color: white; font-size: 27px"></i>
  </span>
        </button>
      </div>
    </div>

  </header>
</template>

<script>
import store from "@/scripts/store";
import router from "@/scripts/router";
import axios from "axios";

// Header 컴포넌트를 정의한다.
export default {
  name: 'Header', // 컴포넌트의 이름을 "Header"로 설정한다.

  // setup() 함수를 정의한다.
  setup() {
    // logout() 함수를 정의한다.
    const logout = () => {
      // axios를 사용하여 로그아웃을 수행한다.
      axios.post("/api/account/logout").then(() => {
        // 로그아웃 후, store에서 'setAccount' mutation을 호출하여 계정 정보를 초기화한다.
        store.commit('setAccount', 0);

        // router를 사용하여 사용자를 첫 페이지로 리디렉션한다.
        router.push({path: "/"});
      });
    }

    // logout() 함수를 반환하여 컴포넌트에서 사용할 수 있도록 한다.
    return {logout};
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header ul li a {
  cursor: pointer;
}

header .navbar .cart {
  margin-left: auto;
  color: white;
}

.text-white {
  text-decoration: none;
}

.navbar {
  height: 100px;
}

strong {
  font-size: 28px;
}
</style>
