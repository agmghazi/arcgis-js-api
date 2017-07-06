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

define(["dojo/_base/array","dojo/_base/lang","dojo/Deferred","dojo/number","dojo/string","dojo/date/locale","dojo/promise/all","../../config","../../numberUtils","../../request","../../layers/FeatureLayer","../../geometry/Extent","../../tasks/query","../../tasks/StatisticDefinition","../../tasks/QueryTask","../../tasks/RelationshipQuery","../../renderers/arcadeUtils","dojo/i18n","dojo/i18n!../../nls/jsapi"],function(e,t,r,n,i,a,u,o,l,s,d,c,y,f,m,h,p,F,g){var w={i18nStrings:g.widgets.FeatureTable,numericFieldTypes:["esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeSmallInteger"],statisticDefinitions:[{type:"count",name:"countField"},{type:"sum",name:"sumField"},{type:"min",name:"minField"},{type:"max",name:"maxField"},{type:"avg",name:"avgField"},{type:"stddev",name:"stddevField"}],_reExprField:/^\s*expression\//i,getOrderByString:function(e,t){var r=t?" DESC":" ASC";return e+r},getWhereString:function(e,t){return e+"='"+t+"'"},getRelationshipWhereClause:function(r){var n,i=r.layer,a=r.originRelationship,u=r.destinationRelationship,o=r.keyValue,l=a.relationshipTableId||a.relatedTableId,d=a.keyFieldInRelationshipTable||a.keyField,c=u.keyFieldInRelationshipTable||u.keyField,y=i.layerId==l?c:d,f=this.getWhereString(y,o),m=i._url.path,h=m.substring(0,m.lastIndexOf("/")+1),p=h+l+"/query",F=[],g="";return s({url:p,content:{f:"json",outFields:[d,c],returnGeometry:!1,where:f},handleAs:"json",callbackParamName:"callback"}).then(t.hitch(this,function(t){if(t&&t.features&&t.features.length>0){var r=t.features;return e.forEach(r,function(t,a){if(t.attributes&&t.attributes[c])n=t.attributes[c];else{var o=i.getField(y)?i.getField(y).name:null;if(this.isValueEmpty(o)){var l=c.toUpperCase(),s=c.toLowerCase();n=t.attributes[l]||t.attributes[s]||null}else n=t.attributes[o]}-1===e.indexOf(F,n)&&(F.length>0&&a<r.length&&(g=g.concat(" OR ")),F.push(n),g=g.concat(this.getWhereString(u.keyField,n)))},this),g}return null}))},isValueEmpty:function(e){return null===e||" "===e||""===e||"undefined"==typeof e},findFirst:function(t,r,n){var i=e.filter(t,function(e){return e.hasOwnProperty(r)&&e[r]===n});return i[0]||null},compareIntArrays:function(t,r){t.sort(),r.sort();var n=e.every(r,function(r){return-1!==e.indexOf(t,r)},this),i=e.every(t,function(t){return-1!==e.indexOf(r,t)},this);return n&&i},findFirstNumberColumn:function(t,r){var n;return e.some(t,function(t,i){return-1===e.indexOf(this.numericFieldTypes,t.type)||t.field===r||t.hidden?void 0:(n=t,!0)},this),n},getRoundingPrecision:function(e){return e>=1e3?0:e>=10?2:e>=0?4:6},generateLinkFromString:function(e){var t,r,n;return"string"==typeof e&&(t=e.indexOf("http:"),-1===t&&(t=e.indexOf("https:")),t>-1&&-1===e.indexOf("href=")&&(r=e.indexOf(" ",t),-1===r&&(r=e.length),n=e.substring(t,r),e=e.substring(0,t)+"<a href='"+n+"' target='_blank'>"+n+"</a>"+e.substring(r,e.length))),this.isValueEmpty(e)?"":e},isNumericFieldType:function(t){return-1!==e.indexOf(this.numericFieldTypes,t)},isIntegerFieldType:function(e){return"esriFieldTypeInteger"===e||"esriFieldTypeSmallInteger"===e},isFloatFieldType:function(e){return"esriFieldTypeDouble"===e||"esriFieldTypeSingle"===e},getDomainValueFromRow:function(t){var r,n=t.fieldInfo.name,i=t.fieldInfo.domain,a=t.row;return"range"===i.type?a[n]:(r=e.filter(i.codedValues,function(e){return e.hasOwnProperty("code")&&e.code==a[n]}),r[0]&&!this.isValueEmpty(r[0].name)?r[0].name:a[n])},getTypeValueFromRow:function(e){var t,r,n,i,a,u=e.layerInfo,o=u.types,l=e.fieldInfo,s=e.row,d=o&&o[0];return d&&(r=s[l.name],n=this.isNumericFieldType(l.type),i="string"==typeof d.id,a=i&&n?r.toString():r,t=this.findFirst(o,"id",a),t=t?t.name:null),t},getSubtypeDomainValue:function(t){var r,n,i,a=t.layerInfo,u=t.fieldInfo.name,o=a.types,l=t.row;return i=this.findFirst(o,"id",l[a.typeIdField]),r=i?i.domains:null,i&&r?(r[u]&&r[u].codedValues&&(n=e.filter(r[u].codedValues,function(e){return e.hasOwnProperty("code")&&e.code==l[u]})),n[0]&&!this.isValueEmpty(n[0].name)?n[0].name:l[u]):l[u]},mergeDictionaries:function(e,t){if(null===e||null===t)return e;for(var r in t){e[r]||(e[r]={});for(var n in t[r])e[r][n]=t[r][n]}return e},isCyclicalRelationship:function(e){return"esriRelCardinalityOneToOne"===e.cardinality||"esriRelCardinalityOneToMany"===e.cardinality&&"esriRelRoleDestination"===e.role},getColumnFromFieldName:function(e){var t=e.grid,r=e.fieldName,n=t.columns,i=this.findFirst(n,"field",r);return i},formatNumberForLocale:function(e,t){if(t){var r=F.getLocalization("dojo.cldr","number");return t.digitSeparator||!r||this.isValueEmpty(e)?isNaN(e)||null===e?null:n.format(e,t):(e=isNaN(e)||null===e?null:n.format(e,t),e.replace(new RegExp("\\"+r.group,"g"),""))}return isNaN(e)||null===e?null:l.format(e,t)},getCombinedDateTime:function(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes(),t.getSeconds())},formatDateForLocale:function(e){var t,r,n,i=e.dateOptions||{},u=e.timestamp,o=e.fieldInfo,l=!1,s=!1,d={};return t=o&&o.dateOptions?o.dateOptions:!1,r=t||i,l=t&&this.isValueEmpty(r.dateEnabled)?!0:!!r.dateEnabled,s=!!r.timeEnabled,this.isValueEmpty(r.datePattern)||(d.datePattern=r.datePattern),this.isValueEmpty(r.timeEnabled)||this.isValueEmpty(r.timePattern)||(d.timePattern=r.timePattern),n=l&&s?"date and time":l&&!s?"date":!l&&s?"time":"date",d.selector=n,a.format(new Date(u),d)},calculateExtentFromFeatures:function(e){var t,r,n,i,a,u=e[0].geometry;if(null===u&&1===e.length)return null;for(i=e.length-1;i>=0;i--)null===e[i].geometry&&e.splice(i,1);for(u=e[0].geometry,t=u.getExtent(),n=e.length,null===t&&(t=new c(u.x,u.y,u.x,u.y,u.spatialReference)),a=1;n>a;a++)u=e[a].geometry,r=u.getExtent(),null===r&&(r=new c(u.x,u.y,u.x,u.y,u.spatialReference)),t=t.union(r);return t},initFeatureLayer:function(e,t){var r=e._url.path;return r=r.substring(0,r.lastIndexOf("/")+1),r+=t,new d(r,{mode:d.MODE_ONDEMAND,outFields:["*"],visible:!0})},applyEdits:function(t){var n=[],i=new r;return!t||t.length<=0?(i.reject(),i):(e.forEach(t,function(e){e.layer&&n.push(e.layer.applyEdits(e.adds,e.updates,e.deletes,function(e,t,r){i.resolve({adds:e,updates:t,deletes:r})},function(e){i.reject(e)}))}),n.length>0?u(n):i.reject(),i)},applyEditsFromRow:function(e){var r=e.layer,n=e.idProperty,i=e.row;return this.queryLayerForFeature({layer:r,id:i[n]}).then(t.hitch(this,function(e){var t=e.features[0];return t.attributes=i,this.applyEdits([{layer:r,updates:[t]}],null)}))},queryLayer:function(e){var t=e.layer,r=e.ids||null,n=new y;return n.where="1=1",n.returnGeometry=!1,n.objectIds=r,t.queryFeatures(n)},queryLayerForFeature:function(e){return this.queryLayerForFeatures({layer:e.layer,ids:[e.id]})},queryLayerForFeatures:function(e){var t=e.layer,r=e.ids,n=new y;return n.objectIds=r,n.outFields=["*"],t.queryFeatures(n,function(e){return e.features})},queryLayerForCount:function(e){var t=e.layer,r=e.layerInfo,n=new y,i=e.where||"1=1";return n.returnGeometry=!1,n.returnCountOnly=!0,n.where=i,t.queryCount?t.queryCount(n).then(function(e){return e}).otherwise(function(){return r.isFeatureCollection?t.graphics.length:2e3}).always(function(e){return e}):this.queryLayerCustom({layer:t,returnCountOnly:!0}).then(function(e){return e&&e.features?e.features.length:0}).otherwise(function(){return t.maxRecordCount||2e3}).always(function(e){return e})},queryLayerCustom:function(e){var t,r=new y,n=e.layer,i=e.returnCountOnly||!1,a=e.where||"1=1",u=e.returnGeometry||!1,o=e.outFields||["*"];return t=new m(n.url),r.returnGeometry=u,r.outFields=o,r.where=a,r.returnCountOnly=i,t.execute(r)},queryLayerForIds:function(e){var t=e.layer,r=e.idProperty,n=e.where||"1=1",i=new y;return i.returnGeometry=!1,i.outFields=[r],i.where=n,i.returnIdsOnly=!0,t.queryIds(i)},queryLayerForAttachments:function(e){var t=e.layer,r=e.ids,n=t._url.path+"/queryAttachments";return s({url:n,content:{f:"json",objectIds:r},handleAs:"json",callbackParamName:"callback"})},queryLayerForAttachmentById:function(e){var t=e.layer,r=e.id||0;return t.queryAttachmentInfos(r)},addAttachmentToLayer:function(e){var t=e.layer,r=e.featureId,n=e.formData;return t.addAttachment(r,n)},deleteAttachmentFromLayer:function(e){var t=e.layer,r=e.attachmentId,n=e.featureId;return t.deleteAttachments(n,[r])},queryLayerForRelatedRecords:function(e){var t=e.layer,r=e.ids,n=e.outFields||["*"],i=e.relationship,a=e.returnCountOnly||!1,u=new h;return u.outFields=n,u.returnGeometry=!1,u.relationshipId=i.id,u.returnCountOnly=a,u.objectIds=r,t.queryRelatedFeatures(u)},queryLayerForRelatedRecordCount:function(e){var t=e.layer,r=e.objectIds,n=e.relationship,i=e.outFields,a=t._url.path+"/queryRelatedRecords";return s({url:a,content:{f:"json",objectIds:r.toString(),outFields:i,returnGeometry:!1,relationshipId:n.id,returnCountOnly:!0},handleAs:"json",callbackParamName:"callback"})},getFieldStatistics:function(t){var n,i,a,u=new r,o=t.grid,l=t.layer,s=t.idProperty,d=t.where||"1=1",c=t.filterIds,h=t.columnId,p=o.columns[h].field,F=l.url,g=[];return a=e.map(this.statisticDefinitions,function(e){var t=new f;return t.onStatisticField=p,t.displayFieldName=p,t.outStatisticFieldName=e.name,t.statisticType=e.type,t}),n=new y,n.outFields=[p],n.outStatistics=[],n.where=d,n.outStatistics=a,c&&c.length>0&&(g=c),n.where&&g.length>0&&(n.where="("+n.where+") AND ("+s+" IN ("+g.toString()+"))"),l.source&&!this.isValueEmpty(l.source.mapLayerId)&&F.endsWith("/dynamicLayer")&&(F=F.slice(0,-13),F=F+"/"+l.source.mapLayerId),i=new m(F),i.execute(n).then(function(e){u.resolve(e)}).otherwise(function(){u.reject()}),u},selectFeaturesById:function(e){var t=e.grid,r=t.layer,n=t.layerInfo,i=e.map,a=e.ids,u=e.id,o=new y;return o.returnGeometry=!!i,o.objectIds=a||[u],n.isFeatureCollection||(o.where="1=1"),r.selectFeatures(o,d.SELECTION_NEW)},isFeatureEditable:function(e){var t=e.layer,r=e.layerInfo,n=e.attributes,i=r.layerId,a=r.userIds[i]||null,u=t.getEditCapabilities({userId:a,feature:{attributes:n}});return!!u.canUpdate},isExpressionField:function(e){return this._reExprField.test(e)},getExpressionInfo:function(t,r){if(this.isExpressionField(r)){var n;return r=r.replace(this._reExprField,""),r=r.toLowerCase(),e.some(t,function(e){return e.name.toLowerCase()===r&&(n=e),!!n}),n}},compileExpressions:function(t){var r={};return e.forEach(t,function(e){r[e.name]={compiledFunc:p.createFunction(e.expression)}}),r},getExpressionValue:function(e,t){return p.executeFunction(t&&t.compiledFunc,p.createExecContext(e,e._getViewInfo()))}};return w});