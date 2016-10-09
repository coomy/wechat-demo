//detail.js
//获取应用实例
var app = getApp()
var toHit = 10;
Page({
  data: {
    count: toHit,
    toastHide: true
  },
  //事件处理函数
  bindViewTap: function() {
      toHit --;
      if (toHit > 0)
      {
          this.setData({
              count: toHit
          })
      }
      else
      {
          wx.navigateBack();
      }
    
  },
  onLoad: function () {
      toHit = 10;
      this.setData({
          count: toHit
      })
  },
  switchChange: function (e){
      console.log('switch 发生 change 事件，携带值为', e.detail.value)
  },
  toastTap: function() {
    this.setData({
      toastHide: false
    })
  },
  toastChange: function() {
    this.setData({
      toastHide: true
    })
  }
})