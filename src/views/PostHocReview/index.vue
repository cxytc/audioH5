<template>
  <div>
    <div v-for="item in 6" :key="item" @click="getDetails">
      <div class="BoxModel Shadow3 row">
        <div>
          <nut-image
            radius="5"
            src="//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg"
            class="imgs"
          ></nut-image>
        </div>
        <div class="content_box">
          <div class="row ju-s al-c">
            <p class="omit">xxxx联社，张三提交了随手拍内容</p>
            <p>待审核</p>
          </div>
          <div class="row ju-s al-c">
            <p>黄赌毒盗诈线索</p>
            <p>2022-12-12 02:12</p>
          </div>
        </div>
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
import { useRouter } from "vue-router";
export default defineComponent({
  name: "",
  setup() {
    let router = useRouter();
    const data = reactive({});
    onBeforeMount(() => {
      //2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      //3.组件挂载到页面之后执行-------onMounted
    });

    const getDetails = () => {
      let path = "/RandomlySnapPicture";
      router.push({
        path,
      });
    };
    return {
      ...toRefs(data),
      getDetails,
    };
  },
});
</script>
<style scoped lang="less">
.imgs {
  width: 65px;
  height: 65px;
}
.content_box {
  margin-left: 10px;
  width: 80%;
  p {
    font-size: 14px;
    font-weight: 700;
    margin-top: 10px;
  }
}
</style>
