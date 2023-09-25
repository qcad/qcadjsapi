
  // Auto generated
  
  // include header:
  //#include "RWheelEventwrapper.h"
  //#include "header_cpp.h"
  
    #include "rwheelevent_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RWheelEvent_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RWheelEvent_Wrapper>("org.qcad", 1, 0, "RWheelEvent_Wrapper");
        qmlRegisterInterface<RWheelEvent_Wrapper>("RWheelEvent_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RWheelEvent* t = new RJSType_RWheelEvent();
          global.setProperty("RJSType_RWheelEvent", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RWheelEvent::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RWheelEvent_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RWheelEvent_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RWheelEvent_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RWheelEvent_BaseJs", mob);
      
      QString fileName = ":generator/js/RWheelEvent.js";
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
    RWheelEvent_Wrapper::RWheelEvent_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RWheelEvent_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RWheelEvent_Wrapper::RWheelEvent_Wrapper(RJSApi& h, RWheelEvent* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RWheelEvent_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RWheelEvent_Wrapper"));
              //setObjectName("RWheelEvent_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RWheelEvent_Wrapper::~RWheelEvent_Wrapper() {
            //RDebug::decCounter(QString("RWheelEvent_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RWheelEvent_Wrapper"));

            //qDebug() << "RWheelEvent_Wrapper::~RWheelEvent_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RWheelEvent";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RWheelEvent_Wrapper::initConnections() {

          //setObjectName("RWheelEvent_Wrapper");

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
  
    // Class: RWheelEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 7
    // preceding Parameters: -1
RWheelEvent_Wrapper::RWheelEvent_Wrapper
                
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
                
                  //RDebug::incCounter(QString("RWheelEvent_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RWheelEvent_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_Qt_MouseButtons(handler, a3
  )

   && RJSHelper::is_Qt_KeyboardModifiers(handler, a4
  )

   && RJSHelper::is_Qt_Orientation(handler, a5
  )

   && RJSHelper_qcad::is_RGraphicsScene_ptr(handler, a6
  )

   && RJSHelper_qcad::is_RGraphicsView_ptr(handler, a7
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: position (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: delta (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: buttons (Qt::MouseButtons)
  
Qt::MouseButtons a3_cpp;

      a3_cpp = RJSHelper::js2cpp_Qt_MouseButtons(handler, a3);
        
  // convert js parameter to cpp: modifiers (Qt::KeyboardModifiers)
  
Qt::KeyboardModifiers a4_cpp;

      a4_cpp = RJSHelper::js2cpp_Qt_KeyboardModifiers(handler, a4);
        
  // convert js parameter to cpp: orient (Qt::Orientation)
  
Qt::Orientation a5_cpp;

      a5_cpp = RJSHelper::js2cpp_Qt_Orientation(handler, a5);
        
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

        
            wrapped = new RWheelEvent(
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
                  

                  qWarning() << "no matching constructor variant found for RWheelEvent";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RWheelEvent
    // Function: getModelPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::getModelPosition
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
                RWheelEvent* w = getWrapped();
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
            
    // Class: RWheelEvent
    // Function: setModelPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::setModelPosition
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
                RWheelEvent* w = getWrapped();
                
                w->setModelPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModelPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: getCursorPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::getCursorPosition
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
                RWheelEvent* w = getWrapped();
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
            
    // Class: RWheelEvent
    // Function: setCursorPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::setCursorPosition
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
                RWheelEvent* w = getWrapped();
                
                w->setCursorPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCursorPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: getScreenPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::getScreenPosition
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
                RWheelEvent* w = getWrapped();
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
            
    // Class: RWheelEvent
    // Function: setScreenPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::setScreenPosition
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
                RWheelEvent* w = getWrapped();
                
                w->setScreenPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setScreenPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: getGraphicsView
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::getGraphicsView
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
                RWheelEvent* w = getWrapped();
                
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
            
    // Class: RWheelEvent
    // Function: getGraphicsScene
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::getGraphicsScene
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
                RWheelEvent* w = getWrapped();
                
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
            
    // Class: RWheelEvent
    // Function: isValid
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::isValid
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
                RWheelEvent* w = getWrapped();
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
  