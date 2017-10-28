// pages/job_message/job_message.js
const app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    job:util.job,
    firm:util.firm,
    actionSheetHidden: true,
    showshou:true,
    showshoutext:false,
    picture:["../../images/logo22.png","../../images/logo11.png"],
    image_ewm:[]
  },
  //事件处理函数
  bindViewTap: function() {
    var that = this
    wx.navigateTo({
      url: '../list/list?title='+that.data.job[that.data.title].job
    })
  },
  //分享
  actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },
  //收藏
  bindtapshowshou: function(e) {
    var that=this
    this.setData({
      showshou: !this.data.showshou,
      showshoutext: !this.data.showshoutext
    })
    setTimeout(function(){
      that.setData({
        showshoutext: !that.data.showshoutext
      })
    },1000)
  },
  //投递简历
  bindtapsend: function(e) {
    wx.showActionSheet({
      itemList: ['使用附件简历投递（默认）', '使用在线简历投递'],
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  },
  //  生成朋友圈分享图
   friend: function (e) {
    var that = this
    var context = wx.createCanvasContext('myCanvas');
    context.drawImage(that.data.firm[that.data.title].code[0], 190,270, 370,370)
    context.drawImage(that.data.picture[0],0, 0,750, 1227)
    context.setTextAlign('center')
    context.setFillStyle("#ffffff")
    context.setFontSize(60)
    context.fillText(that.data.firm[that.data.title].name, 375,120)
    context.setTextAlign('center')
    context.setFillStyle("#999999")
    context.setFontSize(30)
    context.fillText(that.data.job[that.data.title].city+" | "+that.data.job[that.data.title].time+" | "+that.data.job[that.data.title].record+" | "+that.data.job[that.data.title].jobs, 375,800)
    context.setTextAlign('center')
    context.setFillStyle("#000000")
    context.setFontSize(40)
    context.fillText(that.data.job[that.data.title].job+"  "+that.data.job[that.data.title].money, 375,720)
    // context.setTextAlign('right')
    // context.setFillStyle("#ff0000")
    // context.setFontSize(40)
    // context.fillText(that.data.job[that.data.title].money, 650,720)
    context.draw()
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 750,
      height: 1227,
      destWidth: 750,
      destHeight: 1227,
      canvasId: 'myCanvas',
     success: function(res) {
       wx.previewImage({
        //当前显示下表
        current: [res.tempFilePath][0],
        //数据源
        urls: [res.tempFilePath],
        })
      } 
    })
     
   },
  //  生成公众号文章分享图
   public: function (e) {
       var that = this
       var context = wx.createCanvasContext('myCanvas-two');
    context.drawImage(that.data.firm[that.data.title].code[0], 410,90, 200,200)
    context.drawImage(that.data.picture[1],0, 0,623, 323)
    context.setTextAlign('left')
    context.setFillStyle("#000000")
    context.setFontSize(36)
     context.fillText(that.data.firm[that.data.title].name, 30,70)
     context.setTextAlign('right')
    context.setFillStyle("#ff0000")
    context.setFontSize(36)
     context.fillText(that.data.job[that.data.title].money, 600,70)
    context.setTextAlign('left')
     context.setFillStyle("#999999")
    context.setFontSize(30)
    context.fillText(that.data.job[that.data.title].city+" | "+that.data.job[that.data.title].time+" | "+that.data.job[that.data.title].record+" | "+that.data.job[that.data.title].jobs, 30,120)
    context.draw()
    //导出图片
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 623,
      height: 323,
      destWidth: 623,
      destHeight: 323,
      canvasId: 'myCanvas-two',
      success: function(res) {
        wx.previewImage({
        //当前显示下表
        current: [res.tempFilePath][0],
        //数据源
        urls: [res.tempFilePath],
        })
      } 
    })
     
   },
   //  生成二维码
   two: function (e) {
    console.log(e)
       var that = this,
    //获取当前图片的下表
        index = e.currentTarget.dataset.index;
        //数据源
    wx.previewImage({
    //当前显示下表
      current: that.data.firm[that.data.title].code[0],
      //数据源
      urls: that.data.firm[that.data.title].code
    })
   },
   //地图
  land: function (e) {
    var that =this
    this.setData({
      cityid:e.currentTarget.id,
    })
    
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
    wx.openLocation({
      name:that.data.firm[that.data.title].land[that.data.cityid].site+that.data.firm[that.data.title].land[that.data.cityid].site_city,
      latitude: that.data.firm[that.data.title].land[that.data.cityid].site_land[1],
      longitude: that.data.firm[that.data.title].land[that.data.cityid].site_land[0],
      scale: 28
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({    
      title: options.title
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