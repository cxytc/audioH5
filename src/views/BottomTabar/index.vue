<template>
  <div>
    <van-tabbar route v-model="active" active-color="pink">
      <van-tabbar-item v-for="item in List" :key="item.id" :to="item.path">{{
        item.name
      }}</van-tabbar-item>
    </van-tabbar>
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
import { useRouter } from "vue-router";
export default defineComponent({
  name: "",
  setup() {
    // 实例化路由
    const router = useRouter();
    const data = reactive({
      active: "0",
      List: [
        { id: 1, name: "首页", path: "/home" },
        { id: 2, name: "打卡", path: "/Clock" },
        { id: 3, name: "消息", path: "/news" },
        { id: 4, name: "我的", path: "/my" },
      ],
    });
    onBeforeMount(() => {
      // 2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      // 3.组件挂载到页面之后执行-------onMounted
    });
    const getCut = (e: string) => {
      console.log(e);
      // router.push({
      //   path: "/",
      // });
    };
    return {
      ...toRefs(data),
      getCut,
    };
  },
});
</script>
<style scoped lang="less">
::v-deep .van-tabbar {
  // background: linear-gradient(
  //   125deg,
  //   #e4ffcd,
  //   #6dd5fa,
  //   #2980b9,
  //   hsl(92, 100%, 90%)
  // );
}
::v-deep .van-tabbar-item {
  // background-color: linear-gradient(
  //   125deg,
  //   #e4ffcd,
  //   #6dd5fa,
  //   #2980b9,
  //   hsl(92, 100%, 90%)
  // );
}
</style>
