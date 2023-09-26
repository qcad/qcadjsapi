
  // Auto generated
  
  // include header:
  //#include "RPluginInterfacewrapper.h"
  //#include "header_cpp.h"
  
    #include "rplugininterface_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RPluginInterface*> RPluginInterface_Wrapper::basecasters_RPluginInterface;
    
    // static functions implementation in singleton wrapper:
    
    void RPluginInterface_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPluginInterface_Wrapper>("org.qcad", 1, 0, "RPluginInterface_Wrapper");
        qmlRegisterInterface<RPluginInterface_Wrapper>("RPluginInterface_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPluginInterface* t = new RJSType_RPluginInterface();
          global.setProperty("RJSType_RPluginInterface", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPluginInterface::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPluginInterface_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPluginInterface_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPluginInterface_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPluginInterface_BaseJs", mob);
      
      QString fileName = ":generator/js/RPluginInterface.js";
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
    RPluginInterface_Wrapper::RPluginInterface_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPluginInterface_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPluginInterface_Wrapper::RPluginInterface_Wrapper(RJSApi& h, RPluginInterface* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPluginInterface_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPluginInterface_Wrapper"));
              //setObjectName("RPluginInterface_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPluginInterface_Wrapper::~RPluginInterface_Wrapper() {
            //RDebug::decCounter(QString("RPluginInterface_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPluginInterface_Wrapper"));

            //qDebug() << "RPluginInterface_Wrapper::~RPluginInterface_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RPluginInterface";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPluginInterface_Wrapper::initConnections() {

          //setObjectName("RPluginInterface_Wrapper");

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
  
