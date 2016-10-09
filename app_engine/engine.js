WxAppPage = function (path, wvId, from, parent) {
    this.path = path;
    this.webviewId = wvId;
    this.previousPage = from;
    this.domEle = document.createElement('iframe');
    this.domEle.src = path.indexOf(".html") >= 0 ? path : path + ".html";
    this.domEle.style = "width:100%; height:600px"
    this.domEle.name = "webview" + wvId;
    //var wxml = "app_src/" + this.domEle.src.replace(".html", ".wxml");
    var webviewID = wvId;
    var page = this;
    this.domEle.onload = function()
    {
        page.jsBridge = this.contentWindow.WeixinJSBridge;
        this.contentWindow.onAfterLoad(webviewID);
    };

    this.parentDom = parent;
    this.show = function () {
        if (this.domEle.parentNode == null)
            this.parentDom.appendChild(this.domEle);
    };
    this.hide = function () {
        if (this.domEle.parentNode != null)
            this.parentDom.removeChild(this.domEle);
    };
}
function WxAppEngine() {
    this.pages = {};
    this.currentPage = null;
    this.nextId = 0;
    this.dom = document.getElementById("pageContainer");
    this.canvasMap = []; // 保存canvasID和wvid的对应值
    this.init();
};

WxAppEngine.prototype = {
    init: function () {
        var wvId = this.nextId;
        this.nextId ++;
        this.sendRouteEvent("appLaunch", wvId, __wxConfig.pages[0] + ".html");
        var pageToShow = new WxAppPage(__wxConfig.pages[0] + ".html", wvId, this.currentPage, this.dom);
        this.pages[wvId + ""] = pageToShow;
        if (this.currentPage != null)
            this.currentPage.hide();
        pageToShow.show();
        pageToShow.previousPage = this.currentPage;
        this.currentPage = pageToShow;
    },
    navigateTo: function (path) {
        var wvId = this.nextId;
        this.nextId ++;
        this.sendRouteEvent("navigateTo", wvId, path);
        var pageToShow = new WxAppPage(path, wvId, this.currentPage, this.dom);
        this.pages[wvId + ""] = pageToShow;
        if (this.currentPage != null)
            this.currentPage.hide();
        pageToShow.show();
        pageToShow.previousPage = this.currentPage;
        this.currentPage = pageToShow;
    },
    navigateBack: function () {
        if (this.currentPage == null || this.currentPage.previousPage == null)
            return;
        var showingPage = this.currentPage;
        this.currentPage = this.currentPage.previousPage;
        showingPage.previousPage = null;
        this.sendRouteEvent("navigateBack", this.currentPage.webviewId, this.currentPage.path);
        showingPage.hide();
        this.currentPage.show();
    },
    sendRouteEvent: function(type, wvId, path)
    {
        var appRouteEvent = {};
        appRouteEvent.path = path;
        appRouteEvent.openType = type;
        appRouteEvent.webviewId = wvId;
        appRouteEvent.query = {};
        WeixinJSBridge.subscribeHandler("onAppRoute", appRouteEvent);
    },
    insertCanvas: function(params) {
        this.canvasMap[params.canvasId] = params.wvId;
    },
    getCanvasWvId: function(canvasId) {
        return this.canvasMap[canvasId];
    },
    drawCanvas: function(params) {
        // TODO
    },
    /*
     if (!ignoreExist && this.currentPage != null) {
     existPage = null;
     p = this.currentPage;
     if (p != null && p.path == path)
     return;
     while (p.previousPage != null) {
     if (p.previousPage.path == path) {
     pageToShow = p.previousPage;
     p.previousPage = pageToShow.previousPage;
     pageToShow.previousPage = this.currentPage;
     break;
     }
     }

     }*/
}
