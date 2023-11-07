<template>
  <div class="home">
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <!-- v-for 디렉티브를 사용하여 "state.items" 배열의 각 항목을 반복한다. -->
          <div class="col" v-for="(item, idx) in state.items" :key="idx">
            <!-- "Card" 컴포넌트를 렌더링하며 "item" 데이터를 전달한다. -->
            <Card :item="item"/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>

import axios from "axios";
import {reactive} from "vue";
import Card from "@/components/Card.vue";

// Home 컴포넌트를 정의하는 vue.
export default {

  name: "Home", // 컴포넌트의 이름을 "Home"으로 설정한다.
  components: {Card}, // Card 컴포넌트를 사용하기 위해 등록한다.
  // setup() 함수를 정의합니다.

  setup() {
    // 상태(state) 객체를 생성하고, 그 안에 "items" 배열을 초기화한다.
    const state = reactive({
      items: []
    });

    // axios를 사용하여 서버로부터 데이터를 가져온다.
    axios.get("/api/items").then(({data}) => {
      // 서버에서 받은 데이터를 "items" 배열에 저장한다.
      state.items = data;
    });

    // 상태(state) 객체를 반환하여 컴포넌트에서 사용할 수 있도록 한다.
    return {state};
  }
}
</script>