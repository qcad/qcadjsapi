
  // Auto generated
  
  // include header:
  //#include "RBlockListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rblocklistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RBlockListener*> RBlockListener_Wrapper::basecasters_RBlockListener;
    
    // static functions implementation in singleton wrapper:
    
    void RBlockListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RBlockListener_Wrapper>("org.qcad", 1, 0, "RBlockListener_Wrapper");
        qmlRegisterInterface<RBlockListener_Wrapper>("RBlockListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RBlockListener* t = new RJSType_RBlockListener();
          global.setProperty("RJSType_RBlockListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RBlockListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RBlockListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RBlockListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RBlockListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RBlockListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RBlockListener.js";
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
    RBlockListener_Wrapper::RBlockListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RBlockListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RBlockListener_Wrapper::RBlockListener_Wrapper(RJSApi& h, RBlockListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RBlockListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RBlockListener_Wrapper"));
              //setObjectName("RBlockListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RBlockListener_Wrapper::~RBlockListener_Wrapper() {
            //RDebug::decCounter(QString("RBlockListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RBlockListener_Wrapper"));

            //qDebug() << "RBlockListener_Wrapper::~RBlockListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RBlockListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RBlockListener_Wrapper::initConnections() {

          //setObjectName("RBlockListener_Wrapper");

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
    
    // Class: RBlockListener
    // Function: updateBlocks
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RBlockListener_Wrapper::updateBlocks
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
                RBlockListener* w = getWrapped();
                
                w->updateBlocks(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RBlockListener
    // Function: setCurrentBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RBlockListener_Wrapper::setCurrentBlock
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
                RBlockListener* w = getWrapped();
                
                w->setCurrentBlock(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RBlockListener
    // Function: clearBlocks
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RBlockListener_Wrapper::clearBlocks
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
                RBlockListener* w = getWrapped();
                
                w->clearBlocks(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rblocklistener_wrapper.cpp"
  
