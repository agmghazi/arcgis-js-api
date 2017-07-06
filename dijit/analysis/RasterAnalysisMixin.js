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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/store/Memory","dojo/string","dojo/has","dojo/dom-class","dojo/dom-style","dojo/dom-attr","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./utils","../../layers/RasterFunction"],function(e,t,s,i,n,a,r,o,u,l,h,c,p,y,d,m,_){var f=e([d,y],{declaredClass:"esri.dijit.analysis.RasterAnalysisMixin",map:null,outputLayerName:null,resultParameter:"outputRaster",rasterGPToolName:"GenerateRaster",analysisType:"raster",i18n:null,returnProcessInfo:null,_geometryService:null,constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,i.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),t.mixin(this.i18n,this.toolNlsName)},postCreate:function(){this.inherited(arguments),u.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",t.hitch(this,this.validateServiceName)),this._buildUI()},startup:function(){console.log("startup")},validateServiceName:function(e){return m.validateServiceName(e,{textInput:this._outputLayerInput})},_getJobParameters:function(){},_getRasterFunction:function(){},_getRasterArguments:function(){},_getOutputItemProperties:function(){},_setDefaultInputs:function(){},_resetUI:function(){},_getDefaultOutputItemProperties:function(e,t,s){var i=this._getDefaultRenderingRule(t),n=this._getDefaultPopupInfo(),a=e||1,r=s||"RSP_NearestNeighbor";return{visibility:!0,opacity:a,interpolation:r,renderingRule:i,popupInfo:n}},_getDefaultRenderingRule:function(e){var t=new _;t.functionName="Stretch";var s={};s.StretchType=5,s.DRA=!1,s.Gamma=[1],s.UseGamma=!0,t.functionArguments=s,t.outputPixelType="U8";var i=new _;return i.functionName="Colormap",i.functionArguments={colorRamp:e||"Aspect",Raster:t},i},_getDefaultPopupInfo:function(){return{title:this.get("outputLayerName"),description:null,fieldInfos:[{fieldName:"Raster.ServicePixelValue",label:"Service Pixel Value",isEditable:!1,isEditableOnLayer:!1,visible:!1,format:{places:2,digitSeparator:!0}},{fieldName:"Raster.ServicePixelValue.Raw",label:"Pixel Value",isEditable:!1,isEditableOnLayer:!1,visible:!0,format:{places:2,digitSeparator:!0}}],showAttachments:!1,layerOptions:{showNoDataRecords:!0},mediaInfos:[]}},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.rasterGPToolName))},_setInputLayersAttr:function(e){this.inputLayers=e},_setInputLayerAttr:function(e){this.inputLayer=e},_getInputLayerAttr:function(){return this.inputLayer},_getOutputLayerNameAttr:function(){return this._outputLayerInput&&(this.outputLayerName=this._outputLayerInput.get("value")),this.outputLayerName},_setOutputLayerNameAttr:function(e){this.outputLayerName=e},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},_setDisableExtentAttr:function(e){this._useExtentCheck.set("checked",!e),this._useExtentCheck.set("disabled",e)},_getDisableExtentAttr:function(){this._useExtentCheck.get("disabled")},_setMapAttr:function(e){this.map=e},_getMapAttr:function(){return this.map},_handleModeCrumbClick:function(e){e.preventDefault(),this._onClose(!0)},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:!e})},_save:function(){},_handleShowCreditsClick:function(e){e.preventDefault();var s={};this._form.validate()&&(s.inputLayer=n.toJson(m.constructAnalysisInputLyrObj(this.get("inputLayer"))),s.OutputName=n.toJson({serviceProperties:{name:this.get("outputLayerName")}}),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(s.context=n.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,s).then(t.hitch(this,function(e){this._usageForm.set("content",e),this._usageDialog.show()})))},_handleSaveBtnClick:function(e){if(this._form.validate()){this._saveBtn.set("disabled",!0);var t=this._webLayerTypeSelect.get("value"),s=this.get("inputLayer"),i={},a=this._getJobParameters();if(!p.isDefined(a)){a={};var o={};o.rasterFunction=this._getRasterFunction(),o.rasterFunctionArguments=this._getRasterArguments(),a.rasterFunction=n.toJson(o);var u={Raster:{url:s.url}};if(s.renderingRule&&(u.Raster.renderingRule=s.renderingRule.toJson()),s.mosaicRule&&(u.Raster.mosaicRule=s.mosaicRule.toJson()),a.functionArguments=n.toJson(u),this.showChooseExtent&&!this.get("disableExtent")&&this._useExtentCheck.get("checked")){var l={},h=this.map.extent._normalize(!0);l.rasterFunction="Clip",l.rasterFunctionArguments={ClippingGeometry:h,ClippingType:1,Extent:h,Raster:o},a.rasterFunction=n.toJson(l)}}a.OutputName=n.toJson({serviceProperties:{name:this.get("outputLayerName")}}),a.returnProcessInfo=this.returnProcessInfo;var c={};if(this.showChooseExtent&&!this.get("disableExtent")&&this._useExtentCheck.get("checked")&&!a.rasterFunction&&(c.extent=this.map.extent._normalize(!0)),a.context=n.toJson(c),i.jobParams=a,"permanentLayer"===t){i.itemParams={description:this.i18n.itemDescription,tags:r.substitute(this.i18n.itemTags,{layername:this.inputLayer.name,fieldname:a.field||"",valuelayername:a.valuelayername||""}),snippet:this.i18n.itemSnippet};var y=this._getOutputItemProperties();y&&(i.itemParams.text=y),this.showSelectFolder&&(i.itemParams.folder=this.get("folderId")),i.analysisType=this.analysisType,this.execute(i)}else"dynamicLayer"===t&&this._handleSaveDynamicLayer(a)}},_handleSaveDynamicLayer:function(e){var t=this.get("inputLayer"),s=this.analysisGpServer.replace("RasterAnalysisTools/GPServer","RasterRendering/ImageServer?viewId="),i={createItemThumbnail:!1};i.url=s+t.url,i.outputLayerName=n.fromJson(e.OutputName).serviceProperties.name,i.analysisInfo={toolName:this.toolName,jobParams:e};var a=new _;a.functionName=this._getRasterFunction(),a.functionArguments=this._getRasterArguments(),i.renderingRule=a,i.mosaicRule=t.mosaicRule},_handleAnalysisLayerChange:function(e){"browse"===e?(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this._browsedlg.browseItems.set("query",this._analysisquery+' AND tags:"point"'),this._browsedlg.show()):(this.inputLayer=this.inputLayers[e],this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(e){this.inputLayer&&(h.set(this._interpolateToolDescription,"innerHTML",r.substitute(this.i18n.toolDefine,{layername:this.inputLayer.name})),e&&(this.outputLayerName=r.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name})),this._outputLayerInput.set("value",this.outputLayerName)),this._resetUI()},_handleBrowseItemsSelect:function(e){e&&e.selection&&m.addAnalysisReadyLayer({item:e.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:this._browsedlg,widget:this}).always(t.hitch(this,this._updateAnalysisLayerUI,!0))},_buildUI:function(){var e=!0;if(this._loadConnections(),this.signInPromise.then(t.hitch(this,m.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer,analysisMode:"raster"})),this.get("showSelectAnalysisLayer")&&(!this.get("inputLayer")&&this.get("inputLayers")&&this.set("inputLayer",this.inputLayers[0]),m.populateAnalysisLayers(this,"inputLayer","inputLayers")),m.addReadyToUseLayerOption(this,[this._analysisSelect]),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),this.inputLayer&&this._updateAnalysisLayerUI(e),l.set(this._chooseFolderRow,"display",this.showSelectFolder===!0?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(t.hitch(this,function(e){this.folderStore=e,m.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),this._chooseLayerTypeRow){l.set(this._chooseLayerTypeRow,"display",this.showSelectLayerType===!0?"block":"none");var s=new a({data:[{name:this.i18n.permanentLayer,id:"permanentLayer"},{name:this.i18n.dynamicLayer,id:"dynamicLayer"}]});this._webLayerTypeSelect.set("store",s),this._webLayerTypeSelect.set("value","permanentLayer")}l.set(this._chooseExtentDiv,"display",this.showChooseExtent===!0?"inline-block":"none"),l.set(this._showCreditsLink,"display",this.showCredits===!0?"block":"none"),this._setDefaultInputs()},_loadConnections:function(){this.on("start",t.hitch(this,"_onClose",!1)),this._connect(this._closeBtn,"onclick",t.hitch(this,"_onClose",!0))},_connect:function(e,t,s){this._pbConnects.push(i.connect(e,t,s))}});return o("extend-esri")&&t.setObject("dijit.analysis.RasterAnalysisMixin",f,c),f});