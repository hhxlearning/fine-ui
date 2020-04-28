<template>
  <div class="fine-dialog_wrapper">
    <div class="fine-dialog" :style="{width:width,marginTop:top}">
      <div class="fine-dialog_header">
        <slot name="title">
          <span class="fine-dialog_title">{{title}}</span>
        </slot>
        <button class="fine-dialog_headerbtn">
          <i class="fine-icon-close"></i>
        </button>
      </div>
      <div class="fine-dialog_body">
        <span>这是一段信息</span>
      </div>
      <div class="fine-dialog_footer">
        <fine-button>取消</fine-button>
        <fine-button type="primary">确定</fine-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fineDialog",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    width: {
      type: String,
      default: "40%"
    },
    top: {
      type: String,
      default: "100px"
    }
  }
};
</script>

<style lang="scss" scoped>
.fine-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .fine-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .fine-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .fine-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .fine-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .fine-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>