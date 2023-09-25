
  // Auto generated
  
  // include header:
  //#include "RDirectedwrapper.h"
  //#include "header_cpp.h"
  
    #include "rdirected_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RDirected_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RDirected_Wrapper>("org.qcad", 1, 0, "RDirected_Wrapper");
        qmlRegisterInterface<RDirected_Wrapper>("RDirected_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RDirected* t = new RJSType_RDirected();
          global.setProperty("RJSType_RDirected", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RDirected::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RDirected_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RDirected_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RDirected_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RDirected_BaseJs", mob);
      
      QString fileName = ":generator/js/RDirected.js";
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
    RDirected_Wrapper::RDirected_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RDirected_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RDirected_Wrapper::RDirected_Wrapper(RJSApi& h, RDirected* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RDirected_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RDirected_Wrapper"));
              //setObjectName("RDirected_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RDirected_Wrapper::~RDirected_Wrapper() {
            //RDebug::decCounter(QString("RDirected_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RDirected_Wrapper"));

            //qDebug() << "RDirected_Wrapper::~RDirected_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RDirected";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RDirected_Wrapper::initConnections() {

          //setObjectName("RDirected_Wrapper");

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
  