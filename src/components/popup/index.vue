<template>
  <div>
    <van-popup
      v-model:show="show"
      round
      position="bottom"
      :style="{ height: '40%' }"
    >
      <van-picker
        title="标题"
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
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
import { Toast } from "vant";
export default defineComponent({
  name: "",
  setup() {
    const data = reactive({
      columns: ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华"],
      show: false,
    });
    onBeforeMount(() => {
      //2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      //3.组件挂载到页面之后执行-------onMounted
    });
    const onConfirm = (value: string, index: string) => {
      Toast(`当前值: ${value}, 当前索引: ${index}`);

      data.show = false;
    };
    const onChange = (value: string, index: string) => {
      Toast(`当前值: ${value}, 当前索引: ${index}`);
    };
    const onCancel = () => {
      Toast("取消");
      data.show = false;
    };
    const getShow = () => {
      data.show = true;
    };
    //需要返回给父组件的方法,用defineExpose传递出去

    return {
      ...toRefs(data),
      onConfirm,
      onChange,
      onCancel,
      getShow,
    };
  },
});
</script>
<style scoped lang="less"></style>
