<template>
  <nut-form>
    <nut-form-item label="选择地址">
      <input
        class="nut-input-text"
        @click="state.visible = true"
        :value="state.value"
        readonly
        placeholder="请选择地址"
        type="text"
      />
      <nut-cascader
        title="地址选择"
        v-model:visible="state.visible"
        v-model="state.value"
        @change="events.change"
        @path-change="events.pathChange"
        :options="state.options"
      ></nut-cascader>
    </nut-form-item>
  </nut-form>
</template>
<script lang="ts">
import { reactive } from "vue";
export default {
  setup() {
    // 基础用法
    const state = reactive({
      visible: false,
      // value: ['湖南'],
      value: [],
      options: [
        {
          value: "浙江",
          text: "浙江",
          children: [
            {
              value: "杭州",
              text: "杭州",
              disabled: true,
              children: [
                { value: "西湖区", text: "西湖区" },
                { value: "余杭区", text: "余杭区" },
              ],
            },
            {
              value: "温州",
              text: "温州",
              children: [
                { value: "鹿城区", text: "鹿城区" },
                { value: "瓯海区", text: "瓯海区" },
              ],
            },
          ],
        },
        {
          value: "湖南",
          text: "湖南",
          disabled: true,
        },
        {
          value: "福建",
          text: "福建",
          children: [
            {
              value: "福州",
              text: "福州",
              children: [
                { value: "鼓楼区", text: "鼓楼区" },
                { value: "台江区", text: "台江区" },
              ],
            },
          ],
        },
      ],
    });
    const events = {
      change(...args: any) {
        console.log("change", ...args);
      },
      pathChange(...args: any) {
        console.log("pathChange", ...args);
      },
    };

    return {
      state,
      events,
    };
  },
};
</script>
