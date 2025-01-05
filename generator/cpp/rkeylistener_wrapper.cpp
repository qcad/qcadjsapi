
  // Auto generated
  
  // include header:
  //#include "RKeyListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rkeylistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RKeyListener*> RKeyListener_Wrapper::basecasters_RKeyListener;
    
    // static functions implementation in singleton wrapper:
    
    void RKeyListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RKeyListener_Wrapper>("org.qcad", 1, 0, "RKeyListener_Wrapper");
        qmlRegisterInterface<RKeyListener_Wrapper>("RKeyListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RKeyListener* t = new RJSType_RKeyListener();
          global.setProperty("RJSType_RKeyListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RKeyListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RKeyListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RKeyListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RKeyListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RKeyListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RKeyListener.js";
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
    RKeyListener_Wrapper::RKeyListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RKeyListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RKeyListener_Wrapper::RKeyListener_Wrapper(RJSApi& h, RKeyListener* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RKeyListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RKeyListener_Wrapper"));
              //setObjectName("RKeyListener_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RKeyListener_Wrapper::~RKeyListener_Wrapper() {
            //RDebug::decCounter(QString("RKeyListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RKeyListener_Wrapper"));

            //qDebug() << "RKeyListener_Wrapper::~RKeyListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RKeyListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RKeyListener_Wrapper::initConnections() {

          //setObjectName("RKeyListener_Wrapper");

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
    
    // Class: RKeyListener
    // Function: keyPressed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RKeyListener_Wrapper::keyPressed
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeyEvent_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: e (QKeyEvent)
  

          // pointer:
          QKeyEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QKeyEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RKeyListener* w = getWrapped();
                
                w->keyPressed(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for keyPressed";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rkeylistener_wrapper.cpp"
  
