<template>
  <div>
    <div class="news-header">
      <h1>中在在夫有枯霜地</h1>
      <div>发布时间：2017-09-09</div>
    </div>
    <box gap="10px 10px">
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
      <p>中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地,中在在夫有枯霜地.</p>
    </box>
    <group title="相关文章">
      <cell v-for="arc in xiangguan" :title="arc.title" is-link :link="'/news/detail/'+arc.id" :key="arc.id"></cell>
    </group>
  </div>
</template>
<script type="text/javascript">
import {
  Cell,
  Box,
  Divider,
  Group
} from 'vux'
export default {
  name: 'NewsDetail',
  components: {
    Cell,
    Box,
    Divider,
    Group
  },
  data: function() {
    return {
      xiangguan: [{
        id: '1',
        title: '2中在在夫有枯霜地'
      }, {
        id: '2',
        title: '3中在在夫有枯霜地'
      }, {
        id: '3',
        title: '4中在在夫有枯霜地'
      }, {
        id: '4',
        title: '5中在在夫有枯霜地'
      }, {
        id: '5',
        title: '6中在在夫有枯霜地'
      }]
    }
  }
}

</script>
<style type="text/css">
.news-header {
  border-bottom: 1px solid #BBBBBB;
}

.news-header h1 {
  font-size: 24px;
  text-align: center;
}

.news-header > div {
  padding-left: 20px;
}

</style>

