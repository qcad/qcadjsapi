
  // Auto generated
  
  // include header:
  //#include "RModifiedListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rmodifiedlistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RModifiedListener*> RModifiedListener_Wrapper::basecasters_RModifiedListener;
    
    // static functions implementation in singleton wrapper:
    
    void RModifiedListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RModifiedListener_Wrapper>("org.qcad", 1, 0, "RModifiedListener_Wrapper");
        qmlRegisterInterface<RModifiedListener_Wrapper>("RModifiedListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RModifiedListener* t = new RJSType_RModifiedListener();
          global.setProperty("RJSType_RModifiedListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RModifiedListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RModifiedListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RModifiedListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RModifiedListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RModifiedListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RModifiedListener.js";
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
    RModifiedListener_Wrapper::RModifiedListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RModifiedListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RModifiedListener_Wrapper::RModifiedListener_Wrapper(RJSApi& h, RModifiedListener* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RModifiedListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RModifiedListener_Wrapper"));
              //setObjectName("RModifiedListener_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RModifiedListener_Wrapper::~RModifiedListener_Wrapper() {
            //RDebug::decCounter(QString("RModifiedListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RModifiedListener_Wrapper"));

            //qDebug() << "RModifiedListener_Wrapper::~RModifiedListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RModifiedListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RModifiedListener_Wrapper::initConnections() {

          //setObjectName("RModifiedListener_Wrapper");

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
    
    // Class: RModifiedListener
    // Function: updateModifiedListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RModifiedListener_Wrapper::updateModifiedListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RStorage_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: storage (RStorage)
  

          // pointer:
          RStorage*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RStorage_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RModifiedListener* w = getWrapped();
                
                w->updateModifiedListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateModifiedListener";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rmodifiedlistener_wrapper.cpp"
  
