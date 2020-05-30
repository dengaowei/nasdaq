// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App.vue";
// 引入路由器
import router from "./router";
// 引入vuex的store
import store from "./store";
// 引入mock
import VueAwesomeSwiper from "vue-awesome-swiper";
import "./mock/mockServer";
// 引入swiper的样式文件
import "swiper/css/swiper.css";
import { Tabbar, TabbarItem } from "vant";
import { Search } from "vant";
import { Tab, Tabs } from "vant";
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";
import { Grid, GridItem } from "vant";
import { Image as VanImage } from "vant";
import { Sidebar, SidebarItem } from "vant";

Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Search);
Vue.use(Tabbar);
Vue.use(TabbarItem);
// 引入商品分类导航TypeNav组件
// 引入vue表单验证的插件

// 设置浏览器的控制台中是否显示默认提示信息
Vue.config.productionTip = false;

// Vue.prototype.$bus = new Vue()  ----  // 创建Vue实例之前---数据初始化之前
// 创建Vue实例,并挂载
new Vue({
  // 数据初始化之前---生命周期回调
  render: (h) => h(App),
  // 注册路由器
  router,
  // 注册仓库
  store,
}).$mount("#app");
