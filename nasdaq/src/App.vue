<template>
  <div id="app">
    <div class="imgWrap" v-if="icon">
      <van-icon name="cross" class="vant-icon" @click="onicon" />
      <img
        src="https://yanxuan.nosdn.127.net/3137220cc522a8fbb0b7520637a61469.png?type=webp&imageView&thumbnail=750x0&quality=75"
        alt
        srcset
      />
    </div>
    <div class="header">
      <div>网易严选</div>
      <div>
        <van-search
          v-if="search"
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
        >
          <template #action>
            <div @click="onSearch">登录</div>
          </template>
        </van-search>
      </div>
    </div>
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
      icon: true,
      search: true
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
    onicon () {
      this.icon = false
    }
  },
  mounted () {
    this.$store.dispatch("reqindex");
    this.$store.dispatch("reqcateNavDatas");
    console.log(this.$store);

  },
};
</script>

<style >
.imgWrap {
  display: flex;
}
.imgWrap > img {
  height: 50px;
  width: 100%;
}
.vant-icon {
  position: absolute;
}
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
</style>
<style lang="scss" scoped>
</style>