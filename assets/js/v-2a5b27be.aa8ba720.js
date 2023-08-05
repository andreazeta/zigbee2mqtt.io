"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[52746],{151220:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-2a5b27be","path":"/advanced/more/tuya_xiaomi_ota_url.html","title":"Get Tuya and Xiaomi OTA url","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Step 1: running the proxy","slug":"step-1-running-the-proxy","link":"#step-1-running-the-proxy","children":[]},{"level":2,"title":"Step 2: setup the Android emulator","slug":"step-2-setup-the-android-emulator","link":"#step-2-setup-the-android-emulator","children":[]},{"level":2,"title":"Step 3a: get the TuYa OTA url","slug":"step-3a-get-the-tuya-ota-url","link":"#step-3a-get-the-tuya-ota-url","children":[]},{"level":2,"title":"Step 3b: get the Xiaomi OTA url","slug":"step-3b-get-the-xiaomi-ota-url","link":"#step-3b-get-the-xiaomi-ota-url","children":[]},{"level":2,"title":"Step 4: add OTA to zigbee-ota","slug":"step-4-add-ota-to-zigbee-ota","link":"#step-4-add-ota-to-zigbee-ota","children":[]}],"git":{"updatedTime":1691234182000},"filePathRelative":"advanced/more/tuya_xiaomi_ota_url.md"}')},770291:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var o=a(166252);const i=a.p+"assets/img/android_studio_run.429dab07.png",r=a.p+"assets/img/android_studio_adv.eb66c947.png",l=a.p+"assets/img/tuya_ota.c1e743af.png",n=(0,o._)("h1",{id:"get-tuya-and-xiaomi-ota-url",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#get-tuya-and-xiaomi-ota-url","aria-hidden":"true"},"#"),(0,o.Uk)(" Get Tuya and Xiaomi OTA url")],-1),u=(0,o._)("p",null,"This guide explains how to retrieve a TuYa or Xiaomi OTA file for your device. This file can then be used to update your TuYa/Xiaomi device via Zigbee2MQTT.",-1),h=(0,o._)("p",null,"Prerequisites:",-1),d=(0,o._)("li",null,"Docker",-1),s=(0,o._)("li",null,"TuYa bridge or Xiaomi gateway",-1),p={href:"https://developer.android.com/studio",target:"_blank",rel:"noopener noreferrer"},c=(0,o.uE)('<h2 id="step-1-running-the-proxy" tabindex="-1"><a class="header-anchor" href="#step-1-running-the-proxy" aria-hidden="true">#</a> Step 1: running the proxy</h2><p>Execute the following command: <code>docker run --rm -it -p 8080:8080 mitmproxy/mitmproxy</code></p><h2 id="step-2-setup-the-android-emulator" tabindex="-1"><a class="header-anchor" href="#step-2-setup-the-android-emulator" aria-hidden="true">#</a> Step 2: setup the Android emulator</h2><p>Start Android Studio and create a new empty project:</p><ol><li>File -&gt; New -&gt; New Project...</li><li>Phone and Tablet -&gt; Empty Activity -&gt; Next</li><li>Finish</li><li>Click on the emulator (&quot;Pixel_3a_...&quot; in the case below) -&gt; Device Manager <br> <img src="'+i+'" alt=""></li><li>Click on the pencil icon of the device, under &quot;Show Advanced Settings&quot; change the &quot;Internal Storage&quot; to &quot;2000&quot;. Click &quot;Finish&quot;.</li><li>Start the emulator by clicking the play icon. <br> <img src="'+r+'" alt=""></li><li>On the emulator, go to Settings -&gt; Network &amp; internet -&gt; Internet -&gt; AndroidWifi -&gt; Edit (pencil right top) -&gt; Advanced options -&gt; Proxy -&gt; Manual. For proxy host name fill in the IP address of your computer (e.g. 192.168.2.145), for port fill in 8080. Save.</li><li>Open Chrome on the emulator, go to http://mitm.it and click on &quot;Get mitmproxy-ca-cert.cer&quot; under Android.</li><li>Go to settings again, Security -&gt; Encryption &amp; credentials -&gt; Install a certificate -&gt; CA certificate -&gt; Install anyway -&gt; Drawer icon -&gt; Downloads -&gt; click on the downloaded certificate.</li></ol><h2 id="step-3a-get-the-tuya-ota-url" tabindex="-1"><a class="header-anchor" href="#step-3a-get-the-tuya-ota-url" aria-hidden="true">#</a> Step 3a: get the TuYa OTA url</h2>',6),g={href:"https://aapks.com/download.php?dl=48267761",target:"_blank",rel:"noopener noreferrer"},m=(0,o._)("li",null,"Open the TuYa Smart Life app in the emulator, log in with your account",-1),k={href:"https://apps.apple.com/nl/app/smart-life-smart-living/id1115101477",target:"_blank",rel:"noopener noreferrer"},f={href:"https://apps.apple.com/nl/app/tuya-smart/id1034649547",target:"_blank",rel:"noopener noreferrer"},b=(0,o._)("strong",null,"not this",-1),y=(0,o._)("li",null,'Click on the device -> edit (pencil icon right top). Click "Check for Firmware Upgrade".',-1),_=(0,o._)("li",null,[(0,o.Uk)("If an firmware upgrade is available, quickly go back to the output of mitm (step 1), click on the latest request (yes you can click in the console window). This will show your the OTA url (see red box below). "),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("Tip: to go back to the overview of requests press the "),(0,o._)("code",null,"Q"),(0,o.Uk)(" key on your keyboard.")])])],-1),w=(0,o._)("p",null,[(0,o._)("img",{src:l,alt:""})],-1),v=(0,o._)("h2",{id:"step-3b-get-the-xiaomi-ota-url",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#step-3b-get-the-xiaomi-ota-url","aria-hidden":"true"},"#"),(0,o.Uk)(" Step 3b: get the Xiaomi OTA url")],-1),T=(0,o._)("p",null,"NOTE: This only works for native Aqara gateways which can be connected to the Aqara Home app (not the Xiaomi home app!)",-1),x=(0,o._)("ul",null,[(0,o._)("li",null,"Works: ZHWG16LM/HE1-G0, ZHWG15LM, ZHWG12LM"),(0,o._)("li",null,"Doesn't work: ZNDMWG03LM, DGNWG02LM")],-1),A={href:"https://apkpure.com/nl/aqara-home/com.lumiunited.aqarahome",target:"_blank",rel:"noopener noreferrer"},U=(0,o._)("li",null,"Open the Aqara home app in the emulator, log in with your account",-1),q=(0,o._)("li",null,"Make sure the Aqara gateway + the device you want to get the OTA of is already coupled to your account, this cannot be done from the emulator so use your phone for this.",-1),O=(0,o._)("li",null,"Click on your device and check for a firmware upgrade.",-1),S=(0,o._)("li",null,"If an firmware upgrade is available, quickly go back to the output of mitm (step 1), click on the latest request (yes you can click in the console window). This will show your the OTA url (see screenshot of step 3a).",-1),W=(0,o._)("h2",{id:"step-4-add-ota-to-zigbee-ota",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#step-4-add-ota-to-zigbee-ota","aria-hidden":"true"},"#"),(0,o.Uk)(" Step 4: add OTA to zigbee-ota")],-1),M={href:"https://github.com/koenkk/zigbee-ota#adding-new-and-updating-existing-ota-files",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/koenkk/zigbee-ota",target:"_blank",rel:"noopener noreferrer"},D=(0,o._)("code",null,"ota: ota.zigbeeOTA",-1),z={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/3e45f8f13b419ea8ce33fb3d30b11f5ac1bdec08/devices/tuya.js#L1172",target:"_blank",rel:"noopener noreferrer"},G={},E=(0,a(983744).Z)(G,[["render",function(e,t){const a=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[n,u,h,(0,o._)("ul",null,[d,s,(0,o._)("li",null,[(0,o._)("a",p,[(0,o.Uk)("Android Studio"),(0,o.Wm)(a)])])]),c,(0,o._)("ol",null,[(0,o._)("li",null,[(0,o.Uk)("Download the TuYa app apk from "),(0,o._)("a",g,[(0,o.Uk)("this link"),(0,o.Wm)(a)]),(0,o.Uk)(" (IMPORTANT: newer version don't work, tested with 3.12.6). Drag the downloaded apk on the emulator (which will install it).")]),m,(0,o._)("li",null,[(0,o.Uk)("Make sure the TuYa bridge + the device you want to get the OTA of is already coupled to your account, this cannot be done from the emulator so use your phone for this. Make sure to use the same app on your phone, otherwise the device will not show up (e.g. for iOS use "),(0,o._)("a",k,[(0,o.Uk)("this"),(0,o.Wm)(a)]),(0,o.Uk)(", "),(0,o._)("a",f,[b,(0,o.Wm)(a)]),(0,o.Uk)(").")]),y,_]),w,v,T,x,(0,o._)("ol",null,[(0,o._)("li",null,[(0,o.Uk)("Download the Aqara home app apk from "),(0,o._)("a",A,[(0,o.Uk)("this link"),(0,o.Wm)(a)]),(0,o.Uk)(", tested with version 2.2.5. Drag the downloaded apk on the emulator (which will install it).")]),U,q,O,S]),W,(0,o._)("ol",null,[(0,o._)("li",null,[(0,o.Uk)("Follow "),(0,o._)("a",M,[(0,o.Uk)("this guide"),(0,o.Wm)(a)]),(0,o.Uk)(" to add the OTA to the "),(0,o._)("a",C,[(0,o.Uk)("zigbee-OTA"),(0,o.Wm)(a)]),(0,o.Uk)(" repository.")]),(0,o._)("li",null,[(0,o.Uk)("Enable the ota by adding "),D,(0,o.Uk)(" to your device definition ("),(0,o._)("a",z,[(0,o.Uk)("example"),(0,o.Wm)(a)]),(0,o.Uk)(").")])])])}]])}}]);