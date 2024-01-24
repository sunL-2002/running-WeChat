const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({
  data: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // // 目标页面返回到原页面，并携带回传的值
    // wx.navigateBack({
    // delta: 1, // 返回的页面数，1表示返回到上一个页面
    //   success: function() {
    //     wx.setStorageSync(avatarUrl, this.avatarUrl);
    //     wx.setStorageSync(nickName, this.nickName);
    //   }
    // })

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }

  /*
  // 最终提交保存
  async tapSave() {
    await this.uploadFile()
    console.log(this.data.userInfo);
    // return
    const res = await request('/customerInfo/update', 'PUT', {
      "avatar": this.data.userInfo.avatar,
      "nickName": this.data.userInfo.nickName,
    })
    console.log('res', res);
    if (res.success) {
      wx.showToast({
        title: '保存成功',
        icon: 'none'
      })
      wx.switchTab({ url: '/pages/usercenter/index' });
    }
  },
  // 输入昵称
  onInput(e) {
    const { value } = e.detail
    console.log('输入昵称', value);
    this.setData({
      ['userInfo.nickName']: value
    })
  },
  // 选择头像
  onChooseAvatar(e) {
    console.log('选择头像', e);
    const { avatarUrl } = e.detail
    this.setData({
      ['userInfo.avatar']: avatarUrl
    })
  },
  uploadFile() {
    let that = this
    return new Promise((resolve, reject) => {
      console.log('uploadFile');
      let url = `http://localhost:8080/waterStoreFile/upload`
      // res.tempFiles[0].tempFilePath
      wx.uploadFile({
        filePath: this.data.userInfo.avatar,
        name: 'file',
        url: url,
        header: {
          'Authorization': wx.getStorageSync('token') || ''
        },
        success(res) {
          let result = JSON.parse(res.data)
          console.log('上传成功', result);
          if (result.success) {
            console.log('成功');
            that.setData({
              ['userInfo.avatar']: result.data.outsideUrl
            })
          }
          resolve()
        },
        fail(rej) {
          console.log('rej', rej);
          resolve(rej)
        }
      })
    })
  },
  async getUserInfo() {
    const res = await request('/customerInfo/get', 'GET')
    console.log('个人信息', res);
    this.setData({
      userInfo: res.data || {}
    })
  }
  */
})
