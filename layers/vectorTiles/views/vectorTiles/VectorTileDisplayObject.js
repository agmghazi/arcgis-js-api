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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/libs/gl-matrix/vec2","../../core/libs/gl-matrix/mat4","../../core/ObjectPool","../../geometry/support/spatialReferenceUtils","../webgl/BufferObject","../2d/engine/DisplayObject","../2d/tiling/TileKey","./RenderBucket"],function(e,t,r,i,s,a,n,l,o,f,u){var h=function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var a=e.call(this)||this;return a._renderBuckets=[],a._vectorTileData=null,a._symbolUpdateData=null,a.status=5,a.coords=[0,0],a.tileTransform={transform:Float32Array[16],displayCoord:Float32Array[2]},a.stencilData={mask:0,reference:0},a.status=0,a.tileTransform.transform=s.create(),a.tileTransform.displayCoord=i.create(),t.length>0&&(n=a.acquire).call.apply(n,[a].concat(t)),a;var n}return r(t,e),t.prototype.reset=function(){f.pool.release(this.key),this.key=null,this.refKey=null,this.coords[0]=0,this.coords[1]=0,this.width=0,this.height=0,this.resolution=null,this.rotation=0,this._vectorTileData=null,this.styleLayers=null,this._glyphsMosaic=null,this.workerID=null,this._connection=null,this.id=null,this.tileTransform.transform.fill(0),this.tileTransform.displayCoord.fill(0),this.stencilData.mask=0,this.stencilData.reference=0,this._renderBuckets.length=0,this._symbolUpdateData=null,this.status=0},t.prototype.acquire=function(e,t,r,i,s,a){this.key=e,this.refKey=t;var l=r.lods[e.level].resolution,o=r.size[0]*l,f=r.origin,u=e.col*o,h=e.row*o,c=r.spatialReference,d=c&&(c._isWrappable?c._isWrappable():c.isWrappable),x=0;if(d){var p=n.getInfo(c);x=p.valid[1]-p.valid[0]}var y=e.world*x,B=f.x+u+y,D=f.y-h;this.coords[0]=B,this.coords[1]=D,this.widthInPixels=r.size[1],this.coordRange=4096,this.resolution=l,this.rotation=a,this.styleLayers=i,this._glyphsMosaic=s,this.id=e.id,this.status=1},t.prototype.setData=function(e,t,r){this._vectorTileData=e,this.workerID=t,this._connection=r,this.status=3},t.prototype.updateSymbolData=function(e){e&&(this._symbolUpdateData=e,this.requestRender())},t.prototype.dispose=function(){this.polygonTrianglesVertexArrayObject&&(this.polygonTrianglesVertexArrayObject.dispose(),this.polygonTrianglesVertexArrayObject=null),this.polygonOutlineVertexArrayObject&&(this.polygonOutlineVertexArrayObject.dispose(),this.polygonOutlineVertexArrayObject=null),this.lineTrianglesVertexArrayObject&&(this.lineTrianglesVertexArrayObject.dispose(),this.lineTrianglesVertexArrayObject=null),this.iconVertexArrayObject&&(this.iconVertexArrayObject.dispose(),this.iconVertexArrayObject=null),this.textVertexArrayObject&&(this.textVertexArrayObject.dispose(),this.textVertexArrayObject=null),this.polygonTrianglesVertexBuffer&&(this.polygonTrianglesVertexBuffer.dispose(),this.polygonTrianglesVertexBuffer=null),this.polygonTrianglesIndexBuffer&&(this.polygonTrianglesIndexBuffer.dispose(),this.polygonTrianglesIndexBuffer=null),this.polygonOutlinesVertexBuffer&&(this.polygonOutlinesVertexBuffer.dispose(),this.polygonOutlinesVertexBuffer=null),this.polygonOutlinesIndexBuffer&&(this.polygonOutlinesIndexBuffer.dispose(),this.polygonOutlinesIndexBuffer=null),this.lineVertexBuffer&&(this.lineVertexBuffer.dispose(),this.lineVertexBuffer=null),this.lineTrianglesIndexBuffer&&(this.lineTrianglesIndexBuffer.dispose(),this.lineTrianglesIndexBuffer=null),this.iconVertexBuffer&&(this.iconVertexBuffer.dispose(),this.iconVertexBuffer=null),this.iconIndexBuffer&&(this.iconIndexBuffer.dispose(),this.iconIndexBuffer=null),this.textVertexBuffer&&(this.textVertexBuffer.dispose(),this.textVertexBuffer=null),this.textIndexBuffer&&(this.textIndexBuffer.dispose(),this.textIndexBuffer=null),this.texture&&(this.texture.dispose(),this.texture=null),this._renderBuckets.length=0,this.status=7},t.prototype.attach=function(e){if(4===this.status)return!0;if(this.status=3,!this._vectorTileData)return!1;if(0===this._renderBuckets.length)for(var t=new Uint32Array(this._vectorTileData.bucketDataInfo),r=t.length,i=0;r>i;){var s=t[i],a=t[i+1];if(0===a){var n=new u.BackgroundRenderBucket;n.layerID=s,this._renderBuckets.push(n),i+=2}else if(1===a){var o=new u.FillRenderBucket;o.layerID=s,o.triangleElementStart=t[i+2],o.triangleElementCount=t[i+3],o.outlineElementStart=t[i+4],o.outlineElementCount=t[i+5],this._renderBuckets.push(o),i+=6}else if(2===a){var f=new u.LineRenderBucket;f.layerID=s,f.triangleElementStart=t[i+2],f.triangleElementCount=t[i+3],this._renderBuckets.push(f),i+=6}else if(3===a){var h=new u.SymbolRenderBucket;h.layerID=s,h.isSDF=0!==t[i+2];var c=t[i+3],d=i+4;if(c>0){d=i+4;for(var x=void 0,p=void 0,y=void 0,B=0;c>B;B++)x=t[d],p=t[d+1],y=t[d+2],h.markerPerPageElementsMap.set(x,[p,y]),d+=3}var D=d,g=t[D];if(g>0){D++;for(var x=void 0,p=void 0,y=void 0,B=0;g>B;B++)x=t[D],p=t[D+1],y=t[D+2],h.glyphPerPageElementsMap.set(x,[p,y]),D+=3}this._renderBuckets.push(h),i+=5+3*c+3*g}else console.error("Bad bucket type!")}for(var b=e.context,v=new Uint32Array(this._vectorTileData.bufferDataInfo),_=v.length,V=0,I=0;_>I;I+=2,V++){var k=v[I],T=v[I+1];if(!(0>=T||0===this._vectorTileData.bufferData[V].byteLength))switch(k){case 2:this.polygonTrianglesVertexBuffer?this.polygonTrianglesVertexBuffer.setData(this._vectorTileData.bufferData[V]):this.polygonTrianglesVertexBuffer=l.createVertex(b,35044,this._vectorTileData.bufferData[V]);break;case 6:this.polygonTrianglesIndexBuffer?this.polygonTrianglesIndexBuffer.setData(this._vectorTileData.bufferData[V]):this.polygonTrianglesIndexBuffer=l.createIndex(b,35044,this._vectorTileData.bufferData[V]);break;case 3:this.polygonOutlinesVertexBuffer?this.polygonOutlinesVertexBuffer.setData(this._vectorTileData.bufferData[V]):this.polygonOutlinesVertexBuffer=l.createVertex(b,35044,this._vectorTileData.bufferData[V]);break;case 7:this.polygonOutlinesIndexBuffer?this.polygonOutlinesIndexBuffer.setData(this._vectorTileData.bufferData[V]):this.polygonOutlinesIndexBuffer=l.createIndex(b,35044,this._vectorTileData.bufferData[V]);break;case 0:this.lineVertexBuffer?this.lineVertexBuffer.setData(this._vectorTileData.bufferData[V]):this.lineVertexBuffer=l.createVertex(b,35044,this._vectorTileData.bufferData[V]);break;case 8:this.lineTrianglesIndexBuffer?this.lineTrianglesIndexBuffer.setData(this._vectorTileData.bufferData[V]):this.lineTrianglesIndexBuffer=l.createIndex(b,35044,this._vectorTileData.bufferData[V]);break;case 4:this.iconVertexBuffer?this.iconVertexBuffer.setData(this._vectorTileData.bufferData[V]):this.iconVertexBuffer=l.createVertex(b,35044,this._vectorTileData.bufferData[V]);break;case 9:this.iconIndexBuffer?this.iconIndexBuffer.setData(this._vectorTileData.bufferData[V]):this.iconIndexBuffer=l.createIndex(b,35044,this._vectorTileData.bufferData[V]);break;case 5:this.textVertexBuffer?this.textVertexBuffer.setData(this._vectorTileData.bufferData[V]):this.textVertexBuffer=l.createVertex(b,35044,this._vectorTileData.bufferData[V]);break;case 10:this.textIndexBuffer?this.textIndexBuffer.setData(this._vectorTileData.bufferData[V]):this.textIndexBuffer=l.createIndex(b,35044,this._vectorTileData.bufferData[V])}}return this.status=4,!0},t.prototype.detach=function(t){-1!==this.workerID&&this._connection&&6!==this.status&&7!==this.status&&this._connection.broadcast("destructTileData",{key:this.id,worker:this.workerID},[]),this.dispose(),e.prototype.detach.call(this,t)},t.prototype.doRender=function(e){if(this.visible&&4===this.status){var t=e.context,r=e.renderer;if(t&&r){var i=e.drawphase;this._symbolUpdateData&&this._updateSymbolData(e),t.setStencilFunction(514,this.stencilData.reference,this.stencilData.mask);var s=this.styleLayers,a=void 0!==e.layerOpacity?e.layerOpacity:1;if(0!==a){var n,l=this._renderBuckets.length,o=0;if(0===i)for(o=l-1;o>=0;o--)n=this._renderBuckets[o],3!==n.type&&n.hasData()&&r.renderBucket(t,n,e.displayLevel,e.requiredLevel,i,this,s.layers[n.layerID],a);else for(o=0;l>o;o++)n=this._renderBuckets[o],n.hasData()&&r.renderBucket(t,n,e.displayLevel,e.requiredLevel,i,this,s.layers[n.layerID],a)}}}},t.prototype._updateSymbolData=function(e){var t=new Uint32Array(this._symbolUpdateData.bucketDataInfo),r=t.length;if(0===r)return this._symbolUpdateData=null,!0;if(e.budget.remaining<1||4!==this.status)return this.requestRender(),!1;for(var i=e.context,s=new Uint32Array(this._symbolUpdateData.bufferDataInfo),a=s.length,n=0,o=0;a>o;o+=2,n++){var f=s[o];switch(f){case 4:this.iconVertexBuffer&&(this.iconVertexBuffer.dispose(),this.iconVertexBuffer=null),this.iconVertexBuffer=l.createVertex(i,35044,this._symbolUpdateData.bufferData[n]);break;case 9:this.iconIndexBuffer&&(this.iconIndexBuffer.dispose(),this.iconIndexBuffer=null),this.iconIndexBuffer=l.createIndex(i,35044,this._symbolUpdateData.bufferData[n]);break;case 5:this.textVertexBuffer&&(this.textVertexBuffer.dispose(),this.textVertexBuffer=null),this.textVertexBuffer=l.createVertex(i,35044,this._symbolUpdateData.bufferData[n]);break;case 10:this.textIndexBuffer&&(this.textIndexBuffer.dispose(),this.textIndexBuffer=null),this.textIndexBuffer=l.createIndex(i,35044,this._symbolUpdateData.bufferData[n])}}for(var h=this._renderBuckets.length,c=0;h>c;c++){var d=this._renderBuckets[c];if(d instanceof u.SymbolRenderBucket){var x=this._renderBuckets[c];x.markerPerPageElementsMap.clear(),x.glyphPerPageElementsMap.clear()}}for(var p,y,B=0;r>B;){var D=t[B];y=-1;for(var g=this._renderBuckets.length,c=0;g>c;c++)if(this._renderBuckets[c].layerID===D){y=c;break}p=this._renderBuckets[y],p||(p=new u.SymbolRenderBucket,p.layerID=D,p.isSDF=0!==t[B+2],this._renderBuckets.push(p));var b=t[B+3],v=B+4;if(b>0){v=B+4;for(var _=void 0,V=void 0,I=void 0,k=0;b>k;k++)_=t[v],V=t[v+1],I=t[v+2],p.markerPerPageElementsMap.set(_,[V,I]),v+=3}var T=v,m=t[T];if(m>0){T++;for(var _=void 0,V=void 0,I=void 0,k=0;m>k;k++)_=t[T],V=t[T+1],I=t[T+2],p.glyphPerPageElementsMap.set(_,[V,I]),T+=3}B+=5+3*b+3*m}return this.iconVertexArrayObject&&(this.iconVertexArrayObject.dispose(),this.iconVertexArrayObject=null),this.textVertexArrayObject&&(this.textVertexArrayObject.dispose(),this.textVertexArrayObject=null),this._symbolUpdateData=null,!0},t}(o);return h.pool=new a(h),h});