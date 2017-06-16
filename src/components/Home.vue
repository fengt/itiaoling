<template>
  <div class="home">
    <div class="head-wraper">
     
    </div>
    <Nav/> 
    <div class="container">
      <p class="test">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss">
.head-wraper{
  min-height: 700px;
  background-image: url(../assets/images/landing.png), linear-gradient(120deg, #ea5413, #F39800);
}
</style>
