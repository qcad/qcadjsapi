
  // Auto generated
  
  // include header:
  //#include "RPreferencesListenerAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rpreferenceslisteneradapter_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RPreferencesListenerAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPreferencesListenerAdapter_Wrapper>("org.qcad", 1, 0, "RPreferencesListenerAdapter_Wrapper");
        qmlRegisterInterface<RPreferencesListenerAdapter_Wrapper>("RPreferencesListenerAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPreferencesListenerAdapter* t = new RJSType_RPreferencesListenerAdapter();
          global.setProperty("RJSType_RPreferencesListenerAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPreferencesListenerAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPreferencesListenerAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPreferencesListenerAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPreferencesListenerAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPreferencesListenerAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RPreferencesListenerAdapter.js";
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
    RPreferencesListenerAdapter_Wrapper::RPreferencesListenerAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPreferencesListenerAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPreferencesListenerAdapter_Wrapper::RPreferencesListenerAdapter_Wrapper(RJSApi& h, RPreferencesListenerAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPreferencesListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPreferencesListenerAdapter_Wrapper"));
              //setObjectName("RPreferencesListenerAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPreferencesListenerAdapter_Wrapper::~RPreferencesListenerAdapter_Wrapper() {
            //RDebug::decCounter(QString("RPreferencesListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPreferencesListenerAdapter_Wrapper"));

            //qDebug() << "RPreferencesListenerAdapter_Wrapper::~RPreferencesListenerAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RPreferencesListenerAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPreferencesListenerAdapter_Wrapper::initConnections() {

          //setObjectName("RPreferencesListenerAdapter_Wrapper");

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
    SIGNAL(preferencesUpdated(RDocumentInterface*)), 
    this, 
    SLOT(preferencesUpdatedEmitter(RDocumentInterface*))
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
  
    // Class: RPreferencesListenerAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RPreferencesListenerAdapter_Wrapper::RPreferencesListenerAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RPreferencesListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RPreferencesListenerAdapter_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RPreferencesListenerAdapter(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RPreferencesListenerAdapter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RPreferencesListenerAdapter
    // Function: updatePreferences
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPreferencesListenerAdapter_Wrapper::updatePreferences
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
                RPreferencesListenerAdapter* w = getWrapped();
                
                w->updatePreferences(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updatePreferences";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPreferencesListenerAdapter
    // Function: preferencesUpdated
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RPreferencesListenerAdapter_Wrapper::preferencesUpdatedEmitter(
                RDocumentInterface* di
              ) {
                // convert cpp parameters to js:
                
  // parameter: di (RDocumentInterface)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RDocumentInterface(
    handler, 
    di
  );


                emit preferencesUpdated(
                  a1_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  