
  // Auto generated
  
  // include header:
  //#include "RTransactionListenerAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rtransactionlisteneradapter_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RTransactionListenerAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RTransactionListenerAdapter_Wrapper>("org.qcad", 1, 0, "RTransactionListenerAdapter_Wrapper");
        qmlRegisterInterface<RTransactionListenerAdapter_Wrapper>("RTransactionListenerAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RTransactionListenerAdapter* t = new RJSType_RTransactionListenerAdapter();
          global.setProperty("RJSType_RTransactionListenerAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RTransactionListenerAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RTransactionListenerAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RTransactionListenerAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RTransactionListenerAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RTransactionListenerAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RTransactionListenerAdapter.js";
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
    RTransactionListenerAdapter_Wrapper::RTransactionListenerAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RTransactionListenerAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RTransactionListenerAdapter_Wrapper::RTransactionListenerAdapter_Wrapper(RJSApi& h, RTransactionListenerAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RTransactionListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTransactionListenerAdapter_Wrapper"));
              //setObjectName("RTransactionListenerAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RTransactionListenerAdapter_Wrapper::~RTransactionListenerAdapter_Wrapper() {
            //RDebug::decCounter(QString("RTransactionListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RTransactionListenerAdapter_Wrapper"));

            //qDebug() << "RTransactionListenerAdapter_Wrapper::~RTransactionListenerAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RTransactionListenerAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RTransactionListenerAdapter_Wrapper::initConnections() {

          //setObjectName("RTransactionListenerAdapter_Wrapper");

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
    SIGNAL(transactionUpdated(RDocument*, RTransaction*)), 
    this, 
    SLOT(transactionUpdatedEmitter(RDocument*, RTransaction*))
  );

  connect(
    getWrapped(), 
    SIGNAL(currentBlockSet(RDocument*)), 
    this, 
    SLOT(currentBlockSetEmitter(RDocument*))
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
  
    // Class: RTransactionListenerAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RTransactionListenerAdapter_Wrapper::RTransactionListenerAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RTransactionListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RTransactionListenerAdapter_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTransactionListenerAdapter(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RTransactionListenerAdapter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RTransactionListenerAdapter
    // Function: updateTransactionListener
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransactionListenerAdapter_Wrapper::updateTransactionListener
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
    
  // convert js parameter to cpp: document (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        
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
                RTransactionListenerAdapter* w = getWrapped();
                
                w->updateTransactionListener(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateTransactionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransactionListenerAdapter
    // Function: setCurrentBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTransactionListenerAdapter_Wrapper::setCurrentBlock
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransactionListenerAdapter* w = getWrapped();
                
                w->setCurrentBlock(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransactionListenerAdapter
    // Function: transactionUpdated
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RTransactionListenerAdapter_Wrapper::transactionUpdatedEmitter(
                RDocument* document, RTransaction* transaction
              ) {
                // convert cpp parameters to js:
                
  // parameter: document (RDocument)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RDocument(
    handler, 
    document
  );

  // parameter: transaction (RTransaction)
  


  QJSValue a2_js = RJSHelper_qcad::cpp2js_RTransaction(
    handler, 
    transaction
  );


                emit transactionUpdated(
                  a1_js, a2_js
                );
              }
            
    // Class: RTransactionListenerAdapter
    // Function: currentBlockSet
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RTransactionListenerAdapter_Wrapper::currentBlockSetEmitter(
                RDocument* document
              ) {
                // convert cpp parameters to js:
                
  // parameter: document (RDocument)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RDocument(
    handler, 
    document
  );


                emit currentBlockSet(
                  a1_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  