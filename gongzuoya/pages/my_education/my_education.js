// pages/my_education/my_education.js
const app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my: util.my,
  
  },
//所属院校
  academy:function(e){  
    this.setData({
      academy_number: e.detail.value
    })
  },
  //毕业年份
  bindDateChange:function(e){  
    this.setData({
      date: e.detail.value
    })
  },
  //学历
  record:function(e){  
    var that=this
    wx.showActionSheet({
      itemList: ['专科', '本科', '硕士', '博士'],
      success: function(res) {
        that.setData({
          record_number: res.tapIndex,
        })
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
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
    console.log(options.title)
    this.setData({
      education_id: options.title,
      show: options.show
    });
  },
  //保存
  formSubmit: function (e) {
    console.log(e.detail.value)
    var data = e.detail.value
    var telRule = /^1[3|4|5|7|8]\d{9}$/, emailRule = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (data.name == '请输入') {
      this.showMessage('请输入学校名称')
    } else if (data.academy == '请选择') {
      this.showMessage('请选择所属院校')
    } else if (data.major == '请输入') {
      this.showMessage('请输入所学专业')
    } else if (data.date == '请选择') {
      this.showMessage('请选择毕业年份')
    } else if (data.record == '请选择') {
      this.showMessage('请选择学历')
    } else {
      wx.navigateBack({
        delta: 1
      })
    }
  },
  showMessage: function (text) {
    var that = this
    console.log(this.data.showMessage)
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