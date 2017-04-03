<template>
  <div>
    <box gap="10px 30px" style="font-size:20px;">
      放一些使用说明或者流程。
    </box>
    <group title="预约回收">
      <selector title="预约地址" v-model="addr" :options="addrs"></selector>
      <datetime title="预约时间" start-date="2017-04-09" end-date="2017-04-15" placeholder="选择预约时间"></datetime>
      <box gap="10px 30px">
        <x-button type="primary">开始预约</x-button>
      </box>
    </group>

    <group>
      <cell title="地址列表" is-link link="/user/address"></cell>
      <cell title="添加新地址" is-link link="/user/address/add"></cell>
      <cell title="查看我的预约" is-link link="/user/order_list"></cell>
    </group>
  </div>
</template>
<script>
import {
  Icon,
  Box,
  Cell,
  Group,
  Datetime,
  Selector,
  XButton
} from 'vux'
export default {
  name: 'trash-order',
  components: {
    Icon,
    Box,
    Cell,
    Group,
    Datetime,
    Selector,
    XButton
  },
  data: function() {
    return {
      addr: '123',
      addrs: [{
        key: '123',
        value: 'sd1'
      }, {
        key: '123',
        value: 'sd3fsd'
      }, {
        key: '123',
        value: 'sd4fsd'
      }, {
        key: '-1',
        value: '添加新地址'
      }]
    }
  }
}

</script>

