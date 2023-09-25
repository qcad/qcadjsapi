
  // Auto generated
  
  // include header:
  //#include "RMouseEventwrapper.h"
  //#include "header_cpp.h"
  
    #include "rmouseevent_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RMouseEvent
    // Function: hasMouseMoved
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMouseEvent_WrapperSingleton::hasMouseMoved
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RMouseEvent::hasMouseMoved(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasMouseMoved";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMouseEvent
    // Function: resetOriginalMousePos
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMouseEvent_WrapperSingleton::resetOriginalMousePos
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RMouseEvent::resetOriginalMousePos(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resetOriginalMousePos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMouseEvent
    // Function: setOriginalMousePos
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMouseEvent_WrapperSingleton::setOriginalMousePos
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RMouseEvent::setOriginalMousePos(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOriginalMousePos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RMouseEvent_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RMouseEvent_Wrapper>("org.qcad", 1, 0, "RMouseEvent_Wrapper");
        qmlRegisterInterface<RMouseEvent_Wrapper>("RMouseEvent_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RMouseEvent* t = new RJSType_RMouseEvent();
          global.setProperty("RJSType_RMouseEvent", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RMouseEvent::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RMouseEvent_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RMouseEvent_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RMouseEvent_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RMouseEvent_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RMouseEvent_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RMouseEvent_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RMouseEvent_WrapperSingleton * s = new RMouseEvent_WrapperSingleton(handler);
        engine->globalObject().setProperty("RMouseEvent_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RMouseEvent.js";
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
    RMouseEvent_Wrapper::RMouseEvent_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RMouseEvent_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RMouseEvent_Wrapper::RMouseEvent_Wrapper(RJSApi& h, RMouseEvent* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RMouseEvent_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RMouseEvent_Wrapper"));
              //setObjectName("RMouseEvent_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RMouseEvent_Wrapper::~RMouseEvent_Wrapper() {
            //RDebug::decCounter(QString("RMouseEvent_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RMouseEvent_Wrapper"));

            //qDebug() << "RMouseEvent_Wrapper::~RMouseEvent_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RMouseEvent";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RMouseEvent_Wrapper::initConnections() {

          //setObjectName("RMouseEvent_Wrapper");

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
  
    // Class: RMouseEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 7
    // preceding Parameters: -1
RMouseEvent_Wrapper::RMouseEvent_Wrapper
                
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
  a4, 
  const QJSValue& 
  a5, 
  const QJSValue& 
  a6, 
  const QJSValue& 
  a7
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RMouseEvent_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RMouseEvent_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QEvent_Type(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper::is_Qt_MouseButton(handler, a3
  )

   && RJSHelper::is_Qt_MouseButtons(handler, a4
  )

   && RJSHelper::is_Qt_KeyboardModifiers(handler, a5
  )

   && RJSHelper_qcad::is_RGraphicsScene_ptr(handler, a6
  )

   && RJSHelper_qcad::is_RGraphicsView_ptr(handler, a7
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (QEvent::Type)
  
QEvent::Type a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEvent_Type(handler, a1);
        
  // convert js parameter to cpp: position (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: button (Qt::MouseButton)
  
Qt::MouseButton a3_cpp;

      a3_cpp = RJSHelper::js2cpp_Qt_MouseButton(handler, a3);
        
  // convert js parameter to cpp: buttons (Qt::MouseButtons)
  
Qt::MouseButtons a4_cpp;

      a4_cpp = RJSHelper::js2cpp_Qt_MouseButtons(handler, a4);
        
  // convert js parameter to cpp: modifiers (Qt::KeyboardModifiers)
  
Qt::KeyboardModifiers a5_cpp;

      a5_cpp = RJSHelper::js2cpp_Qt_KeyboardModifiers(handler, a5);
        
  // convert js parameter to cpp: s (RGraphicsScene)
  

          // non copyable:
          RGraphicsScene*
         a6_cpp;

      a6_cpp = RJSHelper_qcad::js2cpp_RGraphicsScene_ptr(handler, a6);
        
  // convert js parameter to cpp: v (RGraphicsView)
  

          // non copyable:
          RGraphicsView*
         a7_cpp;

      a7_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a7);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RMouseEvent(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , *a6_cpp
    , *a7_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      // check parameter types:
      if (
        RJSHelper::is_QMouseEvent_ptr(handler, a1
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
    
  // convert js parameter to cpp: mouseEvent (QMouseEvent)
  

          // non copyable:
          QMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMouseEvent_ptr(handler, a1);
        
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

        
            wrapped = new RMouseEvent(
                *a1_cpp
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
   && a5.isUndefined()
   && a6.isUndefined()
   && a7.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RMouseEvent";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RMouseEvent
    // Function: getModelPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMouseEvent_Wrapper::getModelPosition
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
                RMouseEvent* w = getWrapped();
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
            
    // Class: RMouseEvent
    // Function: setModelPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMouseEvent_Wrapper::setModelPosition
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
                RMouseEvent* w = getWrapped();
                
                w->setModelPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModelPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMouseEvent
    // Function: getCursorPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMouseEvent_Wrapper::getCursorPosition
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
                RMouseEvent* w = getWrapped();
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
            
    // Class: RMouseEvent
    // Function: setCursorPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMouseEvent_Wrapper::setCursorPosition
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
                RMouseEvent* w = getWrapped();
                
                w->setCursorPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCursorPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMouseEvent
    // Function: getScreenPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMouseEvent_Wrapper::getScreenPosition
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
                RMouseEvent* w = getWrapped();
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
            
    // Class: RMouseEvent
    // Function: setScreenPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMouseEvent_Wrapper::setScreenPosition
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
                RMouseEvent* w = getWrapped();
                
                w->setScreenPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setScreenPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMouseEvent
    // Function: getGraphicsView
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMouseEvent_Wrapper::getGraphicsView
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
                RMouseEvent* w = getWrapped();
                
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
            
    // Class: RMouseEvent
    // Function: getGraphicsScene
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMouseEvent_Wrapper::getGraphicsScene
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
                RMouseEvent* w = getWrapped();
                
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
            
    // Class: RMouseEvent
    // Function: isValid
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMouseEvent_Wrapper::isValid
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
                RMouseEvent* w = getWrapped();
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
  