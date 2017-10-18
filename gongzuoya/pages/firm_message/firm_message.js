// pages/firm_message/firm_message.js
const app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
	max_height:3,
    array:util.firm,
    job:util.job,
    interview:util.interview,
    show:true,
	  showh:true,
    homepage:true,
    h:"h",
    referral: ["公司主页", "校招职位"],
    tabid:0,
	  tabidh:'a',
    tabtrue: true,
    city:"",
    cityid:null,
	scrollTop1:0,
    hot:"",
    actionSheetHidden: true,
    picture:["../../images/logo2.png","../../images/logo1.png"],
    image_ewm:[]
  },
 
  scroll: function(e) {
	  console.log(e.detail.scrollTop)
	 var that = this,
	 scrollTop1=that.data.scrollTop;
    this.setData({
      scrollTop1: e.detail.scrollTop,
    })
  },
  //展开/收起
  bindViewbottom: function (e) {
    this.setData({    
      show:!this.data.show,
    })
  },
  bindViewbottomh: function (e) {
    this.setData({    
      showh:!this.data.showh,
      tabidh:e.currentTarget.id
    })
  },
  //点赞
  bindshow: function () {
    this.setData({
      homepage: !this.data.homepage
    })
  },
  //点击标签
  tapName: function (res) {
   this.setData({
      scrollTop:401,
    })
    this.setData({
      tabid:res.currentTarget.id
    })
  },
  tapshow: function () {
    this.setData({
      tabtrue: !this.data.tabtrue
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
 //预览图
  ppt: function (e) {
    console.log(e)
       var that = this,
    //获取当前图片的下表
        index = e.currentTarget.dataset.index,
        //数据源
        pictures =that.data.array[that.data.title].ppt;
    wx.previewImage({
    //当前显示下表
      current: pictures[index],
      //数据源
      urls: pictures
    })
   },
  //  生成朋友圈分享图
   friend: function (e) {
       var that = this
    var context = wx.createCanvasContext('myCanvas');
    context.drawImage(that.data.array[that.data.title].code[0], 190,145, 370,370)
    context.drawImage(that.data.picture[0],0, 0,750, 938)
    context.setTextAlign('center')
    context.setFillStyle("#ffffff")
    context.setFontSize(60)
     context.fillText(that.data.array[that.data.title].name, 375,590)
    context.draw()
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 750,
      height: 938,
      destWidth: 750,
      destHeight: 938,
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
    context.drawImage(that.data.array[that.data.title].code[0], 375,32, 220,220)
    context.drawImage(that.data.picture[1],0, 0,623, 323)
    context.setTextAlign('left')
    context.setFillStyle("#000000")
    context.setFontSize(36)
     context.fillText(that.data.array[that.data.title].name, 62,70)
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
      current: that.data.array[that.data.title].code[0],
      //数据源
      urls: that.data.array[that.data.title].code
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
      name:that.data.array[that.data.title].land[that.data.cityid].site+that.data.array[that.data.title].land[that.data.cityid].site_city,
      latitude: that.data.array[that.data.title].land[that.data.cityid].site_land[1],
      longitude: that.data.array[that.data.title].land[that.data.cityid].site_land[0],
      scale: 28
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function(options) { 
    var scene = decodeURIComponent(options.scene)
    var that =this
    // function drawCanvas(that){
    //   var context = wx.createCanvasContext('myCanvas');
    //   var pixelRatio = 2;
    //   context.setFillStyle("#ffffff")
    //   context.fillRect(0,0,that.data.windowWidth,that.data.windowHeight)
    //   context.drawImage(that.data.picture[0],0, 0,1080 / pixelRatio, 1350 / pixelRatio)
    //   context.stroke()
    //   context.draw()
    //   var cont = wx.createCanvasContext('myyard');
    //   cont.fillRect(0,0,250,250)
    //   cont.drawImage(that.data.array[that.data.title].code[0], 0, 0, 250,250)
    //   cont.arc(100, 75, 50, 0, 2 * Math.PI)
    //   cont.setTextAlign('center')
    //   cont.setFillStyle("#ffffff")
    //   cont.setTextBaseline("middle")
    //   cont.setFontSize(36)
    //   cont.fillText(that.data.array[that.data.title].name, 125,290)
    //   wx.drawCanvas({
    //     canvasId:'myyard',
    //     actions:cont.getActions(),
    //   })
    // }
    // console.log(that.data.windowWidth)
    //
    // wx.downloadFile({
    //   url: 'https://example.com/audio/123', //仅为示例，并非真实的资源
    //   success: function(res) {
    //     wx.playVoice({
    //       filePath: res.tempFilePath
    //     })
    //   }
    // })
    // const downloadTask = wx.downloadFile({
    //     url:that.data.imgUrl, //仅为示例，并非真实的资源
    //     success: function(res) {
    //         that.setData({
    //           medalImgPath:res.tempFilePath
    //         })
    //     }
    // })
    // const downloadTask2 = wx.downloadFile({
    //     url:'https://example.com/audio/123', //仅为示例，并非真实的资源
    //     success: function(res) {
    //         that.setData({
    //           bgImgPath:res.tempFilePath
    //         })
    //         drawCanvas(that);
    //     }
    // })


	  wx.getSystemInfo({
      success: function (res) {
        that.setData({
          pixelRatio:res.pixelRatio,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })

      },
    })

    this.setData({    
      title: options.title,
      hot:this.data.array[options.title].hot+1
    }) 
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
// console.log(userInfo)
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