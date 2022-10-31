<template>
  <div>
    <div class="player" v-if="url">
      <video :src="url" controls ref="videoDom" class="videoDom"></video>
      <nut-animate @click="getClose" class="on" type="twinkle" :loop="true">
        <van-icon name="cross" />
      </nut-animate>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
} from "vue";
export default defineComponent({
  name: "",
  setup(props, context) {
    const data = reactive({
      url: "",
    });
    onBeforeMount(() => {
      //2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      //3.组件挂载到页面之后执行-------onMounted
    });
    const getVideo = (url) => {
      data.url = url;
      console.log(data.url);
    };
    const getClose = () => {
      console.log("?????????");
      data.url = "";
      context.emit("getClose");
    };
    return {
      ...toRefs(data),
      getVideo,
      getClose,
    };
  },
});
</script>
<style scoped lang="less">
.videoDom {
  width: 100%;
  height: 200px;
}
.player {
  position: relative;
  .on {
    position: absolute;
    right: 5px;
    top: 15px;
    z-index: 9999999999999;
    width: 20px;
    height: 20px;
    opacity: 0.5;
    background-color: #fff;
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
  }
}
</style>
