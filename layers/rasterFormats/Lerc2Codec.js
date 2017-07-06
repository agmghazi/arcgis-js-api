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

define([],function(){"use strict";var e={unstuff:function(e,t,r,a,i,n,s,f){var l,o,u,c,h,p=(1<<r)-1,d=0,g=0,x=4*e.length-Math.ceil(r*a/8);if(e[e.length-1]<<=8*x,i)for(l=0;a>l;l++)0===g&&(u=e[d++],g=32),g>=r?(o=u>>>g-r&p,g-=r):(c=r-g,o=(u&p)<<c&p,u=e[d++],g=32-c,o+=u>>>g),t[l]=i[o];else for(h=Math.ceil((f-n)/s),l=0;a>l;l++)0===g&&(u=e[d++],g=32),g>=r?(o=u>>>g-r&p,g-=r):(c=r-g,o=(u&p)<<c&p,u=e[d++],g=32-c,o+=u>>>g),t[l]=h>o?n+o*s:f},unstuffLUT:function(e,t,r,a,i,n){var s,f=(1<<t)-1,l=0,o=0,u=0,c=0,h=0,p=[],d=4*e.length-Math.ceil(t*r/8);e[e.length-1]<<=8*d;var g=Math.ceil((n-a)/i);for(o=0;r>o;o++)0===c&&(s=e[l++],c=32),c>=t?(h=s>>>c-t&f,c-=t):(u=t-c,h=(s&f)<<u&f,s=e[l++],c=32-u,h+=s>>>c),p[o]=g>h?a+h*i:n;return p.unshift(a),p},unstuff2:function(e,t,r,a,i,n,s,f){var l,o,u,c,h=(1<<r)-1,p=0,d=0,g=0;if(i)for(l=0;a>l;l++)0===d&&(u=e[p++],d=32,g=0),d>=r?(o=u>>>g&h,d-=r,g+=r):(c=r-d,o=u>>>g&h,u=e[p++],d=32-c,o|=(u&(1<<c)-1)<<r-c,g=c),t[l]=i[o];else{var x=Math.ceil((f-n)/s);for(l=0;a>l;l++)0===d&&(u=e[p++],d=32,g=0),d>=r?(o=u>>>g&h,d-=r,g+=r):(c=r-d,o=u>>>g&h,u=e[p++],d=32-c,o|=(u&(1<<c)-1)<<r-c,g=c),t[l]=x>o?n+o*s:f}return t},unstuffLUT2:function(e,t,r,a,i,n){var s,f=(1<<t)-1,l=0,o=0,u=0,c=0,h=0,p=0,d=[],g=Math.ceil((n-a)/i);for(o=0;r>o;o++)0===c&&(s=e[l++],c=32,p=0),c>=t?(h=s>>>p&f,c-=t,p+=t):(u=t-c,h=s>>>p&f,s=e[l++],c=32-u,h|=(s&(1<<u)-1)<<t-u,p=u),d[o]=g>h?a+h*i:n;return d.unshift(a),d},originalUnstuff:function(e,t,r,a){var i,n,s,f,l=(1<<r)-1,o=0,u=0,c=4*e.length-Math.ceil(r*a/8);for(e[e.length-1]<<=8*c,i=0;a>i;i++)0===u&&(s=e[o++],u=32),u>=r?(n=s>>>u-r&l,u-=r):(f=r-u,n=(s&l)<<f&l,s=e[o++],u=32-f,n+=s>>>u),t[i]=n;return t},originalUnstuff2:function(e,t,r,a){var i,n,s,f,l=(1<<r)-1,o=0,u=0,c=0;for(i=0;a>i;i++)0===u&&(s=e[o++],u=32,c=0),u>=r?(n=s>>>c&l,u-=r,c+=r):(f=r-u,n=s>>>c&l,s=e[o++],u=32-f,n|=(s&(1<<f)-1)<<r-f,c=f),t[i]=n;return t}},t={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(e){for(var t=65535,r=65535,a=e.length,i=Math.floor(a/2),n=0;i;){var s=i>=359?359:i;i-=s;do t+=e[n++]<<8,r+=t+=e[n++];while(--s);t=(65535&t)+(t>>>16),r=(65535&r)+(r>>>16)}return 1&a&&(r+=t+=e[n]<<8),t=(65535&t)+(t>>>16),r=(65535&r)+(r>>>16),(r<<16|t)>>>0},readHeaderInfo:function(e,t){var r=t.ptr,a=new Uint8Array(e,r,6),i={};if(i.fileIdentifierString=String.fromCharCode.apply(null,a),0!==i.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+i.fileIdentifierString;r+=6;var n=new DataView(e,r,52);i.fileVersion=n.getInt32(0,!0),r+=4,i.fileVersion>=3&&(i.checksum=n.getUint32(4,!0),r+=4),n=new DataView(e,r,48),i.height=n.getUint32(0,!0),i.width=n.getUint32(4,!0),i.numValidPixel=n.getUint32(8,!0),i.microBlockSize=n.getInt32(12,!0),i.blobSize=n.getInt32(16,!0),i.imageType=n.getInt32(20,!0),i.maxZError=n.getFloat64(24,!0),i.zMin=n.getFloat64(32,!0),i.zMax=n.getFloat64(40,!0),r+=48,t.headerInfo=i,t.ptr=r;var s;if(i.fileVersion>=3&&(s=this.computeChecksumFletcher32(new Uint8Array(e,r-48,i.blobSize-14)),s!==i.checksum))throw"Checksum failed.";return!0},readMask:function(e,t){var r=t.ptr,a=t.headerInfo,i=a.width*a.height,n=a.numValidPixel,s=new DataView(e,r,4),f={};if(f.numBytes=s.getUint32(0,!0),r+=4,(0===n||i===n)&&0!==f.numBytes)throw"invalid mask";var l,o;if(0===n)l=new Uint8Array(Math.ceil(i/8)),f.bitset=l,o=new Uint8Array(i),t.pixels.resultMask=o,r+=f.numBytes;else if(f.numBytes>0){l=new Uint8Array(Math.ceil(i/8)),s=new DataView(e,r,f.numBytes);var u=s.getInt16(0,!0),c=2,h=0,p=0;do{if(u>0)for(;u--;)l[h++]=s.getUint8(c++);else for(p=s.getUint8(c++),u=-u;u--;)l[h++]=p;u=s.getInt16(c,!0),c+=2}while(c<f.numBytes);if(-32768!==u||h<l.length)throw"Unexpected end of mask RLE encoding";o=new Uint8Array(i);var d=0,g=0;for(g=0;i>g;g++)7&g?(d=l[g>>3],d<<=7&g):d=l[g>>3],128&d&&(o[g]=1);t.pixels.resultMask=o,f.bitset=l,r+=f.numBytes}return t.ptr=r,t.mask=f,!0},readDataOneSweep:function(e,r,a){var i,n=r.ptr,s=r.headerInfo,f=s.width*s.height,l=s.imageType,o=s.numValidPixel*t.getDateTypeSize(l);if(a===Uint8Array)i=new Uint8Array(e,n,o);else{var u=new ArrayBuffer(o),c=new Uint8Array(u);c.set(new Uint8Array(e,n,o)),i=new a(u)}if(i.length===f)r.pixels.resultPixels=i;else{r.pixels.resultPixels=new a(f);var h=0,p=0;for(p=0;f>p;p++)r.pixels.resultMask[p]&&(r.pixels.resultPixels[p]=i[h++])}return n+=o,r.ptr=n,!0},readHuffman:function(e,a,i){var n=a.headerInfo,s=n.width*n.height,f=this.HUFFMAN_LUT_BITS_MAX,l=new DataView(e,a.ptr,16);a.ptr+=16;var o=l.getInt32(0,!0);if(2>o)throw"unsupported Huffman version";var u=l.getInt32(4,!0),c=l.getInt32(8,!0),h=l.getInt32(12,!0);if(c>=h)return!1;var p=new Uint32Array(h-c);t.decodeBits(e,a,p);var d,g,x,w,k=[];for(d=c;h>d;d++)g=d-(u>d?0:u),k[g]={first:p[d-c],second:null};var y=e.byteLength-a.ptr,b=Math.ceil(y/4),m=new ArrayBuffer(4*b),I=new Uint8Array(m);I.set(new Uint8Array(e,a.ptr,y));var U,v=new Uint32Array(m),M=0,A=0;for(U=v[0],d=c;h>d;d++)g=d-(u>d?0:u),w=k[g].first,w>0&&(k[g].second=U<<M>>>32-w,32-M>=w?(M+=w,32===M&&(M=0,A++,U=v[A])):(M+=w-32,A++,U=v[A],k[g].second|=U>>>32-M));var S=0===a.headerInfo.imageType?128:0,T=a.headerInfo.height,V=a.headerInfo.width,B=0,z=0,D=new r;for(d=0;d<k.length;d++)void 0!==k[d]&&(B=Math.max(B,k[d].first));z=B>=f?f:B,B>=30&&console.log("WARning, large NUM LUT BITS IS "+B);var P,F,L,O,C,H,E=[];for(d=c;h>d;d++)if(g=d-(u>d?0:u),w=k[g].first,w>0)if(P=[w,g],z>=w)for(F=k[g].second<<z-w,L=1<<z-w,x=0;L>x;x++)E[F|x]=P;else for(F=k[g].second,H=D,O=w-1;O>=0;O--)C=F>>>O&1,C?(H.right||(H.right=new r),H=H.right):(H.left||(H.left=new r),H=H.left),0!==O||H.val||(H.val=P[1]);var _,X,Z,N,Y=a.pixels.resultMask,R=0,W=0;M>0&&(A++,M=0),U=v[A];var j=new i(s);if(a.headerInfo.numValidPixel===V*T)for(x=0,d=0;T>d;d++)for(g=0;V>g;g++,x++){if(_=0,Z=U<<M>>>32-z,N=Z,z>32-M&&(Z|=v[A+1]>>>64-M-z,N=Z),E[N])_=E[N][1],M+=E[N][0];else for(Z=U<<M>>>32-B,N=Z,B>32-M&&(Z|=v[A+1]>>>64-M-B,N=Z),H=D,W=0;B>W;W++)if(C=Z>>>B-W-1&1,H=C?H.right:H.left,!H.left&&!H.right){_=H.val,M=M+W+1;break}M>=32&&(M-=32,A++,U=v[A]),X=_-S,X+=g>0?R:d>0?j[x-V]:R,X&=255,j[x]=X,R=X}else for(x=0,d=0;T>d;d++)for(g=0;V>g;g++,x++)if(Y[x]){if(_=0,Z=U<<M>>>32-z,N=Z,z>32-M&&(Z|=v[A+1]>>>64-M-z,N=Z),E[N])_=E[N][1],M+=E[N][0];else for(Z=U<<M>>>32-B,N=Z,B>32-M&&(Z|=v[A+1]>>>64-M-B,N=Z),H=D,W=0;B>W;W++)if(C=Z>>>B-W-1&1,H=C?H.right:H.left,!H.left&&!H.right){_=H.val,M=M+W+1;break}M>=32&&(M-=32,A++,U=v[A]),X=_-S,X+=g>0&&Y[x-1]?R:d>0&&Y[x-V]?j[x-V]:R,X&=255,j[x]=X,R=X}a.pixels.resultPixels=j,a.ptr=a.ptr+4*(A+1)+(M>0?4:0)},decodeBits:function(t,r,a,i){var n=r.headerInfo.fileVersion,s=0,f=new DataView(t,r.ptr,5),l=f.getUint8(0);s++;var o=l>>6,u=0===o?4:3-o,c=(32&l)>0?!0:!1,h=31&l,p=0;if(1===u)p=f.getUint8(s),s++;else if(2===u)p=f.getUint16(s,!0),s+=2;else{if(4!==u)throw"Invalid valid pixel count type";p=f.getUint32(s,!0),s+=4}var d,g,x,w,k,y,b,m,I,U,v=2*r.headerInfo.maxZError;if(c){for(r.counter.lut++,m=f.getUint8(s),I=h,s++,w=Math.ceil((m-1)*h/8),k=Math.ceil(w/4),g=new ArrayBuffer(4*k),x=new Uint8Array(g),r.ptr+=s,x.set(new Uint8Array(t,r.ptr,w)),b=new Uint32Array(g),r.ptr+=w,U=0;m-1>>>U;)U++;w=Math.ceil(p*U/8),k=Math.ceil(w/4),g=new ArrayBuffer(4*k),x=new Uint8Array(g),x.set(new Uint8Array(t,r.ptr,w)),d=new Uint32Array(g),r.ptr+=w,y=n>=3?e.unstuffLUT2(b,h,m-1,i,v,r.headerInfo.zMax):e.unstuffLUT(b,h,m-1,i,v,r.headerInfo.zMax),n>=3?e.unstuff2(d,a,U,p,y):e.unstuff(d,a,U,p,y)}else r.counter.bitstuffer++,U=h,r.ptr+=s,U>0&&(w=Math.ceil(p*U/8),k=Math.ceil(w/4),g=new ArrayBuffer(4*k),x=new Uint8Array(g),x.set(new Uint8Array(t,r.ptr,w)),d=new Uint32Array(g),r.ptr+=w,n>=3?null==i?e.originalUnstuff2(d,a,U,p):e.unstuff2(d,a,U,p,!1,i,v,r.headerInfo.zMax):null==i?e.originalUnstuff(d,a,U,p):e.unstuff(d,a,U,p,!1,i,v,r.headerInfo.zMax))},readTiles:function(e,r,a){var i=r.headerInfo,n=i.width,s=i.height,f=i.microBlockSize,l=i.imageType,o=Math.ceil(n/f),u=Math.ceil(s/f);r.pixels.numBlocksY=u,r.pixels.numBlocksX=o,r.pixels.ptr=0;var c,h,p,d,g,x,w,k,y=0,b=0,m=0,I=0,U=0,v=0,M=0,A=0,S=0,T=0,V=0,B=0,z=0,D=0,P=0,F=0,L=new a(f*f),O=s%f||f,C=n%f||f;for(m=0;u>m;m++)for(U=m!==u-1?f:O,I=0;o>I;I++){if(v=I!==o-1?f:C,V=m*n*f+I*f,B=n-v,M=e.byteLength-r.ptr,c=new DataView(e,r.ptr,Math.min(10,M)),h={},F=0,A=c.getUint8(0),F++,S=A>>6&255,T=A>>2&15,T!==(I*f>>3&15))throw"integrity issue";if(x=3&A,x>3)throw r.ptr+=F,"Invalid block encoding ("+x+")";if(2!==x)if(0===x){if(r.counter.uncompressed++,r.ptr+=F,z=U*v*t.getDateTypeSize(l),D=e.byteLength-r.ptr,z=D>z?z:D,p=new ArrayBuffer(z),d=new Uint8Array(p),d.set(new Uint8Array(e,r.ptr,z)),g=new a(p),P=0,r.pixels.resultMask)for(y=0;U>y;y++){for(b=0;v>b;b++)r.pixels.resultMask[V]&&(r.pixels.resultPixels[V]=g[P++]),V++;V+=B}else for(y=0;U>y;y++){for(b=0;v>b;b++)r.pixels.resultPixels[V++]=g[P++];V+=B}r.ptr+=P*t.getDateTypeSize(l)}else if(w=t.getDataTypeUsed(l,S),k=t.getOnePixel(h,F,w,c),F+=t.getDateTypeSize(w),3===x)if(r.ptr+=F,r.counter.constantoffset++,r.pixels.resultMask)for(y=0;U>y;y++){for(b=0;v>b;b++)r.pixels.resultMask[V]&&(r.pixels.resultPixels[V]=k),V++;V+=B}else for(y=0;U>y;y++){for(b=0;v>b;b++)r.pixels.resultPixels[V++]=k;V+=B}else if(r.ptr+=F,t.decodeBits(e,r,L,k),F=0,r.pixels.resultMask)for(y=0;U>y;y++){for(b=0;v>b;b++)r.pixels.resultMask[V]&&(r.pixels.resultPixels[V]=L[F++]),V++;V+=B}else for(y=0;U>y;y++){for(b=0;v>b;b++)r.pixels.resultPixels[V++]=L[F++];V+=B}else r.counter.constant++,r.ptr+=F}},formatFileInfo:function(e){return{fileIdentifierString:e.headerInfo.fileIdentifierString,fileVersion:e.headerInfo.fileVersion,imageType:e.headerInfo.imageType,height:e.headerInfo.height,width:e.headerInfo.width,numValidPixel:e.headerInfo.numValidPixel,microBlockSize:e.headerInfo.microBlockSize,blobSize:e.headerInfo.blobSize,maxZError:e.headerInfo.maxZError,pixelType:t.getPixelType(e.headerInfo.imageType),eofOffset:e.eofOffset,mask:e.mask?{numBytes:e.mask.numBytes}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,maxValue:e.headerInfo.zMax,minValue:e.headerInfo.zMin,noDataValue:e.noDataValue}}},constructConstantSurface:function(e){var t=e.headerInfo.zMax,r=e.headerInfo.height*e.headerInfo.width,a=0;if(e.pixels.resultMask)for(a=0;r>a;a++)e.pixels.resultMask[a]&&(e.pixels.resultPixels[a]=t);else for(a=0;r>a;a++)e.pixels.resultPixels[a]=t},getDataTypeArray:function(e){var t;switch(e){case 0:t=Int8Array;break;case 1:t=Uint8Array;break;case 2:t=Int16Array;break;case 3:t=Uint16Array;break;case 4:t=Int32Array;break;case 5:t=Uint32Array;break;case 6:t=Float32Array;break;case 7:t=Float64Array;break;default:t=Float32Array}return t},getPixelType:function(e){var t;switch(e){case 0:t="S8";break;case 1:t="U8";break;case 2:t="S16";break;case 3:t="U16";break;case 4:t="S32";break;case 5:t="U32";break;case 6:t="F32";break;case 7:t="F64";break;default:t="F32"}return t},isValidPixelValue:function(e,t){if(null===t||void 0===t)return!1;var r;switch(e){case 0:r=t>=-128&&127>=t;break;case 1:r=t>=0&&255>=t;break;case 2:r=t>=-32768&&32767>=t;break;case 3:r=t>=0&&65536>=t;break;case 4:r=t>=-2147483648&&2147483647>=t;break;case 5:r=t>=0&&4294967296>=t;break;case 6:r=t>=-3.4027999387901484e38&&3.4027999387901484e38>=t;break;case 7:r=t>=5e-324&&1.7976931348623157e308>=t;break;default:r=!1}return r},getDateTypeSize:function(e){var t=0;switch(e){case 0:case 1:t=1;break;case 2:case 3:t=2;break;case 4:case 5:case 6:t=4;break;case 7:t=8;break;default:t=e}return t},getDataTypeUsed:function(e,t){var r=e;switch(e){case 2:case 4:r=e-t;break;case 3:case 5:r=e-2*t;break;case 6:r=0===t?e:1===t?2:1;break;case 7:r=0===t?e:e-2*t+1;break;default:r=e}return r},getOnePixel:function(e,t,r,a){var i=0;switch(r){case 0:i=a.getInt8(t);break;case 1:i=a.getUint8(t);break;case 2:i=a.getInt16(t,!0);break;case 3:i=a.getUint16(t,!0);break;case 4:i=a.getInt32(t,!0);break;case 5:i=a.getUInt32(t,!0);break;case 6:i=a.getFloat32(t,!0);break;case 7:i=a.getFloat64(t,!0);break;default:throw"the decoder does not understand this pixel type"}return i}},r=function(e,t,r){this.val=e,this.left=t,this.right=r},a={decode:function(e,r){r=r||{};var a=r.maskData||null===r.maskData,i=r.noDataValue,n=0,s={};if(s.ptr=r.inputOffset||0,s.pixels={},t.readHeaderInfo(e,s)){var f=s.headerInfo,l=t.getDataTypeArray(f.imageType);if(a)s.pixels.resultMask=r.maskData,s.ptr+=4;else if(!t.readMask(e,s))return;var o=f.width*f.height;if(s.pixels.resultPixels=new l(o),s.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0},0!==f.numValidPixel)if(f.zMax===f.zMin)t.constructConstantSurface(s);else{var u=new DataView(e,s.ptr,2),c=u.getUint8(0,!0);if(s.ptr++,c)t.readDataOneSweep(e,s,l);else if(f.fileVersion>1&&f.imageType<=1&&Math.abs(f.maxZError-.5)<1e-5){var h=u.getUint8(1,!0);s.ptr++,h?t.readHuffman(e,s,l):t.readTiles(e,s,l)}else t.readTiles(e,s,l)}s.eofOffset=s.ptr;var p;r.inputOffset?(p=s.headerInfo.blobSize+r.inputOffset-s.ptr,Math.abs(p)>=1&&(s.eofOffset=r.inputOffset+s.headerInfo.blobSize)):(p=s.headerInfo.blobSize-s.ptr,Math.abs(p)>=1&&(s.eofOffset=s.headerInfo.blobSize));var d={width:f.width,height:f.height,pixelData:s.pixels.resultPixels,minValue:f.zMin,maxValue:f.zMax,maskData:s.pixels.resultMask};if(s.pixels.resultMask&&t.isValidPixelValue(f.imageType,i)){var g=s.pixels.resultMask;for(n=0;o>n;n++)g[n]||(d.pixelData[n]=i);d.noDataValue=i}return s.noDataValue=i,r.returnFileInfo&&(d.fileInfo=t.formatFileInfo(s)),d}},getBandCount:function(e){var r=0,a=0,i={};for(i.ptr=0,i.pixels={};a<e.byteLength-58;)t.readHeaderInfo(e,i),a+=i.headerInfo.blobSize,r++,i.ptr=a;return r}};return a});