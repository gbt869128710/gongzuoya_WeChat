// pages/my_intension/my_intension.js
const app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my: util.my,

  },
  //期望城市
  city: function (e) {
    wx.navigateTo({
      url: '../city/city'
    })
  },
  //期望月薪
  money: function (e) {
    this.setData({
      money_number: e.detail.value
    })
  },
  //保存
  formSubmit: function (e) {
    console.log(e.detail.value)
    var data = e.detail.value
    var telRule = /^1[3|4|5|7|8]\d{9}$/, emailRule = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (data.city == '请选择') {
      this.showMessage('请选择期望城市')
    } else if (data.job == '请选择') {
      this.showMessage('请选择期望职业')
    } else if (data.trade == '请选择') {
      this.showMessage('请选择职位类型')
    } else if (data.money == '请选择') {
      this.showMessage('请选择期望月薪')
    } else {
      wx.navigateBack({
        delta: 1
      })
    }
  },
  showMessage: function(text) {
    var that = this
      console.log(this.data.showMessage)
    that.setData({
      showMessage: true,
      messageContent: text
    })
    setTimeout(function(){
      that.setData({
        showMessage: false,
        messageContent: ''
      })
    }, 3000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var phone = wx.getStorageSync('phone');
    var cityid = getApp().cityid;
    var tradeid = getApp().tradeid;
    // console.log(options.currentTarget.id);
    if (phone) {
      this.setData({
        phone: phone,
      });
    }
    this.setData({
      tradeid: tradeid,
      cityid: cityid,
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
  onShow: function (e) {
    var cityid = getApp().cityid;
    var tradeid = getApp().tradeid;
    var inputValue = getApp().inputValue;
    this.setData({
      cityid: cityid,
      tradeid: tradeid,
    });
    // this.data.my[e.currentTarget.id].job = inputValue
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