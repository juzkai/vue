import APP_TITLE from './config'
export default {
  alertMsg: (vux, msg) => {
    this.$vux.alert.show({
      title: APP_TITLE,
      content: 'Do you agree?',
      onShow () {
        console.log('Plugin: I\'m showing')
      },
      onHide () {
        console.log('Plugin: I\'m hiding')
      }
    })
  }
}
