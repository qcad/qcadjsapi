
  // Auto generated
  
  // include header:
  //#include "RInputEventwrapper.h"
  //#include "header_cpp.h"
  
    #include "rinputevent_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RInputEvent*> RInputEvent_Wrapper::basecasters_RInputEvent;
    
    // static functions implementation in singleton wrapper:
    
    void RInputEvent_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RInputEvent_Wrapper>("org.qcad", 1, 0, "RInputEvent_Wrapper");
        qmlRegisterInterface<RInputEvent_Wrapper>("RInputEvent_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RInputEvent* t = new RJSType_RInputEvent();
          global.setProperty("RJSType_RInputEvent", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RInputEvent::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RInputEvent_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RInputEvent_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RInputEvent_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RInputEvent_BaseJs", mob);
      
      QString fileName = ":generator/js/RInputEvent.js";
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
    RInputEvent_Wrapper::RInputEvent_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RInputEvent_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RInputEvent_Wrapper::RInputEvent_Wrapper(RJSApi& h, RInputEvent* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RInputEvent_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RInputEvent_Wrapper"));
              //setObjectName("RInputEvent_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RInputEvent_Wrapper::~RInputEvent_Wrapper() {
            //RDebug::decCounter(QString("RInputEvent_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RInputEvent_Wrapper"));

            //qDebug() << "RInputEvent_Wrapper::~RInputEvent_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RInputEvent";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RInputEvent_Wrapper::initConnections() {

          //setObjectName("RInputEvent_Wrapper");

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
  
    // Class: RInputEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
RInputEvent_Wrapper::RInputEvent_Wrapper
                
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
                
                  //RDebug::incCounter(QString("RInputEvent_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RInputEvent_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RGraphicsScene_ptr(handler, a2
  )

   && RJSHelper_qcad::is_RGraphicsView_ptr(handler, a3
  )

   && RJSHelper::is_qreal(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: position (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: s (RGraphicsScene)
  

          // non copyable:
          RGraphicsScene*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RGraphicsScene_ptr(handler, a2);
        
  // convert js parameter to cpp: v (RGraphicsView)
  

          // non copyable:
          RGraphicsView*
         a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a3);
        
  // convert js parameter to cpp: devicePixelRatio (qreal)
  
qreal a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_qreal(handler, a4);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RInputEvent(
                a1_cpp
    , *a2_cpp
    , *a3_cpp
    , a4_cpp
    
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
                  

                  qWarning() << "no matching constructor variant found for RInputEvent";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RInputEvent
    // Function: getModelPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RInputEvent_Wrapper::getModelPosition
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
                RInputEvent* w = getWrapped();
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
            
    // Class: RInputEvent
    // Function: setModelPosition
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RInputEvent_Wrapper::setModelPosition
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
                RInputEvent* w = getWrapped();
                
                w->setModelPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModelPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RInputEvent
    // Function: getCursorPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RInputEvent_Wrapper::getCursorPosition
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
                RInputEvent* w = getWrapped();
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
            
    // Class: RInputEvent
    // Function: setCursorPosition
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RInputEvent_Wrapper::setCursorPosition
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
                RInputEvent* w = getWrapped();
                
                w->setCursorPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCursorPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RInputEvent
    // Function: getScreenPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RInputEvent_Wrapper::getScreenPosition
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
                RInputEvent* w = getWrapped();
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
            
    // Class: RInputEvent
    // Function: setScreenPosition
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RInputEvent_Wrapper::setScreenPosition
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
                RInputEvent* w = getWrapped();
                
                w->setScreenPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setScreenPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RInputEvent
    // Function: getGraphicsView
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RInputEvent_Wrapper::getGraphicsView
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
                RInputEvent* w = getWrapped();
                
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
            
    // Class: RInputEvent
    // Function: getGraphicsScene
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RInputEvent_Wrapper::getGraphicsScene
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
                RInputEvent* w = getWrapped();
                
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
            
    // Class: RInputEvent
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RInputEvent_Wrapper::isValid
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
                RInputEvent* w = getWrapped();
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
  
    #include "moc_rinputevent_wrapper.cpp"
  
