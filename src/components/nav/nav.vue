<template>
  <nav class="nav-tab">
    <router-link tag="div" class="nav-tab-item" to="/recommend">
      <span class="nav-tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="nav-tab-item" to="/singer">
      <span class="nav-tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="nav-tab-item" to="/rank">
      <span class="nav-tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="nav-tab-item" to="/search">
      <span class="nav-tab-link">搜索</span>
    </router-link>
  </nav>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"
  
  .nav-tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .nav-tab-item
      flex: 1
      text-align: center
      .nav-tab-link
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .nav-tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>
