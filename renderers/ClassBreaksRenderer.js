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

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../symbols/jsonUtils","./Renderer","./arcadeUtils"],function(e,i,s,t,a,n,l,o,r){var u=e(o,{declaredClass:"esri.renderer.ClassBreaksRenderer",constructor:function(e,s){if(this.breaks=[],this._symbols={},this.infos=[],this.isMaxInclusive=!0,e&&!e.declaredClass){var t=e;this.attributeField=t.field,this.setValueExpression(t.valueExpression),this.valueExpressionTitle=t.valueExpressionTitle,this.legendOptions=t.legendOptions,e=t.defaultSymbol,this.defaultSymbol=e&&(e.declaredClass?e:l.fromJson(e)),e=t.backgroundFillSymbol,this.backgroundFillSymbol=e&&(e.declaredClass?e:l.fromJson(e)),this._copy(["defaultLabel","classificationMethod:rest","normalizationType:rest","normalizationField","normalizationTotal"],t,this);var a=t.minValue,o=t.classBreakInfos;o&&o[0]&&n.isDefined(o[0].classMaxValue)&&i.forEach(o,function(e){var i=e.classMaxValue;e.minValue=a,e.maxValue=i,a=i},this),i.forEach(o,this._addBreakInfo,this)}else this.defaultSymbol=e,this.attributeField=s},addBreak:function(e,i,t){var a=s.isObject(e)?e:{minValue:e,maxValue:i,symbol:t};this._addBreakInfo(a)},removeBreak:function(e,i){var s,t,a=this.breaks,n=a.length,l=this._symbols;for(t=0;n>t;t++)if(s=a[t],s[0]==e&&s[1]==i){a.splice(t,1),delete l[e+"-"+i],this.infos.splice(t,1);break}},clearBreaks:function(){this.breaks=[],this._symbols={},this.infos=[]},getBreakIndex:function(e){var i,t,a,n=this.attributeField,l=e.attributes,o=this.breaks,u=o.length,d=this.isMaxInclusive;if(this._compiledFunc)i=r.executeFunction(this._compiledFunc,r.createExecContext(e,e._getViewInfo()));else if(s.isFunction(n))i=n(e);else{i=parseFloat(l[n]);var f,c,h=this.normalizationType;if(h)if(f=parseFloat(this.normalizationTotal),c=parseFloat(l[this.normalizationField]),"log"===h)i=Math.log(i)*Math.LOG10E;else if("percent-of-total"!==h||isNaN(f)){if("field"===h){if(isNaN(i)||isNaN(c))return-1;i/=c}}else i=i/f*100}if(null!=i&&!isNaN(i)&&"number"==typeof i)for(t=0;u>t;t++)if(a=o[t],a[0]<=i&&(d?i<=a[1]:i<a[1]))return t;return-1},getBreakInfo:function(e){var i=this.getBreakIndex(e);return-1!==i?this.infos[i]:null},getSymbol:function(e){var i=this.breaks[this.getBreakIndex(e)];return i?this._symbols[i[0]+"-"+i[1]]:this.defaultSymbol},setMaxInclusive:function(e){this.isMaxInclusive=e},setValueExpression:function(e){this.valueExpression=e,this._compiledFunc=r.createFunction(e)},getFieldsUsedInExpressions:function(){var e=this.inherited(arguments);return this.valueExpression&&(e=e.concat(r.extractFieldNames(this.valueExpression))),e.sort(),i.filter(e,function(i,s){return 0===s||e[s-1]!==i})},isContinuousRenderer:function(){var e=!1,s=this.infos&&1===this.infos.length;if(s){var t=this.attributeField,a=this.normalizationField,n=this.valueExpression,l=this.getVisualVariablesForType("colorInfo",!1)||[],o=this.getVisualVariablesForType("sizeInfo",!1)||[],r=this.getVisualVariablesForType("opacityInfo",!1)||[],u=l.concat(o).concat(r);e=i.some(u,function(e){return(e.field===t||e.valueExpression===n)&&e.normalizationField==a})}return e},_normalizationTypeEnums:[["field","esriNormalizeByField"],["log","esriNormalizeByLog"],["percent-of-total","esriNormalizeByPercentOfTotal"]],_classificationMethodEnums:[["natural-breaks","esriClassifyNaturalBreaks"],["equal-interval","esriClassifyEqualInterval"],["quantile","esriClassifyQuantile"],["standard-deviation","esriClassifyStandardDeviation"],["geometrical-interval","esriClassifyGeometricalInterval"],["defined-interval","esriClassifyDefinedInterval"]],_copy:function(e,s,t){i.forEach(e,function(e){var i,a,n,l,o=e.split(":");if(o.length>1&&(e=o[0],i=this["_"+e+"Enums"],"rest"===o[1]?(a="1",n="0"):"sdk"===o[1]&&(a="0",n="1")),l=s[e],void 0!==l&&(t[e]=l,i&&a)){var r,u=i.length;for(r=0;u>r;r++)if(i[r][a]===l){t[e]=i[r][n];break}}},this)},_addBreakInfo:function(e){var i=e.minValue,s=e.maxValue;this.breaks.push([i,s]),this.infos.push(e);var t=e.symbol;t&&(t.declaredClass||(e.symbol=l.fromJson(t))),this._symbols[i+"-"+s]=e.symbol},toJson:function(){var e=this.infos||[],t=n.fixJson,a=e[0]&&e[0].minValue,l=this.backgroundFillSymbol,o=s.mixin(this.inherited(arguments),{type:"classBreaks",field:this.attributeField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:s.clone(this.legendOptions),defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),backgroundFillSymbol:l&&l.toJson(),minValue:a===-(1/0)?-Number.MAX_VALUE:a,classBreakInfos:i.map(e,function(e){return e=s.mixin({},e),e.symbol=e.symbol&&e.symbol.toJson(),e.classMaxValue=e.maxValue===1/0?Number.MAX_VALUE:e.maxValue,delete e.minValue,delete e.maxValue,t(e)})});return this._copy(["defaultLabel","classificationMethod:sdk","normalizationType:sdk","normalizationField","normalizationTotal"],this,o),o.hasOwnProperty("normalizationType")&&!o.normalizationType&&delete o.normalizationType,o.hasOwnProperty("classificationMethod")&&!o.classificationMethod&&delete o.classificationMethod,t(o)}});return t("extend-esri")&&s.setObject("renderer.ClassBreaksRenderer",u,a),u});