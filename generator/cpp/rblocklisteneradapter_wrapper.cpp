
  // Auto generated
  
  // include header:
  //#include "RBlockListenerAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rblocklisteneradapter_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RBlockListenerAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RBlockListenerAdapter_Wrapper>("org.qcad", 1, 0, "RBlockListenerAdapter_Wrapper");
        qmlRegisterInterface<RBlockListenerAdapter_Wrapper>("RBlockListenerAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RBlockListenerAdapter* t = new RJSType_RBlockListenerAdapter();
          global.setProperty("RJSType_RBlockListenerAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RBlockListenerAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RBlockListenerAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RBlockListenerAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RBlockListenerAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RBlockListenerAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RBlockListenerAdapter.js";
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
    RBlockListenerAdapter_Wrapper::RBlockListenerAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RBlockListenerAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RBlockListenerAdapter_Wrapper::RBlockListenerAdapter_Wrapper(RJSApi& h, RBlockListenerAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RBlockListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RBlockListenerAdapter_Wrapper"));
              //setObjectName("RBlockListenerAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RBlockListenerAdapter_Wrapper::~RBlockListenerAdapter_Wrapper() {
            //RDebug::decCounter(QString("RBlockListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RBlockListenerAdapter_Wrapper"));

            //qDebug() << "RBlockListenerAdapter_Wrapper::~RBlockListenerAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RBlockListenerAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RBlockListenerAdapter_Wrapper::initConnections() {

          //setObjectName("RBlockListenerAdapter_Wrapper");

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
    SIGNAL(blocksUpdated(RDocumentInterface*)), 
    this, 
    SLOT(blocksUpdatedEmitter(RDocumentInterface*))
  );

  connect(
    getWrapped(), 
    SIGNAL(currentBlockSet(RDocumentInterface*)), 
    this, 
    SLOT(currentBlockSetEmitter(RDocumentInterface*))
  );

  connect(
    getWrapped(), 
    SIGNAL(blocksCleared()), 
    this, 
    SLOT(blocksClearedEmitter())
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
  
    // Class: RBlockListenerAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RBlockListenerAdapter_Wrapper::RBlockListenerAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RBlockListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RBlockListenerAdapter_Wrapper"));
                
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

        
            wrapped = new RBlockListenerAdapter(
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
                  

                  qWarning() << "no matching constructor variant found for RBlockListenerAdapter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RBlockListenerAdapter
    // Function: updateBlocks
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RBlockListenerAdapter_Wrapper::updateBlocks
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
                RBlockListenerAdapter* w = getWrapped();
                
                w->updateBlocks(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RBlockListenerAdapter
    // Function: setCurrentBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RBlockListenerAdapter_Wrapper::setCurrentBlock
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
                RBlockListenerAdapter* w = getWrapped();
                
                w->setCurrentBlock(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RBlockListenerAdapter
    // Function: clearBlocks
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RBlockListenerAdapter_Wrapper::clearBlocks
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
                RBlockListenerAdapter* w = getWrapped();
                
                w->clearBlocks(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RBlockListenerAdapter
    // Function: blocksUpdated
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RBlockListenerAdapter_Wrapper::blocksUpdatedEmitter(
                RDocumentInterface* documentInterface
              ) {
                // convert cpp parameters to js:
                
  // parameter: documentInterface (RDocumentInterface)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RDocumentInterface(
    handler, 
    documentInterface
  );


                emit blocksUpdated(
                  a1_js
                );
              }
            
    // Class: RBlockListenerAdapter
    // Function: currentBlockSet
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RBlockListenerAdapter_Wrapper::currentBlockSetEmitter(
                RDocumentInterface* documentInterface
              ) {
                // convert cpp parameters to js:
                
  // parameter: documentInterface (RDocumentInterface)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RDocumentInterface(
    handler, 
    documentInterface
  );


                emit currentBlockSet(
                  a1_js
                );
              }
            
    // Class: RBlockListenerAdapter
    // Function: blocksCleared
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RBlockListenerAdapter_Wrapper::blocksClearedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit blocksCleared(
                  
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  