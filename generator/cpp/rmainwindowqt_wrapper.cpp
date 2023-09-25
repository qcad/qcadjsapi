
  // Auto generated
  
  // include header:
  //#include "RMainWindowQtwrapper.h"
  //#include "header_cpp.h"
  
    #include "rmainwindowqt_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RMainWindowQt
    // Function: hasMainWindow
    // Source: RMainWindow
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_WrapperSingleton::hasMainWindow
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
            
    // Class: RMainWindowQt
    // Function: installMessageHandler
    // Source: RMainWindow
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_WrapperSingleton::installMessageHandler
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
            
    // Class: RMainWindowQt
    // Function: getDocumentInterfaceStatic
    // Source: RMainWindow
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_WrapperSingleton::getDocumentInterfaceStatic
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
            
    // Class: RMainWindowQt
    // Function: getMainWindow
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_WrapperSingleton::getMainWindow
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RMainWindowQt* res = 
                
                // call static member function:
                RMainWindowQt::getMainWindow(
              
            );
          
            // return type: RMainWindowQt*

            return RJSHelper_qcad::cpp2js_RMainWindowQt(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMainWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RMainWindowQt_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RMainWindowQt_Wrapper>("org.qcad", 1, 0, "RMainWindowQt_Wrapper");
        qmlRegisterInterface<RMainWindowQt_Wrapper>("RMainWindowQt_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RMainWindowQt* t = new RJSType_RMainWindowQt();
          global.setProperty("RJSType_RMainWindowQt", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RMainWindowQt::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RMainWindowQt_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RMainWindowQt_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RMainWindowQt_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RMainWindowQt_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RMainWindowQt_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RMainWindowQt_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RMainWindowQt_WrapperSingleton * s = new RMainWindowQt_WrapperSingleton(handler);
        engine->globalObject().setProperty("RMainWindowQt_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RMainWindowQt.js";
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
    RMainWindowQt_Wrapper::RMainWindowQt_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RMainWindowQt_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RMainWindowQt_Wrapper::RMainWindowQt_Wrapper(RJSApi& h, RMainWindowQt* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RMainWindowQt_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RMainWindowQt_Wrapper"));
              //setObjectName("RMainWindowQt_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RMainWindowQt_Wrapper::~RMainWindowQt_Wrapper() {
            //RDebug::decCounter(QString("RMainWindowQt_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RMainWindowQt_Wrapper"));

            //qDebug() << "RMainWindowQt_Wrapper::~RMainWindowQt_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RMainWindowQt";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RMainWindowQt_Wrapper::initConnections() {

          //setObjectName("RMainWindowQt_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is a QObject and not a wrapper for a null pointer:
              // wrapper is managed by the QObject as child:
              if (hasWrapped()) {
                QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
              }
            

          if (hasWrapped()) {
            
                // set parent of wrapper to wrapped:
                // wrapper can be looked up for object:
                QVariant vThis = QVariant::fromValue(this);
                getWrapped()->setProperty("__wrapper__",  vThis);

                // make sure wrapper is deleted when object is deleted:
                // make sure wrapper stays alive as long as the wrapped stays alive::
                QObject::setParent(getWrapped());
              
            // set up signal forwarding:
            
  connect(
    getWrapped(), 
    SIGNAL(commandPrompt(const QString&)), 
    this, 
    SLOT(commandPromptEmitter(const QString&))
  );

  connect(
    getWrapped(), 
    SIGNAL(leftMouseTip(const QString&)), 
    this, 
    SLOT(leftMouseTipEmitter(const QString&))
  );

  connect(
    getWrapped(), 
    SIGNAL(rightMouseTip(const QString&)), 
    this, 
    SLOT(rightMouseTipEmitter(const QString&))
  );

  connect(
    getWrapped(), 
    SIGNAL(progress(int)), 
    this, 
    SLOT(progressEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(progressEnd()), 
    this, 
    SLOT(progressEndEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(progressText(const QString&)), 
    this, 
    SLOT(progressTextEmitter(const QString&))
  );

  connect(
    getWrapped(), 
    SIGNAL(progressCanceled()), 
    this, 
    SLOT(progressCanceledEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(userMessage(const QString&, bool)), 
    this, 
    SLOT(userMessageEmitter(const QString&, bool))
  );

  connect(
    getWrapped(), 
    SIGNAL(userInfo(const QString&, bool)), 
    this, 
    SLOT(userInfoEmitter(const QString&, bool))
  );

  connect(
    getWrapped(), 
    SIGNAL(userWarning(const QString&, bool, bool)), 
    this, 
    SLOT(userWarningEmitter(const QString&, bool, bool))
  );

  connect(
    getWrapped(), 
    SIGNAL(userCommand(const QString&, bool)), 
    this, 
    SLOT(userCommandEmitter(const QString&, bool))
  );

  connect(
    getWrapped(), 
    SIGNAL(contextMenu(int, const RVector&)), 
    this, 
    SLOT(contextMenuEmitter(int, const RVector&))
  );

  connect(
    getWrapped(), 
    SIGNAL(escape()), 
    this, 
    SLOT(escapeEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(drop(QDropEvent*)), 
    this, 
    SLOT(dropEmitter(QDropEvent*))
  );

  connect(
    getWrapped(), 
    SIGNAL(dragEnter(QDragEnterEvent*)), 
    this, 
    SLOT(dragEnterEmitter(QDragEnterEvent*))
  );

  connect(
    getWrapped(), 
    SIGNAL(resumedTab(RMdiChildQt*)), 
    this, 
    SLOT(resumedTabEmitter(RMdiChildQt*))
  );

  connect(
    getWrapped(), 
    SIGNAL(closeRequested()), 
    this, 
    SLOT(closeRequestedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(enterPressed()), 
    this, 
    SLOT(enterPressedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(toolBarContextMenu(QMenu*)), 
    this, 
    SLOT(toolBarContextMenuEmitter(QMenu*))
  );

              /*
              connect(
                getWrapped(),
                SIGNAL(destroyed(QObject*)),
                &handler,
                SLOT(slotDestroyed(QObject*))
              );
              */
            
          }
        }
      

  // constructors:
  
    // Class: RMainWindowQt
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
RMainWindowQt_Wrapper::RMainWindowQt_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RMainWindowQt_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RMainWindowQt_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 0;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
          }
        
  // convert js parameter to cpp: hasMdiArea (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RMainWindowQt_Base(
              handler
              
                ,
              a1_cpp
    , a2_cpp
    
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RMainWindowQt_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RMainWindowQt_Base*)wrapped)->self = handler.getSelf();
          

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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RMainWindowQt";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RMainWindowQt
    // Function: notifyListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyListeners(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addCoordinateListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addCoordinateListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addCoordinateListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addCoordinateListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeCoordinateListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeCoordinateListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeCoordinateListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeCoordinateListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyCoordinateListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyCoordinateListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyCoordinateListeners(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyCoordinateListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addSelectionListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addSelectionListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addSelectionListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addSelectionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeSelectionListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeSelectionListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeSelectionListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeSelectionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifySelectionListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifySelectionListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifySelectionListeners(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifySelectionListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addPropertyListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addPropertyListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addPropertyListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addPropertyListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removePropertyListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removePropertyListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removePropertyListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removePropertyListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyPropertyListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyPropertyListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyPropertyListeners(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyPropertyListeners(
                  *a1_cpp
    , *a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyPropertyListeners(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyPropertyListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addExportListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addExportListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addExportListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addExportListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeExportListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeExportListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeExportListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeExportListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyExportListenersPre
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyExportListenersPre
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyExportListenersPre(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyExportListenersPre";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyExportListenersPost
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyExportListenersPost
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyExportListenersPost(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyExportListenersPost";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyExportListenersEnd
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyExportListenersEnd
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyExportListenersEnd(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyExportListenersEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addEntityExportListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addEntityExportListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addEntityExportListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addEntityExportListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeEntityExportListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeEntityExportListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeEntityExportListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeEntityExportListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyEntityExportListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyEntityExportListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyEntityExportListeners(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyEntityExportListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addImportListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addImportListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addImportListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addImportListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeImportListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeImportListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeImportListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeImportListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyImportListenersPre
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyImportListenersPre
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyImportListenersPre(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyImportListenersPre";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyImportListenersPost
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyImportListenersPost
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyImportListenersPost(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyImportListenersPost";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addTransactionListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addTransactionListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addTransactionListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addTransactionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeTransactionListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeTransactionListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeTransactionListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeTransactionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyTransactionListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyTransactionListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyTransactionListeners(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyTransactionListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addInterTransactionListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addInterTransactionListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addInterTransactionListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addInterTransactionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeInterTransactionListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeInterTransactionListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeInterTransactionListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeInterTransactionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyInterTransactionListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyInterTransactionListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyInterTransactionListeners(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyInterTransactionListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addNewDocumentListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addNewDocumentListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addNewDocumentListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addNewDocumentListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeNewDocumentListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeNewDocumentListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeNewDocumentListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeNewDocumentListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyNewDocumentListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyNewDocumentListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyNewDocumentListeners(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyNewDocumentListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addSnapListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addSnapListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addSnapListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addSnapListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeSnapListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeSnapListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeSnapListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeSnapListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifySnapListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifySnapListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifySnapListeners(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifySnapListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addFocusListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addFocusListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addFocusListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addFocusListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeFocusListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeFocusListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeFocusListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeFocusListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyFocusListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyFocusListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyFocusListeners(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyFocusListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addKeyListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addKeyListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addKeyListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addKeyListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeKeyListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeKeyListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeKeyListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeKeyListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyKeyListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyKeyListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyKeyListeners(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyKeyListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addViewFocusListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addViewFocusListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addViewFocusListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addViewFocusListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeViewFocusListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeViewFocusListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeViewFocusListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeViewFocusListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyViewFocusListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyViewFocusListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyViewFocusListeners(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyViewFocusListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addPreferencesListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addPreferencesListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addPreferencesListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addPreferencesListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removePreferencesListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removePreferencesListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removePreferencesListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removePreferencesListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyPreferencesListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyPreferencesListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyPreferencesListeners(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyPreferencesListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: propertyChangeEvent
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::propertyChangeEvent
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->propertyChangeEvent(
                  *a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for propertyChangeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addUcsListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addUcsListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addUcsListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addUcsListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeUcsListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeUcsListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeUcsListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeUcsListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyUcsListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyUcsListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyUcsListeners(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyUcsListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addLayerListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addLayerListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addLayerListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addLayerListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeLayerListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeLayerListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeLayerListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeLayerListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyLayerListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyLayerListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyLayerListeners(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyLayerListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyLayerListenersCurrentLayer
    // Source: RMainWindow
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyLayerListenersCurrentLayer
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyLayerListenersCurrentLayer(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyLayerListenersCurrentLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addBlockListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addBlockListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addBlockListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addBlockListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeBlockListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeBlockListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeBlockListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeBlockListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyBlockListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyBlockListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyBlockListeners(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyBlockListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyBlockListenersCurrentBlock
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyBlockListenersCurrentBlock
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyBlockListenersCurrentBlock(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyBlockListenersCurrentBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addViewListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addViewListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addViewListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addViewListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removeViewListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removeViewListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removeViewListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeViewListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyViewListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyViewListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyViewListeners(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyViewListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addPenListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addPenListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addPenListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addPenListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removePenListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removePenListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removePenListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removePenListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyPenListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyPenListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyPenListeners(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyPenListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: addPaletteListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::addPaletteListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->addPaletteListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addPaletteListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: removePaletteListener
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::removePaletteListener
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->removePaletteListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removePaletteListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyPaletteListeners
    // Source: RMainWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyPaletteListeners
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyPaletteListeners(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyPaletteListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: ucsSetEvent
    // Source: RMainWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::ucsSetEvent
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->ucsSetEvent(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ucsSetEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: eval
    // Source: RMainWindow
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::eval
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                QVariant res = 
                    
                w->eval(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
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
            
    // Class: RMainWindowQt
    // Function: getWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::getWidth
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                int res = 
                    
                w->getWidth(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: RMainWindowQt
    // Function: getHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::getHeight
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                int res = 
                    
                w->getHeight(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: RMainWindowQt
    // Function: getPositionX
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::getPositionX
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                int res = 
                    
                w->getPositionX(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: RMainWindowQt
    // Function: getPositionY
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::getPositionY
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                int res = 
                    
                w->getPositionY(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: RMainWindowQt
    // Function: resize
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::resize
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->resize(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: move
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::move
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->move(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for move";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: disable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::disable
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->disable(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for disable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: enable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::enable
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->enable(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for enable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: getDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::getDocument
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                RDocument* res = 
                    
                w->getDocument(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: RMainWindowQt
    // Function: getDocumentInterface
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::getDocumentInterface
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                RDocumentInterface* res = 
                    
                w->getDocumentInterface(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: RMainWindowQt
    // Function: handleUserMessage
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::handleUserMessage
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->handleUserMessage(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleUserMessage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: handleUserInfo
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::handleUserInfo
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->handleUserInfo(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleUserInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: handleUserWarning
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::handleUserWarning
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->handleUserWarning(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleUserWarning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: handleUserCommand
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::handleUserCommand
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->handleUserCommand(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleUserCommand";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: postSelectionChangedEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::postSelectionChangedEvent
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->postSelectionChangedEvent(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for postSelectionChangedEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: postTransactionEvent
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::postTransactionEvent
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->postTransactionEvent(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for postTransactionEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: postPropertyEvent
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::postPropertyEvent
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->postPropertyEvent(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for postPropertyEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: postCloseEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::postCloseEvent
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->postCloseEvent(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for postCloseEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: getMdiChild
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::getMdiChild
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                RMdiChildQt* res = 
                    
                w->getMdiChild(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RMdiChildQt*

            return RJSHelper_qcad::cpp2js_RMdiChildQt(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMdiChild";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: getTabBar
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::getTabBar
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                QTabBar* res = 
                    
                w->getTabBar(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QTabBar*

            return RJSHelper::cpp2js_QTabBar(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTabBar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: getMdiArea
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::getMdiArea
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                RMdiArea* res = 
                    
                w->getMdiArea(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RMdiArea*

            return RJSHelper_qcad::cpp2js_RMdiArea(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMdiArea";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: cancelProgress
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::cancelProgress
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->cancelProgress(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for cancelProgress";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: setProgress
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::setProgress
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
    
  // convert js parameter to cpp: value (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->setProgress(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProgress";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: setProgressEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::setProgressEnd
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->setProgressEnd(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProgressEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: setProgressText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::setProgressText
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->setProgressText(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProgressText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: setCommandPrompt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::setCommandPrompt
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->setCommandPrompt(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCommandPrompt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: setLeftMouseTip
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::setLeftMouseTip
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->setLeftMouseTip(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLeftMouseTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: setRightMouseTip
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::setRightMouseTip
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->setRightMouseTip(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRightMouseTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: showContextMenu
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::showContextMenu
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        
  // convert js parameter to cpp: pos (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->showContextMenu(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showContextMenu";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: escapeEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::escapeEvent
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->escapeEvent(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for escapeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: setGraphicsViewCursor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::setGraphicsViewCursor
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->setGraphicsViewCursor(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGraphicsViewCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: readSettings
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::readSettings
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                bool res = 
                    
                w->readSettings(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readSettings";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: writeSettings
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::writeSettings
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->writeSettings(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeSettings";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: createPopupMenu
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::createPopupMenu
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                QMenu* res = 
                    
                w->createPopupMenu(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QMenu*

            return RJSHelper::cpp2js_QMenu(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createPopupMenu";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: getChildWidget
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::getChildWidget
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                QWidget* res = 
                    
                w->getChildWidget(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
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
            
    // Class: RMainWindowQt
    // Function: getDockWidgets
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::getDockWidgets
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                QList<QDockWidget*> res = 
                    
                w->getDockWidgets(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QList<QDockWidget*>

            return RJSHelper::cpp2js_QList_QDockWidget_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDockWidgets";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: getToolBars
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::getToolBars
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                QList<QToolBar*> res = 
                    
                w->getToolBars(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QList<QToolBar*>

            return RJSHelper::cpp2js_QList_QToolBar_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getToolBars";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: clearKeyLog
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::clearKeyLog
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->clearKeyLog(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearKeyLog";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: getKeyLog
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::getKeyLog
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                QString res = 
                    
                w->getKeyLog(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getKeyLog";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: quit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::quit
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->quit(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for quit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: currentTabChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::currentTabChanged
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
    
  // convert js parameter to cpp: index (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->currentTabChanged(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for currentTabChanged";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: subWindowActivated
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::subWindowActivated
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMdiSubWindow_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sw (QMdiSubWindow)
  

          // pointer:
          QMdiSubWindow*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMdiSubWindow_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->subWindowActivated(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for subWindowActivated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: commandPrompt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::commandPromptEmitter(
                const QString& text
              ) {
                // convert cpp parameters to js:
                
  // parameter: text (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    text
  );


                emit commandPrompt(
                  a1_js
                );
              }
            
    // Class: RMainWindowQt
    // Function: leftMouseTip
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::leftMouseTipEmitter(
                const QString& message
              ) {
                // convert cpp parameters to js:
                
  // parameter: message (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    message
  );


                emit leftMouseTip(
                  a1_js
                );
              }
            
    // Class: RMainWindowQt
    // Function: rightMouseTip
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::rightMouseTipEmitter(
                const QString& message
              ) {
                // convert cpp parameters to js:
                
  // parameter: message (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    message
  );


                emit rightMouseTip(
                  a1_js
                );
              }
            
    // Class: RMainWindowQt
    // Function: progress
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::progressEmitter(
                int value
              ) {
                // convert cpp parameters to js:
                
  // parameter: value (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    value
  );


                emit progress(
                  a1_js
                );
              }
            
    // Class: RMainWindowQt
    // Function: progressEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::progressEndEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit progressEnd(
                  
                );
              }
            
    // Class: RMainWindowQt
    // Function: progressText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::progressTextEmitter(
                const QString& label
              ) {
                // convert cpp parameters to js:
                
  // parameter: label (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    label
  );


                emit progressText(
                  a1_js
                );
              }
            
    // Class: RMainWindowQt
    // Function: progressCanceled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::progressCanceledEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit progressCanceled(
                  
                );
              }
            
    // Class: RMainWindowQt
    // Function: userMessage
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::userMessageEmitter(
                const QString& message, bool escape
              ) {
                // convert cpp parameters to js:
                
  // parameter: message (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    message
  );

  // parameter: escape (bool)
  


  QJSValue a2_js = RJSHelper::cpp2js_bool(
    handler, 
    escape
  );


                emit userMessage(
                  a1_js, a2_js
                );
              }
            
    // Class: RMainWindowQt
    // Function: userInfo
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::userInfoEmitter(
                const QString& message, bool escape
              ) {
                // convert cpp parameters to js:
                
  // parameter: message (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    message
  );

  // parameter: escape (bool)
  


  QJSValue a2_js = RJSHelper::cpp2js_bool(
    handler, 
    escape
  );


                emit userInfo(
                  a1_js, a2_js
                );
              }
            
    // Class: RMainWindowQt
    // Function: userWarning
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::userWarningEmitter(
                const QString& message, bool messageBox, bool escape
              ) {
                // convert cpp parameters to js:
                
  // parameter: message (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    message
  );

  // parameter: messageBox (bool)
  


  QJSValue a2_js = RJSHelper::cpp2js_bool(
    handler, 
    messageBox
  );

  // parameter: escape (bool)
  


  QJSValue a3_js = RJSHelper::cpp2js_bool(
    handler, 
    escape
  );


                emit userWarning(
                  a1_js, a2_js, a3_js
                );
              }
            
    // Class: RMainWindowQt
    // Function: userCommand
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::userCommandEmitter(
                const QString& message, bool escape
              ) {
                // convert cpp parameters to js:
                
  // parameter: message (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    message
  );

  // parameter: escape (bool)
  


  QJSValue a2_js = RJSHelper::cpp2js_bool(
    handler, 
    escape
  );


                emit userCommand(
                  a1_js, a2_js
                );
              }
            
    // Class: RMainWindowQt
    // Function: contextMenu
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::contextMenuEmitter(
                int entityId, const RVector& pos
              ) {
                // convert cpp parameters to js:
                
  // parameter: entityId (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    entityId
  );

  // parameter: pos (RVector)
  


  QJSValue a2_js = RJSHelper_qcad::cpp2js_RVector(
    handler, 
    pos
  );


                emit contextMenu(
                  a1_js, a2_js
                );
              }
            
    // Class: RMainWindowQt
    // Function: escape
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::escapeEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit escape(
                  
                );
              }
            
    // Class: RMainWindowQt
    // Function: drop
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::dropEmitter(
                QDropEvent* event
              ) {
                // convert cpp parameters to js:
                
  // parameter: event (QDropEvent)
  


  QJSValue a1_js = RJSHelper::cpp2js_QDropEvent(
    handler, 
    event
  );


                emit drop(
                  a1_js
                );
              }
            
    // Class: RMainWindowQt
    // Function: dragEnter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::dragEnterEmitter(
                QDragEnterEvent* event
              ) {
                // convert cpp parameters to js:
                
  // parameter: event (QDragEnterEvent)
  


  QJSValue a1_js = RJSHelper::cpp2js_QDragEnterEvent(
    handler, 
    event
  );


                emit dragEnter(
                  a1_js
                );
              }
            
    // Class: RMainWindowQt
    // Function: resumedTab
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::resumedTabEmitter(
                RMdiChildQt* mdiChild
              ) {
                // convert cpp parameters to js:
                
  // parameter: mdiChild (RMdiChildQt)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RMdiChildQt(
    handler, 
    mdiChild
  );


                emit resumedTab(
                  a1_js
                );
              }
            
    // Class: RMainWindowQt
    // Function: closeRequested
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::closeRequestedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit closeRequested(
                  
                );
              }
            
    // Class: RMainWindowQt
    // Function: enterPressed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::enterPressedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit enterPressed(
                  
                );
              }
            
    // Class: RMainWindowQt
    // Function: toolBarContextMenu
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMainWindowQt_Wrapper::toolBarContextMenuEmitter(
                QMenu* menu
              ) {
                // convert cpp parameters to js:
                
  // parameter: menu (QMenu)
  


  QJSValue a1_js = RJSHelper::cpp2js_QMenu(
    handler, 
    menu
  );


                emit toolBarContextMenu(
                  a1_js
                );
              }
            
    // Class: RMainWindowQt
    // Function: updateGuiActions
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::updateGuiActions
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMdiSubWindow_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mdiChild (QMdiSubWindow)
  

          // pointer:
          QMdiSubWindow*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = NULL;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QMdiSubWindow_ptr(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->updateGuiActions(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateGuiActions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: initGuiActions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::initGuiActions
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->initGuiActions(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initGuiActions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: updateScenes
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::updateScenes
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMdiSubWindow_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mdiChild (QMdiSubWindow)
  

          // pointer:
          QMdiSubWindow*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMdiSubWindow_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->updateScenes(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateScenes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: notifyListenersSlot
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::notifyListenersSlot
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMdiSubWindow_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mdiChild (QMdiSubWindow)
  

          // pointer:
          QMdiSubWindow*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMdiSubWindow_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->notifyListenersSlot(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for notifyListenersSlot";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: suspendAndResume
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper::suspendAndResume
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMdiSubWindow_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mdiChild (QMdiSubWindow)
  

          // pointer:
          QMdiSubWindow*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMdiSubWindow_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMainWindowQt* w = getWrapped();
                
                w->suspendAndResume(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for suspendAndResume";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: paintEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      paintEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPaintEvent_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (QPaintEvent)
  

          // pointer:
          QPaintEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPaintEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RMainWindowQt_Base class as 
                // function has postfix inheritable class, overridable function):
                RMainWindowQt_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RMainWindowQt::paintEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->paintEventPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paintEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: mouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      mouseMoveEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMouseEvent_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (QMouseEvent)
  

          // pointer:
          QMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RMainWindowQt_Base class as 
                // function has postfix inheritable class, overridable function):
                RMainWindowQt_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RMainWindowQt::mouseMoveEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->mouseMoveEventPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mouseMoveEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMainWindowQt
    // Function: resizeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMainWindowQt_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      resizeEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QResizeEvent_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (QResizeEvent)
  

          // pointer:
          QResizeEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QResizeEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RMainWindowQt_Base class as 
                // function has postfix inheritable class, overridable function):
                RMainWindowQt_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RMainWindowQt::resizeEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->resizeEventPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resizeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  