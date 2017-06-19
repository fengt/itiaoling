<template>
  <div class="home">
    <div class="head-wraper">
      <Nav/> 
      <div class="container">
        <div class="landing">
          <h1 class="slogn">专注物流仓储互联网</h1>
          <h2 class="slogn-desc">快递，快运，仓储，IT解决方案，加速企业效率，助力企业发展</h2>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-8">
            a
          </div>
          <div class="col-md-4">
            b
          </div>
          <div class="col-md-4">
            c
          </div>
 
        </div>
      </div>
   
    </div>
    <FootWrap/>
 </div>
</template>

<script>
import FootWrap from './FootWrap'
export default {
  name: 'home',
  components: {
    FootWrap
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/app.scss";
@import "../assets/scss/grid.scss";
</style>
<style lang="scss">
.slogn{
  padding: 0 20px;
  color: #fff; 
  font-weight: 400;
}
.slogn-desc{
  padding: 0 20px;
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
