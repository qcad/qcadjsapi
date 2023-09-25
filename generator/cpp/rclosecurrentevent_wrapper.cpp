
  // Auto generated
  
  // include header:
  //#include "RCloseCurrentEventwrapper.h"
  //#include "header_cpp.h"
  
    #include "rclosecurrentevent_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RCloseCurrentEvent_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RCloseCurrentEvent_Wrapper>("org.qcad", 1, 0, "RCloseCurrentEvent_Wrapper");
        qmlRegisterInterface<RCloseCurrentEvent_Wrapper>("RCloseCurrentEvent_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RCloseCurrentEvent* t = new RJSType_RCloseCurrentEvent();
          global.setProperty("RJSType_RCloseCurrentEvent", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RCloseCurrentEvent::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RCloseCurrentEvent_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RCloseCurrentEvent_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RCloseCurrentEvent_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RCloseCurrentEvent_BaseJs", mob);
      
      QString fileName = ":generator/js/RCloseCurrentEvent.js";
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
    RCloseCurrentEvent_Wrapper::RCloseCurrentEvent_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RCloseCurrentEvent_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RCloseCurrentEvent_Wrapper::RCloseCurrentEvent_Wrapper(RJSApi& h, RCloseCurrentEvent* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RCloseCurrentEvent_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RCloseCurrentEvent_Wrapper"));
              //setObjectName("RCloseCurrentEvent_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RCloseCurrentEvent_Wrapper::~RCloseCurrentEvent_Wrapper() {
            //RDebug::decCounter(QString("RCloseCurrentEvent_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RCloseCurrentEvent_Wrapper"));

            //qDebug() << "RCloseCurrentEvent_Wrapper::~RCloseCurrentEvent_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RCloseCurrentEvent";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RCloseCurrentEvent_Wrapper::initConnections() {

          //setObjectName("RCloseCurrentEvent_Wrapper");

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
  
    // Class: RCloseCurrentEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RCloseCurrentEvent_Wrapper::RCloseCurrentEvent_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RCloseCurrentEvent_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RCloseCurrentEvent_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RCloseCurrentEvent(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RCloseCurrentEvent";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  