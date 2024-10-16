
  // Auto generated
  
  // include header:
  //#include "RSpatialIndexVisitorwrapper.h"
  //#include "header_cpp.h"
  
    #include "rspatialindexvisitor_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RSpatialIndexVisitor*> RSpatialIndexVisitor_Wrapper::basecasters_RSpatialIndexVisitor;
    
    // static functions implementation in singleton wrapper:
    
    void RSpatialIndexVisitor_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RSpatialIndexVisitor_Wrapper>("org.qcad", 1, 0, "RSpatialIndexVisitor_Wrapper");
        qmlRegisterInterface<RSpatialIndexVisitor_Wrapper>("RSpatialIndexVisitor_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RSpatialIndexVisitor* t = new RJSType_RSpatialIndexVisitor();
          global.setProperty("RJSType_RSpatialIndexVisitor", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RSpatialIndexVisitor::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RSpatialIndexVisitor_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RSpatialIndexVisitor_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RSpatialIndexVisitor_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RSpatialIndexVisitor_BaseJs", mob);
      
      QString fileName = ":generator/js/RSpatialIndexVisitor.js";
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
    RSpatialIndexVisitor_Wrapper::RSpatialIndexVisitor_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RSpatialIndexVisitor_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RSpatialIndexVisitor_Wrapper::RSpatialIndexVisitor_Wrapper(RJSApi& h, RSpatialIndexVisitor* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RSpatialIndexVisitor_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RSpatialIndexVisitor_Wrapper"));
              //setObjectName("RSpatialIndexVisitor_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RSpatialIndexVisitor_Wrapper::~RSpatialIndexVisitor_Wrapper() {
            //RDebug::decCounter(QString("RSpatialIndexVisitor_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RSpatialIndexVisitor_Wrapper"));

            //qDebug() << "RSpatialIndexVisitor_Wrapper::~RSpatialIndexVisitor_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RSpatialIndexVisitor";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RSpatialIndexVisitor_Wrapper::initConnections() {

          //setObjectName("RSpatialIndexVisitor_Wrapper");

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
  
    #include "moc_rspatialindexvisitor_wrapper.cpp"
  
