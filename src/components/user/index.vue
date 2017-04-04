<template>
  <div>
    <flexbox class="user">
      <flexbox-item :span="4">
        <img src="//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg" class="user_avatar">
      </flexbox-item>
      <flexbox-item>武广彪</flexbox-item>
    </flexbox>
    <flexbox class="user-info">
      <flexbox-item style="margin-left:0" :span="1/3" class="vux-1px-t vux-1px-r">
        <span>13</span>积分
      </flexbox-item>
      <flexbox-item style="margin-left:0" :span="1/3" class="vux-1px-t vux-1px-r">
        <span>234</span>投放数量
      </flexbox-item>
      <flexbox-item style="margin-left:0" :span="1/3" class="vux-1px-t">
        <span>23</span>放点啥
      </flexbox-item>
    </flexbox>
    <group title="订单">
      <cell title="订单列表" is-link link="/user/order_list"></cell>
      <cell title="待付款" is-link></cell>
      <cell title="待收货" is-link></cell>
      <cell title="我的预约" is-link link="/user/subscribe_list"></cell>
    </group>
    <group title="其它">
      <cell title="积分列表" is-link></cell>
      <cell title="投放列表" is-link></cell>
      <cell title="地址列表" is-link link="/user/address"></cell>
    </group>
  </div>
</template>
<script type="text/javascript">
import {
  Flexbox,
  FlexboxItem,
  Box,
  Group,
  Cell
} from 'vux'
export default {
  name: 'UserIndex',
  components: {
    Flexbox,
    FlexboxItem,
    Box,
    Group,
    Cell
  }
}

</script>

<style type="text/css">
.user {
  background: #00CC33;
}

.user-info {
  background: #009933;
  text-align: center;
  color: #fff;
}

.user-info span {
  display: block;
  color: #99FF00;
}

.user_avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 15px;
}

</style>

