//index.js
//获取应用实例
var app = getApp()
var hitCount = 0;
Page({
  data: {
    count: hitCount,
  },
  //事件处理函数
  bindViewTap: function() {
    hitCount ++;
    this.setData({
      count: hitCount,
    })
  },
  //事件处理函数
  bindViewTap2: function() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  onLoad: function () {
  }
})
