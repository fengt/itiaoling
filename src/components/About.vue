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

        <span class="title">跳羚科技</span>
        <p class="desc">成都跳羚科技有限公司是一家拥有成熟IT系统，可为O2O、快运、快递、仓储、供应链等业务领域提供全面解决方案的科技公司，是中信产业基金控股公司。
        </p><p>
        公司核心技术团队成员经验丰富，参与物流行业的技术改造均逾10年；同时又有一支曾在O2O行业深耕、立志于为传统企业提供互联网转型解决方案的专业队伍，是国内为数不多的兼具传统物流和互联网思维的科技公司。</p>

      </div>

      <!-- <div class="row font-about">
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
      </div> -->

      <div class="news-container container">
        <span class="title">媒体报道</span>
        <ul class="news-list clearfix">
           <li class="news-left news">
             <span class="m-time">2016-08-02</span>
             <a target="_blank" href="https://qy.weixin.qq.com/cgi-bin/wap_getnewsmsg?action=get&amp;__biz=MzI5MDIyMjcxOQ==&amp;mixuin=MjI5NzgxMzg2MTAwMDYzMDM2OQ==&amp;mid=10002789&amp;idx=1&amp;sn=95aed0ac072a69033907230b8f75e443&amp;scene=1">
                 跳羚科技程丹荣膺“中国物流信息化十大风云人物”
             </a>
           </li>
           <li class="news-right news">
             <span class="m-time">2016-05-17</span>
             <a target="_blank" href="http://mp.weixin.qq.com/s?__biz=MjM5NjM0MTM2Mg==&amp;mid=2649873206&amp;idx=1&amp;sn=687bf50cd37b5eb8a065f1f972b67a27&amp;scene=1&amp;srcid=0517VKreQ5ZS6C9xGWCMRSOQ#wechat_redirect">
                 5年后100亿营收拼图，除了如风达，天地华宇还会有它！
             </a>
           </li>
           <li class="news-left news">
             <span class="m-time">2016-04-08</span>
             <a target="_blank" href="http://www.50cnnet.com/show-63-96025-1.html">
                 跳羚科技争当信息化先锋 “互联网+物流”版图再下一城
             </a>
           </li>
           <li class="news-right news">
             <span class="m-time">2016-03-26</span>
             <a target="_blank" href="http://news.163.com/16/0326/03/BJ289KQ400014Q4P.html">
                 武侯企业欲推动物流行业互联网转型—网易新闻
             </a>
           </li>
           <li class="news-left news">
             <span class="m-time">2016-03-26</span>
             <a target="_blank" href="http://www.cdrb.com.cn/html/2016-03/26/content_2291232.htm">
                 武侯企业欲推动物流行业互联网转型—成都日报</a>
           </li>
           <li class="news-right news">
             <span class="m-time">2016-03-25</span>
             <a target="_blank" href="http://tech.hexun.com/2016-03-25/182961862.html"> 跳羚科技揭牌，物流行业添互联网转型推动者</a>
           </li>
           <li class="news-left news">
             <span class="m-time">2016-03-25</span>
             <a target="_blank" href="http://mp.weixin.qq.com/s?__biz=MzAwMzAyMTIzOA==&amp;mid=403844571&amp;idx=1&amp;sn=ad569848637b21abac2f29626a29e860&amp;scene=1&amp;srcid=0421LQDv7uH11EKCKNGazd1Q#wechat_redirect">
                 总部经济发力智慧城市 武侯企业欲推动物流行业互联网转型—成都晚报
             </a>
           </li>
           <div class="mid-line"></div>
        </ul>

      </div>


      <div class="about-img"><img src="../assets/images/about/about_tiaoling_pics.png" alt="tiaoling"></div>
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
  margin: 80px auto 50px;
  .container p{
    width: 65%;
    margin: 20px auto;
    text-indent: 30px;
    text-align: left;
    line-height: 2.5em;
    color: #383963;
    font-weight: 400;
    font-size: 1.1em;
  }
  .about-img{
    img{
      width: 85%;
    }
  }
}


// .font-about {
//   margin: 30px auto;
//   width: 80%;
//   .introduce-left {
//     font-size: 24px;
//     color: #EA5413;
//   }
//   .introduce-right {
//     font-size: 24px;
//     color: orange;
//   }
// }




/*标题：跳羚科技、媒体报道*/
.title{
  text-align: center;
  color: orange;
  font-weight: 500;
  font-size: 30px;
}





/*媒体报道*/
.news-container{
  width: 85%;
  margin-top: 50px;
  .news-list{
    position: relative;
    margin: auto;
    width: 95%;
    max-width: 1120px;
    padding-top: 50px;
    padding-bottom: 70px;
  }

  .news{
    position: relative;
    color: #191140;
    width: 40%;
    text-align: left;
    border-radius: 5px;
    background-color: #f8f8f8;
    padding: 20px 30px;
    -webkit-box-shadow: 0 15px 30.5px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 15px 30.5px 0 rgba(0, 0, 0, 0.1);
    .m-time {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
      max-width: 100%;
      display: block;
    }
    a{
      color: #1f1b43;
      font-size: 16px;
      line-height: 150%;
      &:hover{
        color: orange;
      }
    }
  }


  .news-left{
    float: left;
    margin-right: 60%;
  }


  .news-right{
    float: right;
    margin-left: 60%;
  }



  /*时间线*/
  .news:before{
    content: '';
    position: absolute;
    background-color: #e1e2e4;
    height: 2px;
    width: 25%;
    max-width: 117px;
    top: 48px;
  }
  .news-left:before{
    right: -25%;
  }
  .news-right:before{
    left: -25%;
  }

  .news:after{
    content: '';
    position: absolute;
    background-color: #e1e2e4;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    top: 44px;
  }
  .news-left:after{
    right: -26%;
  }
  .news-right:after{
    left: -26%;
  }

  .mid-line{
    position: absolute;
    width: 2px;
    height: 670px;
    left: 50%;
    top: 100px;
    background-color: #e1e2e4;
    z-index: -1;
  }
}

/*时间线div显示处理*/
.clearfix:after{
  content: '';
  display: table;
  clear: both;
  line-height: 0;
  visibility: hidden;
}


</style>
