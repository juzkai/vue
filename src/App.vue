<template>
  <div style="height:100%;">
    <view-box ref="viewBox" class="bg-color">
     <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      :left-options="leftOptions"
      :right-options="rightOptions"
      :title="title"
      :transition="headerTransition"
     ></x-header>
     <transition
        @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
        :name="viewTransition" :css="!!direction">
          <!-- 注意使用了keep-alive缓存全部页面 对于首次请求写到 created里面 对于每次进入页面都要请求的 写到 activated 里面 -->
          <keep-alive>
            <router-view class="router-view"></router-view>
          </keep-alive>
      </transition>
     <!-- <tabbar slot="bottom"></tabbar> -->
   </view-box>
   <loading v-model="isLoading" text="请稍候" ></loading>
  </div>
</template>

<script>
import { XHeader, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, Tabbar, Loading } from 'vux'
import { mapState } from 'vuex'
export default {
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    Tabbar,
    Loading
  },
  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  },
  created () {
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
        showMore: false
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
    -webkit-user-select: none
  }
 .bg-color {
   background-color: @bg-color;
 }
 .weui-tab__panel {
   padding-top: 46px;
   padding-bottom: 0 !important;
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
</style>
