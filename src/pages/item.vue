<template>
  <div>
    <divider>default</divider>
    <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="alert()">alert test</x-button>
    <x-button :gradients="['#A644FF', '#FC5BC4']" @click.native="toastMsg()">toast test</x-button>
    <x-button :gradients="['#FF2719', '#FF61AD']" @click.native="toastIcon('success')">toast with success icon</x-button>
    <x-button :gradients="['#6F1BFE', '#9479DF']" @click.native="toastIcon('cancel')">toast with cancel icon</x-button>
    <x-button :gradients="['#FF5E3A', '#FF9500']" @click.native="toastIcon('warn')">toast with warn icon</x-button>
    <x-button :gradients="['#FF5E3A', '#FF9500']" @click.native="promptMsg('warn')">prompt</x-button>
    <x-button type="warn" disabled>reset</x-button>
    <x-button disabled>theme default</x-button>
    <x-button @click.native="about()">go to about page</x-button>
    <x-button @click.native="getData()">请求数据</x-button>
    <x-button @click.native="wxInit()">微信</x-button>
    <div class="testDiv">123</div>
  </div>
</template>
<script>
import { XButton, Divider } from 'vux'
import {APP_API} from '../tools/config'
export default {
  components: {
    XButton,
    Divider
  },
  created () {
    // 首次请求写到这里
  },
  activated () {
    // 每次都要请求的写到这里
    console.log(this.$route.params.id)
    console.log(this.$route.params.name)
  },
  methods: {
    about () {
      this.dialog.confirmMsg('是否跳转?', () => this.$router.push('/about/12'))
      // this.$router.push('/about/12')
    },
    alert () {
      this.dialog.alertMsg('alert text', () => console.log('alert with text has hidden'))
    },
    toastMsg () {
      this.dialog.toastMsg('toast text', () => console.log('toast with text has hidden'))
    },
    toastIcon (type) {
      this.dialog.toastIcon(type, () => console.log('toast with ' + type + ' icon has hidden'))
    },
    getData () {
      this.http.post(APP_API.getInfo, {id: 1})
        .then(response => {
          console.log(response)
        })
    },
    promptMsg () {
      this.dialog.promptMsg('请输入手机号码', (value) => {
        if (!this.validator.isMobileNo(value)) {
          this.dialog.alertMsg('请输入正确的手机号')
        }
      })
      // this.dialog.promptMsg({value: 123, msg: 'placeholder'}, (value) => console.log(value))
    },
    wxInit () {
      this.$wechat.chooseWXPay({
        timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        nonceStr: '', // 支付签名随机串，不长于 32 位
        package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
        signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        paySign: '', // 支付签名
        success: function (res) {
        // 支付成功后的回调函数
        }
      })
    },
    toHome () {
      console.log(111)
    }
  }
}
</script>
