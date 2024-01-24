// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:[],//轮播图存储对象
    challenge:[],//挑战信息存储对象
    events:[],//活动信息存储对象
    organization:[],//组织信息存储对象
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this;
    wx.request({
      url: 'http://localhost:8080/user/images/images',
      success: function (res) {
        console.log(res.data)
        that.setData({
          images: res.data.data,
        });
      },
    });
    wx.request({
      url: 'http://localhost:8080/user/challenges/challenge2',
      success: function(res){
        console.log(res.data)
        that.setData({
          challenge: res.data.data,
        });
      }
    });
    wx.request({
      url: 'http://localhost:8080/user/events/getEvent2',
      success: function(res){
        console.log(res.data)
        that.setData({
          events: res.data.data,
        });
      }
    });
    wx.request({
      url: 'http://localhost:8080/user/organizations/getOrganization2',
      success: function(res){
        console.log(res.data)
        that.setData({
          organization: res.data.data,
        });
      }
    });
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