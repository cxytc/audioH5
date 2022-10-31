<template>
  <div>
    <!-- 顶部区域 -->
    <div class="top_box row al-c Shadow2">
      <div class="circle_box">
        <div class="circle Shadow">张</div>
        <!-- <p>编辑资料</p> -->
      </div>
      <!--  -->
      <div class="right_box" style="width: 90%">
        <div class="row ju-s al-c">
          <div class="name">
            <span>张三</span>
            <i class="iconfont icon-jiangzhang1" />
            <span>一星志愿者</span>
          </div>
        </div>
        <div>
          <nut-cell>
            <nut-progress
              percentage="70"
              stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
              status="active"
            />
          </nut-cell>
        </div>
        <div class="row al-c ju-s">
          <span>距离四星志愿者还差2319积分</span>
          <van-button @click="getRanking" round type="success" size="mini"
            >查看排名</van-button
          >
        </div>
      </div>
    </div>

    <div style="margin: 0 15px">
      <!-- 中间部分 -->
      <div class="BoxModel Shadow row ju-s al-c">
        <div class="item" v-for="item in list" :key="item.id">
          <div class="box">
            <P>{{ item.num }}</P>
            <P>{{ item.name }}</P>
          </div>
        </div>
      </div>
      <!-- 底部区域 -->
      <div class="BoxModel Shadow">
        <div @click="getPath(item.path)" v-for="item in botList" :key="item.id">
          <div class="row ju-s al-c" style="width: 100%">
            <div class="row ju-s al-c">
              <i style="margin-right: 8px" class="iconfont icon-jiangzhang1" />
              <p>{{ item.name }}</p>
            </div>
            <van-icon name="arrow" />
          </div>
          <van-divider />
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
    // 实例化路由
    const router = useRouter();
    const data = reactive({
      list: [
        {
          id: 1,
          num: 1200,
          name: "志愿者积分",
          path: "",
        },
        {
          id: 2,
          num: 1200,
          name: "总服务时长",
          path: "",
        },
        {
          id: 3,
          num: 1200,
          name: "股民积分",
          path: "",
        },
      ],
      botList: [
        {
          id: 1,
          name: "申请成为志愿者",
          path: "/ApplyFor",
        },
        {
          id: 2,
          name: "志愿者积分查询",
          path: "/VolunteerPoints/1",
        },
        {
          id: 3,
          name: "股民积分查询",
          path: "/VolunteerPoints/2",
        },
        {
          id: 4,
          name: "表彰申请",
          path: "/commend",
        },
        {
          id: 5,
          name: "建言献策",
          path: "/OfferAdviceAndSuggestions",
        },
      ],
    });
    onBeforeMount(() => {
      //2.组件挂载页面之前执行----onBeforeMount
    });
    onMounted(() => {
      //3.组件挂载到页面之后执行-------onMounted
    });
    const getRanking = () => {
      router.push({
        path: "/ranking",
      });
    };

    const getPath = (path: string) => {
      router.push({
        path,
      });
    };
    return {
      ...toRefs(data),
      getRanking,
      getPath,
    };
  },
});
</script>
<style scoped lang="less">
.top_box {
  padding-top: 40px;
  height: 120px;
  background-color: skyblue;
  padding: 10px 10px 15px 10px;
  border-radius: 0 0 40px 40px;

  .circle_box {
    margin-right: 10px;
    text-align: center;

    .circle {
      width: 66px;
      height: 66px;
      border-radius: 50%;
      background-color: pink;
      text-align: center;
      line-height: 66px;
      font-size: 22px;
      color: #fff;
    }
    p {
      margin-top: 10px;
      color: #fff;
    }
  }

  //   右边样式
  .right_box {
    ::v-deep .nut-cell {
      padding: 10px;
      background: none;
      box-shadow: none;
    }

    span {
      font-size: 12px;
      margin-left: 10px;
      color: rgb(230, 225, 225);
      font-weight: 700;
    }
    .name {
      span {
        font-size: 16px;
        margin-left: 10px;
        color: #fff;
        font-weight: 700;
      }
    }
  }
}

// 中间盒子
.BoxModel {
  .item {
    justify-content: center;
    .box {
      text-align: center;
      p {
        margin: 5px 0;
      }
      p:nth-child(1) {
        color: rgb(73, 141, 141);
      }
    }
  }
}
::v-deep .van-divider {
  margin: 10px 0;
}
</style>
