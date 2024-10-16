
  // Auto generated
  
  // include header:
  //#include "RSnapGridwrapper.h"
  //#include "header_cpp.h"
  
    #include "rsnapgrid_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RSnapGrid*> RSnapGrid_Wrapper::basecasters_RSnapGrid;
    
    // static functions implementation in singleton wrapper:
    
    void RSnapGrid_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RSnapGrid_Wrapper>("org.qcad", 1, 0, "RSnapGrid_Wrapper");
        qmlRegisterInterface<RSnapGrid_Wrapper>("RSnapGrid_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RSnapGrid* t = new RJSType_RSnapGrid();
          global.setProperty("RJSType_RSnapGrid", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RSnapGrid::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RSnapGrid_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RSnapGrid_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RSnapGrid_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RSnapGrid_BaseJs", mob);
      
      QString fileName = ":generator/js/RSnapGrid.js";
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
    RSnapGrid_Wrapper::RSnapGrid_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RSnapGrid_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RSnapGrid_Wrapper::RSnapGrid_Wrapper(RJSApi& h, RSnapGrid* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RSnapGrid_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RSnapGrid_Wrapper"));
              //setObjectName("RSnapGrid_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RSnapGrid_Wrapper::~RSnapGrid_Wrapper() {
            //RDebug::decCounter(QString("RSnapGrid_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RSnapGrid_Wrapper"));

            //qDebug() << "RSnapGrid_Wrapper::~RSnapGrid_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RSnapGrid";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RSnapGrid_Wrapper::initConnections() {

          //setObjectName("RSnapGrid_Wrapper");

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
  
    // Class: RSnapGrid
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RSnapGrid_Wrapper::RSnapGrid_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RSnapGrid_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RSnapGrid_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RSnapGrid(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RSnapGrid";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RSnapGrid
    // Function: showUiOptions
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapGrid_Wrapper:: 
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
                RSnapGrid* w = getWrapped();
                
                w->showUiOptions(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showUiOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapGrid
    // Function: hideUiOptions
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapGrid_Wrapper:: 
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
                RSnapGrid* w = getWrapped();
                
                w->hideUiOptions(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for hideUiOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapGrid
    // Function: suspendEvent
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapGrid_Wrapper::suspendEvent
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
                RSnapGrid* w = getWrapped();
                
                w->suspendEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for suspendEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapGrid
    // Function: finishEvent
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapGrid_Wrapper::finishEvent
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
                RSnapGrid* w = getWrapped();
                
                w->finishEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for finishEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapGrid
    // Function: getEntityIds
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapGrid_Wrapper::getEntityIds
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
                RSnapGrid* w = getWrapped();
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
            
    // Class: RSnapGrid
    // Function: getStatus
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapGrid_Wrapper::getStatus
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
                RSnapGrid* w = getWrapped();
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
            
    // Class: RSnapGrid
    // Function: setStatus
    // Source: RSnap
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapGrid_Wrapper::setStatus
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
                RSnapGrid* w = getWrapped();
                
                w->setStatus(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapGrid
    // Function: getLastSnap
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapGrid_Wrapper::getLastSnap
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
                RSnapGrid* w = getWrapped();
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
            
    // Class: RSnapGrid
    // Function: setLastSnap
    // Source: RSnap
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapGrid_Wrapper::setLastSnap
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
                RSnapGrid* w = getWrapped();
                
                w->setLastSnap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLastSnap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapGrid
    // Function: reset
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapGrid_Wrapper::reset
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
                RSnapGrid* w = getWrapped();
                
                w->reset(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapGrid
    // Function: snap
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RSnapGrid_Wrapper::snap
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
                RSnapGrid* w = getWrapped();
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
  
    #include "moc_rsnapgrid_wrapper.cpp"
  
