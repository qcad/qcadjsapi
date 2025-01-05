
  // Auto generated
  
  // include header:
  //#include "RMessageHandlerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rmessagehandler_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RMessageHandler*> RMessageHandler_Wrapper::basecasters_RMessageHandler;
    
    // static functions implementation in singleton wrapper:
    
    void RMessageHandler_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RMessageHandler_Wrapper>("org.qcad", 1, 0, "RMessageHandler_Wrapper");
        qmlRegisterInterface<RMessageHandler_Wrapper>("RMessageHandler_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RMessageHandler* t = new RJSType_RMessageHandler();
          global.setProperty("RJSType_RMessageHandler", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RMessageHandler::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RMessageHandler_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RMessageHandler_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RMessageHandler_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RMessageHandler_BaseJs", mob);
      
      QString fileName = ":generator/js/RMessageHandler.js";
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
    RMessageHandler_Wrapper::RMessageHandler_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RMessageHandler_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RMessageHandler_Wrapper::RMessageHandler_Wrapper(RJSApi& h, RMessageHandler* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RMessageHandler_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RMessageHandler_Wrapper"));
              //setObjectName("RMessageHandler_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RMessageHandler_Wrapper::~RMessageHandler_Wrapper() {
            //RDebug::decCounter(QString("RMessageHandler_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RMessageHandler_Wrapper"));

            //qDebug() << "RMessageHandler_Wrapper::~RMessageHandler_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RMessageHandler";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RMessageHandler_Wrapper::initConnections() {

          //setObjectName("RMessageHandler_Wrapper");

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
    
    // Class: RMessageHandler
    // Function: handleUserMessage
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMessageHandler_Wrapper::handleUserMessage
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

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: message (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: escape (bool)
  
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
                RMessageHandler* w = getWrapped();
                
                w->handleUserMessage(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleUserMessage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMessageHandler
    // Function: handleUserInfo
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMessageHandler_Wrapper::handleUserInfo
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

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: message (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: escape (bool)
  
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
                RMessageHandler* w = getWrapped();
                
                w->handleUserInfo(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleUserInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMessageHandler
    // Function: handleUserWarning
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMessageHandler_Wrapper::handleUserWarning
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

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: message (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: messageBox (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: escape (bool)
  
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
                RMessageHandler* w = getWrapped();
                
                w->handleUserWarning(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleUserWarning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMessageHandler
    // Function: handleUserCommand
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMessageHandler_Wrapper::handleUserCommand
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

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: message (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: escape (bool)
  
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
                RMessageHandler* w = getWrapped();
                
                w->handleUserCommand(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleUserCommand";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rmessagehandler_wrapper.cpp"
  
