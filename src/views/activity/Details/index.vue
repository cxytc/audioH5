<template>
  <div>
    <div class="BoxModel Shadow3">
      <div>
        <van-image
          radius="10"
          class="imgs"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0153395a5b398ea80120121f435f22.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666936188&t=2ea0767e2a8a07db95e30c2cfaa06f28"
        />
      </div>
      <p class="titles">白云湖街道xxx垃圾分类宣传备份</p>
      <div class="row al-c titles">
        <p>活动时间：</p>
        <p>2022-12-01~2022</p>
      </div>
      <div class="row al-c titles">
        <p>报名人数：</p>
        <nut-cell>
          <nut-range
            max="1600"
            disabled
            v-model="value"
            inactive-color="rgba(163,184,255,1)"
            button-color="rgba(52,96,250,1)"
            active-color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%"
            @change="onChange"
          >
          </nut-range>
        </nut-cell>
      </div>

      <nut-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
        >活动介绍</nut-divider
      >
      <p class="retract">
        活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍
        活动介绍活动介绍活动介绍活动介绍活动介绍
      </p>
      <van-image
        radius="10"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0153395a5b398ea80120121f435f22.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666936188&t=2ea0767e2a8a07db95e30c2cfaa06f28"
      />
      <p class="retract">
        活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍
        活动介绍活动介绍活动介绍活动介绍活动介绍
      </p>

      <div class="row ju-c" style="margin-top: 30px">
        <nut-button type="info">&nbsp; 提 交 &nbsp;</nut-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import bus from "@/utils/bus";
import { useRouter, useRoute } from "vue-router";
import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
} from "vue";
export default defineComponent({
  name: "activityDetails",
  setup() {
    const route = useRoute();
    const data = reactive({
      value: 1200,
    });
    onBeforeMount(() => {
      //2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      console.log(route.params);
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
  height: 100px;
}
::v-deep .nut-range-button {
  display: none;
}
::v-deep .nut-cell {
  width: 70%;
  box-shadow: none;
}
</style>
