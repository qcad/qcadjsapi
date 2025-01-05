
  // Auto generated
  
  // include header:
  //#include "RProgressHandlerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rprogresshandler_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RProgressHandler*> RProgressHandler_Wrapper::basecasters_RProgressHandler;
    
    // static functions implementation in singleton wrapper:
    
    void RProgressHandler_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RProgressHandler_Wrapper>("org.qcad", 1, 0, "RProgressHandler_Wrapper");
        qmlRegisterInterface<RProgressHandler_Wrapper>("RProgressHandler_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RProgressHandler* t = new RJSType_RProgressHandler();
          global.setProperty("RJSType_RProgressHandler", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RProgressHandler::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RProgressHandler_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RProgressHandler_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RProgressHandler_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RProgressHandler_BaseJs", mob);
      
      QString fileName = ":generator/js/RProgressHandler.js";
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
    RProgressHandler_Wrapper::RProgressHandler_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RProgressHandler_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RProgressHandler_Wrapper::RProgressHandler_Wrapper(RJSApi& h, RProgressHandler* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RProgressHandler_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RProgressHandler_Wrapper"));
              //setObjectName("RProgressHandler_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RProgressHandler_Wrapper::~RProgressHandler_Wrapper() {
            //RDebug::decCounter(QString("RProgressHandler_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RProgressHandler_Wrapper"));

            //qDebug() << "RProgressHandler_Wrapper::~RProgressHandler_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RProgressHandler";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RProgressHandler_Wrapper::initConnections() {

          //setObjectName("RProgressHandler_Wrapper");

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
    
    // Class: RProgressHandler
    // Function: setProgress
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RProgressHandler_Wrapper::setProgress
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
    
  // convert js parameter to cpp: value (int)
  
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
                RProgressHandler* w = getWrapped();
                
                w->setProgress(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProgress";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RProgressHandler
    // Function: setProgressEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RProgressHandler_Wrapper::setProgressEnd
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
                RProgressHandler* w = getWrapped();
                
                w->setProgressEnd(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProgressEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RProgressHandler
    // Function: setProgressText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RProgressHandler_Wrapper::setProgressText
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = "";
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
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
                RProgressHandler* w = getWrapped();
                
                w->setProgressText(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProgressText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RProgressHandler
    // Function: setProgressEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RProgressHandler_Wrapper::setProgressEnabled
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
                RProgressHandler* w = getWrapped();
                
                w->setProgressEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProgressEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rprogresshandler_wrapper.cpp"
  
