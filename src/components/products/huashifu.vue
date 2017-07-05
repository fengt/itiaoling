<template>
  <div class="huashifu">

    <div class="huashifu-header">
      <Nav/>

      <div class="container header-content">
        <div class="content-div">
           <h2 class="content-title">华师傅</h2>
           <p class="content-desc">移动运营管理工具</p>
           <!-- <div class="content-down">
               <div>司机版:</div>
               <a href="https://itunes.apple.com/cn/app/id942390312?mt=8" target="_blank">IOS 下载</a>
               <a href="../resources/huashifu.apk" target="_blank">Android 下载</a>
           </div>
           <div class="content-down">
               <div>运货主版:</div>
               <a href="https://itunes.apple.com/cn/app/id1067688835?mt=8" target="_blank">IOS 下载</a>
               <a href="../resources/dudu.apk" target="_blank">Android 下载</a>
           </div> -->
        </div>
        <img class="content-img" src="../../assets/images/products/huashifu/product_huashifu.png">
      </div>

    </div>

    <div class="feature-list">
      <h1>保障全程实时高效运行，提供优质服务体验</h1>

      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6">
            <img src="../../assets/images/products/common/effective.png" alt="" class="feature-icon">
            <h2>全程实效监控</h2>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6">
            <img src="../../assets/images/products/common/responsible.png" alt="" class="feature-icon">
            <h2>优质服务体验</h2>
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
                <h2>全程实效监控</h2>
                <p>从受理、揽收，到开单、提货、送货，再到签收，每一步都由系统智能监控，货运的每一步，都在您的掌控之中，用得放心。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/huashifu/effective_pic.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6 text-right">
              <div class="intro">
                <h2>优质服务体验</h2>
                <p>扫一扫、打印、货物跟踪查询、常用目的地等使用功能帮助司机师傅提升服务质量，更贴心舒适的服务体验。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/huashifu/service_pic.png">
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
  name: 'huashifu'
}
</script>

<style lang="scss" scoped>
.huashifu-header{
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
    @media (max-width: 767px) {
      padding: 0 10%;
    }
  }
  .container{
    width: 60%;
    @media (max-width: 767px) {
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
    .row > div{
      position: relative;
      height: 350px;
      @media (max-width: 1200px){
        height: 300px;
      }
      @media (max-width: 992px){
        // height: 300px;
      }
      @media (max-width: 576px){
        height: 230px;
      }
    }
    .intro{
      position: absolute;
      bottom: 0;
      margin: auto;
      top: 120px;
      right: 0;
      left: 22%;
      text-align: left;
      max-width: 360px;
      line-height: 2em;
      @media (max-width: 1200px){
        top: 80px;
      }
      @media (max-width: 768px){
        top: 20px;
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


</style>
