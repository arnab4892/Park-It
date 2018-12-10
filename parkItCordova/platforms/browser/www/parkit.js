var latitude;
var longitude;
var parkedLatitude;
var parkedLongitude;

var storage;

function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
    storage = window.localStorage;
}

function onDeviceReady(){
    var node = document.createElement('link');
    node.setAttribute('rel', 'stylesheet');
    node.setAttribute('type', 'text/css');
    if (cordova.platformId == 'ios') {
        node.setAttribute('href', 'parkit-ios.css');
        window.StatusBar.overlaysWebView(false);
        window.StatusBar.styleDefaut();
    }else{
        node.setAttribute('href', 'parkit-android.css');
        window.StatusBar.backgroundColorByHexString('#1565C0');
    }
    document.getElementsByTagName('head')[0].appendChild(node)
}