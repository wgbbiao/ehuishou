<template>
  <panel header="二手交易列表" :list="results" type="1"></panel>
</template>
<script type="text/javascript">
import {
  Panel
} from 'vux'
export default {
  name: 'SecondHandList',
  components: {
    Panel
  },
  data: function() {
    return {
      results: [{
        id: 1,
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        title: '8成新IPHONE手机',
        url: '/secondhand/detail/1',
        price: 7712,
        tel: '13466625911',
        desc: '北京市西城区xx小区xx号楼'
      }, {
        id: 2,
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        title: '8成新IPHONE手机',
        url: '/secondhand/detail/2',
        price: 162,
        tel: '13466625911',
        desc: '北京市西城区xx小区xx号楼'
      }, {
        id: 3,
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        title: '8成新IPHONE手机',
        url: '/secondhand/detail/3',
        price: 124,
        tel: '13466625911',
        desc: '北京市西城区xx小区xx号楼'
      }, {
        id: 4,
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        title: '8成新IPHONE手机',
        url: '/secondhand/detail/4',
        price: 112,
        tel: '13466625911',
        desc: '北京市西城区xx小区xx号楼'
      }, {
        id: 5,
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        title: '8成新IPHONE手机',
        url: '/secondhand/detail/5',
        price: 122,
        tel: '13466625911',
        desc: '北京市西城区xx小区xx号楼'
      }]
    }
  }
}

</script>

