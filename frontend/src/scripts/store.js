// Vuex를 사용하여 상태 관리를 위한 스토어(store)를 생성한다.
import { createStore } from 'vuex';

// createStore 함수를 사용하여 스토어를 생성하고, 초기 상태 및 변이(mutations)를 정의한다.
const store = createStore({
    state () {
        // 스토어의 초기 상태(state)를 정의한다.
        return {
            account: {
                id: 0
            }
        }
    },
    mutations: {
        // 'setAccount' 뮤테이션(mutations)을 정의한다.
        // 이 뮤테이션은 상태(state)를 변경하는 역할을 합니다.
        setAccount(state, payload) {
            // 'setAccount' 뮤테이션은 'state' 객체와 'payload' 값을 받는다.
            // 'payload'는 새로 설정할 'account.id'의 값이다.
            state.account.id = payload;
        }
    }
})

// 스토어(store)를 내보내어 다른 부분에서 사용할 수 있도록 한다.
export default store;
