export default {
    // 숫자를 천 단위로 콤마(,)로 구분하여 포맷하는 함수 정의.
    getNumberFormatted(val) {
        // val을 문자열로 변환하고, 정규식을 사용하여 천 단위마다 콤마(,)를 삽입하여, 포맷된 문자열을 반환합니다.
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}