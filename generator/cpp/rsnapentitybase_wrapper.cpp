
  // Auto generated
  
  // include header:
  //#include "RSnapEntityBasewrapper.h"
  //#include "header_cpp.h"
  
    #include "rsnapentitybase_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RSnapEntityBase*> RSnapEntityBase_Wrapper::basecasters_RSnapEntityBase;
    
    // static functions implementation in singleton wrapper:
    
    void RSnapEntityBase_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RSnapEntityBase_Wrapper>("org.qcad", 1, 0, "RSnapEntityBase_Wrapper");
        qmlRegisterInterface<RSnapEntityBase_Wrapper>("RSnapEntityBase_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RSnapEntityBase* t = new RJSType_RSnapEntityBase();
          global.setProperty("RJSType_RSnapEntityBase", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RSnapEntityBase::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RSnapEntityBase_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RSnapEntityBase_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RSnapEntityBase_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RSnapEntityBase_BaseJs", mob);
      
      QString fileName = ":generator/js/RSnapEntityBase.js";
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
    RSnapEntityBase_Wrapper::RSnapEntityBase_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RSnapEntityBase_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RSnapEntityBase_Wrapper::RSnapEntityBase_Wrapper(RJSApi& h, RSnapEntityBase* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RSnapEntityBase_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RSnapEntityBase_Wrapper"));
              //setObjectName("RSnapEntityBase_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RSnapEntityBase_Wrapper::~RSnapEntityBase_Wrapper() {
            //RDebug::decCounter(QString("RSnapEntityBase_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RSnapEntityBase_Wrapper"));

            //qDebug() << "RSnapEntityBase_Wrapper::~RSnapEntityBase_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RSnapEntityBase";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RSnapEntityBase_Wrapper::initConnections() {

          //setObjectName("RSnapEntityBase_Wrapper");

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
  

    // non-static functions:
    
    // Class: RSnapEntityBase
    // Function: suspendEvent
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapEntityBase_Wrapper::suspendEvent
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
                RSnapEntityBase* w = getWrapped();
                
                w->suspendEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for suspendEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEntityBase
    // Function: finishEvent
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapEntityBase_Wrapper::finishEvent
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
                RSnapEntityBase* w = getWrapped();
                
                w->finishEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for finishEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEntityBase
    // Function: getEntityIds
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapEntityBase_Wrapper::getEntityIds
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
                RSnapEntityBase* w = getWrapped();
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
            
    // Class: RSnapEntityBase
    // Function: getStatus
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapEntityBase_Wrapper::getStatus
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
                RSnapEntityBase* w = getWrapped();
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
            
    // Class: RSnapEntityBase
    // Function: setStatus
    // Source: RSnap
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapEntityBase_Wrapper::setStatus
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
                RSnapEntityBase* w = getWrapped();
                
                w->setStatus(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEntityBase
    // Function: getLastSnap
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapEntityBase_Wrapper::getLastSnap
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
                RSnapEntityBase* w = getWrapped();
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
            
    // Class: RSnapEntityBase
    // Function: setLastSnap
    // Source: RSnap
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapEntityBase_Wrapper::setLastSnap
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
                RSnapEntityBase* w = getWrapped();
                
                w->setLastSnap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLastSnap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEntityBase
    // Function: reset
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapEntityBase_Wrapper::reset
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
                RSnapEntityBase* w = getWrapped();
                
                w->reset(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapEntityBase
    // Function: snap
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RSnapEntityBase_Wrapper::snap
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
                RSnapEntityBase* w = getWrapped();
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
                RSnapEntityBase* w = getWrapped();
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
  
    #include "moc_rsnapentitybase_wrapper.cpp"
  
