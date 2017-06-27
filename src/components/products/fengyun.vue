<template>
  <div class="fengyun">

    <div class="fengyun-header">
      <Nav/>

      <div class="container header-content">
        <div class="content-div">
           <h2 class="content-title">风云系统</h2>
           <p class="content-desc">配送SaaS平台</p>
           <!-- <div class="content-down">
               <div>司机版:</div>
               <a href="https://itunes.apple.com/cn/app/id942390312?mt=8" target="_blank">IOS 下载</a>
               <a href="../resources/fengyun.apk" target="_blank">Android 下载</a>
           </div>
           <div class="content-down">
               <div>运货主版:</div>
               <a href="https://itunes.apple.com/cn/app/id1067688835?mt=8" target="_blank">IOS 下载</a>
               <a href="../resources/dudu.apk" target="_blank">Android 下载</a>
           </div> -->
        </div>
        <img class="content-img" src="../../assets/images/products/fengyun/fengyun_show.png">
      </div>

    </div>

    <div class="feature-list">
      <h1>安全认证体系保障，订单运输时效监控，高可用系统和多业务模式支持，商家无缝对接</h1>

      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-sm-4 col-md-4">
            <img src="../../assets/images/products/common/safe.png" alt="" class="feature-icon">
            <h2>安全认证体系</h2>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            <img src="../../assets/images/products/common/effective.png" alt="" class="feature-icon">
            <h2>运输时效监控</h2>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            <img src="../../assets/images/products/common/setting.png" alt="" class="feature-icon">
            <h2>高可用系统</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-4 col-md-4">
            <img src="../../assets/images/products/common/multiplate.png" alt="" class="feature-icon">
            <h2>多业务模式</h2>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            <img src="../../assets/images/products/common/supply_chain.png" alt="" class="feature-icon">
            <h2>商家无缝对接</h2>
          </div>
        </div>
      </div>

    </div>



    <div class="feature-intro">
      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6">
              <div class="intro">
                <h2>安全认证体系</h2>
                <p>https、md5、3DES加密、第四代防火墙、ISO9001、ISO27001体系认证、特殊客户电话拨号加密等，让您的信息"滴水不露"。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/fengyun/fengyun_show.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6 text-right">
              <div class="intro">
                <h2>运输时效监控</h2>
                <p>订单来源分析、订单去向分析；商家单量分析、历史订单分析；总成本监控、各部门成本监控、商家收入分析、利润分析；分拣效率监控、运输效率监控、站点效率监控。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/fengyun/fengyun_show.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6">
              <div class="intro">
                <h2>高可用系统</h2>
                <p>支持200万单/天，系统可靠性99.99%，三个机房300台服务器，支持各业务高并发量，多个完整的配套系统，完整的服务体系，为您提供强大的业务保障。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/fengyun/fengyun_show.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6 text-right">
              <div class="intro">
                <h2>多业务模式</h2>
                <p>电商派件、上门换货、快递等多种特色业务，系统支持供应链、O2O等多种业务模式。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/fengyun/fengyun_show.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6">
              <div class="intro">
                <h2>商家无缝对接</h2>
                <p>上游对接近300家知名商家，与主流电商及平台基本实现无缝对接，并对接多家电视购物平台；下游对接超过50家配送商。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/fengyun/fengyun_show.png">
            </div>
          </div>
        </div>
      </div>

    </div>


    <FootWrap />
  </div>
</template>

<script>
export default {
  name: 'fengyun'
}
</script>

<style lang="scss" scoped>
.fengyun-header{
  background-image: linear-gradient(90deg, #ebc360, #fc5f3a);
  background-size: 100%;
  background-repeat: no-repeat;
}

.header-content{
  padding: 100px 0 50px;
  .content-div{
    text-align: left;
    margin-right: 20%;
    display: inline-block;
    vertical-align: middle;
    @media screen and (max-width: 767px){
      display: block;
      text-align: center;
      margin-right: auto;
    }
    .content-desc{
      opacity: 0.7;
      font-size: 20px;
      margin: 10px 0 50px;
    }
    .content-down{
      padding-bottom: 20px;
    }
    a{
      background-color: rgba(104, 39, 17, 0.35);
      padding: 10px 20px;
      border-radius: 2px;
      font-size: 14px;
      display: inline-block;
      text-align: center;
      width: 130px;
    }
  }

  img{
    vertical-align: middle;
  }

}


.feature-list{
  margin: 80px 0 50px 0;
  h1{
    font-size: 24px;
    color: #65697f;
    font-weight: 500;
    text-align: center;
    line-height: 1.55em;
    margin-bottom: 80px;
  }
  .container{
    width: 60%;
    h2{
      font-size: 20px;
      font-weight: 400;
      color: #383963;
      margin-top: 30px;
    }
  }
}


.feature-intro{
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


</style>
