
  // Auto generated
  
  // include header:
  //#include "RInterTransactionListenerAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rintertransactionlisteneradapter_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RInterTransactionListenerAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RInterTransactionListenerAdapter_Wrapper>("org.qcad", 1, 0, "RInterTransactionListenerAdapter_Wrapper");
        qmlRegisterInterface<RInterTransactionListenerAdapter_Wrapper>("RInterTransactionListenerAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RInterTransactionListenerAdapter* t = new RJSType_RInterTransactionListenerAdapter();
          global.setProperty("RJSType_RInterTransactionListenerAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RInterTransactionListenerAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RInterTransactionListenerAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RInterTransactionListenerAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RInterTransactionListenerAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RInterTransactionListenerAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RInterTransactionListenerAdapter.js";
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
    RInterTransactionListenerAdapter_Wrapper::RInterTransactionListenerAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RInterTransactionListenerAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RInterTransactionListenerAdapter_Wrapper::RInterTransactionListenerAdapter_Wrapper(RJSApi& h, RInterTransactionListenerAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RInterTransactionListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RInterTransactionListenerAdapter_Wrapper"));
              //setObjectName("RInterTransactionListenerAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RInterTransactionListenerAdapter_Wrapper::~RInterTransactionListenerAdapter_Wrapper() {
            //RDebug::decCounter(QString("RInterTransactionListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RInterTransactionListenerAdapter_Wrapper"));

            //qDebug() << "RInterTransactionListenerAdapter_Wrapper::~RInterTransactionListenerAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RInterTransactionListenerAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RInterTransactionListenerAdapter_Wrapper::initConnections() {

          //setObjectName("RInterTransactionListenerAdapter_Wrapper");

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
    SIGNAL(transactionInProgress(RDocument*, RTransaction*)), 
    this, 
    SLOT(transactionInProgressEmitter(RDocument*, RTransaction*))
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
  
    // Class: RInterTransactionListenerAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RInterTransactionListenerAdapter_Wrapper::RInterTransactionListenerAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RInterTransactionListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RInterTransactionListenerAdapter_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RInterTransactionListenerAdapter(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RInterTransactionListenerAdapter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RInterTransactionListenerAdapter
    // Function: updateInterTransactionListener
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RInterTransactionListenerAdapter_Wrapper::updateInterTransactionListener
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: doc (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = NULL;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
          }
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RInterTransactionListenerAdapter* w = getWrapped();
                
                w->updateInterTransactionListener(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateInterTransactionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RInterTransactionListenerAdapter
    // Function: transactionInProgress
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RInterTransactionListenerAdapter_Wrapper::transactionInProgressEmitter(
                RDocument* doc, RTransaction* transaction
              ) {
                // convert cpp parameters to js:
                
  // parameter: doc (RDocument)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RDocument(
    handler, 
    doc
  );

  // parameter: transaction (RTransaction)
  


  QJSValue a2_js = RJSHelper_qcad::cpp2js_RTransaction(
    handler, 
    transaction
  );


                emit transactionInProgress(
                  a1_js, a2_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  