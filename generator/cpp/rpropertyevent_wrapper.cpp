
  // Auto generated
  
  // include header:
  //#include "RPropertyEventwrapper.h"
  //#include "header_cpp.h"
  
    #include "rpropertyevent_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RPropertyEvent*> RPropertyEvent_Wrapper::basecasters_RPropertyEvent;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RPropertyEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPropertyEvent_WrapperSingleton::registerEventType
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
            
    void RPropertyEvent_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPropertyEvent_Wrapper>("org.qcad", 1, 0, "RPropertyEvent_Wrapper");
        qmlRegisterInterface<RPropertyEvent_Wrapper>("RPropertyEvent_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPropertyEvent* t = new RJSType_RPropertyEvent();
          global.setProperty("RJSType_RPropertyEvent", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPropertyEvent::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPropertyEvent_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPropertyEvent_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPropertyEvent_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPropertyEvent_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RPropertyEvent_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RPropertyEvent_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RPropertyEvent_WrapperSingleton * s = new RPropertyEvent_WrapperSingleton(handler);
        engine->globalObject().setProperty("RPropertyEvent_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RPropertyEvent.js";
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
    RPropertyEvent_Wrapper::RPropertyEvent_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPropertyEvent_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPropertyEvent_Wrapper::RPropertyEvent_Wrapper(RJSApi& h, RPropertyEvent* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPropertyEvent_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPropertyEvent_Wrapper"));
              //setObjectName("RPropertyEvent_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPropertyEvent_Wrapper::~RPropertyEvent_Wrapper() {
            //RDebug::decCounter(QString("RPropertyEvent_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPropertyEvent_Wrapper"));

            //qDebug() << "RPropertyEvent_Wrapper::~RPropertyEvent_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RPropertyEvent";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPropertyEvent_Wrapper::initConnections() {

          //setObjectName("RPropertyEvent_Wrapper");

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
  
    // Class: RPropertyEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
RPropertyEvent_Wrapper::RPropertyEvent_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RPropertyEvent_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RPropertyEvent_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPropertyTypeId(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

   && RJSHelper_qcad::is_RS_EntityType(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyTypeId (RPropertyTypeId)
  
RPropertyTypeId a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyTypeId(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        
  // convert js parameter to cpp: entityTypeFilter (RS::EntityType)
  
RS::EntityType a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RS::EntityAll;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a3);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RPropertyEvent(
                a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RPropertyEvent(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RPropertyEvent";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RPropertyEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEvent_Wrapper::type
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
                RPropertyEvent* w = getWrapped();
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
            
    // Class: RPropertyEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEvent_Wrapper::spontaneous
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
                RPropertyEvent* w = getWrapped();
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
            
    // Class: RPropertyEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPropertyEvent_Wrapper::setAccepted
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
                RPropertyEvent* w = getWrapped();
                
                w->setAccepted(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAccepted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEvent_Wrapper::isAccepted
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
                RPropertyEvent* w = getWrapped();
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
            
    // Class: RPropertyEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEvent_Wrapper::accept
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
                RPropertyEvent* w = getWrapped();
                
                w->accept(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for accept";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEvent_Wrapper::ignore
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
                RPropertyEvent* w = getWrapped();
                
                w->ignore(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ignore";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEvent_Wrapper::isInputEvent
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
                RPropertyEvent* w = getWrapped();
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
            
    // Class: RPropertyEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEvent_Wrapper::isPointerEvent
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
                RPropertyEvent* w = getWrapped();
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
            
    // Class: RPropertyEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEvent_Wrapper::isSinglePointEvent
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
                RPropertyEvent* w = getWrapped();
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
            
    // Class: RPropertyEvent
    // Function: clone
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEvent_Wrapper::clone
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
                RPropertyEvent* w = getWrapped();
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
            
    // Class: RPropertyEvent
    // Function: getPropertyTypeId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEvent_Wrapper::getPropertyTypeId
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
                RPropertyEvent* w = getWrapped();
                RPropertyTypeId res = 
                    
                w->getPropertyTypeId(
                  
                );
              
            // return type: RPropertyTypeId

            return RJSHelper_qcad::cpp2js_RPropertyTypeId(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPropertyTypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEvent
    // Function: getValue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEvent_Wrapper::getValue
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
                RPropertyEvent* w = getWrapped();
                QVariant res = 
                    
                w->getValue(
                  
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEvent
    // Function: getEntityTypeFilter
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEvent_Wrapper::getEntityTypeFilter
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
                RPropertyEvent* w = getWrapped();
                RS::EntityType res = 
                    
                w->getEntityTypeFilter(
                  
                );
              
            // return type: RS::EntityType

            return RJSHelper_qcad::cpp2js_RS_EntityType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEntityTypeFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
