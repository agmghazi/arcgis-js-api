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

define({documentTypes:{data:{caption:"INSPIRE (Δεδομένα)",description:""},service:{caption:"INSPIRE (Υπηρεσία)",description:""}},dataThemeKeywords:{caption:"Θέμα δεδομένων Inspire"},inspireServiceType:{discovery:"Υπηρεσία εντοπισμού",view:"Υπηρεσία προβολής",download:"Υπηρεσία λήψης",transformation:"Υπηρεσία μετασχηματισμού",invoke:"Υπηρεσία κλήσης",other:"Άλλη υπηρεσία"},keywordSections:{dataTheme:"Θέμα δεδομένων Inspire",serviceCategory:"Κατηγορία υπηρεσίας ISO 19119",gemetConcept:"Έννοια GEMET",otherKeywords:"Άλλες λέξεις-κλειδιά"},LanguageCode:{bul:"Βουλγαρικά",cze:"Τσεχικά",dan:"Δανέζικα",dut:"Ολλανδικά",eng:"Αγγλικά",est:"Εσθονικά",fin:"Φινλανδικά",fre:"Γαλλικά",ger:"Γερμανικά",gre:"Ελληνικά",hun:"Ουγγρικά",gle:"Κελτικά (Ιρλανδικά)",ita:"Ιταλικά",lav:"Λετονικά",lit:"Λιθουανικά",mlt:"Μαλτεζικά",pol:"Πολωνικά",por:"Πορτογαλικά",rum:"Ρουμανικά",slo:"Σλοβακικά",slv:"Σλοβενικά",spa:"Ισπανικά",swe:"Σουηδικά",chi:"Κινεζικά",kor:"Κορεατικά",nor:"Νορβηγικά",rus:"Ρωσικά",tur:"Τουρκικά"},otherConstraints:{noLimitations:"Χωρίς περιορισμούς",confidentialityOfProceedings:"Η εμπιστευτικότητα των διαδικασιών των δημόσιων αρχών...",internationalRelations:"Διεθνείς σχέσεις, δημόσια ασφάλεια ή εθνική άμυνα",courseOfJustice:"Η απονομή δικαιοσύνης, η δυνατότητα κάθε ατόμου για δίκαιη δίκη...",confidentialityOfCommercial:"Η εμπιστευτικότητα των εμπορικών ή βιομηχανικών πληροφοριών...",intellectualProperty:"Δικαιώματα πνευματικής ιδιοκτησίας",confidentialityOfPersonalData:"Η εμπιστευτικότητα των προσωπικών δεδομένων ή/και αρχείων...",interestsOrProtection:"Τα συμφέροντα ή η προστασία του ατόμου που παρείχε τις πληροφορίες...",protectionOfEnvironment:"Η προστασία του περιβάλλοντος το οποίο αφορούν οι πληροφορίες...",freeText:"Ελεύθερο κείμενο"},serviceType:{humanInteractionService:"100 Γεωγραφικές υπηρεσίες ανθρώπινης δραστηριότητας",humanCatalogueViewer:"101 Εργαλείο προβολής καταλόγου",humanGeographicViewer:"102 Εργαλείο προβολής γεωγραφικών στοιχείων",humanGeographicSpreadsheetViewer:"103 Εργαλείο προβολής γεωγραφικού λογιστικού φύλλου",humanServiceEditor:"104 Εργαλείο επεξεργασίας της υπηρεσίας",humanChainDefinitionEditor:"105 Εργαλείο επεξεργασίας για τον ορισμό αλυσίδας",humanWorkflowEnactmentManager:"106 Εργαλείο διαχείρισης ενεργοποίησης ροής εργασιών",humanGeographicFeatureEditor:"107 Εργαλείο επεξεργασίας γεωγραφικών στοιχείων",humanGeographicSymbolEditor:"108 Εργαλείο επεξεργασίας γεωγραφικών συμβόλων ",humanFeatureGeneralizationEditor:"109 Εργαλείο επεξεργασίας γενίκευσης στοιχείων",humanGeographicDataStructureViewer:"110 Εργαλείο προβολής της δομής των γεωγραφικών δεδομένων",infoManagementService:"200 Υπηρεσία διαχείρισης γεωγραφικών μοντέλων/πληροφοριών",infoFeatureAccessService:"201 Υπηρεσία πρόσβασης σε στοιχεία",infoMapAccessService:"202 Υπηρεσία πρόσβασης σε χάρτες",infoCoverageAccessService:"203 Υπηρεσία πρόσβασης σε coverage δεδομένα",infoSensorDescriptionService:"204 Υπηρεσία περιγραφής αισθητήρα",infoProductAccessService:"205 Υπηρεσία πρόσβασης σε προϊόντα",infoFeatureTypeService:"206 Υπηρεσία τύπων στοιχείων",infoCatalogueService:"207 Υπηρεσία καταλόγου",infoRegistryService:"208 Υπηρεσία μητρώου",infoGazetteerService:"209 Υπηρεσία γεωγραφικού λεξικού",infoOrderHandlingService:"210 Υπηρεσία διαχείρισης παραγγελιών",infoStandingOrderService:"211 Υπηρεσία διαχείρισης πάγιων εντολών",taskManagementService:"300 Υπηρεσίες διαχείρισης γεωγραφικών ροών εργασίας/ εργασιών",chainDefinitionService:"301 Υπηρεσία ορισμού αλυσίδας",workflowEnactmentService:"302 Υπηρεσία ενεργοποίησης ροών εργασίας",subscriptionService:"303 Υπηρεσία εγγραφών",spatialProcessingService:"400 Υπηρεσίες γεωγραφικής επεξεργασίας - χωρικές",spatialCoordinateConversionService:"401 Υπηρεσία μετατροπής συντεταγμένων",spatialCoordinateTransformationService:"402 Υπηρεσία μετασχηματισμού συντεταγμένων",spatialCoverageVectorConversionService:"403 Υπηρεσία μετατροπής coverage δεδομένων /διανυσματικών δεδομένων",spatialImageCoordinateConversionService:"404 Υπηρεσία μετατροπής συντεταγμένων εικόνας",spatialRectificationService:"405 Υπηρεσία αναγωγής",spatialOrthorectificationService:"406 Υπηρεσία ορθοαναγωγής",spatialSensorGeometryModelAdjustmentService:"407 Υπηρεσία προσαρμογής γεωμετρικού μοντέλου αισθητήρα",spatialImageGeometryModelConversionService:"408 Υπηρεσία μετατροπής γεωμετρικού μοντέλου εικόνας",spatialSubsettingService:"409 Υπηρεσία άντλησης υποσυνόλου χωρικών δεδομένων",spatialSamplingService:"410 Υπηρεσία χωρικής δειγματοληψίας",spatialTilingChangeService:"411 Υπηρεσία αλλαγής tiling",spatialDimensionMeasurementService:"412 Υπηρεσία μέτρησης διαστάσεων",spatialFeatureManipulationService:"413 Υπηρεσίες χειρισμού γεωγραφικών στοιχείων",spatialFeatureMatchingService:"414 Υπηρεσία αντιστοίχισης στοιχείων",spatialFeatureGeneralizationService:"415 Υπηρεσία γενίκευσης στοιχείων",spatialRouteDeterminationService:"416 Υπηρεσία καθορισμού διαδρομής",spatialPositioningService:"417 Υπηρεσία εντοπισμού θέσης",spatialProximityAnalysisService:"418 Υπηρεσία ανάλυσης χωρικής γειτνίασης",thematicProcessingService:"500 Υπηρεσίες γεωγραφικής επεξεργασίας - θεματικές",thematicGoparameterCalculationService:"501 Υπηρεσία υπολογισμού γεωπαραμέτρων",thematicClassificationService:"502 Υπηρεσία θεματικής κατηγοριοποίησης",thematicFeatureGeneralizationService:"503 Υπηρεσία γενίκευσης στοιχείων",thematicSubsettingService:"504 Υπηρεσία άντλησης υποσυνόλου χωρικών δεδομένων",thematicSpatialCountingService:"505 Υπηρεσία χωρικής καταμέτρησης",thematicChangeDetectionService:"506 Υπηρεσία ανίχνευσης αλλαγών",thematicGeographicInformationExtractionService:"507 Υπηρεσίες άντλησης γεωγραφικών πληροφοριών",thematicImageProcessingService:"508 Υπηρεσία επεξεργασίας εικόνων",thematicReducedResolutionGenerationService:"509 Υπηρεσία μείωσης της ανάλυσης",thematicImageManipulationService:"510 Υπηρεσίες χειρισμού εικόνων",thematicImageUnderstandingService:"511 Υπηρεσίες φωτοερμηνείας",thematicImageSynthesisService:"512 Υπηρεσίες σύνθεσης εικόνων",thematicMultibandImageManipulationService:"513 Πολυζωνικός χειρισμός εικόνων",thematicObjectDetectionService:"514 Υπηρεσία ανίχνευσης αντικειμένων",thematicGeoparsingService:"515 Υπηρεσία γεωγραφικής ανάλυσης",thematicGeocodingService:"516 Υπηρεσία γεωκωδικοποίησης",temporalProcessingService:"600 Υπηρεσίες γεωγραφικής επεξεργασίας - χρονολογικές",temporalReferenceSystemTransformationService:"601 Υπηρεσία μετασχηματισμού συστήματος χρονολογικής αναφοράς",temporalSubsettingService:"602 Υπηρεσία άντλησης υποσυνόλου χρονικών δεδομένων",temporalSamplingService:"603 Υπηρεσία χρονικής δειγματοληψίας",temporalProximityAnalysisService:"604 Υπηρεσία ανάλυσης χρονολογικής γειτνίασης",metadataProcessingService:"700 Υπηρεσίες γεωγραφικής επεξεργασίας - μεταδεδομένα",metadataStatisticalCalculationService:"701 Υπηρεσία στατιστικών υπολογισμών",metadataGeographicAnnotationService:"702 Υπηρεσίες γεωγραφικού σχολίων",comService:"800 Υπηρεσίες γεωγραφικής επικοινωνίας",comEncodingService:"801 Υπηρεσία κωδικοποίησης",comTransferService:"802 Υπηρεσία μεταφοράς",comGeographicCompressionService:"803 Υπηρεσία συμπίεσης γεωγραφικών δεδομένων",comGeographicFormatConversionService:"804 Υπηρεσία μετατροπής μορφοτύπου γεωγραφικών δεδομένων",comMessagingService:"805 Υπηρεσία μηνυμάτων",comRemoteFileAndExecutableManagement:"806 Διαχείριση απομακρυσμένων και εκτελέσιμων αρχείων"},useLimitation:{noCondition:"Δεν ισχύουν προϋποθέσεις",unknownCondition:"Άγνωστες συνθήκες",freeText:"Ελεύθερο κείμενο"}});