
const commonTool = {
  // 从1970年开始描述时间戳
  timest: () => {
    let tmp = Date.parse(new Date()).toString()
    tmp = tmp.substr(0, 10)
    return tmp
  }
}
export default commonTool
