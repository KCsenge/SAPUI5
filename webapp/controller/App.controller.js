sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onInit: function () {
        this.getView().byId("nameInput").fireLiveChange();
      },
      onShowHello: function () {
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        MessageToast.show(sMsg);
      },
      onLiveChange: function (oEvent) {
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sName = oEvent.getSource().getValue();
        var sMsg = oBundle.getText("helloMsg", [sName]);
        oEvent.getSource().setDescription(sMsg);
      },
    });
  }
);
