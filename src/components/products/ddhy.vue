<template>
  <div class="ddhy">

    <div class="ddhy-header">
      <Nav/>

      <div class="container header-content">
        <div class="content-div">
           <h2 class="content-title">嘟嘟好运</h2>
           <p class="content-desc">让物流更顺畅</p>
           <div class="content-down">
               <div>司机版:</div>
               <a href="https://itunes.apple.com/cn/app/id942390312?mt=8" target="_blank">IOS 下载</a>
               <a href="../resources/ddhy.apk" target="_blank">Android 下载</a>
           </div>
           <div class="content-down">
               <div>运货主版:</div>
               <a href="https://itunes.apple.com/cn/app/id1067688835?mt=8" target="_blank">IOS 下载</a>
               <a href="../resources/dudu.apk" target="_blank">Android 下载</a>
           </div>
        </div>
        <img class="content-img" src="../../assets/images/products/ddhy/product_dodo.png">
      </div>

    </div>

    <div class="feature-list">
      <h1>提供安全保障，操作流程便捷，价格合理实惠</h1>

      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-md-4">
            <img src="../../assets/images/products/safe.png" alt="" class="feature-icon">
            <h2>安全认证</h2>
          </div>
          <div class="col-sm-4 col-md-4">
            <img src="../../assets/images/products/convenient.png" alt="" class="feature-icon">
            <h2>流程简单</h2>
          </div>
          <div class="col-sm-4 col-md-4">
            <img src="../../assets/images/products/benefit.png" alt="" class="feature-icon">
            <h2>价格实惠</h2>
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
                <h2>安全认证</h2>
                <p>AAAAA级物流公司--天地华宇集团进行严格的司机及车辆审核认证，提供整车货物保险、正规发票，全程在线货物跟踪服务，为您的货物保价护航。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/ddhy/dodo_show.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6 text-right">
              <div class="intro">
                <h2>流程简单</h2>
                <p>在线询价，流程简单方便，提供手机APP、官方网站、微信、400电话多种方式发货，无需等待快速处理精准安排，各款车型车源充足，覆盖全国。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/ddhy/dodo_show.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6">
              <div class="intro">
                <h2>价格实惠</h2>
                <p>平台依托于天地华宇集团运力资源，拥有大量回程车源，运费低于市场平均整车价格。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/ddhy/dodo_show.png">
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
  name: 'ddhy'
}
</script>

<style lang="scss" scoped>
.ddhy-header{
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
