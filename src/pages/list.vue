<template>
  <div>
      <!--外面包一层div 避免当定位为sticky时下面的元素会突然向上走 -->
    <div style="height:44px;" id="tab-list-lifo">
     <sticky scroll-box="vux_view_box_body" :check-sticky-support="false" :offset="46">
      <tab v-model="tabActive">
        <tab-item selected @click.native="$router.replace('/list/zhuang_huang')">木工</tab-item>
        <tab-item @click.native="$router.replace('/list/wa_gong')">瓦工</tab-item>
        <tab-item @on-item-click="onItemClick">电工</tab-item>
     </tab>
    </sticky>
    </div>
    <transition
        v-if="!$route.meta.keepAlive"
        @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
        :name="viewTransition" :css="!!direction">
          <!-- 注意使用了keep-alive缓存全部页面 对于首次请求写到 created里面 对于每次进入页面都要请求的 写到 activated 里面 -->
          <router-view></router-view>
      </transition>
  </div>
</template>
<script>
import { mapState } from 'vuex'
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
    // 每次进入页面都会执行（会忽略keep-alive的页面缓存）
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    viewTransition () {
      if (!this.direction) return ''
      return 'vux-pop1-' + (this.direction === 'forward' ? 'in' : 'out')
    }
  },
  methods: {
    onItemClick () {
    },
    switchTabItem (index) {
      this.tabActive = index
      this.$router.push('/list/zhuang_huang', '123')
    },
    onScrollBottom () {
    }
  }
}
</script>
<style lang="less" scoped>
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
