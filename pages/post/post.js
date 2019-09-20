const app = getApp();

Page({
  data: {
    postData: {},
  },
  /**
   * 页面加载
   */
  onLoad(query) {
    this.getPostInfo(query.postID);
  },
  /**
   * 获取文章数据
   */
  getPostInfo(id) {
    const self = this;
    // 请求数据
    const url = `${app.apiUrl}/content/posts/${id}`;
    const params = {
      key: app.contentAPIKey,
      include: 'tags,authors'
    };
    app.request.requestGetApi(url, params, self, (response, self) => {
      self.setData({
        postData: response.posts[0]
      })
    }, (response, self) => {
    }, (response, self) => {
    })
  }
});
