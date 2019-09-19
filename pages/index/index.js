const app = getApp();
import {formatTime} from '../../utils/util'

Page({
  data: {
    currentPage: 1, // 当前页码
    pageCount: 0, // 总页数
    postList: [],
    hasData: false,
  },
  /**
   * 页面加载完毕
   */
  onLoad() {
    const self = this;
    self.getPostList(self.data.currentPage);
  },
  /**
   * 上拉加载
   */
  onReachBottom() {
    const self = this;
    if(self.data.currentPage < self.data.pageCount + 1) {
      self.getPostList(self.data.currentPage);
    } else {
      self.setData({
        hasData: true
      })
    }
  },
  /**
   * 获取文章数据
   * @param currentPage 当前页码
   */
  getPostList(currentPage) {
    const self = this;
    // 请求数据
    const url = `${app.apiUrl}/content/posts/`;
    const params = {
      key: app.contentAPIKey,
      limit: 10,
      page: currentPage,
      include: 'tags,authors'
    };
    app.request.requestGetApi(url, params, self, (response, self) => {
      let postsList = response.posts;
      postsList.map(item => {
        return item.published_time = formatTime(new Date(item.published_at))
      });
      self.setData({
        postList: [...self.data.postList, ...postsList],
        pageCount: response.meta.pagination.pages,
        currentPage: ++self.data.currentPage
      });
    }, (response, self) => {
    }, (response, self) => {
    })
  },
  /**
   * 跳转到详细页
   */
  goToDetail(event) {
    const self = this;
    wx.navigateTo({
      url: `../post/post?postID=${event.currentTarget.dataset.postId}`
    })
  }
});
