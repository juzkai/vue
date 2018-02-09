<template>
  <group>
    <cell title="title" value="value" is-link></cell>
  </group>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  components: {
    Cell,
    Group
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
