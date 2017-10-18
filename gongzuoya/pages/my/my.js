// pages/doufu/doufu.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[{
      url:"",
      src:"../../images/001.png",
      message:"简历"
    },{
      url:"",
      src:"../../images/002.png",
      message:"投递记录"
    },{
      url:"",
      src:"../../images/003.png",
      message:"职位收藏"
    },{
      url:"",
      src:"../../images/004.png",
      message:"意见反馈"
    }],
    userInfo: {},
    intro: "简介",
    showModalStatus:false,
  },
  cover:function(){  
    this.setData({
      showModalStatus:true
    })
  },
  powerDrawer:function(){  
    this.setData({
      showModalStatus:false
    })
  },
  modalcnt:function(){  
      wx.showModal({  
          title: '确认退出账号？',   
          success: function(res) {  
              if (res.confirm) {  
              console.log('用户点击确定')  
              } else if (res.cancel) {  
              console.log('用户点击取消')  
              }  
          }  
      })  
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
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
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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