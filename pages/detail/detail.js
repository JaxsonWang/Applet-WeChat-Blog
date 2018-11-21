//获取应用实例
const app = getApp()
const {getPostsDetail} = require('../../utils/service')


Page({
   // 初始化数据
   data: {
    desc: { image: '/images/index.png', text: '永远年轻，永远热泪盈眶' },
    postsDetail: {},
    postsDetailCreatedTime: ''
  },
  // 页面加载
  onLoad: function(option) {
    const self = this
    const postID = option.id

    getPostsDetail(postID).then(data => {
      self.setData({
        postsDetail: data.posts[0]
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
})
