
  // Auto generated
  
  // include header:
  //#include "RFileExporterRegistrywrapper.h"
  //#include "header_cpp.h"
  
    #include "rfileexporterregistry_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RFileExporterRegistry
    // Function: registerFileExporter
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterRegistry_WrapperSingleton::registerFileExporter
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RFileExporterFactory_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: factory (RFileExporterFactory)
  

          // pointer:
          RFileExporterFactory*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RFileExporterFactory_ptr(handler, a1);
        
  // convert js parameter to cpp: prepend (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RFileExporterRegistry::registerFileExporter(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for registerFileExporter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterRegistry
    // Function: unregisterFileExporter
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterRegistry_WrapperSingleton::unregisterFileExporter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RFileExporterFactory_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: factory (RFileExporterFactory)
  

          // pointer:
          RFileExporterFactory*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RFileExporterFactory_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RFileExporterRegistry::unregisterFileExporter(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unregisterFileExporter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterRegistry
    // Function: getFileExporter
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RFileExporterRegistry_WrapperSingleton::getFileExporter
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
            RFileExporter* res = 
                
                // call static member function:
                RFileExporterRegistry::getFileExporter(
              a1_cpp
    , a2_cpp
    , *a3_cpp
    
            );
          
            // return type: RFileExporter*

            return RJSHelper_qcad::cpp2js_RFileExporter(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFileExporter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterRegistry
    // Function: getFilterStrings
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterRegistry_WrapperSingleton::getFilterStrings
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RFileExporterRegistry::getFilterStrings(
              
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
            
    void RFileExporterRegistry_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFileExporterRegistry_Wrapper>("org.qcad", 1, 0, "RFileExporterRegistry_Wrapper");
        qmlRegisterInterface<RFileExporterRegistry_Wrapper>("RFileExporterRegistry_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFileExporterRegistry* t = new RJSType_RFileExporterRegistry();
          global.setProperty("RJSType_RFileExporterRegistry", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFileExporterRegistry::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFileExporterRegistry_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFileExporterRegistry_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFileExporterRegistry_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFileExporterRegistry_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RFileExporterRegistry_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RFileExporterRegistry_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RFileExporterRegistry_WrapperSingleton * s = new RFileExporterRegistry_WrapperSingleton(handler);
        engine->globalObject().setProperty("RFileExporterRegistry_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RFileExporterRegistry.js";
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
    RFileExporterRegistry_Wrapper::RFileExporterRegistry_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFileExporterRegistry_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFileExporterRegistry_Wrapper::RFileExporterRegistry_Wrapper(RJSApi& h, RFileExporterRegistry* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFileExporterRegistry_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFileExporterRegistry_Wrapper"));
              //setObjectName("RFileExporterRegistry_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFileExporterRegistry_Wrapper::~RFileExporterRegistry_Wrapper() {
            //RDebug::decCounter(QString("RFileExporterRegistry_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFileExporterRegistry_Wrapper"));

            //qDebug() << "RFileExporterRegistry_Wrapper::~RFileExporterRegistry_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RFileExporterRegistry";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFileExporterRegistry_Wrapper::initConnections() {

          //setObjectName("RFileExporterRegistry_Wrapper");

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
  
    // Class: RFileExporterRegistry
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RFileExporterRegistry_Wrapper::RFileExporterRegistry_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RFileExporterRegistry_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RFileExporterRegistry_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RFileExporterRegistry(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RFileExporterRegistry";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  