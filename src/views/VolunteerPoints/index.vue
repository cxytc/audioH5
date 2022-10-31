<template>
  <div>
    <div class="row al-c ju-s">
      <DatePicker />
      <nut-button size="mini" type="primary">全部</nut-button>
      <nut-button size="mini" type="primary">加分</nut-button>
      <nut-button size="mini" type="primary">扣分</nut-button>
    </div>

    <div class="BoxModel Shadow3">
      <div v-for="item in 5" :key="item" style="margin-top: 10px">
        <div class="row al-c ju-s">
          <div>
            <p>XXXXXX抢险活动</p>
            <p>2022-12-12 02:12</p>
          </div>
          <div class="colors">+5积分</div>
        </div>
        <nut-divider />
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
import DatePicker from "@/components/DatePicker/index.vue";
export default defineComponent({
  components: { DatePicker },
  name: "",
  setup() {
    const data = reactive({});
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
  margin: 0 0 10px 0;
  font-size: 14px;
  font-weight: 700;
}
::v-deep .nut-divider {
  margin: 0;
}
.colors {
  color: green;
  font-size: 14px;
  font-weight: 700;
}
</style>
