// pages/search/search.js
var area = require('../../utils/area');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ["上海", "南京", "苏州", "无锡", "常州"],
    index: 0,
    referral: ["产品", "设计", "运营", "Java", "iOS", "Android", "运营", "设计", "运营", "设计", "运营", "设计", "运营"],
    inputValue:"",
  },
 
  changeIndex: function (e) {
    this.setData({ index: e.detail.value })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  go: function (e) {
    var that=this
    wx.navigateTo({
      url: '../list/list?title='+that.data.inputValue
    })
  },
  back: function () {
    var that=this
    wx.switchTab({
      url: '../job/job'
    })
  },
  //点击标签
  tapName: function (res) {
    this.setData({
      inputValue: this.data.referral[res.currentTarget.id],
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