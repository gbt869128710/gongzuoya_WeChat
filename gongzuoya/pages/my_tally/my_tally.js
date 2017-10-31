// pages/my_tally/my_tally.js
const app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my: util.my,
    ego: util.ego,
    array:[],
    show: false,
    arr: [],
    
  },
  back: function (e) {
    var that = this
    // app.cityid=e.target.dataset.id
    wx.navigateBack({
      delta: 1
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value,
      show: true,
    })
  },
  cloose: function (e) {
    var that = this
    that.data.ego[e.currentTarget.id].is_check=!that.data.ego[e.currentTarget.id].is_check
    this.setData({
      index: e.currentTarget.id,
      ego:that.data.ego
    })

    console.log(e.currentTarget.id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var phone = wx.getStorageSync('phone');
    if (phone) {
      this.setData({
        phone: phone,
      });
    }
    this.setData({
      tally_id: options.title,
    });
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