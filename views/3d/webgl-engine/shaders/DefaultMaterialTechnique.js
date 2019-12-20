// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../core/shaderLibrary/shading/VisualVariables.glsl","../core/shaderLibrary/util/DoublePrecision.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../materials/internal/MaterialUtil","./DefaultMaterial.glsl","../../../webgl/Program"],function(e,r,t,o,a,i,s,n,l,u,p,d,c,h,m){Object.defineProperty(r,"__esModule",{value:!0});var v=function(r){function o(){return null!==r&&r.apply(this,arguments)||this}return t(o,r),o.prototype.initializeProgram=function(e){var r=o.shader.get(),t=this.configuration,a=r.build({output:t.output,viewingMode:e.viewingMode,receiveShadows:t.receiveShadows,slicePlaneEnabled:t.slice,sliceHighlightDisabled:t.sliceHighlightDisabled,symbolColor:t.symbolColors,vvSize:t.vvSize,vvColor:t.vvColor,instanced:t.instanced,instancedColor:t.instancedColor,instancedDoublePrecision:t.instancedDoublePrecision,useOldSceneLightInterface:!1,usePBR:t.usePBR,hasMetalnessAndRoughnessTexture:t.hasMetalnessAndRoughnessTexture,hasEmissionTexture:t.hasEmissionTexture,hasOcclusionTexture:t.hasOcclusionTexture,hasNormalTexture:t.hasNormalTexture,hasColorTexture:t.hasColorTexture,receiveAmbientOcclusion:t.receiveAmbientOcclusion,usePBRforWater:!1,useCustomDTRExponentForWater:!1,normalType:t.normalsTypeDerivate?3:0,doubleSidedMode:t.doubleSidedMode,vertexTangets:t.vertexTangents,attributeTextureCoordinates:t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture||t.hasColorTexture?1:0,textureAlphaPremultiplied:t.textureAlphaPremultiplied,attributeColor:t.vertexColors,screenSizePerspectiveEnabled:t.screenSizePerspective,verticalOffsetEnabled:t.verticalOffset,offsetBackfaces:t.offsetBackfaces,doublePrecisionRequiresObfuscation:n.doublePrecisionRequiresObfuscation(e.rctx),alphaDiscardMode:t.alphaDiscardMode,treeRendering:t.treeRendering,supportsTextureAtlas:!1});return new m(e.rctx,a.generateSource("vertex"),a.generateSource("fragment"),d.Default3D)},o.prototype.bindPass=function(e,r,t){var o=this.configuration.output;0===o?(this.program.setUniform3fv("ambient",r.ambient),this.program.setUniform3fv("diffuse",r.diffuse),this.program.setUniform3fv("specular",r.specular),this.program.setUniform4fv("externalColor",r.externalColor),this.program.setUniform1i("colorMixMode",c.colorMixModes[r.colorMixMode]),this.program.setUniform1f("opacity",r.opacity),this.program.setUniform1f("layerOpacity",r.layerOpacity),this.configuration.usePBR&&i.PhysicallyBasedRenderingParameters.bindUniforms(this.program,r)):1===o||3===o?this.program.setUniform2fv("nearFar",t.nearFar):4===o&&a.OutputHighlight.bindOutputHighlight(e,this.program,t),s.VisualVariables.bindUniformsForSymbols(this.program,r),"mask"!==r.textureAlphaMode&&"maskBlend"!==r.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",r.textureAlphaCutoff)},o.prototype.initializePipeline=function(){return null},o.shader=new l.ReloadableShaderModule(h,"./DefaultMaterial.glsl",e),o}(u.ShaderTechnique);r.DefaultMaterialTechnique=v;var f=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.output=0,r.alphaDiscardMode=1,r.doubleSidedMode=0,r.vertexColors=!1,r.offsetBackfaces=!1,r.symbolColors=!1,r.vvSize=!1,r.vvColor=!1,r.verticalOffset=!1,r.receiveShadows=!1,r.slice=!1,r.sliceHighlightDisabled=!1,r.receiveAmbientOcclusion=!1,r.screenSizePerspective=!1,r.textureAlphaPremultiplied=!1,r.treeRendering=!1,r.hasColorTexture=!1,r.usePBR=!1,r.hasMetalnessAndRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.instanced=!1,r.instancedColor=!1,r.instancedDoublePrecision=!1,r.vertexTangents=!1,r.normalsTypeDerivate=!1,r}return t(r,e),o([p.parameter({count:6})],r.prototype,"output",void 0),o([p.parameter({count:4})],r.prototype,"alphaDiscardMode",void 0),o([p.parameter({count:3})],r.prototype,"doubleSidedMode",void 0),o([p.parameter()],r.prototype,"vertexColors",void 0),o([p.parameter()],r.prototype,"offsetBackfaces",void 0),o([p.parameter()],r.prototype,"symbolColors",void 0),o([p.parameter()],r.prototype,"vvSize",void 0),o([p.parameter()],r.prototype,"vvColor",void 0),o([p.parameter()],r.prototype,"verticalOffset",void 0),o([p.parameter()],r.prototype,"receiveShadows",void 0),o([p.parameter()],r.prototype,"slice",void 0),o([p.parameter()],r.prototype,"sliceHighlightDisabled",void 0),o([p.parameter()],r.prototype,"receiveAmbientOcclusion",void 0),o([p.parameter()],r.prototype,"screenSizePerspective",void 0),o([p.parameter()],r.prototype,"textureAlphaPremultiplied",void 0),o([p.parameter()],r.prototype,"treeRendering",void 0),o([p.parameter()],r.prototype,"hasColorTexture",void 0),o([p.parameter()],r.prototype,"usePBR",void 0),o([p.parameter()],r.prototype,"hasMetalnessAndRoughnessTexture",void 0),o([p.parameter()],r.prototype,"hasEmissionTexture",void 0),o([p.parameter()],r.prototype,"hasOcclusionTexture",void 0),o([p.parameter()],r.prototype,"hasNormalTexture",void 0),o([p.parameter()],r.prototype,"instanced",void 0),o([p.parameter()],r.prototype,"instancedColor",void 0),o([p.parameter()],r.prototype,"instancedDoublePrecision",void 0),o([p.parameter()],r.prototype,"vertexTangents",void 0),o([p.parameter()],r.prototype,"normalsTypeDerivate",void 0),r}(p.ShaderTechniqueConfiguration);r.DefaultMaterialTechniqueConfiguration=f});