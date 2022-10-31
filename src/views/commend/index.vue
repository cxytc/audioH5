<template>
  <div>
    <!-- 表彰申请 -->
    <div class="BoxModel Shadow3">
      <field></field>
      <p class="titles">{{ offer ? "图片上传" : "表彰证书" }}</p>
      <Imgs />
      <div class="row ju-c">
        <nut-button type="info">&nbsp; 提 交 &nbsp;</nut-button>
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
import Imgs from "@/components/Imgs/imgs.vue";
import field from "@/components/field/index.vue";
export default defineComponent({
  name: "",
  components: { Imgs, field },
  props: {
    offer: {
      type: Boolean,
    },
  },
  setup() {
    const data = reactive({
      message: "",
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
::v-deep .van-cell {
  margin-bottom: 10px;
  border: 1px solid #cccc;
}
</style>
