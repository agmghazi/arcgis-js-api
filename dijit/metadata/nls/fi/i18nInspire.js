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

define({documentTypes:{data:{caption:"INSPIRE (aineisto)",description:""},service:{caption:"INSPIRE (palvelu)",description:""}},dataThemeKeywords:{caption:"Inspire-aineistoteema"},inspireServiceType:{discovery:"Löytöpalvelu",view:"Katselupalvelu",download:"Latauspalvelu",transformation:"Muuntopalvelu",invoke:"Kutsupalvelu",other:"Muu palvelu"},keywordSections:{dataTheme:"Inspire-aineistoteema",serviceCategory:"ISO 19119 -palveluluokka",gemetConcept:"GEMET-käsite",otherKeywords:"Muut avainsanat"},LanguageCode:{bul:"bulgaria",cze:"tšekki",dan:"tanska",dut:"hollanti",eng:"englanti",est:"viro",fin:"suomi",fre:"ranska",ger:"saksa",gre:"kreikka",hun:"unkari",gle:"gaeli (iiri)",ita:"italia",lav:"latvia",lit:"liettua",mlt:"malta",pol:"Puola",por:"portugali",rum:"romania",slo:"slovakki",slv:"sloveeni",spa:"espanja",swe:"ruotsi",chi:"kiina",kor:"korea",nor:"norja",rus:"venäjä",tur:"turkki"},otherConstraints:{noLimitations:"Ei rajoituksia",confidentialityOfProceedings:"Viranomaismenettelyjen luottamuksellisuus...",internationalRelations:"Kansainväliset suhteet, yleisön turvallisuus tai kansallinen puolustus",courseOfJustice:"Oikeuden toteutuminen, mahdollisuus siihen, että kuka tahansa voi saada oikeudenmukaisen oikeudenkäynnin...",confidentialityOfCommercial:"Kaupallisten tai teollisten tietojen luottamuksellisuus...",intellectualProperty:"Tekijänoikeudet",confidentialityOfPersonalData:"Henkilötietojen ja/tai tiedostojen luottamuksellisuus...",interestsOrProtection:"Tiedot toimittaneen henkilön mielenkiinnon kohteet tai suojaus...",protectionOfEnvironment:"Sellaisen ympäristön suojelu, johon nämä tiedot liittyvät...",freeText:"Vapaa teksti"},serviceType:{humanInteractionService:"100 Käyttöliittymäpalvelut",humanCatalogueViewer:"101 Hakemistoselain",humanGeographicViewer:"102 Paikkatietoselain",humanGeographicSpreadsheetViewer:"103 Maantieteellinen taulukkolaskentaselain",humanServiceEditor:"104 Palvelueditori",humanChainDefinitionEditor:"105 Palveluketjueditori",humanWorkflowEnactmentManager:"106 Prosessinsäätöohjain",humanGeographicFeatureEditor:"107 Kohdetietoeditori",humanGeographicSymbolEditor:"108 Symbolieditori ",humanFeatureGeneralizationEditor:"109 Yleistyseditori",humanGeographicDataStructureViewer:"110  Paikkatiedon tietorakenteen selain",infoManagementService:"200 Tiedonhallintapalvelut",infoFeatureAccessService:"201 Tietokohdepalvelu",infoMapAccessService:"202 Karttakuvapalvelu",infoCoverageAccessService:"203 Jatkumotietopalvelu",infoSensorDescriptionService:"204 Havaintolaitetietopalvelu",infoProductAccessService:"205 Tietotuotepalvelu",infoFeatureTypeService:"206 Tietokohdetyyppipalvelu",infoCatalogueService:"207 Luettelopalvelu",infoRegistryService:"208 Rekisteripalvelu",infoGazetteerService:"209 Maantieteellinen hakemistopalvelu",infoOrderHandlingService:"210 Tilaamispalvelu",infoStandingOrderService:"211 Kestotilauspalvelu",taskManagementService:"300 Prosessinhallintapalvelut",chainDefinitionService:"301 Palveluketjun määrittelypalvelu",workflowEnactmentService:"302 Prosessinohjauspalvelu",subscriptionService:"303 Tilauspalvelu",spatialProcessingService:"400 Paikkatiedon sijaintiprosessointipalvelut",spatialCoordinateConversionService:"401 Koordinaattikonversiopalvelu",spatialCoordinateTransformationService:"402 Koordinaattimuunnospalvelu",spatialCoverageVectorConversionService:"403 Jatkumo/vektorikonversiopalvelu",spatialImageCoordinateConversionService:"404 Kuvakoordinaattikonversiopalvelu",spatialRectificationService:"405 Oikaisupalvelu",spatialOrthorectificationService:"406 Ortokorjauspalvelu",spatialSensorGeometryModelAdjustmentService:"407 Havaintolaitegeometriamallia käyttävä oikaisupalvelu",spatialImageGeometryModelConversionService:"408 Kuvageometrian konversiopalvelu",spatialSubsettingService:"409 Alueperusteinen osittamispalvelu",spatialSamplingService:"410 Näytteenottopalvelu",spatialTilingChangeService:"411 Aluejakopalvelu",spatialDimensionMeasurementService:"412 Ulottuvuuksienmittauspalvelu",spatialFeatureManipulationService:"413 Tietokohteen muokkauspalvelu",spatialFeatureMatchingService:"414 Tietokohteiden vastaavuuspalvelu",spatialFeatureGeneralizationService:"415 Tietokohteiden yleistämispalvelu",spatialRouteDeterminationService:"416 Reitinmäärityspalvelu",spatialPositioningService:"417 Paikantamispalvelu",spatialProximityAnalysisService:"418 Läheisyysanalyysipalvelu",thematicProcessingService:"500 Paikkatiedon temaattiset prosessointipalvelut",thematicGoparameterCalculationService:"501 Maantieteellisten muuttujien laskentapalvelu",thematicClassificationService:"502 Teemaperusteinen luokittelupalvelu",thematicFeatureGeneralizationService:"503 Tietokohteiden yleistämispalvelu",thematicSubsettingService:"504 Teemaperusteinen osittamispalvelu",thematicSpatialCountingService:"505 Lukumäärälaskentapalvelu",thematicChangeDetectionService:"506 Muutosjäljityspalvelu",thematicGeographicInformationExtractionService:"507 Paikkatietokohteiden tunnistuspalvelu",thematicImageProcessingService:"508 Kuvankäsittelypalvelu",thematicReducedResolutionGenerationService:"509 Erotuskyvyn alentamispalvelu",thematicImageManipulationService:"510 Kuvansäätöpalvelut",thematicImageUnderstandingService:"511 Kuvatulkintapalvelut",thematicImageSynthesisService:"512 Kuvasynteesipalvelut",thematicMultibandImageManipulationService:"513 Monikanavakuvan muokkauspalvelu",thematicObjectDetectionService:"514 Kohdetunnistuspalvelu",thematicGeoparsingService:"515 Geoseulontapalvelu",thematicGeocodingService:"516 Geokoodauspalvelu",temporalProcessingService:"600 Paikkatiedon ajalliset prosessointipalvelut",temporalReferenceSystemTransformationService:"601 Aikaviitejärjestelmän muuntopalvelu",temporalSubsettingService:"602 Aikajaksotuspalvelu",temporalSamplingService:"603 Näytteenottopalvelu",temporalProximityAnalysisService:"604 Aikaperusteinen läheisyysanalyysipalvelu",metadataProcessingService:"700 Paikkatiedon metatietoa koskevat prosessointipalvelut",metadataStatisticalCalculationService:"701 Tilastonlaskentapalvelu",metadataGeographicAnnotationService:"702 Maantieteelliset annotointipalvelut",comService:"800 Paikkatietoa koskevat tiedonvälityspalvelut",comEncodingService:"801 Koodauspalvelu",comTransferService:"802 Tiedonsiirtopalvelu",comGeographicCompressionService:"803 Tiivistyspalvelu",comGeographicFormatConversionService:"804 Formaatinmuuntopalvelu",comMessagingService:"805 Viestintäpalvelu",comRemoteFileAndExecutableManagement:"806 Ulkoisten tiedostojen ja ohjelmien hallinta"},useLimitation:{noCondition:"Yksikään ehto ei päde",unknownCondition:"Tuntemattomat ehdot",freeText:"Vapaa teksti"}});