
  // Auto generated
  
  // include header:
  //#include "RDocumentInterfacewrapper.h"
  //#include "header_cpp.h"
  
    #include "rdocumentinterface_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RDocumentInterface
    // Function: getClipboard
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_WrapperSingleton::getClipboard
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                  // return type is reference:
                  // use pointer instead 1:
                  RDocumentInterface* res =
                &
                // call static member function:
                RDocumentInterface::getClipboard(
              
            );
          
            // return type: RDocumentInterface&

            return RJSHelper_qcad::cpp2js_RDocumentInterface(
              handler, 
              // non-copyable: true
                  // return type is reference, type is not copyable:
                  // convert using pointer:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClipboard";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: deleteClipboard
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_WrapperSingleton::deleteClipboard
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RDocumentInterface::deleteClipboard(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteClipboard";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RDocumentInterface_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RDocumentInterface_Wrapper>("org.qcad", 1, 0, "RDocumentInterface_Wrapper");
        qmlRegisterInterface<RDocumentInterface_Wrapper>("RDocumentInterface_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RDocumentInterface* t = new RJSType_RDocumentInterface();
          global.setProperty("RJSType_RDocumentInterface", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RDocumentInterface::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RDocumentInterface_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RDocumentInterface_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RDocumentInterface_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RDocumentInterface_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RDocumentInterface_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RDocumentInterface_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RDocumentInterface_WrapperSingleton * s = new RDocumentInterface_WrapperSingleton(handler);
        engine->globalObject().setProperty("RDocumentInterface_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RDocumentInterface.js";
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
    RDocumentInterface_Wrapper::RDocumentInterface_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RDocumentInterface_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RDocumentInterface_Wrapper::RDocumentInterface_Wrapper(RJSApi& h, RDocumentInterface* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RDocumentInterface_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RDocumentInterface_Wrapper"));
              //setObjectName("RDocumentInterface_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RDocumentInterface_Wrapper::~RDocumentInterface_Wrapper() {
            //RDebug::decCounter(QString("RDocumentInterface_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RDocumentInterface_Wrapper"));

            //qDebug() << "RDocumentInterface_Wrapper::~RDocumentInterface_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RDocumentInterface";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RDocumentInterface_Wrapper::initConnections() {

          //setObjectName("RDocumentInterface_Wrapper");

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
  
    // Class: RDocumentInterface
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RDocumentInterface_Wrapper::RDocumentInterface_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RDocumentInterface_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RDocumentInterface_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // non copyable:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RDocumentInterface(
                *a1_cpp
    
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
                  

                  qWarning() << "no matching constructor variant found for RDocumentInterface";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RDocumentInterface
    // Function: clearCaches
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::clearCaches
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
                RDocumentInterface* w = getWrapped();
                
                w->clearCaches(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearCaches";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getDocument
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
                RDocumentInterface* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RDocument* res =
                    &
                w->getDocument(
                  
                );
              
            // return type: RDocument&

            return RJSHelper_qcad::cpp2js_RDocument(
              handler, 
              // non-copyable: true
                  // return type is reference, type is not copyable:
                  // convert using pointer:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getStorage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getStorage
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
                RDocumentInterface* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RStorage* res =
                    &
                w->getStorage(
                  
                );
              
            // return type: RStorage&

            return RJSHelper_qcad::cpp2js_RStorage(
              handler, 
              // non-copyable: true
                  // return type is reference, type is not copyable:
                  // convert using pointer:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getStorage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getGraphicsScenes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getGraphicsScenes
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
                RDocumentInterface* w = getWrapped();
                QList<RGraphicsScene*> res = 
                    
                w->getGraphicsScenes(
                  
                );
              
            // return type: QList<RGraphicsScene*>

            return RJSHelper_qcad::cpp2js_QList_RGraphicsScene_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGraphicsScenes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getGraphicsViewWithFocus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getGraphicsViewWithFocus
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
                RDocumentInterface* w = getWrapped();
                RGraphicsView* res = 
                    
                w->getGraphicsViewWithFocus(
                  
                );
              
            // return type: RGraphicsView*

            return RJSHelper_qcad::cpp2js_RGraphicsView(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGraphicsViewWithFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getGraphicsSceneWithFocus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getGraphicsSceneWithFocus
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
                RDocumentInterface* w = getWrapped();
                RGraphicsScene* res = 
                    
                w->getGraphicsSceneWithFocus(
                  
                );
              
            // return type: RGraphicsScene*

            return RJSHelper_qcad::cpp2js_RGraphicsScene(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGraphicsSceneWithFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: addCoordinateListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::addCoordinateListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCoordinateListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RCoordinateListener)
  

          // pointer:
          RCoordinateListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCoordinateListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->addCoordinateListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addCoordinateListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: notifyCoordinateListeners
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::notifyCoordinateListeners
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
                RDocumentInterface* w = getWrapped();
                
                w->notifyCoordinateListeners(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyCoordinateListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: addLayerListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::addLayerListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayerListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RLayerListener)
  

          // pointer:
          RLayerListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayerListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->addLayerListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addLayerListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: removeLayerListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::removeLayerListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayerListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RLayerListener)
  

          // pointer:
          RLayerListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayerListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->removeLayerListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeLayerListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: notifyLayerListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::notifyLayerListeners
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerIds (QList<RLayer::Id>)
  
QList<RLayer::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->notifyLayerListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyLayerListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: addTransactionListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::addTransactionListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTransactionListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RTransactionListener)
  

          // pointer:
          RTransactionListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTransactionListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                int res = 
                    
                w->addTransactionListener(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addTransactionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: removeTransactionListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::removeTransactionListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->removeTransactionListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RTransactionListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RTransactionListener)
  

          // pointer:
          RTransactionListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTransactionListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->removeTransactionListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeTransactionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: notifyTransactionListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::notifyTransactionListeners
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTransaction_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: t (RTransaction)
  

          // pointer:
          RTransaction*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->notifyTransactionListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyTransactionListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::clear
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: beforeLoad (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
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
                RDocumentInterface* w = getWrapped();
                
                w->clear(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: isScriptRunning
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::isScriptRunning
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
                RDocumentInterface* w = getWrapped();
                bool res = 
                    
                w->isScriptRunning(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isScriptRunning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setDefaultAction
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setDefaultAction
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RAction_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: action (RAction)
  

          // pointer:
          RAction*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RAction_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setDefaultAction(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDefaultAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getDefaultAction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getDefaultAction
              (
                
              ) 
              
                const
              
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
                RDocumentInterface* w = getWrapped();
                RAction* res = 
                    
                w->getDefaultAction(
                  
                );
              
            // return type: RAction*

            return RJSHelper_qcad::cpp2js_RAction(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDefaultAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setCurrentAction
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setCurrentAction
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RAction_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: action (RAction)
  

          // pointer:
          RAction*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RAction_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentAction(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: terminateCurrentAction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::terminateCurrentAction
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
                RDocumentInterface* w = getWrapped();
                
                w->terminateCurrentAction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for terminateCurrentAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: queueAction
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::queueAction
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RAction_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: action (RAction)
  

          // pointer:
          RAction*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RAction_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->queueAction(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for queueAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: killAllActions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::killAllActions
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
                RDocumentInterface* w = getWrapped();
                
                w->killAllActions(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for killAllActions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getCurrentAction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getCurrentAction
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
                RDocumentInterface* w = getWrapped();
                RAction* res = 
                    
                w->getCurrentAction(
                  
                );
              
            // return type: RAction*

            return RJSHelper_qcad::cpp2js_RAction(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: hasCurrentAction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::hasCurrentAction
              (
                
              ) 
              
                const
              
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
                RDocumentInterface* w = getWrapped();
                bool res = 
                    
                w->hasCurrentAction(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasCurrentAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getCurrentStatefulAction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getCurrentStatefulAction
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
                RDocumentInterface* w = getWrapped();
                RAction* res = 
                    
                w->getCurrentStatefulAction(
                  
                );
              
            // return type: RAction*

            return RJSHelper_qcad::cpp2js_RAction(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentStatefulAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: hasCurrentStatefulAction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::hasCurrentStatefulAction
              (
                
              ) 
              
                const
              
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
                RDocumentInterface* w = getWrapped();
                bool res = 
                    
                w->hasCurrentStatefulAction(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasCurrentStatefulAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: suspend
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::suspend
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
                RDocumentInterface* w = getWrapped();
                
                w->suspend(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for suspend";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: resume
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::resume
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
                RDocumentInterface* w = getWrapped();
                
                w->resume(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resume";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setClickMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setClickMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RAction_ClickMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m (RAction::ClickMode)
  
RAction::ClickMode a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RAction_ClickMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setClickMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setClickMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getClickMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getClickMode
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
                RDocumentInterface* w = getWrapped();
                RAction::ClickMode res = 
                    
                w->getClickMode(
                  
                );
              
            // return type: RAction::ClickMode

            return RJSHelper_qcad::cpp2js_RAction_ClickMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClickMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: terminateEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::terminateEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTerminateEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RTerminateEvent)
  

          // non copyable:
          RTerminateEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTerminateEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->terminateEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for terminateEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: keyPressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::keyPressEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeyEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (QKeyEvent)
  

          // non copyable:
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
                RDocumentInterface* w = getWrapped();
                
                w->keyPressEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for keyPressEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: keyReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::keyReleaseEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeyEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (QKeyEvent)
  

          // non copyable:
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
                RDocumentInterface* w = getWrapped();
                
                w->keyReleaseEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for keyReleaseEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: mouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::mouseMoveEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->mouseMoveEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mouseMoveEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: mousePressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::mousePressEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->mousePressEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mousePressEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: mouseReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::mouseReleaseEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->mouseReleaseEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mouseReleaseEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: mouseDoubleClickEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::mouseDoubleClickEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->mouseDoubleClickEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mouseDoubleClickEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: coordinateEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::coordinateEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCoordinateEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RCoordinateEvent)
  

          // non copyable:
          RCoordinateEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCoordinateEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->coordinateEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for coordinateEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: coordinateEventPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::coordinateEventPreview
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCoordinateEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RCoordinateEvent)
  

          // non copyable:
          RCoordinateEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCoordinateEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->coordinateEventPreview(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for coordinateEventPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: commandEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::commandEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCommandEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RCommandEvent)
  

          // non copyable:
          RCommandEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCommandEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->commandEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for commandEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: commandEventPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::commandEventPreview
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCommandEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RCommandEvent)
  

          // non copyable:
          RCommandEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCommandEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->commandEventPreview(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for commandEventPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: wheelEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::wheelEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RWheelEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RWheelEvent)
  

          // non copyable:
          RWheelEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RWheelEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->wheelEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for wheelEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: tabletEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::tabletEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTabletEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RTabletEvent)
  

          // non copyable:
          RTabletEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTabletEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->tabletEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for tabletEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: swipeGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::swipeGestureEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSwipeGesture_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: gesture (QSwipeGesture)
  

          // non copyable:
          QSwipeGesture*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSwipeGesture_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->swipeGestureEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swipeGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: panGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::panGestureEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPanGesture_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: gesture (QPanGesture)
  

          // non copyable:
          QPanGesture*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPanGesture_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->panGestureEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for panGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: pinchGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::pinchGestureEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPinchGesture_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: gesture (QPinchGesture)
  

          // non copyable:
          QPinchGesture*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPinchGesture_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->pinchGestureEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for pinchGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: propertyChangeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::propertyChangeEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPropertyEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RPropertyEvent)
  

          // non copyable:
          RPropertyEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->propertyChangeEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for propertyChangeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: ucsSetEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::ucsSetEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ucsName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->ucsSetEvent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ucsSetEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: zoomChangeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::zoomChangeEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsView_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: view (RGraphicsView)
  

          // non copyable:
          RGraphicsView*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->zoomChangeEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for zoomChangeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: enableUpdates
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::enableUpdates
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
                RDocumentInterface* w = getWrapped();
                
                w->enableUpdates(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for enableUpdates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: disableUpdates
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::disableUpdates
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
                RDocumentInterface* w = getWrapped();
                
                w->disableUpdates(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for disableUpdates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: enableRegeneration
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::enableRegeneration
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
                RDocumentInterface* w = getWrapped();
                
                w->enableRegeneration(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for enableRegeneration";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: disableRegeneration
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::disableRegeneration
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
                RDocumentInterface* w = getWrapped();
                
                w->disableRegeneration(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for disableRegeneration";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: enableMouseTracking
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::enableMouseTracking
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
                RDocumentInterface* w = getWrapped();
                
                w->enableMouseTracking(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for enableMouseTracking";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: disableMouseTracking
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::disableMouseTracking
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
                RDocumentInterface* w = getWrapped();
                
                w->disableMouseTracking(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for disableMouseTracking";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setAllowSnapInterruption
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setAllowSnapInterruption
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setAllowSnapInterruption(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAllowSnapInterruption";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: updateAllEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::updateAllEntities
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
                RDocumentInterface* w = getWrapped();
                
                w->updateAllEntities(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateAllEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: regenerateScenes
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::regenerateScenes
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityIds (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: updateViews (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->regenerateScenes(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: updateViews (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->regenerateScenes(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: undone (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
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
                RDocumentInterface* w = getWrapped();
                
                w->regenerateScenes(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for regenerateScenes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: updateSelectionStatus
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::updateSelectionStatus
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityIds (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: updateViews (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->updateSelectionStatus(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: updateViews (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->updateSelectionStatus(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateSelectionStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: regenerateViews
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::regenerateViews
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: force (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
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
                RDocumentInterface* w = getWrapped();
                
                w->regenerateViews(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityIds (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->regenerateViews(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for regenerateViews";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: repaintViews
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::repaintViews
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
                RDocumentInterface* w = getWrapped();
                
                w->repaintViews(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for repaintViews";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: registerScene
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::registerScene
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsScene_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scene (RGraphicsScene)
  

          // non copyable:
          RGraphicsScene*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsScene_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->registerScene(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for registerScene";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: unregisterScene
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::unregisterScene
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsScene_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scene (RGraphicsScene)
  

          // non copyable:
          RGraphicsScene*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsScene_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->unregisterScene(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unregisterScene";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setCursor
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setCursor
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QCursor(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cursor (QCursor)
  
QCursor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QCursor(handler, a1);
        
  // convert js parameter to cpp: global (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
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
                RDocumentInterface* w = getWrapped();
                
                w->setCursor(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: importUrl
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::importUrl
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: url (QUrl)
  
QUrl a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrl(handler, a1);
        
  // convert js parameter to cpp: nameFilter (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = "";
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        
  // convert js parameter to cpp: notify (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
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
                RDocumentInterface* w = getWrapped();
                RDocumentInterface::IoErrorCode res = 
                    
                w->importUrl(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: RDocumentInterface::IoErrorCode

            return RJSHelper_qcad::cpp2js_RDocumentInterface_IoErrorCode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for importUrl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: importFile
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::importFile
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper::is_QVariantMap(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: nameFilter (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = "";
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        
  // convert js parameter to cpp: notify (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: params (QVariantMap)
  
QVariantMap a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RDEFAULT_QVARIANTMAP;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QVariantMap(handler, a4);
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
                RDocumentInterface* w = getWrapped();
                RDocumentInterface::IoErrorCode res = 
                    
                w->importFile(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: RDocumentInterface::IoErrorCode

            return RJSHelper_qcad::cpp2js_RDocumentInterface_IoErrorCode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for importFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getCorrectedFileName
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getCorrectedFileName
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: fileVersion (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                QString res = 
                    
                w->getCorrectedFileName(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCorrectedFileName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: exportFile
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::exportFile
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: fileVersion (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = "";
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        
  // convert js parameter to cpp: resetModified (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
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
                RDocumentInterface* w = getWrapped();
                bool res = 
                    
                w->exportFile(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exportFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: tagState
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::tagState
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: tag (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = "";
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
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
                RDocumentInterface* w = getWrapped();
                
                w->tagState(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for tagState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: undoToTag
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::undoToTag
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: tag (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = "";
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
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
                RDocumentInterface* w = getWrapped();
                
                w->undoToTag(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for undoToTag";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: undo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::undo
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
                RDocumentInterface* w = getWrapped();
                
                w->undo(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for undo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: redo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::redo
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
                RDocumentInterface* w = getWrapped();
                
                w->redo(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for redo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: flushTransactions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::flushTransactions
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
                RDocumentInterface* w = getWrapped();
                
                w->flushTransactions(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for flushTransactions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: flushRedo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::flushRedo
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
                RDocumentInterface* w = getWrapped();
                
                w->flushRedo(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for flushRedo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setSnap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setSnap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSnap_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: snap (RSnap)
  

          // pointer:
          RSnap*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSnap_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setSnap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSnap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getSnap
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getSnap
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
                RDocumentInterface* w = getWrapped();
                RSnap* res = 
                    
                w->getSnap(
                  
                );
              
            // return type: RSnap*

            return RJSHelper_qcad::cpp2js_RSnap(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSnap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getSnapStatus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getSnapStatus
              (
                
              ) 
              
                const
              
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
                RDocumentInterface* w = getWrapped();
                RSnap::Status res = 
                    
                w->getSnapStatus(
                  
                );
              
            // return type: RSnap::Status

            return RJSHelper_qcad::cpp2js_RSnap_Status(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSnapStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setSnapRestriction
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setSnapRestriction
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSnapRestriction_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: snapRestriction (RSnapRestriction)
  

          // pointer:
          RSnapRestriction*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSnapRestriction_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setSnapRestriction(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSnapRestriction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getSnapRestriction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getSnapRestriction
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
                RDocumentInterface* w = getWrapped();
                RSnapRestriction* res = 
                    
                w->getSnapRestriction(
                  
                );
              
            // return type: RSnapRestriction*

            return RJSHelper_qcad::cpp2js_RSnapRestriction(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSnapRestriction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: snap
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::snap
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        
  // convert js parameter to cpp: preview (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
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
                RDocumentInterface* w = getWrapped();
                RVector res = 
                    
                w->snap(
                  *a1_cpp
    , a2_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for snap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: restrictOrtho
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::restrictOrtho
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper_qcad::is_RS_OrthoMode(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: position (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: relativeZero (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: mode (RS::OrthoMode)
  
RS::OrthoMode a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RS::Orthogonal;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RS_OrthoMode(handler, a3);
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
                RDocumentInterface* w = getWrapped();
                RVector res = 
                    
                w->restrictOrtho(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for restrictOrtho";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getClosestEntity
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getClosestEntity
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: position (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: range (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: strictRange (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RMAXDOUBLE;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        
  // convert js parameter to cpp: includeLockedLayers (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = true;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: selectedOnly (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = false;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
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
                RDocumentInterface* w = getWrapped();
                REntity::Id res = 
                    
                w->getClosestEntity(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: REntity::Id

            return RJSHelper_qcad::cpp2js_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RInputEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RInputEvent)
  

          // non copyable:
          RInputEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RInputEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                REntity::Id res = 
                    
                w->getClosestEntity(
                  *a1_cpp
    
                );
              
            // return type: REntity::Id

            return RJSHelper_qcad::cpp2js_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClosestEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: highlightEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::highlightEntity
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->highlightEntity(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for highlightEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: highlightReferencePoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::highlightReferencePoint
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RRefPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: position (RRefPoint)
  
RRefPoint a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RRefPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->highlightReferencePoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for highlightReferencePoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: selectEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::selectEntities
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityIds (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: add (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
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
                RDocumentInterface* w = getWrapped();
                int res = 
                    
                w->selectEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for selectEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: selectEntity
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::selectEntity
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: add (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
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
                RDocumentInterface* w = getWrapped();
                
                w->selectEntity(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for selectEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: deselectEntities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::deselectEntities
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityIds (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                int res = 
                    
                w->deselectEntities(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for deselectEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: deselectEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::deselectEntity
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->deselectEntity(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deselectEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: selectBoxXY
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::selectBoxXY
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: box (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        
  // convert js parameter to cpp: add (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
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
                RDocumentInterface* w = getWrapped();
                
                w->selectBoxXY(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for selectBoxXY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: selectAll
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::selectAll
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
                RDocumentInterface* w = getWrapped();
                
                w->selectAll(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for selectAll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: deselectAll
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::deselectAll
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
                RDocumentInterface* w = getWrapped();
                
                w->deselectAll(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deselectAll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: clearSelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::clearSelection
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
                RDocumentInterface* w = getWrapped();
                
                w->clearSelection(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearSelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: hasSelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::hasSelection
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
                RDocumentInterface* w = getWrapped();
                bool res = 
                    
                w->hasSelection(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasSelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: addZoomBoxToPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::addZoomBoxToPreview
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: box (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->addZoomBoxToPreview(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addZoomBoxToPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: addShapeToPreview
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::addShapeToPreview
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5, 
  const QJSValue& 
  a6
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RColor(handler, a2
  )

   && RJSHelper::is_QBrush(handler, a3
  )

   && RJSHelper_qcad::is_RLineweight_Lineweight(handler, a4
  )

   && RJSHelper::is_Qt_PenStyle(handler, a5
  )

   && RJSHelper::is_QList_qreal(handler, a6
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        
  // convert js parameter to cpp: color (RColor)
  
RColor a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a2);
        
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QBrush(handler, a3);
        
  // convert js parameter to cpp: lineweight (RLineweight::Lineweight)
  
RLineweight::Lineweight a4_cpp;

      a4_cpp = RJSHelper_qcad::js2cpp_RLineweight_Lineweight(handler, a4);
        
  // convert js parameter to cpp: style (Qt::PenStyle)
  
Qt::PenStyle a5_cpp;

      a5_cpp = RJSHelper::js2cpp_Qt_PenStyle(handler, a5);
        
  // convert js parameter to cpp: dashValues (QList<qreal>)
  
QList<qreal> a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = RDEFAULT_QLIST_QREAL;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_QList_qreal(handler, a6);
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
                RDocumentInterface* w = getWrapped();
                
                w->addShapeToPreview(
                  *a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addShapeToPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: addAuxShapeToPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::addAuxShapeToPreview
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->addAuxShapeToPreview(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addAuxShapeToPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: addEntityToPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::addEntityToPreview
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (REntity)
  

          // non copyable:
          REntity*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->addEntityToPreview(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addEntityToPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: addDrawableToPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::addDrawableToPreview
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsSceneDrawable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: drawable (RGraphicsSceneDrawable)
  
RGraphicsSceneDrawable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsSceneDrawable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->addDrawableToPreview(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addDrawableToPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: beginPreview
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::beginPreview
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
                RDocumentInterface* w = getWrapped();
                
                w->beginPreview(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for beginPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: endPreview
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::endPreview
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
                RDocumentInterface* w = getWrapped();
                
                w->endPreview(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for endPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: clearPreview
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::clearPreview
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
                RDocumentInterface* w = getWrapped();
                
                w->clearPreview(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: isPreviewEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::isPreviewEmpty
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
                RDocumentInterface* w = getWrapped();
                bool res = 
                    
                w->isPreviewEmpty(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPreviewEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: keepPreview
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::keepPreview
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
                RDocumentInterface* w = getWrapped();
                
                w->keepPreview(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for keepPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: showPropertiesOf
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::showPropertiesOf
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (REntity)
  

          // non copyable:
          REntity*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->showPropertiesOf(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showPropertiesOf";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: clearProperties
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::clearProperties
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
                RDocumentInterface* w = getWrapped();
                
                w->clearProperties(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: zoomIn
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::zoomIn
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
                RDocumentInterface* w = getWrapped();
                
                w->zoomIn(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for zoomIn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: zoomOut
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::zoomOut
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
                RDocumentInterface* w = getWrapped();
                
                w->zoomOut(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for zoomOut";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: autoZoom
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::autoZoom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_MIN1;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
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
                RDocumentInterface* w = getWrapped();
                
                w->autoZoom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for autoZoom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: zoomToSelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::zoomToSelection
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
                RDocumentInterface* w = getWrapped();
                bool res = 
                    
                w->zoomToSelection(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for zoomToSelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: zoomTo
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::zoomTo
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: region (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        
  // convert js parameter to cpp: margin (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
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
                RDocumentInterface* w = getWrapped();
                
                w->zoomTo(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for zoomTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: zoomPrevious
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::zoomPrevious
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
                RDocumentInterface* w = getWrapped();
                
                w->zoomPrevious(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for zoomPrevious";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: previewOperation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::previewOperation
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_ROperation_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: operation (ROperation)
  

          // pointer:
          ROperation*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_ROperation_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->previewOperation(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for previewOperation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: applyOperation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::applyOperation
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_ROperation_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: operation (ROperation)
  

          // pointer:
          ROperation*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_ROperation_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                RTransaction res = 
                    
                w->applyOperation(
                  a1_cpp
    
                );
              
            // return type: RTransaction

            return RJSHelper_qcad::cpp2js_RTransaction(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applyOperation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: objectChangeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::objectChangeEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTransaction(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: transaction (RTransaction)
  
RTransaction a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTransaction(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->objectChangeEvent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for objectChangeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getRelativeZero
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getRelativeZero
              (
                
              ) 
              
                const
              
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
                RDocumentInterface* w = getWrapped();
                RVector res = 
                    
                w->getRelativeZero(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getRelativeZero";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getLastPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getLastPosition
              (
                
              ) 
              
                const
              
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
                RDocumentInterface* w = getWrapped();
                RVector res = 
                    
                w->getLastPosition(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLastPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setRelativeZero
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setRelativeZero
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setRelativeZero(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRelativeZero";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: lockRelativeZero
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::lockRelativeZero
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
                RDocumentInterface* w = getWrapped();
                
                w->lockRelativeZero(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for lockRelativeZero";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: unlockRelativeZero
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::unlockRelativeZero
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
                RDocumentInterface* w = getWrapped();
                
                w->unlockRelativeZero(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unlockRelativeZero";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: isRelativeZeroLocked
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::isRelativeZeroLocked
              (
                
              ) 
              
                const
              
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
                RDocumentInterface* w = getWrapped();
                bool res = 
                    
                w->isRelativeZeroLocked(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRelativeZeroLocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: lockSnap
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::lockSnap
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
                RDocumentInterface* w = getWrapped();
                
                w->lockSnap(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for lockSnap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: unlockSnap
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::unlockSnap
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
                RDocumentInterface* w = getWrapped();
                
                w->unlockSnap(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unlockSnap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: toggleSnapLock
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::toggleSnapLock
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
                RDocumentInterface* w = getWrapped();
                
                w->toggleSnapLock(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for toggleSnapLock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: isSnapLocked
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::isSnapLocked
              (
                
              ) 
              
                const
              
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
                RDocumentInterface* w = getWrapped();
                bool res = 
                    
                w->isSnapLocked(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSnapLocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getCursorPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getCursorPosition
              (
                
              ) 
              
                const
              
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
                RDocumentInterface* w = getWrapped();
                RVector res = 
                    
                w->getCursorPosition(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCursorPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setCursorPosition
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setCursorPosition
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCursorPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCursorPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setCursorOverride
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setCursorOverride
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCursorOverride(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCursorOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getCursorOverride
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getCursorOverride
              (
                
              ) 
              
                const
              
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
                RDocumentInterface* w = getWrapped();
                bool res = 
                    
                w->getCursorOverride(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCursorOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: deleteTerminatedActions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::deleteTerminatedActions
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
                RDocumentInterface* w = getWrapped();
                
                w->deleteTerminatedActions(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteTerminatedActions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setCurrentColor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setCurrentColor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (RColor)
  
RColor a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getCurrentColor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getCurrentColor
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
                RDocumentInterface* w = getWrapped();
                RColor res = 
                    
                w->getCurrentColor(
                  
                );
              
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setCurrentLineweight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setCurrentLineweight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLineweight_Lineweight(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lw (RLineweight::Lineweight)
  
RLineweight::Lineweight a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLineweight_Lineweight(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentLineweight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getCurrentLineweight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getCurrentLineweight
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
                RDocumentInterface* w = getWrapped();
                RLineweight::Lineweight res = 
                    
                w->getCurrentLineweight(
                  
                );
              
            // return type: RLineweight::Lineweight

            return RJSHelper_qcad::cpp2js_RLineweight_Lineweight(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setCurrentLinetype
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setCurrentLinetype
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetype_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ltId (RLinetype::Id)
  
RLinetype::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetype_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentLinetype(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLinetype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setCurrentLinetypePattern
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setCurrentLinetypePattern
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetypePattern(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RLinetypePattern)
  
RLinetypePattern a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetypePattern(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentLinetypePattern(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getCurrentLinetypeId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getCurrentLinetypeId
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
                RDocumentInterface* w = getWrapped();
                RLinetype::Id res = 
                    
                w->getCurrentLinetypeId(
                  
                );
              
            // return type: RLinetype::Id

            return RJSHelper_qcad::cpp2js_RLinetype_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentLinetypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getCurrentLinetypePattern
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getCurrentLinetypePattern
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
                RDocumentInterface* w = getWrapped();
                RLinetypePattern res = 
                    
                w->getCurrentLinetypePattern(
                  
                );
              
            // return type: RLinetypePattern

            return RJSHelper_qcad::cpp2js_RLinetypePattern(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setCurrentLayer
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setCurrentLayer
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentLayer(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentLayer(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentLayer(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setCurrentBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setCurrentBlock
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
RBlock::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentBlock(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: block (RBlock)
  

          // non copyable:
          RBlock*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBlock_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentBlock(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentBlock(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setCurrentViewport
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setCurrentViewport
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RViewportEntity_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewport (RViewportEntity)
  

          // non copyable:
          RViewportEntity*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RViewportEntity_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentViewport(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: unsetCurrentViewport
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::unsetCurrentViewport
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
                RDocumentInterface* w = getWrapped();
                
                w->unsetCurrentViewport(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unsetCurrentViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setCurrentView
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setCurrentView
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentView(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setCurrentUcs
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setCurrentUcs
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RUcs_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ucs (RUcs)
  

          // non copyable:
          RUcs*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RUcs_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentUcs(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ucsName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setCurrentUcs(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentUcs";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getCurrentUcsName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getCurrentUcsName
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
                RDocumentInterface* w = getWrapped();
                QString res = 
                    
                w->getCurrentUcsName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentUcsName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getLastKnownViewWithFocus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getLastKnownViewWithFocus
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
                RDocumentInterface* w = getWrapped();
                RGraphicsView* res = 
                    
                w->getLastKnownViewWithFocus(
                  
                );
              
            // return type: RGraphicsView*

            return RJSHelper_qcad::cpp2js_RGraphicsView(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLastKnownViewWithFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setLastKnownViewWithFocus
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setLastKnownViewWithFocus
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsView_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: view (RGraphicsView)
  

          // pointer:
          RGraphicsView*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setLastKnownViewWithFocus(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLastKnownViewWithFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: isClipboard
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::isClipboard
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
                RDocumentInterface* w = getWrapped();
                bool res = 
                    
                w->isClipboard(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isClipboard";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: isSuspended
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::isSuspended
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
                RDocumentInterface* w = getWrapped();
                bool res = 
                    
                w->isSuspended(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSuspended";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: setNotifyListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::setNotifyListeners
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                
                w->setNotifyListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNotifyListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: getNotifyListeners
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::getNotifyListeners
              (
                
              ) 
              
                const
              
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
                RDocumentInterface* w = getWrapped();
                bool res = 
                    
                w->getNotifyListeners(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNotifyListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: isDeleting
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::isDeleting
              (
                
              ) 
              
                const
              
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
                RDocumentInterface* w = getWrapped();
                bool res = 
                    
                w->isDeleting(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDeleting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocumentInterface
    // Function: eval
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocumentInterface_Wrapper::eval
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ext (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: script (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocumentInterface* w = getWrapped();
                QVariant res = 
                    
                w->eval(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for eval";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  