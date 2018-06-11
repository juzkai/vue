<template>
  <div class="list-wrap">
    <div class="list-left">
      <div class="list-left-icon">
      </div>
    </div>
    <div class="list-right">
      <div>
        <span>
          admin
        </span>
        <button class="list-info-icon zhi-ding">
          置顶
        </button>
        <button class="list-info-icon hong-bao">
          红包
        </button>
      </div>
      <flexbox class="list-info">
        <flexbox-item :span="3">
          岗位
        </flexbox-item>
        <flexbox-item>
          其他
        </flexbox-item>
      </flexbox>
      <flexbox class="list-info">
        <flexbox-item :span="3">
          行业年限
        </flexbox-item>
        <flexbox-item>
          3年
        </flexbox-item>
      </flexbox>
      <flexbox class="list-info">
        <flexbox-item :span="3">
          手机号
        </flexbox-item>
        <flexbox-item>
          18262283481
        </flexbox-item>
      </flexbox>
      <flexbox class="list-info" style="align-items:flex-start;">
        <flexbox-item :span="3">
          工作描述
        </flexbox-item>
        <flexbox-item>
          氨基酸的房间爱哦儿氨基酸等开了房间哦阿斯加德佛个今儿我if假按揭考虑到积分
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
