import { loginRequest } from "./service/index"
import { getCode } from "./service/login"

// app.js
App({
  async onLaunch() {
    //获取本地token
    const token = wx.getStorageSync('token') || ''
 
    //检查token是否过期
    const res = await loginRequest.post({
      url: '/user/users/auth',
      header: {
        token
      }
    })
    console.log(res);
 
    // 登录
    if (token && res.message === "已登录") {
      console.log('请求其他数据');
    } else {
      this.handlerLogin()
    }
  },
  //登录的回调函数
  async handlerLogin() {
    wx.login({
      success: res => {
        //获取code
        const code = res.code
        console.log(code);
        //将code发送给后端请求
        wx.request({
          url: 'http://localhost:8080//user/users/login',
          data:{code},
          method:'POST',
          success:(res) => {
            //保存token
            const token = res.data.token
            wx.setStorageSync('token', token)
            console.log(res)
          }
        })
      }
    }) 
  },
  
  globalData: {
    userInfo: null
  }
})
