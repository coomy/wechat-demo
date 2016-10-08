WeixinJSCore = {};
WeixinJSCore.invokeHandler = function (method, args, callbackId) {
    console.log("invokeHandler" + JSON.stringify(arguments));
    if (method == "navigateTo")
    {
        var params = JSON.parse(args);
        appEngine.navigateTo(params.url);
    }
    else if (method == "navigateBack")
    {
        appEngine.navigateBack();
    }
};
WeixinJSCore.publishHandler = function (e,t,o) {
    console.log("publishHandler" + JSON.stringify(arguments) + " at wa service")
    wvIds = JSON.parse(o);
    for ( var i = 0; i < wvIds.length; i++)
    {
        var wvId = wvIds[i];
        appEngine.pages[wvId + ""].jsBridge.subscribeHandler(e,JSON.parse(t),wvId,o);
    }
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