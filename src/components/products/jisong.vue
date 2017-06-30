<template>
  <div class="jisong">

    <div class="jisong-header">
      <Nav/>

      <div class="container header-content">
        <div class="content-div">
           <h2 class="content-title">极送</h2>
           <p class="content-desc">每人都是快递员</p>
           <!-- <div class="content-down">
               <div>司机版:</div>
               <a href="https://itunes.apple.com/cn/app/id942390312?mt=8" target="_blank">IOS 下载</a>
               <a href="../resources/jisong.apk" target="_blank">Android 下载</a>
           </div>
           <div class="content-down">
               <div>运货主版:</div>
               <a href="https://itunes.apple.com/cn/app/id1067688835?mt=8" target="_blank">IOS 下载</a>
               <a href="../resources/dudu.apk" target="_blank">Android 下载</a>
           </div> -->
        </div>
        <img class="content-img" src="../../assets/images/products/jisong/product_jisong.png">
      </div>

    </div>

    <div class="feature-list">
      <h1>货款零风险保障，多平台订单对接，众包安全认证，各维度科学调度</h1>

      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6">
            <img src="../../assets/images/products/common/safe.png" alt="" class="feature-icon">
            <h2>货物零风险</h2>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6">
            <img src="../../assets/images/products/common/multiplate.png" alt="" class="feature-icon">
            <h2>多平台支持</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6">
            <img src="../../assets/images/products/common/audit.png" alt="" class="feature-icon">
            <h2>认证考核机制</h2>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6">
            <img src="../../assets/images/products/common/allocation.png" alt="" class="feature-icon">
            <h2>实时精准调度</h2>
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
                <h2>货物零风险</h2>
                <p>众包人员抢单后系统自动冻结等值货款，实现货物零风险；配送员、商家充值、实时计算配送、T+1天提现。系统实现自动化。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/jisong/zerorisk_pic.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6 text-right">
              <div class="intro">
                <h2>多平台支持</h2>
                <p>支持普通用户、小商家平台发布配送需求；支持大商家、平台订单对接；支持站点提前布库存。满足不同用户的不同需求，实现业务定制化。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/jisong/multiplate_pic.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6">
              <div class="intro">
                <h2>认证考核机制</h2>
                <p>支持众包，人员进入、审核、认证、培训、考核机制完善，通过配送人员的配送数据，以及客户的评价信息，对众包人员进行综合评级。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/jisong/authentication_pic.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6 text-right">
              <div class="intro">
                <h2>实时精准调度</h2>
                <p>系统根据配送距离、配送员任务、配送员等级、配送时效、订单要求等各种维度，进行科学、合理的订单匹配，人员调度，实现O2O配送对时效的特殊要求。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/jisong/dispatch_pic.png">
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
  name: 'jisong'
}
</script>

<style lang="scss" scoped>
.jisong-header{
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
    color: #fff;
    @media screen and (max-width: 767px){
      display: block;
      text-align: center;
      margin-right: auto;
    }
    .content-desc{
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
      text-align: left;
      max-width: 360px;
      line-height: 2em;
      @media (max-width: 767px){
        height: 250px;
        text-align: center;
        margin: 30px auto;
        padding: 0 30px;
        left: 0;
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
