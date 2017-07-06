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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojo/_base/Deferred","dojo/has","./kernel","./graphic","./geometry/Point","./geometry/jsonUtils","./geometry/mathUtils","./geometry/webMercatorUtils","./symbols/SimpleMarkerSymbol","./symbols/SimpleLineSymbol","./symbols/CartographicLineSymbol","./symbols/SimpleFillSymbol","./tasks/query","./Evented","dojo/has!extend-esri?./PopupInfo"],function(e,t,i,s,r,n,h,o,a,l,d,u,f,c,g,m,y,p){function _(e){return"sizeInfo"===e.type}var b=e(p,{declaredClass:"esri.PopupBase",_featureLayers:{},_updateEndHandles:[],_evtMap:{"set-features":!0,"clear-features":!0,"selection-change":!0,"dfd-complete":!0},onSetFeatures:function(){},onClearFeatures:function(){},onSelectionChange:function(){},onDfdComplete:function(){},initialize:function(){this.count=0,this.selectedIndex=-1,this.on("clear-features",t.hitch(this,this._resetUpdateEndListeners)),this.on("dfd-complete",t.hitch(this,this._processFeatures)),this.on("set-features",t.hitch(this,this._processFeatures))},cleanup:function(){this.features=this.deferreds=null,this._resetUpdateEndListeners()},setFeatures:function(e){if(e&&e.length){this.clearFeatures();var s,n;e[0]instanceof r?n=e:s=e,s?this._updateFeatures(null,s):(this.deferreds=n,n=n.slice(0),i.forEach(n,function(e){e.addBoth(t.hitch(this,this._updateFeatures,e))},this))}},clearFeatures:function(){this.features=this.deferreds=this._marked=null,this.count=0;var e=this.selectedIndex;this.selectedIndex=-1,e>-1&&this.onSelectionChange(),this.onClearFeatures()},getSelectedFeature:function(){var e=this.features;return e?e[this.selectedIndex]:void 0},select:function(e){0>e||e>=this.count||(this.selectedIndex=e,this.onSelectionChange())},enableHighlight:function(e){if(this._highlighted=e.graphics.add(new o(new a(0,0,e.spatialReference))),this._highlighted.hide(),!this.markerSymbol){var t=this.markerSymbol=new f;t.setStyle(f.STYLE_TARGET),t._setDim(16,16,0),t.setOutline(new g(c.STYLE_SOLID,new s([0,255,255]),2,g.CAP_ROUND,g.JOIN_ROUND)),t.setColor(new s([0,0,0,0]))}this.lineSymbol||(this.lineSymbol=new c(c.STYLE_SOLID,new s([0,255,255]),2)),this.fillSymbol||(this.fillSymbol=new m(m.STYLE_NULL,new c(c.STYLE_SOLID,new s([0,255,255]),2),new s([0,0,0,0])))},disableHighlight:function(e){var t=this._highlighted;t&&(t.hide(),e.graphics.remove(t),delete this._highlighted),this.markerSymbol=this.lineSymbol=this.fillSymbol=null},showHighlight:function(){var e=this.features&&this.features[this.selectedIndex];this._highlighted&&e&&e.geometry&&this._highlighted.show()},hideHighlight:function(){this._highlighted&&this._highlighted.hide()},updateHighlight:function(e,t){var i=t.geometry,s=this._highlighted;if(!i||!s)return void(s&&s.hide());s.hide(),!s._graphicsLayer&&e&&e.graphics.add(s),s.setGeometry(l.fromJson(i.toJson()));var r;switch(i.type){case"point":case"multipoint":var n=t.getLayer(),h=t.symbol||n&&n._getSymbol(t);if(n&&h){var o,a,d=0,u=0,f=0,c=t.symbol?null:n._getRenderer(t),g=this._getSizeInfo(c);if(g)o=a=c.getSize(t,{sizeInfo:g,shape:h.style,resolution:e&&e.getResolutionInMeters&&e.getResolutionInMeters()});else switch(h.type){case"simplemarkersymbol":o=a=h.size||0;break;case"picturemarkersymbol":o=h.width||0,a=h.height||0}d=h.xoffset||0,u=h.yoffset||0,f=h.angle||0,r=this.markerSymbol,r.setOffset(0,0),r.setAngle(0),o&&a&&r._setDim(o+1,a+1,0),r.setOffset(d,u),r.setAngle(f)}break;case"polyline":r=this.lineSymbol;break;case"polygon":r=this.fillSymbol}s.setSymbol(r)},showClosestFirst:function(e){var t=this.features;if(t&&t.length){if(t.length>1){var i,s,r,n,h,o=1/0,a=-1,l=d.getLength,f=e.spatialReference;for(e=e.normalize(),i=t.length-1;i>=0;i--)if(s=t[i].geometry){n=s.spatialReference,r=0;try{h="point"===s.type?s:s.getExtent().getCenter(),h=h.normalize(),f&&n&&!f.equals(n)&&f._canProject(n)&&(h=f.isWebMercator()?u.geographicToWebMercator(h):u.webMercatorToGeographic(h)),r=l(e,h)}catch(c){}r>0&&o>r&&(o=r,a=i)}a>0&&(t.splice(0,0,t.splice(a,1)[0]),this.select(0))}}else this.deferreds&&(this._marked=e)},_unbind:function(e){var t=i.indexOf(this.deferreds,e);if(-1!==t)return this.deferreds.splice(t,1),this.deferreds.length?1:(this.deferreds=null,2)},_fireComplete:function(e){var t=this._marked;t&&(this._marked=null,this.showClosestFirst(t)),this.onDfdComplete(e)},_updateFeatures:function(e,t){if(e){if(this.deferreds){var s=this._unbind(e);if(!s)return;if(t&&t instanceof Error)return this._fireComplete(t),void(2===s&&this.onSetFeatures());if(t&&t.length)if(this.features){var r=i.filter(t,function(e){return-1===i.indexOf(this.features,e)},this);this.features=this.features.concat(r),this.count=this.features.length,this._fireComplete(),2===s&&this.onSetFeatures()}else this.features=t,this.count=t.length,this.selectedIndex=0,this._fireComplete(),2===s&&this.onSetFeatures(),this.select(0);else this._fireComplete(),2===s&&this.onSetFeatures()}}else this.features=t,this.count=t.length,this.selectedIndex=0,this.onSetFeatures(),this.select(0)},_getSizeInfo:function(e){return e?e.sizeInfo||i.filter(e.visualVariables,_)[0]:null},_resetUpdateEndListeners:function(){this._featureLayers={},i.forEach(this._updateEndHandles,function(e){e.remove()}),this._updateEndHandles=[]},_processFeatures:function(){i.forEach(this.features,function(e){var i=e.getLayer();if(i&&!this._featureLayers[i.id]&&(1===i.currentMode||0===i.currentMode&&6===i.mode)&&i.objectIdField&&i.hasXYFootprint&&i.queryFeatures&&("esriGeometryPolygon"===i.geometryType||"esriGeometryPolyline"===i.geometryType||i.hasXYFootprint())){this._featureLayers[i.id]=i;var s=i.on("update-end",t.hitch(this,this._fLyrUpdateEndHandler));this._updateEndHandles.push(s)}},this)},_fLyrUpdateEndHandler:function(e){if(!e.error){var t=this,s=e.target,r=s.getSelectedFeatures(),n=0===s.currentMode&&6===s.mode,h={},o=[];if(i.forEach(this.features,function(e){var t=e.getLayer();if(t===s){var i=e.attributes[s.objectIdField];h[i]=e,o.push(i)}}),o.length){var a=new y;a.objectIds=o,s.queryFeatures(a,function(e){i.forEach(e.features,function(e){var t=e.attributes[s.objectIdField],o=h[t],a=!1;o.geometry!==e.geometry?(o.setGeometry(e.geometry),a=!0):n&&r&&-1!==i.indexOf(r,e)&&(a=!0),a&&this._highlighted&&o===this.getSelectedFeature()&&this._highlighted.setGeometry(e.geometry)},t)})}}}});return n("extend-esri")&&(h.PopupBase=b),b});