// 引入ajax模块
import ajax from './ajax'

//使用代理
// const prefix = '/http://m.you.163.com'
const prefix = '/api'
// 请求mock数据

// 请求首页数据
export const reqHomePageData = () => ajax('/');

// 请求分类列表数据
export const reqCateList = () => ajax('/category');

//请求识物的tab数据
export const reqTabs = () => ajax(`${prefix}/topic/v1/find/getTabs.json`)

//请求识物的推荐数据
export const reqRecommendData = () =>ajax(`${prefix}/topic/v1/find/recManual.json`)

//请求识物的自动推荐数据
export const reqAutoData = () =>ajax(`${prefix}/topic/v1/find/recAuto.json`)


