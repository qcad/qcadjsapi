
  // Auto generated
  
  // include header:
  //#include "RViewFocusListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rviewfocuslistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RViewFocusListener*> RViewFocusListener_Wrapper::basecasters_RViewFocusListener;
    
    // static functions implementation in singleton wrapper:
    
    void RViewFocusListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RViewFocusListener_Wrapper>("org.qcad", 1, 0, "RViewFocusListener_Wrapper");
        qmlRegisterInterface<RViewFocusListener_Wrapper>("RViewFocusListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RViewFocusListener* t = new RJSType_RViewFocusListener();
          global.setProperty("RJSType_RViewFocusListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RViewFocusListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RViewFocusListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RViewFocusListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RViewFocusListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RViewFocusListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RViewFocusListener.js";
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
    RViewFocusListener_Wrapper::RViewFocusListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RViewFocusListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RViewFocusListener_Wrapper::RViewFocusListener_Wrapper(RJSApi& h, RViewFocusListener* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RViewFocusListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RViewFocusListener_Wrapper"));
              //setObjectName("RViewFocusListener_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RViewFocusListener_Wrapper::~RViewFocusListener_Wrapper() {
            //RDebug::decCounter(QString("RViewFocusListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RViewFocusListener_Wrapper"));

            //qDebug() << "RViewFocusListener_Wrapper::~RViewFocusListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RViewFocusListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RViewFocusListener_Wrapper::initConnections() {

          //setObjectName("RViewFocusListener_Wrapper");

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
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rviewfocuslistener_wrapper.cpp"
  
