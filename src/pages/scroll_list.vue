<template>
  <div>
    <div class="content-scroll-wrapper">
      <div class="content-scroll-list-wrap" ref="scrollWrapper">
        <better-scroll
            ref="contentScroll"
            :data="content"
            :listenScroll="true"
            :options="contentScrollOptions"
            @pulling-down="onPullingDown"
            @pulling-up="onPullingUp">
            <ul class="imgs-wrapper" style="padding-top:90px;">
              <li v-for="(item, index) in content" :key="index" class="imgs-item">
                <img :src="item.url">
              </li>
            </ul>
            <!-- <div slot="pulldown" slot-scope="props">
              <div
                  v-if="props.pullDownRefresh"
                  class="cube-pulldown-wrapper"
                  :style="props.pullDownStyle">
                <div
                    v-if="props.beforePullDown"
                    class="before-trigger"
                    :style="{paddingTop: props.bubbleY + 'px'}">
                  <span :class="{rotate: props.bubbleY > contentScrollOptions.pullDownRefresh.threshold - 60}">↓</span>
                </div>
                <div class="after-trigger" v-else>
                  <div v-show="props.isPullingDown" class="loading">
                    <load-more :tip="''"></load-more>
                  </div>
                </div>
              </div>
            </div> -->
          </better-scroll>
        </div>
    </div>
  </div>
</template>
<script>
import betterScroll from '../components/scroll'
let cnt = 1
const imgs = [
  {
    url: 'http://om0jxp12h.bkt.clouddn.com/toutiao_12.JPG'
  },
  {
    url: 'http://om0jxp12h.bkt.clouddn.com/toutiao_21.JPG'
  },
  {
    url: 'http://om0jxp12h.bkt.clouddn.com/toutiao_31.JPG'
  }
]
export default {
  components: {
    betterScroll
  },
  data () {
    return {
      content: imgs.slice(),
      contentScrollOptions: {
        pullUpLoad: true,
        pullDownRefresh: {
          threshold: 90,
          stopTime: 100
        }
      },
      secondStop: 0,
      tabActive: 0
    }
  },
  methods: {
    onPullingUp () {
      if (this.content.length > 7) {
        this.contentScrollOptions.pullUpLoad = false
        this.dialog.toastMsg('没有更多数据了', {position: 'bottom'})
        return
      }
      setTimeout(() => {
        this.content = this.content.concat(imgs)
      }, 2000)
    },
    onPullingDown () {
      setTimeout(() => {
        this.content.unshift(imgs[cnt++ % 3])
        this.$refs.contentScroll.scrollTo(0, this.secondStop, 300)
      }, 2000)
    },
    switchTabItem (index) {
      this.tabActive = index
    },
    onItemClick () {
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.content-scroll-wrapper {
  flex: 1;
  /* position: relative; */
}
.content-scroll-list-wrap {
  height: 100%;
  transform: rotate(0deg);
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
.imgs-wrapper .imgs-item > img {
  width: 100%;
}
.pull-down-loading {
  position: absolute;
  width: 100%;
  top: 70px;
  text-align: center;
}
.cube-pulldown-wrapper {
  top: 70px !important;
}
</style>
