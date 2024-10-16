
  // Auto generated
  
  // include header:
  //#include "RSnapListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rsnaplistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RSnapListener*> RSnapListener_Wrapper::basecasters_RSnapListener;
    
    // static functions implementation in singleton wrapper:
    
    void RSnapListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RSnapListener_Wrapper>("org.qcad", 1, 0, "RSnapListener_Wrapper");
        qmlRegisterInterface<RSnapListener_Wrapper>("RSnapListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RSnapListener* t = new RJSType_RSnapListener();
          global.setProperty("RJSType_RSnapListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RSnapListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RSnapListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RSnapListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RSnapListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RSnapListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RSnapListener.js";
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
    RSnapListener_Wrapper::RSnapListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RSnapListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RSnapListener_Wrapper::RSnapListener_Wrapper(RJSApi& h, RSnapListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RSnapListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RSnapListener_Wrapper"));
              //setObjectName("RSnapListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RSnapListener_Wrapper::~RSnapListener_Wrapper() {
            //RDebug::decCounter(QString("RSnapListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RSnapListener_Wrapper"));

            //qDebug() << "RSnapListener_Wrapper::~RSnapListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RSnapListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RSnapListener_Wrapper::initConnections() {

          //setObjectName("RSnapListener_Wrapper");

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
    
    // Class: RSnapListener
    // Function: updateSnap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapListener_Wrapper::updateSnap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: di (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSnapListener* w = getWrapped();
                
                w->updateSnap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateSnap";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rsnaplistener_wrapper.cpp"
  
