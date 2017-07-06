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

define({documentTypes:{arcgis:{caption:"Метаданные ArcGIS",editorCaption:"Метаданные",description:""}},emptyOption:"Пустое",conditionals:{ISO19139A1_ROW4:'Если уровень иерархии элемента метаданных задан "Набор данных", необходимо задать либо ограничивающую рамку, либо географическое описание.',ISO19139A1_ROW6:"Необходимо задать Идентификатор набора данных или Имя набора данных.",ISO19139A1_ROW7:"Если выбрана опция Другие ограничения, необходимо задать Другие условия",ISO19139A1_ROW9:'Если результат – не "Набор данных" или "Последовательность", необходимо задать Описание уровня',ISO19139A1_ROW10_11_12:'Если результат – "Набор данных" или "Последовательность", необходимо указать Статус, Шаг обработки или Источник данных.',ISO19139A1_ROW15:"Если выбрано Проверить наличие точки, необходимо указать Проверить описание точки.",ISO19139A1_ROW18:"Если распределение документируется, необходимо задать Формат или Распределение/Формат.",INSPIRE_AccessLimitation:" Требуется, по крайней мере, один код допустимых ограничений или код классификации безопасности. (INSPIRE)",INSPIRE_UseLimitation:" Требуется указать как минимум одно ограничение. (INSPIRE)",INSPIRE_ConformanceResult:"Для отчета о состоянии домена требуется результат согласования. (INSPIRE)",INSPIRE_DomainConsistency:"Требуется отчет согласованности домена. (INSPIRE)",INSPIRE_LineageStatement:'Если результат – "Набор данных" или "Последовательность", необходимо указать Статус происхождения. (INSPIRE).',FGDC_DescIfTemporal:"Для временных экстентов требуется описание. (FGDC)",FGDC_Keywords:"Требуется указать раздел, тег или тематическое ключевое слово. (FGDC)",FGDC_Reports:"Требуется Полный пропуск данных и Отчет о логической согласованности. (FGDC)",FGDC_Temporal:"Требуется указать хотя бы один Временной экстент. (FGDC)",NAP_Contact:"Требуется указать Адрес, Номер телефона или Ссылку на страницу в сети/URL. (NAP)",GEN_BoundingBox:"Необходимо задать хотя бы одну Географическую ограничивающую рамку.",GEN_ReportResult:"Требуется либо отчет о согласовании, либо количественный результат.",minLessThanMax:"Минимальное значение должно быть меньше Максимального."},hints:{integerGreaterThanZero:"(введите целое значение > 0)",integerGreaterThanOne:"(введите целое значение > 1)",integer0To100:"(введите целое значение 0..100)",maxScale:"(введите целое значение > 0, например 50000)",minScale:"(введите целое значение > 0, например 150000000)",number0To100:"(введите число 0..100)",number0To360:"(введите число 0..360)",number90To90:"(введите число -90..90)",listOfDoubles:"(введите ряд чисел, для разделения используйте пробел)"},htmlEditor:{button:"Правка..."},sections:{overview:"Обзор",esri:"Esri",resource:"Источник",reference:"Литература",content:"Ресурсы",distribution:"Распространение",quality:"Качество",eainfo:"Поля",representation:"Представление",metadata:"Метаданные"},metadataStyle:{caption:"Стиль Метаданные ArcGIS",changeButton:"Изменить...",dialogTitle:"Выбор Стиля метаданных",updating:"Обновление документа...","Item Description":"Описание элемента","FGDC CSDGM Metadata":"Метаданные FGDC CSDGM","ISO 19139 Metadata Implementation Specification":"Спецификация реализации метаданных ISO 19139","ISO 19139 Metadata Implementation Specification GML3.2":"Спецификация реализации метаданных ISO 19139 GML3.2","INSPIRE Metadata Directive":"Директива по метаданным INSPIRE","North American Profile of ISO19115 2003":"Североамериканский профиль стандарта ISO19115 2003"},aggrInfo:{caption:"Информация об агрегировании",datasetHint:"Необходимо задать Идентификатор набора данных или Имя набора данных.",aggrDSIdent:"Идентификатор набора данных",aggrDSName:"Имя набора данных"},appSchInfo:{caption:"Схема приложения",asName:"Имя схемы",asSchLang:"Язык схемы",asCstLang:"Язык ограничения",asAscii:"ASCII",asGraFile:"Графический файл",asGraFile_src:"Источник файла графики",asSwDevFile:"Файл разработки ПО",asSwDevFile_src:"Исходный файл Software Development",asSwDevFiFt:"Формат файлов разработки ПО"},citation:{caption:"Ссылка",section:{titlesAndDates:"Названия & даты",links:"URL",identifiers:"Идентификаторы",presentation:"Форма",other:"Прочее",edition:"Выпуск",series:"Серии"},conditionalDate:{caption:"Дата цитирования",msg:"Требуется либо Дата создания, Дата публикации или Дата ревизии.",msg_nap:"Необходимо указать дату цитирования."},resTitle:"Название",resAltTitle:"Дополнительный заголовок",collTitle:"Общий заголовок",date:{createDate:"Дата создания",pubDate:"Дата публикации",reviseDate:"Дата ревизии",notavailDate:"Нет доступной даты",inforceDate:"Дата вступления в действие",adoptDate:"Дата принятия",deprecDate:"Дата устаревания",supersDate:"Дата замены"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Идентификатор",identCode:"Код",identAuth:"Достоверная ссылка"},resEd:"Выпуск",resEdDate:"Дата издания",datasetSeries:{seriesName:"Имя",issId:"Выпуск",artPage:"Страница"},otherCitDet:"Другие детали",contactCaption:"Данные о цитировании"},cntAddress:{caption:"Адрес",delPoint:"Точка доставки",city:"Город",adminArea:"Административная единица",postCode:"Почтовый индекс",country:"Страна",eMailAdd:"Электронная почта",addressType:{caption:"Тип адреса",postal:"Почтовый",physical:"Физический",both:"Оба"}},cntOnlineRes:{caption:"Онлайн ресурс",linkage:"URL-адрес",protocol:"Протокол",appProfile:"Профиль приложения",orName:"Имя",orDesc:"Описание"},cntPhone:{caption:"Телефон",voiceNum:"Голос",faxNum:"Факс",tddtty:"TDD/TTY?"},codeRef:{caption:"Идентификатор",identCode:"Код",idCodeSpace:"Код места",idVersion:"Версия",identAuth:"Достоверная ссылка"},constraints:{caption:"Ограничения",useLimit:"Ограничение использования",general:{caption:"Общий"},legal:{caption:"Правовая информация",accessConsts:"Ограничения доступа",useConsts:"Ограничения на использование",othConsts:"Другие ограничения"},security:{caption:"Безопасность",classSys:"Система классификации",userNote:"Пользовательская заметка",handDesc:"Описание обработки"}},contInfo:{caption:"Информация содержания",section:{CovDesc:"Описание покрытия",ImgDesc:"Описание изображения",FetCatDesc:"Каталог объектов"},attDesc:"Описание атрибута",covDim:{caption:"Диапазон или канал",seqID:"Идентификатор последовательности",seqIDType:"Тип идентификатора последовательности",dimDescrp:"Признак"},RangeDim:{caption:"Измерение диапазона"},Band:{caption:"Канал",minVal:"Минимальное значение",maxVal:"Максимальное значение",valUnit:"Единицы значения",pkResp:"Максимальный отклик",bitsPerVal:"Битов в значении",toneGrad:"Тоновая градация",sclFac:"Масштабный коэффициент",offset:"Смещение"},CovDesc:{caption:"Описание покрытия",section:{description:"Описание",rangesAndBands:"Диапазоны и каналы"}},ImgDesc:{caption:"Описание изображения",section:{description:"Описание",rangesAndBands:"Диапазоны и каналы"},illElevAng:"Угол высоты освещения",illAziAng:"Угол азимута освещения",cloudCovPer:"Процент покрытия облачностью",cmpGenQuan:"Качество сжатия",trianInd:"Индикатор триангуляции?",radCalDatAv:"Доступность данных радиометрической калибровки?",camCalInAv:"Доступность информации о калибровке камеры?",filmDistInAv:"Доступность информации об искажениях пленки?",lensDistInAv:"Доступность информации об искажениях объектива?",imagQuCode:"Код качества",prcTypCde:"Код уровня обработки"},FetCatDesc:{caption:"Каталог объектов",section:{description:"Описание",featureTypes:"Типы пространственных объектов",citation:"Ссылка"},compCode:"Соответствует стандарту ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Ссылка на каталог объектов",catFetTyps:{caption:"Тип объекта",genericName:"Имя",codeSpace:"Код места"}}},contact:{caption:"Контакт",section:{name:"Имя контакта",info:"Контактная информация",hoursAndInstructions:"Часы & инструкции"},conditionalName:{caption:"Имя контакта",msg:"Требуется либо имя ответственного лица, либо организации, либо название должности.",msg_fgdc:"Требуется имя ответственного лица, либо имя организации."},rpIndName:"Ответственное лицо",rpOrgName:"Название организации",rpPosName:"Название должности",rpCntInfo:"Контактная информация",cntHours:"Часы сервиса",cntInstr:"Инструкции по контактам"},distInfo:{caption:"Информация о распространении",section:{format:"Формат",distributor:"Дистрибьютор",transfer:"Опции переноса"},distFormat:{caption:"Формат распространения",formatName:"Название формата",formatVer:"Версия формата",formatAmdNum:"Номер поправки",formatSpec:"Спецификация",fileDecmTech:"Способ декомпрессии",formatInfo:"Информационное содержание"},distributor:{caption:"Дистрибьютор"},distTranOps:{caption:"Опции цифрового трансфера",section:{unitsAndSize:"Единицы измерения"},unitsODist:"Единицы распределения",transSize:"Размер данных для переноса",offLineMed:{caption:"Автономная среда",medDensity:"Плотность",medDenUnits:"Единицы плотности",medVol:"Объемы",medNote:"Средний узел"}},distorOrdPrc:{caption:"Процесс упорядочения",resFees:"Оплата",planAvDtTm:"Доступная дата",planAvTmPd:{caption:"Доступный период дат",tmBegin:"Дата/время начала",tmEnd:"Дата/время окончания"},ordInstr:"Инструкции заказа",ordTurn:"Цикл обработки"}},dqInfo:{caption:"Качество данных",section:{scope:"Область",report:"Отчет",lineage:"Происхождение"},dqScope:{section:{level:"Уровень",extent:"Экстент"},scpLvl:"Уровень области",scpLvlDesc:"Описание уровня",scpExt:"Экстент области действия"},report:{section:{measure:"Измерить",evaluation:"Оценка",result:"Результат",conformance:"Соответствие"},measDesc:"Описание измерения",measName:"Название измерения",measDateTm:"Дата измерения",measId:"Идентификатор измерения",evalMethDesc:"Метод оценки",evalProc:"Ссылка на процедуру",ConResult:{caption:"Отчет о согласовании",conExpl:"Описание",conSpec:"Спецификация",conPass:{caption:"Степень",_1:"Совместимость",_0:"Несовместимость"}},QuanResult:{caption:"Количественный результат",quanVal:"Значение",quanValType:"Тип значения",quanValUnit:"Единицы значения",errStat:"Статистика ошибок"}},dataLineage:{section:{statement:"Состояние",dataSource:"Источник данных",prcStep:"Шаг обработки"},statement:"Статус происхождения",dataSource:{caption:"Источник данных",section:{description:"Описание",srcRefSys:"Система привязки",srcExt:"Экстент",srcCitatn:"Ссылка"},srcDesc:"Описание источника",srcScale:{rfDenom:"Знаменатель масштаба"},srcRefSys:"Система привязки источника",srcExt:"Экстент источника",srcCitatn:"Ссылка на источник"},prcStep:{caption:"Шаг обработки",section:{description:"Описание",stepProc:"Обработчик",stepSrc:"Источник данных"},stepDesc:"Описание процесса",stepRat:"Основная причина",stepDateTm:"Дата выполнения шага процесса",stepProc:"Обработчик",stepSrc:"Источник данных"}}},eainfo:{caption:"Информация об объекте и атрибуте",section:{detailed:"Подробности",overview:"Обзор"},detailed:{caption:"Детали объектов и атрибутов",section:{enttyp:"Объект",attr:"Атрибуты"},enttyp:{caption:"Тип объекта",enttypl:"Подпись",enttypt:"Объект",enttypc:"Количество",enttypd:"Описание",enttypds:"Источник определения"},attr:{caption:"Атрибут",section:{description:"Описание",value:"Значение",domain:"Домен"},attrlabl:"Подпись",attalias:"Псевдоним",attrdef:"Описание",attrdefs:"Источник определения",attrtype:"Тип",attwidth:"Ширина",atprecis:"Точность",attscale:"Кол-во знаков",atindex:"Индексированы",attrvai:{attrva:"Объяснение значения",attrvae:"Точность значений"},attrmfrq:"Частота измерения значения",begdatea:"Дата начала значений",enddatea:"Дата окончания значений",attrdomv:{caption:"Домен",edom:{caption:"Пронумеровано",edomv:"Значение",edomvd:"Описание",edomvds:"Источник определения"},rdom:{caption:"Диапазон",rdommin:"Минимальное значение",rdommax:"Максимальное значение",rdommean:"Среднее",rdomstdv:"Стандартное отклонение",attrunit:"Единицы измерения",attrmres:"Разрешение измерения"},codesetd:{caption:"Набор кодов",codesetn:"Имя",codesets:"Источник"},udom:{caption:"Непредставимо"}}}},overview:{caption:"Обзор",eaover:"Краткая информация",eadetcit:"Ссылка"}},extent:{caption:"Экстент",section:{description:"Описание",geographic:"Географическая",temporal:"Временной",vertical:"Вертикально"},exDesc:"Описание экстента",geoEle:{caption:"Географический экстент",GeoBndBox:{caption:"Ограничивающий прямоугольник",esriExtentType:"Экстент для поиска?",exTypeCode:"Экстент содержит ресурс?",westBL:"Долгота западной границы",eastBL:"Долгота восточной границы",southBL:"Широта южной границы",northBL:"Широта северной границы"},GeoDesc:{caption:"Географическое описание",exTypeCode:"Описание содержит ресурс?",identCode:"Код"}},tempEle:{caption:"Временной экстент",TM_Period:"Временной интервал",TM_Instant:"Момент времени",tmPosition:"Дате",tmBegin:"Дата начала",tmEnd:"Дата окончания"},vertEle:{caption:"Вертикальный экстент",vertMinVal:"Минимальное значение",vertMaxVal:"Максимальное значение"}},graphOver:{caption:"Обзор графики",bgFileName:"URL-адрес обзора графики",bgFileDesc:"Обзор описания графики",bgFileType:"Обзор типа графического файла"},keywords:{caption:"Ключевые слова",section:{topicCategory:"Тема",searchKeys:"Теги",themeKeys:"Тема",placeKeys:"Место",tempKeys:"Временной",discKeys:"Дисциплина",stratKeys:"Ступень",productKeys:"Продукт",subTopicCatKeys:"Подраздел",otherKeys:"Прочее"},delimited:"Ключевые слова",searchKeys:"Теги",themeKeys:"Ключевые слова темы",placeKeys:"Ключевые слова места",tempKeys:"Временные ключевые слова",discKeys:"Ключевые слова дисциплины",stratKeys:"Ключевые слова стратов",productKeys:"Ключевые слова продукта",subTopicCatKeys:"Ключевые слова подраздела",otherKeys:"Другие ключевые слова",thesaName:"Ссылка на тезаурус",thesaLang:"Язык тезауруса"},locales:{caption:"Места",locale:"Местоположение",resTitle:"Название",idAbs:"Краткая информация"},maintenance:{caption:"Обслуживание",section:{frequency:"Частота",scope:"Область",note:"Знак"},usrDefFreq:"Пользовательская частота",dateNext:"След. обновление",maintScp:"Обновить область",upScpDesc:{caption:"Описание области",attribSet:"Атрибуты",attribIntSet:"Элементы атрибута",featSet:"Пространственные объекты",featIntSet:"Экземпляры объектов",datasetSet:"Набор данных",other:"Другие экземпляры"},maintNote:"Примечание поддержки",maintCont:"Контакт поддержки"},metadata:{section:{profile:"Профиль",details:"Область"},mdFileID:"Идентификатор файла",mdParentID:"Родительский идентификатор",datasetURI:"URI Набора данных",dataSetFn:"Функция набора данных",mdDateSt:"Дата метаданных",mdLang:"Язык метаданных",mdChar:"Настройка символов",mdHrLv:"Иерархический уровень",mdHrLvName:"Название иерархического уровня",mdContact:"Контакт метаданных",mdMaint:"Поддержка метаданных",mdConst:"Ограничения метаданных"},porCatInfo:{caption:"Ссылка на изображение"},refSysInfo:{caption:"Пространственная привязка"},resource:{section:{citation:"Ссылка",details:"Подробности",description:"Описание",keywords:"Ключевые слова",status:"Статус",resolution:"Разрешение",representation:"Представление",browse:"Обзор графики",format:"Формат",usage:"Использование",aggregateInfo:"Агрегирование",additional:"Дополнительно"},idAbs:"Описание (краткая информация)",idPurp:"Краткая информация (назначение)",suppInfo:"Дополнительная информация",idCredit:"Сведения об авторах",envirDesc:"Среда обработки",dataLang:"Язык ресурса",dataExt:"Экстент ресурса",idPoC:"Точка контакта",resMaint:"Поддержка источника",resConst:"Ограничения источника",dsFormat:"Формат ресурса",dataScale:{caption:"Масштаб данных",equScale:"Разрешение масштаба",scaleDist:"Разрешение расстояния",scaleDist_value:"Расстояние"},idSpecUse:{caption:"Использование ресурса",specUsage:"Указанное применение",usageDate:"Дата использования",usrDetLim:"Ограничения",usrCntInfo:"Контакты по использованию"}},service:{caption:"Обслуживание",svType:"Тип сервиса",svType_Name:"Имя",svAccProps:"Свойства доступа",svCouplRes:{caption:"Парный ресурс",svOpName:"Название операции",svResCitId:"Идентификатор ресурса"},svCoupleType:"Тип сдваивания"},scaleRange:{caption:"Диапазон масштабов",maxScale:"Максимальный масштаб",minScale:"Минимальный масштаб"},spatRepInfo:{caption:"Пространственное представление",section:{dimension:"Измерение",parameters:"Параметры"},numDims:"Количество измерений",tranParaAv:"Доступность параметров преобразования?",axisDimension:{caption:"Измерение",dimSize:"Размер",dimResol:{caption:"Разрешение",_value:"Значение разрешения",uom:"Единицы разрешения"}},VectSpatRep:{caption:"Вектор",geometObjs:"Геометрические объекты",geoObjCnt:"Число объектов"},GridSpatRep:{caption:"Сетка"},Georect:{caption:"Геотрансформированный",section:{centerPoint:"Центральная точка",cornerPts:"Угловые точки"},chkPtAv:"Доступность контрольной точки?",chkPtDesc:"Описание контрольной точки",ptInPixel:"Точек в пикселе",transDimDesc:"Описание измерения преобразования",transDimMap:"Сопоставление измерений преобразования",cornerPts:{caption:"Угловая точка",pos:"Позиция",gmlDesc:"Описание",gmlDescRef:"Литература",gmlIdent:"Идентификатор",codeSpace:"Кодовое пространство идентификатора"}},Georef:{caption:"С возможностью пространственной привязки",ctrlPtAv:"Наличие опорной точки?",orieParaAv:"Доступность параметров ориентации?",orieParaDs:"Описание параметра ориентации",georefPars:"Параметры пространственной привязки",paraCit:"Ссылка на параметр"},Indref:{caption:"Косвенный"}},booleanOptions:{_false:"Нет",_true:"Да"},codelist:{CountryCode:"Страна",LanguageCode:"Язык",MonetaryUnits:"Денежная единица",MonetaryUnits_empty:"Нет универсальной валюты",PresentationForm:"Форма презентации геопространственных данных FGDC",CI_PresentationFormCode:"Форма представления",CI_RoleCode:"Роль",CI_OnLineFunctionCode:"Функция",IMS_ContentType:"Тип содержания",DQ_ElementDimension:"Измерение",DQ_ElementType:"Тип отчета",DQ_EvaluationMethodTypeCode:"Тип оценки",DS_AssociationTypeCode:"Тип соединения",DS_InitiativeTypeCode:"Инициативный тип",LI_SourceType:"Тип источника",MD_CellGeometryCode:"Геометрия ячеек",MD_CharacterSetCode:"Набор символов",MD_ClassificationCode:"Классификация",MD_CoverageContentTypeCode:"Тип содержания",MD_DimensionNameTypeCode:"Тип измерения",MD_GeometricObjectTypeCode:"Тип геометрического объекта",MD_ImagingConditionCode:"Условие изображения",MD_MaintenanceFrequenceCode:"Частота обновления",MD_MediumFormatCode:"Код формата",MD_MediumNameCode:"Имя среднего",MD_PixelOrientationCode:"Ориентация пикселей",MD_ProgressCode:"Статус",MD_RestrictionCode:"Код ограничения",MD_ScopeCode:"Область",MD_SpatialRepresentationTypeCode:"Тип пространственного представления",MD_TopicCategoryCode:"Категория тем",MD_TopologyLevelCode:"Уровень топологии",RS_Dimension:"Измерение",SV_CouplingType:"Тип сдваивания",UCUM:"Единицы измерения",UCUM_Length:"Единицы расстояния"}});