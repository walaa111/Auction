cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "admob.admob",
    "file": "plugins/admob/www/admob.js",
    "pluginId": "admob",
    "clobbers": [
      "window.admob"
    ]
  },
  {
    "id": "cordova-plugin-admob-simple.AdMob",
    "file": "plugins/cordova-plugin-admob-simple/www/AdMob.js",
    "pluginId": "cordova-plugin-admob-simple",
    "clobbers": [
      "window.plugins.AdMob"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "admob": "5.5.0",
  "cordova-admob-sdklibs": "2.1.6",
  "cordova-plugin-admob-simple": "3.3.4",
  "cordova-plugin-inappbrowser": "1.7.1-dev",
  "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});