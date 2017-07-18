<template>
  <div class="wms">

    <div class="wms-header">
      <Nav/>

      <div class="container header-content">
        <div class="content-div">
           <h2 class="content-title">中国仓库管理系统</h2>
           <p class="content-desc">第一品牌</p>
           <div class="content-down">
              <a href="https://wms.itiaoling.com" target="_blank">免费试用WMS</a>  
           </div>
           
           <!-- <div class="content-down">
               <div>司机版:</div>
               <a href="https://wms.itiaoling.com" target="_blank"></a>
               <a href="../resources/wms.apk" target="_blank">Android 下载</a>
           </div>
           <div class="content-down">
               <div>运货主版:</div>
               <a href="https://itunes.apple.com/cn/app/id1067688835?mt=8" target="_blank">IOS 下载</a>
               <a href="../resources/dudu.apk" target="_blank">Android 下载</a>
           </div> -->
        </div>
        <img class="content-img" src="../../assets/images/products/wms/wms.png">
      </div>

    </div>

    <div class="feature-list">
      <h1>SaaS部署节约成本，精准库存保障<br>高效的上架拣货和快速发货，工作进度直观</h1>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-4 col-md-4 visible-xs">
            <img src="../../assets/images/products/common/benefit.png" alt="" class="feature-icon">
            <h2>省钱省时省力</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-4 col-md-4 hidden-xs">
            <img src="../../assets/images/products/common/benefit.png" alt="" class="feature-icon">
            <h2>省钱省时省力</h2>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            <img src="../../assets/images/products/common/effective.png" alt="" class="feature-icon">
            <h2>精准库存监控</h2>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            <img src="../../assets/images/products/common/allocation.png" alt="" class="feature-icon">
            <h2>上架拣货智能</h2>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            <img src="../../assets/images/products/common/flow.png" alt="" class="feature-icon">
            <h2>快速发货流程</h2>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            <img src="../../assets/images/products/common/transparent.png" alt="" class="feature-icon">
            <h2>工作进度直观</h2>
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
                <h2>省钱、省时、省力</h2>
                <p>SaaS部署，降低您的信息化投入成本，让您专注核心业务</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/wms/01.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6 text-right">
              <div class="intro">
                <h2>精准库存，你值得拥有</h2>
                <p>仓库操作简单明了，不易出错，同时商品从入库到出库全流 程系统监控，确保库存准确</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/wms/02.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6">
              <div class="intro">
                <h2>优化上架/拣货路径，缩短操作员行走和搬运距离</h2>
                <p>收货后，系统指示将畅销品、较重的商品放在离打包台较近的库位拣货时，系统指示最短的拣货路径</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img class="manipulate-img" src="../../assets/images/products/wms/03.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6 text-right">
              <div class="intro">
                <h2>快速发货，从未如此简单</h2>
                <p>便捷的订单发货流程，支持单件订单、多品订单不同的发货业务场景</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img class="quick-deliver-img" src="../../assets/images/products/wms/04.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6">
              <div class="intro">
                <h2>直观的了解每一个人的工作进度</h2>
                <p>在管理看板上，你可以直观地看到拣货员、打包员的工作进度，同时操作人员也可以看到自己的排名情况，提高竞争意识和工作积极性</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img class="work-process-img" src="../../assets/images/products/wms/05.png">
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
  name: 'wms'
}
</script>

<style lang="scss" scoped>
.wms-header{
  background-color: #fc5f3a;
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
    @media (max-width: 767px){
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
      // background-color: rgba(104, 39, 17, 0.35);
      background-color: #383963;
      color: #fff;
      padding: 10px 20px;
      border-radius: 30px;
      font-size: 16px;
      font-weight: 500;
      display: inline-block;
      text-align: center;
      width: 190px;
      transition: all 0.3s ease;
      &:hover {
        background-color: #191140;
        color: #fff;
      }
    }
  }

  img{
    vertical-align: middle;
    width: 50%;
    @media (max-width: 767px){
      width: 80%;
    }
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
    @media (max-width: 767px){
      padding: 0 10%;
    }
  }
  .container{
    width: 60%;
    @media (max-width: 767px){
      width: 100%;
    }
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
    .row > div {
      position: relative;
      height: 350px;
      @media (max-width: 1200px){
        height: 300px;
      }
      @media (max-width: 992px){
        // height: 300px;
      }
      @media (max-width: 576px){
        height: 235px;
      }
    }
    .intro{
      position: absolute;
      bottom: 0;
      margin: auto;
      top: 60px;
      right: 0;
      left: 22%;
      text-align: left;
      max-width: 360px;
      line-height: 2em;
      @media (max-width: 1200px){
        top: 40px;
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
  .quick-deliver-img, .work-process-img {
    margin-top: 50px;
  }
  .manipulate-img {
    width: 60%;
    @media (max-width: 992px){
      width: 85%;
    }
    @media (max-width: 576px){
      width: 250px;
    }
  }
}


</style>
