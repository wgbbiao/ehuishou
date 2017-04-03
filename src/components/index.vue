<template>
  <div>
    <swiper :list="list" auto></swiper>
    <flexbox>
      <flexbox-item @click.native="go('/trash/order')">
        <div class="cbox-menu">
          <span class="iconfont icon-huishouchexian"></span>
          <br>
          <span class="cname">一键回收</span>
        </div>
      </flexbox-item>
      <flexbox-item @click.native="go('/trash/order')">
        <div class="cbox-menu">
          <span class="iconfont icon-hongbao col_3"></span>
          <br>
          <span class="cname">红包奖励</span>
          <!-- 参与分类  -->
        </div>
      </flexbox-item>
      <flexbox-item @click.native="go('/secondhand/list')">
        <div class="cbox-menu">
          <span class="iconfont icon-feipinhuishou"></span>
          <br>
          <span class="cname">二手交易</span>
        </div>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item @click.native="go('/news/list')">
        <div class="cbox-menu">
          <span class="iconfont icon-zixun col_1"></span>
          <br>
          <span class="cname">环保资讯</span>
        </div>
      </flexbox-item>
      <flexbox-item @click.native="go('/game/list')">
        <div class="cbox-menu">
          <span class="iconfont icon-youxi col_2"></span>
          <br>
          <span class="cname">寓教娱乐</span>
        </div>
      </flexbox-item>
      <flexbox-item @click.native="go('/shop')">
        <div class="cbox-menu">
          <span class="iconfont icon-jifenshangcheng"></span>
          <br>
          <span class="cname">积分商城</span>
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
  name: 'Home',
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
  background: #990000
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

