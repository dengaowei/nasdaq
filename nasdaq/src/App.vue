<template>
  <div id="app">
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
      <template #action>
        <div @click="onSearch">登录</div>
      </template>
    </van-search>
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="Home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="Classify" icon="send-gift-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="Worthbuying" icon="idcard">值得买</van-tabbar-item>
      <van-tabbar-item replace to="Shoppingtrolley" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="Personage" icon="friends-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Toast } from 'vant';
export default {
  name: "App",
  components: {},
  data () {
    return {
      active: 0,
      route: true,
      value: "",
    };
  },
  computed: {
    // ...mapState(['state']) 适合总的state中的数据的写法
    // 通过辅助函数mapState获取home模块中的三级分类信息数据
    ...mapState({
      reqindex: (state) => state.home.reqindex,
    }),
  },
  methods: {
    onSearch (val) {
      console.log(val)
      Toast('登录');
    },
    onCancel (val) {
      Toast(val);
    },
  },
  mounted () {
    this.$store.dispatch("reqindex");
    this.$store.dispatch("reqcateNavDatas");
  },
};
</script>

<style>
</style>
