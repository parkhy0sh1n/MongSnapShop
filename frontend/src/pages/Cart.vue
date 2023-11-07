<template>
  <div class="cart">
    <div class="container">
      <img class="mb-4 mx-auto d-block" src="/img/cart.jpeg" alt="" width="130">
      <h1 class="h3 mb-3 fw-normal">장바구니</h1>
      <ul>
        <li v-for="(i, idx) in state.items" :key="idx">
          <img :src="i.imgPath"/>
          <span class="name">{{ i.name }}</span>
          <span class="price">{{ lib.getNumberFormatted(i.price) }}</span>
          <span class="discount text-danger">{{
              lib.getNumberFormatted(i.price - i.price * i.discountPer / 100)
            }}원</span>
          <span class="discountPer badge bg-danger" style="font-size: 12px">{{
              i.discountPer
            }}%</span>
          <i class="fa fa-trash" @click="remove(i.id)"></i>
        </li>
      </ul>
      <router-link to="/order" class="btn btn-primary">결제하기</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {reactive} from "vue";
import lib from "@/scripts/lib";

export default {
  setup() {
    const state = reactive({
      items: []
    })

    const load = () => {
      axios.get("/api/cart/items").then(({data}) => {
        console.log(data);
        state.items = data;
      })
    }

    const remove = (itemId) => {
      axios.delete(`/api/cart/items/${itemId}`).then(() => {
        load();
      })
    }

    load();

    return {state, lib, remove}
  }
}
</script>

<style scoped>
.cart ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart ul li {
  border: 1px solid #eee;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 10px;
  display: flex;
  align-items: center;
}

.cart ul li img {
  width: 150px;
  height: 150px;
}

.cart ul li span {
  font-size: 18px;
}

.cart ul li .name {
  margin-left: 25px;
  flex-grow: 1;
}

.cart ul li .price {
  text-decoration: line-through;
}

.cart ul li .discountPer {
  margin-right: 500px;
}

.cart ul li i {
  float: right;
  font-size: 20px;
  margin-right: 10px;
}

.cart .btn {
  width: 300px;
  display: block;
  margin: 0 auto;
  padding: 20px 80px;
  font-size: 20px;
}

.mb-4 {
  border-radius: 50%;
  margin-top: 20px;
}
</style>