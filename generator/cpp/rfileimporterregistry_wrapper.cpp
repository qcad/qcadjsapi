
  // Auto generated
  
  // include header:
  //#include "RFileImporterRegistrywrapper.h"
  //#include "header_cpp.h"
  
    #include "rfileimporterregistry_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RFileImporterRegistry*> RFileImporterRegistry_Wrapper::basecasters_RFileImporterRegistry;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RFileImporterRegistry
    // Function: registerFileImporter
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileImporterRegistry_WrapperSingleton::registerFileImporter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RFileImporterFactory_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: factory (RFileImporterFactory)
  

          // pointer:
          RFileImporterFactory*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RFileImporterFactory_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RFileImporterRegistry::registerFileImporter(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for registerFileImporter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterRegistry
    // Function: unregisterFileImporter
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileImporterRegistry_WrapperSingleton::unregisterFileImporter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RFileImporterFactory_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: factory (RFileImporterFactory)
  

          // pointer:
          RFileImporterFactory*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RFileImporterFactory_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RFileImporterRegistry::unregisterFileImporter(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unregisterFileImporter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterRegistry
    // Function: getFileImporter
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RFileImporterRegistry_WrapperSingleton::getFileImporter
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

   && RJSHelper_qcad::is_RDocument_ptr(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: nameFilter (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: document (RDocument)
  

          // non copyable:
          RDocument*
         a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RFileImporter* res = 
                
                // call static member function:
                RFileImporterRegistry::getFileImporter(
              a1_cpp
    , a2_cpp
    , *a3_cpp
    
            );
          
            // return type: RFileImporter*

            return RJSHelper_qcad::cpp2js_RFileImporter(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFileImporter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterRegistry
    // Function: getFilterStrings
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileImporterRegistry_WrapperSingleton::getFilterStrings
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RFileImporterRegistry::getFilterStrings(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFilterStrings";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterRegistry
    // Function: hasFileImporter
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileImporterRegistry_WrapperSingleton::hasFileImporter
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
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: nameFilter (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RFileImporterRegistry::hasFileImporter(
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

                  qWarning() << "no matching function variant found for hasFileImporter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterRegistry
    // Function: getFilterExtensions
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileImporterRegistry_WrapperSingleton::getFilterExtensions
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RFileImporterRegistry::getFilterExtensions(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFilterExtensions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterRegistry
    // Function: getFilterExtensionPatterns
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileImporterRegistry_WrapperSingleton::getFilterExtensionPatterns
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RFileImporterRegistry::getFilterExtensionPatterns(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFilterExtensionPatterns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RFileImporterRegistry_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFileImporterRegistry_Wrapper>("org.qcad", 1, 0, "RFileImporterRegistry_Wrapper");
        qmlRegisterInterface<RFileImporterRegistry_Wrapper>("RFileImporterRegistry_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFileImporterRegistry* t = new RJSType_RFileImporterRegistry();
          global.setProperty("RJSType_RFileImporterRegistry", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFileImporterRegistry::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFileImporterRegistry_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFileImporterRegistry_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFileImporterRegistry_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFileImporterRegistry_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RFileImporterRegistry_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RFileImporterRegistry_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RFileImporterRegistry_WrapperSingleton * s = new RFileImporterRegistry_WrapperSingleton(handler);
        engine->globalObject().setProperty("RFileImporterRegistry_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RFileImporterRegistry.js";
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
    RFileImporterRegistry_Wrapper::RFileImporterRegistry_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFileImporterRegistry_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFileImporterRegistry_Wrapper::RFileImporterRegistry_Wrapper(RJSApi& h, RFileImporterRegistry* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFileImporterRegistry_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFileImporterRegistry_Wrapper"));
              //setObjectName("RFileImporterRegistry_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFileImporterRegistry_Wrapper::~RFileImporterRegistry_Wrapper() {
            //RDebug::decCounter(QString("RFileImporterRegistry_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFileImporterRegistry_Wrapper"));

            //qDebug() << "RFileImporterRegistry_Wrapper::~RFileImporterRegistry_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RFileImporterRegistry";
                  delete wrapped;
                  wrapped = nullptr;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFileImporterRegistry_Wrapper::initConnections() {

          //setObjectName("RFileImporterRegistry_Wrapper");

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
  
    // Class: RFileImporterRegistry
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RFileImporterRegistry_Wrapper::RFileImporterRegistry_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RFileImporterRegistry_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RFileImporterRegistry_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RFileImporterRegistry(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RFileImporterRegistry";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rfileimporterregistry_wrapper.cpp"
  
