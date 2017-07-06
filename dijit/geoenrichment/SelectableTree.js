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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/Evented","dojo/store/util/QueryResults","dojo/store/util/SimpleQueryEngine"],function(t,e,n,i,r,s){return t(i,{idProperty:"id",bindingProperty:null,autoIdentify:!0,queryEngine:s,root:null,data:null,_hash:null,constructor:function(t,n){e.mixin(this,n),this.root={children:t||[]},e.mixin(this._provideBinding(this.root),{deepness:-1,selectCount:0,leafCount:0}),this._hash={},this.idProperty&&this.autoIdentify&&(this._autoId=1),this._initializeNode(this.root,0),this.data=this.root.children},_provideBinding:function(t){var e=this._getBinding(t);return e||(t[this.bindingProperty]=e={}),e},_getBinding:function(t){return this.bindingProperty?t[this.bindingProperty]:t},_initializeNode:function(t,e){var i=this._provideBinding(t);return i.selected=!!i.selected,t.children?(i.selectCount=0,i.leafCount=0,n.forEach(t.children,function(n){this._registerNode(n);var r=this._provideBinding(n);r.parent=t,r.deepness=e,this._initializeNode(n,e+1),i.selectCount+=r.selectCount,i.leafCount+=r.leafCount},this),void(i.selectCount?i.selectCount==i.leafCount&&(i.selected=!0):i.selected=!1)):("number"!=typeof i.leafCount&&(i.leafCount=1),void(i.selectCount=i.selected?i.leafCount:0))},isOwned:function(t,e){if(!e&&t==this.root)return!0;var n=this.get(this.getIdentity(t));return n===t},_registerNode:function(t){this._autoId&&void 0===t[this.idProperty]&&(t[this.idProperty]=this._autoId++),this.idProperty&&(this._hash[t[this.idProperty]]=t)},_unregisterNode:function(t){this.isOwned(t,!0)&&delete this._hash[t[this.idProperty]]},clear:function(){this.root.children.length&&(n.forEach(this.root.children,function(t){this._unbindNode(t)},this),this.data=this.root.children=[])},destroy:function(){this.clear()},_unbindNode:function(t){t.children&&n.forEach(t.children,function(t){var e=this._getBinding(t);delete e.parent,this._unbindNode(t)},this),this._unregisterNode(t);var e=this._getBinding(t);e.parent&&(this._incrementCounts(e.parent,-e.selectCount,-e.leafCount),delete e.parent),e!==t&&delete t[this.bindingProperty]},removeNodes:function(t,e){n.forEach(t,function(t){if(this.isOwned(t,!0)){var e=this._getBinding(t),i=e.parent,r=n.indexOf(i.children,t);r>=0&&i.children.splice(r,1),this._unbindNode(t)}},this),e||this.emit("updated")},addNodes:function(t,e,i){if(e){if(!this.isOwned(e)||!e.children)return!1}else e=this.root;var r=this._getBinding(e),s=r.deepness+1,d=0,o=0;return n.forEach(t,function(t){if(!this.isOwned(t)){e.children.push(t),this._registerNode(t);var n=this._provideBinding(t);n.parent=e,n.deepness=s,this._initializeNode(t,s+1),d+=n.selectCount,o+=n.leafCount}},this),this._incrementCounts(e,d,o),i||this.emit("updated"),!0},select:function(t){return this.changeSelect(t,!0)},deselect:function(t){this.changeSelect(t,!1)},changeSelect:function(t,e){var i=this._getBinding(t),r=(e?i.leafCount:0)-i.selectCount;return t.children?(i.selected=e,void n.forEach(t.children,function(t){this.changeSelect(t,e)},this)):(i.selected=e,void(r&&this._incrementCounts(t,r)))},_incrementCounts:function(t,e,n){var i=this._getBinding(t);i.selectCount+=e,n&&(i.leafCount+=n),i.selectCount?i.selectCount==i.leafCount&&(i.selected=!0):i.selected=!1,i.parent&&this._incrementCounts(i.parent,e,n)},getSelectionState:function(t){if(!this.isOwned(t))return!1;var e=this._getBinding(t);return e.selectCount&&e.selectCount!=e.leafCount?"mixed":e.selected=!!e.selectCount},getSelectedNodes:function(t){return this.getDescendingNodes(this.root,!0,t)},getDescendingNodes:function(t,e,n){if(!this.isOwned(t))return[];var i=[];return this._collectNodes(t.children,i,e,n),i},_collectNodes:function(t,e,i,r){n.forEach(t,function(t){var n=this._getBinding(t),s=null===i||void 0===i?n.leafCount:i?n.selectCount:n.leafCount-n.selectCount;s&&(!t.children||!r&&s==n.leafCount?e.push(t):this._collectNodes(t.children,e,i,r))},this)},inspectChildren:function(t,i,r,s){s&&(i=e.hitch(s,i)),t=t||this.root;var d=t.children;return d&&r&&(d=d.slice(),d.sort(r)),n.every(d,function(t){var e=i(t);return null===e?!1:e!==!1&&t.children?this.inspectChildren(t,i,r):!0},this)},updateExpandedNodes:function(t,e){for(var n in this._hash){var i=this._hash[n];this.updateExpand(i,!!t[n])}this._updateOddEven(null,e)},updateExpand:function(t,e,n,i){var r=!1;if(t.children){var s=this._getBinding(t);s.expanded!==e&&(r=!0,s.expanded=e)}var d={};return r&&n&&this._updateOddEven(d,i),d},_updateOddEven:function(t,e){var n=1;this.inspectChildren(null,function(e){n=1-n;var i=this._getBinding(e);return t&&i.isOdd!==n&&(t[this.getIdentity(e)]=n),i.isOdd=n,!(!e.children||!i.expanded)},e,this)},isOdd:function(t){var e=this._getBinding(t);return e&&e.isOdd},get:function(t){return this._hash[t]},getIdentity:function(t){return this.idProperty?t[this.idProperty]:null},query:function(t,e){return r(this.queryEngine(t,e)(this.data))},getChildren:function(t,e){var n=this.isOwned(t,!0)?t.children:null;return r(this.queryEngine({},e)(n||[]))},mayHaveChildren:function(t){return!!t.children}})});