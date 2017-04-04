<template>
  <div>
    <box gap="10px 10px">
      <group-title>积分兑换商品类型</group-title>
      <grid>
        <grid-item link="/shop/list?type=1">
          <span slot="icon" class="iconfont icon-huishouchexian" style="font-size:30px;"></span>
          <span slot="label">优惠券</span>
        </grid-item>
        <grid-item :link="{ path: '/shop/list?type=2'}">
          <span slot="icon" class="iconfont icon-huishouchexian" style="font-size:30px;"></span>
          <span slot="label">电影票</span>
        </grid-item>
        <grid-item link="/shop/list?type=3">
          <span slot="icon" class="iconfont icon-huishouchexian" style="font-size:30px;"></span>
          <span slot="label">电话卡</span>
        </grid-item>
        <grid-item link="/shop/list?type=4">
          <span slot="icon" class="iconfont icon-huishouchexian" style="font-size:30px;"></span>
          <span slot="label">日用品</span>
        </grid-item>
        <grid-item :link="{ path: '/shop/list?type=5'}">
          <span slot="icon" class="iconfont icon-huishouchexian" style="font-size:30px;"></span>
          <span slot="label">其它</span>
        </grid-item>
      </grid>
    </box>
  </div>
</template>
<script type="text/javascript">
import {
  Box,
  Panel,
  Flexbox,
  FlexboxItem,
  Grid,
  GridItem,
  GroupTitle
} from 'vux'
export default {
  name: 'ShopIndex',
  components: {
    Box,
    Panel,
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem,
    GroupTitle
  }
}

</script>

