<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgb(18, 18, 18);
  z-index: -1;
}

.slide-right-enter {
  transform: translate(100%, 0);
}

.slide-right-enter-active {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.3s ease-in-out;
}

.slide-right-enter-to {
  transform: translate(0, 0);
}

/* // 从左边进入 */
.slide-left-enter {
  transform: translate(-100%, 0);
}

.slide-left-enter-active {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.3s ease-in-out;
}

.slide-left-enter-to {
  transform: translate(0, 0);
}
</style>
