// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"ללא",notComplete:"לא הושלם",other:"אחר",present:"קיים",unknown:"לא מוכר",unpublishedMaterial:"חומר שלא פורסם"},hints:{integerGreaterThanOne:"(הכנס מספר שלם > 1)",integer0To100:"(הכנס מספר שלם 0..100)"},citeinfo:{caption:"הפניה למידע",origin:"יוצר",pubdate:"תאריך פירסום",pubtime:"זמן פרסום",title:"כותרת",edition:"מהדורה",geoform:{caption:"נתוני Geospatial בטופס הצגה",atlas:"אטלס",audio:"צליל",diagram:"דיאגרמה",sDocument:"מסמך",globe:"Globe",map:"מפה",model:"מודל",multiMediaPresentation:"מצגת מולטימדיה",profile:"פרופיל",rasterDigitalData:"נתוני רסטר דיגיטליים",remoteSensingImage:"תמונת חישה מרחוק",section:"חלק",spreadsheet:"גיליון נתונים",tabularDigitalData:"נתונים טבלאיים דיגיטליים",vectorDigitalData:"נתוני וקטור דיגיטליים",video:"וידאו",view:"תצוגה"},serinfo:{caption:"סדרת מידע",sername:"שם סדרה",issue:"זיהוי בעיה"},pubinfo:{caption:"מידע על הפרסום",pubplace:"מקום פרסום",publish:"מפרסם"},othercit:"פרטי הפניה אחרים",onlink:"קישור מקוון (URL)"},cntinfo:{caption:"פרטי התקשרות",section:{primary:"ראשי",phoneAndEmail:"טלפון ודואר אלקטרוני",hoursAndInstructions:"שעות והוראות"},cntorgp:{caption:"לפי ארגון",cntorg:"ארגון",cntper:"אדם"},cntperp:{caption:"לפי אדם",cntper:"אדם",cntorg:"ארגון"},cntpos:"תפקיד",cntaddr:{caption:"כתובת",addrtype:{caption:"סוג כתובת",mailing:"משלוח דואר",physical:"פיזי",mailingAndPhysical:"כתובת למשלוח וכתובת פיזית"},address:"כתובת",city:"עיר",state:"מדינה",postal:"מיקוד",country:"ארץ"},cntvoice:"קול",cnttdd:"טלפון TDD/TTY (לכבדי שמיעה)",cntfax:"פקס",cntemail:"כתובת דואר אלקטרוני",hours:"שעות",cntinst:"הוראות"},dataqual:{caption:"מידע על איכות הנתונים",section:{attributeAccuracy:"דיוק מאפיין",logicalConsistency:"עקביות לוגית‬",completeness:"שלמות",positionalAccuracy:"דיוק מיקומי",lineage:"שושלת",cloudCover:"כיסוי ענן"},attracc:{caption:"דיוק מאפיין",attraccr:"דיווח דיוק מאפיינים",qattracc:{caption:"הערכת דיוק מאפיינים כמותיים",attraccv:"ערך דיוק מאפיין",attracce:"דהסבר לדיוק מאפיינים"}},logic:"דוח עקביות לוגית",complete:"דוח שלמות",posacc:"דיוק מיקומי",horizpa:{caption:"דיוק מיקום אופקי",horizpar:"דוח דיוק מיקום אופקי",qhorizpa:{caption:"הערכת דיוק למיקום אופקי וכמותי",horizpav:"עקך דיוק מיקום אופקי",horizpae:"הסבר לדיוק מיקום אופקי"}},vertacc:{caption:"דיוק מיקום אנכי",vertaccr:"דוח דיוק מיקום אנכי",qvertpa:{caption:"הערכת דיוק למיקום אנכי וכמותי",vertaccv:"ערך דיוק מיקום אנכי",vertacce:"הסבר לדיוק מיקום אנכי"}},lineage:{caption:"שושלת"},srcinfo:{caption:"מקור מידע",srccite:"הפניה למקור",srcscale:'מקור קנ"מ במכנה',typesrc:{caption:"סוג של מקור מדיה",paper:"נייר",stableBaseMaterial:"חומר על בסיס יציב",microfiche:"מיקרופיש",microfilm:"מיקרופילם",audiocassette:"קלטת אודיו",chart:"תרשים",filmstrip:"סרט צילום",transparency:"שקיפות",videocassette:"קלטת וידאו",videodisc:"דיסק וידאו",videotape:"קלטת וידאו",physicalModel:"מודל פיזי",computerProgram:"תכנית מחשב",disc:"דיסק",cartridgeTape:"קלטת Cartridge",magneticTape:"קלטת מגנטית",online:"באינטרנט",cdrom:"CD-ROM",electronicBulletinBoard:"לוח מודעות אלקטרוני",electronicMailSystem:"מערכת דואר אלקטרוני"},srctime:"מקור פרק זמן של תוכן",srccurr:"רפרנס לעדכניות המקור",srccitea:"קיצור הפניה למקור",srccontr:"תרימת מקור"},procstep:{caption:"צעד תהליך",procdesc:"תיאור תהליך",srcused:"קיצור הפניה למקור שהתשתמשו בו",procdate:"תאריך עיבוד",proctime:"זמן עיבוד",srcprod:"קיצור הפניה למקור שנוצר",proccont:"עבד איש קשר"},cloud:"כיסוי ענן"},distinfo:{caption:"פורמט הפצה",section:{distributor:"מפיץ",description:"תיאור",orderProcess:"תהליך הזמנה",prerequisites:"דרישות קדם‬",availability:"זמינות"},distrib:"מפיץ",resdesc:{caption:"תיאור משאב",liveData:"מפות ונתונים חיים",downloadableData:"נתונים נטענים",offlineData:"נתונים לא מקוונים",staticMapImages:"תמונות מפה סטטית",sDocument:"מסמכים אחרים",application:"אפליקציות",geographicService:"שירותים גיאוגרפיים",clearingHouse:"מסלקה",mapFiles:"קבצי מפה",geographicActivies:"פעילות גיאוגרפית"},distliab:"הצהרת אחריות הפצה",custom:"תהליך הזמנה מותאם אישית",techpreq:"דרישות מקדימות טכניות",availabl:"זמינות"},eainfo:{caption:"מידע על יישות ומאפיין",overview:"תיאור סקירה כללית",eaover:"סקירה כללית של יישות ומאפיין",eadetcit:"הפניה לישות ופרטי המאפיינים"},idinfo:{caption:"מידע זיהוי",section:{timeAndStatus:"זמן וסטטוס",constraints:"הגבלות",contact:"צור קשר",additional:"נוסף"},citeinfo:"הפניה",descript:{caption:"תיאור",sAbstract:"מופשט",purpose:"תכלית",supplinf:"מידע נוסף"},timeperd:{caption:"משך הזמן של התכולה",current:{caption:"יחוס עכשוויות",groundCondition:"תנאי קרקע",publicationDate:"תאריך פירסום"}},status:{caption:"סטטוס",progress:{caption:"התקדמות",complete:"הושלם",inWork:"בעבודה",planned:"מתוכנן"},update:{caption:"תדירות תחזוק ועדכון",continual:"המשכי",daily:"יומי",weekly:"שבועי",monthly:"חודשי",annually:"שנתי",unknown:"לא מוכר",asNeeded:"לפי דרישה",irregular:"לא סדיר",nonePlanned:"ללא תכנון"}},spdom:{caption:"תיחום",bounding:{caption:"קורדינאטות תוחמות",westbc:"קו אורך תוחם מערבי",eastbc:"קו אורךתוחם מזרחי",northbc:"קו רוחב תוחם צפוני",southbc:"קו רוחב תוחם דרומי"}},keywords:{caption:"מילות מפתח",theme:"נושא",place:"מקום",stratum:"Stratum",temporal:"זמני",thesaursus:"אוצר מילים משויך",delimited:"מילות מפתח",themektIsoTopicCategory:"נושא ISO...",themektIsoTopicDialog:"נושא ISO",placektGnis:"מערכת מידע של שמות גיאוגרפיים"},accconst:"מגבלות גישה",useconst:"השתמש באילוצים",ptcontac:"נקודת קשר של המשאב",browse:{caption:"Browse Graphic",browsen:"URL לגרפיקת ניווט",browsed:"דפדף בתיאור קובץ גרפי",browset:"דפדף סוג קובץ גרפי"},datacred:"קרדיט סט נתונים",secinfo:{caption:"ביטחון מידע",secsys:"מערכת סיווג אבטחה",secclass:{caption:"מיון אבטחה",topSecret:"סודי ביותר",secret:"סוד",confidential:"חסוי",restricted:"הגבלה",unclassified:"ללא קבוצה",sensitive:"רגיש"},sechandl:"תיאור ניהול האבטחה"},sNative:"סביבת סט נתונים מקומית",crossref:"תיאום אזכורים"},metadata:{idinfo:"זיהוי",dataqual:"איכות",spdoinfo:"ארגון מידע מרחבי",spref:"ייחוס מרחבי",eainfo:"ישות ומאפיין",distinfo:"הפצה",metainfo:"מטה-דאטה"},metainfo:{caption:"מידע מטה-דאטה",section:{dates:"תאריכי מטה-דאטה",contact:"איש קשר של המטה-דאטה",standard:"סטנדרט מטה-דאטה",additional:"נוסף"},metd:"תאריך מטה-דאטה",metrd:"תאריך סקירת מטה-דאטה",metfrd:"תאריך ביקורת עתידית של המטה-דאטה",metstdn:"שם מטה-דאטה סטנדרטי",metstdv:"גרסה סטנדרטית של מטה-דאטה",metac:"מגבלות גישה למטה-דאטה",metuc:"מגבלות שימוש במטה-דאטה",metsi:{caption:"מידע אבטחה של מטה-דאטה",metscs:"מערכת קלסיפיקציית אבטחת מידע של מטה-דאטה",metsc:"קלסיפיקציית אבטחת מידע של מטה-דאטה",metshd:"תיאור שיטת טיפול באבטחת מטה-דאטה"}},spref:{caption:"מידע ייחוס מרחבי",horizsys:{caption:"מערכת קורדינאטות אופקית",geograph:{caption:"גיאוגרפי",latres:"רזולוצית קו רוחב",longres:"רזולוצית קו אורך",geogunit:{caption:"יחידות קואורדינטות גיאוגרפיות",decimalDegrees:"מעלות עשרוניות",decimalMinutes:"דקות עשרוניות",decimalSeconds:"שניות עשרוניות",degreesAndDecimalMinutes:"מעלות ודקות עשרוניות",degreesMinutesAndDecimalSeconds:"מעלות, דקות ושניות עשרוניות",radians:"רדיאנים",grads:"דרגות"}},planar:{caption:"מישורי"},local:{caption:"מקומי",localdes:"תיאור מקומי",localgeo:"מידע מקומי ל-Georefrence"},geodetic:{caption:"מודל גיאודטי",horizdn:{caption:"שם דאטום אופקי",nad83:"דאטום צפון אמריקאי של 1983",nad27:"דאטום צפון אמריקאי של 1927"},ellips:{caption:"שם אליפסויד",grs80:"מערכת ייחוס גיאודטי‬ת 80",clarke1866:"Clarke 1866"},semiaxis:"מחצית ציר גדול:",denflat:"מכנה של יחס השטחה"}},vertdef:{caption:"מערכת קורדינאטות אנכית",altsys:{caption:"מערכת גובה",altdatum:{caption:"שם גובה דאטום",navd88:"דאטום אנכי צפון אמריקאי של 1988",ngvd29:"דאטום אנכי גיאודטי לאומי של 1929"},altres:"רזולוציית גובה",altunits:{caption:"יחידות מרחק גובה",meters:"מטרים",feet:"רגל"},altenc:{caption:"שיטת קידוד גובה",explicit:"קואורדינטת גובה מפורשת כלולה בקואורדינטות אופקיות",implicit:"קואורדינטה משתמעת",attribute:"ערכי מאפיינים"}},depthsys:{caption:"מערכת עומק",depthdn:{caption:"שם עומק דאטום",option1:"פני שטח מקומיים",option2:"דאטום תרשים; דאטום להפחתת צליל",option3:"שפל האסטרונומי הנמוך ביותר",option4:"הגאות האסטרונומית הגבוהה ביותר",option5:"ממוצע מים נמוכים",option6:"ממוצע מים גבוהים",option7:"ממוצע גובה פני הים",option8:"דאטום של סקר קרקע",option9:"ממוצע מעיינות מים נמוכים",option10:"ממוצע מעיינות מים גבוהים",option11:"ממוצע גאות ים נמוכה",option12:"ממוצע גאות ים גבוהה",option13:"ממוצע מים נמוכים יותר",option14:"ממוצע מעיינות מים נמוכים יותר",option15:"ממוצע מים גבוהים יותר",option16:"ממוצע מים נמוכים גבוהים יותר",option17:"ממוצע מים גבוהים נמוכים יותר",option18:"גאות ושפל במולד ובמלא",option19:"מים נמוכים יותר טרופיים",option20:"גאות ושפל ברבעים",option21:"מים גבוהים",option22:"מים גבוהים יותר",option23:"מים נמוכים",option24:"דאטום מים נמוכים",option25:"מים נמוכים ביותר",option26:"מים נמוכים יותר",option27:"מים נמוכים רגילים הנמוכים ביותר",option28:"רום פני ים ממוצע יחסית לממוצע פני הים בגאות ובשפל",option29:"מים נמוכים של מעיינות הודיים",option30:"מים גבוהים, מילוי וטעינה",option31:"מים נמוכים, מילוי וטעינה",option32:"דאטום נהר קולומביה",option33:"דאטום מים נמוכים של חוף המפרץ",option34:"מים נמוכים במעיינות האזור המשווני",option35:"שפל אסטרומוני משוער",option36:"ללא תיקון"},depthres:"עומק רזולוציה",depthdu:{caption:"מרחק יחידת עומק",meters:"מטרים",feet:"רגל"},depthem:{caption:"שיטת קידוד עומק",explicit:"קואורדינטת עומק מפורשת כלולה בקואורדינטות אופקיות",implicit:"קואורדינטה משתמעת",attribute:"ערכי מאפיינים"}}}},timeinfo:{caption:"מידע על תקופת זמן",sngdate:"תאריך בודד",mdattim:"תאריכים מרובים",rngdates:"טווח תאריכים",caldate:"תאריך",time:"זמן",begdate:"תאריך התחלה",begtime:"זמן התחלה",enddate:"תאריך סיום",endtime:"זמן סיום"}});