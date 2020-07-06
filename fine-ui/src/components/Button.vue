<template>
  
    <button
      class="he-button"
      :class="[
      `he-button-${type}`, 
      // `fine-button-${size}`, 
      {'is-plain': plain}, 
      {'is-inline': inline}, 
      // {'is-round': round}, 
      // {'is-circle': circle}, 
      // {'is-disabled': disabled}
      ]"
      @click="handleClick"
    >
      <div class="button-inner-box">
        <i v-if="icon" :class="`he-icon-${icon}`"></i>
        <!-- 如果没传入文本插槽，则不显示span内容 -->
        <span class="button-text" v-if="$slots.default">
          <slot></slot>
        </span>
      </div>
    </button>
  
</template>

<script>
export default {
  name: "HeButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    inline: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    // round: {
    //   type: Boolean,
    //   default: false
    // },
    // circle: {
    //   type: Boolean,
    //   default: false
    // },
    // disabled: {
    //   type: Boolean,
    //   default: false
    // },
    icon: {
      type: String,
      default: ""
    }
    // size: {
    //   type: String,
    //   default: "default"
    // }
  },
  methods: {
    handleClick(e) {
      // 调用父组件中的 click 事件
      this.$emit("click", e);
    }
  },
  created() {
    console.log(this.type);
  }
};
</script>

<style lang="scss">

.he-button {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;

  line-height: 2.143em;

  color: #ffffff;
  background-color: $theme;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);

  -webkit-appearance: none;
  box-sizing: border-box;
  outline: none;
  padding: 0 1em;
  // margin-bottom: 10px;
  transition: 0.1s;
  font-weight: 500;
  border: none;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  // padding: 12px 20px;
  font-size: 1em;
  width: 100%;
  border-radius: 2px;
  .button-inner-box {
    display: flex;
    align-items: center;
    justify-content: center;
    .button-text {
      padding: 0;
      line-height: 2.143em;
      display: inline-block;
    }
  }
}

// type

.he-button-primary {
  color: #fff;
  background-color: #2f4050;
  border-color: #2f4050;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    background: #425a70;
    background-color: #425a70;
    color: #fff;
  }
}
.he-button-secondary {
  color: #212121;
  background-color: #ffffff;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    background: #e8e8e8;
    background-color: #e8e8e8;
    color: #000000;
  }
}
.he-button-success {
  color: #fff;
  background-color: #4caf50;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    background-color: #2e7d32;
  }
}
.he-button-info {
  color: #fff;
  background-color: #03a9f4;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    background-color: #0277bd;
  }
}
.he-button-warning {
  color: #fff;
  background-color: #ffc107;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    background-color: #ff8f00;
    color: #fff;
  }
}
.he-button-danger {
  color: #fff;
  background-color: #f44336;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    background-color: #c62828;
  }
}
.he-button-blue-grey {
  color: #fff;
  background-color: #607d8b;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    background-color: #37474f;
  }
}
.he-button-cyan {
  color: #fff;
  background-color: #00bcd4;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    background-color: #00838f;
  }
}
.he-button-teal {
  color: #fff;
  background-color: #009688;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    background-color: #00695c;
  }
}
.he-button-orange {
  color: #fff;
  background-color: #ff9800;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    background-color: #ef6c00;
  }
}
.he-button-deep-orange {
  color: #fff;
  background-color: #ff5722;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    background-color: #d84315;
  }
}
.he-button-purple {
  color: #fff;
  background-color: #673ab7;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    background-color: #4527a0;
  }
}
.he-button-indigo {
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    background-color: #283593;
  }
}
.he-button-pink {
  color: #fff;
  background-color: #e91e63;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.26), 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    background-color: #ad1457;
  }
}




// 行内
.is-inline {
  width: auto;
  display: inline-block;
}
// 朴素按钮样式
.he-button.is-plain {
  box-shadow: none;
  
}

// size
// .fine-button-medium {
//   padding: 8px 16px;
// }
// .fine-button-small {
//   padding: 6px 14px;
// }
// .fine-button-mini {
//   padding: 5px 12px;
// }
// 圆角按钮样式
// .he-button.is-round {
//   // border-radius: 2px;
//   // padding: 12px 23px;
// }
// 椭圆样式
// .fine-button.is-circle {
//   border-radius: 50%;
//   // padding: 12px;
// }
// 禁用
// .fine-button.is-disabled {
//   cursor: no-drop;
// }

// .he-button i[class*="he-icon-"] {
// }
.he-button [class*="he-icon-"] + span {
  margin-left: 5px;
}
</style>