<template>
  <div>
    <div class="row ju-c">
      <nut-animate type="float" :loop="isShow">
        <nut-button
          round
          @click="getLy(isShow)"
          :type="isShow ? 'info' : 'success'"
          color="linear-gradient(to right, #e0a76d, #caec5a)"
        >
          <p v-if="!isShow" class="but">
            {{ name }}
          </p>

          <div class="row ju-c box_s">
            <div class="time-box" v-if="isShow">
              <span class="start-taste-line">
                <hr :class="`hr${item}`" v-for="item in 10" :key="item" />
              </span>
            </div>
          </div>
        </nut-button>
      </nut-animate>
    </div>

    <nut-audio
      v-if="url"
      :url="url"
      :muted="muted"
      :autoplay="autoplay"
      :loop="false"
      type="progress"
    >
      <div class="nut-audio-operate-group">
        <nut-audio-operate type="back"></nut-audio-operate>
        <nut-audio-operate type="play"></nut-audio-operate>
        <nut-audio-operate type="forward"></nut-audio-operate>
        <nut-audio-operate type="mute"></nut-audio-operate>
      </div>
    </nut-audio>
  </div>
</template>

<script>
import Recorder from "js-audio-recorder";
// import Recorder from "@/utils/recorder.js";
import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
} from "vue";
export default defineComponent({
  name: "",
  setup() {
    const data = reactive({
      recorder: new Recorder({
        sampleBit: 16, // 采样位数，支持 8 或 16，默认是16
        sampleRate: 16000,
      }),
      muted: false,
      autoplay: false,
      url: "",
      timeOutEvent: 0,
      //   录音动画
      isShow: false,
      name: "点击录音",
    });
    onBeforeMount(() => {
      //2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      //3.组件挂载到页面之后执行-------onMounted
    });

    const getLy = (isShow) => {
      if (!isShow) {
        Recorder.getPermission().then(
          () => {
            console.log("开始录音");
            data.recorder.start(); // 开始录音
            data.isShow = true;
            data.name = "暂停录音";
          },
          (error) => {
            //   console.log(`${error.name} : ${error.message}`, error);
            console.log(error);
            // data.isShow = true;
            // alert("请开启录音授权");
          }
        );
      } else {
        handleStop();
      }
    };

    // 停止录音
    const handleStop = () => {
      let wavData = data.recorder.getWAVBlob();
      let files = new File([wavData], `${new Date().getTime()}.wav`, {
        type: "audio/wav",
      });

      let wav = window.webkitURL.createObjectURL(files);
      data.url = wav;
      console.log("暂停录音", wav);
      data.name = "重新录音";
      data.isShow = false;
    };

    return {
      ...toRefs(data),
      handleStop,

      getLy,
    };
  },
});
</script>
<style scoped lang="less">
.box_s {
  //   margin-top: -120px;
}
.time-box .start-taste-line hr {
  width: 100%;
  background-color: red; //声波颜色
  width: 3px;
  height: 6px;
  margin: 0 0.03rem;
  display: inline-block;
  border: none;
}
hr {
  animation: note 0.2s ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.hr1 {
  animation-delay: -1s;
}
.hr2 {
  animation-delay: -0.9s;
}
.hr3 {
  animation-delay: -0.8s;
}
.hr4 {
  animation-delay: -0.7s;
}
.hr5 {
  animation-delay: -0.6s;
}

.hr6 {
  animation-delay: -0.5s;
}
.hr7 {
  animation-delay: -0.4s;
}
.hr8 {
  animation-delay: -0.3s;
}
.hr9 {
  animation-delay: -0.2s;
}
.hr10 {
  animation-delay: -0.1s;
}

@keyframes note {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(4);
  }
}
.but {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  //   -webkit-user-select: none;
}
.b {
  color: linear-gradient(to right, #e0a76d, #caec5a);
}
// ::v-deep .nut-range-bar {
//   width: 100% !important;
// }
</style>
