
  // Auto generated
  
  // include header:
  //#include "RSnapEndwrapper.h"
  //#include "header_cpp.h"
  
    #include "rsnapend_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RSnapEnd*> RSnapEnd_Wrapper::basecasters_RSnapEnd;
    
    // static functions implementation in singleton wrapper:
    
    void RSnapEnd_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RSnapEnd_Wrapper>("org.qcad", 1, 0, "RSnapEnd_Wrapper");
        qmlRegisterInterface<RSnapEnd_Wrapper>("RSnapEnd_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RSnapEnd* t = new RJSType_RSnapEnd();
          global.setProperty("RJSType_RSnapEnd", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RSnapEnd::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RSnapEnd_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RSnapEnd_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RSnapEnd_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RSnapEnd_BaseJs", mob);
      
      QString fileName = ":generator/js/RSnapEnd.js";
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
    RSnapEnd_Wrapper::RSnapEnd_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RSnapEnd_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RSnapEnd_Wrapper::RSnapEnd_Wrapper(RJSApi& h, RSnapEnd* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RSnapEnd_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RSnapEnd_Wrapper"));
              //setObjectName("RSnapEnd_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RSnapEnd_Wrapper::~RSnapEnd_Wrapper() {
            //RDebug::decCounter(QString("RSnapEnd_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RSnapEnd_Wrapper"));

            //qDebug() << "RSnapEnd_Wrapper::~RSnapEnd_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RSnapEnd";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RSnapEnd_Wrapper::initConnections() {

          //setObjectName("RSnapEnd_Wrapper");

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
  
    // Class: RSnapEnd
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RSnapEnd_Wrapper::RSnapEnd_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RSnapEnd_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RSnapEnd_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RSnapEnd(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RSnapEnd";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RSnapEnd
    // Function: showUiOptions
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapEnd_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      showUiOptionsSuper
                    
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
                RSnapEnd* w = getWrapped();
                
                w->showUiOptions(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showUiOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEnd
    // Function: hideUiOptions
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapEnd_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      hideUiOptionsSuper
                    
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
                RSnapEnd* w = getWrapped();
                
                w->hideUiOptions(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for hideUiOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEnd
    // Function: suspendEvent
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapEnd_Wrapper::suspendEvent
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
                RSnapEnd* w = getWrapped();
                
                w->suspendEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for suspendEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEnd
    // Function: finishEvent
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapEnd_Wrapper::finishEvent
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
                RSnapEnd* w = getWrapped();
                
                w->finishEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for finishEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEnd
    // Function: getEntityIds
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapEnd_Wrapper::getEntityIds
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
                RSnapEnd* w = getWrapped();
                QList<REntity::Id> res = 
                    
                w->getEntityIds(
                  
                );
              
            // return type: QList<REntity::Id>

            return RJSHelper_qcad::cpp2js_QList_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEntityIds";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEnd
    // Function: getStatus
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapEnd_Wrapper::getStatus
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
                RSnapEnd* w = getWrapped();
                RSnap::Status res = 
                    
                w->getStatus(
                  
                );
              
            // return type: RSnap::Status

            return RJSHelper_qcad::cpp2js_RSnap_Status(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEnd
    // Function: setStatus
    // Source: RSnap
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapEnd_Wrapper::setStatus
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSnap_Status(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RSnap::Status)
  
RSnap::Status a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSnap_Status(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSnapEnd* w = getWrapped();
                
                w->setStatus(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEnd
    // Function: getLastSnap
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapEnd_Wrapper::getLastSnap
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
                RSnapEnd* w = getWrapped();
                RVector res = 
                    
                w->getLastSnap(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLastSnap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEnd
    // Function: setLastSnap
    // Source: RSnap
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapEnd_Wrapper::setLastSnap
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
                RSnapEnd* w = getWrapped();
                
                w->setLastSnap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLastSnap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEnd
    // Function: reset
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapEnd_Wrapper::reset
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
                RSnapEnd* w = getWrapped();
                
                w->reset(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEnd
    // Function: snap
    // Source: RSnapEntityBase
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RSnapEnd_Wrapper::snap
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
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RGraphicsView_ptr(handler, a2
  )

   && RJSHelper_qcad::is_QSet_REntity_Id(handler, a3
  )

   && RJSHelper_qcad::is_RBox(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: position (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: view (RGraphicsView)
  

          // non copyable:
          RGraphicsView*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a2);
        
  // convert js parameter to cpp: candidates (QSet<REntity::Id>)
  
QSet<REntity::Id> a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a3);
        
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a4_cpp;

      a4_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSnapEnd* w = getWrapped();
                RVector res = 
                    
                w->snap(
                  a1_cpp
    , *a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RGraphicsView_ptr(handler, a2
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: position (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: view (RGraphicsView)
  

          // non copyable:
          RGraphicsView*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a2);
        
  // convert js parameter to cpp: range (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RNANDOUBLE;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
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
                RSnapEnd* w = getWrapped();
                RVector res = 
                    
                w->snap(
                  a1_cpp
    , *a2_cpp
    , a3_cpp
    
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rsnapend_wrapper.cpp"
  
