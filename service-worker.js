"use strict";var precacheConfig=[["./index.html","d16f23c953d6e62a7d64e038e32a7ca8"],["./static/css/main.fe439ba9.css","88f59f18c1fabba96bf4145fcf97eb40"],["./static/js/main.b4bd58cf.js","634ae9d99be80d37c3b0df840709ef8b"],["./static/media/arrow-left.c1adf37b.png","c1adf37bab60dd8dd0133eb23bba82ab"],["./static/media/arrown-right.16e883de.png","16e883de0c676b3fe56a65e1fe58bd7b"],["./static/media/bg1.06eec62c.png","06eec62c470bba788b8bf600a9b54921"],["./static/media/bg2.c42882e3.png","c42882e30ee3577cdc1309df4cd8c7fd"],["./static/media/camera.fcd492f4.png","fcd492f4851c347d7dc862115ee62011"],["./static/media/data_img.cace8854.png","cace8854aba4a5977f7b8b9a051344cf"],["./static/media/delete.8f845f9c.png","8f845f9ceba83d8d58f7cb79431eb25d"],["./static/media/facebook_icon.5c948391.png","5c948391cc16a4ed2c548c77401e27ab"],["./static/media/help.f1dea9ec.png","f1dea9ec250dd9ea9ce62e998c517f7e"],["./static/media/ic_Schedule.29e20d1d.png","29e20d1d232eae3f693e30c42ab34f42"],["./static/media/ic_birthday.2c16c001.png","2c16c001e5443c0bd59b2fc4bad977fc"],["./static/media/ic_calender.93e54799.png","93e547990276f58577881f8cf4f32ae6"],["./static/media/ic_comment.ea427d04.png","ea427d04c78bb6f59da157a33dc6a4c5"],["./static/media/ic_delete.89c0ae74.png","89c0ae74a68f73ec52647644a12ebbec"],["./static/media/ic_fan.c7b79ea6.png","c7b79ea6f33aa5b4e034e2c58a30089c"],["./static/media/ic_follow.f758e5e6.png","f758e5e6da4a38c5b94fa27f3858656b"],["./static/media/ic_icon.65eecf61.png","65eecf6175989af5f0278cb2afe82c6e"],["./static/media/ic_icon2.01adb98b.png","01adb98bfb7ec6b5b50728caa60cfe25"],["./static/media/ic_icon3.14b3db9a.png","14b3db9a68a9554a3a20674c9d025df1"],["./static/media/ic_icon4.79f5300c.png","79f5300c73e14a601824f97cd8dd52d7"],["./static/media/ic_pulic.ca186a4a.png","ca186a4a4f880246d0ebf0b98256652b"],["./static/media/ic_share.7ea0d1aa.png","7ea0d1aa6187c567900db0d71c615f03"],["./static/media/ic_website.3e92d644.png","3e92d6446d4e5c667c93c470567872f3"],["./static/media/icon.17405c90.png","17405c905109c381b8447a01009130ab"],["./static/media/img.63c9cf7e.png","63c9cf7eb2d61c53a7f9be7086d9975c"],["./static/media/img_1.8f0b8194.png","8f0b81945f6d8fd4e58a579a0f2c37ab"],["./static/media/img_2.b6f862b2.png","b6f862b223f556aff69ee7393e93d979"],["./static/media/img_3.0ba2b485.png","0ba2b485c913df7ff2f34f06a1e4be8a"],["./static/media/img_header.b2aeeae8.png","b2aeeae8083375b475cf3e43f364a3fa"],["./static/media/logo_bg.638127c8.png","638127c816d6c0e010d37ea087ec4808"],["./static/media/mypage.67a36353.png","67a36353e6261635ab0fe2da5a1b0d65"],["./static/media/myuser.d3b95306.png","d3b95306293a9cdb6330897d176f1848"],["./static/media/pencil_edit.7de2842c.png","7de2842c9aac566fb7b24103b5ec34a0"],["./static/media/photo.6022f661.png","6022f66167a9f52917bb15ed21355f95"],["./static/media/photo_user.5d578b68.png","5d578b689ee0cf3c2f75b8a8f4a680b6"],["./static/media/user.15d9794c.png","15d9794cd345bbfb7fb7471ce546e43b"],["./static/media/user_icon.2b40a20f.png","2b40a20fc858e15f8fbce2b016627ff7"],["./static/media/user_img.f75213ef.png","f75213ef30f8f9b9e737e3440bcfc3e8"],["./static/media/web.61b23e9f.png","61b23e9fb2f41a7853b81be5ab3238e4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var n="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});