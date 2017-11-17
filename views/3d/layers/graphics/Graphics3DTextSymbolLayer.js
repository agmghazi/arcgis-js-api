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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../Color","../../../../core/screenUtils","../../../../symbols/callouts/calloutUtils","./Graphics3DSymbolLayer","./Graphics3DGraphicLayer","./ElevationAligners","./Graphics3DSymbolCommonCode","./graphicUtils","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/GeometryUtil","../../webgl-engine/lib/TextTexture","../../webgl-engine/materials/HUDMaterial"],function(e,t,n,o,i,r,l,a,s,c,p,f,h,u,d){var g=[1,1,1,1],y=[0,0,1],v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!1},t}return n(t,e),t.prototype._prepareResources=function(){if(!this._isPropertyDriven("size")){var e=p.validateSymbolLayerSize(this._getTextSize());if(e)return this._logWarning(e),void this.reject()}this._anchor="center",this.resolve()},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.isFulfilled()||this.reject()},t.prototype.createGraphics3DGraphic=function(e,t,n,o){var i="polyline"===e.geometry.type,r=this._getGeometry(e);if(!r)return this._logWarning("unsupported geometry type for text symbol: "+e.geometry.type),null;var l=this._context.layer.id+"_label_"+e.uid,a=t.text||this.symbol.text;if(!a||a.length<1)return null;t&&null!=t.needsOffsetAdjustment&&(this._elevationOptions.needsOffsetAdjustment=t.needsOffsetAdjustment);var s=this.getGraphicElevationInfo(e,t.elevationOffset||0);return this._createAs3DShape(this.symbol,r,a,s,l,e.uid,t,n,o,i)},t.prototype.getGraphicElevationInfo=function(t,n){void 0===n&&(n=0);var o=e.prototype.getGraphicElevationInfo.call(this,t);return o.addOffsetRenderUnits(n),o},t.prototype._getGeometry=function(e){var t=this._validateGeometry(e.geometry);return"polyline"===t.type?c.placePointOnPolyline(t):"polygon"===t.type?c.placePointOnPolygon(t):"extent"===t.type?t.center:"point"!==t.type?null:t},t.prototype.layerPropertyChanged=function(e,t,n){if("opacity"===e)this._logWarning("layer opacity change not yet implemented in Graphics3DTextSymbolLayer");else if("elevationInfo"===e){if(this._updateElevationInfo(),t)for(var o in t){var i=t[o],r=n(i);r&&this.updateGraphicElevationInfo(i.graphic,r)}return!0}return!1},t.prototype.updateGraphicElevationInfo=function(e,t){var n=this.getGraphicElevationInfo(e,t.metadata.elevationOffset);t.elevationInfo.set(n),t.needsElevationUpdates=c.needsElevationUpdates2D(n.mode)||"absolute-height"===n.mode},t.prototype._defaultElevationInfoNoZ=function(){return m},t.prototype._createAs3DShape=function(e,t,n,l,p,v,m,b,O,S){var _=m.centerOffset||x,G=m.screenOffset||[0,0],T=m.debugDrawBorder||!1,E=m.translation||[0,0,0],P=m.anchor||this._anchor||"center";this._anchor=P;var w,z=e.material?o.toUnitRGBA(e.material.color):g,I=e.halo&&e.halo.color&&e.halo.size>0,D=I?o.toUnitRGBA(e.halo.color):g,U=I?i.pt2px(e.halo.size):0,A=this._getTextSize(e),L=new u(n,{size:A,color:z,font:{family:e.font&&e.font.family?e.font.family:"Arial",weight:e.font&&e.font.weight?e.font.weight:"normal",style:e.font&&e.font.style?e.font.style:"normal"},halo:{size:U,color:D}},p),W=O&&O.canHoldTextTexture(L),j=W?O.addTextTexture(L):null;b?w=m:r.isCalloutSupport(this.symbolContainer)&&this.symbolContainer.hasVisibleVerticalOffset()&&(w=this.symbolContainer);var C={textureId:W?j.texture.getId():L.getId(),texCoordScale:W?[1,1]:L.getTexcoordScale(),occlusionTest:!0,screenOffset:G,anchorPos:P,polygonOffset:!0,color:[1,1,1,1],centerOffsetUnits:m.centerOffsetUnits,debugDrawBorder:T,drawInSecondSlot:!0};if(w&&w.verticalOffset){var H=w.verticalOffset,M=H.screenLength,R=H.minWorldLength,B=H.maxWorldLength;C.verticalOffset={screenLength:i.pt2px(M),minWorldLength:R||0,maxWorldLength:null!=B?B:1/0}}if(this._context.screenSizePerspectiveEnabled){var F=this._context.sharedResources,N=F.screenSizePerspectiveSettings,V=F.screenSizePerspectiveSettingsLabels;C.screenSizePerspective=V.overridePadding(U),C.screenSizePerspectiveAlignment=N}S&&(C.shaderPolygonOffset=1e-4);var q=null,J=JSON.stringify(C);null!=b?(q=b.getMaterial(J),null==q?(q=new d(C,p),b.addMaterial(J,q)):W&&q.setTextureDirty()):q=new d(C,p);var Z=[q],k=[L.getTextWidth(),L.getTextHeight()],K=h.createPointGeometry(y,E,void 0,k,_,j?j.uvMinMax:null),Q=[new f(K,p)],X=this._context.layer.uid,Y=c.createStageObjectForPoint.call(this,t,Q,[Z],null,null,l,p,X,v,!0),$=s.perObjectElevationAligner,ee=new a(this,Y.object,Q,null==b?Z:null,W?null:[L],$,l);ee.alignedTerrainElevation=Y.terrainElevation,ee.needsElevationUpdates=c.needsElevationUpdates2D(l.mode)||"absolute-height"===l.mode;var te=W?L.getTextWidth():L.getWidth(),ne=W?L.getTextHeight():L.getHeight();return ee.getScreenSize=function(e){return void 0===e&&(e=new Array(2)),e[0]=te,e[1]=ne,e},ee.metadata={labelText:n,elevationOffset:m.elevationOffset||0},c.extendPointGraphicElevationInfo(ee,t,this._context.elevationProvider),ee},t.prototype._getTextSize=function(e){return i.pt2px((e||this.symbol).size)||12},t}(l),m={mode:"relative-to-ground",offset:0},x=[0,0,0,1];return v});