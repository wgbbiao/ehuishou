<template>
  <group title="添加新回收地址">
    <selector title="所在地区" :options="areas"></selector>
    <selector title="所在小区" :options="xiaoqu"></selector>
    <x-input title="电话"></x-input>
    <x-input title="姓名"></x-input>
    <box gap="10px 30px">
      <x-button type="primary">开始预约</x-button>
    </box>
  </group>
</template>
<script type="text/javascript">
import {
  Selector,
  Group,
  XInput,
  XButton,
  Box
} from 'vux'
export default {
  name: 'UserAddAddr',
  components: {
    Selector,
    Group,
    XInput,
    XButton,
    Box
  },
  data: function() {
    return {
      areas: [{
        key: '123',
        value: '123'
      }],
      xiaoqu: [{
        key: '123',
        value: '123'
      }]
    }
  }
}

</script>

