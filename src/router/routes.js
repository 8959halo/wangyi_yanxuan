import FooterGuide from '../components/FooterGuide/FooterGuide'
import Cart from '../pages/Cart/Cart'
import Category from '../pages/Category/Category'
import Find from '../pages/Find/Find'
import HomePage from '../pages/HomePage/HomePage'
import Personal from '../pages/Personal/Personal'


export default [
  {
  path: '/footerGuide',
  component: FooterGuide
},
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/',
    component:HomePage
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/find',
    component:Find
  }

]


