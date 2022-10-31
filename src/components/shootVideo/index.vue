<template>
  <div>
    <div v-if="!url">
      <span type="primary">
        <!--用label覆盖input-->
        <div class="row">
          <label class="wrapper btn" for="fileUpload">
            <van-icon size="90" name="photograph" />
          </label>
        </div>
      </span>
      <input
        ref="uploadVideo"
        type="file"
        @change="handleChange"
        accept="video/*"
        id="fileUpload"
        style="position: absolute; clip: rect(0 0 0 0); left: 12%"
      />
    </div>
    <Video @getClose="getClose" ref="getVideo" />
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

import Video from "../video/index.vue";
export default defineComponent({
  components: { Video },
  name: "",
  setup() {
    const { proxy } = getCurrentInstance();
    const data = reactive({
      url: "",
    });
    onBeforeMount(() => {
      //2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      //3.组件挂载到页面之后执行-------onMounted
    });
    const handleChange = () => {
      const videoFormdata = new FormData();
      videoFormdata.append("video", proxy.$refs.uploadVideo.files[0]);

      let url = window.webkitURL.createObjectURL(
        proxy.$refs.uploadVideo.files[0]
      );
      data.url = url;
      proxy.$refs.getVideo.getVideo(url);
    };

    // 子组件调用父组件的方法
    const getClose = () => {
      data.url = "";
    };
    return {
      ...toRefs(data),
      handleChange,
      getClose,
    };
  },
});
</script>
<style scoped lang="less">
.wrapper {
  font-size: 16px;
  padding: 10px 0;
  margin-bottom: -8px;
}
</style>
