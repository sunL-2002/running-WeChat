// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option:'开始运动',
    polyline: [], // 存放运动轨迹的数组
    latitude: 0, // 初始化纬度
    longitude: 0, // 初始化经度
  },
  onReady: function () {
    wx.createMapContext('map').moveToLocation(); // 将地图移动到当前位置
    this.getLocation(); // 获取当前位置
  },
  getLocation: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },
  startRun: function () {
    var that = this;
    if(that.option == '开始运动'){
      that.setData({
        option:'结束运动'
      });
      var timer = setInterval(function () {
        that.getNewLocation(); // 获取新的位置
      }, 1000); // 1秒更新一次位置
    }else{
      //结束运动保存运动轨迹
      that.save();
    }
  },
  getNewLocation: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        var polyline = that.data.polyline.concat({ // 将新位置添加到轨迹数组中
          points: [{
            latitude: that.data.latitude,
            longitude: that.data.longitude
          }, {
            latitude: latitude,
            longitude: longitude
          }],
          color: "#FF0000DD",
          width: 2,
          dottedLine: true
        });
        that.setData({
          polyline: polyline, // 更新轨迹数组
          latitude: latitude,
          longitude: longitude
        });
      }
    })
  },
  save: function(){
    var that = this
    var a = {
      username:this.data.username,
      use_time:this.data.costtime,
      startpoint:this.data.start,
      // startpoint:"历城区伯乐路",
      endpoint:this.data.end,
      // endpoint:"历城区舜泰北路",
      router:JSON.stringify(this.data.point)
    }
    wx.request({
      url: 'http://localhost:8800/router/addRouter',
      method:'POST',
      data:a,
      success:function(res){
        wx.showToast({
          title: "保存成功",
          duration: 1000,
          icon: "sucess",
          make: true
        });
        var i = setInterval(function() { //当前页面
          wx.navigateBack({
            delta: 1,
          })
        },1000)
        that.setData({
          i:i
        })
      }
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