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

define(["require","exports","dojo/Deferred","../../core/promiseUtils","../../core/executeAsync","../../core/ObjectPool","./VertexMemoryBuffer","./IndexMemoryBuffer","./TileParser","./BackgroundBucket","./FillBucket","./LineBucket","./SymbolBucket","./Placement","./GeometryUtils"],function(e,t,r,n,f,s,u,o,i,a,l,h,B,p,y){var x=function(){function e(){this.rotation=0,this.status=0,this._symbolBuckets=[],this.placementEngine=new p.PlacementEngine,this.polygonVertexBuffer=new u.PolygonMemoryBuffer,this.polygonOutlineVertexBuffer=new u.PolygonOutlineMemoryBuffer,this.polygonIndexBuffer=new o.TriangleElementMemoryBuffer,this.polygonOutlineIndexBuffer=new o.TriangleElementMemoryBuffer,this.lineVertexBuffer=new u.LineMemoryBuffer,this.lineIndexBuffer=new o.TriangleElementMemoryBuffer,this.markerVertexBuffer=new u.SymbolMemoryBuffer,this.markerIndexBuffer=new o.TriangleElementMemoryBuffer,this.textVertexBuffer=new u.SymbolMemoryBuffer,this.textIndexBuffer=new o.TriangleElementMemoryBuffer}return e.prototype.initialize=function(e,t,r,n){void 0===n&&(n=0),this.tileKey=e,this.refKey=t,this._workerTileHandler=r,this.rotation=n,this.placementEngine.setAngle(y.C_DEG_TO_RAD*n)},e.prototype.release=function(){this.tileKey=this.refKey="",this.status=0,this.rotation=0,this.polygonVertexBuffer.reset(),this.polygonOutlineVertexBuffer.reset(),this.polygonIndexBuffer.reset(),this.polygonOutlineIndexBuffer.reset(),this.lineVertexBuffer.reset(),this.lineIndexBuffer.reset(),this.markerVertexBuffer.reset(),this.markerIndexBuffer.reset(),this.textVertexBuffer.reset(),this.textIndexBuffer.reset(),this.placementEngine.reset(),this._symbolBuckets.length=0,this._workerTileHandler=null},e.prototype.setDataAndParse=function(e,t){var n=this,f=new r(function(e){n.status=6});return this._parse(e,t).then(function(e){n.status=4;for(var t=[2,n.polygonVertexBuffer.sizeInBytes,3,n.polygonOutlineVertexBuffer.sizeInBytes,6,n.polygonIndexBuffer.sizeInBytes,7,n.polygonOutlineIndexBuffer.sizeInBytes,0,n.lineVertexBuffer.sizeInBytes,8,n.lineIndexBuffer.sizeInBytes,4,n.markerVertexBuffer.sizeInBytes,9,n.markerIndexBuffer.sizeInBytes,5,n.textVertexBuffer.sizeInBytes,10,n.textIndexBuffer.sizeInBytes],r=new Uint32Array(t),s=[],u=e.length,o=0;u>o;o++){var i=e[o];if(i instanceof l)s.push(i.layerIndex),s.push(1),s.push(i.polygonIndexStart),s.push(i.polygonIndexCount),s.push(i.polygonOutlineIndexStart),s.push(i.polygonOutlineIndexCount);else if(i instanceof h)s.push(i.layerIndex),s.push(2),s.push(i.triangleIndexStart),s.push(i.triangleIndexCount),s.push(i.connectorStart),s.push(i.connectorCount);else if(i instanceof B){s.push(i.layerIndex),s.push(3),s.push(i.sdfMarker?1:0);var p=i.markerPageMap;s.push(p.size),p.forEach(function(e,t){s.push(t),s.push(e[0]),s.push(e[1])});var y=i.glyphsPageMap;s.push(y.size),y.forEach(function(e,t){s.push(t),s.push(e[0]),s.push(e[1])})}else i instanceof a&&(s.push(i.layerIndex),s.push(0))}var x=new Uint32Array(s),c=n.polygonVertexBuffer.toBuffer(),d=n.polygonOutlineVertexBuffer.toBuffer(),I=n.polygonIndexBuffer.toBuffer(),g=n.polygonOutlineIndexBuffer.toBuffer(),m=n.lineVertexBuffer.toBuffer(),k=n.lineIndexBuffer.toBuffer(),b=n.markerVertexBuffer.toBuffer(),v=n.markerIndexBuffer.toBuffer(),w=n.textVertexBuffer.toBuffer(),z=n.textIndexBuffer.toBuffer();f.resolve({data:{bufferDataInfo:r.buffer,bucketDataInfo:x.buffer,bufferData:[c,d,I,g,m,k,b,v,w,z]},buffers:[c,I,d,g,m,k,b,v,w,z,r.buffer,x.buffer]})}),f.promise},e.prototype.addBucket=function(e){this._symbolBuckets.push(e)},e.prototype.updateSymbols=function(e){var t=this,r=this._symbolBuckets;if(!r||0===r.length)return n.resolve({data:null});this.rotation=e;var s=this.placementEngine;s.reset(),s.setAngle(e/256*360*y.C_DEG_TO_RAD);var u=this.markerVertexBuffer;u.reset();var o=this.markerIndexBuffer;o.reset();var i=this.textVertexBuffer;i.reset();var a=this.textIndexBuffer;a.reset();var l=[],h=r.length,B=0;return f(function(){if(6===t.status||0===t.status)return!0;if(h>B){var e=r[B++].copy(u,o,i,a,s);e&&(l.push(e),e.updateSymbols())}return B>=h},5).then(function(){if(6===t.status||0===t.status||0===u.sizeInBytes&&0===o.sizeInBytes&&0===i.sizeInBytes&&0===a.sizeInBytes)return{data:null};var e=[4,u.sizeInBytes,9,o.sizeInBytes,5,i.sizeInBytes,10,a.sizeInBytes],r=new Uint32Array(e),n=[];h=l.length;for(var f=0;h>f;f++){var s=l[f];n.push(s.layerIndex),n.push(3),n.push(s.sdfMarker?1:0);var B=s.markerPageMap;n.push(B.size),B.forEach(function(e,t){n.push(t),n.push(e[0]),n.push(e[1])});var p=s.glyphsPageMap;n.push(p.size),p.forEach(function(e,t){n.push(t),n.push(e[0]),n.push(e[1])})}var y=new Uint32Array(n),x=u.toBuffer(),c=o.toBuffer(),d=i.toBuffer(),I=a.toBuffer();return{data:{bufferDataInfo:r.buffer,bucketDataInfo:y.buffer,bufferData:[x,c,d,I]},buffers:[x,c,d,I,r.buffer,y.buffer]}}).otherwise(function(e){return n.resolve({data:null})})},e.prototype.setObsolete=function(){this.status=6},e.prototype.getLayers=function(){return this._workerTileHandler.getLayers()},e.prototype.getWorkerTileHandler=function(){return this._workerTileHandler},e.prototype._parse=function(e,t){if(!e||0===e.byteLength)return n.resolve([]);this.status=2;var r=new i(e,this,t);return r.parse()},e}();return x.pool=new s(x),x});