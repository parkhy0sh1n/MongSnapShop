<template>
  <div class="card shadow-sm">
    <span class="img" :style="{backgroundImage: `url(${item.imgPath})`}"/>
    <div class="card-body">
      <p class="card-text"><span style="font-size: 20px">{{ item.name }} &nbsp;</span><span
          class="discount badge bg-danger" style="font-size: 14px">{{
          item.discountPer
        }}%</span></p>
      <div class="d-flex justify-content-between align-items-center">
        <!-- 로그인 상태에 따라 "addToCart(item.id)" 함수를 호출하는 클릭 이벤트를 조건부로 활성화 -->
        <button class="btn btn-primary" @click="addToCart(item.id)" :disabled="!isAuthenticated">
          <i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;담기
        </button>
        <small class="price text-body-secondary" style="font-size: 16px">{{
            lib.getNumberFormatted(item.price)
          }}원</small>
        <small class="real text-danger" style="font-size: 16px">{{
            lib.getNumberFormatted(item.price - (item.price * item.discountPer / 100))
          }}원</small>
      </div>
    </div>
  </div>
</template>

<script>
import lib from "@/scripts/lib";
import axios from "axios";
import {computed} from "vue";
import store from "@/scripts/store"; // computed를 추가합니다.

export default {
  name: "Card",
  props: {
    item: Object
  },
  setup() {
    // computed를 사용하여 로그인 상태를 계산합니다.
    const isAuthenticated = computed(() => {
      return !!store.state.account.id; // store에서 로그인 상태를 가져와서 사용합니다.
    });

    const addToCart = (itemId) => {
      // 로그인 상태를 확인하여 장바구니에 항목을 추가합니다.
      if (isAuthenticated.value) {
        axios.post(`/api/cart/items/${itemId}`).then(() => {
          alert("장바구니에 사진을 담았습니다!");
        });
      } else {
        alert("로그인이 필요합니다."); // 로그인이 필요한 경우 알림 메시지를 표시합니다.
      }
    }

    return {lib, addToCart, isAuthenticated};
  }
}
</script>

<style scoped>
.card .img {
  display: inline-block;
  width: 100%;
  height: 450px;
  background-size: cover;
  background-position: center;
}

.card .card-body .price {
  text-decoration: line-through;
}
</style>
