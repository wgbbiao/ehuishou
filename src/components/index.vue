<template>
  <div>
    <swiper :list="list" auto></swiper>
    <flexbox>
      <flexbox-item @click.native="go('home')">
        <div class="cbox-menu">
          <span class="iconfont icon-huishouchexian"></span>
          <br>
          <span class="cname">废品回收</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="cbox-menu">
          <span class="iconfont icon-chouyouyanji col_3"></span>
          <br>
          <span class="cname">家电清洗</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="cbox-menu">
          <span class="iconfont icon-weixiu"></span>
          <br>
          <span class="cname">手机维修</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="cbox-menu">
          <span class="iconfont icon-youpinwangtubiao- col_1"></span>
          <br>
          <span class="cname">窗帘清洗</span>
        </div>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item>
        <div class="cbox-menu">
          <span class="iconfont icon-shop col_2"></span>
          <br>
          <span class="cname">家电回收</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="cbox-menu">
          <span class="iconfont icon-shuma"></span>
          <br>
          <span class="cname">数码回收</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="cbox-menu">
          <span class="iconfont icon-chuwei col_1"></span>
          <br>
          <span class="cname">厨卫清洁</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="cbox-menu">
          <span class="iconfont icon-baoji"></span>
          <br>
          <span class="cname">浓度保洁</span>
        </div>
      </flexbox-item>
    </flexbox>
    <panel header="废旧互换商品展示板块" :footer="pannel_footer" :list="pannel_list" :type="pannel_type"></panel>
    <panel header="垃圾分类小软件展示板块" :footer="pannel_footer" :list="pannel_list" :type="pannel_type"></panel>

    <group title="积分信息展示">
      <cell :title="da.title" v-for="(da,key) in jifens" :key="da.title">
        <div slot="value">
          <span style="color: green">{{da.fen}}分</span>
        </div>
      </cell>
    </group>
  </div>
</template>
<script>
import {
  Swiper,
  Flexbox,
  FlexboxItem,
  Icon,
  Tabbar,
  TabbarItem,
  Card,
  Panel,
  Cell,
  Group
} from 'vux'
export default {
  components: {
    Swiper,
    Flexbox,
    FlexboxItem,
    Icon,
    Tabbar,
    TabbarItem,
    Card,
    Panel,
    Cell,
    Group
  },
  methods: {
    go(name) {
      console.log(name)
      this.$router.push(name)
    }
  },
  data: function() {
    return {
      icon: '&#xe603;',
      list: [{
        url: '/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        img: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        title: '如何手制一份秋意的茶？'
      }, {
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400160890&ampidx=1&ampsn=29ef02af25793a11a3f6aec92bfb46c1&ampscene=19#wechat_redirect',
        img: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg',
        title: '茶包VS原叶茶'
      }, {
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400094682&ampidx=1&ampsn=8231a2053b772b2108784fccc254d28c&ampscene=19#wechat_redirect',
        img: '//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwkpbywtfqal26nyq.jpg',
        title: '播下茶籽，明春可发芽？'
      }],
      pannel_type: '1',
      pannel_list: [{
        src: '//wgbbiao.github.io/ehuishou/static/assets/5716d10f74085.jpg',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: '//wgbbiao.github.io/ehuishou/static/assets/131224632522665935.jpg',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        }
      }],
      pannel_footer: {
        title: '查看更多',
        url: 'http://vux.li'
      },
      jifens: [{
        title: '第一小区',
        fen: 10
      }, {
        title: '第一小区',
        fen: 10
      }, {
        title: '第一小区',
        fen: 10
      }, {
        title: '第一小区',
        fen: 10
      }]
    }
  }
}

</script>

<style>
.cbox-menu .iconfont {
  font-size: 45px;
  color: #fff;
  border-radius: 50%;
  background: #00CC33;
  padding: 10px;
}

.cbox-menu .iconfont.col_1 {
  background: #339966
}

.cbox-menu .iconfont.col_2 {
  background: #0000FF
}

.cbox-menu .iconfont.col_3 {
  background: #660033
}

.cbox-menu {
  text-align: center;
  margin-top: 20px;
}

.cbox-menu .cname {
  display: block;
  margin-top: 10px;
}

</style>

