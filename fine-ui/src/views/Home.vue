<template>
  <div class="home">
    <!-- <div class="c">
      text
      <span class="a">1111</span>
    </div>-->

    <!-- button -->
    <!-- <div class="container">
      <he-button icon="search" type="primary">primary</he-button>
      <he-button plain icon="search" type="primary">plain</he-button>
      <he-button type="primary" inline>inline</he-button>
      <he-button type="primary" icon="search" inline>inline</he-button>
      <he-button type="primary" inline>inline block</he-button>
      <he-button icon="search" type="secondary">secondary</he-button>
      <he-button icon="search" type="secondary" plain>secondary</he-button>
      <he-button type="success">success</he-button>
      <he-button type="info">info</he-button>
      <he-button type="warning">warning</he-button>
      <he-button type="danger">danger</he-button>
      <he-button type="blue-grey">blue-grey</he-button>
      <he-button type="cyan">cyan</he-button>
      <he-button type="teal">teal</he-button>
      <he-button type="orange">orange</he-button>
      <he-button type="deep-orange">deep-orange</he-button>
      <he-button type="purple">purple</he-button>
      <he-button type="indigo">indigo</he-button>
      <he-button type="pink">pink</he-button>
    </div>-->

    <he-card title="卡片" icon="password" style="width:500px">
      <div class="card-content"></div>
    </he-card>

    <!-- dialog -->
    <!-- <he-button inline :type="theme" @click="changeTheme">changeTheme</he-button>
    <he-button inline :type="theme" @click="showDialog">显示dialog</he-button>-->
    <!-- <div>
      <he-dialog :type="theme" title="提示" width="30%" top="150px" :visible.sync="visible">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <template v-slot:footer>
          <div class="btn-box">
            <he-button inline type="secondary" class="mr-1" @click="hideDialog">取消</he-button>
            <he-button inline :type="theme">确定</he-button>
          </div>
        </template>
      </he-dialog>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      visible: false,
      theme: "primary"
    };
  },
  components: {},
  methods: {
    buttonClick() {
      console.log("primary click !");
    },
    showDialog() {
      this.visible = true;
    },
    hideDialog() {
      this.visible = false;
    },
    changeTheme() {
      if (this.theme === "primary") {
        this.theme = "info";
      } else {
        this.theme = "primary";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex; // 3.
  align-items: center;
  justify-content: center;
  background: #fff;

  position: relative; // 1. 定位，四个方向清零，margin auto
}
.container {
  // background: #cccccc;

  height: 500px;
  width: 500px;

  // position: absolute;              //  1.
  // left: 0;
  // right: 0;
  // top: 0;
  // bottom: 0;
  // margin: auto;

  // position: absolute;              // 2.
  // left: 50%;
  // top: 50%;
  // margin-left: -250px;
  // margin-top: -250px;

  position: absolute; // 3.
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.btn-box {
  font-size: 14px;
}
.c {
  height: 40px;
  width: 100px;
  background: #ffffff;
  line-height: 40px;
}
.a {
  vertical-align: text-bottom;
}
.card-content {
  width: 300px;
  height: 200px;
  background: darkcyan;
}
</style>