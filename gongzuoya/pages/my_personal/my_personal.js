// pages/my_personal/my_personal.js
const app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my:util.my,
    // sex_number:1,
    // record_number:1,
    // time_number:1,
    // cityid:1,
  },
  //目前状态
  sex:function(){  
    var that=this
    wx.showActionSheet({
      itemList: ["男","女"],
      success: function(res) {
        that.setData({
          sex_number: res.tapIndex,
        })
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  },
  //出生年月
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  //最高学历
  record:function(){  
    var that=this
    wx.showActionSheet({
      itemList: ['专科','本科','硕士','博士'],
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
   //工作年限
  time: function(e) {
    this.setData({
      time_number: e.detail.value
    })
  },
   //所在城市
  city: function(e) {
    wx.navigateTo({
      url: '../city/city'
    })
  },
  //当前状态
  now:function(){  
    var that=this
    wx.showActionSheet({
      itemList: ['等待实习', '已实习想要更好的', '努力找工作ing'],
      success: function(res) {
        that.setData({
          now_number: res.tapIndex,
        })
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  },
  //一句话介绍
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  //保存
  formSubmit: function (e) {
    console.log(e.detail.value)
    var data = e.detail.value
    var telRule = /^1[3|4|5|7|8]\d{9}$/, emailRule = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (data.name == '') {
      this.showMessage('请输入姓名')
    } else if (data.sex == '请选择') {
      this.showMessage('请选择性别')
    } else if (data.date == '请选择') {
      this.showMessage('请选择出生年月')
    } else if (data.record == '请选择') {
      this.showMessage('请选择最高学历')
    } else if (data.time == '请选择') {
      this.showMessage('请选择工作年限')
    } else if (data.tel == '') {
      this.showMessage('请输入手机号码')
    } else if (! telRule.test(data.tel)) {
      this.showMessage('手机号码格式不正确')
    } else if (data.email == '') {
      this.showMessage('请输入联系邮箱')
    } else if (! emailRule.test(data.email)) {
      this.showMessage('邮箱格式不正确')
    } else if (data.city == '请选择') {
      this.showMessage('请输入所在城市')
    } else if (data.now == '请选择') {
      this.showMessage('请输入当前状态')
    } else if (data.referral == '') {
      this.showMessage('一句话介绍不为空')
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
    //获取本地数据
    var phone = wx.getStorageSync('phone');
    var cityid=getApp().cityid;
    console.log(cityid);
    if(phone){
    this.setData({
      phone: phone,
      cityid:cityid
    });
    }
    // console.log(options.title)
    // this.setData({    
    //   title: options.title
    // })
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
    var cityid=getApp().cityid;
    this.setData({
      cityid:cityid
    });
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