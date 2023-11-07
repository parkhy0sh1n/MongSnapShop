<template>
  <div class="order">
    <div class="container">
      <main>
        <div class="py-5 text-center">
          <img class="d-block mx-auto mb-4" src="/img/order.jpeg" alt="" width="130">
          <h2>결제하기</h2>
          <p class="lead">사랑스러운 몽이의 스냅을 소장하기까지 얼마 남지 않았어요!</p>
        </div>

        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">장바구니</span>
              <span class="badge bg-primary rounded-pill">{{state.items.length}}</span>
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm" v-for="(i, idx) in state.items" :key="idx">
                <div>
                  <h6 class="my-0">{{ i.name }}</h6>
                </div>
                <span class="text-muted">{{
                    lib.getNumberFormatted(i.price - i.price * i.discountPer / 100)
                  }}원</span>
              </li>
            </ul>
            <h3 class="text-center total-price">{{ lib.getNumberFormatted(computedPrice)}}원</h3>
          </div>
          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">주문자 정보</h4>
            <div class="needs-validation" novalidate>
              <div class="row g-3">

                <div class="col-12">
                  <label for="username" class="form-label">이름</label>
                  <div class="input-group has-validation">
                    <input type="text" class="form-control" id="username" placeholder="이름을 입력해주세요." v-model="state.form.name">
                    <div class="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <label for="address" class="form-label">주소</label>
                  <input type="text" class="form-control" id="address" placeholder="주소를 입력해주세요." v-model="state.form.address">
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
              </div>

              <br>
              <br>

              <h4 class="mb-3">결제 정보</h4>

              <div class="my-3">
                <div class="form-check">
                  <input id="card" name="paymentMethod" type="radio" class="form-check-input" value="신용카드" v-model="state.form.payment">
                  <label class="form-check-label" for="card">신용카드</label>
                </div>
                <div class="form-check">
                  <input id="bank" name="paymentMethod" type="radio" class="form-check-input" value="무통장입금" v-model="state.form.payment">
                  <label class="form-check-label" for="bank">무통장입금</label>
                </div>
              </div>

              <div class="col-md-12">
                <label for="cc-name" class="form-label">카드 번호</label>
                <input type="text" class="form-control" id="cc-name" placeholder="카드 번호를 입력해주세요." v-model="state.form.cardNumber">
                <small class="text-body-secondary">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>

              <br>

              <button class="w-100 btn btn-primary btn-lg" @click="submit()">소장하기</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {computed, reactive} from "vue";
import lib from "@/scripts/lib";
import router from "@/scripts/router";


export default {
  setup() {
    const state = reactive({
      items: [],
      form: {
        name: "",
        address: "",
        payment: "",
        cardNumber: "",
        items: "",
      }
    })

    const load = () => {
      axios.get("/api/cart/items").then(({data}) => {
        console.log(data);
        state.items = data;
      })
    }

    const submit = ()=> {
      const args = JSON.parse(JSON.stringify(state.form));
      args.items = JSON.stringify(state.items);
      axios.post("/api/orders", args).then(() => {
        alert('주문이 완료되었습니다!');
        router.push({path:"/orders"})
      })
    }

    const computedPrice = computed(()=> {
      let result = 0;
      for (let i of state.items) {
        result += i.price - i.price * i.discountPer / 100;
      }
      return result;
    })

    load();

    return {state, lib, computedPrice, submit}
  }
}
</script>

<style scoped>
.mb-4 {
  border-radius: 50%;
}
</style>