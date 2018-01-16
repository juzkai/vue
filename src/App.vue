<template>
  <div style="height:100%;">
    <view-box ref="viewBox" class="bg-color">
     <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      :left-options="leftOptions"
      :right-options="rightOptions"
      :title="title"
      :transition="headerTransition"
     ></x-header>
     <router-view />
     <!-- <tabbar slot="bottom"></tabbar> -->
   </view-box>
  </div>
</template>

<script>
import { XHeader, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, Tabbar } from 'vux'
export default {
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    Tabbar
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
  computed: {
    leftOptions () {
      return {
        showBack: this.$route.path !== '/'
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
      return this.$route.name || ''
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
  }
 .bg-color {
   background-color: @bg-color;
 }
 .weui-tab__panel {
   padding-top: 46px;
   padding-bottom: 0 !important;
   overflow-x: hidden !important;
 }
</style>
