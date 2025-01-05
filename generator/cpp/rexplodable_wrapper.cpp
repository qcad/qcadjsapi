
  // Auto generated
  
  // include header:
  //#include "RExplodablewrapper.h"
  //#include "header_cpp.h"
  
    #include "rexplodable_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RExplodable*> RExplodable_Wrapper::basecasters_RExplodable;
    
    // static functions implementation in singleton wrapper:
    
    void RExplodable_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RExplodable_Wrapper>("org.qcad", 1, 0, "RExplodable_Wrapper");
        qmlRegisterInterface<RExplodable_Wrapper>("RExplodable_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RExplodable* t = new RJSType_RExplodable();
          global.setProperty("RJSType_RExplodable", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RExplodable::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RExplodable_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RExplodable_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RExplodable_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RExplodable_BaseJs", mob);
      
      QString fileName = ":generator/js/RExplodable.js";
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
    RExplodable_Wrapper::RExplodable_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RExplodable_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RExplodable_Wrapper::RExplodable_Wrapper(RJSApi& h, RExplodable* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RExplodable_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RExplodable_Wrapper"));
              //setObjectName("RExplodable_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RExplodable_Wrapper::~RExplodable_Wrapper() {
            //RDebug::decCounter(QString("RExplodable_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RExplodable_Wrapper"));

            //qDebug() << "RExplodable_Wrapper::~RExplodable_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RExplodable";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RExplodable_Wrapper::initConnections() {

          //setObjectName("RExplodable_Wrapper");

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
  
    #include "moc_rexplodable_wrapper.cpp"
  
