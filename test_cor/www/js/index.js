/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        //admob


    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        //lines added inappbrowser
        
	var inAppBrowserbRef = cordova.InAppBrowser.open('https://electrostar.ovplatform.tk', '_self', 'location=no,toolbar=no');
        inAppBrowserbRef = cordova.InAppBrowser.open('http://matthew.realdeal.com.eg/MazadMart/?theme-switch=mazadmart', '_self', 'location=no,toolbar=no,zoom=no');
//admob  

  },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
//ads
    function initAds() {
      if (admob) {
        var adPublisherIds = {
          ios : {
            banner : "ca-app-pub-XXXXXXXXXXXXXXXX/BBBBBBBBBB",
            interstitial : "ca-app-pub-XXXXXXXXXXXXXXXX/IIIIIIIIII"
          },
          android : {
            banner : "ca-app-pub-7251676025279948/5761699976",
            interstitial : "ca-app-pub-7251676025279948/6256523997"
          }
        };
    	  var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;
            
        admob.setOptions({
          publisherId:          admobid.banner,
          interstitialAdId:     admobid.interstitial,
          autoShowBanner:       true,
          autoShowInterstitial: false,
          autoShowRewarded:     false,
          tappxIdiOS:           "/XXXXXXXXX/Pub-XXXX-iOS-IIII",
          tappxIdAndroid:       "/XXXXXXXXX/Pub-XXXX-Android-AAAA",
          tappxShare:           0.5,
        });
 
        registerAdEvents();
        
      } else {
        alert('AdMobAds plugin not ready');
      }
    }
    
    function onAdLoaded(e) {
      if (isAppForeground) {
        if (e.adType === admob.AD_TYPE.AD_TYPE_BANNER) {
          console.log("New banner received");
        } else if (e.adType === admob.INTERSTITIAL) {
          console.log("An interstitial has been loaded and autoshown. If you want to automatically show the interstitial ad, set 'autoShowInterstitial: true' in admob.setOptions() or remove it");
          admob.showInterstitialAd();
        } else if (e.adType === admob.AD_TYPE_REWARDED) {
          console.log("New rewarded ad received");
          admob.showRewardedAd();
        }
      }
    }
    
    function onPause() {
      if (isAppForeground) {
        admob.destroyBannerView();
        isAppForeground = false;
      }
    }
    
    function onResume() {
      if (!isAppForeground) {
        setTimeout(admob.createBannerView, 1);
        setTimeout(admob.requestInterstitialAd, 1);
        isAppForeground = true;
      }
    }
    
    // optional, in case respond to events
    function registerAdEvents() {
      document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
      document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
      document.addEventListener(admob.events.onAdOpened, function (e) {});
      document.addEventListener(admob.events.onAdClosed, function (e) {});
      document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
      
      document.addEventListener("pause", onPause, false);
      document.addEventListener("resume", onResume, false);
    }
        
    function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);
      initAds();
 
      // display a banner at startup
      admob.createBannerView();
        
      // request an interstitial ad
      admob.requestInterstitialAd();
 
      // request a rewarded ad
      admob.requestRewardedAd();
    }
    
    document.addEventListener("deviceready", onDeviceReady, false);
    /*end ads*/
app.initialize();