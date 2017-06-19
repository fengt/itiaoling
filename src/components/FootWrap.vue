<template>
  <div class="footer">
    <div class="container">
      <div class="row">

        <!-- <div class="col-xs-6 col-md-1 hidden-xs">

          <div class="logo-wrapper">
            <img src="../assets/images/logo/logo-w.png" alt="tiaoling logo" class="logo">
          </div>

        </div> -->


        <div class="col-xs-12 col-md-6">
          <div class="row links">
            <div class="link-group">
              <div class="link-header">产品中心</div>
              <a href="#">飞鱼配送</a>
              <a href="#">风云系统</a>
              <a href="#">嘟嘟好运</a>
              <a href="#">华师傅</a>
              <a href="#">WMS</a>
              <a href="#">行销</a>
              <a href="#">极送</a>
            </div>
            <div class="link-group">
              <div class="link-header">解决方案</div>
              <a href="#">快递</a>
              <a href="#">快运</a>
              <a href="#">O2O</a>
              <a href="#">移动</a>
              <a href="#">仓配一体</a>
            </div>
            <div class="link-group">
              <div class="link-header">关于我们</div>
              <a href="#/about">企业介绍</a>
              <a href="/joinus">加入我们</a>
              <!-- <div class="qr-code-wrapper ">
                <img class="hidden-xs" src="../assets/images/logo/qr-code.png" alt="tiaoling QR Code">
              </div> -->
            </div>

          </div>
        </div>
        

        <div class="col-xs-12 col-md-6">

          <div class="qr-code-wrapper">
            <img class="hidden-xs" src="../assets/images/logo/qr-code.png" alt="tiaoling QR Code">
          </div>

          <div class="location">
            <div class="telephone">
                电话:
                +86-17761300790
            </div>
            <div class="address">
                成都:
                高新区天仁路388号凯德天府写字楼9F1号(总部)<br>
            </div>

            <div class="telephone">
                电话:
                010-59316526
            </div>
            <div class="address">
                北京:
                北京市大兴区亦庄经济区地盛北街1号<br>
            </div>
            
            <div class="telephone">
                电话:
                021-62636097
            </div>
            <div class="address">
                上海:
                上海市闵行区华翔路2239号<br>
            </div>
          </div>

        </div>

      </div>
      <p class="copyright hidden-xs">
        版权所有 © 成都跳羚科技有限公司 &nbsp;－&nbsp;
        蜀ICP备16021368号-1
      </p>  
      <p class="copyright visible-xs">
        版权所有 © 成都跳羚科技有限公司
        <br>
        蜀ICP备16021368号-1
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/grid.scss";

.footer {
  background-color: #383963;
}



.qr-code{
  float: left;
}
.logo-wrapper{
  text-align: left;
}

img.logo {
  width: 160px;
}

.container {
  padding-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1336px;
}

.location{
    display: block;
    line-height: 25px;
    color: #e1e2e4;
    font-size: 14px;
    text-align: left;
}




.links {
  text-align: center;

  .link-group {
    display: inline-block;
    vertical-align: top;
    margin: 0 8%;
    text-align: left;

    .link-header {
      margin-bottom: 16px;
      font-size: 18px;
      color: #fff;
    }
  }

  a {
    display: block;
    line-height: 25px;
    color: #e1e2e4;
    font-size: 16px;
  }
}



.qr-code-wrapper {
  text-align: center;
  float: left;
  margin: 20px;
  img {
    width: 100px;
    height: 100px;
  }
}

.copyright {
  color: #fff;
  text-align: center;
  font-size: 12px;
}



</style>
