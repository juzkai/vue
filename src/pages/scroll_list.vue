<template>
  <div>
    <div class="content-scroll-wrapper">
      <div class="content-scroll-list-wrap" ref="scrollWrapper">
        <better-scroll
            ref="contentScroll"
            :data="content"
            :listenScroll="true"
            :options="contentScrollOptions"
            @pulling-up="onPullingUp">
            <ul class="imgs-wrapper" style="padding-top:90px;">
              <li v-for="(item, index) in content" :key="index" class="imgs-item">
                <img :src="item.url">
              </li>
            </ul>
          </better-scroll>
        </div>
    </div>
  </div>
</template>
<script>
import betterScroll from '../components/scroll'

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
        pullUpLoad: true
      },
      tabActive: 0
    }
  },
  methods: {
    onPullingUp () {
      setTimeout(() => {
        this.content = this.content.concat(imgs)
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
.cube-pulldown-wrapper {
  text-align: center;
  margin-top: -10px;
}
</style>
