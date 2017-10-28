// pages/header/header.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:["上海","南京","北京"],
    index:0,
    show:true,
    referral: ["产品", "设计", "运营", "Java", "iOS", "Android", "运营", "设计", "运营", "设计", "运营", "设计", "运营"],
  },
  cloose: function (res) {
    this.setData({
      inputValue: this.data.referral[res.currentTarget.id],
      show:false,
    })
  },
  changeIndex: function (e) {
    this.setData({ 
      index: e.detail.value 
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value,
      show:true,
    })
  },
  go: function (e) {
    var that=this
    console.log(that.data.inputValue)
    wx.navigateBack({
      url: '../my_intension/my_intension'
    })
    app.inputValue=that.data.inputValue
  },
  back: function (e) {
    var that=this
    wx.navigateBack({
      url: '../my_intension/my_intension'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title
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