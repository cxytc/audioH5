<template>
  <div>
    <div class="BoxModel Shadow3">
      <div class="row ju-c">
        <div class="ranking_box row">
          <div class="father">
            2
            <div class="son row ju-c">
              <div class="">
                <p>李四</p>
                <p>3002</p>
                <p>黄金志愿者</p>
              </div>
            </div>
          </div>
          <div class="father">
            1

            <div class="son row ju-c">
              <div class="">
                <p>张三</p>
                <p>3002</p>
                <p>钻石志愿者</p>
              </div>
            </div>
          </div>
          <div class="father">
            3

            <div class="son row ju-c">
              <div class="">
                <p>王二</p>
                <p>3002</p>
                <p>五星志愿者</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 排名 -->
      <div style="margin-top: 20px">
        <nut-table
          :columns="columns"
          :data="data"
          @sorter="handleSorter"
        ></nut-table>
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
import { Toast } from "@nutui/nutui";
export default defineComponent({
  name: "",
  setup() {
    const data = reactive({
      columns: [
        {
          title: "排名",
          key: "num",
          align: "center",
          // sorter: true,
        },
        {
          align: "center",
          title: "姓名",
          key: "name",
        },
        {
          align: "center",
          title: "称号",
          key: "record",
        },
        {
          align: "center",
          title: "积分",
          key: "age",
          // sorter: (row1: any, row2: any) => {
          //   return row1.age - row2.age;
          // },
        },
      ],
      data: [
        {
          num: "1",
          name: "Tom",
          sex: "四星志愿者",
          record: "四星志愿者",
          age: 30,
        },
        {
          num: "2",
          name: "Lucy",
          sex: "四星志愿者",
          record: "四星志愿者",
          age: 20,
        },
        {
          num: "3",
          name: "Jack",
          sex: "四星志愿者",
          record: "四星志愿者",
          age: 4,
        },
      ],
    });
    onBeforeMount(() => {
      //2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      //3.组件挂载到页面之后执行-------onMounted
    });
    const handleSorter = (item: any) => {
      // (Toast as any).text(`${JSON.stringify(item)}`);
    };
    return {
      ...toRefs(data),
      handleSorter,
    };
  },
});
</script>
<style scoped lang="less">
.ranking_box {
  margin-top: 70px;
  .father {
    width: 90px;
    border: 2px solid #ccc;
    margin: 0 1px;
    font-size: 18px;
    text-align: center;
    position: relative;

    .son {
      width: 100%;
      position: absolute;
      top: -60px;
      font-weight: 700;
    }
  }
  .father:nth-child(1) {
    height: 50px;
    margin-top: 30px;
    // line-height: 50px;
    background-color: #acfb6f;
  }
  .father:nth-child(2) {
    height: 80px;
    background-color: #fad603;
    // line-height: 80px;
  }
  .father:nth-child(3) {
    height: 40px;
    margin-top: 40px;
    // line-height: 40px;
    background-color: #1296db;
  }
}
</style>
