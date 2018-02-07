
const checkor = {
  // 手机号校验
  isMobileNo: mobileNo => {
    let regExp = new RegExp(/^(((13[0-9]{1})|(15[0-35-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/)
    return regExp.test(mobileNo)
  },
  // 正整数校验
  isInteger: no => {
    let regExp = new RegExp(/^\+?[1-9][0-9]*$/)
    return regExp.test(no)
  },
  // 邮箱校验
  isEmail: email => {
    let regExp = new RegExp(/^[0-9A-Za-z](\.-_0-9A-Za-z)*@[0-9A-Za-z]+(\.[0-9A-Za-z]+)+$/)
    return regExp.test(email)
  }
}
export default checkor
