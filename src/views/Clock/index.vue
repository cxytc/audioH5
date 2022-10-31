<template>
  <div class="box">
    <!-- 正在参与 -->
    <h3 style="color: #fff">正在参与</h3>
    <div class="BoxModel Shadow" v-for="item in list" :key="item.id">
      <div class="">
        <div class="row ju-c">
          <nut-animate type="breath" :loop="true">
            <div class="container" :style="{ background: item.bgc }">
              <div>
                <p>{{ item.time1 }}</p>
                <p>{{ item.time2 }}</p>
              </div>
            </div>
          </nut-animate>
        </div>

        <!-- 内容区域 -->
        <div class="content_box">
          <div class="row ju-c">
            <p>{{ item.typename }}</p>
          </div>
          <div class="row ju-c">
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 活动 -->
    <Activity :TitleName="'以前的活动'" />
  </div>
</template>

<script lang="ts">
import * as Three from "three";
// 引入公共的活动界面
import Activity from "@/views/activity/index.vue";
import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
} from "vue";
export default defineComponent({
  components: { Activity },
  name: "",
  setup() {
    const data = reactive({
      list: [
        {
          id: 1,
          time1: "1小时20分",
          time2: "已服务时长",
          typename: "快速签退",
          content: "XX村泥石流抢险救灾活动1",
          bgc: "skyblue",
        },
        {
          id: 2,
          time1: "未签到",
          time2: "",
          typename: "快速签退",
          content: "XX村泥石流抢险救灾活动2",
          bgc: "#e67f65",
        },
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
.container {
  color: #fff;
  width: 100px;
  text-align: center;
  height: 100px;
  border-radius: 50%;
  display: flex; /*父元素设置flex属性*/
  justify-content: center; /*水平主轴居中*/
  align-items: center; /*垂直交叉轴居中*/
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.content_box {
  margin: 10px 0;
}
p {
  margin-top: 5px;
}
</style>
