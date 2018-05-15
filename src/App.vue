<template>
  <div style="height:100%;">
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      :left-options="leftOptions"
      :title="title"
      :transition="headerTransition"
     >
       <a slot="right" style="position: relative;top: -4px;" v-if="$route.path === '/'">
        <img src="../static/img/mailbox.png" alt="">
        <badge class="badge-icon" text="8"></badge>
      </a>
      <a slot="right" style="position: relative;top: -2px;" v-if="$route.path !== '/'" @click="toHome()">
        首页
      </a>
     </x-header>
    <view-box  ref="viewBox" class="bg-color">
     <transition
        @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
        :name="viewTransition" :css="!!direction">
          <!-- 注意使用了keep-alive缓存全部页面 对于首次请求写到 created里面 对于每次进入页面都要请求的 写到 activated 里面 -->
          <keep-alive>
            <router-view class="router-view"></router-view>
          </keep-alive>
      </transition>
   </view-box>
    <tabbar v-show="isTabbarPage">
      <tabbar-item :selected="$route.path === '/'" :link="{path: '/'}">
        <img slot="icon"  src="../static/img/home.png">
        <img slot="icon-active"  src="../static/img/home-active.png">
        <span slot="label">我要查找</span>
      </tabbar-item>
      <tabbar-item :selected="$route.path === '/from'" :link="{path: '/form'}">
        <img slot="icon" src="../static/img/person.png">
        <img slot="icon-active"  src="../static/img/person-active.png">
        <span slot="label">我要发布</span>
      </tabbar-item>
    </tabbar>
   <loading v-model="isLoading" text="请稍候" ></loading>
  </div>
</template>

<script>
import { XHeader, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, Tabbar, Loading, Badge, TabbarItem, XImg } from 'vux'
import { mapState } from 'vuex'
export default {
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    Tabbar,
    Loading,
    Badge,
    TabbarItem,
    XImg
  },
  data () {
    return {
      showMenus: false,
      entryUrl: document.location.href
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    leftOptions () {
      return {
        showBack: this.$route.path !== '/',
        backText: ''
      }
    },
    rightOptions () {
      return {
        showMore: this.$route.path === '/'
      }
    },
    headerTransition () {
      if (!this.direction) return ''
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    title () {
      document.title = this.$route.name
      return this.$route.name
    },
    viewTransition () {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    },
    isTabbarPage () {
      return (this.$route.path === '/' || this.$route.path === '/form')
    }
  },
  methods: {
    toHome () {
      const path = this.$route.path
      const history = window.sessionStorage
      const toIndex = history.getItem(path)
      // history.clear()
      this.$router.go(toIndex * -1)
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
 html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
  }
 .bg-color {
   background-color: @bg-color;
   -webkit-overflow-scrolling: touch; // ios5+
   -ms-overflow-style: -ms-autohiding-scrollbar;
 }
 .weui-tab__panel {
   padding-top: 46px;
  //  padding-bottom: 0 !important;
   overflow-x: hidden !important;
 }
 .weui-dialog {
   border-radius: 13px;
 }
 .weui-dialog__hd {
   padding: 1.0em 1.6em 0.5em;
 }
 .weui-dialog__bd {
   min-height: 30px;
 }
 .router-view {
   width: 100%;
   top: 46px;
 }
 .vux-pop-out-enter-active,
 .vux-pop-out-leave-active,
 .vux-pop-in-enter-active,
 .vux-pop-in-leave-active {
   will-change: transform;
   transition: all 500ms;
   height: 100%;
   top: 46px;
   position: absolute;
   backface-visibility: hidden;
   perspective: 1000;
 }
 .vux-pop-out-enter {
   opacity: 0;
   transform: translate3d(-100%, 0, 0);
 }
 .vux-pop-out-leave-active {
   opacity: 0;
   transform: translate3d(100%, 0, 0);
}
 .vux-pop-in-enter {
   opacity: 0;
   transform: translate3d(100%, 0, 0);
 }
 .vux-pop-in-leave-active {
   opacity: 0;
   transform: translate3d(-100%, 0, 0);
 }
 .badge-icon {
   position: absolute;
   top: 0px;
   left: 70%;
 }
</style>
