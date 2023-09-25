
  // Auto generated
  
  // include header:
  //#include "REntityExportListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rentityexportlistener_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void REntityExportListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<REntityExportListener_Wrapper>("org.qcad", 1, 0, "REntityExportListener_Wrapper");
        qmlRegisterInterface<REntityExportListener_Wrapper>("REntityExportListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_REntityExportListener* t = new RJSType_REntityExportListener();
          global.setProperty("RJSType_REntityExportListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_REntityExportListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&REntityExportListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("REntityExportListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&REntityExportListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("REntityExportListener_BaseJs", mob);
      
      QString fileName = ":generator/js/REntityExportListener.js";
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
    REntityExportListener_Wrapper::REntityExportListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("REntityExportListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      REntityExportListener_Wrapper::REntityExportListener_Wrapper(RJSApi& h, REntityExportListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("REntityExportListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("REntityExportListener_Wrapper"));
              //setObjectName("REntityExportListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      REntityExportListener_Wrapper::~REntityExportListener_Wrapper() {
            //RDebug::decCounter(QString("REntityExportListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("REntityExportListener_Wrapper"));

            //qDebug() << "REntityExportListener_Wrapper::~REntityExportListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of REntityExportListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void REntityExportListener_Wrapper::initConnections() {

          //setObjectName("REntityExportListener_Wrapper");

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
  

    // non-static functions:
    
    // Class: REntityExportListener
    // Function: registerCustomProperty
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              REntityExportListener_Wrapper::registerCustomProperty
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
        
  // convert js parameter to cpp: regExp (QString)
  
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
                REntityExportListener* w = getWrapped();
                
                w->registerCustomProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for registerCustomProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REntityExportListener
    // Function: checkCustomProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              REntityExportListener_Wrapper::checkCustomProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: e (REntity)
  

          // pointer:
          REntity*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                REntityExportListener* w = getWrapped();
                bool res = 
                    
                w->checkCustomProperty(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for checkCustomProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REntityExportListener
    // Function: exportEntity
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              REntityExportListener_Wrapper::exportEntity
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RExporter_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_REntity_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: exporter (RExporter)
  

          // pointer:
          RExporter*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RExporter_ptr(handler, a1);
        
  // convert js parameter to cpp: entity (REntity)
  

          // pointer:
          REntity*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                REntityExportListener* w = getWrapped();
                
                w->exportEntity(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for exportEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  