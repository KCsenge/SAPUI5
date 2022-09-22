//@ui5-bundle sap/ui/demo/walkthrough/Component-preload.js
sap.ui.require.preload({
	"sap/ui/demo/walkthrough/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel","sap/ui/model/resource/ResourceModel"],function(e,o,i){"use strict";return e.extend("sap.ui.demo.walkthrough.Component",{init:function(){e.prototype.init.apply(this,arguments);var i={recipient:{name:"World"}};var n=new o(i);this.setModel(n)}})});
},
	"sap/ui/demo/walkthrough/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(e,t){"use strict";return e.extend("sap.ui.demo.walkthrough.controller.App",{onInit:function(){this.getView().byId("nameInput").fireLiveChange()},onShowHello:function(){var e=this.getView().getModel("i18n").getResourceBundle();var o=this.getView().getModel().getProperty("/recipient/name");var n=e.getText("helloMsg",[o]);t.show(n)},onLiveChange:function(e){var t=this.getView().getModel("i18n").getResourceBundle();var o=e.getSource().getValue();var n=t.getText("helloMsg",[o]);e.getSource().setDescription(n)}})});
},
	"sap/ui/demo/walkthrough/i18n/i18n.properties":'showHelloButtonText=Say Hello\r\nhelloMsg=Hello {0}',
	"sap/ui/demo/walkthrough/i18n/i18n_en.properties":'showHelloButtonText=Say Hello\r\nhelloMsg=Hello {0}',
	"sap/ui/demo/walkthrough/i18n/i18n_hu.properties":'showHelloButtonText=K\\u00f6sz\\u00f6n\\u00e9s\r\nhelloMsg=Szia {0}',
	"sap/ui/demo/walkthrough/index.js":function(){sap.ui.define(["sap/ui/core/ComponentContainer"],function(e){"use strict";new e({name:"sap.ui.demo.walkthrough",settings:{id:"walkthrough"},async:true}).placeAt("content")});
},
	"sap/ui/demo/walkthrough/manifest.json":'{"sap.app":{"id":"sap.ui.demo.walkthrough","type":"application"},"sap.ui5":{"rootView":{"viewName":"sap.ui.demo.walkthrough.view.App","type":"XML","async":true,"id":"app"},"interfaces":["sap.ui.core.IAsyncContentCreation"],"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"sap.ui.demo.walkthrough.i18n.i18n","supportedLocales":["en","hu"],"fallbackLocale":"en"}}}}}',
	"sap/ui/demo/walkthrough/view/App.view.xml":'<mvc:View controllerName="sap.ui.demo.walkthrough.controller.App" xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc"><Button text="{i18n>showHelloButtonText}" press=".onShowHello" /><Input id="nameInput" value="{/recipient/name}" liveChange="onLiveChange" width="60%" /></mvc:View>\r\n'
});
