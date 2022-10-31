<template>
  <nut-cell
    title="政治面貌"
    :desc="desc"
    @click="
      () => {
        show = true;
      }
    "
  ></nut-cell>
  <nut-picker
    v-model:visible="show"
    :columns="columns"
    title="请选择"
    @change="change"
    @confirm="confirm"
  >
  </nut-picker>
</template>
<script>
import { ref } from "vue";
export default {
  setup(props) {
    const show = ref(false);
    const desc = ref("");
    const columns = ref([
      { text: "良好", value: "良好" },
      { text: "优秀", value: "优秀" },
    ]);

    const confirm = ({ selectedValue, selectedOptions }) => {
      desc.value = selectedValue.join(",");
    };
    const change = ({ selectedValue, selectedOptions }) => {
      console.log(selectedValue);
    };

    return { show, desc, columns, change, confirm };
  },
};
</script>
