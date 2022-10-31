const user = {
  init: (fname, param) => user[fname](param),
  // 获取用户信息
  getUserInfo: (param) => ({
    method: `user/userInfo`, // 接口地址
    data: param, // 请求参数
  }),
  // 获取用户信息
  userInfoByUserId: (param) => ({
    method: `user/userInfoByUserId`, // 接口地址
    data: param, // 请求参数
  }),
  // 获取第三方用户信息
  getMobile: (param) => ({
    method: `user/getMobile`, // 接口地址
    data: param, // 请求参数
  }),
  // 获取第三方用户信息
  thirdPartyLogin: (param) => ({
    method: `user/thirdPartyLogin`, // 接口地址
    data: param, // 请求参数
  }),
  // 发布评论
  addBookComment: (param) => ({
    method: `user/comment/addBookComment`, // 接口地址
    data: param, // 请求参数
  }),
  // 发布评论回复
  addBookCommentReply: (param) => ({
    method: `user/comment/addBookCommentReply`, // 接口地址
    data: param, // 请求参数
  }),
  // 获取评论回复
  listCommentByReplyPage: (param) => ({
    method: `user/comment/listCommentByReplyPage`, // 接口地址
    data: param, // 请求参数
  }),
  // 发布推荐
  addBookRecommend: (param) => ({
    method: `user/recommend/addBookRecommend`, // 接口地址
    data: param, // 请求参数
  }),
  // 发布推荐评论
  addBookRecommendComment: (param) => ({
    method: `user/recommend/addBookRecommendComment`, // 接口地址
    data: param, // 请求参数
  }),
  // 阅读记录
  listReadHistoryByPage: (param) => ({
    method: `user/listReadHistoryByPage`, // 接口地址
    data: param, // 请求参数
  }),
  // 阅读记录
  listCommentByPage: (param) => ({
    method: `user/comment/listCommentByPage`, // 接口地址
    data: param, // 请求参数
  }),
  // 点赞
  bookCommentLike: (param) => ({
    method: `user/comment/bookCommentLike`, // 接口地址
    data: param, // 请求参数
  }),
  // 书籍内容评论
  addBookContentComment: (param) => ({
    method: `user/comment/addBookContentComment`, // 接口地址
    data: param, // 请求参数
  }),
};
export default user;
