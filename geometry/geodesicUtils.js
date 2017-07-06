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

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../SpatialReference","./Point","./Polyline","./Polygon"],function(e,a,r,t,s,i,n,o){function h(e){return!!(e&&e.wkid&&p[e.wkid])}function u(e){return h(e)?p[e.wkid]:p[b]}function c(e){var a,r=e.spatialReference,t=u(r),s=t.a,n=t.eSq,o=Math.sqrt(n),h=s*e.x*v,c=Math.sin(e.y*v);if(n>0){var f=(1-n)*(c/(1-n*(c*c))-1/(2*o)*Math.log((1-o*c)/(1+o*c)));a=s*f*.5}else a=s*c;return new i(h,a,r)}function f(e,a,r,t,s){for(var n,o,h,c,f=u(s),M=f.a,d=f.b,l=f.f,q=Math.sin(r),S=Math.cos(r),b=(1-l)*Math.tan(e),g=1/Math.sqrt(1+b*b),p=b*g,y=Math.atan2(b,S),m=g*q,w=m*m,x=1-w,D=x*(M*M-d*d)/(d*d),E=1+D/16384*(4096+D*(-768+D*(320-175*D))),R=D/1024*(256+D*(-128+D*(74-47*D))),_=t/(d*E),P=2*Math.PI;Math.abs(_-P)>1e-12;)h=Math.cos(2*y+_),n=Math.sin(_),o=Math.cos(_),c=R*n*(h+R/4*(o*(-1+2*h*h)-R/6*h*(-3+4*n*n)*(-3+4*h*h))),P=_,_=t/(d*E)+c;var A=p*n-g*o*S,I=Math.atan2(p*o+g*n*S,(1-l)*Math.sqrt(w+A*A)),j=Math.atan2(n*q,g*o-p*n*S),k=l/16*x*(4+l*(4-3*x)),z=j-(1-k)*l*m*(_+k*n*(h+k*o*(-1+2*h*h))),N=I/v,C=(a+z)/v,F=new i(C,N,s);return F}function M(e,a,r,t,s){var i,n,o,h,c,f,M,d,l,q,S=u(s),v=S.a,b=S.b,g=S.f,p=t-a,y=Math.atan((1-g)*Math.tan(e)),m=Math.atan((1-g)*Math.tan(r)),w=Math.sin(y),x=Math.cos(y),D=Math.sin(m),E=Math.cos(m),R=p,_=1e3;do{if(M=Math.sin(R),d=Math.cos(R),o=Math.sqrt(E*M*(E*M)+(x*D-w*E*d)*(x*D-w*E*d)),0===o)return 0;c=w*D+x*E*d,f=Math.atan2(o,c),l=x*E*M/o,n=1-l*l,h=c-2*w*D/n,isNaN(h)&&(h=0),q=g/16*n*(4+g*(4-3*n)),i=R,R=p+(1-q)*g*l*(f+q*o*(h+q*c*(-1+2*h*h)))}while(Math.abs(R-i)>1e-12&&--_>0);if(0===_){var P=S.radius,A=Math.acos(Math.sin(e)*Math.sin(r)+Math.cos(e)*Math.cos(r)*Math.cos(t-a))*P,I=t-a,j=Math.sin(I)*Math.cos(r),k=Math.cos(e)*Math.sin(r)-Math.sin(e)*Math.cos(r)*Math.cos(I),z=Math.atan2(j,k);return{azimuth:z,geodesicDistance:A}}var N=n*(v*v-b*b)/(b*b),C=1+N/16384*(4096+N*(-768+N*(320-175*N))),F=N/1024*(256+N*(-128+N*(74-47*N))),G=F*o*(h+F/4*(c*(-1+2*h*h)-F/6*h*(-3+4*o*o)*(-3+4*h*h))),K=b*C*(f-G),Y=Math.atan2(E*Math.sin(R),x*D-w*E*Math.cos(R)),H=Math.atan2(x*Math.sin(R),x*D*Math.cos(R)-w*E),L={azimuth:Y,geodesicDistance:K,reverseAzimuth:H};return L}function d(a,r){if(!(a instanceof n||a instanceof o)){var t="_geodesicDensify: the input geometry is neither polyline nor polygon";throw console.error(t),new Error(t)}var s=a.spatialReference,i=u(s),h=i.radius,c=h/1e4;c>r&&(r=c);var d,l=a instanceof n,q=l?a.paths:a.rings,S=[];return e.forEach(q,function(e){S.push(d=[]),d.push([e[0][0],e[0][1]]);var a,t,i,n,o,h;for(a=e[0][0]*v,t=e[0][1]*v,o=0;o<e.length-1;o++)if(i=e[o+1][0]*v,n=e[o+1][1]*v,a!==i||t!==n){var u=M(t,a,n,i,s),c=u.azimuth,l=u.geodesicDistance,q=l/r;if(q>1){for(h=1;q-1>=h;h++){var b=h*r,g=f(t,a,c,b,s);d.push([g.x,g.y])}var p=(l+Math.floor(q-1)*r)/2,y=f(t,a,c,p,s);d.push([y.x,y.y])}var m=f(t,a,c,l,s);d.push([m.x,m.y]),a=m.x*v,t=m.y*v}}),l?new n({paths:S,spatialReference:s}):new o({rings:S,spatialReference:s})}function l(a,r){var t=[];return e.forEach(a,function(a,s){var i=0,n=a.spatialReference;e.forEach(a.paths,function(e,a){var r,t,s,o,h,u,c=0;for(r=1;r<e.length;r++)t=e[r-1][0]*v,s=e[r][0]*v,o=e[r-1][1]*v,h=e[r][1]*v,(o!==h||t!==s)&&(u=M(o,t,h,s,n),c+=u.geodesicDistance);i+=c}),i/=S[r],t.push(i)}),t}function q(a,r){var t=[],s=[];return e.forEach(a,function(e,a){var r=e.spatialReference,s=u(r),i=s.radius,n=i*g;t.push(d(e,n))}),e.forEach(t,function(a,t){var n=0,o=a.spatialReference;e.forEach(a.rings,function(e,a){var r,t=c(new i(e[0][0],e[0][1],o)),s=c(new i(e[e.length-1][0],e[e.length-1][1],o)),h=s.x*t.y-t.x*s.y;for(r=0;r<e.length-1;r++)t=c(new i(e[r+1][0],e[r+1][1],o)),s=c(new i(e[r][0],e[r][1],o)),h+=s.x*t.y-t.x*s.y;n+=h}),n/=S[r],s.push(n/-2)}),s}var S={esriMeters:1,esriKilometers:1e3,esriYards:.9144,esriFeet:.3048,esriMiles:1609.344,esriNauticalMiles:1852,esriInches:.0254,esriDecimeters:.1,esriCentimeters:.01,esriMillimeters:.001,esriSquareMeters:1,esriSquareKilometers:1e6,esriSquareYards:.83612736,esriSquareFeet:.09290304,esriSquareMiles:2589988.110336,esriAcres:4046.8564224,esriHectares:1e4,esriAres:100,esriSquareInches:64516e-8,esriSquareMillimeters:1e-6,esriSquareCentimeters:1e-4,esriSquareDecimeters:.01},v=Math.PI/180,b=4326,g=.0015696101447650193,p={4326:{a:6378137,b:6356752.31424518,f:1/298.257223563,eSq:.006694379990197414,radius:6371008.771415059},104900:{a:2439700,b:2439700,f:0,eSq:0,radius:2439700},104901:{a:6051e3,b:6051e3,f:0,eSq:0,radius:6051e3},104902:{a:6051800,b:6051800,f:0,eSq:0,radius:6051800},104903:{a:1737400,b:1737400,f:0,eSq:0,radius:1737400},104904:{a:3393400,b:3375730,f:1/192.04301075,eSq:.01038722,radius:3387510},104905:{a:3396190,b:3376200,f:1/169.89444722,eSq:.01173737,radius:3389526.6666666665},104906:{a:6200,b:6200,f:0,eSq:0,radius:6200},104907:{a:11100,b:11100,f:0,eSq:0,radius:11100},104912:{a:2409300,b:2409300,f:0,eSq:0,radius:2409300},104915:{a:1562090,b:1562090,f:0,eSq:0,radius:1562090},104916:{a:2632345,b:2632345,f:0,eSq:0,radius:2632345},104918:{a:1821460,b:1821460,f:0,eSq:0,radius:1821460},104929:{a:249400,b:249400,f:0,eSq:0,radius:249400},104943:{a:2575e3,b:2575e3,f:0,eSq:0,radius:2575e3},104971:{a:3396190,b:3396190,f:0,eSq:0,radius:3396190},104972:{a:47e4,b:47e4,f:0,eSq:0,radius:47e4},104973:{a:255e3,b:255e3,f:0,eSq:0,radius:255e3},104974:{a:2439400,b:2439400,f:0,eSq:0,radius:2439400}},y={isSupported:h,getSpheroidInfo:u,geodesicDensify:d,geodesicLengths:l,geodesicAreas:q,_unitsDictionary:S,_toEqualAreaPoint:c,_directGeodeticSolver:f,_inverseGeodeticSolver:M};return r("extend-esri")&&a.mixin(a.getObject("geometry",!0,t),y),y});