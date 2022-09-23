sap.ui.define([], function () {
  "use strict";
  return {
    formatHelloText: function (sText) {
      return this.getView()
        .getModel("i18n")
        .getResourceBundle()
        .getText("helloMsg")
        .replace("{0}", sText);
    },
  };
});
