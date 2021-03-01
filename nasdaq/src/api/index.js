// 引入二次封装的axios文件
// 引入二次封装axios文件----给mock使用
import mockAjax from "./mockAjax";
import ajax from "./ajax";
// mock的相关的接口
export const cateLists = () => mockAjax.get("/cateLists");
export const reqindex = () => mockAjax.get("/reqindex");
export const reqcateNavDatas = () => mockAjax.get("/reqcateNavDatas");
export const reqworthbuying = () => ajax.get("/topic/v1/know/navWap.json");
export const reqIndex = () => mockAjax.get("/reqIndex"); // 获取首页的数据
export const reqIndexCateModule = () => mockAjax.get("/reqIndexCateModule"); // 首页下拉列表数据
export const reqBuying = () => ajax.get("/topic/v1/know/navWap.json"); // 值得买数据
export const reqBuyingEnd = () => ajax.get("/topic/v1/find/recAuto.json"); //值得买下的懒加载数据
export const pubgmobile = () => ajax.get("/en/event/dreamteam/"); //值得买下的懒加载数据
