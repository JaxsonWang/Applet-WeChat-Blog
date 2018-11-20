//获取应用实例
const app = getApp()

Page({
  data: {
    desc: { image: '/images/index.png', text: '永远年轻，永远热泪盈眶' },
  },
  //事件处理函数
  toDetail: function() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
})
