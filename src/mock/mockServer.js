import Mock from 'mockjs'
import shouye_data from './shouye_data.json'
import classify_data from './fenlei_zhuanqu.json'
import goods_data from './cateList.json'

Mock.mock( '/', {
  code: 0,
  data: goods_data
});
Mock.mock( '/category', {
  code: 0,
  data: classify_data
});

console.log('mockServer');
