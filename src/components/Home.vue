<template>
  <div class="home">
    <div class="head-wraper">
      <Nav/> 
      <div class="container">
        <div class="landing">
          <h1 class="slogn">物流仓储互联网</h1>
          <h2 class="slogn-desc">快递，快运，仓储，加速企业发展</h2>
        </div>
      </div>
   
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
.slogn{
  color: #fff; 
  font-weight: 400;
}
.slogn-desc{
  color: #fff;
  font-weight: 400;
}
.landing{
  margin-top: 200px;
}
.head-wraper{
  min-height: 700px;
  background-image: url(../assets/images/landing.png), linear-gradient(120deg, #ea5413, #F39800);
}
</style>
