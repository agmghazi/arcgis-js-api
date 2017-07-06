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

define(["require","exports","../geometry/Polygon","../graphic","../geometry/Polyline","../geometry/Point","../geometry/Extent","../geometry/Multipoint","../SpatialReference","./languageUtils","./treeAnalysis","./Dictionary","./Feature","./functions/date","./functions/string","./functions/maths","./functions/geometry","./functions/stats","./ImmutablePathArray","./ImmutablePointArray","../geometry/Geometry"],function(e,r,t,n,o,a,i,s,l,c,u,p,f,m,g,h,d,E,y,b,S){function w(e,r){for(var t=[],n=0;n<r.arguments.length;n++)t.push(N(e,r.arguments[n]));return t}function v(e,r,t){try{return t(e,null,r)}catch(n){throw n}}function N(e,r){try{switch(r.type){case"EmptyStatement":return"lc.voidOperation";case"VariableDeclarator":return L(e,r);case"VariableDeclaration":return D(e,r);case"BlockStatement":return U(e,r);case"FunctionDeclaration":return F(e,r);case"ReturnStatement":return P(e,r);case"IfStatement":return A(e,r);case"ExpressionStatement":return R(e,r);case"AssignmentExpression":return x(e,r);case"UpdateExpression":return C(e,r);case"BreakStatement":return"break;";case"ContinueStatement":return"continue;";case"ForStatement":return T(e,r);case"ForInStatement":return O(e,r);case"Identifier":return q(e,r);case"MemberExpression":return B(e,r);case"Literal":return null===r.value||void 0===r.value?"null":JSON.stringify(r.value);case"ThisExpression":throw new Error(u.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTED"));case"CallExpression":return G(e,r);case"UnaryExpression":return V(e,r);case"BinaryExpression":return j(e,r);case"LogicalExpression":return z(e,r);case"ConditionalExpression":throw new Error(u.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTED"));case"ArrayExpression":return Y(e,r);case"ObjectExpression":return M(e,r);case"Property":return I(e,r);case"Array":throw new Error(u.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTED"));default:throw new Error(u.nodeErrorMessage(r,"RUNTIME","UNREOGNISED"))}}catch(t){throw t}}function M(e,r){for(var t="lang.dictionary([",n=0;n<r.properties.length;n++){var o=r.properties[n],a="Identifier"===o.key.type?"'"+o.key.name+"'":N(e,o.key),i=N(e,o.value);n>0&&(t+=","),t+="lang.strCheck("+a+",'ObjectExpression'),lang.aCheck("+i+", 'ObjectExpression')"}return t+="])"}function I(e,r){throw new Error("Should not get here")}function O(e,r){var t=Q(e),n=Q(e),o=Q(e),a="var "+t+" = "+N(e,r.right)+";\n";"VariableDeclaration"===r.left.type&&(a+=N(e,r.left));var i="VariableDeclaration"===r.left.type?r.left.declarations[0].id.name:r.left.name;i=i.toLowerCase();var s="";return null!==e.localScope&&(void 0!==e.localScope[i]?s="lscope['"+i+"']":void 0!==e.localScope._SymbolsMap[i]&&(s="lscope['"+e.localScope._SymbolsMap[i]+"']")),""===s&&(void 0!==e.globalScope[i]?s="gscope['"+i+"']":void 0!==e.globalScope._SymbolsMap[i]&&(s="gscope['"+e.globalScope._SymbolsMap[i]+"']")),a+="if ("+t+"===null) {  lastStatement = lc.voidOperation; }\n ",a+="else if (lc.isArray("+t+") || lc.isString("+t+")) {",a+="var "+n+"="+t+".length; \n",a+="for(var "+o+"=0; "+o+"<"+n+"; "+o+"++) {\n",a+=s+"="+o+";\n",a+=N(e,r.body),a+="\n}\n",a+=" lastStatement = lc.voidOperation; \n",a+=" \n}\n",a+="else if (lc.isImmutableArray("+t+")) {",a+="var "+n+"="+t+".length(); \n",a+="for(var "+o+"=0; "+o+"<"+n+"; "+o+"++) {\n",a+=s+"="+o+";\n",a+=N(e,r.body),a+="\n}\n",a+=" lastStatement = lc.voidOperation; \n",a+=" \n}\n",a+="else if (( "+t+" instanceof lang.Dictionary) || ( "+t+" instanceof lang.Feature)) {",a+="var "+n+"="+t+".keys(); \n",a+="for(var "+o+"=0; "+o+"<"+n+".length; "+o+"++) {\n",a+=s+"="+n+"["+o+"];\n",a+=N(e,r.body),a+="\n}\n",a+=" lastStatement = lc.voidOperation; \n",a+=" \n}\n",a+="else { lastStatement = lc.voidOperation; } \n"}function T(e,r){var t="lastStatement = lc.voidOperation; \n";null!==r.init&&(t+=N(e,r.init));var n=Q(e),o=Q(e);return t+="var "+n+" = true;",t+="\n do { ",null!==r.update&&(t+=" if ("+n+"===false) {\n "+N(e,r.update)+"  \n}\n "+n+"=false; \n"),null!==r.test&&(t+="var "+o+" = "+N(e,r.test)+";",t+="if ("+o+"===false) { break; } else if ("+o+"!==true) { lang.error({type: '"+r.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION');   }\n"),t+=N(e,r.body),null!==r.update&&(t+="\n "+N(e,r.update)),t+="\n"+n+" = true; \n} while(true);  lastStatement = lc.voidOperation;"}function C(e,r){var t=null,n=!1,o="";if("MemberExpression"===r.argument.type)return n=!0,t=N(e,r.argument.object),o=r.argument.computed===!0?N(e,r.argument.property):"'"+r.argument.property.name+"'","lang.memberupdate("+t+","+o+",'"+r.operator+"',"+r.prefix+")";if(t=r.argument.name.toLowerCase(),null!==e.localScope){if(void 0!==e.localScope[t])return"lang.update(lscope, '"+t+"','"+r.operator+"',"+r.prefix+")";if(void 0!==e.localScope._SymbolsMap[t])return"lang.update(lscope, '"+e.localScope._SymbolsMap[t]+"','"+r.operator+"',"+r.prefix+")"}if(void 0!==e.globalScope[t])return"lang.update(gscope, '"+t+"','"+r.operator+"',"+r.prefix+")";if(void 0!==e.globalScope._SymbolsMap[t])return"lang.update(gscope, '"+e.globalScope._SymbolsMap[t]+"','"+r.operator+"',"+r.prefix+")";throw new Error("Variable not recognised")}function x(e,r){var t=N(e,r.right),n=null,o=!1,a="";if("MemberExpression"===r.left.type)return o=!0,n=N(e,r.left.object),a=r.left.computed===!0?N(e,r.left.property):"'"+r.left.property.name+"'","lang.assignmember("+n+","+a+",'"+r.operator+"',"+t+");";if(n=r.left.name.toLowerCase(),null!==e.localScope){if(void 0!==e.localScope[n])return"lscope['"+n+"']=lang.assign("+t+",'"+r.operator+"', lscope['"+n+"']); ";if(void 0!==e.localScope._SymbolsMap[n])return"lscope['"+e.localScope._SymbolsMap[n]+"']=lang.assign("+t+",'"+r.operator+"', lscope['"+e.localScope._SymbolsMap[n]+"']); "}if(void 0!==e.globalScope[n])return"gscope['"+n+"']=lang.assign("+t+",'"+r.operator+"', gscope['"+n+"']); ";if(void 0!==e.globalScope._SymbolsMap[n])return"gscope['"+e.globalScope._SymbolsMap[n]+"']=lang.assign("+t+",'"+r.operator+"', gscope['"+e.globalScope._SymbolsMap[n]+"']); ";throw new Error("Variable not recognised")}function R(e,r){return"AssignmentExpression"===r.expression.type?"lastStatement = lc.voidOperation; "+N(e,r.expression)+" \n ":"CallExpression"===r.expression.type?"lastStatement = "+N(e,r.expression)+";":"lastStatement = "+N(e,r.expression)+";"}function _(e,r){return"BlockStatement"===r.type?N(e,r):"ReturnStatement"===r.type?N(e,r):"BreakStatement"===r.type?N(e,r):"ContinueStatement"===r.type?N(e,r):"UpdateExpression"===r.type?"lastStatement = "+N(e,r)+";":"ExpressionStatement"===r.type?N(e,r):"ObjectExpression"===r.type?"lastStatement = "+N(e,r)+";":N(e,r)}function A(e,r){if("AssignmentExpression"===r.test.type||"UpdateExpression"===r.test.type)throw new Error(u.nodeErrorMessage(r.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));var t=N(e,r.test),n=Q(e),o="var "+n+" = "+t+";\n if ("+n+" === true) {\n"+_(e,r.consequent)+"\n }\n";return o+=null!==r.alternate?"else if ("+n+"===false)   { \n"+_(e,r.alternate)+"}\n":"else if ("+n+"===false) { \n lastStatement = lc.voidOperation;\n }\n",o+="else { lang.error({type: '"+r.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION'); \n}\n"}function U(e,r){for(var t="",n=0;n<r.body.length;n++)t+="ReturnStatement"===r.body[n].type?N(e,r.body[n])+" \n":"BreakStatement"===r.body[n].type?N(e,r.body[n])+" \n":"ContinueStatement"===r.body[n].type?N(e,r.body[n])+" \n":"UpdateExpression"===r.body[n].type?"lastStatement = "+N(e,r.body[n])+"; \n":"ObjectExpression"===r.body[n].type?"lastStatement = "+N(e,r.body[n])+"; \n":N(e,r.body[n])+" \n";return t}function P(e,r){if(null===r.argument)return"return lc.voidOperation;";var t=N(e,r.argument);return"return "+t+";"}function F(e,r){var t=r.id.name.toLowerCase(),n={applicationCache:void 0===e.applicationCache?null:e.applicationCache,spatialReference:e.spatialReference,console:e.console,symbols:e.symbols,localScope:{_SymbolsMap:{}},depthCounter:e.depthCounter+1,globalScope:e.globalScope};if(n.depthCounter>64)throw new Error("Exceeded maximum function depth");for(var o="new lc.SizzleFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; var lscope = [];\n ",a=0;a<r.params.length;a++){var i=r.params[a].name.toLowerCase(),s=X(i,e);n.localScope._SymbolsMap[i]=s,o+="lscope['"+s+"']=arguments["+a.toString()+"];\n"}if(o+=U(n,r.body)+"\n return lastStatement; }, runtimeCtx))",o+="\n lastStatement = lc.voidOperation; \n",void 0!==e.globalScope[t])return"gscope['"+t+"']="+o;if(void 0!==e.globalScope._SymbolsMap[t])return"gscope['"+e.globalScope._SymbolsMap[t]+"']="+o;var s=X(t,e);return e.globalScope._SymbolsMap[t]=s,"gscope['"+s+"']="+o}function D(e,r){for(var t=[],n=0;n<r.declarations.length;n++)t.push(N(e,r.declarations[n]));return t.join("\n")+" \n lastStatement=  lc.voidOperation; \n"}function L(e,r){var t=null===r.init?null:N(e,r.init);t===c.voidOperation&&(t=null);var n=r.id.name.toLowerCase();if(null!==e.localScope){if(void 0!==e.localScope[n])return"lscope['"+n+"']="+t+";";if(void 0!==e.localScope._SymbolsMap[n])return"lscope['"+e.localScope._SymbolsMap[n]+"']="+t+";";var o=X(n,e);return e.localScope._SymbolsMap[n]=o,"lscope['"+o+"']="+t+";"}if(void 0!==e.globalScope[n])return"gscope['"+n+"']="+t+";";if(void 0!==e.globalScope._SymbolsMap[n])return"gscope['"+e.globalScope._SymbolsMap[n]+"']="+t+";";var o=X(n,e);return e.globalScope._SymbolsMap[n]=o,"gscope['"+o+"']="+t+";"}function k(e,r,t){var n;switch(r=r.toLowerCase()){case"hasz":var o=e.hasZ;return void 0===o?!1:o;case"hasm":var a=e.hasM;return void 0===a?!1:a;case"spatialreference":var i=e.spatialReference._arcadeCacheId;if(void 0===i){var s=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(s=!1),s&&(le++,e.spatialReference._arcadeCacheId=le,i=le)}var l=new p({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==i&&(l._arcadeCacheId="SPREF"+i.toString()),l}switch(e.type){case"extent":switch(r){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":var f=e[r];return void 0!==f?f:null;case"type":return"Extent"}break;case"polygon":switch(r){case"rings":n=c.isVersion4?e.cache._arcadeCacheId:e.getCacheValue("_arcadeCacheId"),void 0===n&&(le++,n=le,c.isVersion4?e.cache._arcadeCacheId=n:e.setCacheValue("_arcadeCacheId",n));var m=new y(e.rings,e.spatialReference,e.hasZ===!0,e.hasM===!0,n);return m;case"type":return"Polygon"}break;case"point":switch(r){case"x":case"y":case"z":case"m":return void 0!==e[r]?e[r]:null;case"type":return"Point"}break;case"polyline":switch(r){case"paths":n=c.isVersion4?e.cache._arcadeCacheId:e.getCacheValue("_arcadeCacheId"),void 0===n&&(le++,n=le,c.isVersion4?e.cache._arcadeCacheId=n:e.setCacheValue("_arcadeCacheId",n));var m=new y(e.paths,e.spatialReference,e.hasZ===!0,e.hasM===!0,n);return m;case"type":return"Polyline"}break;case"multipoint":switch(r){case"points":n=c.isVersion4?e.cache._arcadeCacheId:e.getCacheValue("_arcadeCacheId"),void 0===n&&(le++,n=le,c.isVersion4?e.cache._arcadeCacheId=n:e.setCacheValue("_arcadeCacheId",n));var m=new b(e.points,e.spatialReference,e.hasZ===!0,e.hasM===!0,n,1);return m;case"type":return"Multipoint"}}throw new Error(u.nodeErrorMessage(t,"RUNTIME","PROPERTYNOTFOUND"))}function B(e,r){try{var t=void 0;return t=r.computed===!0?N(e,r.property):"'"+r.property.name+"'","lang.member("+N(e,r.object)+","+t+")"}catch(n){throw n}}function V(e,r){try{return"lang.unary("+N(e,r.argument)+",'"+r.operator+"')"}catch(t){throw t}}function Y(e,r){try{for(var t=[],n=0;n<r.elements.length;n++)"Literal"===r.elements[n].type?t.push(N(e,r.elements[n])):t.push("lang.aCheck("+N(e,r.elements[n])+",'ArrayExpression')");return"["+t.join(",")+"]"}catch(o){throw o}}function j(e,r){try{return"lang.binary("+N(e,r.left)+","+N(e,r.right)+",'"+r.operator+"')"}catch(t){throw t}}function z(e,r){try{if("AssignmentExpression"===r.left.type||"UpdateExpression"===r.left.type)throw new Error(u.nodeErrorMessage(r.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===r.right.type||"UpdateExpression"===r.right.type)throw new Error(u.nodeErrorMessage(r.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("&&"===r.operator||"||"===r.operator)return"(lang.logicalCheck("+N(e,r.left)+") "+r.operator+" lang.logicalCheck("+N(e,r.right)+"))";throw new Error(u.nodeErrorMessage("LogicalExpression","RUNTIME","ONLYORORAND"))}catch(t){throw t}}function q(e,r){try{var t=r.name.toLowerCase();if(null!==e.localScope){if(void 0!==e.localScope[t])return"lscope['"+t+"']";if(void 0!==e.localScope._SymbolsMap[t])return"lscope['"+e.localScope._SymbolsMap[t]+"']"}if(void 0!==e.globalScope[t])return"gscope['"+t+"']";if(void 0!==e.globalScope._SymbolsMap[t])return"gscope['"+e.globalScope._SymbolsMap[t]+"']";throw new Error(u.nodeErrorMessage(r,"RUNTIME","VARIABLENOTFOUND"))}catch(n){throw n}}function G(e,r){try{if("Identifier"!==r.callee.type)throw new Error(u.nodeErrorMessage(r,"RUNTIME","ONLYNODESSUPPORTED"));var t=r.callee.name.toLowerCase(),n="";if(null!==e.localScope&&(void 0!==e.localScope[t]?n="lscope['"+t+"']":void 0!==e.localScope._SymbolsMap[t]&&(n="lscope['"+e.localScope._SymbolsMap[t]+"']")),""===n&&(void 0!==e.globalScope[t]?n="gscope['"+t+"']":void 0!==e.globalScope._SymbolsMap[t]&&(n="gscope['"+e.globalScope._SymbolsMap[t]+"']")),""!==n){for(var o="[",a=0;a<r.arguments.length;a++)a>0&&(o+=", "),o+=N(e,r.arguments[a]);return o+="]","lang.callfunc("+n+","+o+",runtimeCtx)"}throw new Error(u.nodeErrorMessage(r,"RUNTIME","NOTFOUND"))}catch(i){throw i}}function Z(e){return null===e?"":c.isArray(e)?"Array":c.isImmutableArray(e)?"Array":c.isDate(e)?"Date":c.isString(e)?"String":c.isBoolean(e)?"Boolean":c.isNumber(e)?"Number":e instanceof p?"Dictionary":e instanceof f?"Feature":e instanceof a?"Point":e instanceof t?"Polygon":e instanceof o?"Polyline":e instanceof s?"Multipoint":e instanceof i?"Extent":c.isFunctionParameter(e)?"Function":e===c.voidOperation?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function H(e,r,t,n){try{var o=r[t];if(c.equalityTest(o,n))return r[t+1];var a=r.length-t;return 1===a?r[t]:2===a?null:3===a?r[t+2]:H(e,r,t+2,n)}catch(i){throw i}}function W(e,r,t,n){try{if(n===!0)return r[t+1];var o=r.length-t;if(3===o)return r[t+2];var a=r[t+2];if(c.isBoolean(a)===!1)throw new Error("WHEN needs boolean test conditions");return W(e,r,t+2,a)}catch(i){throw i}}function J(e,r){var t=e.length,n=Math.floor(t/2);return 0===t?[]:1===t?[e[0]]:K(J(e.slice(0,n),r),J(e.slice(n,t),r),r)}function K(e,r,t){for(var n=[];e.length>0||r.length>0;)if(e.length>0&&r.length>0){var o=t(e[0],r[0]);isNaN(o)&&(o=0),0>=o?(n.push(e[0]),e=e.slice(1)):(n.push(r[0]),r=r.slice(1))}else e.length>0?(n.push(e[0]),e=e.slice(1)):r.length>0&&(n.push(r[0]),r=r.slice(1));return n}function X(e,r){return r.symbols.symbolCounter++,"_T"+r.symbols.symbolCounter.toString()}function Q(e){return e.symbols.symbolCounter++,"_Tvar"+e.symbols.symbolCounter.toString()}function $(e,r,t){var n={};e||(e={}),t||(t={}),n._SymbolsMap={},n.textformatting=1,n.infinity=1,n.pi=1;for(var o in r)n[o]=1;for(var o in t)n[o]=1;for(var o in e)n[o]=1;return n}function ee(e,r){var t=new pe;e||(e={}),r||(r={});var o=new p({newline:"\n",tab:"	",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,t._SymbolsMap={textformatting:1,infinity:1,pi:1},t.textformatting=o,t.infinity=Number.POSITIVE_INFINITY,t.pi=Math.PI;for(var a in r)t[a]=r[a],t._SymbolsMap[a]=1;for(var a in e)t._SymbolsMap[a]=1,e[a]instanceof n?t[a]=new f(e[a]):t[a]=e[a];return t}function re(e,r,t){return e(r,t)}function te(e,r){return void 0===r&&(r=!1),u.findFieldLiterals(e,r)}function ne(e,r){return u.validateScript(e,r,"simple")}function oe(e,r){return u.referencesMember(e,r)}function ae(e,r){return u.referencesFunction(e,r)}function ie(e){console.log(e)}function se(e,r){void 0===r&&(r=null),null===r&&(r={vars:{},customfunctions:{}});var t={globalScope:$(r.vars,ce,r.customfunctions),localScope:null,console:ie,symbols:{symbolCounter:0}},n=N(t,e.body[0].body);""===n&&(n="lc.voidOperation;");var o="var runtimeCtx=this.prepare(context, spatialReference);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n "+n+"\n return lastStatement; } \n return this.postProcess(mainBody());",a={lc:c,lang:me,postProcess:function(e){if(e instanceof c.ReturnResult&&(e=e.value),e instanceof c.ImplicitResult&&(e=e.value),e===c.voidOperation&&(e=null),e===c.breakResult)throw new Error("Cannot return BREAK");if(e===c.continueResult)throw new Error("Cannot return CONTINUE");if(c.isFunctionParameter(e))throw new Error("Cannot return FUNCTION");return e},prepare:function(e,r){r||(r=new l(102100));var t=ee(e.vars,e.customfunctions),n={spatialReference:r,globalScope:t,localScope:null,console:e.console?e.console:ie,symbols:{symbolCounter:0},depthCounter:1,applicationCache:void 0===e.applicationCache?null:e.applicationCache};return n}},i=new Function("context","spatialReference",o).bind(a);return i}Object.defineProperty(r,"__esModule",{value:!0});var le=0,ce={};m.registerFunctions(ce,v),g.registerFunctions(ce,v),h.registerFunctions(ce,v),d.registerFunctions(ce,v),E.registerFunctions(ce,v),ce["typeof"]=function(e,r){return v(e,r,function(e,r,t){c.pcCheck(t,1,1);var n=Z(t[0]);if("Unrecognised Type"===n)throw new Error("Unrecognised Type");return n})},ce.iif=function(e,r){try{return v(e,r,function(e,r,t){if(c.pcCheck(t,3,3),c.isBoolean(t[0])===!1)throw new Error("IF Function must have a boolean test condition");return t[0]?t[1]:t[2]})}catch(t){throw t}},ce.decode=function(e,r){try{return v(e,r,function(r,t,n){if(n.length<2)throw new Error("Missing Parameters");if(2===n.length)return n[1];if((n.length-1)%2===0)throw new Error("Must have a default value result.");var o=n[0],a=1;return H(e,n,a,o)})}catch(t){throw t}},ce.when=function(e,r){try{return v(e,r,function(r,t,n){if(n.length<3)throw new Error("Missing Parameters");if(n.length%2===0)throw new Error("Must have a default value result.");var o=n[0];if(c.isBoolean(o)===!1)throw new Error("WHEN needs boolean test conditions");var a=0;return W(e,n,a,o)})}catch(t){throw t}},ce.top=function(e,r){return v(e,r,function(e,r,t){if(c.pcCheck(t,2,2),c.isArray(t[0]))return c.toNumber(t[1])>=t[0].length?t[0].slice(0):t[0].slice(0,c.toNumber(t[1]));if(c.isImmutableArray(t[0]))return c.toNumber(t[1])>=t[0].length()?t[0].slice(0):t[0].slice(0,c.toNumber(t[1]));throw new Error("Top cannot accept this parameter type")})},ce.first=function(e,r){return v(e,r,function(e,r,t){return c.pcCheck(t,1,1),c.isArray(t[0])?0===t[0].length?null:t[0][0]:c.isImmutableArray(t[0])?0===t[0].length()?null:t[0].get(0):null})},ce.sort=function(e,r){return v(e,r,function(e,r,t){c.pcCheck(t,1,2);var n=t[0];if(c.isImmutableArray(n)&&(n=n.toArray()),c.isArray(n)===!1)throw new Error("Illegal Argument");if(t.length>1){if(c.isFunctionParameter(t[1])===!1)throw new Error("Illegal Argument");var o=n,a=function(r,n){return me.callfunc(t[1],[r,n],e)};return o=J(o,function(e,r){return a(e,r)})}var o=n;if(0===o.length)return[];for(var i={},s=!0,l=0;l<o.length;l++){var u=Z(o[l]);""!==u?i[u]=!0:s=!0}if(i.Array===!0||i.Dictionary===!0||i.Feature===!0||i.Point===!0||i.Polygon===!0||i.Polyline===!0||i.Multipoint===!0||i.Extent===!0||i.Function===!0)return o.slice(0);var p=0,f="";for(var m in i)p++,f=m;return o=p>1||"String"===f?J(o,function(e,r){if(null===e||void 0===e||e===c.voidOperation)return null===r||void 0===r||r===c.voidOperation?0:1;if(null===r||void 0===r||r===c.voidOperation)return-1;var t=c.toString(e),n=c.toString(r);return n>t?-1:t===n?0:1}):"Number"===f?J(o,function(e,r){return e-r}):"Boolean"===f?J(o,function(e,r){return e===r?0:r?-1:1}):"Date"===f?J(o,function(e,r){return r-e}):o.slice(0)})};for(var ue in ce)ce[ue]=new c.NativeFunction(ce[ue]);var pe=function(){};pe.prototype=ce;var fe={fixSpatialReference:c.fixSpatialReference,parseArguments:w,standardFunction:v};r.functionHelper=fe,r.executeScript=re,r.extractFieldLiterals=te,r.validateScript=ne,r.referencesMember=oe,r.referencesFunction=ae;var me={error:function(e,r,t){throw new Error(u.nodeErrorMessage(e,r,t))},functionDepthchecker:function(e,r){return function(){if(r.depthCounte++,r.depthCounter>64)throw new Error("Exceeded maximum function depth");var t=e.apply(this,arguments);return r.depthCounte--,t}},aCheck:function(e,r){if(c.isFunctionParameter(e))throw new Error(u.nodeErrorMessage({type:r},"RUNTIME","FUNCTIONCONTEXTILLEGAL"));return e===c.voidOperation?null:e},Dictionary:p,Feature:f,dictionary:function(e){for(var r={},t=0;t<e.length;t+=2){if(c.isFunctionParameter(e[t+1]))throw new Error("Illegal Argument");if(c.isString(e[t])===!1)throw new Error("Illegal Argument");e[t+1]===c.voidOperation?r[e[t].toString()]=null:r[e[t].toString()]=e[t+1]}var n=new p(r);return n.immutable=!1,n},strCheck:function(e,r){if(c.isString(e)===!1)throw new Error("Illegal Argument");return e},unary:function(e,r){if(c.isBoolean(e)){if("!"===r)return!e;if("-"===r)return-1*c.toNumber(e);if("+"===r)return 1*c.toNumber(e);throw new Error(u.nodeErrorMessage({type:"UnaryExpression"},"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))}if("-"===r)return-1*c.toNumber(e);if("+"===r)return 1*c.toNumber(e);throw new Error(u.nodeErrorMessage({type:"UnaryExpression"},"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))},logicalCheck:function(e){if(c.isBoolean(e)===!1)throw new Error(u.nodeErrorMessage("LogicalExpression","RUNTIME","ONLYORORAND"));return e},logical:function(e,r,t){if(!c.isBoolean(e)||!c.isBoolean(r))throw new Error(u.nodeErrorMessage("LogicalExpression","RUNTIME","ONLYORORAND"));switch(t){case"||":return e||r;case"&&":return e&&r;default:throw new Error(u.nodeErrorMessage("LogicalExpression","RUNTIME","ONLYORORAND"))}},binary:function(e,r,t){switch(t){case"==":return c.equalityTest(e,r);case"=":return c.equalityTest(e,r);case"!=":return!c.equalityTest(e,r);case"<":return c.greaterThanLessThan(e,r,t);case">":return c.greaterThanLessThan(e,r,t);case"<=":return c.greaterThanLessThan(e,r,t);case">=":return c.greaterThanLessThan(e,r,t);case"+":return c.isString(e)||c.isString(r)?c.toString(e)+c.toString(r):c.toNumber(e)+c.toNumber(r);case"-":return c.toNumber(e)-c.toNumber(r);case"*":return c.toNumber(e)*c.toNumber(r);case"/":return c.toNumber(e)/c.toNumber(r);case"%":return c.toNumber(e)%c.toNumber(r);default:throw new Error(u.nodeErrorMessage({type:"BinaryExpression"},"RUNTIME","OPERATORNOTRECOGNISED"))}},assign:function(e,r,t){switch(r){case"=":return e===c.voidOperation?null:e;case"/=":return c.toNumber(t)/c.toNumber(e);case"*=":return c.toNumber(t)*c.toNumber(e);case"-=":return c.toNumber(t)-c.toNumber(e);case"+=":return c.isString(t)||c.isString(e)?c.toString(t)+c.toString(e):c.toNumber(t)+c.toNumber(e);case"%=":return c.toNumber(t)%c.toNumber(e);default:throw new Error(u.nodeErrorMessage("AssignmentExpression","RUNTIME","OPERATORNOTRECOGNISED"))}},update:function(e,r,t,n){var o=c.toNumber(e[r]);return e[r]="++"===t?o+1:o-1,n===!1?o:"++"===t?o+1:o-1},memberupdate:function(e,r,t,n){var o;if(c.isArray(e)){if(!c.isNumber(r))throw new Error("Invalid Parameter");if(0>r&&(r=e.length+r),0>r||r>=e.length)throw new Error("Assignment outside of array bounds");o=c.toNumber(e[r]),e[r]="++"===t?o+1:o-1}else if(e instanceof p){if(c.isString(r)===!1)throw new Error("Dictionary accessor must be a string");if(e.hasField(r)!==!0)throw new Error("Invalid Parameter");o=c.toNumber(e.field(r)),e.setField(r,"++"===t?o+1:o-1)}else{if(!(e instanceof f))throw c.isImmutableArray(e)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(c.isString(r)===!1)throw new Error("Feature accessor must be a string");if(e.hasField(r)!==!0)throw new Error("Invalid Parameter");o=c.toNumber(e.field(r)),e.setField(r,"++"===t?o+1:o-1)}return n===!1?o:"++"===t?o+1:o-1},assignmember:function(e,r,t,n){if(c.isArray(e)){if(!c.isNumber(r))throw new Error("Invalid Parameter");if(0>r&&(r=e.length+r),0>r||r>e.length)throw new Error("Assignment outside of array bounds");if(r===e.length){if("="!==t)throw new Error("Invalid Parameter");e[r]=this.assign(n,t,e[r])}else e[r]=this.assign(n,t,e[r])}else if(e instanceof p){if(c.isString(r)===!1)throw new Error("Dictionary accessor must be a string");if(e.hasField(r)===!0)e.setField(r,this.assign(n,t,e.field(r)));else{if("="!==t)throw new Error("Invalid Parameter");e.setField(r,this.assign(n,t,null))}}else{if(!(e instanceof f))throw c.isImmutableArray(e)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(c.isString(r)===!1)throw new Error("Feature accessor must be a string");if(e.hasField(r)===!0)e.setField(r,this.assign(n,t,e.field(r)));else{if("="!==t)throw new Error("Invalid Parameter");e.setField(r,this.assign(n,t,null))}}},member:function(e,r){if(null===e)throw new Error(u.nodeErrorMessage("MemberExpression","RUNTIME","NOTFOUND"));if(e instanceof p||e instanceof f){if(c.isString(r))return e.field(r);throw new Error(u.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"))}if(e instanceof S){if(c.isString(r))return k(e,r,"MemberExpression");throw new Error(u.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"))}if(c.isArray(e)){if(c.isNumber(r)&&isFinite(r)&&Math.floor(r)===r){if(0>r&&(r=e.length+r),r>=e.length||0>r)throw new Error(u.nodeErrorMessage("MemberExpression","RUNTIME","OUTOFBOUNDS"));return e[r]}throw new Error(u.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"))}if(c.isString(e)){if(c.isNumber(r)&&isFinite(r)&&Math.floor(r)===r){if(0>r&&(r=e.length+r),r>=e.length||0>r)throw new Error(u.nodeErrorMessage("MemberExpression","RUNTIME","OUTOFBOUNDS"));return e[r]}throw new Error(u.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"))}if(c.isImmutableArray(e)){if(c.isNumber(r)&&isFinite(r)&&Math.floor(r)===r){if(0>r&&(r=e.length()+r),r>=e.length()||0>r)throw new Error(u.nodeErrorMessage("MemberExpression","RUNTIME","OUTOFBOUNDS"));return e.get(r)}throw new Error(u.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"))}throw new Error(u.nodeErrorMessage("MemberExpression","RUNTIME","INVALIDTYPE"))},callfunc:function(e,r,t){return e instanceof c.NativeFunction?e.fn(t,r):e instanceof c.SizzleFunction?e.fn.apply(this,r):e.apply(this,r)}};r.compileScript=se});