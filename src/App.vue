<template>
  <div id="app">
    <div id="app"><VideoWebGL /></div>
  </div>
</template>

<script>
import VideoWebGL from "./components/VideoWebGL";

export default {
  name: "App",
  components: {
    VideoWebGL
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