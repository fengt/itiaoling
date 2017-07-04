<template>
  <div class="xingxiao">

    <div class="xingxiao-header">
      <Nav/>

      <div class="container header-content">
        <div class="content-div">
           <h2 class="content-title">行销</h2>
           <p class="content-desc">移动CRM</p>
           <!-- <div class="content-down">
               <div>司机版:</div>
               <a href="https://itunes.apple.com/cn/app/id942390312?mt=8" target="_blank">IOS 下载</a>
               <a href="../resources/xingxiao.apk" target="_blank">Android 下载</a>
           </div>
           <div class="content-down">
               <div>运货主版:</div>
               <a href="https://itunes.apple.com/cn/app/id1067688835?mt=8" target="_blank">IOS 下载</a>
               <a href="../resources/dudu.apk" target="_blank">Android 下载</a>
           </div> -->
        </div>
        <img class="content-img" src="../../assets/images/products/xingxiao/product_xingxiao.png">
      </div>

    </div>

    <div class="feature-list">
      <h1>便捷的客户信息管理，全方位销售信息记录，信息统计分析</h1>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-4 col-md-4 visible-xs">
            <img src="../../assets/images/products/common/crm.png" alt="" class="feature-icon">
            <h2>客户信息管理</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-4 col-md-4 hidden-xs">
            <img src="../../assets/images/products/common/crm.png" alt="" class="feature-icon">
            <h2>客户信息管理</h2>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            <img src="../../assets/images/products/common/system_management.png" alt="" class="feature-icon">
            <h2>销售过程记录</h2>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            <img src="../../assets/images/products/common/archive_management.png" alt="" class="feature-icon">
            <h2>数据报表分析</h2>
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
                <h2>客户信息管理</h2>
                <p>为销售人员日常工作提供便捷，维护客户信息、维系客户、以及销售人员间的沟通，提供更高效的解决方案，提高其营销效率。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/xingxiao/crm_pic.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6 text-right">
              <div class="intro">
                <h2>销售过程记录</h2>
                <p>系统会记录销售人员的销售行为和销售过程，为销售管理人员管控销售过程和销售结果提供全方位的支持，同时辅助高层领导作出关键性的营销决策。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/xingxiao/record_pic.png">
            </div>
          </div>
        </div>
      </div>

      <div class="itl-row">
        <div class="container">
          <div class="row">
            <div class="col-sx-12 col-sm-6 col-md-6">
              <div class="intro">
                <h2>数据报表分析</h2>
                <p>消息管理、订单管理、报表管理和上下级互访，并以辅助功能模块包括公司网点查询、价格时效查询、历史查询等功能，为销售人员的销售过程提供支持。</p>
              </div>
            </div>
            <div class="col-sx-12 col-sm-6 col-md-6 feature-intro-image">
              <img src="../../assets/images/products/xingxiao/analyse_pic.png">
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
  name: 'xingxiao'
}
</script>

<style lang="scss" scoped>
.xingxiao-header{
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
        top: 60px;
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
