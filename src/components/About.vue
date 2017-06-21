<template>
  <div class="about">

    <div class="about-header">
      <Nav/> 

      <div class="container">
        <h1>最懂物流供应链的公司<br>最具互联网化的IT公司</h1>
      </div>

    </div>



    <div class="about-content">
      <div class="container">
        <!-- <img src="../assets/images/logo/logo.png" alt="tiaoling logo"> -->

        <img src="../assets/images/about/about_tiaoling_pics.png" alt="tiaoling">

        <h1>跳羚科技</h1>
        <p class="desc">成都跳羚科技有限公司是一家拥有成熟IT系统，可为O2O、快运、快递、仓储、供应链等业务领域提供全面解决方案的科技公司，是中信产业基金控股公司。公司核心技术团队成员经验丰富，参与物流行业的技术改造均逾10年；同时又有一支曾在O2O行业深耕、立志于为传统企业提供互联网转型解决方案的专业队伍，是国内为数不多的兼具传统物流和互联网思维的科技公司。</p>
      </div>

      <div class="row font-about">
        <div class="col-sm-12 col-xs-12 col-md-5 introduce-left">
          <p>物流供应链领域</p>
          <p>最具互联网化的IT公司</p>
        </div>
        <div class="col-sm-12 col-xs-12 col-md-2">
            <img src="../assets/images/about/about_p.png" class="introduce">
        </div>
        <div class="col-sm-12 col-xs-12 col-md-5 introduce-right">
            <p>互联网IT领域</p>
            <p>最懂物流供应链的公司</p>
        </div>
      </div>

    </div>

    <FootWrap/>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/break.scss";
.about-header{
  min-height: 460px;
  background-color: #1f1b43;
  h1{
    margin-top: 160px;
    color: #f8f8f8;
  }
}


.about-content{
  margin: 20px auto;
  .container p{
    width: 80%;
    margin: 20px auto;
    text-indent: 20px;
    text-align: left;
    line-height: 2em;
  }
}


.font-about {
  margin: 30px auto;
  width: 80%;
  .introduce-left {
    font-size: 24px;
    color: #EA5413;
  }
  .introduce-right {
    font-size: 24px;
    color: orange;
  }
}


</style>
