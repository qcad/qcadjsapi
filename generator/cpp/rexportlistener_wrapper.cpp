
  // Auto generated
  
  // include header:
  //#include "RExportListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rexportlistener_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RExportListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RExportListener_Wrapper>("org.qcad", 1, 0, "RExportListener_Wrapper");
        qmlRegisterInterface<RExportListener_Wrapper>("RExportListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RExportListener* t = new RJSType_RExportListener();
          global.setProperty("RJSType_RExportListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RExportListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RExportListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RExportListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RExportListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RExportListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RExportListener.js";
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
    RExportListener_Wrapper::RExportListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RExportListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RExportListener_Wrapper::RExportListener_Wrapper(RJSApi& h, RExportListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RExportListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RExportListener_Wrapper"));
              //setObjectName("RExportListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RExportListener_Wrapper::~RExportListener_Wrapper() {
            //RDebug::decCounter(QString("RExportListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RExportListener_Wrapper"));

            //qDebug() << "RExportListener_Wrapper::~RExportListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RExportListener";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RExportListener_Wrapper::initConnections() {

          //setObjectName("RExportListener_Wrapper");

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
    
    // Class: RExportListener
    // Function: preExportEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RExportListener_Wrapper::preExportEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RExportListener* w = getWrapped();
                
                w->preExportEvent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for preExportEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RExportListener
    // Function: postExportEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RExportListener_Wrapper::postExportEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RExportListener* w = getWrapped();
                
                w->postExportEvent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for postExportEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RExportListener
    // Function: endOfExportEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RExportListener_Wrapper::endOfExportEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RExporter_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: exporter (RExporter)
  

          // pointer:
          RExporter*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RExporter_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RExportListener* w = getWrapped();
                
                w->endOfExportEvent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for endOfExportEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  