import FooterGuide from '../components/FooterGuide/FooterGuide'
import Cart from '../pages/Cart/Cart'
import Cate from '../pages/Cate/Cate'
import CateList from '../pages/Cate/CateList'
import Find from '../pages/Find/Find'
import Tab from '../pages/Find/Tab'
import HomePage from '../pages/HomePage/HomePage'
import Personal from '../pages/Personal/Personal'
import Search from '../pages/Search/Search'
import Login_iphone from '../pages/Personal/Login_iphone'
import Login_email from '../pages/Personal/Login_email'


export default [
  {
    path: '/footerGuide',
    component: FooterGuide,
    meta: {
      showFoot: true
    }
  },
  {
    path:'/search',
    component:Search
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      showFoot: true
    }
  },
  {
    path: '/cate',
    component: Cate,
    redirect:'./cate/cateList',
    meta: {
      showFoot: true
    },
    children:[
      {
        path:'/cate/cateList',
        component:CateList,
        meta: {
          showFoot: true
        },
      }
    ]
  },
  {
    path: '/',
    component: HomePage,
    meta: {
      showFoot: true
    }
  },
  {
    path: '/personal',
    component: Personal,
    children:[
      {
        path:'/personal/iphone',
        component:Login_iphone,
        // meta: {
        //   showFoot: true
        // },
      },
      {
        path:'/personal/email',
        component:Login_email
      }
    ]
  },
  {
    path: '/find',
    component: Find,

    redirect:'/find/tab/id',
    meta: {
      showFoot: true
    },
    children: [
      {
        path:'/find/tab/:id',
        component:Tab,
        meta: {
          showFoot: true
        },
      }
    ]
  }

]


