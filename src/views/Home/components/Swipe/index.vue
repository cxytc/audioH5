<template>
  <div>
    <van-swipe height="200" :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img class="imgs" :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
} from "vue";
export default defineComponent({
  name: "",
  setup() {
    const data = reactive({
      images: [
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
      ],
    });
    onBeforeMount(() => {
      //2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      //3.组件挂载到页面之后执行-------onMounted
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>
<style scoped lang="less">
.imgs {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
::v-deep .van-swipe {
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}
</style>
