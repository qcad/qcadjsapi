
  // Auto generated
  
  // include header:
  //#include "RListViewwrapper.h"
  //#include "header_cpp.h"
  
    #include "rlistview_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RListView_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RListView_Wrapper>("org.qcad", 1, 0, "RListView_Wrapper");
        qmlRegisterInterface<RListView_Wrapper>("RListView_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RListView* t = new RJSType_RListView();
          global.setProperty("RJSType_RListView", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RListView::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RListView_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RListView_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RListView_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RListView_BaseJs", mob);
      
      QString fileName = ":generator/js/RListView.js";
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
    RListView_Wrapper::RListView_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RListView_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RListView_Wrapper::RListView_Wrapper(RJSApi& h, RListView* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RListView_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RListView_Wrapper"));
              //setObjectName("RListView_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RListView_Wrapper::~RListView_Wrapper() {
            //RDebug::decCounter(QString("RListView_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RListView_Wrapper"));

            //qDebug() << "RListView_Wrapper::~RListView_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RListView";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RListView_Wrapper::initConnections() {

          //setObjectName("RListView_Wrapper");

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
    SIGNAL(signalContextMenuEvent(QContextMenuEvent*)), 
    this, 
    SLOT(signalContextMenuEventEmitter(QContextMenuEvent*))
  );

  connect(
    getWrapped(), 
    SIGNAL(signalMouseMoveEvent(QMouseEvent*)), 
    this, 
    SLOT(signalMouseMoveEventEmitter(QMouseEvent*))
  );

  connect(
    getWrapped(), 
    SIGNAL(signalMousePressEvent(QMouseEvent*)), 
    this, 
    SLOT(signalMousePressEventEmitter(QMouseEvent*))
  );

  connect(
    getWrapped(), 
    SIGNAL(signalMouseReleaseEvent(QMouseEvent*)), 
    this, 
    SLOT(signalMouseReleaseEventEmitter(QMouseEvent*))
  );

  connect(
    getWrapped(), 
    SIGNAL(signalDragEnterEvent(QDragEnterEvent*)), 
    this, 
    SLOT(signalDragEnterEventEmitter(QDragEnterEvent*))
  );

  connect(
    getWrapped(), 
    SIGNAL(signalDragMoveEvent(QDragMoveEvent*)), 
    this, 
    SLOT(signalDragMoveEventEmitter(QDragMoveEvent*))
  );

  connect(
    getWrapped(), 
    SIGNAL(signalDropEvent(QDropEvent*)), 
    this, 
    SLOT(signalDropEventEmitter(QDropEvent*))
  );

  connect(
    getWrapped(), 
    SIGNAL(signalStartDrag(Qt::DropActions)), 
    this, 
    SLOT(signalStartDragEmitter(Qt::DropActions))
  );

  connect(
    getWrapped(), 
    SIGNAL(signalSelectionChanged(const QItemSelection&, const QItemSelection&)), 
    this, 
    SLOT(signalSelectionChangedEmitter(const QItemSelection&, const QItemSelection&))
  );

  connect(
    getWrapped(), 
    SIGNAL(signalCurrentChanged(const QModelIndex&, const QModelIndex&)), 
    this, 
    SLOT(signalCurrentChangedEmitter(const QModelIndex&, const QModelIndex&))
  );

  connect(
    getWrapped(), 
    SIGNAL(signalToolTipRequested(QHelpEvent*)), 
    this, 
    SLOT(signalToolTipRequestedEmitter(QHelpEvent*))
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
  
    // Class: RListView
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RListView_Wrapper::RListView_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RListView_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RListView_Wrapper"));
                
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
            a1_cpp = 0;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RListView_Base(
              handler
              
                ,
              a1_cpp
    
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RListView_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RListView_Base*)wrapped)->self = handler.getSelf();
          

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
                  

                  qWarning() << "no matching constructor variant found for RListView";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RListView
    // Function: signalContextMenuEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::signalContextMenuEventEmitter(
                QContextMenuEvent* e
              ) {
                // convert cpp parameters to js:
                
  // parameter: e (QContextMenuEvent)
  


  QJSValue a1_js = RJSHelper::cpp2js_QContextMenuEvent(
    handler, 
    e
  );


                emit signalContextMenuEvent(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: signalMouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::signalMouseMoveEventEmitter(
                QMouseEvent* e
              ) {
                // convert cpp parameters to js:
                
  // parameter: e (QMouseEvent)
  


  QJSValue a1_js = RJSHelper::cpp2js_QMouseEvent(
    handler, 
    e
  );


                emit signalMouseMoveEvent(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: signalMousePressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::signalMousePressEventEmitter(
                QMouseEvent* e
              ) {
                // convert cpp parameters to js:
                
  // parameter: e (QMouseEvent)
  


  QJSValue a1_js = RJSHelper::cpp2js_QMouseEvent(
    handler, 
    e
  );


                emit signalMousePressEvent(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: signalMouseReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::signalMouseReleaseEventEmitter(
                QMouseEvent* e
              ) {
                // convert cpp parameters to js:
                
  // parameter: e (QMouseEvent)
  


  QJSValue a1_js = RJSHelper::cpp2js_QMouseEvent(
    handler, 
    e
  );


                emit signalMouseReleaseEvent(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: signalDragEnterEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::signalDragEnterEventEmitter(
                QDragEnterEvent* e
              ) {
                // convert cpp parameters to js:
                
  // parameter: e (QDragEnterEvent)
  


  QJSValue a1_js = RJSHelper::cpp2js_QDragEnterEvent(
    handler, 
    e
  );


                emit signalDragEnterEvent(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: signalDragMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::signalDragMoveEventEmitter(
                QDragMoveEvent* e
              ) {
                // convert cpp parameters to js:
                
  // parameter: e (QDragMoveEvent)
  


  QJSValue a1_js = RJSHelper::cpp2js_QDragMoveEvent(
    handler, 
    e
  );


                emit signalDragMoveEvent(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: signalDropEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::signalDropEventEmitter(
                QDropEvent* e
              ) {
                // convert cpp parameters to js:
                
  // parameter: e (QDropEvent)
  


  QJSValue a1_js = RJSHelper::cpp2js_QDropEvent(
    handler, 
    e
  );


                emit signalDropEvent(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: signalStartDrag
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::signalStartDragEmitter(
                Qt::DropActions supportedActions
              ) {
                // convert cpp parameters to js:
                
  // parameter: supportedActions (Qt::DropActions)
  


  QJSValue a1_js = RJSHelper::cpp2js_Qt_DropActions(
    handler, 
    supportedActions
  );


                emit signalStartDrag(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: signalSelectionChanged
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::signalSelectionChangedEmitter(
                const QItemSelection& selected, const QItemSelection& deselected
              ) {
                // convert cpp parameters to js:
                
  // parameter: selected (QItemSelection)
  


  QJSValue a1_js = RJSHelper::cpp2js_QItemSelection(
    handler, 
    selected
  );

  // parameter: deselected (QItemSelection)
  


  QJSValue a2_js = RJSHelper::cpp2js_QItemSelection(
    handler, 
    deselected
  );


                emit signalSelectionChanged(
                  a1_js, a2_js
                );
              }
            
    // Class: RListView
    // Function: signalCurrentChanged
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::signalCurrentChangedEmitter(
                const QModelIndex& current, const QModelIndex& previous
              ) {
                // convert cpp parameters to js:
                
  // parameter: current (QModelIndex)
  


  QJSValue a1_js = RJSHelper::cpp2js_QModelIndex(
    handler, 
    current
  );

  // parameter: previous (QModelIndex)
  


  QJSValue a2_js = RJSHelper::cpp2js_QModelIndex(
    handler, 
    previous
  );


                emit signalCurrentChanged(
                  a1_js, a2_js
                );
              }
            
    // Class: RListView
    // Function: signalToolTipRequested
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::signalToolTipRequestedEmitter(
                QHelpEvent* e
              ) {
                // convert cpp parameters to js:
                
  // parameter: e (QHelpEvent)
  


  QJSValue a1_js = RJSHelper::cpp2js_QHelpEvent(
    handler, 
    e
  );


                emit signalToolTipRequested(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: contextMenuEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      contextMenuEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QContextMenuEvent_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: e (QContextMenuEvent)
  

          // pointer:
          QContextMenuEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QContextMenuEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::contextMenuEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->contextMenuEventPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for contextMenuEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: mousePressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      mousePressEventSuper
                    
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
    
  // convert js parameter to cpp: e (QMouseEvent)
  

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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::mousePressEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->mousePressEventPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mousePressEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: mouseReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      mouseReleaseEventSuper
                    
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
    
  // convert js parameter to cpp: e (QMouseEvent)
  

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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::mouseReleaseEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->mouseReleaseEventPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mouseReleaseEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: mouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
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
    
  // convert js parameter to cpp: e (QMouseEvent)
  

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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::mouseMoveEvent: using base but wrapper is not of type of base class";
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
            
    // Class: RListView
    // Function: dragEnterEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      dragEnterEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDragEnterEvent_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: e (QDragEnterEvent)
  

          // pointer:
          QDragEnterEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDragEnterEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::dragEnterEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->dragEnterEventPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dragEnterEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: dragMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      dragMoveEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDragMoveEvent_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: e (QDragMoveEvent)
  

          // pointer:
          QDragMoveEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDragMoveEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::dragMoveEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->dragMoveEventPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dragMoveEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: dropEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      dropEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDropEvent_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: e (QDropEvent)
  

          // pointer:
          QDropEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDropEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::dropEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->dropEventPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dropEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: startDrag
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      startDragSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_DropActions(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: supportedActions (Qt::DropActions)
  
Qt::DropActions a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_DropActions(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::startDrag: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->startDragPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startDrag";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: selectionChanged
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      selectionChangedSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QItemSelection(handler, a1
  )

   && RJSHelper::is_QItemSelection(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: selected (QItemSelection)
  
QItemSelection a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QItemSelection(handler, a1);
        
  // convert js parameter to cpp: deselected (QItemSelection)
  
QItemSelection a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QItemSelection(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::selectionChanged: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->selectionChangedPublic(
                      a1_cpp
    , a2_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for selectionChanged";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: currentChanged
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      currentChangedSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

   && RJSHelper::is_QModelIndex(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: current (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: previous (QModelIndex)
  
QModelIndex a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QModelIndex(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::currentChanged: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->currentChangedPublic(
                      a1_cpp
    , a2_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for currentChanged";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: event
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      eventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QEvent_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (QEvent)
  

          // pointer:
          QEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::event: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    res =
                    wb->eventPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for event";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  