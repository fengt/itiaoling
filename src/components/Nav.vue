<template>
  <div class="navbar" :class="{'back-change': changeBar}">
    <div class="container">
      <ul class="nav hidden-sm hidden-xs">
        <li>    
          <a class="logo-link" href="#/">
            <template v-if="changeBar">
              <img class="logo-img" src="../assets/images/logo/logo-orange.png">
            </template>
            <template v-else>
              <img class="logo-img" src="../assets/images/logo/logo-white.png">
            </template>
          </a>
        </li>
        <li class="products">    
          <a href="javascript:void(0);">产品中心</a>
          <div class="sub-product">
            <a class="product-item" href="#/fengyun"><img src="../assets/images/products/logo/fengyun_active.png" alt="风云系统"><h2>风云系统</h2></a>
            <a class="product-item" href="#/feiyu"><img src="../assets/images/products/logo/feiyu_active.png" alt="飞鱼配送"><h2>飞鱼配送</h2></a>
            <a class="product-item" href="#/ddhy"><img src="../assets/images/products/logo/dudu_active.png" alt="嘟嘟好运"><h2>嘟嘟好运</h2></a>
            <a class="product-item" href="#/huashifu"><img src="../assets/images/products/logo/huashifu_active.png" alt="华师傅"><h2>华师傅</h2></a>
            <a class="product-item" href="https://wms.itiaoling.com" target="_blank"><img src="../assets/images/products/logo/wms_active.png" alt="WMS"><h2>WMS</h2></a>
            <a class="product-item" href="#/xingxiao"><img src="../assets/images/products/logo/xingxiao_active.png" alt="行销"><h2>行销</h2></a>
            <a class="product-item" href="#/jisong"><img src="../assets/images/products/logo/jisong_active.png" alt="极送"><h2>极送</h2></a>
          </div>
        </li>
        <li>    
          <a href="#/solution">解决方案</a>
        </li>
        <li>    
          <a href="#/about">关于我们</a>
        </li>
      </ul>

      <!-- <ul class="nav-sm visible-sm visible-xs" :class="{toggle: isToggle}">
        <li>    
          <a href="#/ddhy">产品中心</a>
        </li>
        <li>    
          <a href="#/solution">解决方案</a>
        </li>
        <li>    
          <a href="#/about">关于我们</a>
        </li>
      </ul> -->
      <div class="nav-sm visible-sm visible-xs" :class="{toggle: isToggle}">
        <div class="container">
          <div class="nav-sm-row row">
            <div class="col-xs-7 col-sm-7 menu-left">
              <a class="menu-item" href="#/fengyun"><div><img src="../assets/images/products/logo/fengyun_active.png" alt="风云系统"><span>风云系统</span></div></a>
              <a class="menu-item" href="#/feiyu"><div><img src="../assets/images/products/logo/feiyu_active.png" alt="飞鱼配送"><span>飞鱼配送</span></div></a>
              <a class="menu-item" href="#/ddhy"><div><img src="../assets/images/products/logo/dudu_active.png" alt="嘟嘟好运"><span>嘟嘟好运</span></div></a>
              <a class="menu-item" href="#/huashifu"><div><img src="../assets/images/products/logo/huashifu_active.png" alt="华师傅"><span>华师傅</span></div></a>
              <a class="menu-item" href="https://wms.itiaoling.com" target="_blank"><div><img src="../assets/images/products/logo/wms_active.png" alt="WMS"><span>WMS</span></div></a>
              <a class="menu-item" href="#/xingxiao"><div><img src="../assets/images/products/logo/xingxiao_active.png" alt="行销"><span>行销</span></div></a>
              <a class="menu-item" href="#/jisong"><div><img src="../assets/images/products/logo/jisong_active.png" alt="极送"><span>极送</span></div></a>
            </div>
            <div class="col-xs-5 col-sm-5 menu-right">
              <!-- <a class="menu-item" href="javascript:void(0);">产品中心</a> -->
              <a class="menu-item" href="#/solution">解决方案</a>
              <a class="menu-item" href="#/about">关于我们</a>
            </div>
          </div>
        </div>
      </div>
      
      <ul class="nav-left visible-sm visible-xs">
        <li>    
          <a class="logo-link" href="#/">
            <template v-if="changeBar">
              <img class="logo-img" src="../assets/images/logo/logo-orange.png">
            </template>
            <template v-else>
              <img class="logo-img" src="../assets/images/logo/logo-white.png">
            </template>
            <span>跳羚科技</span>
          </a>
        </li>
 
      </ul> 
      <ul class="nav-sm-op visible-sm visible-xs">

        <li>    
          <a class="humburg-link" href="#" @click="toggle">
            <template v-if="changeBar">
              <img class="hum" src="../assets/images/logo/hamburg-orange.svg" />
            </template>
            <template v-else>
              <img class="hum" src="../assets/images/logo/hamburg.svg" />
            </template>
          </a>
        </li>
      </ul>
 
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      changeBar: false,
      isToggle: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggle (e) {
      e.preventDefault()
      this.changeBar = true
      this.isToggle = !this.isToggle
    },
    handleScroll () {
      this.isToggle = false
      const sy = window.scrollY
      // console.log(`${window.scrollY}`)
      if (sy > 20) {
        this.changeBar = true
      } else {
        this.changeBar = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/scss/app.scss";
</style>
<style lang="scss">
.navbar{
  top: 0;
  width: 100%;
  position:fixed;
  background: transparent;
  height: 60px;
  line-height: 60px;
  z-index: 10;
}
.back-change{
  background: #fff;
  border-bottom: #e3e3e3 solid 1px;
  a {
    color: #65697f;
    &:hover {
      color: #ea5413;
    }
  }
  .hum{
    color: #ea5413;
  }
}
.nav-left{
  float: left;
}
.nav-sm-op{
  float: right;
}
.nav-sm{
  position: fixed;
  background: #f8f8f8;
  color: #65697f;
  width: 100%;
  top: 60px;
  float: right;
  transition: max-height 0.5s linear;
  max-height: 0;
  overflow: hidden; 
  li {
    padding-left: 40px; 
    text-align: left;
    display: block;
    // border-bottom: 1px solid #e1e2e4;
    &:hover {
      background: #e1e2e4;
    }
  }
  a{
    display: block;
    width: 100%;
    color: #333 
  }
}

.nav{
  text-align: left;
}
.toggle{
  max-height: 500px;
}

ul {
  margin: 0;
  list-style-type: none;
  padding: 0;
}
a {
  font-size: 18px;
  color: #fff;
  &:hover{
    background-color: transparent;
    color: #e1e2e4;
  }
}
li {
  padding: 0 20px;
  display: inline-block;
  margin: 0;
}
.logo-link{
  display: block;
  position: relative;
}
.logo-img{
  display: inline-block;
  vertical-align: middle;
  width: 45px;
  height: 45px;
}
.hum{
  display: inline-block;
  vertical-align: middle;
  height: 60px;
  width: 24px;
}
.humburg-link{
  position: relative;
  display: block;
  line-height: 60px;
  height: 60px;
}


/*悬浮下拉菜单（大屏）*/
.products{
  position: relative;
  &:hover .sub-product{
    display: block;
  }
  .sub-product{
    position: absolute;
    display: none;
    width: 680px;
    min-width: 160px;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 12px;
    border: 1px solid rgba(0,0,0,.15);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    left: -50px;
    left: calc(-50px);
    text-align: center;

    .product-item {
      padding: 20px;
      color: #65697f;
      display: inline-block;
      h2{
        font-size: 16px;
        margin: 2px 0 0;
      }
      img{
        width: 40px;
        vertical-align: middle;
      }
    }
  }
}

/*悬浮下拉菜单（小屏）*/
// @media (max-width: 375px)
.nav-sm-row{
  margin-bottom: 20px;
}
.menu-left {
  border-right: 1px solid rgba(0,0,0,.15);
}
.menu-item {
  color: #65697f;
  display: block;
  font-size: 16px;
  div{
    text-align: left;
    width: 120px;
    display: inline-block;
  }
  img{
    width: 25px;
    margin-right: 12px;
    vertical-align: middle;
  }
  span{
    vertical-align: middle;
  }
}

</style>

