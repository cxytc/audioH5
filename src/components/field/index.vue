<template>
  <div>
    <van-cell-group inset>
      <van-field
        v-model="message"
        rows="2"
        autosize
        label=""
        type="textarea"
        maxlength="1000"
        placeholder="请输入内容"
        show-word-limit
      />
    </van-cell-group>
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
      message: "",
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
::v-deep .van-cell {
  margin-bottom: 10px;
  border: 1px solid #cccc;
}
</style>
