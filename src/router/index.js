import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import HomeIndex from '@/components/index'
import TrashOrder from '@/components/order'
import UserAddress from '@/components/user/address'
import UserAddAddr from '@/components/user/add_addr'
import UserOrderList from '@/components/user/order_list'
import SecondHandList from '@/components/secondhand/list'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HomeIndex',
    component: HomeIndex
  }, {
    path: '/trash/order',
    name: 'TrashOrder',
    component: TrashOrder
  }, {
    path: '/user/address',
    name: 'UserAddress',
    component: UserAddress
  }, {
    path: '/user/address/add',
    name: 'UserAddAddr',
    component: UserAddAddr
  }, {
    path: '/user/order_list',
    name: 'UserOrderList',
    component: UserOrderList
  }, {
    path: '/secondhand/list',
    name: 'SecondHandList',
    component: SecondHandList
  }]
})
