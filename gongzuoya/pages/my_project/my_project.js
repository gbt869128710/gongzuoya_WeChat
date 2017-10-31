// pages/my_project/my_project.js
const app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my: util.my,
  
  },
  //开始时间
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  //结束时间
  bindDatetime: function (e) {
    this.setData({
      datetime: e.detail.value
    })
  },
  //保存
  formSubmit: function (e) {
    console.log(e.detail.value)
    var data = e.detail.value
    var telRule = /^1[3|4|5|7|8]\d{9}$/, emailRule = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (data.name == '请输入') {
      this.showMessage('请输入项目名称')
    } else if (data.job == '请输入') {
      this.showMessage('请选择项目职务')
    } else if (data.date == '请选择') {
      this.showMessage('请选择开始时间')
    } else if (data.datetime == '请选择') {
      this.showMessage('请选择结束时间')
    } else {
      wx.navigateBack({
        delta: 1
      })
    }
  },
  showMessage: function (text) {
    var that = this
    that.setData({
      showMessage: true,
      messageContent: text
    })
    setTimeout(function () {
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
    console.log(options.show)
    var phone = wx.getStorageSync('phone');
    if (phone) {
      this.setData({
        phone: phone,
      });
    }
    this.setData({
      project_id: options.title,
      show: options.show
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