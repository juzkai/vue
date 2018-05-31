<template>
  <div>
      <!--外面包一层div 避免当定位为sticky时下面的元素会突然向上走 -->
    <div class="tab-wrapper-header" id="tab-list-lifo">
      <sticky scroll-box="vux_view_box_body" :check-sticky-support="false" :offset="46">
        <tab v-model="tabActive" prevent-default @on-before-index-change="switchTabItem">
          <tab-item >
            <!-- <router-link to="/list/scroll_list">木工</router-link> -->
            木工
          </tab-item>
          <tab-item >
            <!-- <router-link to="/list/zhuang_huang">瓦工</router-link> -->
            瓦工
          </tab-item>
          <tab-item >
            <!-- <router-link to="/list/scroll_list">电工</router-link> -->
            电工
          </tab-item>
      </tab>
      </sticky>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabActive: 0,
      onFetching: false,
      noMoreData: false,
      count: 1,
      dataScource: 5
    }
  },
  created () {
    // 首次请求写到这里
    console.log(this.$router)
  },
  activated () {
    console.log(111)
    // 每次进入页面都会执行（会忽略keep-alive的页面缓存）
  },
  methods: {
    onItemClick () {
    },
    switchTabItem (index) {
      if (index === 0) {
        this.$router.replace('/list/scroll_list')
      } else if (index === 1) {
        this.$router.replace('/list/zhuang_huang')
      } else if (index === 2) {
        this.$router.replace('/list/wa_gong')
      }
      this.tabActive = index
    }
  }
}
</script>
<style lang="less" scoped>
.tab-wrapper-header {
  height:44px;
  z-index:1000;
  position: relative;
}
  .vux-pop1-out-enter-active,
 .vux-pop1-out-leave-active,
 .vux-pop1-in-enter-active,
 .vux-pop1-in-leave-active {
   will-change: transform;
   transition: all 300ms;
   height: 100%;
   position: absolute;
   backface-visibility: hidden;
   perspective: 1000;
 }
 .vux-pop1-out-enter {
   opacity: 0;
   transform: translate3d(-100%, 0, 0);
 }
 .vux-pop1-out-leave-active {
   opacity: 0;
   transform: translate3d(100%, 0, 0);
}
 .vux-pop1-in-enter {
   opacity: 0;
   transform: translate3d(100%, 0, 0);
 }
 .vux-pop1-in-leave-active {
   opacity: 0;
   transform: translate3d(-100%, 0, 0);
 }
</style>
