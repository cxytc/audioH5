<template>
  <div class="fatherbox">
    <div class="Nav_box" v-if="NavShow">
      <van-nav-bar
        @click-left="onClickLeft"
        :title="title"
        :left-text="IsButton == true ? '返回' : ''"
        :left-arrow="IsButton"
      >
        <template #right>
          <!-- <van-icon name="search" size="18" /> -->
        </template>
      </van-nav-bar>
    </div>
    <div
      class="box_s"
      :style="{
        padding: title != '我的' ? '49px 15px 60px 15px' : '40px 0 10px 0',
      }"
    >
      <router-view> </router-view>
    </div>
    <Tabar v-if="!IsButton" />
  </div>
</template>

<script lang="ts">
// 引入底部导航栏
import Tabar from "@/views/BottomTabar/index.vue";
import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watch,
} from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: { Tabar },
  name: "",
  setup() {
    const data = reactive({
      title: "",
      NavShow: true,
      IsButton: true,
    });
    onBeforeMount(() => {
      //2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      //3.组件挂载到页面之后执行-------onMounted
    });
    let router = useRouter();
    watch(
      () => router,
      (newValue, oldValue) => {
        //   标题名称
        let title = <string>newValue.currentRoute.value.meta.title;
        // 返回按钮显示隐藏
        let IsButton = <boolean>newValue.currentRoute.value.meta.IsButton;

        data.IsButton = IsButton;
        // 判断是否有路由名称  有的话展示没有隐藏
        title ? (data.NavShow = true) : (data.NavShow = false);
        //   将路由的名称取到并赋值给title
        data.title = title;

        // 登录页
        if (newValue.currentRoute.value.name == "login") {
          data.NavShow = false;
          data.IsButton = true;
        }

        // 判断路由改变名称
        if (newValue.currentRoute.value.name == "VolunteerPoints") {
          <any>newValue.currentRoute.value.params.id == 1
            ? (data.title = "志愿者积分查询")
            : (data.title = "股民积分查询");
        }

        // 判断是否有子路由
        console.log(title, newValue.currentRoute.value);
      },
      { immediate: true, deep: true }
    );

    // 返回事件
    const onClickLeft = () => {
      router.back();
    };
    return {
      ...toRefs(data),
      onClickLeft,
    };
  },
});
</script>
<style scoped>
.Nav_box {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
}
.fatherbox {
  min-height: 100vh;
}
.box_s {
  height: 100%;
}
::v-deep .van-nav-bar__content {
  background-color: skyblue;
  /* background: linear-gradient(
    125deg,
    #e4ffcd,
    #6dd5fa,
    #2980b9,
    hsl(92, 100%, 90%)
  ); */
}
</style>
