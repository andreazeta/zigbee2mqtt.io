"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[12024],{719109:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-72a798bf","path":"/devices/E2112.html","title":"IKEA E2112 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E2112 control via MQTT","description":"Integrate your IKEA E2112 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-03-01T15:36:39.000Z"},"excerpt":"","headers":[{"level":2,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Pm25 (numeric)","slug":"pm25-numeric","link":"#pm25-numeric","children":[]},{"level":3,"title":"Voc_index (numeric)","slug":"voc-index-numeric","link":"#voc-index-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1691234182000},"filePathRelative":"devices/E2112.md"}')},262690:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var a=i(166252);const n=(0,a._)("h1",{id:"ikea-e2112",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ikea-e2112","aria-hidden":"true"},"#"),(0,a.Uk)(" IKEA E2112")],-1),o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"E2112")],-1),d=(0,a._)("td",null,"Vendor",-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Vindstyrka air quality and humidity sensor")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"temperature, humidity, pm25, voc_index, linkquality")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E2112.jpg",alt:"IKEA E2112"})])],-1),c=(0,a._)("h1",{id:"notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Notes")],-1),h=(0,a._)("h2",{id:"pairing",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,a.Uk)(" Pairing")],-1),p=(0,a._)("p",null,"Pair the sensor to Zigbee2MQTT by quickly pressing the pair button 4x to get it connected.",-1),m=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),f=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),v=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="pm25-numeric" tabindex="-1"><a class="header-anchor" href="#pm25-numeric" aria-hidden="true">#</a> Pm25 (numeric)</h3><p>Measured PM2.5 (particulate matter) concentration. Value can be found in the published state on the <code>pm25</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>µg/m³</code>.</p><h3 id="voc-index-numeric" tabindex="-1"><a class="header-anchor" href="#voc-index-numeric" aria-hidden="true">#</a> Voc_index (numeric)</h3><p>Sensirion VOC index. Value can be found in the published state on the <code>voc_index</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),b={},g=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),n,(0,a._)("table",null,[o,(0,a._)("tbody",null,[r,(0,a._)("tr",null,[d,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=IKEA"},{default:(0,a.w5)((()=>[(0,a.Uk)("IKEA")])),_:1})])]),u,l,s])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,h,p,(0,a.kq)(" Notes END: Do not edit below this line "),m,(0,a._)("p",null,[(0,a.Uk)("This device supports OTA updates, for more information see "),(0,a.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("OTA updates")])),_:1}),(0,a.Uk)(".")]),f,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),v])}]])}}]);