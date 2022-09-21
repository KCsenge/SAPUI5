//@ui5-bundle sap/ui/demo/walkthrough/Component-preload.js
sap.ui.require.preload({
	"sap/ui/demo/walkthrough/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(o){"use strict";return o.extend("sap.ui.demo.walkthrough.controller.App",{onShowHello:function(){alert("Hello World")}})});
},
	"sap/ui/demo/walkthrough/index.js":function(){sap.ui.define(["sap/ui/core/mvc/XMLView"],function(e){"use strict";e.create({viewName:"sap.ui.demo.walkthrough.view.App"}).then(function(e){e.placeAt("content")})});
},
	"sap/ui/demo/walkthrough/manifest.json":'{"sap.app":{"id":"sap.ui.demo.walkthrough","type":"application"}}',
	"sap/ui/demo/walkthrough/view/App.view.xml":'<mvc:View controllerName="sap.ui.demo.walkthrough.controller.App" xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc"><Button text="Say Hello" press=".onShowHello" /></mvc:View>\r\n'
});
