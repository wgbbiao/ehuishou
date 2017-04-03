<template>
  <div>
    <group title="预约列表">
      <cell v-for="order in orders" :title="order.date +'的预约'" is-link :value="isFinish(order.is_finish)" :key="order.id"></cell>
    </group>

    <box gap="10px 30px">
      <x-button type="primary" action-type="button" @click.native="go('/trash/order')">继续预约</x-button>
    </box>
  </div>
</template>
<script type="text/javascript">
import {
  Group,
  Cell,
  XButton,
  Box
} from 'vux'
export default {
  name: 'UserOrderList',
  components: {
    Group,
    Cell,
    XButton,
    Box
  },
  data: function() {
    return {
      orders: [{
        date: '2017-04-01',
        is_finish: true,
        id: 1
      }, {
        date: '2017-04-02',
        is_finish: false,
        id: 2
      }, {
        date: '2017-04-03',
        is_finish: true,
        id: 3
      }, {
        date: '2017-04-04',
        is_finish: false,
        id: 4
      }]
    }
  },
  methods: {
    isFinish(bl) {
      return bl ? '过期' : '进行中'
    },
    go(name) {
      console.log(name)
      this.$router.push(name)
    }
  }
}

</script>

