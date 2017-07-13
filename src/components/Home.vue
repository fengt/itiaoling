<template>
  <div class="home">
    <div class="head-wrapper">
      <Nav/> 
      <div class="container">
        <div class="landing">
          <h1 class="slogn">专注物流仓储互联网</h1>
          <h2 class="slogn-desc">快递、快运、仓储、IT解决方案，加速企业效率，助力企业发展</h2>
        </div>
      </div>

    </div>



    <div class="itl-wrapper">
      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6">
              <div class="intro">
                <h2>saas模块化定制</h2>
                <p>WDS 自动线路规划分单，POI 地址库管理系统，TMS 运输分拣系统，DMS 配送管理系统，WMS 仓储管理系统，BI 财务报表系统，微信公众号／小程序／移动app，专业的调研制定个性化解决方案，合理的模块规划，降低企业成本，提高企业竞争力！</p>
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
                <h2>行业领先的技术研发</h2>
                <p>立至于用互联网思维推动传统行业，团队成员核心来自于凡客，京东等电商O2O行业，行业技术经过十余年积累改善与沉淀，先拥有近300人研发团队，走向国际化市场，wms产品对接国外商户，得到合作客户高度认可！</p>
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
                <h2>信息安全认证</h2>
                <p>信息采取Https、md5及3DES加密等，服务器第四代防火墙，获得”国际化标准”信息安全认证(IOS9001、IOS27001)，特殊客户电话拨号加密，为客户的信息做到、保密、完整、可用。</p>
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
                <h2>专业稳定的运营</h2>
                <p>7 * 24小时专业的技术人员及时维护，快速高效的响应客户需求，为客户解决后顾之忧。</p>
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
	      		<img class="customer-item-img" src="../assets/images/customers/guangxizhongyan.png" alt="">
	      	</div>
	      	<div class="col-md-4 col-xs-6">
	      		<img class="customer-item-img" src="../assets/images/customers/rufengda.png" alt="">
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
	      		<img class="customer-item-img" src="../assets/images/customers/wanjiakang.png" alt="">
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
  font-size: 36px;
}
.slogn-desc{
  padding: 0 20px;
  color: #fff;
  font-weight: 400;
}
.landing{
  margin-top: 220px;
}
.head-wrapper{
  min-height: 700px;
  background-color: #fc5f3a;
  background-image: url(../assets/images/landing.png), linear-gradient(120deg, #ea5413, #F39800);
  background-size: contain;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  @media (max-width: 767px){
    background-size: cover;
    background-position: 0% 100%;
  }
}


.itl-wrapper{
  .itl-row{
    padding: 40px 0;
    overflow: hidden;
    position: relative;
    .row > div{
      position: relative;
      height: 350px;
      @media (max-width: 1200px){
        height: 300px;
      }
      @media (max-width: 992px){
        height: 320px;
      }
      @media (max-width: 576px){
        height: 300px;
      }
    }
    .intro{
      position: absolute;
      bottom: 0;
      margin: auto;
      top: 80px;
      right: 0;
      left: 22%;
      text-align: left;
      max-width: 360px;
      line-height: 2em;
      @media (max-width: 1200px){
        top: 30px;
      }
      @media (max-width: 768px){
        top: 0px;
        text-align: center;
        margin: auto;
        padding: 0 30px;
        left: 0;
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
    width: 70%;
    @media (max-width: 992px){
      width: 100%;
    }
    @media (max-width: 576px){
      width: 250px;
    }
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
