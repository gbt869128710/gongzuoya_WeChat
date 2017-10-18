// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ["上海", "南京", "北京"],
    index: 0,
    referral: ["产品", "设计", "运营", "Java", "iOS", "Android", "运营", "设计", "运营", "设计", "运营", "设计", "运营"]

  },
 
  changeIndex: function (e) {
    this.setData({ index: e.detail.value })
  },
  bindViewtext: function () {
    wx.navigateBack({
      url: '../about/about'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})