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

define(["require","exports"],function(e,a){function t(e,a,t,r){return void 0!==e.fmin&&(e.min=e.fmin),void 0!==e.fmax&&(e.max=e.fmax),"0"!==e.min&&t.length<Number(e.min)?-2:"*"!==e.max&&t.length>Number(e.max)?-2:1}function r(e,a,r){if(null!==r.localScope&&void 0!==r.localScope[e.toLowerCase()]){var n=r.localScope[e.toLowerCase()];if("FormulaFunction"===n.type)return void 0===n.signature&&(n.signature={min:"0",max:"*"}),t(n.signature,e,a,r);if("any"===n.type)return void 0===n.signature&&(n.signature={min:"0",max:"*"}),t(n.signature,e,a,r)}if(void 0!==r.globalScope[e.toLowerCase()]){var n=r.globalScope[e.toLowerCase()];if("FormulaFunction"===n.type)return void 0===n.signature&&(n.signature={min:"0",max:"*"}),t(n.signature,e,a,r);if("any"===n.type)return void 0===n.signature&&(n.signature={min:"0",max:"*"}),t(n.signature,e,a,r)}return-1}function n(e,a){void 0===a&&(a=!0);var t=x(e,"SYNTAX","UNREOGNISED");try{switch(e.type){case"VariableDeclarator":return null!==e.init&&"FunctionExpression"===e.init.type?x(e,"SYNTAX","FUNCTIONVARIABLEDECLARATOR"):"Identifier"!==e.id.type?x(e,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER"):null!==e.init?n(e.init,!1):"";case"VariableDeclaration":for(var r=0;r<e.declarations.length;r++)if(t=n(e.declarations[r],a),""!==t)return t;return"";case"ForInStatement":if(t=n(e.left,a),""!==t)return t;if("VariableDeclaration"===e.left.type){if(e.left.declarations.length>1)return x(e,"SYNTAX","ONLY1VAR");if(null!==e.left.declarations[0].init)return x(e,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==e.left.type)return x(e,"SYNTAX","LEFTNOTVAR");return t=n(e.right,a),""!==t?t:(t=n(e.body,a),""!==t?t:"");case"ForStatement":return null!==e.test&&(t=n(e.test,a),""!==t)?t:null!==e.init&&(t=n(e.init,a),""!==t)?t:null!==e.update&&(t=n(e.update,a),""!==t)?t:null!==e.body&&(t=n(e.body,a),""!==t)?t:"";case"ContinueStatement":return"";case"EmptyStatement":return"";case"BreakStatement":return"";case"IfStatement":return t=n(e.test,a),""!==t?t:null!==e.consequent&&(t=n(e.consequent,!1),""!==t)?t:null!==e.alternate&&(t=n(e.alternate,!1),""!==t)?t:"";case"BlockStatement":for(var i=[],r=0;r<e.body.length;r++)"EmptyStatement"!==e.body[r].type&&i.push(e.body[r]);e.body=i;for(var r=0;r<e.body.length;r++)if(t=n(e.body[r],a),""!==t)return t;return"";case"FunctionDeclaration":return a===!1?x(e,"SYNTAX","GLOBALFUNCTIONSONLY"):"Identifier"!==e.id.type?x(e,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER"):n(e.body,!1);case"ReturnStatement":return null!==e.argument?n(e.argument,a):"";case"UpdateExpression":return"Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type?x(e,"SYNTAX","ASSIGNMENTTOVARSONLY"):n(e.argument,a);case"AssignmentExpression":if("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type)return x(e,"SYNTAX","ASSIGNMENTTOVARSONLY");if(t=n(e.left,a),""!==t)return t;switch(e.operator){case"=":case"/=":case"*=":case"%=":case"+=":case"-=":break;default:return x(e,"SYNTAX","OPERATORNOTRECOGNISED")}return n(e.right,!1);case"ExpressionStatement":return"AssignmentExpression"===e.expression.type?n(e.expression,!1):"CallExpression"===e.expression.type?n(e.expression,!1):n(e.expression,!1);case"Identifier":t="";break;case"MemberExpression":return t=n(e.object,a),""!==t?t:e.computed===!0?n(e.property,a):"";case"Literal":return"";case"ThisExpression":return x(e,"SYNTAX","NOTSUPPORTED");case"CallExpression":if("Identifier"!==e.callee.type)return x(e,"SYNTAX","ONLYNODESSUPPORTED");t="";for(var r=0;r<e.arguments.length;r++)if(t=n(e.arguments[r],a),""!==t)return t;return"";case"UnaryExpression":t=n(e.argument,a);break;case"BinaryExpression":if(t=n(e.left,a),""!==t)return t;if(t=n(e.right,a),""!==t)return t;switch(e.operator){case"==":case"!=":case"<":case"<=":case">":case">=":case"+":case"-":case"*":case"/":case"%":break;default:return x(e,"SYNTAX","OPERATORNOTRECOGNISED")}return"";case"LogicalExpression":if(t=n(e.left,a),""!==t)return t;if(t=n(e.right),""!==t)return t;switch(e.operator){case"&&":case"||":break;default:return x(e,"SYNTAX","OPERATORNOTRECOGNISED")}return"";case"ConditionalExpression":return x(e,"SYNTAX","NOTSUPPORTED");case"ArrayExpression":t="";for(var r=0;r<e.elements.length;r++)if(t=n(e.elements[r],a),""!==t)return t;return t;case"Array":return x(e,"SYNTAX","NOTSUPPORTED");case"ObjectExpression":t="";for(var r=0;r<e.properties.length;r++){if(t="",null!==e.properties[r].key&&("Literal"!==e.properties[r].key.type&&"Identifier"!==e.properties[r].key.type&&(t=x(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===e.properties[r].key.type)){var s=e.properties[r].key.value;"string"==typeof s||s instanceof String||(t=x(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"))}if(""===t&&(t=n(e.properties[r],a)),""!==t)return t}return t;case"Property":return"Literal"!==e.key.type&&"Identifier"!==e.key.type?x(e,"SYNTAX","ONLYLITERAL"):"Identifier"!==e.key.type&&(t=n(e.key,a),""!==t)?t:t=n(e.value,a);default:return t}return t}catch(o){throw o}}function i(e,a){var t=x(e,"SYNTAX","UNREOGNISED"),n=null,s="";try{switch(e.type){case"VariableDeclarator":if(null!==e.init&&"FunctionExpression"===e.init.type)return x(e,"SYNTAX","FUNCTIONVARIABLEDECLARATOR");var o="";null!==a.localScope?void 0!==a.localScope[e.id.name.toLowerCase()]&&(o=a.localScope[e.id.name.toLowerCase()].type):void 0!==a.globalScope[e.id.name.toLowerCase()]&&(o=a.globalScope[e.id.name.toLowerCase()].type);var l=null===e.init?"":i(e.init,a);return""!==l?l:(null===a.localScope?a.globalScope[e.id.name.toLowerCase()]={type:"any"}:a.localScope[e.id.name.toLowerCase()]={type:"any"},"");case"FunctionDeclaration":return n=p(e.id.name.toLowerCase(),e,a),s=d(e,a),""!==s?s:null!==a.localScope?x(e,"SYNTAX","GLOBALFUNCTIONSONLY"):(n.isnative=!1,a.globalScope[e.id.name.toLowerCase()]={type:"FormulaFunction",signature:[n]},"");case"VariableDeclaration":t="";for(var c=0;c<e.declarations.length;c++)if(t=i(e.declarations[c],a),""!==t)return t;return t;case"IfStatement":return t=i(e.test,a),""!==t?t:"AssignmentExpression"===e.test.type||"UpdateExpression"===e.test.type?x(e.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):null!==e.consequent&&(t=i(e.consequent,a),""!==t)?t:null!==e.alternate&&(t=i(e.alternate,a),""!==t)?t:"";case"EmptyStatement":return"";case"BlockStatement":for(var c=0;c<e.body.length;c++)if(t=i(e.body[c],a),""!==t)return t;return"";case"ReturnStatement":return null!==e.argument?i(e.argument,a):"";case"ForInStatement":if("VariableDeclaration"===e.left.type){if(e.left.declarations.length>1)return x(e,"SYNTAX","ONLY1VAR");if(null!==e.left.declarations[0].init)return x(e,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==e.left.type)return x(e,"SYNTAX","LEFTNOTVAR");return t=i(e.left,a),""!==t?t:(t=i(e.right,a),""!==t?t:(t=i(e.body,a),""!==t?t:""));case"ForStatement":return null!==e.init&&(t=i(e.init,a),""!==t)?t:null!==e.test&&(t=i(e.test,a),""!==t)?t:null!==e.body&&(t=i(e.body,a),""!==t)?t:null!==e.update&&(t=i(e.update,a),""!==t)?t:"";case"BreakStatement":return"";case"ContinueStatement":return"";case"UpdateExpression":if("Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type)return x(e,"SYNTAX","ASSIGNMENTTOVARSONLY");var u=!1;return"MemberExpression"===e.argument.type?i(e.argument,a):(null!==a.localScope&&void 0!==a.localScope[e.argument.name.toLowerCase()]&&(u=!0),void 0!==a.globalScope[e.argument.name.toLowerCase()]&&(u=!0),u===!1?"Identifier "+e.argument.name+" has not been declared.":"");case"AssignmentExpression":if("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type)return x(e,"SYNTAX","ASSIGNMENTTOVARSONLY");var m=i(e.right,a);return""!==m?m:(u=!1,"MemberExpression"===e.left.type?(m=i(e.left,a),""!==m?m:""):(null!==a.localScope&&void 0!==a.localScope[e.left.name.toLowerCase()]&&(u=!0),void 0!==a.globalScope[e.left.name.toLowerCase()]&&(u=!0),u===!1?"Identifier "+e.left.name+" has not been declared.":""));case"ExpressionStatement":return"AssignmentExpression"===e.expression.type?i(e.expression,a):"CallExpression"===e.expression.type?i(e.expression,a):i(e.expression,a);case"Identifier":var f=e.name.toLowerCase();if(null!==a.localScope&&void 0!==a.localScope[f])return"";t=void 0!==a.globalScope[f]?"":x(e,"SYNTAX","VARIABLENOTFOUND");break;case"MemberExpression":return t=i(e.object,a),""!==t?t:e.computed===!0?i(e.property,a):"";case"Literal":return"";case"ThisExpression":t=x(e,"SYNTAX","NOTSUPPORTED");break;case"CallExpression":if("Identifier"!==e.callee.type)return x(e,"SYNTAX","ONLYNODESSUPPORTED");t="";for(var c=0;c<e.arguments.length;c++)if(t=i(e.arguments[c],a),""!==t)return t;var y=r(e.callee.name,e.arguments,a);-1===y&&(t=x(e,"SYNTAX","NOTFOUND")),-2===y&&(t=x(e,"SYNTAX","WRONGSIGNATURE"));break;case"UnaryExpression":t=i(e.argument,a);break;case"BinaryExpression":return t=i(e.left,a),""!==t?t:(t=i(e.right,a),""!==t?t:"");case"LogicalExpression":return t=i(e.left,a),""!==t?t:"AssignmentExpression"===e.left.type||"UpdateExpression"===e.left.type?x(e.left,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):(t=i(e.right,a),""!==t?t:"AssignmentExpression"===e.right.type||"UpdateExpression"===e.right.type?x(e.right,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):"");case"ConditionalExpression":return x(e,"SYNTAX","NOTSUPPORTED");case"ArrayExpression":t="";for(var c=0;c<e.elements.length;c++)if(t=i(e.elements[c],a),""!==t)return t;return t;case"ObjectExpression":t="";for(var c=0;c<e.properties.length;c++){if(t="",null!==e.properties[c].key&&("Literal"!==e.properties[c].key.type&&"Identifier"!==e.properties[c].key.type&&(t=x(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===e.properties[c].key.type)){var N=e.properties[c].key.value;"string"==typeof N||N instanceof String||(t=x(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"))}if(""===t&&(t=i(e.properties[c],a)),""!==t)return t}return t;case"Property":return"Literal"!==e.key.type&&"Identifier"!==e.key.type?x(e,"SYNTAX","ONLYLITERAL"):"Identifier"!==e.key.type&&(t=i(e.key,a),""!==t)?t:t=i(e.value,a);case"Array":return x(e,"SYNTAX","NOTSUPPORTED");default:return t}return t}catch(S){throw S}}function s(e,a){var t=!1;try{switch(e.type){case"VariableDeclarator":return null!==e.init?"FunctionExpression"===e.init.type?s(e.init,a):s(e.init,a):t;case"FunctionDeclaration":return s(e.body,a);case"VariableDeclaration":for(var r=0;r<e.declarations.length;r++)if(s(e.declarations[r],a))return!0;return t;case"IfStatement":return s(e.test,a)?!0:null!==e.consequent&&s(e.consequent,a)?!0:null!==e.alternate&&s(e.alternate,a)?!0:t;case"EmptyStatement":return t;case"BlockStatement":for(var r=0;r<e.body.length;r++)if(s(e.body[r],a))return!0;return t;case"ReturnStatement":return null!==e.argument?s(e.argument,a):t;case"UpdateExpression":return s(e.argument,a);case"AssignmentExpression":return t=s(e.right,a),t?t:s(e.left,a);case"ExpressionStatement":return"AssignmentExpression"===e.expression.type?s(e.expression,a):"CallExpression"===e.expression.type?s(e.expression,a):s(e.expression,a);case"ForInStatement":return(t=s(e.left,a))?t:(t=s(e.right,a))?t:(t=s(e.body,a),t?t:t);case"ForStatement":return null!==e.init&&(t=s(e.init,a))?t:null!==e.test&&(t=s(e.test,a))?t:null!==e.body&&(t=s(e.body,a))?t:null!==e.update&&(t=s(e.update,a))?t:t;case"BreakStatement":return t;case"ContinueStatement":return t;case"Compound":return t;case"Identifier":return a.toLowerCase()===e.name.toLowerCase();case"MemberExpression":return(t=s(e.object,a))?t:(e.computed===!0&&(t=s(e.property,a)),t);case"Literal":return t;case"ThisExpression":return t;case"CallExpression":for(var r=0;r<e.arguments.length;r++)s(e.arguments[r],a)&&(t=!0);return t;case"ArrayExpression":for(var r=0;r<e.elements.length;r++)s(e.elements[r],a)&&(t=!0);return t;case"UnaryExpression":return s(e.argument,a);case"BinaryExpression":return(t=s(e.left,a))?t:t=s(e.right,a);case"LogicalExpression":return(t=s(e.left,a))?t:t=s(e.right,a);case"ObjectExpression":for(var r=0;r<e.properties.length;r++)s(e.properties[r],a)&&(t=!0);return t;case"Property":return t=s(e.value,a);case"ConditionalExpression":return t;case"Array":return t;default:return t}}catch(n){throw n}}function o(e,a){return s(e.body[0].body,a.toLowerCase())===!0?!0:!1}function l(e,a){var t=!1;try{switch(e.type){case"VariableDeclarator":return null!==e.init?"FunctionExpression"===e.init.type?l(e.init,a):l(e.init,a):t;case"FunctionDeclaration":return l(e.body,a);case"VariableDeclaration":for(var r=0;r<e.declarations.length;r++)if(l(e.declarations[r],a))return!0;return t;case"IfStatement":return l(e.test,a)?!0:null!==e.consequent&&l(e.consequent,a)?!0:null!==e.alternate&&l(e.alternate,a)?!0:t;case"EmptyStatement":return t;case"BlockStatement":for(var r=0;r<e.body.length;r++)if(l(e.body[r],a))return!0;return t;case"ReturnStatement":return null!==e.argument?l(e.argument,a):t;case"UpdateExpression":return l(e.argument,a);case"AssignmentExpression":return l(e.left,a)?!0:l(e.right,a);case"ExpressionStatement":return"AssignmentExpression"===e.expression.type?l(e.expression,a):"CallExpression"===e.expression.type?l(e.expression,a):l(e.expression,a);case"ForInStatement":return(t=l(e.left,a))?t:(t=l(e.right,a))?t:(t=l(e.body,a),t?t:t);case"ForStatement":return null!==e.init&&(t=l(e.init,a))?t:null!==e.test&&(t=l(e.test,a))?t:null!==e.body&&(t=l(e.body,a))?t:null!==e.update&&(t=l(e.update,a))?t:t;case"BreakStatement":return t;case"ContinueStatement":return t;case"Compound":return t;case"Identifier":return t;case"MemberExpression":return(t=l(e.object,a))?t:(e.computed===!0&&(t=l(e.property,a)),t);case"Literal":return t;case"ThisExpression":return t;case"CallExpression":if(e.callee.name.toLowerCase()===a.toLowerCase())return!0;for(var r=0;r<e.arguments.length;r++)l(e.arguments[r],a)&&(t=!0);return t;case"ArrayExpression":for(var r=0;r<e.elements.length;r++)l(e.elements[r],a)&&(t=!0);return t;case"UnaryExpression":return l(e.argument,a);case"BinaryExpression":return(t=l(e.left,a))?t:t=l(e.right,a);case"LogicalExpression":return(t=l(e.left,a))?t:t=l(e.right,a);case"ConditionalExpression":return t;case"ObjectExpression":for(var r=0;r<e.properties.length;r++)l(e.properties[r],a)&&(t=!0);return t;case"Property":return t=l(e.value,a);case"Array":return t;default:return t}}catch(n){throw n}}function c(e,a){return l(e.body[0].body,a)===!0?!0:!1}function u(e,a){var t,r=[];try{switch(e.type){case"VariableDeclarator":return null!==e.init?"FunctionExpression"===e.init.type?u(e.init,a):u(e.init,a):r;case"FunctionDeclaration":return u(e.body,a);case"VariableDeclaration":for(var n=0;n<e.declarations.length;n++)t=u(e.declarations[n],a),r=r.concat(t);return r;case"ForInStatement":return t=u(e.left,a),r=r.concat(t),t=u(e.right,a),r=r.concat(t),t=u(e.body,a),r=r.concat(t);case"ForStatement":return null!==e.init&&(t=u(e.init,a),r=r.concat(t)),null!==e.test&&(t=u(e.test,a),r=r.concat(t)),null!==e.body&&(t=u(e.body,a),r=r.concat(t)),null!==e.update&&(t=u(e.update,a),r=r.concat(t)),r;case"IfStatement":return t=u(e.test,a),r=r.concat(t),null!==e.consequent&&(t=u(e.consequent,a),r=r.concat(t)),null!==e.alternate&&(t=u(e.alternate,a),r=r.concat(t)),r;case"EmptyStatement":return r;case"BlockStatement":for(var n=0;n<e.body.length;n++)t=u(e.body[n],a),r=r.concat(t);return r;case"ReturnStatement":return null!==e.argument?u(e.argument,a):r;case"UpdateExpression":return u(e.argument,a);case"AssignmentExpression":return r=u(e.left,a),r=r.concat(u(e.right,a));case"ExpressionStatement":return"AssignmentExpression"===e.expression.type?u(e.expression,a):"CallExpression"===e.expression.type?u(e.expression,a):u(e.expression,a);case"BreakStatement":return r;case"ContinueStatement":return r;case"Compound":return r;case"Identifier":return r;case"MemberExpression":if("Identifier"!==e.object.type)return r;if(e.computed===!1)r.push(e.object.name.toLowerCase()+"."+e.property.name.toLowerCase());else try{"Literal"===e.property.type&&"string"==typeof e.property.value&&r.push(e.object.name.toLowerCase()+"."+e.property.value.toString().toLowerCase())}catch(i){}return r;case"Literal":return r;case"ThisExpression":return r;case"CallExpression":for(var n=0;n<e.arguments.length;n++)t=u(e.arguments[n],a),r=r.concat(t);return r;case"ArrayExpression":for(var n=0;n<e.elements.length;n++)t=u(e.elements[n],a),r=r.concat(t);return r;case"UnaryExpression":return u(e.argument,a);case"ObjectExpression":for(var n=0;n<e.properties.length;n++)t=u(e.properties[n],a),r=r.concat(t);return r;case"Property":return u(e.value,a);case"BinaryExpression":return t=u(e.left,a),r=r.concat(t),t=u(e.right,a),r=r.concat(t);case"LogicalExpression":return t=u(e.left,a),r=r.concat(t),t=u(e.right,a),r=r.concat(t);case"ConditionalExpression":return r;case"Array":return r;default:return r}}catch(i){throw i}}function m(e,a){var t=u(e.body[0].body,a);return t}function p(e,a,t){var r=[];if(void 0!==a.params&&null!==a.params)for(var n=0;n<a.params.length;n++)r.push("any");return{name:e,"return":"any",params:r}}function d(e,a){for(var t={globalScope:a.globalScope,localScope:{}},r=0;r<e.params.length;r++){var n=e.params[r].name;t.localScope[n.toLowerCase()]={type:"any"}}return i(e.body,t)}function f(e,a,t,r){var n={};(void 0===e||null===e)&&(e={}),(void 0===t||null===t)&&(t={}),n.infinity={type:"any"},n.textformatting={type:"any"},n.pi={type:"any"};for(var i in a)("simple"!==r||"simple"===r&&"a"===a[i].av)&&(n[i]={type:"FormulaFunction",signature:a[i]});for(var s=0;s<t.length;s++){var i=t[s];n[i.name]={type:"FormulaFunction",signature:i}}for(var i in e)n[i]=e[i],n[i].type="any";return n}function y(e,t,r){void 0===r&&(r="full");var n=f(t.vars,a.functionDecls,t.customFunctions,r),s={globalScope:n,localScope:null};return i(e.body[0].body,s)}function N(e){return"BlockStatement"!==e.body[0].body.type?"Invalid formula content.":n(e.body[0].body)}function x(e,a,t){var r="";switch(a){case"SYNTAX":r="Syntax Error: ";break;case"RUNTIME":r="Runtime Error: ";break;default:r="Syntax Error: "}try{switch(e.type){case"IfStatement":switch(t){case"CANNOT_USE_ASSIGNMENT_IN_CONDITION":r+=" Assignments not be made in logical tests";break;case"CANNOT_USE_NONBOOLEAN_IN_CONDITION":r+=" Non Boolean used as Condition"}break;case"UpdateExpression":case"AssignmentExpression":switch(t){case"CANNOT_USE_ASSIGNMENT_IN_CONDITION":r+=" Assignments not be made in logical tests";break;case"ASSIGNMENTTOVARSONLY":r+=" Assignments can only be made to identifiers"}break;case"ExpressionStatement":r+=" Assignments can only be made to identifiers";break;case"FunctionDeclaration":switch(t){case"GLOBALFUNCTIONSONLY":r+=" Functions cannot be declared as variables";break;case"FUNCTIONMUSTHAVEIDENTIFIER":r+=" Function Definition must have an identifier"}break;case"VariableDeclaration":r+=" Only 1 variable can be declared at a time";break;case"VariableDeclarator":switch(t){case"FUNCTIONVARIABLEDECLARATOR":r+=" Functions cannot be declared as variables";break;case"VARIABLEMUSTHAVEIDENTIFIER":r+=" Variable Definition must have an identifier"}break;case"Identifier":r+=" Identifier Not Found. ",r+=e.name;break;case"ObjectExpression":switch(t){case"OBJECTPROPERTYMUSTBESTRING":r+=" Property name must be a string"}break;case"ForStatement":switch(t){case"CANNOT_USE_NONBOOLEAN_IN_CONDITION":r+=" Non Boolean used as Condition"}break;case"ForInStatement":switch(t){case"ONLY1VAR":r+=" Can only declare 1 var for use with IN";break;case"CANNOTDECLAREVAL":r+=" Can only declare value for use with IN";break;case"LEFTNOVAR":r+="Must provide a variable to iterate with.";break;case"VARIABLENOTDECLARED":r+="Variable must be declared before it is used..";break;case"CANNOTITERATETHISTYPE":r+="This type cannot be used in an IN loop"}break;case"MemberExpression":switch(t){case"PROPERTYNOTFOUND":r+="Cannot find member property. ",r+=e.computed===!1?e.property.name:"";break;case"OUTOFBOUNDS":r+="Out of Bounds. ",r+=e.computed===!1?e.property.name:"";break;case"NOTFOUND":r+="Cannot call member method on null. ",r+=e.computed===!1?e.property.name:"";break;case"INVALIDTYPE":r+="Cannot call member property on object of this type. ",r+=e.computed===!1?e.property.name:""}break;case"Property":switch(t){case"ONLYLITERAL":r+="Property names must be literals or identifiers"}break;case"Literal":break;case"ThisExpression":r+="THIS construct is not supported.";case"CallExpression":switch(t){case"WRONGSIGNATURE":r+="Function signature does not match: ",r+=e.callee.name;break;case"ONLYNODESUPPORTED":r+="Functions must be declared.",r+=e.callee.name;break;case"NOTAFUNCTION":r+="Not a Function: ",r+=e.callee.name;break;case"NOTFOUND":r+="Function Not Found: "+e.callee.name}break;case"UnaryExpression":switch(t){case"NOTSUPPORTEDUNARYOPERATOR":r+="Operator "+e.operator+" not allowed in this context. Only ! can be used with boolean, and - with a number";break;case"NOTSUPPORTEDTYPE":r+="Unary operator "+e.operator+" cannot be used with this argument."}case"BinaryExpression":switch(t){case"OPERATORNOTRECOGNISED":r+="Binary Operator not recognised "+e.operator}break;case"LogicalExpression":switch(t){case"ONLYBOOLEAN":r+="Operator "+e.operator+" cannot be used. Only || or && are allowed values";break;case"ONLYORORAND":r+="Logical Expression "+e.operator+" being applied to parameters that are not boolean."}case"ConditionalExpression":r+="Conditional statements not supported.";break;case"ArrayExpression":switch(t){case"FUNCTIONCONTEXTILLEGAL":r+=" Cannot Put Function inside Array."}break;case"Array":r+="Expression contains unrecognised array structure.";break;default:r+="Expression contains unrecognised code structures."}}catch(n){throw n}return r}function S(e,a,t){return{line:e.loc.start.line,character:e.loc.start.column,reason:x(e,a,t)}}function E(e,a,t,r,n){void 0===n&&(n=!0);for(var i={globalScope:a.globalScope,localScope:{}},s=0;s<e.params.length;s++){var o=e.params[s].name;i.localScope[o.toLowerCase()]={type:"any"}}v(e.body,i,t,r,!1)}function v(e,a,t,n,i){if(void 0===i&&(i=!0),null===e)throw new Error("Unnexpexted Expression Syntax");var s=x(e,"SYNTAX","UNREOGNISED"),o=null;try{switch(e.type){case"VariableDeclarator":if(null!==e.init&&"FunctionExpression"===e.init.type)return void n.push(S(e,"SYNTAX","FUNCTIONVARIABLEDECLARATOR"));var l="";return"Identifier"!==e.id.type?n.push(S(e,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER")):(null!==a.localScope?void 0!==a.localScope[e.id.name.toLowerCase()]&&(l=a.localScope[e.id.name.toLowerCase()].type):void 0!==a.globalScope[e.id.name.toLowerCase()]&&(l=a.globalScope[e.id.name.toLowerCase()].type),null===a.localScope?a.globalScope[e.id.name.toLowerCase()]={type:"any"}:a.localScope[e.id.name.toLowerCase()]={type:"any"}),void(null===e.init?"":v(e.init,a,t,n,i));case"FunctionDeclaration":return i===!1&&n.push(S(e,"SYNTAX","GLOBALFUNCTIONSONLY")),"Identifier"!==e.id.type&&n.push(S(e,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER")),o=p("",e,a),E(e,a,t,n,i),null!==a.localScope&&n.push(S(e,"SYNTAX","GLOBALFUNCTIONSONLY")),o.isnative=!1,void("Identifier"===e.id.type&&(a.globalScope[e.id.name.toLowerCase()]={type:"FormulaFunction",signature:[o]}));case"VariableDeclaration":s="";for(var c=0;c<e.declarations.length;c++)v(e.declarations[c],a,t,n,i);return;case"IfStatement":return null!==e.test&&(v(e.test,a,t,n,i),("AssignmentExpression"===e.test.type||"UpdateExpression"===e.test.type)&&n.push(S(e.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))),null!==e.consequent&&v(e.consequent,a,t,n,i),void(null!==e.alternate&&v(e.alternate,a,t,n,i));case"EmptyStatement":return;case"BlockStatement":if(null!==e.body)for(var c=0;c<e.body.length;c++)v(e.body[c],a,t,n,i);return;case"ReturnStatement":return void(null!==e.argument&&v(e.argument,a,t,n,i));case"ForInStatement":return"VariableDeclaration"===e.left.type?(e.left.declarations.length>1&&n.push(S(e,"SYNTAX","ONLY1VAR")),null!==e.left.declarations[0].init&&n.push(S(e,"SYNTAX","CANNOTDECLAREVAL"))):"Identifier"!==e.left.type&&n.push(S(e,"SYNTAX","LEFTNOTVAR")),v(e.left,a,t,n,i),v(e.right,a,t,n,i),void v(e.body,a,t,n,i);case"ForStatement":return null!==e.init&&v(e.init,a,t,n,i),null!==e.test&&v(e.test,a,t,n,i),null!==e.body&&v(e.body,a,t,n,i),void(null!==e.update&&v(e.update,a,t,n,i));case"BreakStatement":return;case"ContinueStatement":return;case"UpdateExpression":if("Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type)n.push(S(e,"SYNTAX","ASSIGNMENTTOVARSONLY"));else{if("Identifier"===e.argument.type){var u=!1;t===!1&&(null!==a.localScope&&void 0!==a.localScope[e.argument.name.toLowerCase()]&&(u=!0),void 0!==a.globalScope[e.argument.name.toLowerCase()]&&(u=!0),u===!1&&n.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Identifier "+e.argument.name+" has not been declared."}))}"MemberExpression"===e.argument.type&&v(e.argument,a,t,n,i)}return;case"AssignmentExpression":switch("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type&&n.push(S(e,"SYNTAX","ASSIGNMENTTOVARSONLY")),e.operator){case"=":case"/=":case"*=":case"%=":case"+=":case"-=":break;default:n.push(S(e,"SYNTAX","OPERATORNOTRECOGNISED"))}v(e.right,a,t,n,i);var m=!1;return"Identifier"===e.left.type&&(null!==a.localScope&&void 0!==a.localScope[e.left.name.toLowerCase()]&&(m=!0),void 0!==a.globalScope[e.left.name.toLowerCase()]&&(m=!0),t===!1&&m===!1&&n.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Identifier "+e.argument.name+" has not been declared."})),void("MemberExpression"===e.left.type&&v(e.left,a,t,n,i));case"ExpressionStatement":return void("AssignmentExpression"===e.expression.type?v(e.expression,a,t,n,i):"CallExpression"===e.expression.type?v(e.expression,a,t,n,i):v(e.expression,a,t,n,i));case"Identifier":var d=e.name.toLowerCase();if(null!==a.localScope&&void 0!==a.localScope[d])return;if(void 0!==a.globalScope[d])return;t===!1&&n.push(S(e,"SYNTAX","VARIABLENOTFOUND"));break;case"MemberExpression":return v(e.object,a,t,n,i),void(e.computed===!0&&v(e.property,a,t,n,i));case"Literal":return"";case"ThisExpression":n.push(S(e,"SYNTAX","NOTSUPPORTED"));break;case"CallExpression":"Identifier"!==e.callee.type&&n.push(S(e,"SYNTAX","ONLYNODESSUPPORTED")),s="";for(var c=0;c<e.arguments.length;c++)v(e.arguments[c],a,t,n,i);var f=r(e.callee.name,e.arguments,a);return t===!1&&-1===f&&n.push(S(e,"SYNTAX","NOTFOUND")),void(-2===f&&n.push(S(e,"SYNTAX","WRONGSIGNATURE")));case"UnaryExpression":return void v(e.argument,a,t,n,i);case"BinaryExpression":switch(v(e.left,a,t,n,i),v(e.right,a,t,n,i),e.operator){case"==":case"!=":case"<":case"<=":case">":case">=":case"+":case"-":case"*":case"/":case"%":break;default:n.push(S(e,"SYNTAX","OPERATORNOTRECOGNISED"))}return;case"LogicalExpression":switch(e.operator){case"&&":case"||":break;default:n.push(S(e,"SYNTAX","OPERATORNOTRECOGNISED"))}return v(e.left,a,t,n,i),("AssignmentExpression"===e.left.type||"UpdateExpression"===e.left.type)&&n.push(S(e,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")),v(e.right,a,t,n,i),void(("AssignmentExpression"===e.right.type||"UpdateExpression"===e.right.type)&&n.push(S(e,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")));case"ConditionalExpression":n.push(S(e,"SYNTAX","NOTSUPPORTED"));break;case"ArrayExpression":for(var c=0;c<e.elements.length;c++)s=v(e.elements[c],a,t,n,i);return;case"Array":n.push(S(e,"SYNTAX","NOTSUPPORTED"));case"ObjectExpression":for(var c=0;c<e.properties.length;c++)v(e.properties[c],a,t,n,i);return;case"Property":return"Literal"!==e.key.type&&"Identifier"!==e.key.type&&n.push(S(e,"SYNTAX","ONLYLITERAL")),"Literal"===e.key.type&&v(e.key,a,t,n,i),void v(e.value,a,t,n,i);default:n.push(S(e,"SYNTAX","UNRECOGNISED"))}return}catch(y){n.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Unnexpected Syntax"})}}function T(e,t,r,n){void 0===n&&(n="full");var i=[];if("BlockStatement"!==e.body[0].body.type)return[{line:0,character:0,reason:"Invalid Body"}];(null===t||void 0===t)&&(t={vars:{},customFunctions:[]});var s=f(t.vars,a.functionDecls,t.customFunctions,n),o={globalScope:s,localScope:null};try{v(e.body[0].body,o,r,i)}catch(l){}return i}Object.defineProperty(a,"__esModule",{value:!0}),a.functionDecls={concatenate:{min:"0",max:"*",av:"a"},split:{min:"2",max:"4",av:"a"},guid:{min:"0",max:"1",av:"a"},today:{min:"0",max:"0",av:"a"},now:{min:"0",max:"0",av:"a"},timestamp:{min:"0",max:"0",av:"a"},day:{min:"1",max:"1",av:"a"},month:{min:"1",max:"1",av:"a"},year:{min:"1",max:"1",av:"a"},hour:{min:"1",max:"1",av:"a"},second:{min:"1",max:"1",av:"a"},millisecond:{min:"1",max:"1",av:"a"},minute:{min:"1",max:"1",av:"a"},weekday:{min:"1",max:"1",av:"a"},toutc:{min:"1",max:"1",av:"a"},tolocal:{min:"1",max:"1",av:"a"},date:{min:"0",max:"7",av:"a"},datediff:{min:"2",max:"3",av:"a"},dateadd:{min:"2",max:"3",av:"a"},trim:{min:"1",max:"1",av:"a"},text:{min:"1",max:"2",av:"a"},left:{min:"2",max:"2",av:"a"},right:{min:"2",max:"2",av:"a"},mid:{min:"2",max:"3",av:"a"},upper:{min:"1",max:"1",av:"a"},proper:{min:"1",max:"2",av:"a"},lower:{min:"1",max:"1",av:"a"},find:{min:"2",max:"3",av:"a"},iif:{min:"3",max:"3",av:"a"},decode:{min:"2",max:"*",av:"a"},when:{min:"2",max:"*",av:"a"},defaultvalue:{min:"2",max:"2",av:"a"},isempty:{min:"1",max:"1",av:"a"},maplayer:{min:"2",max:"3",av:"f"},domaincode:{min:"3",max:"4",av:"a"},domainname:{min:"2",max:"4",av:"a"},polygon:{min:"1",max:"1",av:"a"},point:{min:"1",max:"1",av:"a"},polyline:{min:"1",max:"1",av:"a"},extent:{min:"1",max:"1",av:"a"},multipoint:{min:"1",max:"1",av:"a"},geometry:{min:"1",max:"1",av:"a"},featurelayer:{min:"1",max:"3",av:"f"},featurecollection:{min:"1",max:"1",av:"f"},buffer:{min:"2",max:"4",av:"f"},area:{min:"1",max:"2",av:"f"},sumarea:{min:"1",max:"2",av:"f"},length:{min:"1",max:"2",av:"f"},sumlength:{min:"1",max:"2",av:"f"},count:{min:"0",max:"*",av:"a"},filter:{min:"2",max:"2",av:"f"},envelopeintersects:{min:"2",max:"2",av:"f"},intersects:{min:"2",max:"2",av:"f"},contains:{min:"2",max:"2",av:"f"},overlaps:{min:"2",max:"2",av:"f"},within:{min:"2",max:"2",av:"f"},touches:{min:"2",max:"2",av:"f"},crosses:{min:"2",max:"2",av:"f"},union:{min:"1",max:"2",av:"f",fmin:1},difference:{min:"2",max:"2",av:"f",fmin:2,fmax:3},intersection:{min:"2",max:"2",av:"f",fmin:2,fmax:3},symmetricdifference:{min:"2",max:"2",av:"f",fmin:2,fmax:3},number:{min:"1",max:"2",av:"a"},acos:{min:"1",max:"1",av:"a"},asin:{min:"1",max:"1",av:"a"},atan:{min:"1",max:"1",av:"a"},atan2:{min:"2",max:"2",av:"a"},ceil:{min:"1",max:"2",av:"a"},floor:{min:"1",max:"2",av:"a"},round:{min:"1",max:"2",av:"a"},cos:{min:"1",max:"1",av:"a"},exp:{min:"1",max:"1",av:"a"},log:{min:"1",max:"1",av:"a"},min:{min:"0",max:"*",av:"a"},console:{min:"0",max:"*",av:"a"},max:{min:"0",max:"*",av:"a"},pow:{min:"2",max:"2",av:"a"},random:{min:"0",max:"0",av:"a"},sqrt:{min:"1",max:"1",av:"a"},sin:{min:"1",max:"1",av:"a"},tan:{min:"1",max:"1",av:"a"},abs:{min:"1",max:"1",av:"a"},isnan:{min:"1",max:"1",av:"a"},stdev:{min:"0",max:"*",av:"a"},average:{min:"0",max:"*",av:"a"},mean:{min:"0",max:"*",av:"a"},sum:{min:"0",max:"*",av:"a"},variance:{min:"0",max:"*",av:"a"},distinct:{min:"0",max:"*",av:"a"},addfield:{min:"3",max:"3",av:"f"},removefield:{min:"2",max:"2",av:"f"},aggregate:{min:"3",max:"3",av:"f"},dissolve:{min:"2",max:"3",av:"f"},changeshape:{min:"2",max:"4",av:"f"},first:{min:"1",max:"1",av:"a"},top:{min:"2",max:"2",av:"a"},orderby:{min:"2",max:"2",av:"f"},"boolean":{min:"1",max:"1",av:"a"},dictionary:{min:"0",max:"*",av:"a"},servicearea:{min:"2",max:"*",av:"f"},equals:{min:"2",max:"2",av:"a"},"typeof":{min:"1",max:"1",av:"a"},reverse:{min:"1",max:"1",av:"a"},replace:{min:"3",max:"4",av:"a"},sort:{min:"1",max:"2",av:"a"},feature:{min:"1",max:"*",av:"a"},haskey:{min:"2",max:"2",av:"a"},indexof:{min:"2",max:"2",av:"a"},centroid:{min:"1",max:"1",av:"f"},multiparttosinglepart:{min:"1",max:"1",av:"f"}},a.checkFunctionSignature=t,a.findFunction=r,a.validateLanguageNode=n,a.testValidityOfExpression=i,a.referencesMemberImpl=s,a.referencesMember=o,a.referencesFunctionImpl=l,a.referencesFunction=c,a.findFieldLiteralsImpl=u,a.findFieldLiterals=m,a.extractFunctionDeclaration=p,a.validateFunction=d,a.constructGlobalScope=f,a.validateScript=y,a.validateLanguage=N,a.nodeErrorMessage=x,a.makeError=S,a.extractAllIssuesInFunction=E,
a.extractAllIssues=v,a.checkScript=T});