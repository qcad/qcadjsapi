
  // Auto generated
  
  // include header:
  //#include "RLayerListenerAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rlayerlisteneradapter_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RLayerListenerAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RLayerListenerAdapter_Wrapper>("org.qcad", 1, 0, "RLayerListenerAdapter_Wrapper");
        qmlRegisterInterface<RLayerListenerAdapter_Wrapper>("RLayerListenerAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RLayerListenerAdapter* t = new RJSType_RLayerListenerAdapter();
          global.setProperty("RJSType_RLayerListenerAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RLayerListenerAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RLayerListenerAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RLayerListenerAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RLayerListenerAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RLayerListenerAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RLayerListenerAdapter.js";
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
    RLayerListenerAdapter_Wrapper::RLayerListenerAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RLayerListenerAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RLayerListenerAdapter_Wrapper::RLayerListenerAdapter_Wrapper(RJSApi& h, RLayerListenerAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RLayerListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RLayerListenerAdapter_Wrapper"));
              //setObjectName("RLayerListenerAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RLayerListenerAdapter_Wrapper::~RLayerListenerAdapter_Wrapper() {
            //RDebug::decCounter(QString("RLayerListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RLayerListenerAdapter_Wrapper"));

            //qDebug() << "RLayerListenerAdapter_Wrapper::~RLayerListenerAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RLayerListenerAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RLayerListenerAdapter_Wrapper::initConnections() {

          //setObjectName("RLayerListenerAdapter_Wrapper");

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
    SIGNAL(layersUpdated(RDocumentInterface*, QList<int>)), 
    this, 
    SLOT(layersUpdatedEmitter(RDocumentInterface*, QList<int>))
  );

  connect(
    getWrapped(), 
    SIGNAL(currentLayerSet(RDocumentInterface*, int)), 
    this, 
    SLOT(currentLayerSetEmitter(RDocumentInterface*, int))
  );

  connect(
    getWrapped(), 
    SIGNAL(layersCleared()), 
    this, 
    SLOT(layersClearedEmitter())
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
  
    // Class: RLayerListenerAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RLayerListenerAdapter_Wrapper::RLayerListenerAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RLayerListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RLayerListenerAdapter_Wrapper"));
                
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

        
            wrapped = new RLayerListenerAdapter(
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
                  

                  qWarning() << "no matching constructor variant found for RLayerListenerAdapter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RLayerListenerAdapter
    // Function: updateLayers
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLayerListenerAdapter_Wrapper::updateLayers
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_QList_RLayer_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        
  // convert js parameter to cpp: layerIds (QList<RLayer::Id>)
  
QList<RLayer::Id> a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_QList_RLayer_Id(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLayerListenerAdapter* w = getWrapped();
                
                w->updateLayers(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLayerListenerAdapter
    // Function: setCurrentLayer
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLayerListenerAdapter_Wrapper::setCurrentLayer
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_RLayer_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        
  // convert js parameter to cpp: previousLayerId (RLayer::Id)
  
RLayer::Id a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLayerListenerAdapter* w = getWrapped();
                
                w->setCurrentLayer(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLayerListenerAdapter
    // Function: clearLayers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLayerListenerAdapter_Wrapper::clearLayers
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
                RLayerListenerAdapter* w = getWrapped();
                
                w->clearLayers(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLayerListenerAdapter
    // Function: layersUpdated
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RLayerListenerAdapter_Wrapper::layersUpdatedEmitter(
                RDocumentInterface* documentInterface, QList<int> layerIds
              ) {
                // convert cpp parameters to js:
                
  // parameter: documentInterface (RDocumentInterface)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RDocumentInterface(
    handler, 
    documentInterface
  );

  // parameter: layerIds (QList<int>)
  


  QJSValue a2_js = RJSHelper::cpp2js_QList_int(
    handler, 
    layerIds
  );


                emit layersUpdated(
                  a1_js, a2_js
                );
              }
            
    // Class: RLayerListenerAdapter
    // Function: currentLayerSet
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RLayerListenerAdapter_Wrapper::currentLayerSetEmitter(
                RDocumentInterface* documentInterface, int previousLayerId
              ) {
                // convert cpp parameters to js:
                
  // parameter: documentInterface (RDocumentInterface)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RDocumentInterface(
    handler, 
    documentInterface
  );

  // parameter: previousLayerId (int)
  


  QJSValue a2_js = RJSHelper::cpp2js_int(
    handler, 
    previousLayerId
  );


                emit currentLayerSet(
                  a1_js, a2_js
                );
              }
            
    // Class: RLayerListenerAdapter
    // Function: layersCleared
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RLayerListenerAdapter_Wrapper::layersClearedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit layersCleared(
                  
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  