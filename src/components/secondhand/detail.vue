<template>
  <div>
    <card>
      <img slot="header" :src="results.imgurl" style="width:100%;display:block;">
      <div slot="content" class="card-padding">
        <h3>{{results.name}}</h3>
        <div class="secondhan_price">￥{{results.price}}</div>
      </div>
    </card>
    <card :header="{title:'商品描述'}">
      <p slot="content" class="card-padding">{{results.desc}}</p>
    </card>
    <group slot="content" title="联系方式">
      <cell title="地址" :value="results.address"></cell>
      <cell title="电话"><a href="tel:">{{results.phone}}</a></cell>
    </group>
  </div>
</template>
<script type="text/javascript">
import {
  Group,
  Cell,
  Card
} from 'vux'
export default {
  name: 'SendhandDetail',
  components: {
    Group,
    Cell,
    Card
  },
  data() {
    return {
      results: {}
    }
  },
  mounted() {
    let that = this
    let id = 'id=' + this.$route.params.id
    this.$http.post('http://api.com/index.php/home/Secondhand/getDetail/',
      id
    )
      .then(function(response) {
        that.results = response.data
      })
  }
}
</script>
<style type="text/css">
.card-padding {
  padding: 10px;
}
</style>
