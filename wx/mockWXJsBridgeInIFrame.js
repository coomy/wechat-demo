WeixinJSCore = {};
WeixinJSCore.invokeHandler = function (method, args, callbackId) {
    console.log("invokeHandler" + JSON.stringify(arguments));
};
WeixinJSCore.publishHandler = function (e,t,o) {
    console.log("publishHandler" + JSON.stringify(arguments) + " from " + window.__webviewId_);
    parent.window.WeixinJSBridge.subscribeHandler(e,JSON.parse(t),window.__webviewId_,o);
};
webkit = {};
webkit.messageHandlers = {};
webkit.messageHandlers.publishHandler = {};
webkit.messageHandlers.publishHandler.postMessage = function (msg) {
    console.log("messageHandlers.publishHandler" + JSON.stringify(arguments));
    WeixinJSCore.publishHandler(msg.event, msg.paramsString, msg.webviewIds);
};
webkit.messageHandlers.invokeHandler = {};
webkit.messageHandlers.invokeHandler.postMessage = function (msg) {
    console.log("messageHandlers.invokeHandler" + JSON.stringify(arguments));
    WeixinJSCore.invokeHandler(msg.event, msg.paramsString, msg.callbackId);
};