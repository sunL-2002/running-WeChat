// pages/addgroup/addgroup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',//名称
    declaration:'',//宣言
    address: '',//地址
    province: '请选择省份', //临时存储省
    array1: ['省', '选项2', '选项3'], //存储【省】信息
    city: '请选择城市', //临时存储市
    array2: ['市', '选项2', '选项3']  //存储【市】信息
  },
  //设置组织名称
  onInputName(e) {
    this.setData({
      name: e.detail.value,
    });
  },
  //设置组织宣言
  onInputDeclaration(e) {
    this.setData({
      declaration: e.detail.value,
    });
  },
  //选择省
  bindPickerChange1: function (e) {
    console.log('选择的值为:',this.data.array1[e.detail.value]);
    this.setData({
      province: this.data.array1[e.detail.value]
    })
  },
  //选择市,并将地址赋值
  bindPickerChange2: function (e) {
    console.log('选择的值为:',this.data.array2[e.detail.value]);
    this.setData({
      city: this.data.array2[e.detail.value],
      address: this.data.array1[e.detail.value]+this.data.array2[e.detail.value] //地址
    })
  },
  //提交数据
  onSubmit() {
    const { name, address } = this.data;
    if (!name || !address) {    //判断是否为空
      wx.showToast({   //为空的提示
        title: '请填写完整信息',
        icon: 'none',
      });
      return;
    }

    // 在这里可以将数据发送到服务器进行存储
    console.log('组织名称：', name);
    console.log('组织宣言：', declaration);
    console.log('组织地址：', address);
    wx.showToast({
      title: '提交成功',
      icon: 'success',
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
})