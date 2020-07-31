<template>
  <div id="app">
    <div class="pillar" v-for="item in arr" :style="{height:getHeight(item)}" :key="item">{{item}}</div>
    <div>
      <button @click="asorte">anniu</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
      arr: [3, 4, 5, 1, 4],
      flag: false
    };
  },
  methods: {
    asorte() {
      var arr1 = this.arr;
      if (this.flag) {
        arr1.sort(function(a, b) {
          return b - a;
        });
      } else {
        arr1.sort(function(a, b) {
          return a - b;
        });
      }
      this.flag = !this.flag;
    },
    getHeight(num){
      return num*100+'px'
    }
    
  },
};
</script>

<style scoped>
#app {
  width: 500px;
  height: 500px;
  background: red;
  display: flex;
  flex-direction: row;
}

#app .pillar {
  width: 50px;
  bottom: 0;
  border: wheat solid 1px;
}
</style>