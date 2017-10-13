<template>
  <div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  import VHeader from 'components/header/header'
  import VNav from 'components/nav/nav'
  import Player from 'components/player/player'
  
  export default {
    components: {
      VHeader,
      VNav,
      Player
    }
  }
</script>

<style lang="stylus" rel="stylesheet">

</style>
