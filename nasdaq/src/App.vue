<template>
  <div id="app">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
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


export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      active: 0,
      route: true,
      value: ''
    };
  },
  methods: {
    onSearch (val) {
      console.log(val)
    },
    onCancel () {
      console.log('dsad');
    },
  },
  mounted () {

    this.$store.dispatch('cateLists')
    console.log(process.env.NODE_ENV);

  },
}
</script>

<style>
.box {
  float: left;
  height: 50px;
  width: 100px;
  background-color: pink;
}
</style>
