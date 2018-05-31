<template>
  <div>
    <div class="wrapper" ref="wrapper">
        <ul class="content">
          <li v-for="(item, index) in data" :key="index">{{item}}</li>
          <load-more v-if="loading" :tip="'正在加载'"></load-more>
          <load-more v-if="noMoreData" :show-loading="false" :tip="'无更多数据'" background-color="#fbf9fe"></load-more>
        </ul>
    </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  data () {
    return {
      data: 30,
      loading: false,
      noMoreData: false
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  methods: {
    initScroll () {
      if (this.scroll) {
        this.loadData()
        return
      }
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true,
        bindToWrapper: true,
        startY: 0,
        bounceTime: 500,
        pullUpLoad: {
          threshold: -50
        }
      })
      this.$nextTick(() => {
        this.scroll.on('pullingUp', () => {
          if (this.data > 100) {
            this.noMoreData = true
            this.scroll.off('pullingUp')
            return
          }
          console.log(this.data)
          this.loadData()
        })
      })
    },
    loadData () {
      if (this.loading) return
      this.loading = true
      let $this = this
      setTimeout(() => {
        $this.data += 10
        setTimeout(() => {
          $this.scroll.refresh()
          $this.scroll.finishPullUp()
          $this.loading = false
        }, 20)
      }, 2000)
    }
  }
}
</script>
<style scoped>
.wrapper {
  position: relative;
  height: 200px;
}
.content {
  height: 400px;
}
</style>
