// 引入组件
import Home from "../pages/Home.vue";
import Classdata from "../pages/classdata.vue";
import Classify from "../pages/classify.vue";
import Personage from "../pages/personage.vue";
import Shoppingtrolley from "../pages/shoppingtrolley.vue";
import Worthbuying from "../pages/worthbuying.vue";
// 引入News和Message
export default [
  // 地址和组件的关系的建立
  // 普通组件如果和链接之间建立了关系后就形成了路由组件,每个路由组件仍然是对象
  {
    path: "/Home",
    component: Home,
  },
  { path: "/", name: "Home", component: Classify },
  {
    path: "/Classify",
    component: Classify,
    children: [
      {
        path: "/Classify/Classdata",
        component: Classdata,
      },
    ],
  },
  {
    path: "/Personage",
    component: Personage,
  },
  {
    path: "/Shoppingtrolley",
    component: Shoppingtrolley,
  },
  {
    path: "/Worthbuying",
    component: Worthbuying,
  },
];
