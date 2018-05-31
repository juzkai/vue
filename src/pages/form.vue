<template>
  <div>
    <divider>表单校验</divider>
    <group title="表单一" ref="form1">
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name" v-model="userName"></x-input>
      <x-input title="字母" name="code" placeholder="请输入英文字母"  v-model="code" v-touppercase="code"></x-input>
      <!-- <input v-model="userName" v-touppercase="userName"> -->
      <!-- <input v-model="userName" v-touppercase="userName"> -->
      <x-input ref="input01" name="mobile" title="手机号码" keyboard="number" v-model="maskValue1" :max="13" is-type="china-mobile" placeholder="请输入手机号码" required></x-input>
      <x-input title="手机号码" mask="999 9999 9999" v-model="maskValue2" :max="13" is-type="china-mobile" placeholder="请输入手机号码" required></x-input>
      <divider>{{userName | toUpperCase}}</divider>
      <!-- <cell title="value" :value="maskValue"></cell> -->
    </group>
    <x-button @click.native="postDate()">提交数据</x-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      maskValue1: '',
      maskValue2: '',
      userName: '',
      code: ''
    }
  },
  created () {
  },
  methods: {
    postDate () {
      console.log(this.$refs.form1)
      this.dialog.alertMsg({maskValue1: this.maskValue1, maskValue2: this.maskValue2, userName: this.userName})
    }
  }
}
</script>
