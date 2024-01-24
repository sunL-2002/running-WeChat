// pages/addactivity/addactivity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamName: '',
    teamDescription: '',
    teamLeader: '',
    memberCount: 0,
    memberInfo: ''
  },
  formSubmit: function(e) {
    e.preventDefault();
    const teamName = this.data.teamName;
    const teamDescription = this.data.teamDescription;
    const teamLeader = this.data.teamLeader;
    const memberCount = this.data.memberCount;
    const memberInfo = this.data.memberInfo.split(',');
    
    // 在这里，你可以将数据发送到后端服务器进行处理
    // 例如，使用wx.request发送POST请求
    wx.request({
      url: 'https://your-backend-server.com/createTeam',
      method: 'POST',
      data: {
        teamName,
        teamDescription,
        teamLeader,
        memberCount,
        memberInfo
      },
      success: (res) => {
        console.log(res.data);
        // 处理成功响应
      },
      fail: (err) => {
        console.error(err);
        // 处理错误响应
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