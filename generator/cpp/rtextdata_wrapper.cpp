
  // Auto generated
  
  // include header:
  //#include "RTextDatawrapper.h"
  //#include "header_cpp.h"
  
    #include "rtextdata_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RTextData
    // Function: getDefaultDrawOrder
    // Source: REntityData
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_WrapperSingleton::getDefaultDrawOrder
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                REntityData::getDefaultDrawOrder(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDefaultDrawOrder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getRtti
    // Source: RTextBasedData
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_WrapperSingleton::getRtti
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RS::EntityType res = 
                
                // call static member function:
                RTextBasedData::getRtti(
              
            );
          
            // return type: RS::EntityType

            return RJSHelper_qcad::cpp2js_RS_EntityType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getRtti";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: escapeUnicode
    // Source: RTextBasedData
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_WrapperSingleton::escapeUnicode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: str (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RTextBasedData::escapeUnicode(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for escapeUnicode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: hasProxy
    // Source: RTextBasedData
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_WrapperSingleton::hasProxy
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RTextBasedData::hasProxy(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasProxy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: toEscapedText
    // Source: RTextBasedData
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RTextData_WrapperSingleton::toEscapedText
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextDocument_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RColor(handler, a2
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: textDocument (QTextDocument)
  

          // non copyable:
          QTextDocument*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextDocument_ptr(handler, a1);
        
  // convert js parameter to cpp: initialColor (RColor)
  
RColor a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a2);
        
  // convert js parameter to cpp: fontHeightFactor (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 1.0;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        
  // convert js parameter to cpp: simpleText (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RTextBasedData::toEscapedText(
              *a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toEscapedText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: toRichText
    // Source: RTextBasedData
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RTextData_WrapperSingleton::toRichText
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QFont(handler, a2
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: escapedText (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mainFont (QFont)
  
QFont a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QFont(handler, a2);
        
  // convert js parameter to cpp: fontHeightFactor (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 1.0;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RTextBasedData::toRichText(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toRichText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RTextData_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RTextData_Wrapper>("org.qcad", 1, 0, "RTextData_Wrapper");
        qmlRegisterInterface<RTextData_Wrapper>("RTextData_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RTextData* t = new RJSType_RTextData();
          global.setProperty("RJSType_RTextData", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RTextData::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RTextData_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RTextData_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RTextData_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RTextData_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RTextData_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RTextData_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RTextData_WrapperSingleton * s = new RTextData_WrapperSingleton(handler);
        engine->globalObject().setProperty("RTextData_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RTextData.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      qDebug() << "Evaluating file: " << fileName;
      QJSValue result = engine->evaluate(contents, fileName);
      if (result.isError()) {
          qWarning()
              << "Uncaught exception at line"
              << result.property("lineNumber").toInt()
              << ":" << result.toString();
      }
    }
  
    /*
    // special constructor used as prototype:
    RTextData_Wrapper::RTextData_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RTextData_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RTextData_Wrapper::RTextData_Wrapper(RJSApi& h, RTextData* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RTextData_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTextData_Wrapper"));
              //setObjectName("RTextData_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RTextData_Wrapper::~RTextData_Wrapper() {
            //RDebug::decCounter(QString("RTextData_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RTextData_Wrapper"));

            //qDebug() << "RTextData_Wrapper::~RTextData_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RTextData";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RTextData_Wrapper::initConnections() {

          //setObjectName("RTextData_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
          }
        }
      

  // constructors:
  
    // Class: RTextData
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 15
    // preceding Parameters: -1
RTextData_Wrapper::RTextData_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5, 
  const QJSValue& 
  a6, 
  const QJSValue& 
  a7, 
  const QJSValue& 
  a8, 
  const QJSValue& 
  a9, 
  const QJSValue& 
  a10, 
  const QJSValue& 
  a11, 
  const QJSValue& 
  a12, 
  const QJSValue& 
  a13, 
  const QJSValue& 
  a14, 
  const QJSValue& 
  a15
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RTextData_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RTextData_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_double(handler, a4
  )

   && RJSHelper_qcad::is_RS_VAlign(handler, a5
  )

   && RJSHelper_qcad::is_RS_HAlign(handler, a6
  )

   && RJSHelper_qcad::is_RS_TextDrawingDirection(handler, a7
  )

   && RJSHelper_qcad::is_RS_TextLineSpacingStyle(handler, a8
  )

   && RJSHelper::is_double(handler, a9
  )

   && RJSHelper::is_QString(handler, a10
  )

   && RJSHelper::is_QString(handler, a11
  )

   && RJSHelper::is_bool(handler, a12
  )

   && RJSHelper::is_bool(handler, a13
  )

   && RJSHelper::is_double(handler, a14
  )

   && RJSHelper::is_bool(handler, a15
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: position (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: alignmentPoint (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: textHeight (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: textWidth (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: verticalAlignment (RS::VAlign)
  
RS::VAlign a5_cpp;

      a5_cpp = RJSHelper_qcad::js2cpp_RS_VAlign(handler, a5);
        
  // convert js parameter to cpp: horizontalAlignment (RS::HAlign)
  
RS::HAlign a6_cpp;

      a6_cpp = RJSHelper_qcad::js2cpp_RS_HAlign(handler, a6);
        
  // convert js parameter to cpp: drawingDirection (RS::TextDrawingDirection)
  
RS::TextDrawingDirection a7_cpp;

      a7_cpp = RJSHelper_qcad::js2cpp_RS_TextDrawingDirection(handler, a7);
        
  // convert js parameter to cpp: lineSpacingStyle (RS::TextLineSpacingStyle)
  
RS::TextLineSpacingStyle a8_cpp;

      a8_cpp = RJSHelper_qcad::js2cpp_RS_TextLineSpacingStyle(handler, a8);
        
  // convert js parameter to cpp: lineSpacingFactor (double)
  
double a9_cpp;

      a9_cpp = RJSHelper::js2cpp_double(handler, a9);
        
  // convert js parameter to cpp: text (QString)
  
QString a10_cpp;

      a10_cpp = RJSHelper::js2cpp_QString(handler, a10);
        
  // convert js parameter to cpp: fontName (QString)
  
QString a11_cpp;

      a11_cpp = RJSHelper::js2cpp_QString(handler, a11);
        
  // convert js parameter to cpp: bold (bool)
  
bool a12_cpp;

      a12_cpp = RJSHelper::js2cpp_bool(handler, a12);
        
  // convert js parameter to cpp: italic (bool)
  
bool a13_cpp;

      a13_cpp = RJSHelper::js2cpp_bool(handler, a13);
        
  // convert js parameter to cpp: angle (double)
  
double a14_cpp;

      a14_cpp = RJSHelper::js2cpp_double(handler, a14);
        
  // convert js parameter to cpp: simple (bool)
  
bool a15_cpp;

      a15_cpp = RJSHelper::js2cpp_bool(handler, a15);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTextData(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    , a9_cpp
    , a10_cpp
    , a11_cpp
    , a12_cpp
    , a13_cpp
    , a14_cpp
    , a15_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RTextBasedData(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (RTextBasedData)
  
RTextBasedData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTextBasedData(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTextData(
                a1_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTextData(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

                    // no constructor without arguments defined
                    // allow constructor for prototype objects without args:
                    if (
                      a1.isUndefined()
   && a2.isUndefined()
   && a3.isUndefined()
   && a4.isUndefined()
   && a5.isUndefined()
   && a6.isUndefined()
   && a7.isUndefined()
   && a8.isUndefined()
   && a9.isUndefined()
   && a10.isUndefined()
   && a11.isUndefined()
   && a12.isUndefined()
   && a13.isUndefined()
   && a14.isUndefined()
   && a15.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RTextData";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RTextData
    // Function: getDocument
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getDocument
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RDocument* res = 
                    
                w->getDocument(
                  
                );
              
            // return type: RDocument*

            return RJSHelper_qcad::cpp2js_RDocument(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setDocument
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setDocument
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setDocument(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isPointType
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isPointType
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isPointType(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPointType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getClosestSubEntityId
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getClosestSubEntityId
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: range (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: ignoreComplex (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RObject::Id res = 
                    
                w->getClosestSubEntityId(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClosestSubEntityId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: copyAttributesFrom
    // Source: REntityData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::copyAttributesFrom
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntityData_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityData (REntityData)
  

          // non copyable:
          REntityData*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntityData_ptr(handler, a1);
        
  // convert js parameter to cpp: copyBlockId (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->copyAttributesFrom(
                  *a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for copyAttributesFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setZ
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setZ
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: z (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setZ(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setZ";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getBoundingBoxes
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getBoundingBoxes
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ignoreEmpty (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<RBox> res = 
                    
                w->getBoundingBoxes(
                  a1_cpp
    
                );
              
            // return type: QList<RBox>

            return RJSHelper_qcad::cpp2js_QList_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBoundingBoxes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getHull
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getHull
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: offset (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RPolyline res = 
                    
                w->getHull(
                  a1_cpp
    
                );
              
            // return type: RPolyline

            return RJSHelper_qcad::cpp2js_RPolyline(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHull";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isUpdatesEnabled
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isUpdatesEnabled
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isUpdatesEnabled(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isUpdatesEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setUpdatesEnabled
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setUpdatesEnabled
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setUpdatesEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUpdatesEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: cloneOnChange
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::cloneOnChange
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->cloneOnChange(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cloneOnChange";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isSelected
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isSelected
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isSelected(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSelected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isSelectedWorkingSet
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isSelectedWorkingSet
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isSelectedWorkingSet(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSelectedWorkingSet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setSelectedWorkingSet
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setSelectedWorkingSet
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setSelectedWorkingSet(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSelectedWorkingSet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getDrawOrder
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getDrawOrder
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                int res = 
                    
                w->getDrawOrder(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDrawOrder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setDrawOrder
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setDrawOrder
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: drawOrder (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setDrawOrder(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDrawOrder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setLayerId
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setLayerId
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setLayerId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayerId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getLayerId
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getLayerId
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RLayer::Id res = 
                    
                w->getLayerId(
                  
                );
              
            // return type: RLayer::Id

            return RJSHelper_qcad::cpp2js_RLayer_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setLayerName
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setLayerName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setLayerName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayerName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getLayerName
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getLayerName
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QString res = 
                    
                w->getLayerName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setBlockId
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setBlockId
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
RBlock::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setBlockId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getBlockId
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getBlockId
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RBlock::Id res = 
                    
                w->getBlockId(
                  
                );
              
            // return type: RBlock::Id

            return RJSHelper_qcad::cpp2js_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setParentId
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setParentId
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parentId (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setParentId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setParentId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getParentId
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getParentId
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RObject::Id res = 
                    
                w->getParentId(
                  
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getParentId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getBlockName
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getBlockName
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QString res = 
                    
                w->getBlockName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setLinetypeId
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setLinetypeId
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetype_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeId (RLinetype::Id)
  
RLinetype::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetype_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setLinetypeId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getLinetypeId
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getLinetypeId
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RLinetype::Id res = 
                    
                w->getLinetypeId(
                  
                );
              
            // return type: RLinetype::Id

            return RJSHelper_qcad::cpp2js_RLinetype_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setLinetypePattern
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setLinetypePattern
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetypePattern(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RLinetypePattern)
  
RLinetypePattern a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetypePattern(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setLinetypePattern(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getLinetypePattern
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getLinetypePattern
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RLinetypePattern res = 
                    
                w->getLinetypePattern(
                  
                );
              
            // return type: RLinetypePattern

            return RJSHelper_qcad::cpp2js_RLinetypePattern(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setLinetypeScale
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setLinetypeScale
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeScale (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setLinetypeScale(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypeScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getLinetypeScale
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getLinetypeScale
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                double res = 
                    
                w->getLinetypeScale(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getLineweight
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getLineweight
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RLineweight::Lineweight res = 
                    
                w->getLineweight(
                  
                );
              
            // return type: RLineweight::Lineweight

            return RJSHelper_qcad::cpp2js_RLineweight_Lineweight(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setLineweight
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setLineweight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLineweight_Lineweight(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lineweight (RLineweight::Lineweight)
  
RLineweight::Lineweight a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLineweight_Lineweight(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setLineweight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setColor
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setColor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (RColor)
  
RColor a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getColor
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getColor
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RColor res = 
                    
                w->getColor(
                  
                );
              
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getDisplayColor
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getDisplayColor
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RColor res = 
                    
                w->getDisplayColor(
                  
                );
              
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDisplayColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getInternalReferencePoints
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getInternalReferencePoints
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_ProjectionRenderingHint(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hint (RS::ProjectionRenderingHint)
  
RS::ProjectionRenderingHint a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RS::RenderTop;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RS_ProjectionRenderingHint(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<RRefPoint> res = 
                    
                w->getInternalReferencePoints(
                  a1_cpp
    
                );
              
            // return type: QList<RRefPoint>

            return RJSHelper_qcad::cpp2js_QList_RRefPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getInternalReferencePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getArcReferencePoints
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getArcReferencePoints
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_RBOX;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<RVector> res = 
                    
                w->getArcReferencePoints(
                  a1_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getArcReferencePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getIntersectionPoints
    // Source: REntityData
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getIntersectionPoints
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntityData_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper_qcad::is_RBox(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (REntityData)
  

          // non copyable:
          REntityData*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntityData_ptr(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: same (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RDEFAULT_RBOX;
          }
          else {
            a4_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a4);
          }
        
  // convert js parameter to cpp: ignoreComplex (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = true;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<RVector> res = 
                    
                w->getIntersectionPoints(
                  *a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RBox(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RDEFAULT_RBOX;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a3);
          }
        
  // convert js parameter to cpp: ignoreComplex (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = true;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<RVector> res = 
                    
                w->getIntersectionPoints(
                  *a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getVectorTo
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getVectorTo
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: strictRange (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RMAXDOUBLE;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RVector res = 
                    
                w->getVectorTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVectorTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isInside
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isInside
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: box (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isInside(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isInside";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isOnEntity
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isOnEntity
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: tolerance (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RDEFAULT_TOLERANCE_1E_MIN4;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isOnEntity(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isOnEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: clickReferencePoint
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::clickReferencePoint
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: referencePoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->clickReferencePoint(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clickReferencePoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: scaleVisualProperties
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::scaleVisualProperties
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scaleFactor (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->scaleVisualProperties(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for scaleVisualProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: stretch
    // Source: REntityData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::stretch
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPolyline(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: area (RPolyline)
  
RPolyline a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPolyline(handler, a1);
        
  // convert js parameter to cpp: offset (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->stretch(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for stretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setAutoUpdatesBlocked
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setAutoUpdatesBlocked
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setAutoUpdatesBlocked(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoUpdatesBlocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setFlag
    // Source: RTextBasedData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setFlag
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTextBasedData_TextFlag(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flag (RTextBasedData::TextFlag)
  
RTextBasedData::TextFlag a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTextBasedData_TextFlag(handler, a1);
        
  // convert js parameter to cpp: on (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setFlag(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFlag";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getFlag
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getFlag
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTextBasedData_TextFlag(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flag (RTextBasedData::TextFlag)
  
RTextBasedData::TextFlag a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTextBasedData_TextFlag(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->getFlag(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFlag";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isValid
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isValid
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isSane
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isSane
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isSane(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSane";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getBoundingBox
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getBoundingBox
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ignoreEmpty (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RBox res = 
                    
                w->getBoundingBox(
                  a1_cpp
    
                );
              
            // return type: RBox

            return RJSHelper_qcad::cpp2js_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBoundingBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getWidth
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getWidth
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                double res = 
                    
                w->getWidth(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getHeight
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getHeight
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                double res = 
                    
                w->getHeight(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: sync
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::sync
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTextBasedData(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (RTextBasedData)
  
RTextBasedData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTextBasedData(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->sync(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for sync";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getPointOnEntity
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getPointOnEntity
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RVector res = 
                    
                w->getPointOnEntity(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointOnEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getEndPoints
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getEndPoints
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_RBOX;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<RVector> res = 
                    
                w->getEndPoints(
                  a1_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEndPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getMiddlePoints
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getMiddlePoints
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_RBOX;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<RVector> res = 
                    
                w->getMiddlePoints(
                  a1_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMiddlePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getCenterPoints
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getCenterPoints
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_RBOX;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<RVector> res = 
                    
                w->getCenterPoints(
                  a1_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCenterPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getPointsWithDistanceToEnd
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getPointsWithDistanceToEnd
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RBox(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: distance (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: from (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RS::FromAny;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RDEFAULT_RBOX;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<RVector> res = 
                    
                w->getPointsWithDistanceToEnd(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointsWithDistanceToEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getDistanceTo
    // Source: RTextBasedData
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getDistanceTo
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_double(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: range (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 0.0;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        
  // convert js parameter to cpp: draft (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: strictRange (double)
  
double a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = RMAXDOUBLE;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_double(handler, a5);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                double res = 
                    
                w->getDistanceTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDistanceTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: intersectsWith
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::intersectsWith
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->intersectsWith(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersectsWith";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getPosition
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getPosition
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RVector res = 
                    
                w->getPosition(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setPosition
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setPosition
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: position (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getAlignmentPoint
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getAlignmentPoint
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RVector res = 
                    
                w->getAlignmentPoint(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAlignmentPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setAlignmentPoint
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setAlignmentPoint
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: alignmentPoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setAlignmentPoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAlignmentPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setText
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setText
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setText(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getFontName
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getFontName
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QString res = 
                    
                w->getFontName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFontName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setFontName
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setFontName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fontName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setFontName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getFontFile
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getFontFile
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QString res = 
                    
                w->getFontFile(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFontFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setFontFile
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setFontFile
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fontFile (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setFontFile(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isBold
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isBold
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isBold(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setBold
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setBold
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setBold(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isItalic
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isItalic
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isItalic(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isItalic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setItalic
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setItalic
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setItalic(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setItalic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getTextHeight
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getTextHeight
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                double res = 
                    
                w->getTextHeight(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTextHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setTextHeight
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setTextHeight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setTextHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getTextWidth
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getTextWidth
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                double res = 
                    
                w->getTextWidth(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTextWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setTextWidth
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setTextWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setTextWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setVAlign
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setVAlign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_VAlign(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: valign (RS::VAlign)
  
RS::VAlign a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_VAlign(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setVAlign(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVAlign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getVAlign
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getVAlign
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RS::VAlign res = 
                    
                w->getVAlign(
                  
                );
              
            // return type: RS::VAlign

            return RJSHelper_qcad::cpp2js_RS_VAlign(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVAlign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setHAlign
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setHAlign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_HAlign(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: halign (RS::HAlign)
  
RS::HAlign a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_HAlign(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setHAlign(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHAlign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getHAlign
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getHAlign
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RS::HAlign res = 
                    
                w->getHAlign(
                  
                );
              
            // return type: RS::HAlign

            return RJSHelper_qcad::cpp2js_RS_HAlign(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHAlign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setDrawingDirection
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setDrawingDirection
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_TextDrawingDirection(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: drawingDirection (RS::TextDrawingDirection)
  
RS::TextDrawingDirection a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_TextDrawingDirection(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setDrawingDirection(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDrawingDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getDrawingDirection
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getDrawingDirection
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RS::TextDrawingDirection res = 
                    
                w->getDrawingDirection(
                  
                );
              
            // return type: RS::TextDrawingDirection

            return RJSHelper_qcad::cpp2js_RS_TextDrawingDirection(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDrawingDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setLineSpacingStyle
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setLineSpacingStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_TextLineSpacingStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lineSpacingStyle (RS::TextLineSpacingStyle)
  
RS::TextLineSpacingStyle a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_TextLineSpacingStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setLineSpacingStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLineSpacingStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getLineSpacingStyle
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getLineSpacingStyle
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RS::TextLineSpacingStyle res = 
                    
                w->getLineSpacingStyle(
                  
                );
              
            // return type: RS::TextLineSpacingStyle

            return RJSHelper_qcad::cpp2js_RS_TextLineSpacingStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLineSpacingStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setLineSpacingFactor
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setLineSpacingFactor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lineSpacingFactor (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setLineSpacingFactor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLineSpacingFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getLineSpacingFactor
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getLineSpacingFactor
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                double res = 
                    
                w->getLineSpacingFactor(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLineSpacingFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setAngle
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setAngle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: angle (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setAngle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getAngle
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getAngle
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                double res = 
                    
                w->getAngle(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setXScale
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setXScale
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: xScale (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setXScale(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setXScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getXScale
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getXScale
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                double res = 
                    
                w->getXScale(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getXScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setSimple
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setSimple
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setSimple(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSimple";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isSimple
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isSimple
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isSimple(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSimple";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setBackward
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setBackward
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setBackward(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBackward";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isBackward
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isBackward
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isBackward(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBackward";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setUpsideDown
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setUpsideDown
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setUpsideDown(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUpsideDown";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isUpsideDown
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isUpsideDown
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isUpsideDown(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isUpsideDown";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setDimensionLabel
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setDimensionLabel
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setDimensionLabel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimensionLabel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isDimensionLabel
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isDimensionLabel
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isDimensionLabel(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDimensionLabel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setSelected
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setSelected
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setSelected(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSelected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: setHighlighted
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::setHighlighted
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->setHighlighted(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHighlighted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isHighlighted
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isHighlighted
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isHighlighted(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isHighlighted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getReferencePoints
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getReferencePoints
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_ProjectionRenderingHint(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hint (RS::ProjectionRenderingHint)
  
RS::ProjectionRenderingHint a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RS::RenderTop;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RS_ProjectionRenderingHint(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<RRefPoint> res = 
                    
                w->getReferencePoints(
                  a1_cpp
    
                );
              
            // return type: QList<RRefPoint>

            return RJSHelper_qcad::cpp2js_QList_RRefPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getReferencePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: moveReferencePoint
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::moveReferencePoint
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper::is_Qt_KeyboardModifiers(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: referencePoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: targetPoint (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: modifiers (Qt::KeyboardModifiers)
  
Qt::KeyboardModifiers a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::NoModifier;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_Qt_KeyboardModifiers(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->moveReferencePoint(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for moveReferencePoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: move
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::move
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: offset (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->move(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for move";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: rotate
    // Source: RTextBasedData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::rotate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rotation (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->rotate(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rotate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: scale
    // Source: RTextBasedData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::scale
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scaleFactors (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->scale(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: mirror
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::mirror
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: axis (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->mirror(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mirror";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: flipHorizontal
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::flipHorizontal
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->flipHorizontal(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for flipHorizontal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: flipVertical
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::flipVertical
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->flipVertical(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for flipVertical";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getText
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getText
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QString res = 
                    
                w->getText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getRenderedText
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getRenderedText
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: escapeUnicode (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QString res = 
                    
                w->getRenderedText(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getRenderedText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getPlainText
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getPlainText
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QString res = 
                    
                w->getPlainText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPlainText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getEscapedText
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getEscapedText
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: escapeUnicode (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QString res = 
                    
                w->getEscapedText(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEscapedText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getMainFont
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getMainFont
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QFont res = 
                    
                w->getMainFont(
                  
                );
              
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMainFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: update
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::update
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layout (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->update(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->update(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for update";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: isDirty
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::isDirty
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                bool res = 
                    
                w->isDirty(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDirty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getPainterPaths
    // Source: RTextBasedData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getPainterPaths
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: draft (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        
  // convert js parameter to cpp: pixelSizeHint (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_MIN1;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<RPainterPath> res = 
                    
                w->getPainterPaths(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QList<RPainterPath>

            return RJSHelper_qcad::cpp2js_QList_RPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPainterPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getShapes
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getShapes
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_RBOX;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
          }
        
  // convert js parameter to cpp: ignoreComplex (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: segment (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<QSharedPointer<RShape>> res = 
                    
                w->getShapes(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QList<QSharedPointer<RShape>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getShapes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getExploded
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getExploded
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<QSharedPointer<RShape>> res = 
                    
                w->getExploded(
                  
                );
              
            // return type: QList<QSharedPointer<RShape>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getExploded";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getClosestShape
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getClosestShape
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: range (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RNANDOUBLE;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        
  // convert js parameter to cpp: ignoreComplex (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QSharedPointer<RShape> res = 
                    
                w->getClosestShape(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QSharedPointer<RShape>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClosestShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getClosestPointOnEntity
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getClosestPointOnEntity
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: range (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RVector res = 
                    
                w->getClosestPointOnEntity(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClosestPointOnEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getTextLayouts
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getTextLayouts
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<RTextLayout> res = 
                    
                w->getTextLayouts(
                  
                );
              
            // return type: QList<RTextLayout>

            return RJSHelper_qcad::cpp2js_QList_RTextLayout(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTextLayouts";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getSimpleTextBlocks
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getSimpleTextBlocks
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                QList<RTextBasedData> res = 
                    
                w->getSimpleTextBlocks(
                  
                );
              
            // return type: QList<RTextBasedData>

            return RJSHelper_qcad::cpp2js_QList_RTextBasedData(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSimpleTextBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: to2D
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::to2D
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                
                w->to2D(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for to2D";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTextData
    // Function: getType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTextData_Wrapper::getType
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTextData* w = getWrapped();
                RS::EntityType res = 
                    
                w->getType(
                  
                );
              
            // return type: RS::EntityType

            return RJSHelper_qcad::cpp2js_RS_EntityType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getType";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  