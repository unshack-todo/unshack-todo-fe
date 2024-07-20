"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_todo_layout2 = common_vendor.resolveComponent("todo-layout");
  _easycom_todo_layout2();
}
const _easycom_todo_layout = () => "../../components/todo-layout/todo-layout.js";
if (!Math) {
  _easycom_todo_layout();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "taskList",
  setup(__props) {
    const curStatus = common_vendor.ref("all");
    common_vendor.onLoad((option) => {
      const { status } = option;
      curStatus.value = status;
      console.log(status, "当前状态");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(curStatus.value)
      };
    };
  }
});
wx.createPage(_sfc_main);
