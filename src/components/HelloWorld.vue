<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
       var xhr = new XMLHttpRequest(); 

    xhr.open('post', 'https://www.sxsoft.com/register/sentSmsCode');
    // xhr.setRequestHeader('Host','www.sxsoft.com')
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    xhr.setRequestHeader('Cookie','PHPSESSID=m6iuideqen6h9cvr31cuhvacf1; __USYK=a%3A5%3A%7Bs%3A10%3A%22session_id%22%3Bs%3A32%3A%22ce3851085e3afa777eab6eeba118920a%22%3Bs%3A10%3A%22ip_address%22%3Bs%3A15%3A%22183.156.226.246%22%3Bs%3A10%3A%22user_agent%22%3Bs%3A120%3A%22Mozilla%2F5.0+%28Windows+NT+6.1%3B+WOW64%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F53.0.2785.104+Safari%2F537.36+Core%2F1.53.%22%3Bs%3A13%3A%22last_activity%22%3Bi%3A1554483061%3Bs%3A9%3A%22user_data%22%3Bs%3A0%3A%22%22%3B%7Da1f1e35b12e130f0ea2489487cfe66adff32339b; csrf_cookie_name=4635a3a9f9ccdc903eec1a776cd271d4')
    xhr.setRequestHeader('Origin','https://www.sxsoft.com')
    // xhr.setRequestHeader('Referer','https://www.sxsoft.com/register/regpage')
    xhr.setRequestHeader('Accept','application/json, text/javascript, */*; q=0.01')
     xhr.setRequestHeader('X-Requested-With','XMLHttpRequest')
    xhr.responseType = 'json';
 
    xhr.onload = function() { console.log(xhr.response); };
 
    xhr.onerror = function() { console.log("Booo"); };
 
    xhr.send('mobile=18157146715&csrf_sxsoft_name=4635a3a9f9ccdc903eec1a776cd271d4');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
