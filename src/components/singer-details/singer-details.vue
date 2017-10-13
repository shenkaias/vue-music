<template>
  <transition name="slide">
    <music-list :songs="songs" :bg-image="bgImage" :title="title"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getSingerDetails} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'assets/js/song'
  import MusicList from 'components/music-list/music-list'
  
  export default {
    data() {
      return {
        songs: []
      }
    },
    computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'
      ])
    },
    created() {
      this.getDetails()
    },
    methods: {
      getDetails() {
        const _singerId = this.singer.id
        if (!_singerId) {
          this.$router.push('/singer')
          return
        }
        getSingerDetails(_singerId).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item // => let musicData = item.musicData
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .slide-enter-active, .slide-leave-active
    transition all .3s
  
  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
