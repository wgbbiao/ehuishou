<template>
  <div>
    <panel :header="header" :list="prolist" type="1"></panel>
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
        url: '/game/detail/1'
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/game/detail/1'
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/game/detail/1'
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/game/detail/1'
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/game/detail/1'
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/game/detail/1'
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

