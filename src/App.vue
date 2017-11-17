<template>
  <div id="app">
    <Gedaechtnisprotokoll/>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Gedaechtnisprotokoll from './components/Gedaechtnisprotokoll'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Gedaechtnisprotokoll

  },

  data () {
    return {
      msg: 'Welcome to Yoursdsddd Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
