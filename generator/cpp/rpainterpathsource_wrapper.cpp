
  // Auto generated
  
  // include header:
  //#include "RPainterPathSourcewrapper.h"
  //#include "header_cpp.h"
  
    #include "rpainterpathsource_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RPainterPathSource*> RPainterPathSource_Wrapper::basecasters_RPainterPathSource;
    
    // static functions implementation in singleton wrapper:
    
    void RPainterPathSource_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPainterPathSource_Wrapper>("org.qcad", 1, 0, "RPainterPathSource_Wrapper");
        qmlRegisterInterface<RPainterPathSource_Wrapper>("RPainterPathSource_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPainterPathSource* t = new RJSType_RPainterPathSource();
          global.setProperty("RJSType_RPainterPathSource", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPainterPathSource::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPainterPathSource_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPainterPathSource_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPainterPathSource_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPainterPathSource_BaseJs", mob);
      
      QString fileName = ":generator/js/RPainterPathSource.js";
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
    RPainterPathSource_Wrapper::RPainterPathSource_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPainterPathSource_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPainterPathSource_Wrapper::RPainterPathSource_Wrapper(RJSApi& h, RPainterPathSource* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPainterPathSource_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPainterPathSource_Wrapper"));
              //setObjectName("RPainterPathSource_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPainterPathSource_Wrapper::~RPainterPathSource_Wrapper() {
            //RDebug::decCounter(QString("RPainterPathSource_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPainterPathSource_Wrapper"));

            //qDebug() << "RPainterPathSource_Wrapper::~RPainterPathSource_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RPainterPathSource";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPainterPathSource_Wrapper::initConnections() {

          //setObjectName("RPainterPathSource_Wrapper");

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
  
