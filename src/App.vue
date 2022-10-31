<template>
  <router-view />
</template>
<script>
import "@/assets/css/public.css";
import "@/assets/css/vant.css";
// 引入阿里图标
import "@/assets/font/iconfont.css";

import { defineComponent, onBeforeMount, onMounted } from "vue";
// 引入vuex
import store from "@/store";

export default defineComponent({
  setup(props) {
    onBeforeMount(() => {
      let widths = document.documentElement.clientWidth;
      store.dispatch("setPageWidth", widths);
      window.onresize = () => {
        widths = document.documentElement.clientWidth;
        store.dispatch("setPageWidth", widths);
      };
    });
  },
});
</script>

<style lang="less">
/* 添加这段样式后，Primary Button 会变成红色 */
body {
  margin: 0;
  padding: 0;
  font-family: "montserrat";
  background-color: rgba(255, 255, 255, 0.774);

  // background-image: linear-gradient(
  //   125deg,
  //   #e4ffcd,
  //   #6dd5fa,
  //   #2980b9,
  //   hsl(92, 100%, 90%),
  //   pink
  // );
  // background-size: 800%;
  // animation: bganimation 15s infinite;
  // animation: myBreath 3s linear infinite;
}

@keyframes bganimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
