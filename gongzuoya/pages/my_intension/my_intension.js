// pages/my_intension/my_intension.js
const app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my:util.my,
  
  },
 //期望城市
  city: function(e) {
    wx.navigateTo({
      url: '../city/city'
    })
  },
  //期望城市
  job: function(e) {
    wx.navigateTo({
      url: '../city/city'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var phone = wx.getStorageSync('phone');
    var cityid=getApp().cityid;
    console.log(options.currentTarget.id);
    if(phone){
    this.setData({
      phone: phone,
      cityid:cityid,
    });
    }
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
    var cityid=getApp().cityid;
    var inputValue=getApp().inputValue;
    this.setData({
      cityid:cityid
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