<template>
  <div>
    <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange" :aspect-ratio="300/800" dots-position="center"></swiper>
    <flexbox :gutter="0">
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider, Flexbox, FlexboxItem } from 'vux'

const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg',
  title: '送你一次旅行',
  fallbackImg: 'https://static.vux.li/demo/3.jpg'
}]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `(可点击)${item.title}`
}))

export default {
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    Flexbox,
    FlexboxItem
  },
  ready () {

  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    demo06_onIndexChange (index) {
      this.demo06_index = index
    }
  },
  data () {
    return {
      demo06_list: urlList,
      demo06_index: 0,
      swiperItemIndex: 1
    }
  }
}
</script>

<style lang="less">
.flex-demo {
  text-align: center;
  color: @text-color;
  background-color: @theme-color;
  background-clip: padding-box;
}
</style>
