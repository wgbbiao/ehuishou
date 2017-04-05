<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd">二手交易列表</div>
    <div class="weui-panel__bd">
      <router-link :to="item.url" v-for="item in results" :key="item.id" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd" v-if="item.src">
          <img class="weui-media-box__thumb" :src="item.src" alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">{{item.title}}</h4>
          <p class="weui-media-box__desc">{{item.desc}}</p>
          <div class="secondhan_price">￥{{item.price}}</div>
        </div>
      </router-link>
    </div>
  </div>
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

<style type="text/css">
.secondhan_price  {
  color: red;
}

</style>

