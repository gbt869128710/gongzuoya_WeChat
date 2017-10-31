// pages/resume/resume.js
const app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my:util.my,
    now_number:1,
    grasp_number:1,
    sex_number:1,
    record_number: 1,
    time_number: 1,
    cityid: 1,
    money_number: 1,
    tradeid:1,
    academy_number: 1,
  },
  //编辑个人信息
  redact:function(){  
    wx.navigateTo({
      url: '../my_personal/my_personal?title='+this.data.phone
    })
  },
  //目前状态
  now:function(){  
    var that=this
    wx.showActionSheet({
      itemList: ['等待实习', '已实习想要更好的', '努力找工作ing'],
      success: function(res) {
        that.setData({
          number: res.tapIndex,
        })
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  },
  
  //预览图
  ppt: function (e) {
    console.log(e)
       var that = this,
    //获取当前图片的下表
        index = e.currentTarget.dataset.index,
        //数据源
        pictures =that.data.my[0].works[0].ppt;
    wx.previewImage({
    //当前显示下表
      current: pictures[index],
      //数据源
      urls: pictures
    })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //获取本地数据
    var phone = wx.getStorageSync('phone');
    var isLogin = wx.getStorageSync('isLogin');
  
    console.log(phone);
    console.log(isLogin);
    if(phone){
    this.setData({phone: phone});
    }
    if(isLogin){
    this.setData({isLogin: isLogin});
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