// 引入二次封装的axios文件
// 引入二次封装axios文件----给mock使用
import mockAjax from "./mockAjax";
import ajax from "./ajax";
// mock的相关的接口
export const cateLists = () => mockAjax.get("/cateLists");
export const reqindex = () => mockAjax.get("/reqindex");
export const reqcateNavDatas = () => mockAjax.get("/reqcateNavDatas");
export const reqworthbuying = () => ajax.get("/topic/v1/know/navWap.json");
