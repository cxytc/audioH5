const activity = <any>{
  init: (fname: any, param: any) => activity[fname](param),
  // 获取用户信息
  activityList: (param: any) => ({
    method: "biz/activity/list", // 接口地址
    data: param, // 请求参数
  }),
};
export default activity;
