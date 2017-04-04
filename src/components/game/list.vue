<template>
  <div>
    <panel header="游戏列表" :list="gamelist" type="1"></panel>
  </div>
</template>
<script type="text/javascript">
import {
  Panel,
  Tab,
  TabItem
} from 'vux'
export default {
  name: 'NewsList',
  components: {
    Panel,
    Tab,
    TabItem
  },
  data: function() {
    return {
      'gamelist': [{
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
  }
}

</script>

