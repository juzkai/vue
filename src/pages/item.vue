<template>
  <div>
    <divider>default</divider>
    <x-button :gradients="['#1D62F0', '#19D5FD']">iOS Gradients</x-button>
    <x-button :gradients="['#A644FF', '#FC5BC4']">iOS Gradients</x-button>
    <x-button :gradients="['#FF2719', '#FF61AD']">iOS Gradients</x-button>
    <x-button :gradients="['#6F1BFE', '#9479DF']">iOS Gradients</x-button>
    <x-button :gradients="['#FF5E3A', '#FF9500']">iOS Gradients</x-button>
    <x-button type="warn">reset</x-button>
    <x-button>theme default</x-button>
  </div>
</template>
<script>
import { XButton, Divider } from 'vux'
export default {
  components: {
    XButton,
    Divider
  },
  created () {
    console.log(this.$route.params.id)
    console.log(this.$route.params.name)
  }
}
</script>
