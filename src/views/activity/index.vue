<template>
  <div>
    <div class="BoxModel Shadow3" v-if="ActivityList.length">
      <h3>{{ TitleName }}</h3>
      <div
        v-for="item in ActivityList"
        :key="item.id"
        @click="getDetails(item)"
      >
        <div>
          <van-image radius="10" class="imgs" :src="item.coverPic" />
        </div>
        <div class="content_box">
          <div class="row ju-s">
            <p>{{ item.activityName }}</p>
            <p>{{ item.typeName }}</p>
          </div>
          <p>活动时间：{{ item.startTime }} ~ {{ item.endTime }}</p>
          <p>报名人数：{{ item.people }}</p>
        </div>
        <van-divider />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ImagePreview } from "vant";
import { useRouter } from "vue-router";

import bus from "@/utils/bus";

import $request from "@/assets/api/api";

import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  getCurrentInstance,
} from "vue";

export default defineComponent({
  name: "",
  props: {
    TitleName: {
      type: String,
      default: "",
    },
    activityStatus: {
      type: Number,
    },
  },
  setup(Proxy) {
    // 实例化路由
    const router = useRouter();
    const data = reactive({
      ImagePreview: [
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
      ],
      ActivityList: [
        {
          id: 1,
          coverPic:
            "https://img2.baidu.com/it/u=1832895100,3695552050&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
        },
      ],
    });
    onBeforeMount(() => {
      // 2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      getList();
      // 3.组件挂载到页面之后执行-------onMounted
    });
    const getDetails = (item: any) => {
      router.push({
        path: "/activity/Details",
        query: {
          id: item.id,
        },
      });
    };

    const getList = () => {};
    return {
      ...toRefs(data),
      getDetails,
      getList,
    };
  },
});
</script>
<style scoped lang="less">
.imgs {
  width: 100%;
  height: 100px;
}
.content_box {
  p {
    margin: 10px 0 0 0;
  }
}
</style>
