WeixinJSCore = {};
WeixinJSCore.invokeHandler = function (method, args, callbackId) {
    console.log("invokeHandler" + JSON.stringify(arguments));
    var params = JSON.parse(args);
    if (method == "navigateTo")
    {
        appEngine.navigateTo(params.url);
    }
    else if (method == "navigateBack")
    {
        appEngine.navigateBack();
    }
    else if (method == "insertCanvas") {
        appEngine.insertCanvas(params);
    }
    else if (method == "drawCanvas") {
        // 这是从index.js里面的wx.drawCanvas调用过来的，args里面带了：canvasId:1000,actions:[xxx]
        //appEngine.drawCanvas(params);
        // 这里要转发给webview
        var wvId = [];
        wvId[0] = appEngine.getCanvasWvId(params.canvasId);
        // appEngine.pages[wvId + ""].jsBridge.subscribeHandler(/*??传什么事件？*/);
        WeixinJSBridge.publish("canvas"+params.canvasId+"actionsChanged", params.actions, wvId);
    }
};
WeixinJSCore.publishHandler = function (e,t,o) {
    console.log("publishHandler" + JSON.stringify(arguments) + " at wa service")
    wvIds = JSON.parse(o);
    if ( wvIds.length == 0 )
        wvIds[0] = 0;
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