sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
    "./controller/HelloDialog",
  ],
  function (UIComponent, JSONModel, Device, HelloDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);
        var oData = {
          recipient: {
            name: "World",
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);

        this.getModel("invoice").setUseBatch(false);

        var oDeviceModel = new JSONModel(Device);
        oDeviceModel.setDefaultBindingMode("OneWay");
        this.setModel(oDeviceModel, "device");

        this.getRouter().initialize();

        this._helloDialog = new HelloDialog(this.getRootControl());
      },
      exit: function () {
        this._helloDialog.destroy();
        delete this._helloDialog;
      },
      openHelloDialog: function () {
        this._helloDialog.open();
      },

      getContentDensityClass: function () {
        if (!this._sContentDensityClass) {
          if (!Device.support.touch) {
            this._sContentDensityClass = "sapUiSizeCompact";
          } else {
            this._sContentDensityClass = "sapUiSizeCozy";
          }
        }
        return this._sContentDensityClass;
      },
    });
  }
);
