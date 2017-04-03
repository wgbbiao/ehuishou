<template>
  <div>
    <group title="我的地址列表">
      <cell :title="da.name" v-for="(da,key) in addresses" is-link :link="'/user/edit_address/'+da.id" inline-desc="详细地址" :key="da.name"></cell>
    </group>
  </div>
</template>
<script type="text/javascript">
import {
  Cell,
  XHeader,
  Group
} from 'vux'
export default {
  name: 'UserAddressList',
  components: {
    Cell,
    XHeader,
    Group
  },
  data: function() {
    return {
      'addresses': [{
        name: '纳丹堡12',
        id: 1
      }, {
        name: '纳丹堡13',
        id: 2
      }, {
        name: '纳丹堡14',
        id: 3
      }, {
        name: '纳丹堡15',
        id: 4
      }, {
        name: '纳丹堡16',
        id: 5
      }]
    }
  }
}

</script>

