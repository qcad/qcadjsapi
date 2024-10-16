
  // Auto generated
  
  // include header:
  //#include "RMainWindowwrapper.h"
  //#include "header_cpp.h"
  
    #include "rmainwindow_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RMainWindow*> RMainWindow_Wrapper::basecasters_RMainWindow;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RMainWindow
    // Function: getMainWindow
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_WrapperSingleton::getMainWindow
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RMainWindow* res = 
                
                // call static member function:
                RMainWindow::getMainWindow(
              
            );
          
            // return type: RMainWindow*

            return RJSHelper_qcad::cpp2js_RMainWindow(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMainWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: hasMainWindow
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_WrapperSingleton::hasMainWindow
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RMainWindow::hasMainWindow(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasMainWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: installMessageHandler
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_WrapperSingleton::installMessageHandler
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RMainWindow::installMessageHandler(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for installMessageHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: getDocumentInterfaceStatic
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_WrapperSingleton::getDocumentInterfaceStatic
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RDocumentInterface* res = 
                
                // call static member function:
                RMainWindow::getDocumentInterfaceStatic(
              
            );
          
            // return type: RDocumentInterface*

            return RJSHelper_qcad::cpp2js_RDocumentInterface(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDocumentInterfaceStatic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RMainWindow_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RMainWindow_Wrapper>("org.qcad", 1, 0, "RMainWindow_Wrapper");
        qmlRegisterInterface<RMainWindow_Wrapper>("RMainWindow_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RMainWindow* t = new RJSType_RMainWindow();
          global.setProperty("RJSType_RMainWindow", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RMainWindow::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RMainWindow_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RMainWindow_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RMainWindow_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RMainWindow_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RMainWindow_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RMainWindow_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RMainWindow_WrapperSingleton * s = new RMainWindow_WrapperSingleton(handler);
        engine->globalObject().setProperty("RMainWindow_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RMainWindow.js";
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
    RMainWindow_Wrapper::RMainWindow_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RMainWindow_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RMainWindow_Wrapper::RMainWindow_Wrapper(RJSApi& h, RMainWindow* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RMainWindow_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RMainWindow_Wrapper"));
              //setObjectName("RMainWindow_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RMainWindow_Wrapper::~RMainWindow_Wrapper() {
            //RDebug::decCounter(QString("RMainWindow_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RMainWindow_Wrapper"));

            //qDebug() << "RMainWindow_Wrapper::~RMainWindow_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RMainWindow";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RMainWindow_Wrapper::initConnections() {

          //setObjectName("RMainWindow_Wrapper");

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
    
    // Class: RMainWindow
    // Function: getDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::getDocument
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
                RMainWindow* w = getWrapped();
                RDocument* res = 
                    
                w->getDocument(
                  
                );
              
            // return type: RDocument*

            return RJSHelper_qcad::cpp2js_RDocument(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: disable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::disable
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
                RMainWindow* w = getWrapped();
                
                w->disable(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for disable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: enable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::enable
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
                RMainWindow* w = getWrapped();
                
                w->enable(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for enable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: getDocumentInterface
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::getDocumentInterface
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
                RMainWindow* w = getWrapped();
                RDocumentInterface* res = 
                    
                w->getDocumentInterface(
                  
                );
              
            // return type: RDocumentInterface*

            return RJSHelper_qcad::cpp2js_RDocumentInterface(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDocumentInterface";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyListeners
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
    
  // convert js parameter to cpp: withNull (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
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
                RMainWindow* w = getWrapped();
                
                w->notifyListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addCoordinateListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addCoordinateListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCoordinateListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RCoordinateListener)
  

          // pointer:
          RCoordinateListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCoordinateListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addCoordinateListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addCoordinateListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeCoordinateListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeCoordinateListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCoordinateListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RCoordinateListener)
  

          // pointer:
          RCoordinateListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCoordinateListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeCoordinateListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeCoordinateListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyCoordinateListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyCoordinateListeners
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyCoordinateListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyCoordinateListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addSelectionListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addSelectionListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSelectionListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RSelectionListener)
  

          // pointer:
          RSelectionListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSelectionListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addSelectionListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addSelectionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeSelectionListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeSelectionListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSelectionListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RSelectionListener)
  

          // pointer:
          RSelectionListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSelectionListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeSelectionListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeSelectionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifySelectionListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifySelectionListeners
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifySelectionListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifySelectionListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: postSelectionChangedEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::postSelectionChangedEvent
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
                RMainWindow* w = getWrapped();
                
                w->postSelectionChangedEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for postSelectionChangedEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: postTransactionEvent
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::postTransactionEvent
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
        RJSHelper_qcad::is_RTransaction(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RS_EntityType(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: t (RTransaction)
  
RTransaction a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTransaction(handler, a1);
        
  // convert js parameter to cpp: onlyChanges (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: entityTypeFilter (RS::EntityType)
  
RS::EntityType a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RS::EntityAll;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a3);
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
                RMainWindow* w = getWrapped();
                
                w->postTransactionEvent(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for postTransactionEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: postCloseEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::postCloseEvent
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
                RMainWindow* w = getWrapped();
                
                w->postCloseEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for postCloseEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: postPropertyEvent
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::postPropertyEvent
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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->postPropertyEvent(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for postPropertyEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addPropertyListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addPropertyListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPropertyListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RPropertyListener)
  

          // pointer:
          RPropertyListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addPropertyListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addPropertyListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removePropertyListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removePropertyListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPropertyListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RPropertyListener)
  

          // pointer:
          RPropertyListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removePropertyListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removePropertyListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyPropertyListeners
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyPropertyListeners
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
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RS_EntityType(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        
  // convert js parameter to cpp: onlyChanges (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: entityTypeFilter (RS::EntityType)
  
RS::EntityType a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RS::EntityUnknown;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a3);
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
                RMainWindow* w = getWrapped();
                
                w->notifyPropertyListeners(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
  )

   && RJSHelper_qcad::is_REntity_ptr(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // non copyable:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        
  // convert js parameter to cpp: entity (REntity)
  

          // non copyable:
          REntity*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyPropertyListeners(
                  *a1_cpp
    , *a2_cpp
    
                );
              
            return QJSValue();
          
  }

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
                RMainWindow* w = getWrapped();
                
                w->notifyPropertyListeners(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyPropertyListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addExportListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addExportListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RExportListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RExportListener)
  

          // pointer:
          RExportListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RExportListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addExportListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addExportListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeExportListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeExportListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RExportListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RExportListener)
  

          // pointer:
          RExportListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RExportListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeExportListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeExportListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyExportListenersPre
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyExportListenersPre
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyExportListenersPre(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyExportListenersPre";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyExportListenersPost
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyExportListenersPost
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyExportListenersPost(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyExportListenersPost";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyExportListenersEnd
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyExportListenersEnd
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RExporter_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: exporter (RExporter)
  

          // pointer:
          RExporter*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RExporter_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyExportListenersEnd(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyExportListenersEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addEntityExportListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addEntityExportListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntityExportListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (REntityExportListener)
  

          // pointer:
          REntityExportListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntityExportListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addEntityExportListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addEntityExportListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeEntityExportListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeEntityExportListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntityExportListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (REntityExportListener)
  

          // pointer:
          REntityExportListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntityExportListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeEntityExportListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeEntityExportListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyEntityExportListeners
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyEntityExportListeners
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RExporter_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_REntity_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: exporter (RExporter)
  

          // pointer:
          RExporter*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RExporter_ptr(handler, a1);
        
  // convert js parameter to cpp: entity (REntity)
  

          // pointer:
          REntity*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyEntityExportListeners(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyEntityExportListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addImportListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addImportListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RImportListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RImportListener)
  

          // pointer:
          RImportListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RImportListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addImportListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addImportListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeImportListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeImportListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RImportListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RImportListener)
  

          // pointer:
          RImportListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RImportListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeImportListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeImportListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyImportListenersPre
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyImportListenersPre
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyImportListenersPre(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyImportListenersPre";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyImportListenersPost
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyImportListenersPost
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyImportListenersPost(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyImportListenersPost";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addTransactionListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addTransactionListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTransactionListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RTransactionListener)
  

          // pointer:
          RTransactionListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTransactionListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addTransactionListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addTransactionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeTransactionListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeTransactionListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTransactionListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RTransactionListener)
  

          // pointer:
          RTransactionListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTransactionListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeTransactionListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeTransactionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyTransactionListeners
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyTransactionListeners
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
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
                RMainWindow* w = getWrapped();
                
                w->notifyTransactionListeners(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyTransactionListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addInterTransactionListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addInterTransactionListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RInterTransactionListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RInterTransactionListener)
  

          // pointer:
          RInterTransactionListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RInterTransactionListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addInterTransactionListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addInterTransactionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeInterTransactionListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeInterTransactionListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RInterTransactionListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RInterTransactionListener)
  

          // pointer:
          RInterTransactionListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RInterTransactionListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeInterTransactionListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeInterTransactionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyInterTransactionListeners
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyInterTransactionListeners
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
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
                RMainWindow* w = getWrapped();
                
                w->notifyInterTransactionListeners(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyInterTransactionListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addNewDocumentListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addNewDocumentListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RNewDocumentListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RNewDocumentListener)
  

          // pointer:
          RNewDocumentListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RNewDocumentListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addNewDocumentListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addNewDocumentListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeNewDocumentListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeNewDocumentListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RNewDocumentListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RNewDocumentListener)
  

          // pointer:
          RNewDocumentListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RNewDocumentListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeNewDocumentListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeNewDocumentListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyNewDocumentListeners
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyNewDocumentListeners
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
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
        
  // convert js parameter to cpp: beforeLoad (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyNewDocumentListeners(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyNewDocumentListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addSnapListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addSnapListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSnapListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RSnapListener)
  

          // pointer:
          RSnapListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSnapListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addSnapListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addSnapListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeSnapListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeSnapListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSnapListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RSnapListener)
  

          // pointer:
          RSnapListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSnapListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeSnapListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeSnapListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifySnapListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifySnapListeners
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifySnapListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifySnapListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addFocusListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addFocusListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RFocusListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RFocusListener)
  

          // pointer:
          RFocusListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RFocusListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addFocusListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addFocusListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeFocusListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeFocusListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RFocusListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RFocusListener)
  

          // pointer:
          RFocusListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RFocusListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeFocusListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeFocusListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyFocusListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyFocusListeners
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyFocusListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyFocusListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addKeyListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addKeyListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RKeyListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RKeyListener)
  

          // pointer:
          RKeyListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RKeyListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addKeyListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addKeyListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeKeyListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeKeyListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RKeyListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RKeyListener)
  

          // pointer:
          RKeyListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RKeyListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeKeyListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeKeyListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyKeyListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyKeyListeners
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeyEvent_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (QKeyEvent)
  

          // pointer:
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
                RMainWindow* w = getWrapped();
                
                w->notifyKeyListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyKeyListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addViewFocusListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addViewFocusListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RViewFocusListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RViewFocusListener)
  

          // pointer:
          RViewFocusListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RViewFocusListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addViewFocusListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addViewFocusListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeViewFocusListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeViewFocusListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RViewFocusListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RViewFocusListener)
  

          // pointer:
          RViewFocusListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RViewFocusListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeViewFocusListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeViewFocusListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyViewFocusListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyViewFocusListeners
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
                RMainWindow* w = getWrapped();
                
                w->notifyViewFocusListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyViewFocusListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addPreferencesListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addPreferencesListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPreferencesListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RPreferencesListener)
  

          // pointer:
          RPreferencesListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPreferencesListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addPreferencesListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addPreferencesListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removePreferencesListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removePreferencesListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPreferencesListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RPreferencesListener)
  

          // pointer:
          RPreferencesListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPreferencesListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removePreferencesListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removePreferencesListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyPreferencesListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyPreferencesListeners
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyPreferencesListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyPreferencesListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: propertyChangeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::propertyChangeEvent
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
                RMainWindow* w = getWrapped();
                
                w->propertyChangeEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for propertyChangeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addUcsListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addUcsListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RUcsListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RUcsListener)
  

          // pointer:
          RUcsListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RUcsListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addUcsListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addUcsListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeUcsListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeUcsListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RUcsListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RUcsListener)
  

          // pointer:
          RUcsListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RUcsListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeUcsListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeUcsListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyUcsListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyUcsListeners
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyUcsListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyUcsListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addLayerListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addLayerListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayerListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RLayerListener)
  

          // pointer:
          RLayerListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayerListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addLayerListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addLayerListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeLayerListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeLayerListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayerListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RLayerListener)
  

          // pointer:
          RLayerListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayerListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeLayerListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeLayerListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyLayerListeners
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyLayerListeners
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_QList_RLayer_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        
  // convert js parameter to cpp: layerIds (QList<RLayer::Id>)
  
QList<RLayer::Id> a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_QList_RLayer_Id(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyLayerListeners(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyLayerListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyLayerListenersCurrentLayer
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyLayerListenersCurrentLayer
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_RLayer_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        
  // convert js parameter to cpp: previousLayerId (RLayer::Id)
  
RLayer::Id a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyLayerListenersCurrentLayer(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyLayerListenersCurrentLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addBlockListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addBlockListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlockListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RBlockListener)
  

          // pointer:
          RBlockListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBlockListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addBlockListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addBlockListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeBlockListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeBlockListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlockListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RBlockListener)
  

          // pointer:
          RBlockListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBlockListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeBlockListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeBlockListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyBlockListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyBlockListeners
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyBlockListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyBlockListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyBlockListenersCurrentBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyBlockListenersCurrentBlock
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyBlockListenersCurrentBlock(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyBlockListenersCurrentBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addViewListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addViewListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RViewListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RViewListener)
  

          // pointer:
          RViewListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RViewListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addViewListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addViewListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removeViewListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removeViewListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RViewListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RViewListener)
  

          // pointer:
          RViewListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RViewListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removeViewListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeViewListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyViewListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyViewListeners
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyViewListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyViewListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addPenListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addPenListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPenListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RPenListener)
  

          // pointer:
          RPenListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPenListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addPenListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addPenListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removePenListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removePenListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPenListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RPenListener)
  

          // pointer:
          RPenListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPenListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removePenListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removePenListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyPenListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyPenListeners
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->notifyPenListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyPenListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: addPaletteListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::addPaletteListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPaletteListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RPaletteListener)
  

          // pointer:
          RPaletteListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPaletteListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->addPaletteListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addPaletteListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: removePaletteListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::removePaletteListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPaletteListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RPaletteListener)
  

          // pointer:
          RPaletteListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPaletteListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->removePaletteListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removePaletteListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: notifyPaletteListeners
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::notifyPaletteListeners
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
                RMainWindow* w = getWrapped();
                
                w->notifyPaletteListeners(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyPaletteListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: ucsSetEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::ucsSetEvent
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
    
  // convert js parameter to cpp: ucsName (QString)
  
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
                RMainWindow* w = getWrapped();
                
                w->ucsSetEvent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ucsSetEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: escapeEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::escapeEvent
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
                RMainWindow* w = getWrapped();
                
                w->escapeEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for escapeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: setGraphicsViewCursor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::setGraphicsViewCursor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QCursor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cursor (QCursor)
  
QCursor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QCursor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->setGraphicsViewCursor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGraphicsViewCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: getWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::getWidth
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
                RMainWindow* w = getWrapped();
                int res = 
                    
                w->getWidth(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: getHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::getHeight
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
                RMainWindow* w = getWrapped();
                int res = 
                    
                w->getHeight(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: getPositionX
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::getPositionX
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
                RMainWindow* w = getWrapped();
                int res = 
                    
                w->getPositionX(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPositionX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: getPositionY
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::getPositionY
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
                RMainWindow* w = getWrapped();
                int res = 
                    
                w->getPositionY(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPositionY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: resize
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::resize
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: width (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: height (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->resize(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: move
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::move
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                
                w->move(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for move";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: quit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::quit
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
                RMainWindow* w = getWrapped();
                
                w->quit(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for quit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: getChildWidget
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::getChildWidget
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
    
  // convert js parameter to cpp: name (QString)
  
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
                RMainWindow* w = getWrapped();
                QWidget* res = 
                    
                w->getChildWidget(
                  a1_cpp
    
                );
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getChildWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: handleUserMessage
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::handleUserMessage
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: message (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: escape (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
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
                RMainWindow* w = getWrapped();
                
                w->handleUserMessage(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleUserMessage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: handleUserInfo
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::handleUserInfo
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: message (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: escape (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
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
                RMainWindow* w = getWrapped();
                
                w->handleUserInfo(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleUserInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: handleUserWarning
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::handleUserWarning
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: message (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: messageBox (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: escape (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
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
                RMainWindow* w = getWrapped();
                
                w->handleUserWarning(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleUserWarning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: handleUserCommand
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::handleUserCommand
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: message (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: escape (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
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
                RMainWindow* w = getWrapped();
                
                w->handleUserCommand(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleUserCommand";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: setCommandPrompt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::setCommandPrompt
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = "";
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
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
                RMainWindow* w = getWrapped();
                
                w->setCommandPrompt(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCommandPrompt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: setLeftMouseTip
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::setLeftMouseTip
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = "";
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
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
                RMainWindow* w = getWrapped();
                
                w->setLeftMouseTip(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLeftMouseTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: setRightMouseTip
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::setRightMouseTip
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = "";
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
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
                RMainWindow* w = getWrapped();
                
                w->setRightMouseTip(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRightMouseTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindow
    // Function: eval
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindow_Wrapper::eval
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ext (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: script (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindow* w = getWrapped();
                QVariant res = 
                    
                w->eval(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for eval";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rmainwindow_wrapper.cpp"
  
