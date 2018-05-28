<template>
  <div>
    <divider>default</divider>
    <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="goItem()">to form view</x-button>
    <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="backOne()">回退上一页</x-button>
    <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="backTwo()">回退两页</x-button>
  </div>
</template>
<script>
import { XButton, Divider } from 'vux'
import Events from '../tools/event.js'
export default {
  components: {
    XButton,
    Divider
  },
  created () {
    console.log(this.$route.params.id)
    console.log(this.$route.params.name)
  },
  methods: {
    goItem () {
      this.$router.push('/form')
    },
    backOne () {
      // this.$router.go(-1)
      Events.$emit('listInfo', '111')
      this.$router.back()
    },
    backTwo () {
      this.$router.go(-2)
    }
  }
}
</script>
