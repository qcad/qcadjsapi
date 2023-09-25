
  // Auto generated
  
  // include header:
  //#include "RAttributeDefinitionDatawrapper.h"
  //#include "header_cpp.h"
  
    #include "rattributedefinitiondata_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RAttributeDefinitionData
    // Function: getRtti
    // Source: RTextBasedData
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_WrapperSingleton::getRtti
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
            
    // Class: RAttributeDefinitionData
    // Function: escapeUnicode
    // Source: RTextBasedData
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_WrapperSingleton::escapeUnicode
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
            
    // Class: RAttributeDefinitionData
    // Function: hasProxy
    // Source: RTextBasedData
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_WrapperSingleton::hasProxy
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
            
    // Class: RAttributeDefinitionData
    // Function: toEscapedText
    // Source: RTextBasedData
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_WrapperSingleton::toEscapedText
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
            
    // Class: RAttributeDefinitionData
    // Function: toRichText
    // Source: RTextBasedData
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_WrapperSingleton::toRichText
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
            
    void RAttributeDefinitionData_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RAttributeDefinitionData_Wrapper>("org.qcad", 1, 0, "RAttributeDefinitionData_Wrapper");
        qmlRegisterInterface<RAttributeDefinitionData_Wrapper>("RAttributeDefinitionData_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RAttributeDefinitionData* t = new RJSType_RAttributeDefinitionData();
          global.setProperty("RJSType_RAttributeDefinitionData", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RAttributeDefinitionData::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RAttributeDefinitionData_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RAttributeDefinitionData_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RAttributeDefinitionData_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RAttributeDefinitionData_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RAttributeDefinitionData_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RAttributeDefinitionData_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RAttributeDefinitionData_WrapperSingleton * s = new RAttributeDefinitionData_WrapperSingleton(handler);
        engine->globalObject().setProperty("RAttributeDefinitionData_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RAttributeDefinitionData.js";
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
    RAttributeDefinitionData_Wrapper::RAttributeDefinitionData_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RAttributeDefinitionData_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RAttributeDefinitionData_Wrapper::RAttributeDefinitionData_Wrapper(RJSApi& h, RAttributeDefinitionData* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RAttributeDefinitionData_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RAttributeDefinitionData_Wrapper"));
              //setObjectName("RAttributeDefinitionData_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RAttributeDefinitionData_Wrapper::~RAttributeDefinitionData_Wrapper() {
            //RDebug::decCounter(QString("RAttributeDefinitionData_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RAttributeDefinitionData_Wrapper"));

            //qDebug() << "RAttributeDefinitionData_Wrapper::~RAttributeDefinitionData_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RAttributeDefinitionData";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RAttributeDefinitionData_Wrapper::initConnections() {

          //setObjectName("RAttributeDefinitionData_Wrapper");

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
  
    // Class: RAttributeDefinitionData
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
RAttributeDefinitionData_Wrapper::RAttributeDefinitionData_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RAttributeDefinitionData_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RAttributeDefinitionData_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTextBasedData(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: textData (RTextBasedData)
  
RTextBasedData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTextBasedData(handler, a1);
        
  // convert js parameter to cpp: tag (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: prompt (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RAttributeDefinitionData(
                a1_cpp
    , a2_cpp
    , a3_cpp
    
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

        
            wrapped = new RAttributeDefinitionData(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RAttributeDefinitionData";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RAttributeDefinitionData
    // Function: setFlag
    // Source: RTextBasedData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setFlag
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
                RAttributeDefinitionData* w = getWrapped();
                
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
            
    // Class: RAttributeDefinitionData
    // Function: getFlag
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getFlag
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: isValid
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::isValid
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: isSane
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::isSane
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getBoundingBox
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getBoundingBox
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getWidth
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getWidth
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getHeight
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getHeight
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: sync
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::sync
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->sync(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for sync";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getPointOnEntity
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getPointOnEntity
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getEndPoints
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getEndPoints
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getMiddlePoints
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getMiddlePoints
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getCenterPoints
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getCenterPoints
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getPointsWithDistanceToEnd
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getPointsWithDistanceToEnd
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getDistanceTo
    // Source: RTextBasedData
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getDistanceTo
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: intersectsWith
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::intersectsWith
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getPosition
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getPosition
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setPosition
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setPosition
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getAlignmentPoint
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getAlignmentPoint
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setAlignmentPoint
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setAlignmentPoint
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setAlignmentPoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAlignmentPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: setText
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setText
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setText(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getFontName
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getFontName
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setFontName
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setFontName
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setFontName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getFontFile
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getFontFile
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setFontFile
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setFontFile
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setFontFile(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: isBold
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::isBold
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setBold
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setBold
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setBold(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: isItalic
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::isItalic
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setItalic
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setItalic
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setItalic(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setItalic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getTextHeight
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getTextHeight
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setTextHeight
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setTextHeight
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setTextHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getTextWidth
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getTextWidth
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setTextWidth
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setTextWidth
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setTextWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: setVAlign
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setVAlign
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setVAlign(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVAlign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getVAlign
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getVAlign
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setHAlign
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setHAlign
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setHAlign(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHAlign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getHAlign
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getHAlign
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setDrawingDirection
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setDrawingDirection
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setDrawingDirection(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDrawingDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getDrawingDirection
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getDrawingDirection
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setLineSpacingStyle
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setLineSpacingStyle
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setLineSpacingStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLineSpacingStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getLineSpacingStyle
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getLineSpacingStyle
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setLineSpacingFactor
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setLineSpacingFactor
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setLineSpacingFactor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLineSpacingFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getLineSpacingFactor
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getLineSpacingFactor
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setAngle
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setAngle
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setAngle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getAngle
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getAngle
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setXScale
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setXScale
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setXScale(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setXScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getXScale
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getXScale
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setSimple
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setSimple
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setSimple(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSimple";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: isSimple
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::isSimple
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setBackward
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setBackward
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setBackward(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBackward";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: isBackward
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::isBackward
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setUpsideDown
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setUpsideDown
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setUpsideDown(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUpsideDown";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: isUpsideDown
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::isUpsideDown
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setDimensionLabel
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setDimensionLabel
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setDimensionLabel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimensionLabel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: isDimensionLabel
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::isDimensionLabel
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: setSelected
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setSelected
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setSelected(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSelected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: setHighlighted
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setHighlighted
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setHighlighted(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHighlighted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: isHighlighted
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::isHighlighted
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getReferencePoints
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getReferencePoints
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: moveReferencePoint
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::moveReferencePoint
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: move
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::move
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: rotate
    // Source: RTextBasedData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::rotate
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: scale
    // Source: RTextBasedData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::scale
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: mirror
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::mirror
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: flipHorizontal
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::flipHorizontal
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: flipVertical
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::flipVertical
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getText
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getText
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getPlainText
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getPlainText
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getEscapedText
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getEscapedText
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getMainFont
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getMainFont
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: update
    // Source: RTextBasedData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::update
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
                RAttributeDefinitionData* w = getWrapped();
                
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->update(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for update";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: isDirty
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::isDirty
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getPainterPaths
    // Source: RTextBasedData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getPainterPaths
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getShapes
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getShapes
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getExploded
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getExploded
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getClosestShape
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getClosestShape
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getClosestPointOnEntity
    // Source: RTextBasedData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getClosestPointOnEntity
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getTextLayouts
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getTextLayouts
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getSimpleTextBlocks
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getSimpleTextBlocks
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: to2D
    // Source: RTextBasedData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::to2D
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->to2D(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for to2D";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getType
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
                RAttributeDefinitionData* w = getWrapped();
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
            
    // Class: RAttributeDefinitionData
    // Function: getTag
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getTag
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
                RAttributeDefinitionData* w = getWrapped();
                QString res = 
                    
                w->getTag(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTag";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: setTag
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setTag
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
    
  // convert js parameter to cpp: t (QString)
  
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setTag(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTag";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getPrompt
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getPrompt
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
                RAttributeDefinitionData* w = getWrapped();
                QString res = 
                    
                w->getPrompt(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPrompt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: setPrompt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setPrompt
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
    
  // convert js parameter to cpp: p (QString)
  
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setPrompt(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPrompt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: isInvisible
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::isInvisible
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
                RAttributeDefinitionData* w = getWrapped();
                bool res = 
                    
                w->isInvisible(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isInvisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: setInvisible
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::setInvisible
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
                RAttributeDefinitionData* w = getWrapped();
                
                w->setInvisible(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setInvisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAttributeDefinitionData
    // Function: getRenderedText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAttributeDefinitionData_Wrapper::getRenderedText
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
    
  // convert js parameter to cpp: escUnicode (bool)
  
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
                RAttributeDefinitionData* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  