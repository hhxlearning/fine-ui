<template>
  <div class="home">
    <!-- button -->
    <div>
      <fine-button icon="search" type="primary" @click="buttonClick" disabled>主要</fine-button>
      <fine-button icon="operation" type="primary" plain></fine-button>
      <fine-button type="primary" round>primary</fine-button>
      <fine-button type="primary" circle>primary</fine-button>
      <fine-button type="info">info</fine-button>
      <fine-button type="warning">warning</fine-button>
      <fine-button type="success">success</fine-button>
      <fine-button type="danger">danger</fine-button>
      <fine-button type="1">danger</fine-button>
    </div>
    <!-- dialog -->
    <fine-button @click="showDialog">显示dialog</fine-button>
    <div>
      <fine-dialog title="温馨提示"  width="40%" top="100px" :visible.sync="visible">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <template v-slot:footer>
          <fine-button @click="hideDialog">取消</fine-button>
          <fine-button type="primary">确定</fine-button>
        </template>
      </fine-dialog>
      <!-- <fine-dialog></fine-dialog> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      visible: false
    }
  },
  components: {},
  methods: {
    buttonClick() {
      console.log("primary click !");
    },
    showDialog() {
      this.visible = true
    },
    hideDialog() {
      this.visible = false
    }
  }
};
</script>
