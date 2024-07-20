"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_todo_header2 = common_vendor.resolveComponent("todo-header");
  _easycom_todo_header2();
}
const _easycom_todo_header = () => "../todo-header/todo-header.js";
if (!Math) {
  _easycom_todo_header();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "todo-layout",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e3b8f70e"]]);
wx.createComponent(Component);
