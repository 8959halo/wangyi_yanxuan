import FooterGuide from '../components/FooterGuide/FooterGuide'
import Cart from '../pages/Cart/Cart'
import Cate from '../pages/Cate/Cate'
import CateList from '../pages/Cate/CateList'
import Find from '../pages/Find/Find'
import HomePage from '../pages/HomePage/HomePage'
import Personal from '../pages/Personal/Personal'


export default [
  {
    path: '/footerGuide',
    component: FooterGuide,
    meta: {
      showFoot: true
    }
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
    meta: {
      showFoot: true
    }
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
  },
  {
    path: '/find',
    component: Find,
    meta: {
      showFoot: true
    }
  }

]


