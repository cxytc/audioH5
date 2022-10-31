const MajorJoint = `http://192.168.1.29:8090/`;

const cut = (id: Number) => {
  switch (id) {
    case 1:
      return MajorJoint;
      break;
    case 2:
    //   return bookUrl;
    //   break;
    // case 3:
    //   return homeUrl;
    //   break;
    // case 4:
    //   return noticeUrl;
    //   break;
    // case 5:
    //   return searchUrl;
    //   break;
    // case 8:
    //   return searchUrl2;
    //   break;
    default:
      return MajorJoint;
  }
};
export default cut;
