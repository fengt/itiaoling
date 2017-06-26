<template>
  <div class="home">
    <div class="head-wrapper">
      <Nav/> 
      <div class="container">
        <div class="landing">
          <h1 class="slogn">专注物流仓储互联网</h1>
          <h2 class="slogn-desc">快递，快运，仓储，IT解决方案，加速企业效率，助力企业发展</h2>
        </div>
      </div>

    </div>



    <div class="itl-wrapper">
      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6">
              <div class="intro">
                <h2>安全认证</h2>
                <p>AAAAA级物流公司--天地华宇集团进行严格的司机及车辆审核认证，提供整车货物保险、正规发票，全程在线货物跟踪服务，为您的货物保价护航。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../assets/images/conversion.gif">
            </div>
          </div>
        </div>
      </div>


      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6 text-right">
              <div class="intro">
                <h2>安全认证</h2>
                <p>AAAAA级物流公司--天地华宇集团进行严格的司机及车辆审核认证，提供整车货物保险、正规发票，全程在线货物跟踪服务，为您的货物保价护航。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../assets/images/conversion.gif">
            </div>
          </div>
        </div>
      </div>


      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6">
              <div class="intro">
                <h2>安全认证</h2>
                <p>AAAAA级物流公司--天地华宇集团进行严格的司机及车辆审核认证，提供整车货物保险、正规发票，全程在线货物跟踪服务，为您的货物保价护航。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../assets/images/conversion.gif">
            </div>
          </div>
        </div>
      </div>


    </div>





    <div class="customer-wrapper">
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
.head-wrapper{
  min-height: 700px;
  background-image: url(../assets/images/landing.png), linear-gradient(120deg, #ea5413, #F39800);
  background-size: cover;
  background-repeat: no-repeat;
}


.itl-wrapper{
  .itl-row{
    padding: 40px 0;
    overflow: hidden;
    position: relative;
    .row > div{
      position: relative;
      height: 400px;
      @media (max-width: 767px){
        height: 250px;
      }
    }
    .intro{
      position: absolute;
      bottom: 0;
      margin: auto;
      height: 300px;
      right: 0;
      left: 22%;
      top: 11%;
      text-align: left;
      max-width: 360px;
      line-height: 2em;
      @media (max-width: 767px){
        height: 250px;
        text-align: center;
        margin: 30px auto;
        padding: 0 30px;
        left: 0;
        top: -20%;
        max-width: 90%;
      }
    }
    .text-right{
      float: right;
      @media (max-width: 575px){
        float: none;
      }
    }
    p{
      color: #65697f;
    }
  }


  img{
    width: 80%;
  }

}


.customer-wrapper{
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
