<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <div class="BoxModel Shadow">
        <div>
          <p>{{ item.name }}</p>
          <p>{{ item.time }}</p>
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
export default defineComponent({
  name: "",
  setup() {
    const data = reactive({
      list: [
        {
          id: 1,
          name: "恭喜您升级为黄金志愿者了！！",
          time: "2022-12-12 02:12",
        },
        {
          id: 2,
          name: "您参加的活动即将开始，请按时参加",
          time: "2022-12-12 02:12",
        },
        {
          id: 3,
          name: "私自收取他人财物，积分-2分",
          time: "2022-12-12 02:12",
        },
        {
          id: 4,
          name: "您提交的随手拍审核通过了，积分+2",
          time: "2022-12-12 02:12",
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
p {
  padding: 2px 0;
  font-family: "Georgia", Tahoma, Sans-Serif;
  font-size: 13px;
  line-height: 18px;
  color: #888;
}
</style>
