<template>
  <div>
    <divider>default</divider>
    <x-button :gradients="['#1D62F0', '#19D5FD']">iOS Gradients</x-button>
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
