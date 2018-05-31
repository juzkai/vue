<template>
  <div>
    <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange" :aspect-ratio="350/800" dots-position="center"></swiper>

    <div class="demo-list-box" style="margin-bottom: 10px;">
      <flexbox :gutter="0" wrap="wrap" style="background:#efeff4;">
        <flexbox-item style="background:#fff;" :span="1 / itemLength" v-for="component in list" :key="component.name" class="cbox vux-1px-t vux-tap-active" @click.native="go(component.index)">
          <div class="vux-1px-r cbox-inner">
            <!-- <span class="demo-icon demo-icon-big" v-html="component.icon" :style="{color: component.color}"></span> -->
            <img :src="component.icon" alt="">
            <p :style="{fontSize: component.name.length > 12 ? '12px' : ''}" ref="componentName">{{component.name}}</p>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <!-- <grid :show-lr-borders="false" style="background:#fff;margin-bottom:10px;">
      <grid-item  v-for="component in list" :key="component.name" :label="component.name">
        <img slot="icon" :src="component.icon">
      </grid-item>
    </grid> -->
    <div style="height:44px;" id="tab-list-lifo">
     <sticky scroll-box="vux_view_box_body" :check-sticky-support="false" :offset="46">
      <!-- <tab :line-width=2 v-model="tabIndex">
          <tab-item class="vux-center" :selected="demo2 === tabIndex" v-for="item in tabSwiperList" @click="demo2 = tabIndex" :key="item.index">{{item}}</tab-item>
      </tab> -->
      <tab v-model="tabIndex">
        <tab-item selected @on-item-click="onItemClick">最新发布</tab-item>
        <tab-item @on-item-click="onItemClick">装潢</tab-item>
        <tab-item @on-item-click="onItemClick">家政</tab-item>
        <tab-item @on-item-click="onItemClick">同城运输</tab-item>
        <tab-item @on-item-click="onItemClick">其他</tab-item>
     </tab>
     </sticky>
    </div>
    <div class="tab-content" v-if="tabIndex === 0">
            <div class="list-wrap" v-for="(i, index) in 3" :key="index">
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
                        <flexbox-item>装潢</flexbox-item>
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
        <div class="tab-content" v-if="tabIndex === 1">
            <div class="list-wrap" v-for="(i, index) in 3" :key="index">
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
                        <flexbox-item>瓦工</flexbox-item>
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
        <div class="tab-content" v-if="tabIndex === 2">
            <div class="list-wrap" v-for="(i, index) in 3" :key="index">
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
                        <flexbox-item>家政</flexbox-item>
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

        <div class="tab-content" v-if="tabIndex === 3">
            <div class="list-wrap" v-for="(i, index) in 3" :key="index">
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
                        <flexbox-item>同城运输</flexbox-item>
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
        <div class="tab-content" v-if="tabIndex === 4">
            <div class="list-wrap" v-for="(i, index) in 3" :key="index">
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
</template>

<script>
import logo from '../assets/logo.png'
import slide1 from '../../static/img/is09af9m0.jpg'
import slide2 from '../../static/img/rad600-02670750.jpg'
import slide3 from '../../static/img/tg-cm27006269.jpg'
import slide4 from '../../static/img/ul1319-6279.jpg'
// 九宫格参数
const componentss = [{
  name: '装潢', index: 1, icon: logo
},
{
  name: '家政', index: 2, icon: logo
},
{
  name: '同城运输', index: 3, icon: logo
},
{
  name: '其他', index: 4, icon: logo
}]
const baseList = [{
  url: 'javascript:',
  img: slide1,
  title: '家政'
}, {
  url: 'javascript:',
  img: slide2,
  title: '装潢'
}, {
  url: 'javascript:',
  img: slide3,
  title: '同城运输',
  fallbackImg: slide4
}]

const urlList = baseList.map((item, index) => ({
  url: '',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `${item.title}`
}))

const tabSwiperList = () => ['最新发布', '装潢', '家政', '同城运输', '其他']

export default {
  data () {
    return {
      demo06_list: urlList,
      demo06_index: 0,
      swiperItemIndex: 1,
      itemLength: 4,
      list: componentss,
      tabIndex: 0,
      demo2: 0,
      tabSwiperList: tabSwiperList(),
      value: ''
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    onItemClick () {
    },
    onSwiperItemIndexChange (index) {
      console.log('demo item change', index)
    },
    demo06_onIndexChange (index) {
      this.demo06_index = index
    },
    go (index) {
      let _this = this
      if (index === 1) {
        _this.$router.push('/list')
        return
      }
      if (index === 2) {
        _this.$router.push('/test')
        return
      }
      if (index === 3) {
        _this.$router.push('/scroll_list')
        return
      }
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
    }
  }
}
</script>

<style lang="less" scoped>
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
.tab-swiper {
  background-color: #fff;
  height: 500px;
}
.vux-search-box {
  position: fixed !important;
  z-index: 1000;
  height: 46px !important;
  background: @theme-color !important;
}

</style>
