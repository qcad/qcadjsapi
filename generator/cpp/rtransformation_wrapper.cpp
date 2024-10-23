
  // Auto generated
  
  // include header:
  //#include "RTransformationwrapper.h"
  //#include "header_cpp.h"
  
    #include "rtransformation_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RTransformation*> RTransformation_Wrapper::basecasters_RTransformation;
    
    // static functions implementation in singleton wrapper:
    
    void RTransformation_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RTransformation_Wrapper>("org.qcad", 1, 0, "RTransformation_Wrapper");
        qmlRegisterInterface<RTransformation_Wrapper>("RTransformation_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RTransformation* t = new RJSType_RTransformation();
          global.setProperty("RJSType_RTransformation", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RTransformation::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RTransformation_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RTransformation_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RTransformation_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RTransformation_BaseJs", mob);
      
      QString fileName = ":generator/js/RTransformation.js";
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
    RTransformation_Wrapper::RTransformation_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RTransformation_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RTransformation_Wrapper::RTransformation_Wrapper(RJSApi& h, RTransformation* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RTransformation_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTransformation_Wrapper"));
              //setObjectName("RTransformation_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RTransformation_Wrapper::~RTransformation_Wrapper() {
            //RDebug::decCounter(QString("RTransformation_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RTransformation_Wrapper"));

            //qDebug() << "RTransformation_Wrapper::~RTransformation_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RTransformation";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RTransformation_Wrapper::initConnections() {

          //setObjectName("RTransformation_Wrapper");

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
  
    // Class: RTransformation
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RTransformation_Wrapper::RTransformation_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RTransformation_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RTransformation_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTransformation(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RTransformation";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rtransformation_wrapper.cpp"
  
