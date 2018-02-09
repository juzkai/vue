<template>
  <div>
    <x-header :left-options="{backText: ''}">关于</x-header>
    <divider>default</divider>
    <x-button :gradients="['#1D62F0', '#19D5FD']">iOS Gradients</x-button>
    <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="backOne()">回退上一页</x-button>
    <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="backTwo()">回退两页</x-button>
  </div>
</template>
<script>
import { XButton, Divider, XHeader } from 'vux'
export default {
  components: {
    XButton,
    Divider,
    XHeader
  },
  created () {
    console.log(this.$route.params.id)
    console.log(this.$route.params.name)
  },
  methods: {
    backOne () {
      // this.$router.go(-1)
      this.$router.back()
    },
    backTwo () {
      this.$router.go(-2)
    }
  }
}
</script>
