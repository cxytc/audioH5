import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    redirect: "/home",
    component: () => import("@/views/mainPage.vue"),
    children: [
      // 登录页
      {
        path: "/login",
        name: "login",
        meta: {
          title: "登录",
          // 是否显示返回按钮
          IsButton: false,
        },
        component: () => import("@/views/login/index.vue"),
      },

      {
        path: "/home",
        name: "home",
        meta: {
          title: "首页",
          // 是否显示返回按钮
          IsButton: false,
        },
        component: () => import("@/views/Home/home.vue"),
      },
      {
        path: "/Clock",
        name: "clock",
        meta: {
          title: "活动打卡",
          // 是否显示返回按钮
          IsButton: false,
        },
        component: () => import("@/views/Clock/index.vue"),
      },
      {
        path: "/news",
        name: "news",
        meta: {
          title: "消息中心",
          // 是否显示返回按钮
          IsButton: false,
        },
        component: () => import("@/views/news/index.vue"),
      },
      {
        path: "/my",
        name: "my",
        meta: {
          title: "我的",
          // 是否显示返回按钮
          IsButton: false,
        },
        component: () => import("@/views/my/index.vue"),
      },
      {
        path: "/RandomlySnapPicture",
        name: "RandomlySnapPicture",
        meta: {
          title: "随手拍",
          // 是否显示返回按钮
          IsButton: true,
        },
        component: () => import("@/views/RandomlySnapPicture/index.vue"),
      },
      {
        path: "/commend",
        name: "commend",
        meta: {
          title: "表彰申请",
          // 是否显示返回按钮
          IsButton: true,
        },
        component: () => import("@/views/commend/index.vue"),
      },
      {
        path: "/OfferAdviceAndSuggestions",
        name: "OfferAdviceAndSuggestions",
        meta: {
          title: "建言献策",
          // 是否显示返回按钮
          IsButton: true,
        },
        component: () => import("@/views/OfferAdviceAndSuggestions/index.vue"),
      },
      {
        path: "/PostHocReview",
        name: "PostHocReview",
        meta: {
          title: "随手拍审核",
          // 是否显示返回按钮
          IsButton: true,
        },
        component: () => import("@/views/PostHocReview/index.vue"),
      },
      {
        path: "/polling",
        name: "polling",
        meta: {
          title: "巡检/执法",
          // 是否显示返回按钮
          IsButton: true,
        },
        component: () => import("@/views/polling/index.vue"),
      },
      {
        path: "/activity",
        name: "activity",
        meta: {
          title: "活动中心",
          // 是否显示返回按钮
          IsButton: true,
        },
        component: () => import("@/views/activity/index.vue"),
        children: [
          // 活动详情
          // {
          //   path: "/activity/Details",
          //   name: "activityDetails",
          //   meta: {
          //     title: "活动详情",
          //     // 是否显示返回按钮
          //     IsButton: true,
          //   },
          //   component: () => import("@/views/activity/Details/index.vue"),
          // },
        ],
      },
      {
        path: "/activity/Details",
        name: "activityDetails",
        meta: {
          title: "活动详情",
          // 是否显示返回按钮
          IsButton: true,
        },
        component: () => import("@/views/activity/Details/index.vue"),
      },

      // 排名
      {
        path: "/ranking",
        name: "ranking",
        meta: {
          title: "志愿者积分排名",
          // 是否显示返回按钮
          IsButton: true,
        },
        component: () => import("@/views/ranking/index.vue"),
      },
      {
        path: "/VolunteerPoints/:id",
        name: "VolunteerPoints",
        meta: {
          title: "志愿者积分查询",
          // 是否显示返回按钮
          IsButton: true,
        },
        component: () => import("@/views/VolunteerPoints/index.vue"),
      },
      // 志愿者申请
      {
        path: "/ApplyFor",
        name: "ApplyFor",
        meta: {
          title: "志愿者申请",
          // 是否显示返回按钮
          IsButton: true,
        },
        component: () => import("@/views/ApplyFor/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
