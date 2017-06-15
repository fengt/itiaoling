<template>
  <div class="nav">
    <ul>
      <li>    
        <a href="/test">解决方案</a>
      </li>
      <li>    
        <a href="/test">产品中心</a>
      </li>
      <li>    
        <a href="/test">关于我们</a>
      </li>
 
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav{
  background: #ea5413;
  height: 60px;
}
ul {
  margin: 0;
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
  text-decoration: none;
}
</style>
