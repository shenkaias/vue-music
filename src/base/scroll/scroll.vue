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
      },
      listenScroll: {
        type: Boolean,
        default: false
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
        if (this.listenScroll) {
          let that = this
          this.scroll.on('scroll', (pos) => {
            that.$emit('scroll', pos)
          })
        }
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
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
