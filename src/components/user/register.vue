<style scoped>
</style>
<template>
  <div>
    <group style="margin-top:0.1rem">
      <x-input title="手机号码" placeholder="请输入手机号" v-model="mobile" name="mobile" keyboard="number" is-type="china-mobile"></x-input>
      <x-input title="帐户密码" placeholder="请输入密码" type="password" v-model="password"></x-input>
      <x-input title="确认密码" placeholder="请再输一次密码" type="password" v-model="password2"></x-input>
   
      <!-- <x-address :title="title" v-model="value" raw-value :list="addressData"></x-address> -->
      <!-- <x-input title="详细地址" placeholder="请输入详细地址" v-model="form.address" required></x-input>    -->
    </group>
       <flexbox>
        <flexbox-item :span="2/3">
          <div class="flex-demo">
            <x-input title="验证码" v-model="yzm" placeholder="请输入验证码">
            </x-input>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <x-button mini plain type="primary" :disabled='isDisabled' @click.native="sendyzm">{{send}}</x-button>
          </div>
        </flexbox-item>
      </flexbox>
    <x-button @click.native="regist" type="primary" style="margin-top:1rem">注册</x-button>
    <div v-transfer-dom>
      <alert v-model="show2" title="恭喜">验证码发送成功</alert>
    </div>
    <div v-transfer-dom>
      <alert v-model="show3" title="抱歉">验证码发送失败</alert>
    </div>
  </div>
</template>
<script>
import {
  XInput,
  Group,
  XButton,
  XHeader,
  XAddress,
  Flexbox,
  TransferDomDirective,
  Alert
} from 'vux'
export default {
  name: 'Register',
  components: {
    XInput,
    Group,
    XButton,
    XHeader,
    XAddress,
    Flexbox,
    TransferDomDirective,
    Alert
  },
  data() {
    return {
      send: '获取手机验证码',
      isDisabled: false,
      show2: false,
      show3: false
    }
  },
  mounted: function() {},
  methods: {
    regist() {
      alert(88)
    },
    sendyzm() {
      let that = this
      var mobile = this.mobile
      let phone = 'mobile=' + mobile
      this.$http.post('http://api.com/index.php/home/User/sendYzm/', phone).then(function(response) {
        var data = response.data
        if (data['error'] === 0) {
          that.show2 = true
          that.isDisabled = true
          var matxTime = 180
          that.send = '180秒后重试'
          var times = setInterval(function() {
            matxTime--
            that.send = matxTime + '秒后重试'
            if (matxTime === 0) {
              that.send = '获取手机验证码'
              that.isDisabled = false
              clearInterval(times)
            }
          }, 1000)
        } else {
          that.show3 = true
        }
      })
    }
  }
}
</script>
