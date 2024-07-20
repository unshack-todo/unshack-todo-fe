"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_todo_layout2 = common_vendor.resolveComponent("todo-layout");
  (_easycom_uni_icons2 + _easycom_todo_layout2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_todo_layout = () => "../../components/todo-layout/todo-layout.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_todo_layout)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "home",
  setup(__props) {
    const handleClick = (status) => {
      common_vendor.index.navigateTo({
        url: `/pages/task-list/taskList?status=${status}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(($event) => handleClick("all")),
        c: common_vendor.o(($event) => handleClick("done")),
        d: common_assets._imports_1,
        e: common_vendor.o(($event) => handleClick("progress")),
        f: common_assets._imports_2,
        g: common_vendor.o(($event) => handleClick("overdue")),
        h: common_assets._imports_3,
        i: common_vendor.o(($event) => handleClick("wait")),
        j: common_vendor.p({
          type: "plusempty",
          size: "30"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"]]);
wx.createPage(MiniProgramPage);
