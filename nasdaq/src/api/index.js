// 引入二次封装的axios文件
// 引入二次封装axios文件----给mock使用
import mockAjax from "./mockAjax";

// mock的相关的接口
export const cateLists = () => mockAjax.get("/cateLists");
