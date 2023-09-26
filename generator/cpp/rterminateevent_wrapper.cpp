
  // Auto generated
  
  // include header:
  //#include "RTerminateEventwrapper.h"
  //#include "header_cpp.h"
  
    #include "rterminateevent_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RTerminateEvent*> RTerminateEvent_Wrapper::basecasters_RTerminateEvent;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RTerminateEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTerminateEvent_WrapperSingleton::registerEventType
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
            
    void RTerminateEvent_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RTerminateEvent_Wrapper>("org.qcad", 1, 0, "RTerminateEvent_Wrapper");
        qmlRegisterInterface<RTerminateEvent_Wrapper>("RTerminateEvent_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RTerminateEvent* t = new RJSType_RTerminateEvent();
          global.setProperty("RJSType_RTerminateEvent", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RTerminateEvent::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RTerminateEvent_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RTerminateEvent_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RTerminateEvent_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RTerminateEvent_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RTerminateEvent_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RTerminateEvent_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RTerminateEvent_WrapperSingleton * s = new RTerminateEvent_WrapperSingleton(handler);
        engine->globalObject().setProperty("RTerminateEvent_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RTerminateEvent.js";
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
    RTerminateEvent_Wrapper::RTerminateEvent_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RTerminateEvent_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RTerminateEvent_Wrapper::RTerminateEvent_Wrapper(RJSApi& h, RTerminateEvent* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RTerminateEvent_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTerminateEvent_Wrapper"));
              //setObjectName("RTerminateEvent_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RTerminateEvent_Wrapper::~RTerminateEvent_Wrapper() {
            //RDebug::decCounter(QString("RTerminateEvent_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RTerminateEvent_Wrapper"));

            //qDebug() << "RTerminateEvent_Wrapper::~RTerminateEvent_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RTerminateEvent";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RTerminateEvent_Wrapper::initConnections() {

          //setObjectName("RTerminateEvent_Wrapper");

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
  
    // Class: RTerminateEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RTerminateEvent_Wrapper::RTerminateEvent_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RTerminateEvent_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RTerminateEvent_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTerminateEvent(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RTerminateEvent";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RTerminateEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTerminateEvent_Wrapper::type
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
                RTerminateEvent* w = getWrapped();
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
            
    // Class: RTerminateEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTerminateEvent_Wrapper::spontaneous
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
                RTerminateEvent* w = getWrapped();
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
            
    // Class: RTerminateEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTerminateEvent_Wrapper::setAccepted
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
                RTerminateEvent* w = getWrapped();
                
                w->setAccepted(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAccepted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTerminateEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTerminateEvent_Wrapper::isAccepted
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
                RTerminateEvent* w = getWrapped();
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
            
    // Class: RTerminateEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTerminateEvent_Wrapper::accept
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
                RTerminateEvent* w = getWrapped();
                
                w->accept(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for accept";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTerminateEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTerminateEvent_Wrapper::ignore
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
                RTerminateEvent* w = getWrapped();
                
                w->ignore(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ignore";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTerminateEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTerminateEvent_Wrapper::isInputEvent
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
                RTerminateEvent* w = getWrapped();
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
            
    // Class: RTerminateEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTerminateEvent_Wrapper::isPointerEvent
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
                RTerminateEvent* w = getWrapped();
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
            
    // Class: RTerminateEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTerminateEvent_Wrapper::isSinglePointEvent
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
                RTerminateEvent* w = getWrapped();
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
            
    // Class: RTerminateEvent
    // Function: clone
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTerminateEvent_Wrapper::clone
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
                RTerminateEvent* w = getWrapped();
                QEvent* res = 
                    
                w->clone(
                  
                );
              
            // return type: QEvent*

            return RJSHelper::cpp2js_QEvent(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clone";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
