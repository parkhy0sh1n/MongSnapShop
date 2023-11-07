module.exports = {
  // Vue CLI의 개발 서버 설정을 구성합니다.
  devServer: {
    proxy: {
      // '/api'로 시작하는 모든 요청을 대상 URL 'http://localhost:8080'으로 프록시합니다.
      '/api': {
        target: 'http://localhost:8080'
      }
    }
  }
}