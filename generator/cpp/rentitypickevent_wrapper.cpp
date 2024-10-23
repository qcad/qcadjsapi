
  // Auto generated
  
  // include header:
  //#include "REntityPickEventwrapper.h"
  //#include "header_cpp.h"
  
    #include "rentitypickevent_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_REntityPickEvent*> REntityPickEvent_Wrapper::basecasters_REntityPickEvent;
    
    // static functions implementation in singleton wrapper:
    
    void REntityPickEvent_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<REntityPickEvent_Wrapper>("org.qcad", 1, 0, "REntityPickEvent_Wrapper");
        qmlRegisterInterface<REntityPickEvent_Wrapper>("REntityPickEvent_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_REntityPickEvent* t = new RJSType_REntityPickEvent();
          global.setProperty("RJSType_REntityPickEvent", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_REntityPickEvent::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&REntityPickEvent_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("REntityPickEvent_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&REntityPickEvent_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("REntityPickEvent_BaseJs", mob);
      
      QString fileName = ":generator/js/REntityPickEvent.js";
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
    REntityPickEvent_Wrapper::REntityPickEvent_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("REntityPickEvent_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      REntityPickEvent_Wrapper::REntityPickEvent_Wrapper(RJSApi& h, REntityPickEvent* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("REntityPickEvent_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("REntityPickEvent_Wrapper"));
              //setObjectName("REntityPickEvent_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      REntityPickEvent_Wrapper::~REntityPickEvent_Wrapper() {
            //RDebug::decCounter(QString("REntityPickEvent_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("REntityPickEvent_Wrapper"));

            //qDebug() << "REntityPickEvent_Wrapper::~REntityPickEvent_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of REntityPickEvent";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void REntityPickEvent_Wrapper::initConnections() {

          //setObjectName("REntityPickEvent_Wrapper");

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
  
    // Class: REntityPickEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
REntityPickEvent_Wrapper::REntityPickEvent_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("REntityPickEvent_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("REntityPickEvent_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper_qcad::is_RGraphicsScene_ptr(handler, a3
  )

   && RJSHelper_qcad::is_RGraphicsView_ptr(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: position (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: s (RGraphicsScene)
  

          // non copyable:
          RGraphicsScene*
         a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RGraphicsScene_ptr(handler, a3);
        
  // convert js parameter to cpp: v (RGraphicsView)
  

          // non copyable:
          RGraphicsView*
         a4_cpp;

      a4_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a4);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new REntityPickEvent(
                a1_cpp
    , a2_cpp
    , *a3_cpp
    , *a4_cpp
    
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
   && a2.isUndefined()
   && a3.isUndefined()
   && a4.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for REntityPickEvent";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: REntityPickEvent
    // Function: getModelPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              REntityPickEvent_Wrapper::getModelPosition
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
                REntityPickEvent* w = getWrapped();
                RVector res = 
                    
                w->getModelPosition(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getModelPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REntityPickEvent
    // Function: setModelPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              REntityPickEvent_Wrapper::setModelPosition
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
    
  // convert js parameter to cpp: v (RVector)
  
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
                REntityPickEvent* w = getWrapped();
                
                w->setModelPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModelPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REntityPickEvent
    // Function: getCursorPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              REntityPickEvent_Wrapper::getCursorPosition
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
                REntityPickEvent* w = getWrapped();
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
            
    // Class: REntityPickEvent
    // Function: setCursorPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              REntityPickEvent_Wrapper::setCursorPosition
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
    
  // convert js parameter to cpp: v (RVector)
  
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
                REntityPickEvent* w = getWrapped();
                
                w->setCursorPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCursorPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REntityPickEvent
    // Function: getScreenPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              REntityPickEvent_Wrapper::getScreenPosition
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
                REntityPickEvent* w = getWrapped();
                RVector res = 
                    
                w->getScreenPosition(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getScreenPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REntityPickEvent
    // Function: setScreenPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              REntityPickEvent_Wrapper::setScreenPosition
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
    
  // convert js parameter to cpp: v (RVector)
  
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
                REntityPickEvent* w = getWrapped();
                
                w->setScreenPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setScreenPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REntityPickEvent
    // Function: getGraphicsView
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              REntityPickEvent_Wrapper::getGraphicsView
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
                REntityPickEvent* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RGraphicsView* res =
                    &
                w->getGraphicsView(
                  
                );
              
            // return type: RGraphicsView&

            return RJSHelper_qcad::cpp2js_RGraphicsView(
              handler, 
              // non-copyable: true
                  // return type is reference, type is not copyable:
                  // convert using pointer:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGraphicsView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REntityPickEvent
    // Function: getGraphicsScene
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              REntityPickEvent_Wrapper::getGraphicsScene
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
                REntityPickEvent* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RGraphicsScene* res =
                    &
                w->getGraphicsScene(
                  
                );
              
            // return type: RGraphicsScene&

            return RJSHelper_qcad::cpp2js_RGraphicsScene(
              handler, 
              // non-copyable: true
                  // return type is reference, type is not copyable:
                  // convert using pointer:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGraphicsScene";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REntityPickEvent
    // Function: getEntityId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              REntityPickEvent_Wrapper::getEntityId
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
                REntityPickEvent* w = getWrapped();
                REntity::Id res = 
                    
                w->getEntityId(
                  
                );
              
            // return type: REntity::Id

            return RJSHelper_qcad::cpp2js_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEntityId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REntityPickEvent
    // Function: setModifiers
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              REntityPickEvent_Wrapper::setModifiers
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_KeyboardModifiers(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m (Qt::KeyboardModifiers)
  
Qt::KeyboardModifiers a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_KeyboardModifiers(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                REntityPickEvent* w = getWrapped();
                
                w->setModifiers(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModifiers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REntityPickEvent
    // Function: getModifiers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              REntityPickEvent_Wrapper::getModifiers
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
                REntityPickEvent* w = getWrapped();
                Qt::KeyboardModifiers res = 
                    
                w->getModifiers(
                  
                );
              
            // return type: Qt::KeyboardModifiers

            return RJSHelper::cpp2js_Qt_KeyboardModifiers(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getModifiers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: REntityPickEvent
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              REntityPickEvent_Wrapper::isValid
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
                REntityPickEvent* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rentitypickevent_wrapper.cpp"
  
