<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  // import authRouter from '@/router/authRouter'

  export default {
    name: 'App',
    components: {},
    computed: {
      ...mapGetters('user', ['isLogin'])
    },
    created() {
      if (this.isLogin) {
        this.$store.commit('addAuthRouter')
      }

    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>