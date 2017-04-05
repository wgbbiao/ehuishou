<template>
  <div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd" v-html="header"></div>
      <div class="weui-panel__bd">
        <router-link :to="item.url" v-for="item in prolist" :key="item.id" class="weui-media-box weui-media-box_appmsg">
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
  </div>
</template>
<script type="text/javascript">
import {
  Panel
} from 'vux'
export default {
  name: 'ShopList',
  components: {
    Panel
  },
  created: function() {
    this.type = this.$route.query.type
  },
  data: function() {
    return {
      type: 1,
      types: {
        1: '优惠券',
        2: '电影票',
        3: '电话卡',
        4: '日用品',
        5: '其它'
      },
      'prolist': [{
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/shop/detail/1',
        price: 123
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/shop/detail/1',
        price: 123
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/shop/detail/1',
        price: 123
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/shop/detail/1',
        price: 123
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/shop/detail/1',
        price: 123
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/shop/detail/1',
        price: 123
      }]
    }
  },
  computed: {
    header() {
      return this.types[this.type] + '商品列表'
    }
  }
}

</script>

