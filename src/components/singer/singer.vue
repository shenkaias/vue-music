<template>
  <div class="singer" ref="singer">
    <list-view :data="singers"></list-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import listView from 'base/listView/listView'
  import {getSingerList} from 'api/singer'
  import Singer from 'assets/js/singer'
  import {ERR_OK} from 'api/config'
  
  const HOT_SINGER_LEN = 10
  const HOT_NAME = '热门'
  
  export default {
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList()
    },
    methods: {
      _getSingerList() {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            this.singers = this._normalizeSinger(res.data.list)
          }
        })
      },
      _normalizeSinger(list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.forEach((item, index) => {
          if (index < HOT_SINGER_LEN) { // 把前10条数据 当做热门歌手
            map.hot.items.push(new Singer({
              name: item.Fsinger_name,
              id: item.Fsinger_mid
            }))
          }
          const key = item.Findex
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          }))
        })
        let hot = []
        let ret = []
        for (let k in map) {
          let val = map[k]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        ret.sort((a, b) => { // 把数组的key 按字母a-z排序
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      }
    },
    components: {
      listView
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .singer
    position fixed
    top 88px
    bottom 0
    width 100%
</style>
