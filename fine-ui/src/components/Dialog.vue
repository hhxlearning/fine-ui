<template>
  <transition name="dialog-fade">
    <div class="fine-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div class="fine-dialog" :style="{width:width,marginTop:top}">
        <div class="fine-dialog_header" :class="`dialog-type-${type}`">
          <slot name="title">
            <span class="fine-dialog_title">{{title}}</span>
          </slot>
          <button class="fine-dialog_headerbtn" @click="handleClose">
            <i class="he-icon-close"></i>
          </button>
        </div>
        <div class="fine-dialog_body">
          <slot></slot>
        </div>
        <div class="fine-dialog_footer">
          <slot name="footer" v-if="$slots.footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "HeDialog",
  data() {
    return {
      show: false
    };
  },
  props: {
    title: {
      type: String,
      default: "提示"
    },
    type: {
      type: String,
      default: "primary"
    },
    width: {
      type: String,
      default: "40%"
    },
    top: {
      type: String,
      default: "100px"
    },
    footer: {
      type: Object
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
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
      padding: 10px;
      // background: $theme;
      .fine-dialog_title {
        line-height: 24px;
        font-size: 14px;
        // color: #303133;
        color: #ffffff;
      }
      .fine-dialog_headerbtn {
        position: absolute;
        top: 14px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        i {
          color: #fff;
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
.dialog-type-primary {
  background: $primaryColor;
}
.dialog-type-info {
  background: $infoColor;
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.2s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>