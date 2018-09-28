// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/has","../../../../../../core/Logger","../../../../../../core/libs/earcut/earcut","../../color","../../definitions","../../enums","../../enums","../../number","../../TileClipper","../../WGLDisplayRecord","../Tesselator","./WGLMeshTemplate"],function(e,t,i,r,s,o,l,n,h,a,p,u,g,f,v){Object.defineProperty(t,"__esModule",{value:!0});var y=s.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLFillTemplate"),_=[],c=[],d=function(e){function t(t,i,s,o,l,a,p,g){var v=e.call(this)||this;v.fillColor=o,v.tl=l,v.br=a,v.aux=p,v.isBFS=g,v.geometryType=h.WGLGeometryType.FILL,v.useLibtess=!1;var y=r("esri-featurelayer-webgl");return v.useLibtess="libtess"===((y||{}).tesselator||"libtess"),v.useLibtess&&(v._tesselator=new f.default),v.vvFlags=i,v._materialStore=t,v.materialId=v._materialStore.createSpriteMaterial(s,v.geometryType,i),v._tileClipper=new u.TileClipper(0,0,0,1,8),v._tileClipper.setExtent(n.TILE_SIZE),v}return i(t,e),t.fromSimpleFill=function(e,i,r,s,o,n){void 0===n&&(n=!1);var h=r.color,a=h&&"none"!==r.style&&l.premultiplyAlphaRGBA(h)||0;if(!s)return new t(e,i,null,a,0,0,0,n);var u=s.rect,g=s.width,f=s.height,v=u.x+1,y=u.y+1,_=u.x+1+g,c=u.y+1+f;return new t(e,i,s,a,p.i1616to32(v,y),p.i1616to32(_,c),p.i8888to32(p.nextHighestPowerOfTwo(_-v),p.nextHighestPowerOfTwo(c-y),0,0),n)},t.fromPictureFill=function(e,i,r,s,o,l){void 0===l&&(l=!1);var h=n.PICTURE_FILL_COLOR,a=s.rect,u=s.width,g=s.height,f=a.x+1,v=a.y+1,y=a.x+1+u,_=a.y+1+g;return new t(e,i,s,h,p.i1616to32(f,v),p.i1616to32(y,_),p.i8888to32(p.nextHighestPowerOfTwo(r.width),p.nextHighestPowerOfTwo(r.height),0,0),l)},t.prototype.writeMesh=function(e,t,i,r,s,o,l){if(_.length=0,this.vvFlags&a.WGLVVFlag.COLOR||0!==this.fillColor){if("esriGeometryPolygon"!==i)return void y.error("Unable to handle geometryType: "+i);var n=s.geometry,h=this._isClippingRequired(n),p=h?this._clip(n,!this.useLibtess):n.rings;return this.useLibtess?this._writeMeshLibtess(e,t,i,r,p,h,o,l):this._writeMeshEarcut(e,t,i,r,p,h,o,l)}},t.prototype._isClippingRequired=function(e){for(var t=n.TILE_SIZE+8,i=0,r=e.rings;i<r.length;i++){var s=r[i],o=s.length;if(!(o<3)){var l=s[0][0],h=s[0][1];if(l<-8||l>t||h<-8||h>t)return!0;for(var a=1;a<o;++a)if(l+=s[a][0],h+=s[a][1],l<-8||l>t||h<-8||h>t)return!0}}return!1},t.prototype._clip=function(e,t){var i,r;this._tileClipper.reset(3);for(var s=0,o=e.rings;s<o.length;s++){var l=o[s],n=l.length;if(!(n<3)){i=l[0][0],r=l[0][1],this._tileClipper.moveTo(i,r);for(var h=1;h<n;++h)i+=l[h][0],r+=l[h][1],this._tileClipper.lineTo(i,r);this._tileClipper.close()}}return this._tileClipper.result(t)},t.prototype._writeMeshLibtess=function(e,t,i,r,s,o,l,n){if(s&&s.length){var h=this._materialStore.get(this.materialId),a=[],p=t.indexVector,u=t.get("geometry"),f=t.get("visibility"),v=new g(r,this.geometryType,this.materialId),y=this._getOffset(u,h),c=o;v.vertexFrom=y,v.indexFrom=p.length,e.push(v),this._tesselator.beginPolygon(_,a);for(var d=0,w=s;d<w.length;d++){var m=w[d];if(!(m.length<3)){this._tesselator.beginContour();var x=void 0,L=void 0;c?(x=m[0].x,L=m[0].y):(x=m[0][0],L=m[0][1]);var T=[x,L,0];this._tesselator.addVertex(T,T);for(var b=1;b<m.length-1;b++){var C=void 0,V=void 0;c?(x=m[b].x,L=m[b].y):(C=m[b][0],V=m[b][1],x+=C,L+=V);var I=[x,L,0];this._tesselator.addVertex(I,I)}this._tesselator.endContour()}}this._tesselator.endPolygon(),this._writeVerticesLibTess(v,u,f,r,_,h,n),this._writeIndicesLibTess(v,p,y,a)}},t.prototype._writeMeshEarcut=function(e,t,i,r,s,o,l,n){if(s&&s.length){var h=this._materialStore.get(this.materialId),a=t.indexVector,p=t.get("geometry"),u=t.get("visibility"),f=new g(r,this.geometryType,this.materialId),v=this._getOffset(p,h);f.vertexFrom=v,f.indexFrom=a.length,e.push(f);for(var y=0,d=0,w=o,m=0,x=s;m<x.length;m++){var L=x[m],T=d,b=void 0,C=void 0;w?(b=L[0].x,C=L[0].y):(b=L[0][0],C=L[0][1]),_[d++]=b,_[d++]=C;for(var V=0,I=1;I<L.length;++I){var O=void 0,F=void 0;if(w){var P=b,S=C;b=L[I].x,C=L[I].y,O=b-P,F=C-S}else O=L[I][0],F=L[I][1],b+=O,C+=F;V-=O*(C+C+F),_[d++]=b,_[d++]=C}V>0?(T-y>0&&(this._write(f,a,p,u,v,r,_,c,y,T,h,n),y=T),c.length=0):V<0&&T-y>0?c.push(.5*(T-y)):d=T}d-y>0&&this._write(f,a,p,u,v,r,_,c,y,d,h,n),_.length=c.length=0}},t.prototype._write=function(e,t,i,r,s,l,n,h,a,p,u,g){var f=o(n.slice(a,p),h,2);if(f.length){var v=this._getOffset(i,u);this._writeVertices(e,i,r,l,n,h,u,g),this._writeIndices(e,t,v,f)}},t.prototype._getOffset=function(e,t){var i=t.materialKeyInfo,r=i.hasVV()?8:6;return e.length/r},t.prototype._writeVertices=function(e,t,i,r,s,o,l,n){for(var h=0;h<s.length;h+=2){var a=p.i1616to32(s[h],s[h+1]);t.push(a),t.push(r),t.push(this.fillColor),t.push(this.tl),t.push(this.br),t.push(this.aux),this._writeVV(t,n,l),i.push(255),e.vertexCount++}},t.prototype._writeIndices=function(e,t,i,r){for(var s=i,o=0;o<r.length;o+=3)t.push(s+r[o]),t.push(s+r[o+1]),t.push(s+r[o+2]),e.indexCount+=3},t.prototype._writeVerticesLibTess=function(e,t,i,r,s,o,l){for(var n=0;n<s.length;n+=2){var h=p.i1616to32(s[n],s[n+1]);t.push(h),t.push(r),t.push(this.fillColor),t.push(this.tl),t.push(this.br),t.push(this.aux),this._writeVV(t,l,o),i.push(255),e.vertexCount++}},t.prototype._writeIndicesLibTess=function(e,t,i,r){for(var s=i,o=0;o<r.length;o++)t.push(s+r[o]),e.indexCount++},t.prototype._writeVV=function(e,t,i){i.materialKeyInfo.hasVV()&&(this.isBFS?(e.push(4294967295),e.push(4294967295)):(e.push(t[h.VVType.COLOR]),e.push(t[h.VVType.OPACITY])))},t}(v.default);t.default=d});