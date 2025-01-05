
  // Auto generated
  
  // include header:
  //#include "RActionwrapper.h"
  //#include "header_cpp.h"
  
    #include "raction_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RAction*> RAction_Wrapper::basecasters_RAction;
    
    // static functions implementation in singleton wrapper:
    
    void RAction_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RAction_Wrapper>("org.qcad", 1, 0, "RAction_Wrapper");
        qmlRegisterInterface<RAction_Wrapper>("RAction_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RAction* t = new RJSType_RAction();
          global.setProperty("RJSType_RAction", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RAction::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RAction_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RAction_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RAction_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RAction_BaseJs", mob);
      
      QString fileName = ":generator/js/RAction.js";
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
    RAction_Wrapper::RAction_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RAction_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RAction_Wrapper::RAction_Wrapper(RJSApi& h, RAction* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RAction_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RAction_Wrapper"));
              //setObjectName("RAction_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RAction_Wrapper::~RAction_Wrapper() {
            //RDebug::decCounter(QString("RAction_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RAction_Wrapper"));

            //qDebug() << "RAction_Wrapper::~RAction_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RAction";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RAction_Wrapper::initConnections() {

          //setObjectName("RAction_Wrapper");

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
    
    // Class: RAction
    // Function: terminate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::terminate
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
                RAction* w = getWrapped();
                
                w->terminate(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for terminate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: isTerminated
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::isTerminated
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
                RAction* w = getWrapped();
                bool res = 
                    
                w->isTerminated(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTerminated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: setOverride
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::setOverride
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
                RAction* w = getWrapped();
                
                w->setOverride(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: setNoState
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::setNoState
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = true;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
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
                RAction* w = getWrapped();
                
                w->setNoState(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNoState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: hasNoState
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::hasNoState
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
                RAction* w = getWrapped();
                bool res = 
                    
                w->hasNoState(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasNoState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: setUniqueGroup
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::setUniqueGroup
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ug (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->setUniqueGroup(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUniqueGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: getUniqueGroup
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::getUniqueGroup
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
                RAction* w = getWrapped();
                QString res = 
                    
                w->getUniqueGroup(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getUniqueGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: setOverrideBase
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::setOverrideBase
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RAction_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: base (RAction)
  

          // pointer:
          RAction*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RAction_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->setOverrideBase(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOverrideBase";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: getOverrideBase
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::getOverrideBase
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
                RAction* w = getWrapped();
                RAction* res = 
                    
                w->getOverrideBase(
                  
                );
              
            // return type: RAction*

            return RJSHelper_qcad::cpp2js_RAction(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOverrideBase";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: getGuiAction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::getGuiAction
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
                RAction* w = getWrapped();
                RGuiAction* res = 
                    
                w->getGuiAction(
                  
                );
              
            // return type: RGuiAction*

            return RJSHelper_qcad::cpp2js_RGuiAction(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGuiAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: setGuiAction
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::setGuiAction
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGuiAction_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: guiAction (RGuiAction)
  

          // pointer:
          RGuiAction*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGuiAction_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->setGuiAction(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGuiAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: getGraphicsScenes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::getGraphicsScenes
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
                RAction* w = getWrapped();
                QList<RGraphicsScene*> res = 
                    
                w->getGraphicsScenes(
                  
                );
              
            // return type: QList<RGraphicsScene*>

            return RJSHelper_qcad::cpp2js_QList_RGraphicsScene_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGraphicsScenes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: getStorage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::getStorage
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
                RAction* w = getWrapped();
                RStorage* res = 
                    
                w->getStorage(
                  
                );
              
            // return type: RStorage*

            return RJSHelper_qcad::cpp2js_RStorage(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getStorage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: setClickMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::setClickMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RAction_ClickMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m (RAction::ClickMode)
  
RAction::ClickMode a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RAction_ClickMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->setClickMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setClickMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: getClickMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::getClickMode
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
                RAction* w = getWrapped();
                RAction::ClickMode res = 
                    
                w->getClickMode(
                  
                );
              
            // return type: RAction::ClickMode

            return RJSHelper_qcad::cpp2js_RAction_ClickMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClickMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: beginEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::beginEvent
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
                RAction* w = getWrapped();
                
                w->beginEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for beginEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: setGraphicsView
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::setGraphicsView
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsView_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: view (RGraphicsView)
  

          // pointer:
          RGraphicsView*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->setGraphicsView(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGraphicsView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: finishEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::finishEvent
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
                RAction* w = getWrapped();
                
                w->finishEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for finishEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: enterEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::enterEvent
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
                RAction* w = getWrapped();
                
                w->enterEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for enterEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: suspendEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::suspendEvent
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
                RAction* w = getWrapped();
                
                w->suspendEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for suspendEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: resumeEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::resumeEvent
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
                RAction* w = getWrapped();
                
                w->resumeEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resumeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: escapeEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::escapeEvent
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
                RAction* w = getWrapped();
                
                w->escapeEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for escapeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: keyPressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::keyPressEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeyEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (QKeyEvent)
  

          // non copyable:
          QKeyEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QKeyEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->keyPressEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for keyPressEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: keyReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::keyReleaseEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeyEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (QKeyEvent)
  

          // non copyable:
          QKeyEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QKeyEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->keyReleaseEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for keyReleaseEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: mousePressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::mousePressEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->mousePressEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mousePressEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: mouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::mouseMoveEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->mouseMoveEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mouseMoveEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: mouseReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::mouseReleaseEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->mouseReleaseEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mouseReleaseEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: mouseDoubleClickEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::mouseDoubleClickEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->mouseDoubleClickEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mouseDoubleClickEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: wheelEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::wheelEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RWheelEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RWheelEvent)
  

          // non copyable:
          RWheelEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RWheelEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->wheelEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for wheelEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: tabletEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::tabletEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTabletEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RTabletEvent)
  

          // non copyable:
          RTabletEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTabletEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->tabletEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for tabletEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: swipeGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::swipeGestureEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSwipeGesture_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: gesture (QSwipeGesture)
  

          // non copyable:
          QSwipeGesture*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSwipeGesture_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->swipeGestureEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swipeGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: panGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::panGestureEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPanGesture_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: gesture (QPanGesture)
  

          // non copyable:
          QPanGesture*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPanGesture_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->panGestureEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for panGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: pinchGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::pinchGestureEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPinchGesture_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: gesture (QPinchGesture)
  

          // non copyable:
          QPinchGesture*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPinchGesture_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->pinchGestureEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for pinchGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: commandEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::commandEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCommandEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RCommandEvent)
  

          // non copyable:
          RCommandEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCommandEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->commandEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for commandEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: commandEventPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::commandEventPreview
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCommandEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RCommandEvent)
  

          // non copyable:
          RCommandEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCommandEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->commandEventPreview(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for commandEventPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: coordinateEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::coordinateEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCoordinateEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RCoordinateEvent)
  

          // non copyable:
          RCoordinateEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCoordinateEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->coordinateEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for coordinateEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: coordinateEventPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::coordinateEventPreview
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCoordinateEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RCoordinateEvent)
  

          // non copyable:
          RCoordinateEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCoordinateEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->coordinateEventPreview(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for coordinateEventPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: entityPickEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::entityPickEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntityPickEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (REntityPickEvent)
  

          // non copyable:
          REntityPickEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntityPickEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->entityPickEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for entityPickEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: propertyChangeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::propertyChangeEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPropertyEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RPropertyEvent)
  

          // non copyable:
          RPropertyEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->propertyChangeEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for propertyChangeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: zoomChangeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::zoomChangeEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsView_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: view (RGraphicsView)
  

          // non copyable:
          RGraphicsView*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RAction* w = getWrapped();
                
                w->zoomChangeEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for zoomChangeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: updatePreview
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::updatePreview
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
                RAction* w = getWrapped();
                
                w->updatePreview(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updatePreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: applyOperation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::applyOperation
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
                RAction* w = getWrapped();
                
                w->applyOperation(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for applyOperation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAction
    // Function: snap
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RAction_Wrapper::snap
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        
  // convert js parameter to cpp: preview (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
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
                RAction* w = getWrapped();
                RVector res = 
                    
                w->snap(
                  *a1_cpp
    , a2_cpp
    
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
  
    #include "moc_raction_wrapper.cpp"
  
