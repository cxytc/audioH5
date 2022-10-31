// 引入axios
import axios from "axios";
import qs from "qs"; // 用于表单请求使用的库

// import md5 from "js-md5";
// import moment from "moment";
import { Toast } from "vant";

// 请求拦截器;
axios.interceptors.request.use(
  (config: any) => {
    // 每次发送请求之前判断是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // const token = window.localStorage.getItem("token");
    const token = window.localStorage.getItem("token");

    token && (config.headers.Authorization = token);
    return config;
  },
  (error: any) => {
    // return Promise.error(error);
    console.log(error);
  }
);
axios.interceptors.response.use(
  (response: any) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          console.log("未登录");
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          console.log("登录过期，请关闭重新进入");
          // 清除token
          break; // 404请求不存在
        case 404:
          console.log("您访问的网页不存在");
          break;
        // 其他错误，直接抛出错误提示
        default:
          console.log(error.response.data.message);
      }
      return Promise.reject(error.response);
    }
  }
);

const request = {
  // post 请求方式
  commonPost: (obj: any) => {
    axios({
      // url 传入的api
      url: obj.url,
      // method 定义的请求方式 或者post等等
      method: "POST",
      //   data post传递过来的数据
      data: obj.data,
      // 设置参数的表头形式,浏览器原生form表单默认的提交方式
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded' //表单
        "Content-Type": "application/json",
      },
      //对data的参数转化为键值对
      //   transformRequest: [(d) => qs.stringify(d)]
    })
      .then((res) => {
        //后台成功请求200运行到这里
        if (res.status === 200) {
          // console.log("成功了", res);
          obj.callBack(res.data);
        }
        if (res.data.code == 500) {
          // Toast.fail(res.data.msg);
        }
      })
      .catch((e) => {
        console.log(e, "请求失败");
      });
  },
  //   get请求方式
  commonGet: (obj: any) => {
    axios({
      // url 传入的api
      url: obj.url,
      // method 定义的请求方式 get
      method: "GET",
      //   data post传递过来的数据
      params: obj.data,
      // 设置参数的表头形式,get的请求头参数
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImFiYjBlYTQzLWMyNDktNDJkMC1iMGYzLTZmMjkyOTA5ZjBkMSJ9.Mt2LQxmsaDZhYcRkjZOvwNyz9gnUmvltCEckJelvLtuwBVqc2bDofk4eG7ntQU1ki_QMmgDoiAoFg7qiGQu7CQ",
      },
    })
      .then((res) => {
        //后台成功请求200运行到这里
        if (res.status === 200) {
          obj.callBack(res.data);
          // console.log(res)
        }

        if (res.data.code == 500) {
          Toast.fail(res.data.msg);
        }
      })
      .catch((e) => {
        console.log(e, "请求失败");
      });
  },
};
// 导出request
export default request;
