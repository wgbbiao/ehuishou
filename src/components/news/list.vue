<template>
  <div>
    <tab>
      <tab-item selected>文章分类1</tab-item>
      <tab-item>文章分类2</tab-item>
      <tab-item>文章分类3</tab-item>
    </tab>
    <panel header="图文新闻列表" :list="newslist" type="1"></panel>
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
      'newslist': [{
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/news/detail/1'
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/news/detail/1'
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/news/detail/1'
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/news/detail/1'
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/news/detail/1'
      }, {
        title: '中在在夫有枯霜地',
        desc: '中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.',
        src: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        url: '/news/detail/1'
      }]
    }
  }
}

</script>

