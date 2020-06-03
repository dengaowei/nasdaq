// 先引入Mock
import Mock from "mockjs";
import cateLists from "./cateLists.json";
import reqindex from "./index.json";
import reqIndex from "./index.json";
import reqcateNavDatas from "./cateNavDatas.json";
import reqIndexCateModule from "./indexCateModule.json";
// 引入floors---首页楼层的数据
// 使用Mock的相关方法,进行接口的拦截及返回数据的操作
// 自己设定并确定banners数据的接口地址--->/mock/banners   和   floors数据的接口地址---->/mock/floors
// 参数1:要拦截的接口地址,参数2:要返回的数据模版
Mock.mock("/mock/cateLists", { code: 200, message: "成功", data: cateLists });
Mock.mock("/mock/reqindex", { code: 200, message: "成功", data: reqindex });
Mock.mock("/mock/reqcateNavDatas", {
  code: 200,
  message: "成功",
  data: reqcateNavDatas,
});
Mock.mock("/mock/reqIndex", {
  code: 200,
  message: "成功",
  data: reqIndex,
});
Mock.mock("/mock/reqcateNavDatas", {
  code: 200,
  message: "成功",
  data: reqcateNavDatas,
});
Mock.mock("/mock/reqIndexCateModule", {
  code: 200,
  message: "成功",
  data: reqIndexCateModule,
});
