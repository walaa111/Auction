cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-connectivity-monitor.connectivity",
    "file": "plugins/cordova-connectivity-monitor/www/connectivity.js",
    "pluginId": "cordova-connectivity-monitor",
    "clobbers": [
      "window.connectivity"
    ]
  },
  {
    "id": "cordova-admob.AdMobAds",
    "file": "plugins/cordova-admob/www/admob.js",
    "pluginId": "cordova-admob",
    "clobbers": [
      "window.admob",
      "window.tappx"
    ]
  },
  {
    "id": "cordova-plugin-admobpro.AdMob",
    "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
    "pluginId": "cordova-plugin-admobpro",
    "clobbers": [
      "window.AdMob"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-inappbrowser": "3.0.0",
  "cordova-connectivity-monitor": "1.2.2",
  "cordova-play-services-version-adapter": "1.0.2",
  "cordova-admob": "5.1.0",
  "cordova-plugin-extension": "1.5.4",
  "cordova-plugin-admobpro": "2.37.2",
  "com.google.playservices": "22.0.0"
};
// BOTTOM OF METADATA
});