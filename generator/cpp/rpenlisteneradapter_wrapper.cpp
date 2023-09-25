
  // Auto generated
  
  // include header:
  //#include "RPenListenerAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rpenlisteneradapter_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RPenListenerAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPenListenerAdapter_Wrapper>("org.qcad", 1, 0, "RPenListenerAdapter_Wrapper");
        qmlRegisterInterface<RPenListenerAdapter_Wrapper>("RPenListenerAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPenListenerAdapter* t = new RJSType_RPenListenerAdapter();
          global.setProperty("RJSType_RPenListenerAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPenListenerAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPenListenerAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPenListenerAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPenListenerAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPenListenerAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RPenListenerAdapter.js";
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
    RPenListenerAdapter_Wrapper::RPenListenerAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPenListenerAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPenListenerAdapter_Wrapper::RPenListenerAdapter_Wrapper(RJSApi& h, RPenListenerAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPenListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPenListenerAdapter_Wrapper"));
              //setObjectName("RPenListenerAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPenListenerAdapter_Wrapper::~RPenListenerAdapter_Wrapper() {
            //RDebug::decCounter(QString("RPenListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPenListenerAdapter_Wrapper"));

            //qDebug() << "RPenListenerAdapter_Wrapper::~RPenListenerAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RPenListenerAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPenListenerAdapter_Wrapper::initConnections() {

          //setObjectName("RPenListenerAdapter_Wrapper");

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
    SIGNAL(penUpdated(RDocumentInterface*)), 
    this, 
    SLOT(penUpdatedEmitter(RDocumentInterface*))
  );

  connect(
    getWrapped(), 
    SIGNAL(penCleared()), 
    this, 
    SLOT(penClearedEmitter())
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
  
    // Class: RPenListenerAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RPenListenerAdapter_Wrapper::RPenListenerAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RPenListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RPenListenerAdapter_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = NULL;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RPenListenerAdapter(
                a1_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

                    // no constructor without arguments defined
                    // allow constructor for prototype objects without args:
                    if (
                      a1.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RPenListenerAdapter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RPenListenerAdapter
    // Function: updatePen
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPenListenerAdapter_Wrapper::updatePen
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
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

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
                RPenListenerAdapter* w = getWrapped();
                
                w->updatePen(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updatePen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPenListenerAdapter
    // Function: clearPen
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPenListenerAdapter_Wrapper::clearPen
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RPenListenerAdapter* w = getWrapped();
                
                w->clearPen(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearPen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPenListenerAdapter
    // Function: penUpdated
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RPenListenerAdapter_Wrapper::penUpdatedEmitter(
                RDocumentInterface* documentInterface
              ) {
                // convert cpp parameters to js:
                
  // parameter: documentInterface (RDocumentInterface)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RDocumentInterface(
    handler, 
    documentInterface
  );


                emit penUpdated(
                  a1_js
                );
              }
            
    // Class: RPenListenerAdapter
    // Function: penCleared
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RPenListenerAdapter_Wrapper::penClearedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit penCleared(
                  
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  