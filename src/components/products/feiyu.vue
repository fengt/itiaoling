<template>
  <div class="feiyu">

    <div class="feiyu-header">
      <Nav/>

      <div class="container header-content">
        <div class="content-div">
           <h2 class="content-title">飞鱼配送</h2>
           <p class="content-desc">快递员专属</p>
           <!-- <div class="content-down">
               <div>司机版:</div>
               <a href="https://itunes.apple.com/cn/app/id942390312?mt=8" target="_blank">IOS 下载</a>
               <a href="../resources/feiyu.apk" target="_blank">Android 下载</a>
           </div>
           <div class="content-down">
               <div>运货主版:</div>
               <a href="https://itunes.apple.com/cn/app/id1067688835?mt=8" target="_blank">IOS 下载</a>
               <a href="../resources/dudu.apk" target="_blank">Android 下载</a>
           </div> -->
        </div>
        <img class="content-img" src="../../assets/images/products/feiyu/product_feiyu.png">
      </div>

    </div>

    <div class="feature-list">
      <h1>保障客户信息安全，简化配送操作，数据实时透明</h1>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-4 col-md-4 visible-xs">
            <img src="../../assets/images/products/common/safe.png" alt="" class="feature-icon">
            <h2>客户信息安全</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-4 col-md-4 hidden-xs">
            <img src="../../assets/images/products/common/safe.png" alt="" class="feature-icon">
            <h2>客户信息安全</h2>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            <img src="../../assets/images/products/common/convenient.png" alt="" class="feature-icon">
            <h2>配送签收便捷</h2>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            <img src="../../assets/images/products/common/transparent.png" alt="" class="feature-icon">
            <h2>数据实时透明</h2>
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
                <h2>客户信息安全</h2>
                <p>查单打电话自动屏蔽手机号，自动删除通话记录，保障客户信息安全。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/feiyu/security_pic.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6 text-right">
              <div class="intro">
                <h2>配送签收便捷</h2>
                <p>摇一摇送货，随时查单打电话；签收信息拍照上传；微信和支付宝快捷支付、多单提交。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/feiyu/convenient_pic.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6">
              <div class="intro">
                <h2>数据实时透明</h2>
                <p>app数据与PC端数据实时同步，配送员实时了解自身任务和提成。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/feiyu/transparent_pic.png">
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
  name: 'feiyu'
}
</script>

<style lang="scss" scoped>
.feiyu-header{
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
        height: 200px;
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
        top: 40px;
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
