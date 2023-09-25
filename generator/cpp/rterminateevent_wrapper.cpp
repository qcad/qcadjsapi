
  // Auto generated
  
  // include header:
  //#include "RTerminateEventwrapper.h"
  //#include "header_cpp.h"
  
    #include "rterminateevent_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RTerminateEvent_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RTerminateEvent_Wrapper>("org.qcad", 1, 0, "RTerminateEvent_Wrapper");
        qmlRegisterInterface<RTerminateEvent_Wrapper>("RTerminateEvent_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RTerminateEvent* t = new RJSType_RTerminateEvent();
          global.setProperty("RJSType_RTerminateEvent", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RTerminateEvent::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RTerminateEvent_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RTerminateEvent_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RTerminateEvent_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RTerminateEvent_BaseJs", mob);
      
      QString fileName = ":generator/js/RTerminateEvent.js";
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
    RTerminateEvent_Wrapper::RTerminateEvent_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RTerminateEvent_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RTerminateEvent_Wrapper::RTerminateEvent_Wrapper(RJSApi& h, RTerminateEvent* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RTerminateEvent_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTerminateEvent_Wrapper"));
              //setObjectName("RTerminateEvent_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RTerminateEvent_Wrapper::~RTerminateEvent_Wrapper() {
            //RDebug::decCounter(QString("RTerminateEvent_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RTerminateEvent_Wrapper"));

            //qDebug() << "RTerminateEvent_Wrapper::~RTerminateEvent_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RTerminateEvent";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RTerminateEvent_Wrapper::initConnections() {

          //setObjectName("RTerminateEvent_Wrapper");

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
  
    // Class: RTerminateEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RTerminateEvent_Wrapper::RTerminateEvent_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RTerminateEvent_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RTerminateEvent_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTerminateEvent(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RTerminateEvent";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  