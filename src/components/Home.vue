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

    <div class="customer-wraper">
	    <div class="container">
	      <div class="customer-header">
	      	<h1>客户案例</h1>
	      	<p class="desc"></p>
	      </div>
	      <div class="row customer-list-all">
	      	<div class="col-md-4 col-xs-6">
	      		<img class="customer-item-img" src="../assets/images/customers/vancl.jpg" alt="">
	      	</div>
	      	<div class="col-md-4 col-xs-6">
	      		<img class="customer-item-img" src="../assets/images/customers/rufengda.jpg" alt="">
	      	</div>
	      	<div class="col-md-4 col-xs-6">
	      		<img class="customer-item-img" src="../assets/images/customers/zhongce.jpg" alt="">
	      	</div>
	      	<div class="col-md-4 col-xs-6">
	      		<img class="customer-item-img" src="../assets/images/customers/vancl.jpg" alt="">
	      	</div>
	      	<div class="col-md-4 col-xs-6">
	      		<img class="customer-item-img" src="../assets/images/customers/tiandihuayu.gif" alt="">
	      	</div>
	      	<div class="col-md-4 col-xs-6">
	      		<img class="customer-item-img" src="../assets/images/customers/wjk.jpg" alt="">
	      	</div>
	      </div>
	     </div>
     </div>


    <FootWrap/>
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
@import "../assets/scss/app.scss";
@import "../assets/scss/grid.scss";
</style>
<style lang="scss">
@import "../assets/scss/break.scss";
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


.customer-wraper{
	min-height: 500px;
}
.customer-list-all{
	width: 90%;
	margin: 0 auto;
}
.customer-item-img{
	margin: 20px auto;
	width: 120px;
	@include breakpoint($sm){
	  width: 200px;
	}
}
</style>
