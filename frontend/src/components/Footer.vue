<template>
  <footer class="text-body-secondary py-5">
    <div class="container">
      <p class="float-end mb-1">
        <a class="none" href="#">상단으로 올라가기</a>
      </p>
      <p class="mb-1">&copy; 2023 MONG SnapShop</p>
      <p class="mb-0">몽이의 인스타그램이 궁금하신가요?<a href="/"></a> <a href="https://www.instagram.com/mong__0l/"><img class="insta" src="/img/insta.jpeg"></a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.insta {
  width: 18px;
}
.none {
  text-decoration: none;
}
</style>
