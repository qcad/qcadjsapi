
  // Auto generated
  
  // include header:
  //#include "RFocusListenerAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rfocuslisteneradapter_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RFocusListenerAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFocusListenerAdapter_Wrapper>("org.qcad", 1, 0, "RFocusListenerAdapter_Wrapper");
        qmlRegisterInterface<RFocusListenerAdapter_Wrapper>("RFocusListenerAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFocusListenerAdapter* t = new RJSType_RFocusListenerAdapter();
          global.setProperty("RJSType_RFocusListenerAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFocusListenerAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFocusListenerAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFocusListenerAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFocusListenerAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFocusListenerAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RFocusListenerAdapter.js";
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
    RFocusListenerAdapter_Wrapper::RFocusListenerAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFocusListenerAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFocusListenerAdapter_Wrapper::RFocusListenerAdapter_Wrapper(RJSApi& h, RFocusListenerAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFocusListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFocusListenerAdapter_Wrapper"));
              //setObjectName("RFocusListenerAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFocusListenerAdapter_Wrapper::~RFocusListenerAdapter_Wrapper() {
            //RDebug::decCounter(QString("RFocusListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFocusListenerAdapter_Wrapper"));

            //qDebug() << "RFocusListenerAdapter_Wrapper::~RFocusListenerAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RFocusListenerAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFocusListenerAdapter_Wrapper::initConnections() {

          //setObjectName("RFocusListenerAdapter_Wrapper");

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
    SIGNAL(focusUpdated(RDocumentInterface*)), 
    this, 
    SLOT(focusUpdatedEmitter(RDocumentInterface*))
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
  
    // Class: RFocusListenerAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RFocusListenerAdapter_Wrapper::RFocusListenerAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RFocusListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RFocusListenerAdapter_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RFocusListenerAdapter_Base(
              handler
              
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RFocusListenerAdapter_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RFocusListenerAdapter_Base*)wrapped)->self = handler.getSelf();
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RFocusListenerAdapter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RFocusListenerAdapter
    // Function: updateFocus
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFocusListenerAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      updateFocusSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFocusListenerAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFocusListenerAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFocusListenerAdapter::updateFocus: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->updateFocusSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->updateFocus(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFocusListenerAdapter
    // Function: focusUpdated
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RFocusListenerAdapter_Wrapper::focusUpdatedEmitter(
                RDocumentInterface* di
              ) {
                // convert cpp parameters to js:
                
  // parameter: di (RDocumentInterface)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RDocumentInterface(
    handler, 
    di
  );


                emit focusUpdated(
                  a1_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  