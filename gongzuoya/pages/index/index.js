//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: ["全国","常州", "南京", "苏州", "上海", "无锡"],
    index: 0,
    indicatorDots: true,
    autoplay: false,
    referral: [{
      ppt:[{
        data:0,
        name:"职位",
        bind:"Tab",
        href:"../job/job"
      },{
        data:0,
        name:"人才",
        bind:"url",
        href:""
      },{
        data:0,
        name:"拍贤",
        bind:"url",
        href:""
      }]
    },{
      ppt:[{
        data:1,
        name:"兼职",
        bind:"url",
        href:""
      },{
        data:1,
        name:"头条",
        bind:"url",
        href:""
      },{
        data:1,
        name:"两会",
        bind:"url",
        href:""
      }]
    },{
      ppt:[{
        data:2,
        name:"论坛",
        bind:"url",
        href:""
      },{
        data:2,
        name:"公司",
        bind:"url",
        href:"../firm/firm"
      },{
        data:2,
        name:"课程",
        bind:"url",
        href:""
      }]
    }],
    tabid:null,
    tabtrue: false,
    src:"../../images/home_logo.png",
    bottom: [{
      name:"IT、互联网热招职位",
      message: [{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1069",
      jobs:"Java开发"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1045",
      jobs:"UI设计师"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1015",
      jobs:"产品运营"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1009",
      jobs:"软件测试"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1006",
      jobs:"IOS"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=998",
      jobs:"前端开发"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=982",
      jobs:"PHP"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1039",
      jobs:"游戏制作"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1014",
      jobs:"内容运营"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1044",
      jobs:"APP设计师"
    }]
    },{
      name:"财务、金融、银行热招职位",
      message: [{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1227",
      jobs:"财务助理"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1237",
      jobs:"会计"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1250",
      jobs:"理财顾问"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1252",
      jobs:"融资主管"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1255",
      jobs:"担保"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1239",
      jobs:"出纳"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1234",
      jobs:"审计专员"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1250",
      jobs:"理财顾问"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1258",
      jobs:"综合业务专员"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1244",
      jobs:"证券"
    }]
    },{
      name:"教育、培训、法律等热招职位",
      message: [{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1317",
      jobs:"幼教"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1316",
      jobs:"小学教师"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1315",
      jobs:"中学教师"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1320",
      jobs:"家教"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1331",
      jobs:"辅导员"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1326",
      jobs:"培训讲师"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1337",
      jobs:"职业规划师"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1307",
      jobs:"律师助理"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1309",
      jobs:"法务助理"
    },{
      href:"http://nanjing.gongzuoya.com/wap/?c=job&amp;jobin=1330",
      jobs:"招生顾问"
    }]
    }],
  },

  //地区
  changeIndex: function (e) {
    this.setData({ 
      index: e.detail.value 
    })
  },
  //事件处理函数
  
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  go: function (e) {
    var that=this
    wx.navigateTo({
      url: '../list/list?title='+that.data.inputValue
    })
  },
  url: function (e) {
    var that=this
    wx.navigateTo({
      url: that.data.referral[e.currentTarget.dataset.id].ppt[e.currentTarget.id].href
    })
  },
  Tab: function (e) {
    var that=this
    wx.switchTab({
      url: that.data.referral[e.currentTarget.dataset.id].ppt[e.currentTarget.id].href
    })
  },
  //登录
  cover:function(){  
    wx.navigateTo({
      url: '../login/login'
    })
  },
  // powerDrawer:function(){  
  //   this.setData({
  //     showModalStatus:false
  //   })
  // },
  onLoad: function () {
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
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
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})