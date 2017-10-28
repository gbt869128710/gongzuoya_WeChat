// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModalStatus:true,
    second: 60,
    selected1:true,
    selected:false,
    get:"点此获取",
    showMessage: false,
    messageContent: ''
  }, 
  getphone: function (e){
        this.setData({
            selected:true,
            selected1:false,
        });
        countdown(this);
    },
    savePersonInfo: function(e) {
      console.log(e.detail.value)
    var data = e.detail.value
    var telRule = /^1[3|4|5|7|8]\d{9}$/, nameRule = /^[\u2E80-\u9FFF]+$/
    if (data.tel == '') {
      this.showMessage('请输入手机号码')
    } else if (! telRule.test(data.tel)) {
      this.showMessage('手机号码格式不正确')
    } else if (data.code == '') {
      this.showMessage('请输入验证码')
    } else {
      this.showMessage('绑定成功')
      if(data.tel && data.code){
        // 同步方式存储表单数据
        wx.setStorageSync('phone', data.tel);
        wx.setStorageSync('isLogin', true);
      
        //跳转到成功页面
        wx.navigateBack({
          delta: 1
        })
      }
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
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
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
function countdown(that) {
    var second = that.data.second;
    if (second == 0) {
        // console.log("Time Out...");
        that.setData({
            selected:false,
            selected1:true,
            second: 60,
            get:"重新获取"
        });
        return;
    }
    var time = setTimeout(function () {
            that.setData({
                second: second - 1,
            });
            countdown(that);
        }
        , 1000)
}