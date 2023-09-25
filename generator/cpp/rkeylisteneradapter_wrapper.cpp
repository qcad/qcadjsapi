
  // Auto generated
  
  // include header:
  //#include "RKeyListenerAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rkeylisteneradapter_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RKeyListenerAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RKeyListenerAdapter_Wrapper>("org.qcad", 1, 0, "RKeyListenerAdapter_Wrapper");
        qmlRegisterInterface<RKeyListenerAdapter_Wrapper>("RKeyListenerAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RKeyListenerAdapter* t = new RJSType_RKeyListenerAdapter();
          global.setProperty("RJSType_RKeyListenerAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RKeyListenerAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RKeyListenerAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RKeyListenerAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RKeyListenerAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RKeyListenerAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RKeyListenerAdapter.js";
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
    RKeyListenerAdapter_Wrapper::RKeyListenerAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RKeyListenerAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RKeyListenerAdapter_Wrapper::RKeyListenerAdapter_Wrapper(RJSApi& h, RKeyListenerAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RKeyListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RKeyListenerAdapter_Wrapper"));
              //setObjectName("RKeyListenerAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RKeyListenerAdapter_Wrapper::~RKeyListenerAdapter_Wrapper() {
            //RDebug::decCounter(QString("RKeyListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RKeyListenerAdapter_Wrapper"));

            //qDebug() << "RKeyListenerAdapter_Wrapper::~RKeyListenerAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RKeyListenerAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RKeyListenerAdapter_Wrapper::initConnections() {

          //setObjectName("RKeyListenerAdapter_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is a QObject and not a wrapper for a null pointer:
              // wrapper is managed by the QObject as child:
              if (hasWrapped()) {
                QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
              }
            

          if (hasWrapped()) {
            
                // set parent of wrapper to wrapped:
                // wrapper can be looked up for object:
                QVariant vThis = QVariant::fromValue(this);
                getWrapped()->setProperty("__wrapper__",  vThis);

                // make sure wrapper is deleted when object is deleted:
                // make sure wrapper stays alive as long as the wrapped stays alive::
                QObject::setParent(getWrapped());
              
            // set up signal forwarding:
            
  connect(
    getWrapped(), 
    SIGNAL(keyPressEvent(QKeyEvent*)), 
    this, 
    SLOT(keyPressEventEmitter(QKeyEvent*))
  );

              /*
              connect(
                getWrapped(),
                SIGNAL(destroyed(QObject*)),
                &handler,
                SLOT(slotDestroyed(QObject*))
              );
              */
            
          }
        }
      

  // constructors:
  
    // Class: RKeyListenerAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RKeyListenerAdapter_Wrapper::RKeyListenerAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RKeyListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RKeyListenerAdapter_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RKeyListenerAdapter(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RKeyListenerAdapter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RKeyListenerAdapter
    // Function: keyPressed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RKeyListenerAdapter_Wrapper::keyPressed
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
    
  // convert js parameter to cpp: event (QKeyEvent)
  

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
                RKeyListenerAdapter* w = getWrapped();
                
                w->keyPressed(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for keyPressed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RKeyListenerAdapter
    // Function: keyPressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RKeyListenerAdapter_Wrapper::keyPressEventEmitter(
                QKeyEvent* event
              ) {
                // convert cpp parameters to js:
                
  // parameter: event (QKeyEvent)
  


  QJSValue a1_js = RJSHelper::cpp2js_QKeyEvent(
    handler, 
    event
  );


                emit keyPressEvent(
                  a1_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  