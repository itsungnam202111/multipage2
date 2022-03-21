<template>
<div>
  <nav>
    <a href="/member">회원 페이지</a> | 
    <a href="/guest">Guest 페이지</a> | 
    <a href="/admin">관리 페이지</a>
  </nav>
    <br>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <h2>{{ message }}</h2>
  </div>
  
</div>
</template>
<script>
export default {
  data(){
    return {
      message : "시작페이지 입니다."
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
div {text-align: center;}
nav {
  padding: 30px;
  text-align: right;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.exact-active {
  color: #42b983;
}
</style>
