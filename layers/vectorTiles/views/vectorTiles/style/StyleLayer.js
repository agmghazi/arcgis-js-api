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

define(["require","exports","./StyleDefinition","./StyleProperty","./Filter"],function(t,i,e,o,n){Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function t(t,i,o){switch(this.type=t,this.id=i.id,this.source=i.source,this.sourceLayer=i["source-layer"],this.minzoom=i.minzoom,this.maxzoom=i.maxzoom,this.filter=i.filter,this.layout=i.layout,this.paint=i.paint,this.z=o,t){case 0:this._layoutDefinition=e.StyleDefinition.backgroundLayoutDefinition,this._paintDefinition=e.StyleDefinition.backgroundPaintDefinition;break;case 1:this._layoutDefinition=e.StyleDefinition.fillLayoutDefinition,this._paintDefinition=e.StyleDefinition.fillPaintDefinition;break;case 2:this._layoutDefinition=e.StyleDefinition.lineLayoutDefinition,this._paintDefinition=e.StyleDefinition.linePaintDefinition;break;case 3:this._layoutDefinition=e.StyleDefinition.symbolLayoutDefinition,this._paintDefinition=e.StyleDefinition.symbolPaintDefinition}this._layoutProperties=this._parseLayout(this.layout),this._paintProperties=this._parsePaint(this.paint)}return t.prototype.getFeatureFilter=function(){return void 0!==this._featureFilter?this._featureFilter:this._featureFilter=n.createFilter(this.filter)},t.prototype.hasLayoutProperty=function(t){var i=this._layoutProperties;if(i){var e=i[t];if(e)return!0}return!1},t.prototype.hasPaintProperty=function(t){var i=this._paintProperties;return i?void 0!==i[t]:!1},t.prototype.getLayoutValue=function(t,i){var e,o=this._layoutProperties;if(o){var n=o[t];n&&(e=n.getValue(i))}var a=this._layoutDefinition[t];return void 0===e&&(e=a["default"]),"enum"===a.type&&(e=a.values.indexOf(e)),e},t.prototype.getPaintValue=function(t,i){var e,o=this._paintProperties;if(o){var n=o[t];n&&(e=n.getValue(i))}var a=this._paintDefinition[t];return void 0===e&&(e=a["default"]),"enum"===a.type&&(e=a.values.indexOf(e)),e},t.prototype._parseLayout=function(t){var i={};for(var e in t)i[e]=new o(this._layoutDefinition[e],t[e]);return i},t.prototype._parsePaint=function(t){var i={};for(var e in t)i[e]=new o(this._paintDefinition[e],t[e]);return i},t}();i.StyleLayer=a;var r=function(){function t(t,i){this.cap=t.getLayoutValue("line-cap",i),this.join=t.getLayoutValue("line-join",i),this.miterLimit=t.getLayoutValue("line-miter-limit",i),this.roundLimit=t.getLayoutValue("line-round-limit",i)}return t}();i.LineLayout=r;var u=function(){function t(t,i,e){this.allowOverlap=t.getLayoutValue("icon-allow-overlap",i),this.ignorePlacement=t.getLayoutValue("icon-ignore-placement",i),this.optional=t.getLayoutValue("icon-optional",i),this.rotationAlignment=t.getLayoutValue("icon-rotation-alignment",i),this.size=t.getLayoutValue("icon-size",i),this.rotate=t.getLayoutValue("icon-rotate",i),this.padding=t.getLayoutValue("icon-padding",i),this.keepUpright=t.getLayoutValue("icon-keep-upright",i),this.offset=t.getLayoutValue("icon-offset",i),e&&1===this.rotationAlignment&&!t.hasLayoutProperty("icon-rotation-alignment")&&(this.rotationAlignment=0)}return t}();i.IconLayout=u;var l=function(){function t(t,i,e){this.allowOverlap=t.getLayoutValue("text-allow-overlap",i),this.ignorePlacement=t.getLayoutValue("text-ignore-placement",i),this.optional=t.getLayoutValue("text-optional",i),this.rotationAlignment=t.getLayoutValue("text-rotation-alignment",i),this.font=t.getLayoutValue("text-font",i),this.maxWidth=t.getLayoutValue("text-max-width",i),this.lineHeight=t.getLayoutValue("text-line-height",i),this.letterSpacing=t.getLayoutValue("text-letter-spacing",i),this.justify=t.getLayoutValue("text-justify",i),this.anchor=t.getLayoutValue("text-anchor",i),this.maxAngle=t.getLayoutValue("text-max-angle",i),this.size=t.getLayoutValue("text-size",i),this.rotate=t.getLayoutValue("text-rotate",i),this.padding=t.getLayoutValue("text-padding",i),this.keepUpright=t.getLayoutValue("text-keep-upright",i),this.transform=t.getLayoutValue("text-transform",i),this.offset=t.getLayoutValue("text-offset",i),e&&1===this.rotationAlignment&&!t.hasLayoutProperty("text-rotation-alignment")&&(this.rotationAlignment=0)}return t}();i.TextLayout=l});