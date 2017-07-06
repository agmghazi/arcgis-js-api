// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/_base/event","dojo/dom-attr","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dojo/keys","dojo/on","dojo/query","dojo/i18n!../nls/jsapi","dojo/text!./templates/Geocoder.html","dojo/uacss","dojo/_base/kernel","dijit/a11yclick","dijit/_TemplatedMixin","dijit/focus","dijit/_FocusMixin","../kernel","../urlUtils","../SpatialReference","../graphic","../symbols/PictureMarkerSymbol","./_EventedWidget","../geometry/Point","../geometry/Extent","../tasks/locator","../tasks/query","../tasks/QueryTask","../geometry/scaleUtils"],function(e,t,s,o,i,r,a,n,c,h,d,l,u,g,p,_,m,f,v,y,G,C,w,M,N,k,R,x,S,O,E,b){var A=t("esri.dijit.Geocoder",[k,f,y],{templateString:g,reHostedFS:/https?:\/\/services.*\.arcgis\.com/i,_eventMap:{select:["result"],"find-results":["results"],"auto-complete":["results"],"geocoder-select":["geocoder"],clear:!0,"enter-key-select":!0,load:!0},constructor:function(t,o){_.deprecated("esri.dijit.Geocoder","Use esri.dijit.Search instead","4.0"),this._css={GeocoderContainerClass:"esriGeocoderContainer",GeocoderClass:"esriGeocoder",GeocoderMultipleClass:"esriGeocoderMultiple",GeocoderIconClass:"esriGeocoderIcon",GeocoderActiveClass:"esriGeocoderActive",GeocoderResultsOpenClass:"esriGeocoderResultsOpen",GeocoderMenuOpenClass:"esriGeocoderMenuOpen",loadingClass:"esriGeocoderLoading",resultsContainerClass:"esriGeocoderResults",resultsItemClass:"esriGeocoderResult",resultsItemEvenClass:"esriGeocoderResultEven",resultsItemOddClass:"esriGeocoderResultOdd",resultsItemFirstClass:"esriGeocoderResultFirst",resultsItemLastClass:"esriGeocoderResultLast",resultsPartialMatchClass:"esriGeocoderResultPartial",searchButtonClass:"esriGeocoderSearch",clearButtonClass:"esriGeocoderReset",hasValueClass:"esriGeocoderHasValue",geocoderMenuClass:"esriGeocoderMenu",geocoderMenuHeaderClass:"esriGeocoderMenuHeader",geocoderMenuCloseClass:"esriGeocoderMenuClose",activeMenuClass:"esriGeocoderMenuActive",geocoderMenuArrowClass:"esriGeocoderMenuArrow",geocoderSelectedClass:"esriGeocoderSelected",geocoderSelectedCheckClass:"esriGeocoderSelectedCheck",GeocoderClearClass:"esriGeocoderClearFloat"},this.options={autoComplete:!1,arcgisGeocoder:!0,value:"",theme:"simpleGeocoder",activeGeocoderIndex:0,maxLocations:6,minCharacters:3,searchDelay:300,geocoderMenu:!0,autoNavigate:!0,showResults:!0,map:null,activeGeocoder:null,geocoders:null,zoomScale:1e4,highlightLocation:!1,symbol:new N(e.toUrl("./images/sdk_gps_location.png"),28,28),graphicsLayer:null};var i=s.mixin({},this.options,t);this.set("autoComplete",i.autoComplete),this.set("arcgisGeocoder",i.arcgisGeocoder),this.set("value",i.value),this.set("theme",i.theme),this.set("activeGeocoderIndex",i.activeGeocoderIndex),this.set("maxLocations",i.maxLocations),this.set("minCharacters",i.minCharacters),this.set("searchDelay",i.searchDelay),this.set("geocoderMenu",i.geocoderMenu),this.set("autoNavigate",i.autoNavigate),this.set("showResults",i.showResults),this.set("map",i.map),this.set("activeGeocoder",i.activeGeocoder),this.set("geocoders",i.geocoders),this.set("zoomScale",i.zoomScale),this.set("highlightLocation",i.highlightLocation),this.set("symbol",i.symbol),this.set("graphicsLayer",i.graphicsLayer),this.set("results",[]),this._i18n=u,this._deferreds=[],this._defaultSR=new w(4326),this.watch("value",this._updateValue),this.watch("theme",this._updateTheme),this.watch("activeGeocoder",this._setActiveGeocoder),this.watch("activeGeocoderIndex",this._setActiveGeocoderIndex),this.watch("geocoders",this._updateGeocoder),this.watch("arcgisGeocoder",this._updateGeocoder),this.watch("geocoderMenu",this._updateGeocoder),this.watch("map",this._setupEvents),this.domNode=o},startup:function(){return this.inherited(arguments),this._geocoders.length?this.domNode?void(this.get("map")?this.get("map").loaded?this._init():d.once(this.get("map"),"load",s.hitch(this,function(){this._init()})):this._init()):(console.log("Geocoder:: domNode is undefined."),void this.destroy()):(console.log("Geocoder:: No geocoders defined."),void this.destroy())},postCreate:function(){this.inherited(arguments),this.own(d(this.submitNode,m,s.hitch(this,this._findThenSelect))),this.own(d(this.geocoderMenuArrowNode,m,s.hitch(this,this._toggleGeolocatorMenu))),this.own(d(this.inputNode,m,s.hitch(this,this._inputClick))),this.own(d(this.clearNode,m,s.hitch(this,this.clear))),this.own(d(this.geocoderMenuCloseNode,m,s.hitch(this,this._hideGeolocatorMenu))),this._updateGeocoder(),this._setupEvents(),this.get("value")&&this._checkStatus(),this._hideMenus()},destroy:function(){this._removeEvents(),c.empty(this.domNode),this.inherited(arguments)},clear:function(){this.onClear();var e=this.get("highlightGraphic"),t=this.get("graphicsLayer");e&&(t?t.remove(e):this.get("map").graphics.remove(e),this.set("highlightGraphic",null)),r.set(this.inputNode,"value",""),this.set("value",""),this.set("results",[]),a.remove(this.containerNode,this._css.hasValueClass),r.set(this.clearNode,"title",""),this._hideMenus(),this._hideLoading()},show:function(){n.set(this.domNode,"display","block")},hide:function(){n.set(this.domNode,"display","none")},find:function(e){var t=new o;if(e)if("string"==typeof e)this._findQuery(e).then(function(e){t.resolve(e)});else if("object"==typeof e&&e.hasOwnProperty("geometry")){var i;switch(e.geometry.type){case"extent":i=e.geometry.getCenter();break;case"multipoint":i=e.geometry.getExtent().getCenter();break;case"point":i=e.geometry;break;case"polygon":i=e.geometry.getExtent().getCenter();break;case"polyline":i=e.geometry.getExtent().getCenter()}i&&this._reverseGeocodePoint(i,e.geometry).then(function(o){o.results[0]&&(e.hasOwnProperty("attributes")&&o.results[0].feature.setAttributes(s.mixin(o.results[0].feature.attributes,e.attributes)),e.hasOwnProperty("infoTemplate")&&o.results[0].feature.setInfoTemplate(e.infoTemplate),e.hasOwnProperty("symbol")&&o.results[0].feature.setSymbol(e.symbol)),t.resolve(o)},function(e){t.reject(e)})}else if("object"==typeof e&&"point"===e.type)this._reverseGeocodePoint(e).then(function(e){t.resolve(e)},function(e){t.reject(e)});else if(e instanceof Array&&2===e.length){var r=new R(e,new w({wkid:4326}));this._reverseGeocodePoint(r).then(function(e){t.resolve(e)},function(e){t.reject(e)})}else t.reject("Geocoder:: Invalid find type");else this._findQuery(this.get("value")).then(function(e){t.resolve(e)});return t.promise},focus:function(){v.focus(this.inputNode);var e=this.get("map");e&&e.disableKeyboardNavigation()},blur:function(){v.curNode&&v.curNode.blur(),this.inputNode.blur(),this._hideMenus();var e=this.get("map");e&&e.enableKeyboardNavigation()},select:function(e){if(this.onSelect(e),this._hideMenus(),this._hideLoading(),this.get("autoNavigate")&&e&&e.hasOwnProperty("extent")&&this.get("map")&&this.get("map").setExtent(e.extent),e.feature){var t=this.get("highlightGraphic"),s=this.get("graphicsLayer"),o=this.get("symbol")||e.feature.symbol;t?(t.setGeometry(e.feature.geometry),t.setAttributes(e.feature.attributes),t.setInfoTemplate(e.feature.infoTemplate),t.setSymbol(o)):(t=e.feature,this.get("highlightLocation")&&(t.setSymbol(o),s?s.add(t):this.get("map").graphics.add(t))),this.set("highlightGraphic",t)}},onSelect:function(){},onFindResults:function(){},onAutoComplete:function(){},onGeocoderSelect:function(){},onClear:function(){},onEnterKeySelect:function(){},onLoad:function(){},_onFocus:function(){this.focus(),this.inherited(arguments)},_onBlur:function(){this.blur(),this.inherited(arguments)},_autoComplete:function(){var e=this.get("activeGeocoder"),t=this.reHostedFS.test(e.url);("query"!==e.type||t)&&this._query({delay:this.get("searchDelay"),autoComplete:!0,search:this.get("value")}).then(s.hitch(this,function(e){this.onAutoComplete(e),this.get("showResults")&&this._showResults(e)}))},_init:function(){this.set("loaded",!0),this.onLoad()},_containsNonLatinCharacter:function(e){for(var t=0;t<e.length;t++)if(e.charCodeAt(t)>255)return!0;return!1},_findQuery:function(e){var t=new o;return this._query({delay:0,search:e}).then(s.hitch(this,function(e){this.onFindResults(e),t.resolve(e)}),s.hitch(this,function(e){this.onFindResults(e),t.reject(e)})),t.promise},_reverseGeocodePoint:function(e,t){var i=new o;if(e&&this.get("activeGeocoder")){var r=t||e,a=this.get("activeGeocoder").distance||1500;this._task.outSpatialReference=this._defaultSR,this.get("map")&&(this._task.outSpatialReference=this.get("map").spatialReference),this._task.locationToAddress(e,a,s.hitch(this,function(e){var t=this._hydrateResult(e),s={results:[t],geometry:r};this.onFindResults(s),i.resolve(s)}),s.hitch(this,function(e){i.reject(e)}))}else i.reject("Geocoder:: no point or active geocoder defined");return i.promise},_setEsriGeocoder:function(){this.get("arcgisGeocoder")?("object"==typeof this.get("arcgisGeocoder")?this._arcgisGeocoder=this.get("arcgisGeocoder"):this._arcgisGeocoder={},this._arcgisGeocoder.hasOwnProperty("suggest")||(this._arcgisGeocoder.suggest=!0),this._arcgisGeocoder.hasOwnProperty("singleLineFieldName")||(this._arcgisGeocoder.singleLineFieldName="SingleLine"),this._arcgisGeocoder.url||(this._arcgisGeocoder.url=C.getProtocolForWebResource()+"//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"),this._arcgisGeocoder.name||(this._arcgisGeocoder.name=u.widgets.Geocoder.esriGeocoderName),this._arcgisGeocoder.hasOwnProperty("localSearchOptions")||(this._arcgisGeocoder.localSearchOptions={minScale:3e5,distance:5e4}),this.set("arcgisGeocoder",this._arcgisGeocoder)):this.set("arcgisGeocoder",!1)},_setActiveGeocoder:function(){this.set("activeGeocoder",this._geocoders[this.get("activeGeocoderIndex")]),"query"===this.activeGeocoder.type?this._task=new E(this.get("activeGeocoder").url):this._task=new S(this.get("activeGeocoder").url),this._updatePlaceholder()},_setGeocoderList:function(){var e=[];this.get("arcgisGeocoder")&&(e=e.concat([this._arcgisGeocoder])),this.get("geocoders")&&this.get("geocoders").length&&(e=e.concat(this.get("geocoders"))),this._geocoders=e},_updateGeocoder:function(){this.set("activeGeocoderIndex",0),this._setEsriGeocoder(),this._setGeocoderList(),this._setActiveGeocoder(),this._insertGeocoderMenuItems()},_updatePlaceholder:function(){this._placeholder="",this.get("activeGeocoder")&&this.get("activeGeocoder").placeholder&&(this._placeholder=this.get("activeGeocoder").placeholder),r.set(this.inputNode,"placeholder",this._placeholder),r.set(this.submitNode,"title",this._placeholder)},_updateValue:function(){var e=arguments[2];this._ignoreUpdateValue||(r.set(this.inputNode,"value",e),this._checkStatus())},_updateTheme:function(){var e=arguments[1],t=arguments[2];a.remove(this.domNode,e),a.add(this.domNode,t)},_setActiveGeocoderIndex:function(){var e=arguments[1],t=arguments[2];this.set("activeGeocoderIndex",t),this._setActiveGeocoder(),this._hideMenus(),this._insertGeocoderMenuItems();var s={attr:this.get("activeGeocoder"),oldVal:e,newVal:t};this.onGeocoderSelect(s)},_clearQueryTimeout:function(){this._queryTimer&&clearTimeout(this._queryTimer)},_query:function(e){e||(e={delay:0}),e.search||(e.search=this.get("value"));var t=new o;return this._deferreds.push(t),e.delay?(this._clearQueryTimeout(),this._queryTimer=setTimeout(s.hitch(this,function(){this._performTask(t,e)}),e.delay)):this._performTask(t,e),t.promise},_performTask:function(e,t){if(t.search){this._hideGeolocatorMenu(),this._showLoading();var o="";this.get("activeGeocoder").prefix&&(o+=this.get("activeGeocoder").prefix),o+=t.search,this.get("activeGeocoder").suffix&&(o+=this.get("activeGeocoder").suffix);var i=this.get("activeGeocoder").outFields;i&&(i instanceof Array||(i=[i]));var r=this.get("maxLocations")||6,a=this.get("activeGeocoder").searchExtent,n=this._defaultSR;if(this.get("map")&&(n=this.get("map").spatialReference),"query"===this.get("activeGeocoder").type){var c=new O;c.outSpatialReference=n,c.returnGeometry=!0,c.num=r,a&&(c.geometry=a);var h=this.get("activeGeocoder").exactMatch,d=this.get("activeGeocoder").field,l="";this.reHostedFS.test(this.get("activeGeocoder").url)&&this._containsNonLatinCharacter(o)&&(l="N"),h?c.where=d+" = "+l+"'"+o+"'":c.where="UPPER("+d+") LIKE "+l+"'%"+o.toUpperCase()+"%'",i&&(c.outFields=i),this._task.execute(c,s.hitch(this,function(s){this._receivedResults(s.features,e,t)}),s.hitch(this,function(s){this._receivedResults([],e,t)}))}else{var u={};if(this.get("activeGeocoder").categories&&(u.categories=this.get("activeGeocoder").categories),this._task.outSpatialReference=n,this.get("map")&&this.get("activeGeocoder").localSearchOptions&&this.get("activeGeocoder").localSearchOptions.hasOwnProperty("distance")&&this.get("activeGeocoder").localSearchOptions.hasOwnProperty("minScale")){var g=this.get("map").getScale();(!this.get("activeGeocoder").localSearchOptions.minScale||g&&g<=parseFloat(this.get("activeGeocoder").localSearchOptions.minScale))&&(u.location=this.get("map").extent.getCenter(),u.distance=this.get("activeGeocoder").localSearchOptions.distance)}this.get("activeGeocoder").suggest&&t.autoComplete?(u.text=o,a&&(u.searchExtent=a),this._task.suggestLocations(u).then(s.hitch(this,function(s){this._receivedResults(s,e,t)}),s.hitch(this,function(s){this._receivedResults(s,e,t)}))):(u.address={},u.maxLocations=r,a&&(u.searchExtent=a),this.get("activeGeocoder").sourceCountry&&(u.countryCode=this.get("activeGeocoder").sourceCountry),t.magicKey&&(u.magicKey=t.magicKey),this.get("activeGeocoder").singleLineFieldName?u.address[this.get("activeGeocoder").singleLineFieldName]=o:u.address["Single Line Input"]=o,i&&(u.outFields=i),this._task.addressToLocations(u,s.hitch(this,function(s){this._receivedResults(s,e,t)}),s.hitch(this,function(s){this._receivedResults(s,e,t)})))}}else this._hideLoading(),e.reject("Geocoder:: no search to perform")},_showResults:function(){this._hideGeolocatorMenu();var e="";if(this.get("results")&&this.get("results").length&&this.resultsNode){var t,s=this.get("value"),o=new RegExp("("+s+")","gi");for(e+='<ul role="presentation">',t=0;t<this.get("results").length&&5>t;++t){var i=this.get("results")[t].text||this.get("results")[t].name,r=this._css.resultsItemClass+" ";r+=t%2===0?this._css.resultsItemOddClass:this._css.resultsItemEvenClass,0===t?r+=" "+this._css.resultsItemFirstClass:t===this.get("results").length-1&&(r+=" "+this._css.resultsItemLastClass),e+='<li title="'+i+'" data-text="'+i+'" data-item="true" data-index="'+t+'" role="menuitem" tabindex="0" class="'+r+'">'+i.replace(o,'<strong class="'+this._css.resultsPartialMatchClass+'">$1</strong>')+"</li>"}e+="</ul>",this.resultsNode&&(this.resultsNode.innerHTML=e),this._autoCompleteEvent(),this._showResultsMenu()}else this.resultsNode&&(this.resultsNode.innerHTML=e),this._hideResultsMenu()},_receivedResults:function(e,t){this._hideLoading();var s=this._hydrateResults(e);this.set("results",s);var o={results:s,value:this.get("value")};t.resolve(o)},_showLoading:function(){a.add(this.containerNode,this._css.loadingClass)},_hideLoading:function(){a.remove(this.containerNode,this._css.loadingClass)},_showGeolocatorMenu:function(){a.add(this.containerNode,this._css.activeMenuClass),a.add(this.domNode,this._css.GeocoderMenuOpenClass),n.set(this.geocoderMenuNode,"display","block"),r.set(this.geocoderMenuInsertNode,"aria-hidden","false"),r.set(this.geocoderMenuArrowNode,"aria-expanded","true")},_hideGeolocatorMenu:function(){a.remove(this.containerNode,this._css.activeMenuClass),a.remove(this.domNode,this._css.GeocoderMenuOpenClass),n.set(this.geocoderMenuNode,"display","none"),r.set(this.geocoderMenuInsertNode,"aria-hidden","true"),r.set(this.geocoderMenuArrowNode,"aria-expanded","false")},_toggleGeolocatorMenu:function(){this._hideResultsMenu();var e=n.get(this.geocoderMenuNode,"display");"block"===e?this._hideGeolocatorMenu():this._showGeolocatorMenu()},_showResultsMenu:function(){a.add(this.containerNode,this._css.GeocoderActiveClass),a.add(this.domNode,this._css.GeocoderResultsOpenClass),n.set(this.resultsNode,"display","block"),r.set(this.resultsNode,"aria-hidden","false")},_hideResultsMenu:function(){n.set(this.resultsNode,"display","none"),a.remove(this.containerNode,this._css.GeocoderActiveClass),a.remove(this.domNode,this._css.GeocoderResultsOpenClass),r.set(this.resultsNode,"aria-hidden","true")},_hideMenus:function(){this._hideGeolocatorMenu(),this._hideResultsMenu()},_insertGeocoderMenuItems:function(){if(this.get("geocoderMenu")&&this._geocoders&&this._geocoders.length>1){var e,t="",s="";for(t+='<ul role="presentation">',e=0;e<this._geocoders.length;e++){s=this._css.resultsItemClass+" ",s+=e%2===0?this._css.resultsItemOddClass:this._css.resultsItemEvenClass,e===this.get("activeGeocoderIndex")&&(s+=" "+this._css.geocoderSelectedClass),0===e?s+=" "+this._css.resultsItemFirstClass:e===this._geocoders.length-1&&(s+=" "+this._css.resultsItemLastClass);var o=this._geocoders[e].name||u.widgets.Geocoder.main.untitledGeocoder;t+='<li data-index="'+e+'" data-item="true" role="menuitem" tabindex="0" class="'+s+'">',t+='<div class="'+this._css.geocoderSelectedCheckClass+'"></div>',t+=o,t+='<div class="'+this._css.GeocoderClearClass+'"></div>',t+="</li>"}t+="</ul>",this.geocoderMenuInsertNode.innerHTML=t,this._geocoderMenuEvent(),n.set(this.geocoderMenuNode,"display","none"),n.set(this.geocoderMenuArrowNode,"display","block"),a.add(this.containerNode,this._css.GeocoderMultipleClass)}else this.geocoderMenuInsertNode.innerHTML="",n.set(this.geocoderMenuNode,"display","none"),n.set(this.geocoderMenuArrowNode,"display","none"),a.remove(this.containerNode,this._css.GeocoderMultipleClass)},_checkStatus:function(){this.get("value")?(a.add(this.containerNode,this._css.hasValueClass),r.set(this.clearNode,"title",u.widgets.Geocoder.main.clearButtonTitle)):this.clear()},_autoCompleteEvent:function(){var e=l('[data-item="true"]',this.resultsNode);this._acEvent&&this._acEvent.remove(),this._acEvent=d(e,"click, keydown",s.hitch(this,function(t){this._clearQueryTimeout();var o,a=parseInt(r.get(t.currentTarget,"data-index"),10),n=r.get(t.currentTarget,"data-text");if("click"===t.type||"keydown"===t.type&&t.keyCode===h.ENTER){if(r.set(this.inputNode,"value",n),this.set("value",n),this.get("results")&&this.get("results")[a]){var c=this.get("results")[a];if(c.name)this.select(c);else{var d=c.text,l=c.magicKey||null,u={delay:0,search:d,magicKey:l};this._query(u).then(s.hitch(this,function(e){this.select(e.results[0])}))}}}else if("keydown"!==t.type||t.keyCode!==h.BACKSPACE&&t.keyCode!==h.DELETE)"keydown"===t.type&&t.keyCode===h.UP_ARROW?(i.stop(t),o=a-1,0>o?this.inputNode.focus():e[o].focus()):"keydown"===t.type&&t.keyCode===h.DOWN_ARROW?(i.stop(t),o=a+1,o>=e.length?this.inputNode.focus():e[o].focus()):t.keyCode===h.ESCAPE&&this._hideMenus();else{i.stop(t),this.inputNode.focus();var g=this.inputNode.value.slice(0,-1);r.set(this.inputNode,"value",g),this.set("value",g)}}))},_geocoderMenuEvent:function(){var e=l('[data-item="true"]',this.geocoderMenuInsertNode);this._gmEvent&&this._gmEvent.remove(),this._gmEvent=d(e,"click, keydown",s.hitch(this,function(t){var s,o=parseInt(r.get(t.currentTarget,"data-index"),10);"click"===t.type||"keydown"===t.type&&t.keyCode===h.ENTER?(this._setActiveGeocoderIndex(null,null,o),this._hideGeolocatorMenu()):"keydown"===t.type&&t.keyCode===h.UP_ARROW?(i.stop(t),s=o-1,0>s?this.geocoderMenuArrowNode.focus():e[s].focus()):"keydown"===t.type&&t.keyCode===h.DOWN_ARROW?(i.stop(t),s=o+1,s>=e.length?this.geocoderMenuArrowNode.focus():e[s].focus()):t.keyCode===h.ESCAPE&&this._hideGeolocatorMenu()}))},_removeEvents:function(){var e;if(this._events&&this._events.length)for(e=0;e<this._events.length;e++)this._events[e].remove();this._acEvent&&this._acEvent.remove(),this._gmEvent&&this._gmEvent.remove(),this._events=[]},_setupEvents:function(){this._removeEvents();var e=d(document,"click",s.hitch(this,function(e){this._hideResultsMenu(e)}));this._events.push(e);var t=d(this.inputNode,"keyup",s.hitch(this,function(e){this._inputKeyUp(e)}));this._events.push(t);var o=d(this.inputNode,"keydown",s.hitch(this,function(e){this._inputKeyDown(e)}));this._events.push(o);var i=d(this.geocoderMenuArrowNode,"keydown",this._geocoderMenuButtonKeyDown());if(this._events.push(i),this.get("map")){var r=d(this.get("map"),"mouse-down",s.hitch(this,function(){this.blur()}));this._events.push(r)}this._geocoderMenuEvent(),this._autoCompleteEvent()},_findThenSelect:function(){this.find().then(s.hitch(this,function(e){e.results&&e.results.length&&(this.select(e.results[0]),this.onEnterKeySelect())}))},_inputKeyUp:function(e){if(e){this._clearQueryTimeout();var t=this.inputNode.value;this._ignoreUpdateValue=!0,this.set("value",t),this._ignoreUpdateValue=!1;var s=0;if(t&&(s=t.length),e.ctrlKey||e.metaKey||e.altKey||e.keyCode===h.copyKey||e.keyCode===h.ALT||e.keyCode===h.CTRL||e.keyCode===h.META||e.keyCode===h.SHIFT||e.keyCode===h.UP_ARROW||e.keyCode===h.DOWN_ARROW||e.keyCode===h.LEFT_ARROW||e.keyCode===h.RIGHT_ARROW)return e;e&&e.keyCode===h.ENTER?(this._cancelDeferreds(),this._findThenSelect()):e&&e.keyCode===h.ESCAPE?(this._cancelDeferreds(),this._hideMenus()):e&&e.keyCode===h.TAB?(this._cancelDeferreds(),this._hideMenus()):this.get("autoComplete")&&s>=this.get("minCharacters")?this._autoComplete():this._hideMenus(),this._checkStatus()}},_cancelDeferreds:function(){if(this._deferreds.length){for(var e=0;e<this._deferreds.length;e++)this._deferreds[e].cancel("Geocoder:: stop query");this._deferreds=[]}},_inputKeyDown:function(e){var t=l('[data-item="true"]',this.resultsNode);if(e&&e.keyCode===h.TAB)return this._cancelDeferreds(),void this._hideMenus();if(e&&e.keyCode===h.UP_ARROW){i.stop(e);var s=t.length;s&&t[s-1].focus()}else e&&e.keyCode===h.DOWN_ARROW&&(i.stop(e),t[0]&&t[0].focus())},_geocoderMenuButtonKeyDown:function(e){var t=l('[data-item="true"]',this.geocoderMenuInsertNode);if(e&&e.keyCode===h.UP_ARROW){i.stop(e),this._showGeolocatorMenu();var s=t.length;s&&t[s-1].focus()}else e&&e.keyCode===h.DOWN_ARROW&&(i.stop(e),this._showGeolocatorMenu(),t[0]&&t[0].focus())},_inputClick:function(){this._hideGeolocatorMenu()},_hydrateResult:function(e){var t,s,o={},i=this._defaultSR;if(this.get("map")&&(i=this.get("map").spatialReference),e.hasOwnProperty("text")&&e.hasOwnProperty("magicKey"))return e;if(e.hasOwnProperty("feature"))o.feature=new M(e.feature),s=o.feature.geometry,s&&s.setSpatialReference(i);else if(e.hasOwnProperty("geometry")){var r=e.symbol||null;t=e.attributes||{};var a=e.infoTemplate||null;o.feature=new M(e.geometry,r,t,a),s=o.feature.geometry,s&&s.setSpatialReference(i)}else if(e.hasOwnProperty("location")){var n=new R(e.location.x,e.location.y,i);t={},e.hasOwnProperty("attributes")&&(t=e.attributes),e.hasOwnProperty("score")&&(t.score=e.score),o.feature=new M(n,null,t,null)}else o.feature=null;if(e.hasOwnProperty("extent"))o.extent=new x(e.extent),o.extent.setSpatialReference(new w(i));else if(o.feature&&o.feature.geometry)switch(o.feature.geometry.type){case"extent":o.extent=o.feature.geometry;break;case"multipoint":o.extent=o.feature.geometry.getExtent();break;case"polygon":o.extent=o.feature.geometry.getExtent();break;case"polyline":o.extent=o.feature.geometry.getExtent();break;case"point":this.get("map")?this.get("map").getScale()>this.get("zoomScale")?o.extent=b.getExtentForScale(this.get("map"),this.get("zoomScale")).centerAt(o.feature.geometry):o.extent=this.get("map").extent.centerAt(o.feature.geometry):o.extent=new x({xmin:o.feature.geometry.x-.25,ymin:o.feature.geometry.y-.25,xmax:o.feature.geometry.x+.25,ymax:o.feature.geometry.y+.25,spatialReference:{wkid:4326}})}else o.extent=null;return e.hasOwnProperty("name")?o.name=e.name:"query"===this.activeGeocoder.type&&this.activeGeocoder.field&&e.hasOwnProperty("attributes")&&e.attributes.hasOwnProperty(this.activeGeocoder.field)?o.name=e.attributes[this.activeGeocoder.field]:e.hasOwnProperty("Match_addr")&&"string"==typeof e.Match_addr?o.name=e.Match_addr:e.hasOwnProperty("address")&&"object"==typeof e.address&&e.address.hasOwnProperty("Match_addr")?o.name=e.address.Match_addr:e.hasOwnProperty("address")&&"string"==typeof e.address?o.name=e.address:e.hasOwnProperty("address")&&"object"==typeof e.address&&e.address.hasOwnProperty("Address")?o.name=e.address.Address:o.feature&&o.feature.geometry?o.name=o.feature.geometry.x+","+o.feature.geometry.y:o.name="",o},_hydrateResults:function(e){var t=[],s=0;if(e&&e.length)for(s;s<e.length;s++){var o=this._hydrateResult(e[s]);t.push(o)}return t}});return p("extend-esri")&&s.setObject("dijit.Geocoder",A,G),A});