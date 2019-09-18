const app = getApp();
import {formatTime} from '../../utils/util'

Page({
  data: {
    currentPage: 1,
    postList: null,
  },
  onLoad() {
    const self = this;
    self.getPostList(self.data.currentPage);
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
      let nextPage = 0;
      if(response.meta.pagination.next < response.meta.pagination.pages) {
        nextPage = response.meta.pagination.next;
      }
      self.setData({
        postList: response.posts,
        currentPage: nextPage
      });
    }, (response, self) => {
    }, (response, self) => {
    })
  },
  /**
   * 格式化时间
   * @param date
   * @returns {*}
   */
  getFormatTime(date) {
    console.log(date)
    console.log(formatTime(new Date(date)))
    return formatTime(new Date(date))
  }
});
