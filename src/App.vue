<template>
  <div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import VHeader from 'components/header/header'
  import VNav from 'components/nav/nav'
  
  export default {
    components: {
      VHeader,
      VNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet">
  
</style>
