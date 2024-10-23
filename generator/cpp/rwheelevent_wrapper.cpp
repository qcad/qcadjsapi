
  // Auto generated
  
  // include header:
  //#include "RWheelEventwrapper.h"
  //#include "header_cpp.h"
  
    #include "rwheelevent_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RWheelEvent*> RWheelEvent_Wrapper::basecasters_RWheelEvent;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RWheelEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_WrapperSingleton::registerEventType
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
    
  // convert js parameter to cpp: hint (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = -1;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QEvent::registerEventType(
              a1_cpp
    
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for registerEventType";
                  handler.trace();
                  return QJSValue();
                
              }
            
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
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RWheelEvent_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RWheelEvent_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RWheelEvent_WrapperSingleton * s = new RWheelEvent_WrapperSingleton(handler);
        engine->globalObject().setProperty("RWheelEvent_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
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
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::type
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
                QEvent::Type res = 
                    
                w->type(
                  
                );
              
            // return type: QEvent::Type

            return RJSHelper::cpp2js_QEvent_Type(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::spontaneous
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
                    
                w->spontaneous(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for spontaneous";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::isAccepted
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
                    
                w->isAccepted(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAccepted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::accept
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
                RWheelEvent* w = getWrapped();
                
                w->accept(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for accept";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::ignore
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
                RWheelEvent* w = getWrapped();
                
                w->ignore(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ignore";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::isInputEvent
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
                    
                w->isInputEvent(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isInputEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::isPointerEvent
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
                    
                w->isPointerEvent(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPointerEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::isSinglePointEvent
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
                    
                w->isSinglePointEvent(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSinglePointEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: modifiers
    // Source: QInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::modifiers
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
                Qt::KeyboardModifiers res = 
                    
                w->modifiers(
                  
                );
              
            // return type: Qt::KeyboardModifiers

            return RJSHelper::cpp2js_Qt_KeyboardModifiers(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for modifiers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: setModifiers
    // Source: QInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::setModifiers
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
    
  // convert js parameter to cpp: modifiers (Qt::KeyboardModifiers)
  
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
                RWheelEvent* w = getWrapped();
                
                w->setModifiers(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModifiers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: timestamp
    // Source: QInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::timestamp
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
                quint64 res = 
                    
                w->timestamp(
                  
                );
              
            // return type: quint64

            return RJSHelper::cpp2js_quint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for timestamp";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: setTimestamp
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::setTimestamp
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_quint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: timestamp (quint64)
  
quint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_quint64(handler, a1);
        

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
                
                w->setTimestamp(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTimestamp";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: pointCount
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::pointCount
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
                qsizetype res = 
                    
                w->pointCount(
                  
                );
              
            // return type: qsizetype

            return RJSHelper::cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pointCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: point
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::point
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qsizetype(handler, a1);
        

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
                      QEventPoint* res =
                    &
                w->point(
                  a1_cpp
    
                );
              
            // return type: QEventPoint&

            return RJSHelper::cpp2js_QEventPoint(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for point";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: pointById
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::pointById
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
    
  // convert js parameter to cpp: id (int)
  
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
                RWheelEvent* w = getWrapped();
                QEventPoint* res = 
                    
                w->pointById(
                  a1_cpp
    
                );
              
            // return type: QEventPoint*

            return RJSHelper::cpp2js_QEventPoint(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of RJSHelper::cpp2js_QEventPoint:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pointById";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: allPointsGrabbed
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::allPointsGrabbed
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
                    
                w->allPointsGrabbed(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for allPointsGrabbed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: allPointsAccepted
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::allPointsAccepted
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
                    
                w->allPointsAccepted(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for allPointsAccepted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: setAccepted
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::setAccepted
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
    
  // convert js parameter to cpp: accepted (bool)
  
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
                RWheelEvent* w = getWrapped();
                
                w->setAccepted(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAccepted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: exclusiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::exclusiveGrabber
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QEventPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (QEventPoint)
  
QEventPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEventPoint(handler, a1);
        

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
                QObject* res = 
                    
                w->exclusiveGrabber(
                  a1_cpp
    
                );
              
            // return type: QObject*

            return RJSHelper::cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exclusiveGrabber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: setExclusiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::setExclusiveGrabber
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QEventPoint(handler, a1
  )

   && RJSHelper::is_QObject_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (QEventPoint)
  
QEventPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEventPoint(handler, a1);
        
  // convert js parameter to cpp: exclusiveGrabber (QObject)
  

          // pointer:
          QObject*
         a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a2);
        

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
                
                w->setExclusiveGrabber(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setExclusiveGrabber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: clearPassiveGrabbers
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::clearPassiveGrabbers
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QEventPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (QEventPoint)
  
QEventPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEventPoint(handler, a1);
        

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
                
                w->clearPassiveGrabbers(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearPassiveGrabbers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: addPassiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::addPassiveGrabber
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QEventPoint(handler, a1
  )

   && RJSHelper::is_QObject_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (QEventPoint)
  
QEventPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEventPoint(handler, a1);
        
  // convert js parameter to cpp: grabber (QObject)
  

          // pointer:
          QObject*
         a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a2);
        

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
                    
                w->addPassiveGrabber(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addPassiveGrabber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: removePassiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::removePassiveGrabber
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QEventPoint(handler, a1
  )

   && RJSHelper::is_QObject_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (QEventPoint)
  
QEventPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEventPoint(handler, a1);
        
  // convert js parameter to cpp: grabber (QObject)
  

          // pointer:
          QObject*
         a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a2);
        

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
                    
                w->removePassiveGrabber(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for removePassiveGrabber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: button
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::button
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
                Qt::MouseButton res = 
                    
                w->button(
                  
                );
              
            // return type: Qt::MouseButton

            return RJSHelper::cpp2js_Qt_MouseButton(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for button";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: buttons
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::buttons
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
                Qt::MouseButtons res = 
                    
                w->buttons(
                  
                );
              
            // return type: Qt::MouseButtons

            return RJSHelper::cpp2js_Qt_MouseButtons(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for buttons";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: position
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::position
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
                QPointF res = 
                    
                w->position(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for position";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: scenePosition
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::scenePosition
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
                QPointF res = 
                    
                w->scenePosition(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scenePosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: globalPosition
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::globalPosition
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
                QPointF res = 
                    
                w->globalPosition(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for globalPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: exclusivePointGrabber
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::exclusivePointGrabber
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
                QObject* res = 
                    
                w->exclusivePointGrabber(
                  
                );
              
            // return type: QObject*

            return RJSHelper::cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exclusivePointGrabber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: setExclusivePointGrabber
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::setExclusivePointGrabber
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: exclusiveGrabber (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

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
                
                w->setExclusivePointGrabber(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setExclusivePointGrabber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: clone
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::clone
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
                QWheelEvent* res = 
                    
                w->clone(
                  
                );
              
            // return type: QWheelEvent*

            return RJSHelper::cpp2js_QWheelEvent(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clone";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: pixelDelta
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::pixelDelta
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
                QPoint res = 
                    
                w->pixelDelta(
                  
                );
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pixelDelta";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: angleDelta
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::angleDelta
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
                QPoint res = 
                    
                w->angleDelta(
                  
                );
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for angleDelta";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: phase
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::phase
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
                Qt::ScrollPhase res = 
                    
                w->phase(
                  
                );
              
            // return type: Qt::ScrollPhase

            return RJSHelper::cpp2js_Qt_ScrollPhase(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for phase";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: inverted
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::inverted
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
                    
                w->inverted(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for inverted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: isInverted
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::isInverted
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
                    
                w->isInverted(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isInverted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: hasPixelDelta
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::hasPixelDelta
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
                    
                w->hasPixelDelta(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasPixelDelta";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: isBeginEvent
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::isBeginEvent
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
                    
                w->isBeginEvent(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBeginEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: isUpdateEvent
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::isUpdateEvent
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
                    
                w->isUpdateEvent(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isUpdateEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: isEndEvent
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::isEndEvent
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
                    
                w->isEndEvent(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEndEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RWheelEvent
    // Function: source
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RWheelEvent_Wrapper::source
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
                Qt::MouseEventSource res = 
                    
                w->source(
                  
                );
              
            // return type: Qt::MouseEventSource

            return RJSHelper::cpp2js_Qt_MouseEventSource(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for source";
                  handler.trace();
                  return QJSValue();
                
              }
            
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
  
    #include "moc_rwheelevent_wrapper.cpp"
  
