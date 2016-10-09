WeixinJSCore = {};
WeixinJSCore.invokeCallbackHandler = function(args) {

};

WeixinJSCore.invokeHandler = function (method, args, callbackId) {
    console.log("invokeHandler" + JSON.stringify(arguments));
    //method:insertCanvas
    // 现在所有的invoke都准备直接自己实现了？如果是的话，这里全部直接invokeCallback，然后找合适的地方去执行invoke.
    if ( method == "insertCanvas" ) {
    	var objArgs = JSON.parse(args);
    	objArgs["wvId"] = window.__webviewId_;
    	parent.window.WeixinJSBridge.invoke(method, objArgs, WeixinJSCore.invokeCallbackHandler);
	}

    WeixinJSBridge.invokeCallbackHandler(callbackId, {test:"whatever"});
};
WeixinJSCore.publishHandler = function (e,t,o) {
	// if ( e == "canvasInsert" ) {
 //    	var objArgs = JSON.parse(t);
 //    	objArgs["wvId"] = window.__webviewId_;
 //    	parent.window.WeixinJSBridge.invoke(method, objArgs, WeixinJSCore.invokeCallbackHandler);
	// }
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