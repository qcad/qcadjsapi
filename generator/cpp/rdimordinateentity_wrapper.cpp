
  // Auto generated
  
  // include header:
  //#include "RDimOrdinateEntitywrapper.h"
  //#include "header_cpp.h"
  
    #include "rdimordinateentity_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RDimOrdinateEntity*> RDimOrdinateEntity_Wrapper::basecasters_RDimOrdinateEntity;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RDimOrdinateEntity
    // Function: setCustomPropertyAttributes
    // Source: RObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_WrapperSingleton::setCustomPropertyAttributes
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

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper_qcad::is_RPropertyAttributes(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: title (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: key (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: att (RPropertyAttributes)
  
RPropertyAttributes a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RPropertyAttributes(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RObject::setCustomPropertyAttributes(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCustomPropertyAttributes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getCustomPropertyAttributes
    // Source: RObject
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_WrapperSingleton::getCustomPropertyAttributes
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: title (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: key (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RPropertyAttributes res = 
                
                // call static member function:
                RObject::getCustomPropertyAttributes(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: RPropertyAttributes

            return RJSHelper_qcad::cpp2js_RPropertyAttributes(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCustomPropertyAttributes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isComplex
    // Source: REntity
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_WrapperSingleton::isComplex
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_EntityType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (RS::EntityType)
  
RS::EntityType a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                REntity::isComplex(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isComplex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isDimension
    // Source: REntity
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_WrapperSingleton::isDimension
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_EntityType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (RS::EntityType)
  
RS::EntityType a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                REntity::isDimension(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDimension";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isTextBased
    // Source: REntity
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_WrapperSingleton::isTextBased
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_EntityType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (RS::EntityType)
  
RS::EntityType a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                REntity::isTextBased(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTextBased";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: renderDimensionText
    // Source: RDimensionEntity
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_WrapperSingleton::renderDimensionText
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
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RExporter_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RTextData(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: e (RExporter)
  

          // non copyable:
          RExporter*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RExporter_ptr(handler, a1);
        
  // convert js parameter to cpp: doc (RDocument)
  

          // pointer:
          RDocument*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a2);
        
  // convert js parameter to cpp: textData (RTextData)
  
RTextData a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RTextData(handler, a3);
        
  // convert js parameter to cpp: isSelected (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: forceSelected (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = false;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RDimensionEntity::renderDimensionText(
              *a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for renderDimensionText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getDimensionBlockNames
    // Source: RDimensionEntity
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_WrapperSingleton::getDimensionBlockNames
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
    
  // convert js parameter to cpp: doc (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QSet<QString> res = 
                
                // call static member function:
                RDimensionEntity::getDimensionBlockNames(
              a1_cpp
    
            );
          
            // return type: QSet<QString>

            return RJSHelper::cpp2js_QSet_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimensionBlockNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: init
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_WrapperSingleton::init
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RDimOrdinateEntity::init(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for init";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getRtti
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_WrapperSingleton::getRtti
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RS::EntityType res = 
                
                // call static member function:
                RDimOrdinateEntity::getRtti(
              
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
            
    // Class: RDimOrdinateEntity
    // Function: getStaticPropertyTypeIds
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_WrapperSingleton::getStaticPropertyTypeIds
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QSet<RPropertyTypeId> res = 
                
                // call static member function:
                RDimOrdinateEntity::getStaticPropertyTypeIds(
              
            );
          
            // return type: QSet<RPropertyTypeId>

            return RJSHelper_qcad::cpp2js_QSet_RPropertyTypeId(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getStaticPropertyTypeIds";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RDimOrdinateEntity_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RDimOrdinateEntity_Wrapper>("org.qcad", 1, 0, "RDimOrdinateEntity_Wrapper");
        qmlRegisterInterface<RDimOrdinateEntity_Wrapper>("RDimOrdinateEntity_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RDimOrdinateEntity* t = new RJSType_RDimOrdinateEntity();
          global.setProperty("RJSType_RDimOrdinateEntity", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RDimOrdinateEntity::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RDimOrdinateEntity_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RDimOrdinateEntity_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RDimOrdinateEntity_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RDimOrdinateEntity_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RDimOrdinateEntity_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RDimOrdinateEntity_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RDimOrdinateEntity_WrapperSingleton * s = new RDimOrdinateEntity_WrapperSingleton(handler);
        engine->globalObject().setProperty("RDimOrdinateEntity_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RDimOrdinateEntity.js";
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
    RDimOrdinateEntity_Wrapper::RDimOrdinateEntity_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RDimOrdinateEntity_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RDimOrdinateEntity_Wrapper::RDimOrdinateEntity_Wrapper(RJSApi& h, RDimOrdinateEntity* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RDimOrdinateEntity_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RDimOrdinateEntity_Wrapper"));
              //setObjectName("RDimOrdinateEntity_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          
        // special constructor to wrap existing object from shared pointer:
        RDimOrdinateEntity_Wrapper::RDimOrdinateEntity_Wrapper(RJSApi& h, QSharedPointer<RDimOrdinateEntity> o) : RJSWrapperObj(h), wrapped(nullptr), spWrapped(o), wrappedCreated(false) {
              //RDebug::incCounter(QString("RDimOrdinateEntity_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RDimOrdinateEntity_Wrapper"));
              //setObjectName("RDimOrdinateEntity_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RDimOrdinateEntity_Wrapper::~RDimOrdinateEntity_Wrapper() {
            //RDebug::decCounter(QString("RDimOrdinateEntity_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RDimOrdinateEntity_Wrapper"));

            //qDebug() << "RDimOrdinateEntity_Wrapper::~RDimOrdinateEntity_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RDimOrdinateEntity";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RDimOrdinateEntity_Wrapper::initConnections() {

          //setObjectName("RDimOrdinateEntity_Wrapper");

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
  
    // Class: RDimOrdinateEntity
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
RDimOrdinateEntity_Wrapper::RDimOrdinateEntity_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RDimOrdinateEntity_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RDimOrdinateEntity_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_RDimOrdinateData(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        
  // convert js parameter to cpp: data (RDimOrdinateData)
  
RDimOrdinateData a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RDimOrdinateData(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RDimOrdinateEntity(
                a1_cpp
    , a2_cpp
    
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RDimOrdinateEntity";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RDimOrdinateEntity
    // Function: mustAlwaysClone
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::mustAlwaysClone
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->mustAlwaysClone(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mustAlwaysClone";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getDocument
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getDocument
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: setFlag
    // Source: RObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setFlag
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flag (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
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
                RDimOrdinateEntity* w = getWrapped();
                
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
            
    // Class: RDimOrdinateEntity
    // Function: getFlag
    // Source: RObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getFlag
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flag (int)
  
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getId
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getId
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
                RDimOrdinateEntity* w = getWrapped();
                RObject::Id res = 
                    
                w->getId(
                  
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getHandle
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getHandle
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
                RDimOrdinateEntity* w = getWrapped();
                RObject::Handle res = 
                    
                w->getHandle(
                  
                );
              
            // return type: RObject::Handle

            return RJSHelper_qcad::cpp2js_RObject_Handle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHandle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isProtected
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isProtected
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->isProtected(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isProtected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setProtected
    // Source: RObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setProtected
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setProtected(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProtected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isInvisible
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isInvisible
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: setInvisible
    // Source: RObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setInvisible
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setInvisible(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setInvisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isUndone
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isUndone
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->isUndone(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isUndone";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isWorkingSet
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isWorkingSet
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->isWorkingSet(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWorkingSet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setWorkingSet
    // Source: RObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setWorkingSet
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setWorkingSet(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWorkingSet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getPropertyTypeIds
    // Source: RObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getPropertyTypeIds
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPropertyAttributes_Option(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: option (RPropertyAttributes::Option)
  
RPropertyAttributes::Option a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RPropertyAttributes::NoOptions;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RPropertyAttributes_Option(handler, a1);
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
                RDimOrdinateEntity* w = getWrapped();
                QSet<RPropertyTypeId> res = 
                    
                w->getPropertyTypeIds(
                  a1_cpp
    
                );
              
            // return type: QSet<RPropertyTypeId>

            return RJSHelper_qcad::cpp2js_QSet_RPropertyTypeId(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPropertyTypeIds";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getCustomPropertyTypeIds
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getCustomPropertyTypeIds
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
                RDimOrdinateEntity* w = getWrapped();
                QSet<RPropertyTypeId> res = 
                    
                w->getCustomPropertyTypeIds(
                  
                );
              
            // return type: QSet<RPropertyTypeId>

            return RJSHelper_qcad::cpp2js_QSet_RPropertyTypeId(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCustomPropertyTypeIds";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: hasPropertyType
    // Source: RObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::hasPropertyType
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPropertyTypeId(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyTypeId (RPropertyTypeId)
  
RPropertyTypeId a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyTypeId(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->hasPropertyType(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasPropertyType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: hasCustomProperties
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::hasCustomProperties
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->hasCustomProperties(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasCustomProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: hasCustomProperty
    // Source: RObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::hasCustomProperty
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: title (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: key (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->hasCustomProperty(
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

                  qWarning() << "no matching function variant found for hasCustomProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getCustomProperty
    // Source: RObject
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getCustomProperty
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QVariant(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: title (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: key (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: defaultValue (QVariant)
  
QVariant a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RDEFAULT_QVARIANT;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QVariant(handler, a3);
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
                RDimOrdinateEntity* w = getWrapped();
                QVariant res = 
                    
                w->getCustomProperty(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCustomProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getCustomDoubleProperty
    // Source: RObject
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getCustomDoubleProperty
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: title (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: key (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: defaultValue (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimOrdinateEntity* w = getWrapped();
                double res = 
                    
                w->getCustomDoubleProperty(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCustomDoubleProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getCustomIntProperty
    // Source: RObject
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getCustomIntProperty
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: title (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: key (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: defaultValue (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimOrdinateEntity* w = getWrapped();
                int res = 
                    
                w->getCustomIntProperty(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCustomIntProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getCustomBoolProperty
    // Source: RObject
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getCustomBoolProperty
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: title (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: key (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: defaultValue (bool)
  
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->getCustomBoolProperty(
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

                  qWarning() << "no matching function variant found for getCustomBoolProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setCustomProperty
    // Source: RObject
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setCustomProperty
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

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QVariant(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: title (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: key (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QVariant(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimOrdinateEntity* w = getWrapped();
                
                w->setCustomProperty(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCustomProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: removeCustomProperty
    // Source: RObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::removeCustomProperty
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: title (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: key (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimOrdinateEntity* w = getWrapped();
                
                w->removeCustomProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeCustomProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getCustomPropertyTitles
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getCustomPropertyTitles
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
                RDimOrdinateEntity* w = getWrapped();
                QStringList res = 
                    
                w->getCustomPropertyTitles(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCustomPropertyTitles";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getCustomPropertyKeys
    // Source: RObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getCustomPropertyKeys
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: title (QString)
  
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
                RDimOrdinateEntity* w = getWrapped();
                QStringList res = 
                    
                w->getCustomPropertyKeys(
                  a1_cpp
    
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCustomPropertyKeys";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: copyCustomPropertiesFrom
    // Source: RObject
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::copyCustomPropertiesFrom
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
  a5, 
  const QJSValue& 
  a6
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper::is_QStringList(handler, a4
    , true
  
  )

   && RJSHelper::is_QString(handler, a5
    , true
  
  )

   && RJSHelper::is_QString(handler, a6
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (RObject)
  

          // pointer:
          RObject*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_ptr(handler, a1);
        
  // convert js parameter to cpp: title (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_QSTRING;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        
  // convert js parameter to cpp: overwrite (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: ignoreList (QStringList)
  
QStringList a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RDEFAULT_QSTRINGLIST;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QStringList(handler, a4);
          }
        
  // convert js parameter to cpp: mapKeyFrom (QString)
  
QString a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = RDEFAULT_QSTRING;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_QString(handler, a5);
          }
        
  // convert js parameter to cpp: mapKeyTo (QString)
  
QString a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = RDEFAULT_QSTRING;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_QString(handler, a6);
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->copyCustomPropertiesFrom(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for copyCustomPropertiesFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: dump
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::dump
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->dump(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dump";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: validate
    // Source: RObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::validate
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->validate(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for validate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setDocument
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setDocument
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setDocument(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getType
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getType
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: isPointType
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isPointType
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: isValid
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isValid
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: isSane
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isSane
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: isSelected
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isSelected
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: setSelected
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setSelected
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setSelected(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSelected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isSelectedWorkingSet
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isSelectedWorkingSet
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: setSelectedWorkingSet
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setSelectedWorkingSet
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setSelectedWorkingSet(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSelectedWorkingSet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isSelectable
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isSelectable
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->isSelectable(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSelectable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isUpdatesEnabled
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isUpdatesEnabled
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: setUpdatesEnabled
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setUpdatesEnabled
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setUpdatesEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUpdatesEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: cloneOnChange
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::cloneOnChange
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: setDrawOrder
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setDrawOrder
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setDrawOrder(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDrawOrder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getDrawOrder
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getDrawOrder
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: setLayerId
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setLayerId
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setLayerId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayerId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setLayerName
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setLayerName
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
    
  // convert js parameter to cpp: n (QString)
  
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setLayerName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayerName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getLayerId
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getLayerId
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getLayerName
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getLayerName
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: setBlockId
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setBlockId
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setBlockId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getBlockId
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getBlockId
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getBlockName
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getBlockName
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getParentId
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getParentId
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
                RDimOrdinateEntity* w = getWrapped();
                REntity::Id res = 
                    
                w->getParentId(
                  
                );
              
            // return type: REntity::Id

            return RJSHelper_qcad::cpp2js_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getParentId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setLinetypeId
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setLinetypeId
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setLinetypeId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setLinetypePattern
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setLinetypePattern
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
    
  // convert js parameter to cpp: linetypePattern (RLinetypePattern)
  
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setLinetypePattern(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getLinetypeId
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getLinetypeId
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getLinetypePattern
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getLinetypePattern
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: setLinetypeScale
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setLinetypeScale
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setLinetypeScale(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypeScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getLinetypeScale
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getLinetypeScale
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: setLineweight
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setLineweight
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setLineweight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getLineweight
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getLineweight
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: setColor
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setColor
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getColor
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getColor
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getDisplayColor
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getDisplayColor
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: copyAttributesFrom
    // Source: REntity
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::copyAttributesFrom
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (REntity)
  

          // pointer:
          REntity*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a1);
        
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->copyAttributesFrom(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

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
                RDimOrdinateEntity* w = getWrapped();
                
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
            
    // Class: RDimOrdinateEntity
    // Function: getBoundingBox
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getBoundingBox
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: to2D
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::to2D
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->to2D(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for to2D";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setZ
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setZ
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setZ(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setZ";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getBoundingBoxes
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getBoundingBoxes
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getHull
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getHull
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getShapes
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getShapes
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getClosestSubEntityId
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getClosestSubEntityId
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getClosestShape
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getClosestShape
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getClosestSimpleShape
    // Source: REntity
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getClosestSimpleShape
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
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
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
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimOrdinateEntity* w = getWrapped();
                QSharedPointer<RShape> res = 
                    
                w->getClosestSimpleShape(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSharedPointer<RShape>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClosestSimpleShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isInside
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isInside
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: isOnEntity
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isOnEntity
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: intersectsWith
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::intersectsWith
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getDistanceTo
    // Source: REntity
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getDistanceTo
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getVectorTo
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getVectorTo
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getInternalReferencePoints
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getInternalReferencePoints
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getReferencePoints
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getReferencePoints
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getPointOnEntity
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getPointOnEntity
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getEndPoints
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getEndPoints
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getMiddlePoints
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getMiddlePoints
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getCenterPoints
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getCenterPoints
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getClosestPointOnEntity
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getClosestPointOnEntity
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
    
  // convert js parameter to cpp: point (RVector)
  
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
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getPointsWithDistanceToEnd
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getPointsWithDistanceToEnd
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getIntersectionPoints
    // Source: REntity
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getIntersectionPoints
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
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_ptr(handler, a1
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
    
  // convert js parameter to cpp: other (REntity)
  

          // non copyable:
          REntity*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a1);
        
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
                RDimOrdinateEntity* w = getWrapped();
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getIntersectionPointsWithShape
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getIntersectionPointsWithShape
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
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RBox(handler, a3
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
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimOrdinateEntity* w = getWrapped();
                QList<RVector> res = 
                    
                w->getIntersectionPointsWithShape(
                  *a1_cpp
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

                  qWarning() << "no matching function variant found for getIntersectionPointsWithShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: clickReferencePoint
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::clickReferencePoint
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: moveReferencePoint
    // Source: REntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::moveReferencePoint
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: move
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::move
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: rotate
    // Source: REntity
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::rotate
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rotation (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_RVECTOR;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: scale
    // Source: REntity
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::scale
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scaleFactors (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_RVECTOR;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
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
                RDimOrdinateEntity* w = getWrapped();
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

      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scaleFactor (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_RVECTOR;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: scaleNonUniform
    // Source: REntity
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::scaleNonUniform
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scaleFactors (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_RVECTOR;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
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
                RDimOrdinateEntity* w = getWrapped();
                QSharedPointer<REntity> res = 
                    
                w->scaleNonUniform(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSharedPointer<REntity>

            return RJSHelper_qcad::cpp2js_QSharedPointer_REntity(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scaleNonUniform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: scaleVisualProperties
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::scaleVisualProperties
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->scaleVisualProperties(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for scaleVisualProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setViewportContext
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setViewportContext
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RViewportData(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RViewportData)
  
RViewportData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RViewportData(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimOrdinateEntity* w = getWrapped();
                
                w->setViewportContext(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setViewportContext";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: mirror
    // Source: REntity
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::mirror
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
    
  // convert js parameter to cpp: axis1 (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: axis2 (RVector)
  
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->mirror(
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: flipHorizontal
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::flipHorizontal
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: flipVertical
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::flipVertical
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: stretch
    // Source: REntity
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::stretch
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: update
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::update
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->update(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for update";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: castToShape
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::castToShape
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
                RDimOrdinateEntity* w = getWrapped();
                RShape* res = 
                    
                w->castToShape(
                  
                );
              
            // return type: RShape*

            return RJSHelper_qcad::cpp2js_RShape(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for castToShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setAutoUpdatesBlocked
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setAutoUpdatesBlocked
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setAutoUpdatesBlocked(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoUpdatesBlocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isVisible
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isVisible
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
RBlock::Id a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RBlock::INVALID_ID;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a1);
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->isVisible(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isEditable
    // Source: REntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isEditable
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
    
  // convert js parameter to cpp: allowInvisible (bool)
  
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->isEditable(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEditable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isInWorkingSet
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isInWorkingSet
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->isInWorkingSet(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isInWorkingSet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getComplexity
    // Source: REntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getComplexity
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
                RDimOrdinateEntity* w = getWrapped();
                int res = 
                    
                w->getComplexity(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getComplexity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: exportEntity
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::exportEntity
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
        RJSHelper_qcad::is_RExporter_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: e (RExporter)
  

          // non copyable:
          RExporter*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RExporter_ptr(handler, a1);
        
  // convert js parameter to cpp: preview (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: forceSelected (bool)
  
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->exportEntity(
                  *a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: clearStyleOverrides
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::clearStyleOverrides
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->clearStyleOverrides(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearStyleOverrides";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setDefinitionPoint
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setDefinitionPoint
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
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setDefinitionPoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDefinitionPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getDefinitionPoint
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getDefinitionPoint
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
                RDimOrdinateEntity* w = getWrapped();
                RVector res = 
                    
                w->getDefinitionPoint(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDefinitionPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setText
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setText
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setText(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getText
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getText
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getMeasurement
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getMeasurement
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
    
  // convert js parameter to cpp: resolveAutoMeasurement (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = true;
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
                RDimOrdinateEntity* w = getWrapped();
                QString res = 
                    
                w->getMeasurement(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMeasurement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getTextData
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getTextData
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
                RDimOrdinateEntity* w = getWrapped();
                RTextData res = 
                    
                w->getTextData(
                  
                );
              
            // return type: RTextData

            return RJSHelper_qcad::cpp2js_RTextData(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTextData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: updateBoundingBox
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::updateBoundingBox
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
    
  // convert js parameter to cpp: b (RBox)
  
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->updateBoundingBox(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateBoundingBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: updateTextPositionCenter
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::updateTextPositionCenter
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->updateTextPositionCenter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateTextPositionCenter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: updateTextData
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::updateTextData
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTextData(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: d (RTextData)
  
RTextData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTextData(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimOrdinateEntity* w = getWrapped();
                
                w->updateTextData(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateTextData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: updateShapes
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::updateShapes
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_QSharedPointer_RShape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QList<QSharedPointer<RShape>>)
  
QList<QSharedPointer<RShape>> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_QSharedPointer_RShape(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimOrdinateEntity* w = getWrapped();
                
                w->updateShapes(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateShapes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setTextPosition
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setTextPosition
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
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setTextPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getTextPosition
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getTextPosition
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
                RDimOrdinateEntity* w = getWrapped();
                RVector res = 
                    
                w->getTextPosition(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTextPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setFontName
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setFontName
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
    
  // convert js parameter to cpp: fn (QString)
  
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setFontName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getFontName
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getFontName
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: hasCustomTextPosition
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::hasCustomTextPosition
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->hasCustomTextPosition(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasCustomTextPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setCustomTextPosition
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setCustomTextPosition
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setCustomTextPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCustomTextPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getLineSpacingStyle
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getLineSpacingStyle
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getLineSpacingFactor
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getLineSpacingFactor
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
                RDimOrdinateEntity* w = getWrapped();
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
            
    // Class: RDimOrdinateEntity
    // Function: getTextRotation
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getTextRotation
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
                RDimOrdinateEntity* w = getWrapped();
                double res = 
                    
                w->getTextRotation(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTextRotation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getLinearFactor
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getLinearFactor
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
                RDimOrdinateEntity* w = getWrapped();
                double res = 
                    
                w->getLinearFactor(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinearFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setLinearFactor
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setLinearFactor
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
    
  // convert js parameter to cpp: f (double)
  
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setLinearFactor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinearFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getDimscale
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getDimscale
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
                RDimOrdinateEntity* w = getWrapped();
                double res = 
                    
                w->getDimscale(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimscale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setDimscale
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setDimscale
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
    
  // convert js parameter to cpp: f (double)
  
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setDimscale(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimscale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getDimBlockName
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getDimBlockName
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
                RDimOrdinateEntity* w = getWrapped();
                QString res = 
                    
                w->getDimBlockName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimBlockName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: hasDimensionBlockReference
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::hasDimensionBlockReference
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->hasDimensionBlockReference(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasDimensionBlockReference";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isArrow1Flipped
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isArrow1Flipped
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->isArrow1Flipped(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isArrow1Flipped";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setArrow1Flipped
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setArrow1Flipped
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setArrow1Flipped(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setArrow1Flipped";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isArrow2Flipped
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isArrow2Flipped
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->isArrow2Flipped(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isArrow2Flipped";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setArrow2Flipped
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setArrow2Flipped
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setArrow2Flipped(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setArrow2Flipped";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isExtLineFix
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isExtLineFix
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->isExtLineFix(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isExtLineFix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setExtLineFix
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setExtLineFix
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setExtLineFix(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setExtLineFix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getExtLineFixLength
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getExtLineFixLength
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
                RDimOrdinateEntity* w = getWrapped();
                double res = 
                    
                w->getExtLineFixLength(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getExtLineFixLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setExtLineFixLength
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setExtLineFixLength
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
    
  // convert js parameter to cpp: v (double)
  
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setExtLineFixLength(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setExtLineFixLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: hasOverride
    // Source: RDimensionEntity
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::hasOverride
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->hasOverride(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::clone
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
                RDimOrdinateEntity* w = getWrapped();
                RDimOrdinateEntity* res = 
                    
                w->clone(
                  
                );
              
            // return type: RDimOrdinateEntity*

            return RJSHelper_qcad::cpp2js_RDimOrdinateEntity(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clone";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setProperty
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setProperty
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
        RJSHelper_qcad::is_RPropertyTypeId(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyTypeId (RPropertyTypeId)
  
RPropertyTypeId a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyTypeId(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = NULL;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a3);
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->setProperty(
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

                  qWarning() << "no matching function variant found for setProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getProperty
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getProperty
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
        RJSHelper_qcad::is_RPropertyTypeId(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyTypeId (RPropertyTypeId)
  
RPropertyTypeId a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyTypeId(handler, a1);
        
  // convert js parameter to cpp: humanReadable (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: noAttributes (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: showOnRequest (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
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
                RDimOrdinateEntity* w = getWrapped();
                QPair<QVariant,RPropertyAttributes> res = 
                    
                w->getProperty(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QPair<QVariant,RPropertyAttributes>

            return RJSHelper_qcad::cpp2js_QPair_QVariant_RPropertyAttributes(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getData
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getData
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
                RDimOrdinateEntity* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RDimOrdinateData* res =
                    &
                w->getData(
                  
                );
              
            // return type: RDimOrdinateData&

            return RJSHelper_qcad::cpp2js_RDimOrdinateData(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setData
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setData
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDimOrdinateData(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: d (RDimOrdinateData)
  
RDimOrdinateData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDimOrdinateData(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimOrdinateEntity* w = getWrapped();
                
                w->setData(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setLeaderEndPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setLeaderEndPoint
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
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setLeaderEndPoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLeaderEndPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getLeaderEndPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getLeaderEndPoint
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
                RDimOrdinateEntity* w = getWrapped();
                RVector res = 
                    
                w->getLeaderEndPoint(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLeaderEndPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setDefiningPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setDefiningPoint
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
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setDefiningPoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDefiningPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: getDefiningPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::getDefiningPoint
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
                RDimOrdinateEntity* w = getWrapped();
                RVector res = 
                    
                w->getDefiningPoint(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDefiningPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setMeasuringXAxis
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setMeasuringXAxis
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setMeasuringXAxis(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMeasuringXAxis";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: setMeasuringYAxis
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::setMeasuringYAxis
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
                RDimOrdinateEntity* w = getWrapped();
                
                w->setMeasuringYAxis(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMeasuringYAxis";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimOrdinateEntity
    // Function: isMeasuringXAxis
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimOrdinateEntity_Wrapper::isMeasuringXAxis
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
                RDimOrdinateEntity* w = getWrapped();
                bool res = 
                    
                w->isMeasuringXAxis(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isMeasuringXAxis";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rdimordinateentity_wrapper.cpp"
  
