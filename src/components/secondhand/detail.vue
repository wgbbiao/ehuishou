<template>
  <div>
    <card>
      <img slot="header" src="//wgbbiao.github.io/ehuishou/static/assets/n_v1bl2lwxu3bo2fq55vnjha.jpg" style="width:100%;display:block;">
      <div slot="content" class="card-padding">
        <h3>8成新IPHONE</h3>
      </div>
    </card>
    <card :header="{title:'商品描述'}">
      <p slot="content" class="card-padding">显卡 类型 集成显卡 显存容量 共享系统内存（集成） 内存 内存容量 8GB 显示器 显示比例 宽屏16：9 物理分辨率 1920×1080 屏幕类型 LED背光 屏幕规格 14.0英寸 音效系统 扬声器 内置扬声器 内置麦克风 有 输入设备 键盘 巧克力键盘 触摸板 有 处理器 CPU速度 基本频率：2.7 GHz，最大频率：3.5 GHz 核心 双核 CPU型号 第七代智能英特尔Kabylake酷睿双核处理器i7-7500U 硬盘 硬盘容量 其它 固态硬盘 512GB SSD 电源 电源适配器 100-240V自适应交流电源适配器 续航时间 5-8小时 电池 内置锂离子电池 其它设备 网络摄像头 有 摄像头像素 30万 机器规格 净重 1.5kg-2kg 端口 音频端口 耳机、麦克风二合一接口 显示端口 HDMI接口 主体 型号 出色版510S 颜色 白色 平台 Intel 通信 无线局域网 有 局域网 10/100/1000Mbps 内置蓝牙 有 操作系统 操作系统 Windows 10 中文版 光驱 光驱类型 无光驱</p>
    </card>
    <group slot="content" title="联系方式">
      <cell title="地址" value="北京市西城区xx小区xx号楼"></cell>
      <cell title="电话" value="tel:13466625911"></cell>
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
  }
}

</script>

<style type="text/css">
.card-padding {
  padding: 10px;
}

</style>

