/**
 * 此文件管理项目所有接口
 */
import {get, post, put, del} from './network';

/**
 * 服务器根域名
 * 试玩更多接口看这里
 * http://jsonplaceholder.typicode.com/
 * @type {string}
 */
export const ghostURL = 'https://iiong.com' // 网站根域名
export const APIRoot = ghostURL + '/ghost/api/v0.1'; // 接口
export const clientId = 'ghost-frontend'; // 认证参数类型
export const clientSecret = '10ca114163ab'; // 认证参数

/**
 * 获取文章列表页
 */
export const getPostsList = (page) => get(`${APIRoot}/posts`,{
    limit: 3, // 一页显示的数量
    page: page, // 当前页码
    client_id: clientId,
    client_secret: clientSecret
});

/**
 * 获取文章详细页
 */
export const getPostsDetail = (id) => get(`${APIRoot}/posts/${id}`,{
    client_id: clientId,
    client_secret: clientSecret
});