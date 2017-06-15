<template>
  <div class="navbar">
    <div class="container">
      <ul class="nav hidden-sm">
        <li>    
          <a href="#/test">解决方案</a>
        </li>
        <li>    
          <a href="#/test">产品中心</a>
        </li>
        <li>    
          <a href="#/test">关于我们</a>
        </li>
      </ul>
      <ul class="nav-sm show-sm" :class="{toggle: isToggle}">
        <li>    
          <a href="#/test">解决方案</a>
        </li>
        <li>    
          <a href="#/test">产品中心</a>
        </li>
        <li>    
          <a href="#/test">关于我们</a>
        </li>
      </ul>
 
      <ul class="nav-sm-op show-sm">
        <li>    
          <a href="#" @click="toggle">
            <img class="hum" src="../assets/images/hamburg.svg" />
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
      isToggle: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toggle () {
      console.log(`fff`)
      this.isToggle = !this.isToggle
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/scss/grid.scss";
.navbar{
  background: #ea5413;
  height: 60px;
  line-height: 60px;
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
 float: right;
}
.toggle{
  max-height: 500px;
}

ul {
  margin: 0;
  list-style-type: none;
  padding: 0;
}

li {
  padding: 0 10px;
  display: inline-block;
  margin: 0;
}

a {
  color: #fff;
  text-decoration: none;
}
</style>
<style lang="scss">
.hum{
  display: inline-block;
  vertical-align: middle;
  width: 30px;
}

</style>

