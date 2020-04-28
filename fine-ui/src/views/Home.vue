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
    <div>
      <fine-dialog title="温馨提示" width="40%" top="100px">
        <template v-slot:title>
          <h3 style="color:red">我是标题</h3>
        </template>
      </fine-dialog>
      <!-- <fine-dialog></fine-dialog> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    buttonClick() {
      console.log("primary click !");
    }
  }
};
</script>
