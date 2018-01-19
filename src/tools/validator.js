
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
  }
}
export default checkor
