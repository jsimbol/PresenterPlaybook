if(!window.BrightTALK){window.BrightTalkMessagingEnabled=false;BrightTALK={}}BrightTALK.players=BrightTALK.players||{};if(!BrightTALK.currentEmbedId){BrightTALK.currentEmbedId=1}BrightTALK.getLastViewCommunicationXML=function(){return BrightTALK._cachedViewCommunicationXMLResponse};(function(b){var a;b.loadedFiles=b.loadedFiles||{};b.queuedFiles=b.queuedFiles||{};b.dom=b.dom||{bootstrap:function(){a=this;a.head=a.tag("head")[0];a.body=a.tag("body")[0];return this},ready:function(c){swfobject.addDomLoadEvent(c)},setUserAgent:function(){this.userAgent=swfobject.ua},before:function(d,c){d.insertBefore(c,d.childNodes[0])},append:function(d,c){d.appendChild(c)},tag:function(c,d){return(d||document).getElementsByTagName(c||"*")},grab:function(m,f){var n=m.split("."),o=a.tag(n[0]),l=o.length,d=n[1],e=0,k=[];for(var h=0;h<l;h++){var c=o[h].className.split(" ");for(var g=0;g<c.length;g++){if(c[g]===d){k[e]=o[h];e++;break}}}return k},create:function(c){return document.createElement(c)},loadScript:function(d,f){if(b.loadedFiles[d]){return f()}if(b.queuedFiles[d]){b.queuedFiles[d].callbacks.push(f);return}b.queuedFiles[d]={};b.queuedFiles[d].callbacks=[];if(f){b.queuedFiles[d].callbacks.push(f)}var c=a.create("script"),e=function(){if(!c.readyState||/loaded|complete/.test(c.readyState)){c.onreadystatechange=c.onload=null;var g=b.queuedFiles[d].callbacks.length;if(b.queuedFiles[d].callbacks.length){for(var h=0;h<g;h++){b.queuedFiles[d].callbacks[h](d)}}delete b.queuedFiles[d];b.loadedFiles[d]=true}};c.src=d;if(c.readyState){c.onreadystatechange=e||null}else{c.onload=e||null}if(this.head){a.append(this.head,c)}else{a.before(this.body,c)}},hasFlashVersion:function(c){return swfobject.hasFlashPlayerVersion(c)},embedSWF:function(h,c,e,k,i,d,f,g,j){swfobject.embedSWF(h,c,e,k,i,d,f,g,j)}}.bootstrap()})(BrightTALK);var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());(function(a){a.gradeB=function(){if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var b=Math.floor(RegExp.$1);if(b<=8){return true}else{if(b>=9){if(document.documentMode<9){return true}}}}return false};a.requirements=a.requirements||{check:function(c){var b;for(b in c){if(this[b]){if(!this[b](c[b])){return false}}}return true},flashVersion:function(b){return a.dom.hasFlashVersion(b)},iOS:function(c){var b=(navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?true:false);return(b===c)},iPad:function(b){var c=(navigator.userAgent.match(/(iPad)/g)?true:false);return(c===b)},isIE:function(b){return a.dom.userAgent.ie===b},hasVideo:function(b){return !!document.createElement("video").canPlayType===b}}})(BrightTALK);(function(a){a.addEventListener=function(b,e,c){function d(f){e.call(c,f)}if(typeof window.addEventListener!=="undefined"){(c||window).addEventListener(b,d,false)}else{if(typeof window.attachEvent!=="undefined"){(c||window).attachEvent("on"+b,d)}}};a.domReadyFired=false;a.domReady=function(b){a.trigger("domReady");a.domReadyFired=true};a.events={};a.on=function(c,d){if(c==="domReady"&&a.domReadyFired){d()}var b=a.events[c]=a.events[c]||[];b.push(d)};a.trigger=function(c,d){var b=a.events[c]=a.events[c]||[];for(var e=0;e<b.length;e++){(function(f){f(d)})(b[e])}}})(BrightTALK);(function(a){a.messagingReady=false;a.attachMessagingEvents=function(){if(window.postMessage){if(!window.BrightTalkMessagingEnabled){a.addEventListener("message",a.onMessage);window.BrightTalkMessagingEnabled=true;a.messagingReady=true;a.trigger("messagingReady")}}else{a.on("domReady",function(){var b=document.createElement("div");b.id="flashTransportHolder";document.body.appendChild(b);var c=a.embed.getStaticFilePath("common/swf/flashTransportParent.swf");var d={allowScriptAccess:"always"};swfobject.embedSWF(c,"flashTransportHolder","0","0","9.0.0",{},{uniqueEmbedId:a.uniqueId},d);a.messagingReady=true;a.trigger("messagingReady")})}};a.onMessage=function(c){if(c.origin&&!c.origin.match(/(brighttalk.net|brighttalk.com)/i)){return}if(c.flashTransport){c.data=c.data.replace(/%22/g,'"').replace(/%5c/g,"\\").replace(/%26/g,"&").replace(/%25/g,"%")}function b(){var d=JSON.parse(c.data);if(d.message){a.handleMessage(d.message,d.options)}else{if(d.method){a.handleMethod(d.method,d.args)}}}if(c.origin&&c.origin.match(/brighttalk.com/)){try{b()}catch(c){}}else{b()}};a.broadcastMessage=function(e,b){var f=a.dom.grab("object.BrightTALKEmbed",a.dom.body),c;for(c=0;c<f.length;c++){var h=f[c];a.callEmbed(h,e,b)}var g=a.dom.grab("iframe.BrightTALKEmbed",a.dom.body);for(c=0;c<g.length;c++){var d=g[c];if(d.src.match(/brighttalk.com|brighttalk.net/i)){a.sendMessage(d,e,b)}}};a.callEmbed=function(d,c,b){if(typeof d[c]==="function"){d[c](b)}};a.sendMessage=function(d,e,c){var b=document.createElement("a");b.href=d.src;var f=b.protocol+"//"+b.hostname;var g={message:e,options:c};if(d.contentWindow.postMessage){d.contentWindow.postMessage(JSON.stringify(g),f)}else{document.getElementById("flashTransportHolder").sendMessage(JSON.stringify(g))}};a.handleMessage=function(c,b,d){b=b||{};if(a.allAppsReady||c==="appReady"){b.callbackId=a.registerCallback(d);a.messages[c].call(a,b)}else{a.messagesBuffer.push({message:c,options:b,callback:d})}return true};a.handleMethod=function(c,b){if(window[c]){window[c].apply(window,b)}};a.addMessageHandlers=function(b){for(var c in b){a.messages[c]=b[c]}};a.messagesBuffer=[];a.appsCount=0;a.appsReady=0;a.allAppsReady=false;a.authenticatorReady=false;a.messages={appReady:function(b){if(b.app=="authenticator"){a.authenticatorReady=true;a.handleMessage("authenticatorReady")}a.appsReady++;if(a.appsReady==a.appsCount){a.allAppsReady=true;for(var c in a.messagesBuffer){var d=a.messagesBuffer[c];a.handleMessage(d.message,d.options,d.callback)}}},triggerCallback:function(b){var c=a.messagesCallbacks[b.id];if(c){c.apply(window,b.args);delete a.messagesCallbacks[b.id]}},openOverlayPlayer:function(e){e.width=656;e.height=627;e.append=true;var d=document.getElementById("bt-overlay");if(!d){d=document.createElement("div");d.id="bt-overlay";if(!e.stylesOverriden){if(a.gradeB()){d.style.background="url("+a.embed.getStaticFilePath("brands/default/img/transparent-bg.png")+")"}else{d.style.background="rgba(255,255,255,0.7)"}d.style.zIndex=99999;d.style.width="100%";d.style.height="100%";d.style.position="absolute";d.style.top="0px";d.style.left="0px";d.style.right="0px";d.style.bottom="0px"}var c=document.createElement("div");c.id="bt-overlay-player";if(!e.stylesOverriden){if(a.gradeB()){c.style.border="2px solid #666"}else{c.style.border="2px solid #666";c.style.boxShadow="2px 2px 5px rgba(0,0,0,0.7)"}c.style.padding="5px";c.style.borderRadius="10px";c.style.position="absolute";c.style.background="white";c.style.top="50px";c.style.left="50%";c.style.width=e.width+"px";c.style.height=e.height+"px";c.style.marginLeft="-"+((e.width/2)+5)+"px"}var f=document.createElement("button");f.id="bt-close-overlay-player";f.onclick=function(){var h=document.getElementById("bt-overlay");h.style.display="none";var g=document.getElementById("bt-overlay-player");g.removeChild(g.childNodes[1])};if(!e.stylesOverriden){f.style.background="url("+a.embed.getStaticFilePath("brands/default/img/close-button.png")+")";f.style.position="absolute";f.style.padding="0px";f.style.textAlign="center";f.style.width="30px";f.style.height="30px";f.style.top="-16px";f.style.right="-16px";f.style.cursor="pointer";f.style.border="none"}c.appendChild(f);d.appendChild(c);var b=document.getElementsByTagName("body")[0];b.style.position="relative";b.style.margin="0px";b.style.padding="0px";b.appendChild(d)}new a.OverlayPlayer("bt-overlay-player",e);d.style.display="block";if(window.scroll){window.scroll(0,0)}},createAuthenticator:function(c){c.width=780;c.height=610;c.append=true;var d=document.getElementById("bt-authenticator");if(!d){d=document.createElement("div");d.id="bt-authenticator";if(!c.stylesOverriden){if(a.gradeB()){d.style.background="rgb(255,255,255)"}else{d.style.background="rgba(255,255,255,0.7)"}d.style.zIndex=99999;d.style.position="fixed";d.style.top="0px";d.style.left="0px";d.style.right="0px";d.style.bottom="0px";d.style.textAlign="center";d.style.margin="0px auto";d.style.width="0px";d.style.height="0px"}var b=document.getElementsByTagName("body")[0];b.style.position="relative";b.style.margin="0px";b.style.padding="0px";b.appendChild(d);new a.Authenticator("bt-authenticator",c)}},viewCommunication:function(b){var c=document.getElementById("bt-authenticator");if(c&&a.authenticatorReady){this.iframeIdCallingViewCommunication=b.iframeId;a.broadcastMessage("viewCommunication",b)}else{if(!c){this.pendingViewCommunicationOptions=b;a.handleMessage("createAuthenticator",b)}else{if(b.iframeId){var d=document.getElementById(b.iframeId);if(d){a.sendMessage(d,"hideLoader")}}}}},playVideo:function(b){a.handleMessage("playCommunication",b)},playCommunication:function(b){a.handleMessage("hideAuthenticator");var d=a.dom.grab(".bt-player");if(d.length>0&&!b.inOverlay){if(this.iframeIdCallingViewCommunication){var c=document.getElementById(this.iframeIdCallingViewCommunication);this.iframeIdCallingViewCommunication=null;a.sendMessage(c,"playCommunication",b);a.sendMessage(c,"playVideo",b)}else{a.broadcastMessage("playCommunication",b);a.broadcastMessage("playVideo",b)}}else{if(b.communication){this.pendingVideoOptions=b}if(b.inOverlay){a.handleMessage("openOverlayPlayer",b)}else{a.handleMessage("createPlayer",b);if(b.viewCommunicationXMLResponse){a._cachedViewCommunicationXMLResponse=b.viewCommunicationXMLResponse}}}},createPlayer:function(c){var d=document.getElementById("bt-player-placeholder");if(d){c.width=656;c.height=535;var b;if(c.jsAnalyticsMethod){b=c.jsAnalyticsMethod}c.jsAnalyticsMethod="portalAnalyticsCapture";window.portalAnalyticsCapture=function(e,g,f){if(g==="Enter / play communication."){a.trigger("analyticsMediaStarted")}else{if(g==="End communication."){a.trigger("analyticsEndOfMedia")}}if(b&&window[b]){window[b].call(window,e,g,f)}};new a.PortalPlayer("bt-player-placeholder",c);a.trigger("playerCreated")}},authenticatorReady:function(b){if(this.pendingViewCommunicationOptions){a.handleMessage("viewCommunication",this.pendingViewCommunicationOptions);this.pendingViewCommunicationOptions=undefined}},playerReady:function(b){if(this.pendingVideoOptions){this.pendingVideoOptions.autoStart=true;a.handleMessage("playCommunication",this.pendingVideoOptions);this.pendingVideoOptions=undefined}},showPlayerPlaceholder:function(b){var c=document.getElementById("bt-player-placeholder");if(c){c.className="bt-player-placeholder bt-visible"}},showAuthenticator:function(b){var c=document.getElementById("bt-authenticator");if(c){c.style.height="100%";c.style.width="100%";var d=c.getElementsByTagName("iframe")[0];d.width=d.getAttribute("data-original-width");d.height=d.getAttribute("data-original-height");a.broadcastMessage("authenticatorShown");a.broadcastMessage("hideLoader");a.trigger("authenticatorShown")}},hideAuthenticator:function(b){var c=document.getElementById("bt-authenticator");if(c){c.style.height="0px";c.style.width="0px";var d=c.getElementsByTagName("iframe")[0];d.width="0px";d.height="0px";c.style.display="block";a.broadcastMessage("authenticatorHidden");a.trigger("authenticatorHidden")}},getCommunicationInfo:function(b){a.broadcastMessage("getCommunicationInfo",b)},isAttending:function(b){a.broadcastMessage("isAttending",b)},registeredForCommunication:function(b){a.trigger("registeredForCommunication",b)},userLoggedIn:function(b){a.trigger("userLoggedIn",b)},track:function(b){a.analytics.track(b)}};a.messagesCallbacks={};a.registerCallback=function(c){if(c){var b=Math.random();a.messagesCallbacks[b]=c;return b}else{return undefined}}})(BrightTALK);(function(a){a.analytics=a.analytics||{init:function(){if(!window._gaq){window._gaq=[];(function(){var c=document.createElement("script");c.type="text/javascript";c.async=true;c.src=(document.location.protocol==="https:"?"https://ssl":"http://www")+".google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)})()}},track:function(d){var c=d.data?JSON.stringify(d.data):null;if(d.method){this.customTrack(d.method,d.category,d.action,d.data)}if(d.analyticsIds){for(var e=0;e<=d.analyticsIds.length;e++){var b=d.analyticsIds[e];this.gaTrack(b,d.category,d.action,c)}}this.gaTrack(this.BrightTALKId,d.category,d.action,c)},gaTrack:function(b,d,e,c){_gaq.push(["brighttalk._setAccount",b]);_gaq.push(["brighttalk._trackEvent",d,e,c])},customTrack:function(e,b,d,c){if(window[e]){window[e].call(window,b,d,c)}},BrightTALKId:
'UA-187516-1'
}})(BrightTALK);(function(a){a.createWidget=function(e,g,d,c){e.element=document.getElementById(g);e.options=c;e.options.player=d;e.options.domain=c.domain||a.embed.settings.domain;e.options.dataDomain=c.dataDomain||a.embed.settings.dataDomain;e.options.secureDomain=c.secureDomain||a.embed.settings.secureDomain;e.options.channelid=e.options.channelId;e.options.communicationid=e.options.communicationId;e.options.jsAnalyticsMethod=e.options.jsAnalyticsMethod;var f={target:e.element,opts:e.options};a.embed.processEmbed(f)};a.Widget=function(e,d,c){a.createWidget(this,e,d,c)};a.Authenticator=function(e,c){var d="authenticator";if(c.debug==="true"){d+=":html-debug"}else{if(c.debug==="build"){d+=":html-build"}}a.createWidget(this,e,d,c)};a.Player=function(d,c){a.createWidget(this,d,"chromeless_player",c)};a.OverlayPlayer=function(d,c){a.createWidget(this,d,"webcast_player",c)};a.PortalPlayer=function(e,c){var d="portal_player";delete c.theme;if(c.debug==="true"){d+=":html-debug";c.mediaPlayer="html5"}else{if(c.debug==="build"){d+=":html-build";c.mediaPlayer="html5"}}c.autoStart=true;a.createWidget(this,e,d,c)};a.embed=a.embed||{bootstrap:function(){var c=this;a.uniqueId=Math.floor(Math.random()*1000000000);this.bindDomReady(a.domReady);if(!window.swfobject){var d=a.embed.settings.secureDomain;a.dom.loadScript(d+c.settings.swfobject,function(){a.attachMessagingEvents();a.analytics.init();c.initEmbeds()})}else{a.attachMessagingEvents();a.analytics.init();this.initEmbeds()}a.handleMessage("hideAuthenticator")},bindDomReady:function b(d){var e=false;function c(){if(e){return}e=true;d()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){c()},false)}else{if(document.attachEvent){if(document.documentElement.doScroll&&window==window.top){function f(){if(e||!document.body){return}try{document.documentElement.doScroll("left");c()}catch(g){setTimeout(f,0)}}f()}document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){c()}})}}a.addEventListener("load",c)},createIdForEmbed:function(f){var c=f.opts.player.indexOf(":")!==-1,d=f.opts.player.substring(0,c?f.opts.player.indexOf(":"):f.opts.player.length).replace("_","-"),e="bt-"+d+"-"+BrightTALK.currentEmbedId;BrightTALK.currentEmbedId++;return e},initEmbeds:function(){var c=this;a.dom.setUserAgent();a.dom.ready(function(){var f=a.dom.grab("object.BrightTALKEmbed",a.dom.body),e=f.length;a.appsCount=e;if(a.appsCount===0){a.allAppsReady=true}for(var d=0;d<e;d++){var g=c.getConfig(f[d]);if(!g.target.id){g.target.id=a.embed.createIdForEmbed(g);c.processEmbed(g)}}})},processEmbed:function(g){var c=this;var f=g.opts.player.split(":"),d=f[1]?f[1]:false;if(d){g.opts.player=g.opts.player.replace(":"+d,"");g.opts.key=d}if(!a.players[g.opts.player]){var e=a.embed.settings.secureDomain;a.embed.settings.domain=a.embed.settings.secureDomain;a.embed.settings.dataDomain=a.embed.settings.secureDomain;a.dom.loadScript(e+c.settings.players+g.opts.player+".js",function(){c.setup(g)})}else{c.setup(g)}},setup:function(f){var c=this;f.player=f.player||c.getPlayer(f);if(!f.player){return}var e=f.player.name.indexOf("fallback")!==-1;if(e){this.setupFallbackPage(f)}else{var d=f.player.name.indexOf("html")!==-1;if(d){this.setupHtmlPlayer(f)}else{this.setupFlashPlayer(f)}}},getPlayer:function(f){var c=this,e=a.players[f.opts.player];if(f.opts.key){return c.getPlayerConfigByName(e,f.opts.key)}for(var d in e){if(!e[d].requirements||a.requirements.check(e[d].requirements)){return c.getPlayerConfigByName(e,e[d].name)}}return false},createIFrame:function(d){var c=document.createElement("iframe");c.id=d.target.id;c.width=d.opts.width;c.height=d.opts.height;c.setAttribute("data-original-width",d.opts.width);c.setAttribute("data-original-height",d.opts.height);c.scrolling="yes";c.setAttribute("frameBorder","0");c.setAttribute("allowtransparency","true");c.style.overflow="hidden";return c},renderIFrame:function(d,e){if(!e.opts.append){var c=document.createElement("div");c.appendChild(d);e.target.parentNode.insertBefore(c.firstChild,e.target);e.target.parentNode.removeChild(e.target)}else{d.id=a.embed.createIdForEmbed(e);e.target.appendChild(d)}d.src=d.src},setupFallbackPage:function(e){var d=this.createIFrame(e);var c=window.location.protocol+"//"+window.location.host;if(e.player.path.indexOf("http")===0){c=""}d.src=e.player.path;d.className="BrightTALKEmbed";this.renderIFrame(d,e);a.handleMessage("showPlayerPlaceholder")},getPlayerConfigByName:function(f,c){var e=f.length;for(var d=0;d<e;d++){if(f[d].name===c){return f[d]}}},setupHtmlPlayer:function(g){g.opts.domain=this.ensureTrailingSlash(g.opts.domain||this.settings.domain);g.opts.dataDomain=this.ensureTrailingSlash(g.opts.dataDomain||this.settings.dataDomain);g.opts.secureDomain=this.ensureTrailingSlash(g.opts.secureDomain||this.settings.secureDomain);if(!g.opts.debug){g.opts.domain=g.opts.secureDomain;g.opts.dataDomain=g.opts.secureDomain}var e=g.opts.domain+g.player.path,c=(g.player.appName)?g.player.appName:g.opts.player,f=this.buildHtmlParams(g),d=this.createIFrame(g);d.src=e+"?"+f;d.className=c.match(/chromeless_player|portal_player|converged_player/)?"BrightTALKEmbed bt-player":"BrightTALKEmbed";this.renderIFrame(d,g)},isInBTiFrame:function(){return("BrightTALK" in window&&"embedFrame" in BrightTALK)},buildHtmlParams:function(h){var e=this.isInBTiFrame()?(document.referrer?document.referrer:"unknown: iframe embed, no document referrer"):window.location.href,c=(this.isInBTiFrame()&&document.referrer)?document.referrer:window.location.href,d={domain:encodeURIComponent(h.opts.domain),dataDomain:encodeURIComponent(h.opts.dataDomain),secureDomain:encodeURIComponent(h.opts.secureDomain),debug:h.opts.debug,player:h.opts.player,appName:(h.player.appName)?h.player.appName:h.opts.player,playerName:encodeURIComponent(h.player.name),channelId:h.opts.channelid,summitId:h.opts.summitid,communicationId:h.opts.communicationid,width:h.opts.width,height:h.opts.height,autoStart:(h.opts.autoStart==="true"||h.opts.autoStart===true)?"true":"false",embedUrl:encodeURIComponent(e),messagingWindow:encodeURIComponent(c),track:h.opts.track,realmToken:h.opts.realmToken,dc:h.opts.dc,fromDc:h.opts.fromdc,css:h.opts.theme,widget:h.opts.widget,categories:encodeURIComponent(h.opts.categories),filterDropDowns:h.opts.filterDropDowns,jsAnalyticsMethod:h.opts.jsAnalyticsMethod,language:(h.opts.language)?h.opts.language.substr(0,2)+"-"+h.opts.language.substr(3).toLowerCase():h.opts.language,showTitleInClickToPlay:h.opts.showTitleInClickToPlay,noCookieSetAuth:h.opts.noCookieSetAuth,shareFunction:h.opts.shareFunction,uniqueEmbedId:a.uniqueId,mediaPlayer:h.opts.mediaPlayer,iframeId:h.target.id,showSocialIcons:h.opts.showSocialIcons,cssClasses:h.opts.cssClasses,nextWebcast:encodeURIComponent(h.opts.nextWebcast),prevWebcast:encodeURIComponent(h.opts.prevWebcast),linkType:h.opts.linkType},g=[];for(var f in d){if(d[f]){g.push(f+"="+d[f])}}return g.join("&")},setupFlashPlayer:function(k){var e={};delete k.opts.viewCommunicationXMLResponse;for(var h in k.opts){e[h]=k.opts[h]}if(k.opts.communicationid){e.commid=k.opts.communicationid}if(k.opts.theme){e.css=k.opts.theme;e.bgcolor="#000000"}if(k.opts.dataDomain||k.opts.domain){e.domain=this.ensureTrailingSlash(k.opts.dataDomain||k.opts.domain)}var j={allowScriptAccess:"always",wmode:"transparent",quality:"high",allowFullScreen:"true",bgcolor:"#000000"};if(k.opts.append){var g=document.createElement("div");g.id="bt-overlay-player-inner";k.target.appendChild(g);k.target=g}var d=this.ensureTrailingSlash(k.opts.secureDomain||a.embed.settings.secureDomain);var c=(k.player.appName)?k.player.appName:k.opts.player;var f=d+k.player.path;a.dom.embedSWF(f,k.target.id,k.opts.width,k.opts.height,(k.player.requirements&&k.player.requirements.flashVersion?k.player.requirements.flashVersion:a.embed.settings.defaultFlashVersion),"clients/flashplatform/common/swfs/expressInstall.swf",e,j,{"class":c.match(/chromeless_player|portal_player|converged_player/)?"BrightTALKEmbed bt-player":"BrightTALKEmbed"})},getStaticFilePath:function(d){var c=this.ensureTrailingSlash(a.embed.settings.secureDomain);return c+a.embed.settings.staticPath+d},getConfig:function(m){var e={width:m.width||1,height:m.height||1},l={target:m},h=m.childNodes,o,k,c,g,d=h.length;for(var j=0;j<d;j++){g=h[j];if(g.nodeName!=="PARAM"){continue}var f=g.value;if(f==="auto"){var n=g.name;if(g.name==="communicationid"){n="commid"}f=swfobject.getQueryParamValue(n)}else{f=g.value}if(g.name.indexOf(".")===-1){e[g.name]=f}else{o=g.name.split(".");k=o[0];c=o[1];if(!e[k]){e[k]={}}e[k][c]=f}}l.opts=e;return l},ensureTrailingSlash:function(c){return(c.substr(c.length-1,1)==="/"?c:c+"/")},settings:{defaultFlashVersion:"10.0.0",domain:
'https://www.brighttalk.com/'
,dataDomain:
'https://www.brighttalk.com/'
,secureDomain:
'https://www.brighttalk.com/'
,players:"clients/js/embed/players/",swfobject:"clients/js/common/1.7.0/scripts/swfobject.js",staticPath:"clients/js/static/1.7.0/"}};a.embed.bootstrap()})(BrightTALK);