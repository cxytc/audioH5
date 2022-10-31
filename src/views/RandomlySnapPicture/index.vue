<template>
  <div>
    <!-- 顶部区域 -->
    <div class="BoxModel Shadow3">
      <div class="row ju-s al-c">
        <nut-input
          v-model="value"
          label="当前位置："
          placeholder="请输入当前位置"
        />
        <van-button
          @click="ScanQRCodes"
          style="margin-right: 8px"
          type="primary"
          size="mini"
          >扫码</van-button
        >
      </div>
      <div class="row ju-s al-c kind_box">
        <nut-input
          readonly
          v-model="value2"
          label="上报种类："
          placeholder=""
        />
        <van-button
          @click="getBtn"
          style="margin-right: 8px"
          type="primary"
          size="mini"
          >请选择上报种类</van-button
        >
      </div>
      <!-- 线索描绘 -->
      <p class="titles">线索描绘</p>
      <field></field>
    </div>
    <!-- 取证区域 -->
    <div class="BoxModel Shadow3">
      <!-- 上传照片区域 -->
      <p class="titles">照片取证</p>
      <Imgs />

      <!--  视频取证 -->
      <p class="titles">视频取证</p>
      <shootVideo></shootVideo>

      <!-- 语音录入 -->
      <p class="titles">语音取证</p>
      <voice />
    </div>

    <div class="row ju-c" style="margin-top: 40px">
      <van-button class="Shadow3" round type="primary">提 交 审 核</van-button>
    </div>

    <!-- 弹出层 -->
    <Popup ref="Tk" />

    <ActionSheet />
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  ref,
  getCurrentInstance,
} from "vue";
import bus from "@/utils/bus.ts";

import Imgs from "@/components/Imgs/imgs.vue";
import Popup from "@/components/popup/index.vue";

import shootVideo from "@/components/shootVideo/index.vue";
import voice from "@/components/voice/index.vue";
import field from "@/components/field/index.vue";

export default defineComponent({
  name: "",
  components: { Imgs, Popup, shootVideo, voice, field },

  setup(props, { emit }) {
    const { proxy } = getCurrentInstance();
    const data = reactive({
      value: "",
      value2: "",
      message: "",
      fileList: [],
      url: "",
    });
    const Tk = ref(null);
    onBeforeMount(() => {
      //2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      //3.组件挂载到页面之后执行-------onMounted
    });

    const getBtn = () => {
      proxy.$refs.Tk.getShow();
    };

    //扫描二维码

    const ScanQRCodes = () => {};

    return {
      ...toRefs(data),
      getBtn,
      ScanQRCodes,
    };
  },
});
</script>
<style scoped lang="less">
::v-deep .nut-input {
  width: 80%;
}
.kind_box {
  ::v-deep .nut-input {
    width: 70%;
  }
}

::v-deep .van-cell {
  margin-bottom: 10px;
  border: 1px solid #cccc;
}
</style>
