<template>
  <div class="card__wrapper" :class="{
    'card__wrapper-border': border
    }">
    <div class="card-header__wrapper">
      <slot name="header">
        <i :class="`he-icon-${icon}`" v-if="icon"></i>
        <span class="fine-dialog_title">{{title}}</span>
      </slot>
    </div>
    <div class="card-body__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeCard",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    icon: {
      type: String,
      default: ""
    },
    border: {
      type: Boolean,
      default: true
    }
    // type: {
    //   type: String,
    //   default: "primary"
    // },
    // width: {
    //   type: String,
    //   default: "40%"
    // },
    // top: {
    //   type: String,
    //   default: "100px"
    // },
    // footer: {
    //   type: Object
    // },
    // visible: {
    //   type: Boolean,
    //   default: false
    // }
  }
};
</script>

<style lang="scss">
.card__wrapper {
  display: block;
  min-width: 200px;
  background: #ffffff;

  &-border {
    border: 1px solid #dcdee2;
  }
  border-color: #e8eaec;
  border-radius: 4px;
  &:hover {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    border-color: #eee;
  }
  .card-header__wrapper {
    border-bottom: 1px solid #e8eaec;
    padding: 14px 16px;
    font-size: 1rem;

    display: flex;
    justify-content: start;
    align-items: center;

    .fine-dialog_title {
      line-height: 1em;
      color: #17233d;
    }
    i {
      font-size: 1.4rem;
      margin-right: 10px;
    }
  }
  .card-body__wrapper {
    width: 100%;
    padding: 16px;
  }
}
</style>