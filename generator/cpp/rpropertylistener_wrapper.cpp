
  // Auto generated
  
  // include header:
  //#include "RPropertyListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rpropertylistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RPropertyListener*> RPropertyListener_Wrapper::basecasters_RPropertyListener;
    
    // static functions implementation in singleton wrapper:
    
    void RPropertyListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPropertyListener_Wrapper>("org.qcad", 1, 0, "RPropertyListener_Wrapper");
        qmlRegisterInterface<RPropertyListener_Wrapper>("RPropertyListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPropertyListener* t = new RJSType_RPropertyListener();
          global.setProperty("RJSType_RPropertyListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPropertyListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPropertyListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPropertyListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPropertyListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPropertyListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RPropertyListener.js";
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
    RPropertyListener_Wrapper::RPropertyListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPropertyListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPropertyListener_Wrapper::RPropertyListener_Wrapper(RJSApi& h, RPropertyListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPropertyListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPropertyListener_Wrapper"));
              //setObjectName("RPropertyListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPropertyListener_Wrapper::~RPropertyListener_Wrapper() {
            //RDebug::decCounter(QString("RPropertyListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPropertyListener_Wrapper"));

            //qDebug() << "RPropertyListener_Wrapper::~RPropertyListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RPropertyListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPropertyListener_Wrapper::initConnections() {

          //setObjectName("RPropertyListener_Wrapper");

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
  
    #include "moc_rpropertylistener_wrapper.cpp"
  
