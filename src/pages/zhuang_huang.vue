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
            <div class="imgs-wrapper" style="padding-top:90px;">
              <div v-for="(item, index) in content" :key="index">
                <div  class="list-wrap">
                    <div class="list-left">
                        <div class="list-left-icon">
                        </div>
                    </div>
                    <div class="list-right">
                        <div>
                            <span>admin</span>
                            <button class="list-info-icon zhi-ding">置顶</button>
                            <button class="list-info-icon hong-bao">红包</button>
                        </div>
                        <flexbox class="list-info">
                            <flexbox-item :span="3">岗位</flexbox-item>
                            <flexbox-item>其他</flexbox-item>
                        </flexbox>
                        <flexbox class="list-info">
                            <flexbox-item :span="3">行业年限</flexbox-item>
                            <flexbox-item>3年</flexbox-item>
                        </flexbox>
                        <flexbox class="list-info">
                            <flexbox-item :span="3">手机号</flexbox-item>
                            <flexbox-item>18262283481</flexbox-item>
                        </flexbox>
                        <flexbox class="list-info" style="align-items:flex-start;">
                            <flexbox-item :span="3">工作描述</flexbox-item>
                            <flexbox-item>氨基酸的房间爱哦儿氨基酸等开了房间哦阿斯加德佛个今儿我if假按揭考虑到积分</flexbox-item>
                        </flexbox>
                    </div>
                  </div>
              </div>
            </div>
          </better-scroll>
        </div>
    </div>
    </div>
</template>
<script>
import betterScroll from '../components/scroll'
import itemList from '../components/item-list'
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
    betterScroll,
    itemList
  },
  data () {
    return {
      content: imgs.slice(),
      contentScrollOptions: {
        pullUpLoad: true,
        pullDownRefresh: {
          threshold: 60,
          stopTime: 100
        }
      },
      secondStop: 0,
      tabActive: 0
    }
  },
  activated () {
  },
  methods: {
    onPullingUp () {
      setTimeout(() => {
        this.content = this.content.concat(imgs)
      }, 2000)
    },
    onPullingDown () {
      setTimeout(() => {
        this.content.unshift(imgs[cnt++ % 3])
        this.$refs.contentScroll.scrollTo(0, this.secondStop, 300)
      }, 2000)
    }
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
</style>
