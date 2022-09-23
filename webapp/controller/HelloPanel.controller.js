sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "../model/formatter"],
  function (Controller, MessageToast, formatter) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      formatter: formatter,
      onShowHello: function () {
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);

        MessageToast.show(sMsg);
      },
    });
  }
);
