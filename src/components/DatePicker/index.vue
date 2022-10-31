<template>
  <nut-cell title="出生年月:" :desc="desc" @click="show = true"></nut-cell>
  <nut-datepicker
    v-model="currentDate"
    v-model:visible="show"
    :min-date="minDate"
    :is-show-chinese="true"
    :three-dimensional="false"
    @confirm="confirm"
  ></nut-datepicker>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props) {
    const show = ref(false);
    const desc = ref();
    const minDate = new Date(1970, 0, 1);
    const currentDate = new Date(2022, 4, 10, 10, 10);
    const confirm = ({ selectedValue, selectedOptions }) => {
      desc.value = selectedOptions.map((option) => option.text).join("");
    };
    return {
      currentDate,
      show,
      desc,
      minDate,
      confirm,
    };
  },
};
</script>
