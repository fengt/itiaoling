<template>
  <div class="navbar" :class="{'back-change': changeBar}">
    <div class="container">
      <ul class="nav hidden-sm hidden-xs">
        <li>    
          <a class="logo-link" href="#/">
            <img class="logo-img" src="../assets/images/logo.png">
          </a>
        </li>
        <li>    
          <a href="#/test">产品中心</a>
        </li>
        <li>    
          <a href="#/solution">解决方案</a>
        </li>
        <li>    
          <a href="#/about">关于我们</a>
        </li>
      </ul>

      <ul class="nav-sm visible-sm visible-xs" :class="{toggle: isToggle}">
        <li>    
          <a href="#/test">产品中心</a>
        </li>
        <li>    
          <a href="#/solution">解决方案</a>
        </li>
        <li>    
          <a href="#/about">关于我们</a>
        </li>
      </ul>
      
      <ul class="nav-left visible-sm visible-xs">
        <li>    
          <a class="logo-link" href="#/">
            <img class="logo-img" src="../assets/images/logo.png">
            <span>跳羚科技</span>
          </a>
        </li>
 
      </ul> 
      <ul class="nav-sm-op visible-sm visible-xs">

        <li>    
          <a class="humburg-link" href="#" @click="toggle">
            <template v-if="changeBar">
              <img class="hum" src="../assets/images/hamburg-orange.svg" />
            </template>
            <template v-else>
              <img class="hum" src="../assets/images/hamburg.svg" />
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
</style>

