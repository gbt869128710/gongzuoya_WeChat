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
    
  },
  go: function (e) {
    var that = this
    console.log(that.data.inputValue)
    app.ego_=that.data.inputValue
    wx.navigateBack({
      delta: 1
    })
  },
  back: function (e) {
    var that = this
    wx.navigateBack({
      delta: 1
    })
  },
  bindKeyfocus: function (e) {
    this.setData({
      show: true,
    })
  },
  bindKeyInput: function (e) {
    var arr=[],
    arr1=[],
    arr2=[]
    console.log(e.detail.value)
    arr2.push(e.detail.value)
    this.setData({
      inputValue: arr2,
    })
  },
   cloose: function (e) {
    var arr=[],
    arr1=[],
    arr2=[]
    var that = this
    that.data.ego[e.currentTarget.id].is_check=!that.data.ego[e.currentTarget.id].is_check
    
    if(that.data.is_check_length>2){
      wx.showModal({
        title: '标签最多有3个',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return false;
    }
    for(var i in that.data.ego){ 
      arr.push(that.data.ego[i].is_check)
    }
    for(var j in arr){ 
      if(arr[j]==true){
        arr1.push(1)
        arr2.push(that.data.ego[j].name)
      }
    }
    this.setData({
      index: e.currentTarget.id,
      ego:that.data.ego,
      inputValue: arr2,
      is_check_length:arr1.length
    })
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