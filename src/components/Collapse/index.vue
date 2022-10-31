<template>
  <nut-collapse
    v-model:active="activeName"
    :accordion="true"
    icon="arrow-right2"
    rotate="90"
  >
    <nut-collapse-item :title="title1" :name="1">
      <template v-slot:sTitle>
        <!-- <van-checkbox v-model="checked" @click.stop="getChecked"
          >全选</van-checkbox
        > -->
      </template>

      <div class="checkbox_box">
        <van-checkbox v-model="checked"
          >1、未落实出租屋管理要求，存在安…
        </van-checkbox>
      </div>
      <div>
        <van-checkbox v-model="checked"
          >2、未落实出租屋管理要求，存在安…</van-checkbox
        >
      </div>
    </nut-collapse-item>
  </nut-collapse>
</template>
<script>
import { reactive, ref, toRefs } from "vue";
export default {
  setup() {
    const activeName = ref(1);
    const title = reactive({
      title1: "违反出租屋管理政策",
      checked: "",
    });
    const getChecked = () => {
      console.log("????");
    };
    return {
      activeName,
      ...toRefs(title),
      getChecked,
    };
  },
};
</script>

<style scoped lang="less">
.checkbox_box {
  margin: 0px 0 15px 0;
}
</style>
