//获取应用实例
const app = getApp()
const {getPostsList} = require('../../utils/service')

Page({
  // 初始化数据
  data: {
    desc: { image: '/images/index.png', text: '永远年轻，永远热泪盈眶' },
    postList: {},
    postMeta: {}
  },
  // 页面加载
  onLoad: function() {
    const self = this
    // 初始化页面，页码重置为1
    getPostsList('1').then(data => {
      self.setData({
        postList: data.posts,
        postMeta: data.meta.pagination
      })
    })
  },
  // 页面渲染完成
  onReady:function(){
  },
  // 页面显示
  onShow:function(){
  },
  // 页面隐藏
  onHide:function(){
  },
  // 页面关闭
  onUnload:function(){
  },
  // 下拉刷新
  onPullDownRefresh: function() {
    const self = this
    // 显示顶部刷新图标
    wx.showNavigationBarLoading()
    // 刷新页面，页码重置为1
    getPostsList('1').then(data => {
      self.setData({
        postList: data.posts,
        postMeta: data.meta.pagination
      })
      // 隐藏导航栏加载框
      wx.hideNavigationBarLoading();
      // 停止下拉动作
      wx.stopPullDownRefresh();
    })
  },
  // 上拉加载
  onReachBottom: function () {
    const self = this
    // 获取下一页页码
    const nowPageNum = self.data.postMeta.next 
    // 分页加载
    if( nowPageNum !== null ) {
      wx.showLoading({
        title: '正在加载数据中'
      })
      getPostsList(nowPageNum).then(data => {
        const newPostsList = self.data.postList
        const getPostsList = data.posts
        // 遍历合并json
        for (var i = 0; i < getPostsList.length; i++) {
          newPostsList.push(getPostsList[i]);
        }
        self.setData({
          postList: newPostsList,
          postMeta: data.meta.pagination
        })
        // 隐藏加载框
        wx.hideLoading();
      })
    }
  },
  // 详细页跳转
  toDetail: function(event) {
    // 获取点击文章ID
    const getPostID = event.currentTarget.id
    wx.navigateTo({
      url: '../detail/detail?id=' + getPostID
    })
  },
})
