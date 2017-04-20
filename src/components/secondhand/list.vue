<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd">二手交易列表</div>
    <div class="weui-panel__bd">
      <router-link :to="{ name: 'SecondHandDetail', params: { id: item.id }}" v-for="item in results" :key="item.id" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd" v-if="item.imgurl">
          <img class="weui-media-box__thumb" :src="item.imgurl" alt="">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">{{item.name}}</h4>
          <p class="weui-media-box__desc">{{item.address}}</p>
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
  data() {
    return {
      results: {}
    }
  },
  mounted() {
    let that = this
    this.$http.get('http://api.com/index.php/home/Secondhand/index')
      .then(function(response) {
        console.log(response)
        that.results = response.data
      })
  }
}
</script>
<style type="text/css">
.secondhan_price {
  color: red;
}
</style>
