<template>
<div>
  <nav>
    <router-link to="/guest/">Guest 메인 페이지</router-link> |
    <router-link to="/guest/about">Guest About 페이지</router-link> |
    <a href="/">Home</a>
  </nav>
  <router-view/>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: right;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
