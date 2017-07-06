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

define({general:{cancel:"Ακύρωση",close:"Κλείσιμο",none:"Κανένα",ok:"OK",other:"Άλλο",stamp:"Σφραγίδα",now:"Τώρα",choose:"Επιλέξτε ένα:"},editor:{noMetadata:"Δεν υπάρχουν μεταδεδομένα για αυτό το αντικείμενο.",xmlViewOnly:"Ο τύπος μεταδεδομένων που συσχετίζονται με αυτό το αντικείμενο δεν υποστηρίζεται από το εργαλείο επεξεργασίας. Τα μεταδεδομένα πρέπει να έχουν μορφή ArcGIS.",editorDialog:{caption:"Μεταδεδομένα",captionPattern:"Μεταδεδομένα για {title}"},primaryToolbar:{view:"Προβολή",viewXml:"Προβολή XML",edit:"Επεξεργασία",initializing:"Φόρτωση...",startingEditor:"Έναρξη εργαλείου επεξεργασίας...",loadingDocument:"Φόρτωση εγγράφου...",updatingDocument:"Ενημέρωση εγγράφου...",generatingView:"Δημιουργία προβολής...",errors:{errorGeneratingView:"Προέκυψε σφάλμα κατά τη δημιουργία της προβολής.",errorLoadingDocument:"Προέκυψε σφάλμα κατά τη φόρτωση του εγγράφου."}},changesNotSaved:{prompt:"Στο έγγραφό σας υπάρχουν αλλαγές που δεν έχουν αποθηκευτεί.",dialogTitle:"Κλείσιμο εργαλείου επεξεργασίας μεταδεδομένων",closeButton:"Κλείσιμο"},download:{caption:"Λήψη",dialogTitle:"Λήψη",prompt:"Κάντε κλικ εδώ για λήψη του αρχείου σας."},load:{caption:"Άνοιγμα",dialogTitle:"Άνοιγμα",typeTab:"Νέο έγγραφο",fileTab:"Άνοιγμα αρχείου",templateTab:"ενός προτύπου",itemTab:"του αντικειμένου σας",filePrompt:"Επιλέξτε ένα τοπικό αρχείο XML μεταδεδομένων ArcGIS. Τα μεταδεδομένα πρέπει να έχουν μορφή ArcGIS.",templatePrompt:"Δημιουργία μεταδεδομένων",pullItem:"Συμπλήρωση των μεταδεδομένων με τις λεπτομέρειες του αντικειμένου.",importWarning:"Το επιλεγμένο αρχείο δεν εμφανίζεται σε μορφή ArcGIS. Τα μεταφορτωμένα μεταδεδομένα πρέπει να έχουν μορφή ArcGIS.",loading:"Φόρτωση...",noMetadata:"Μπορείτε να δημιουργήσετε μεταδεδομένα για αυτό το αντικείμενο, ορίζοντας μία από τις παρακάτω επιλογές.",unrecognizedMetadata:"Ο τύπος μεταδεδομένων που συσχετίζονται με αυτό το αντικείμενο, δεν υποστηρίζεται από το εργαλείο επεξεργασίας. Τα υποστηριζόμενα μεταδεδομένα μπορούν να δημιουργηθούν ορίζοντας μία από τις παρακάτω επιλογές.",errorLoading:"Προέκυψε σφάλμα κατά τη φόρτωση.",warnings:{badFile:"Δεν ήταν δυνατή η φόρτωση του επιλεγμένου αρχείου.",notAnXml:"Το επιλεγμένο αρχείο δεν είναι αρχείο XML.",notSupported:"Αυτός ο τύπος αρχείου δεν υποστηρίζεται."}},save:{caption:"Αποθήκευση",dialogTitle:"Αποθήκευση μεταδεδομένων",working:"Αποθήκευση μεταδεδομένων...",errorSaving:"Προέκυψε σφάλμα. Τα μεταδεδομένα σας δεν αποθηκεύτηκαν.",saveDialog:{pushCaption:"Εφαρμογή αλλαγών στο αντικείμενό σας"}},saveAndClose:{caption:"Αποθήκευση και κλείσιμο"},saveDraft:{caption:"Αποθήκευση τοπικού αντιγράφου",dialogTitle:"Αποθηκεύστε ένα τοπικό αντίγραφο"},validate:{caption:"Επικύρωση",dialogTitle:"Επικύρωση",docIsValid:"Το έγγραφό σας είναι έγκυρο."},del:{caption:"Διαγραφή",dialogTitle:"Διαγραφή μεταδεδομένων",prompt:"Είστε βέβαιοι ότι θέλετε να διαγράψετε αυτά τα μεταδεδομένα;",working:"Διαγραφή μεταδεδομένων...",errorDeleting:"Προέκυψε σφάλμα. Τα μεταδεδομένα σας δεν διαγράφηκαν."},transform:{caption:"Μετασχηματισμός",dialogTitle:"Μετασχηματισμός σε",prompt:"",working:"Μετασχηματισμός...",errorTransforming:"Προέκυψε σφάλμα κατά το μετασχηματισμό του εγγράφου σας."},errorDialog:{dialogTitle:"Παρουσιάστηκε σφάλμα"}},arcgis:{portal:{metadataButton:{caption:"Μεταδεδομένα"}}},calendar:{button:"Ημερολόγιο...",title:"Ημερολόγιο"},geoExtent:{button:"Ορισμός γεωγραφικής έκτασης...",title:"Γεωγραφική έκταση",navigate:"Πλοήγηση",draw:"Σχεδίαση ορθογωνίου",drawHint:"Πιέστε κάτω για να ξεκινήσετε και αφήστε το για να ολοκληρώσετε τη διαδικασία."},hints:{date:"(yyyy ή yyyy-MM ή yyyy-MM-dd)",dateTime:"(yyyy-MM-ddThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(yyyy ή yyyy-MM ή yyyy-MM-dd ή yyyy-MM-ddThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(χρησιμοποιήστε κόμμα ή νέα γραμμή για διαχωρισμό)",fgdcDate:"(yyyy ή yyyy-MM ή yyyy-MM-dd)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(εισαγάγετε έναν ακέραιο)",latitude:"(δεκαδικές μοίρες)",longitude:"(δεκαδικές μοίρες)",number:"(εισαγάγετε έναν αριθμό)",numberGreaterThanZero:"(εισαγάγετε έναν αριθμό > 0)"},isoTopicCategoryCode:{caption:"Κατηγορία θέματος",boundaries:"Διοικητικά και πολιτικά όρια",farming:"Γεωργία και καλλιέργειες",climatologyMeteorologyAtmosphere:"Ατμόσφαιρα και κλίμα",biota:"Βιολογία και οικολογία",economy:"Επιχειρήσεις και οικονομικά",planningCadastre:"Κτηματολόγιο",society:"Πολιτισμός, κοινωνία και δημογραφικά στοιχεία",elevation:"Υψόμετρο και παράγωγα προϊόντα",environment:"Περιβάλλον και διατήρηση",structure:"Εγκαταστάσεις και δομές",geoscientificInformation:"Γεωλογία και γεωφυσική",health:"Ανθρώπινη υγεία και ασθένειες",imageryBaseMapsEarthCover:"Δορυφορικές εικόνες και υπόβαθρα",inlandWaters:"Εσωτερικοί υδάτινοι πόροι",location:"Τοποθεσίες και γεωδαιτικά δίκτυα",intelligenceMilitary:"Στρατός",oceans:"Ωκεανοί και εκβολές",transportation:"Δίκτυα μεταφορών",utilitiesCommunication:"Δημόσιες επιχειρήσεις κοινής ωφέλειας και επικοινωνιών"},multiplicity:{moveElementDown:"Μετακίνηση επιλογής κάτω",moveElementUp:"Μετακίνηση επιλογής πάνω",removeElement:"Κατάργηση επιλογής",repeatElement:"Επανάληψη επιλογής"},optionalNode:{switchTip:"Συμπερίληψη ή εξαίρεση αυτής της ενότητας."},serviceTypes:{featureService:"Feature Service",mapService:"Map Service",imageService:"Image Service",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"OK",empty:"Απαιτείται μια τιμή.",date:"Η τιμή πρέπει να είναι ημερομηνία.",integer:"Η τιμή πρέπει να είναι ακέραιος αριθμός.",number:"Η τιμή πρέπει να είναι αριθμός.",other:"Μη έγκυρη τιμή."},validationPane:{clearMessages:"Απαλοιφή μηνυμάτων",prompt:"(κάντε κλικ σε καθένα από τα παρακάτω μηνύματα και εισαγάγετε τις ζητούμενες πληροφορίες στο καθορισμένο πεδίο)"}});