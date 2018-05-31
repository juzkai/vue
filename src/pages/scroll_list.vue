<template>
<div>
  <div class="content-scroll-wrapper">
        <div class="content-scroll-list-wrap" ref="scrollWrapper">
          <betterScroll
            ref="contentScroll"
            :data="content"
            :listenScroll="true"
            :options="contentScrollOptions"
            @pulling-up="onPullingUp">
            <ul class="imgs-wrapper" style="padding-top:46px;">
              <li v-for="(item, index) in content" :key="index" class="imgs-item">
                <img :src="item.url">
              </li>
            </ul>
          </betterScroll>
        </div>
      </div>
    </div>
</template>
<script>
import betterScroll from '../components/scroll'
import cubeLoading from '../components/loading'

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
    cubeLoading
  },
  data () {
    return {
      content: imgs.slice(),
      contentScrollOptions: {
        pullUpLoad: true
      }
    }
  },
  methods: {
    onPullingUp () {
      setTimeout(() => {
        this.content = this.content.concat(imgs)
      }, 2000)
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.toutiao .content {
  margin: 0 !important;
  height: 100%;
  display: flex;
  flex-flow: column;
}
.nav-scroll-list-wrap {
  transform: rotate(0deg);
  position: relative;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-right: 30px;
}
.cube-scroll-content {
  display: inline-block;
}
.nav-wrapper {
  display: inline-block;
  white-space: nowrap;
  line-height: 36px;
  padding: 0 5px;
}
.nav-item {
  display: inline-block;
  padding: 0 5px;
}
.more-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
  opacity: 0.95;
}
.more {
  display: inline-block;
  height: 1px;
  width: 20px;
  padding: 5px 0;
  border: 1px solid #000;
  border-right: transparent;
  border-left: transparent;
  background-color: #000;
  background-clip: content-box;
  margin: 11px;
}
.content-scroll-wrapper {
  flex: 1;
  /* position: relative; */
}
.content-scroll-list-wrap {
  height: 100%;
  transform: rotate(0deg);
  position: absolute;
  top: 0;
  /* padding-top: 46px; */
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
.before-trigger {
  margin-top: 10px;
  font-size: 30px;
  align-self: flex-end;
}
span {
  display: inline-block;
  transition: all 0.3s;
  color: #666;
}
.after-trigger {
  flex: 1;
  margin: 0;
}
.text-wrapper {
  padding: 5px 0;
  color: #498ec2;
  background-color: #d6eaf8;
  margin: auto;
  margin-top: 14px;
}

.loading {
  margin-top: 10px;
}
.cube-loading-spinners {
  margin: auto;
}
.success-enter-active,
.success-leave-active {
  transition: 100% 0.5s;
}
.success-enter,
.success-leave-to {
  width: 70%;
}
.success-enter-to,
.success-leave {
  width: 100%;
}
</style>
