
  // Auto generated
  
  // include header:
  //#include "RFocusListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rfocuslistener_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RFocusListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFocusListener_Wrapper>("org.qcad", 1, 0, "RFocusListener_Wrapper");
        qmlRegisterInterface<RFocusListener_Wrapper>("RFocusListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFocusListener* t = new RJSType_RFocusListener();
          global.setProperty("RJSType_RFocusListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFocusListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFocusListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFocusListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFocusListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFocusListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RFocusListener.js";
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
    RFocusListener_Wrapper::RFocusListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFocusListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFocusListener_Wrapper::RFocusListener_Wrapper(RJSApi& h, RFocusListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFocusListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFocusListener_Wrapper"));
              //setObjectName("RFocusListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFocusListener_Wrapper::~RFocusListener_Wrapper() {
            //RDebug::decCounter(QString("RFocusListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFocusListener_Wrapper"));

            //qDebug() << "RFocusListener_Wrapper::~RFocusListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RFocusListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFocusListener_Wrapper::initConnections() {

          //setObjectName("RFocusListener_Wrapper");

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
  