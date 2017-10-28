// pages/list/list.js
const app = getApp()
var util = require('../../utils/util');
var area = require('../../utils/area');
var p = 0, c = 0, d = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    job:util.job,
    firm:util.firm,
	  provinceName:[],
    provinceCode: [],
    provinceSelIndex: '',
    cityName: [],
    cityCode: [],
    citySelIndex: '',
    districtName: [],
    districtCode: [],
    districtSelIndex: '',
    showMessage: false,
    messageContent: '',
    showDistpicker: false,
    sort:["位置","职位","类别","排序"],
    showh:false,
    payh:false,
    experienceh:false,
    educationh:false,
    academyh:false, 
    categoryh:false,
    pay:['1K - 3K','3K - 5K','5K - 7K','7K - 9K','9K - 11K','11K - 13K','13K - 15K','15K以上'],
    experience:['实习生','应届生','往届生','无要求'],
    education:['专科','本科','硕士','博士'],
    academy:['985高校','211高校','部属高校','省属高校','一般高校','职业院校','高职院校'],     
    category:['互联网/设计/运营','互联网/设计/运营','建筑/房产/农林','销售/客服/市场','财务/金融/银行','人力资源/行政/管理','教育培训/法律/传媒','能源/化工/医疗/生物','汽车/机械/生产/物流','酒店/旅游/健身/百货','电子信息/通信/服务'],  
    rank:['更新时间','发布时间'],
    rankid:0
  },
  bindViewbottom: function (e) {
    this.setData({   
      showh:false, 
      tabidh:e.currentTarget.id
    })
	  this.distpickerCancel()
  },
  bindViewtop: function (e) {
    this.setData({   
      showh:true,
      tabidh:e.currentTarget.id
    })
  },
  bindViewpay: function (e) {
    this.setData({   
      payh:true, 
      payid:e.currentTarget.id
    })
  },
  bindViewpayh: function (e) {
    this.setData({   
      payh:false, 
      payid:e.currentTarget.id
    })
  },
  bindViewpay: function (e) {
    this.setData({   
      payh:true, 
      payid:e.currentTarget.id
    })
  },
  bindViewpayh: function (e) {
    this.setData({   
      payh:false, 
      payid:e.currentTarget.id
    })
  },
  bindViewexperience: function (e) {
    this.setData({  
      experienceh:true, 
      experienceid:e.currentTarget.id
    })
  },
  bindViewexperienceh: function (e) {
    this.setData({  
      experienceh:false, 
      experienceid:e.currentTarget.id
    })
  },
  bindVieweducation: function (e) {
    this.setData({ 
      educationh:true,  
      educationid:e.currentTarget.id
    })
  },
  bindVieweducationh: function (e) {
    this.setData({ 
      educationh:false,  
      educationid:e.currentTarget.id
    })
  },
  bindViewacademy: function (e) {
    this.setData({   
      academyh:true,  
      academyid:e.currentTarget.id
    })
  },
  bindViewacademyh: function (e) {
    this.setData({   
      academyh:false,  
      academyid:e.currentTarget.id
    })
  },
  bindViewcategory: function (e) {
    this.setData({  
      categoryh:true,   
      categoryid:e.currentTarget.id
    })
  },
  bindViewcategoryh: function (e) {
    this.setData({  
      categoryh:false,   
      categoryid:e.currentTarget.id
    })
  },
  bindViewrank: function (e) {
    this.setData({   
      rankid:e.currentTarget.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    this.setData({    
      title: options.title
    }) 
	
     this.setAreaData()
  },
setAreaData: function(p, c, d){
    var p = p || 0 // provinceSelIndex
    var c = c || 0 // citySelIndex
    var d = d || 0 // districtSelIndex
    // 设置省的数据
    var province = area['100000']
    var provinceName = [];
    var provinceCode = [];
    for (var item in province) {
      provinceName.push(province[item])
      provinceCode.push(item)
    }
    this.setData({
      provinceName: provinceName,
      provinceCode: provinceCode
    })
    // 设置市的数据
    var city = area[provinceCode[p]]
    var cityName = [];
    var cityCode = [];
    for (var item in city) {
      cityName.push(city[item])
      cityCode.push(item)
    }
    this.setData({
      cityName: cityName,
      cityCode: cityCode
    })
    // 设置区的数据
    var district = area[cityCode[c]]
    var districtName = [];
    var districtCode = [];
    for (var item in district) {
      districtName.push(district[item])
      districtCode.push(item)
    }
    this.setData({
      districtName: districtName,
      districtCode: districtCode
    })
  },
  changeArea: function(e) {
    p = e.detail.value[0]
    c = e.detail.value[1]
    d = e.detail.value[2]
    this.setAreaData(p, c, d)
  },
  showDistpicker: function() {
    this.setData({
      showDistpicker: true
    })
  },
  distpickerCancel: function() {
    this.setData({
      showDistpicker: false
    })
  },
  distpickerSure: function() {
    this.setData({
      provinceSelIndex: p,
      citySelIndex: c,
      districtSelIndex: d
    })
    this.distpickerCancel()
  },
  savePersonInfo: function(e) {
    var data = e.detail.value
    var telRule = /^1[3|4|5|7|8]\d{9}$/, nameRule = /^[\u2E80-\u9FFF]+$/
    if (data.name == '') {
      this.showMessage('请输入姓名')
    } else if (! nameRule.test(data.name)) {
      this.showMessage('请输入中文名')
    } else if (data.tel == '') {
      this.showMessage('请输入手机号码')
    } else if (! telRule.test(data.tel)) {
      this.showMessage('手机号码格式不正确')
    } else if (data.province == '') {
      this.showMessage('请选择所在地区')
    } else if (data.city == '') {
      this.showMessage('请选择所在地区')
    } else if (data.district == '') {
      this.showMessage('请选择所在地区')
    } else if (data.address == '') {
      this.showMessage('请输入详细地址')
    } else {
      this.showMessage(' 保存成功')
      console.log(data)
    }
  },
  showMessage: function(text) {
    var that = this
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
// function click(h,f,id){
//   this.setData({   
//     h:f, 
//     id:e.currentTarget.id
//   })
// }