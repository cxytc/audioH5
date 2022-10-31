<template>
  <div>
    <div class="BoxModel Shadow3">
      <nut-input
        clearable
        v-model="state.text"
        label="姓名:"
        placeholder="请输入"
      />
      <nut-input
        label="手机号:"
        clearable
        placeholder="手机号"
        v-model="state.tel"
        type="tel"
      />
      <nut-input
        clearable
        v-model="state.text"
        label="身份证:"
        placeholder="请输入"
      />

      <DatePicker />
      <nut-form>
        <nut-form-item label="单选按钮">
          <nut-radiogroup direction="horizontal" v-model="state.radio">
            <nut-radio label="1">男</nut-radio>

            <nut-radio label="2">女</nut-radio>
          </nut-radiogroup>
        </nut-form-item>
      </nut-form>

      <Picker />

      <Cascader />
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
import Picker from "@/components/Picker/index.vue";
import Cascader from "@/components/Cascader/index.vue";
export default defineComponent({
  components: { DatePicker, Picker, Cascader },
  name: "",
  setup() {
    const data = reactive({
      state: {
        text: "",
        tel: "",
        radio: 1,
      },
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
::v-deep .nut-cell {
  box-shadow: none;
  border-bottom: 1px solid #eaf0fb;
  color: #000;
}
</style>
