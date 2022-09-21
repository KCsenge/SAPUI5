sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onInit: function () {
        var oData = {
          recipent: {
            name: "World",
          },
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        });
        this.getView().setModel(i18nModel, "i18n");

        this.getView().byId("nameInput").fireLiveChange();
      },
      onShowHello: function () {
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipent = this.getView().getModel().getProperty("/recipent/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipent]);
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
