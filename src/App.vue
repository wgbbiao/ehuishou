<template>
  <div id="app">
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <x-header slot="header" :left-options="{backText: ''}" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
      <router-view></router-view>
      <tabbar slot="bottom">
        <tabbar-item link="/">
          <span slot="icon" class="iconfont icon-home"></span>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/trash/order">
          <span slot="icon" class="iconfont icon-feipinhuishou"></span>
          <span slot="label">卖废品</span>
        </tabbar-item>
        <tabbar-item link="/component/demo">
          <span slot="icon" class="iconfont icon-4"></span>
          <span slot="label">资讯</span>
        </tabbar-item>
        <tabbar-item>
          <span slot="icon" class="iconfont icon-wode"></span>
          <span slot="label">我</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import {
  XHeader,
  ViewBox,
  Tabbar,
  TabbarItem
} from 'vux'
export default {
  components: {
    XHeader,
    ViewBox,
    Tabbar,
    TabbarItem
  },
  name: 'app',
  data: function() {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  }
}

</script>

<style lang='less'>
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';

</style>
<style>
@import "//at.alicdn.com/t/font_lr0ky4kr584fs9k9.css";
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

</style>

