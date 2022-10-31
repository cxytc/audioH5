<template>
  <div>
    <!-- 板块区域 -->
    <div class="BoxModel Shadow analysisTask">
      <div class="chartListUl">
        <div v-for="item in list" :key="item.id" @click="getGo(item.path)">
          <div class="yuan"></div>
          <div style="text-align: center">
            <p class="title_name">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
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
      list: [
        {
          id: 1,
          img: "",
          name: "扫码",
          path: "",
        },
        {
          id: 2,
          img: "",
          name: "线索上报",
          path: "/RandomlySnapPicture",
        },
        {
          id: 3,
          img: "",
          name: "活动",
          path: "/activity",
        },
        {
          id: 4,
          img: "",
          name: "巡检/执法",
          path: "/polling",
        },
        {
          id: 5,
          img: "",
          name: "表彰申请",
          path: "/commend",
        },
        {
          id: 6,
          img: "",
          name: "建言献策",
          path: "/OfferAdviceAndSuggestions",
        },
        {
          id: 7,
          img: "",
          name: "随手拍审核",
          path: "/PostHocReview",
        },
      ],
    });
    onBeforeMount(() => {
      //2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      //3.组件挂载到页面之后执行-------onMounted
    });

    const getGo = (path: string) => {
      router.push({
        path,
      });
    };
    return {
      ...toRefs(data),
      getGo,
    };
  },
});
</script>
<style scoped lang="less">
.analysisTask {
  .chartListUl {
    display: flex;
    justify-content: space-between; // space-between：两端对齐，子元素间隔相等 space-around：子元素两侧的间隔相等。
    flex-wrap: wrap; //  wrap（向下换）
    .yuan {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 0 15px;
      background-color: skyblue;
    }
    .title_name {
      margin: 10px 0;
    }
  }
  .chartListUl:after {
    // 使用伪类元素占据单位，不影响页面
    content: "";
    height: 0;
    width: 50px;
    margin: 0 15px;
  }
}
</style>
