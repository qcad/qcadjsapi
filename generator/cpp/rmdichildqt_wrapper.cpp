
  // Auto generated
  
  // include header:
  //#include "RMdiChildQtwrapper.h"
  //#include "header_cpp.h"
  
    #include "rmdichildqt_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RMdiChildQt_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RMdiChildQt_Wrapper>("org.qcad", 1, 0, "RMdiChildQt_Wrapper");
        qmlRegisterInterface<RMdiChildQt_Wrapper>("RMdiChildQt_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RMdiChildQt* t = new RJSType_RMdiChildQt();
          global.setProperty("RJSType_RMdiChildQt", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RMdiChildQt::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RMdiChildQt_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RMdiChildQt_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RMdiChildQt_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RMdiChildQt_BaseJs", mob);
      
      QString fileName = ":generator/js/RMdiChildQt.js";
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
    RMdiChildQt_Wrapper::RMdiChildQt_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RMdiChildQt_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RMdiChildQt_Wrapper::RMdiChildQt_Wrapper(RJSApi& h, RMdiChildQt* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RMdiChildQt_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RMdiChildQt_Wrapper"));
              //setObjectName("RMdiChildQt_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RMdiChildQt_Wrapper::~RMdiChildQt_Wrapper() {
            //RDebug::decCounter(QString("RMdiChildQt_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RMdiChildQt_Wrapper"));

            //qDebug() << "RMdiChildQt_Wrapper::~RMdiChildQt_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RMdiChildQt";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RMdiChildQt_Wrapper::initConnections() {

          //setObjectName("RMdiChildQt_Wrapper");

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
    SIGNAL(closeRequested(RMdiChildQt*)), 
    this, 
    SLOT(closeRequestedEmitter(RMdiChildQt*))
  );

  connect(
    getWrapped(), 
    SIGNAL(closeAccepted(RMdiChildQt*)), 
    this, 
    SLOT(closeAcceptedEmitter(RMdiChildQt*))
  );

  connect(
    getWrapped(), 
    SIGNAL(modifiedStatusChanged(RMdiChildQt*)), 
    this, 
    SLOT(modifiedStatusChangedEmitter(RMdiChildQt*))
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
  
    // Class: RMdiChildQt
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RMdiChildQt_Wrapper::RMdiChildQt_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RMdiChildQt_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RMdiChildQt_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = NULL;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RMdiChildQt_Base(
              handler
              
                ,
              a1_cpp
    
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RMdiChildQt_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RMdiChildQt_Base*)wrapped)->self = handler.getSelf();
          

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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RMdiChildQt";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RMdiChildQt
    // Function: setDocumentInterface
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMdiChildQt_Wrapper::setDocumentInterface
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
    
  // convert js parameter to cpp: di (RDocumentInterface)
  

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
                RMdiChildQt* w = getWrapped();
                
                w->setDocumentInterface(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDocumentInterface";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMdiChildQt
    // Function: getDocumentInterface
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMdiChildQt_Wrapper::getDocumentInterface
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
                RMdiChildQt* w = getWrapped();
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
            
    // Class: RMdiChildQt
    // Function: getDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMdiChildQt_Wrapper::getDocument
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
                RMdiChildQt* w = getWrapped();
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
            
    // Class: RMdiChildQt
    // Function: getLastKnownViewWithFocus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMdiChildQt_Wrapper::getLastKnownViewWithFocus
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
                RMdiChildQt* w = getWrapped();
                RGraphicsViewQt* res = 
                    
                w->getLastKnownViewWithFocus(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RGraphicsViewQt*

            return RJSHelper_qcad::cpp2js_RGraphicsViewQt(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLastKnownViewWithFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMdiChildQt
    // Function: updateModifiedListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMdiChildQt_Wrapper::updateModifiedListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RStorage_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: storage (RStorage)
  

          // pointer:
          RStorage*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RStorage_ptr(handler, a1);
        

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
                RMdiChildQt* w = getWrapped();
                
                w->updateModifiedListener(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateModifiedListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMdiChildQt
    // Function: setCloseEventRejected
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMdiChildQt_Wrapper::setCloseEventRejected
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
                RMdiChildQt* w = getWrapped();
                
                w->setCloseEventRejected(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCloseEventRejected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMdiChildQt
    // Function: setCloseEventAccepted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMdiChildQt_Wrapper::setCloseEventAccepted
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
                RMdiChildQt* w = getWrapped();
                
                w->setCloseEventAccepted(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCloseEventAccepted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMdiChildQt
    // Function: isCloseEventAccepted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMdiChildQt_Wrapper::isCloseEventAccepted
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
                RMdiChildQt* w = getWrapped();
                bool res = 
                    
                w->isCloseEventAccepted(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCloseEventAccepted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMdiChildQt
    // Function: closeRequested
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMdiChildQt_Wrapper::closeRequestedEmitter(
                RMdiChildQt* mdiChild
              ) {
                // convert cpp parameters to js:
                
  // parameter: mdiChild (RMdiChildQt)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RMdiChildQt(
    handler, 
    mdiChild
  );


                emit closeRequested(
                  a1_js
                );
              }
            
    // Class: RMdiChildQt
    // Function: closeAccepted
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMdiChildQt_Wrapper::closeAcceptedEmitter(
                RMdiChildQt* mdiChild
              ) {
                // convert cpp parameters to js:
                
  // parameter: mdiChild (RMdiChildQt)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RMdiChildQt(
    handler, 
    mdiChild
  );


                emit closeAccepted(
                  a1_js
                );
              }
            
    // Class: RMdiChildQt
    // Function: modifiedStatusChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RMdiChildQt_Wrapper::modifiedStatusChangedEmitter(
                RMdiChildQt* mdiChild
              ) {
                // convert cpp parameters to js:
                
  // parameter: mdiChild (RMdiChildQt)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RMdiChildQt(
    handler, 
    mdiChild
  );


                emit modifiedStatusChanged(
                  a1_js
                );
              }
            
    // Class: RMdiChildQt
    // Function: sizeHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMdiChildQt_Wrapper::sizeHint
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
                RMdiChildQt* w = getWrapped();
                QSize res = 
                    
                w->sizeHint(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sizeHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMdiChildQt
    // Function: paintEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMdiChildQt_Wrapper:: 
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
            
                // call function of RMdiChildQt_Base class as 
                // function has postfix inheritable class, overridable function):
                RMdiChildQt_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RMdiChildQt::paintEvent: using base but wrapper is not of type of base class";
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
            
    // Class: RMdiChildQt
    // Function: mouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMdiChildQt_Wrapper:: 
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
            
                // call function of RMdiChildQt_Base class as 
                // function has postfix inheritable class, overridable function):
                RMdiChildQt_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RMdiChildQt::mouseMoveEvent: using base but wrapper is not of type of base class";
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
            
    // Class: RMdiChildQt
    // Function: resizeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMdiChildQt_Wrapper:: 
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
            
                // call function of RMdiChildQt_Base class as 
                // function has postfix inheritable class, overridable function):
                RMdiChildQt_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RMdiChildQt::resizeEvent: using base but wrapper is not of type of base class";
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
  