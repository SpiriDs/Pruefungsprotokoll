<template>
  <div id="app">
    <Gedaechtnisprotokoll/>
  </div>
</template>

<script>
import Gedaechtnisprotokoll from "./components/Gedaechtnisprotokoll";

export default {
  name: "app",
  components: {
    Gedaechtnisprotokoll
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
