export const getCode = () => {
  new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        //获取code
        if (res.code) {
          resolve(res.code);
          console.log(res.code);
        } else {
          reject('获取code失败');
        }
      }
    })
  })
}