<template>
  <div>
    <x-header :left-options="{backText: '', showBack: false}">
        首页
       <a slot="right" style="position: relative;top: -4px;">
        <img src="../../static/img/mailbox.png" alt="">
        <badge class="badge-icon" text="1"></badge>
      </a>
    </x-header>
    <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange" :aspect-ratio="300/800" dots-position="center"></swiper>
    <div class="demo-list-box">
      <flexbox :gutter="0" v-for="(list, index) in components" :key="index">
        <flexbox-item :span="1/2" v-for="component in list" :key="component.name" class="cbox vux-1px-t vux-tap-active" @click.native="go(component.name)">
          <div class="vux-1px-r cbox-inner">
            <!-- <span class="demo-icon demo-icon-big" v-html="component.icon" :style="{color: component.color}"></span> -->
            <img :src="component.icon" alt="">
            <p :style="{fontSize: component.name.length > 12 ? '12px' : ''}">{{component.name}}</p>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider, Flexbox, FlexboxItem, XHeader, Badge } from 'vux'
import logo from '../assets/logo.png'
const itemLength = 2
const componentss = [{
  name: 'item1', index: 1, icon: logo
},
{
  name: 'item2', index: 2, icon: logo
},
{
  name: 'item3', index: 3, icon: logo
},
{
  name: 'item4', index: 4, icon: logo
},
{
  name: 'item5', index: 5, icon: logo
},
{
  name: 'item6', index: 6, icon: logo
}]
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
  img: 'https://static.vux.li/demo/3.jpg',
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
    FlexboxItem,
    XHeader,
    Badge
  },
  ready () {

  },
  methods: {
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    demo06_onIndexChange (index) {
      this.demo06_index = index
    },
    go (name) {
      let _this = this
      // 显示
      // this.$vux.alert.show({
      //   title: '123',
      //   content: 'Do you agree?',
      //   onShow () {
      //     console.log('Plugin: I\'m showing')
      //   },
      //   onHide () {
      //     _this.$router.push('/item')
      //   }
      // })
      _this.$router.push('/item/123/abc')
    },
    split (array) {
      let chunks = []
      let count = Math.ceil(array.length / itemLength)
      while (count > 0) {
        chunks.push(array.slice((count - 1) * itemLength, count * itemLength))
        count--
      }
      chunks = chunks.reverse()
      const lastList = chunks[chunks.length - 1]
      const lastLength = lastList.length
      if (lastLength < itemLength) {
        for (let i = 0; i < itemLength - lastLength; i++) {
          lastList.push({
            name: '----',
            icon: ''
          })
        }
      }
      return chunks
    }
  },
  data () {
    return {
      demo06_list: urlList,
      demo06_index: 0,
      swiperItemIndex: 1,
      components: this.split(componentss)
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
.cbox {
  text-align: center;
}
.cbox-inner {
  padding: 15px 0;
  width: 100%;
  height: 100%;
  border: 1px solid @border-color;
  border-left-color: transparent;
  border-top-color: transparent;
}
.cbox-inner img {
  width: 35%;
  // height: 50px;
}
.demo-list-box {
  background-color: #fff;
  width: 100%;
}
</style>
