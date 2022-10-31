<template>
  <div>
    <commend :offer="offer" />
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
import commend from "@/views/commend/index.vue";
export default defineComponent({
  components: { commend },
  name: "",
  setup() {
    const data = reactive({
      offer: true,
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
<style scoped lang="less"></style>
