// 导入request
import request from "./request";

import activity from "./activity";

// 判断url地址
import cut from "./cut";
// 接受接口参数的集合
const apiType = <any>{
  activity,
};
const api = {
  // post 的请求
  commonPost: (
    ftype: any,
    fname: any,
    param: any,
    successCallBack: any,
    errorCallBack: any
  ) => {
    let res = null;
    try {
      res = api.doRequest(
        apiType[ftype].init(fname, param),
        successCallBack,
        errorCallBack
      );
    } catch (e: any) {
      console.error(e.message);
    }
    return res;
  },
  //   get 请求
  commonGet: (
    ftype: any,
    fname: any,
    param: any,
    successCallBack: any,
    errorCallBack: any
  ) => {
    let res = null;
    try {
      res = api.doRequest2(
        apiType[ftype].init(fname, param),
        successCallBack,
        errorCallBack
      );
    } catch (e: any) {
      console.error(e.message);
    }
    return res;
  },
  // 把接收到的请求参数传递给request
  doRequest: (param: any, successCallBack: any, errorCallBack: any) => {
    const url = api.getUrl(param);
    const data = {
      url,
      data: param.data,
      callBack: (data: any) => {
        api.callBack(successCallBack, data, errorCallBack);
      },
    };
    request.commonPost(data);
  },
  doRequest2: (param: any, successCallBack: any, errorCallBack: any) => {
    const url = api.getUrl(param);
    const data = {
      url,
      data: param.data,
      callBack: (data: any) => {
        api.callBack(successCallBack, data, errorCallBack);
      },
    };
    request.commonGet(data);
  },
  callBack: (successCallBack: any, data: any, errorCallBack: any) => {
    if (data.code === 0 || data.code === 200) {
      // 判断data是否成功
      successCallBack(data);
    } else {
      errorCallBack(data);
    }
    // 接口请求失败返回
    // if (data.code !== 0 &&) {
    //   errorCallBack(data);
    // }
  },
  // 声明 接口地址的ip 或域名 method改成模板字符串的形式
  getUrl: (param: any) => `${cut(param.is)}${param.method}`,
};
export default api;
