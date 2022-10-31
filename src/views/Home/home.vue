<template>
  <div>
    <div class="row ju-c">当前界面的宽度为： {{ PageWidth }}</div>
    <!-- 轮播图 -->
    <Swipe />
    <!-- 板块专区 -->
    <Plate />
    <!-- 首页活动 -->
    <Activity :TitleName="'进行中的活动'" :activityStatus="0" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watch,
} from "vue";
// 引入轮播图
import Swipe from "./components/Swipe/index.vue";
// 引入模块区域
import Plate from "./components/plate/index.vue";
// 引入活动界面
import Activity from "@/views/activity/index.vue";

// 引入vuex
import store from "@/store/index";

export default defineComponent({
  components: { Swipe, Plate, Activity },
  name: "",
  setup() {
    const data = reactive({
      PageWidth: store.state.PageWidth,
    });
    onBeforeMount(() => {
      // 2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      // 3.组件挂载到页面之后执行-------onMounted
    });

    watch(
      () => store.state.PageWidth,
      (newValue, oldValue) => {
        data.PageWidth = newValue;
      },
      { deep: true }
    );

    return {
      ...toRefs(data),
    };
  },
});
</script>
<style scoped lang="less">
:root {
  --van-button-primary-background-color: #ff6c37;
  /* --van-nav-bar-text-color: #fff; */
  /* --van-nav-bar-icon-color: #fff; */
}
</style>
