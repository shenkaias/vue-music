<template>
  <div ref="scroll-wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  
  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: null
      },
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    mounted() {
      setTimeout(_ => {
        this._initBScroll()
      }, 20)
    },
    methods: {
      _initBScroll() {
        if (!this.$refs['scroll-wrapper']) {
          return
        }
        this.scroll = new BScroll(this.$refs['scroll-wrapper'], {
          probeType: this.probeType,
          click: this.click
        })
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    },
    watch: {
      data() {
        setTimeout(_ => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">

</style>
