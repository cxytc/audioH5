<template>
  <div>
    <div class="BoxModel Shadow3">
      <div class="row ju-s al-c">
        <nut-input
          v-model="value"
          label="当前位置："
          placeholder="请输入当前位置"
        />
        <van-button @click="ScanQRCodes" type="primary" size="mini"
          >扫码</van-button
        >
      </div>
      <div class="row ju-s al-c kind_box">
        <nut-input
          readonly
          v-model="value2"
          label="选择事项："
          placeholder=""
        />
        <van-button @click="getBtn" type="primary" size="mini"
          >请选择</van-button
        >
      </div>

      <!-- 手风琴 -->
      <Collapse></Collapse>

      <div class="row ju-s al-c kind_box">
        <nut-input readonly v-model="value2" label="举报人：" placeholder="" />
        <van-button @click="getBtn" type="primary" size="mini"
          >请选择</van-button
        >
      </div>

      <!-- 问题描述 -->
      <p class="titles">问题描述</p>
      <field></field>

      <!-- 照片取证 -->
      <p class="titles">照片取证</p>
      <Imgs />

      <!--  视频取证 -->
      <p class="titles">视频取证</p>
      <shootVideo></shootVideo>

      <div class="row ju-c">
        <nut-button type="info">&nbsp; 提 交 &nbsp;</nut-button>
      </div>
      <!-- 弹出层 -->
      <Popup ref="Tk" />
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  getCurrentInstance,
} from "vue";
import Popup from "@/components/popup/index.vue";
import Collapse from "@/components/Collapse/index.vue";
import field from "@/components/field/index.vue";
import Imgs from "@/components/Imgs/imgs.vue";
import shootVideo from "@/components/shootVideo/index.vue";

export default defineComponent({
  components: { Popup, Collapse, field, Imgs, shootVideo },
  name: "",
  setup() {
    const { proxy } = getCurrentInstance();
    const data = reactive({
      value2: "",
      value: "",
    });
    onBeforeMount(() => {
      //2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      //3.组件挂载到页面之后执行-------onMounted
    });
    const getBtn = () => {
      proxy.$refs.Tk.getShow();
    };

    return {
      ...toRefs(data),
      getBtn,
    };
  },
});
</script>
<style scoped lang="less">
::v-deep .nut-input {
  width: 80% !important;
}
</style>
