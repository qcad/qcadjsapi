
  // Auto generated
  
  // include header:
  //#include "RListViewwrapper.h"
  //#include "header_cpp.h"
  
    #include "rlistview_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RListView*> RListView_Wrapper::basecasters_RListView;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RListView
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RListView_WrapperSingleton::tr
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
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_char_ptr(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sourceText (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp:  (char)
  

      // char pointer string:
      QByteArray a2_ba = RJSHelper::js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    
  // convert js parameter to cpp:  (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QObject::tr(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tr";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setTabOrder
    // Source: QWidget
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_WrapperSingleton::setTabOrder
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QWidget_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        
  // convert js parameter to cpp:  (QWidget)
  

          // pointer:
          QWidget*
         a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QWidget::setTabOrder(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTabOrder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: mouseGrabber
    // Source: QWidget
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_WrapperSingleton::mouseGrabber
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QWidget::mouseGrabber(
              
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mouseGrabber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: keyboardGrabber
    // Source: QWidget
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_WrapperSingleton::keyboardGrabber
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QWidget* res = 
                
                // call static member function:
                QWidget::keyboardGrabber(
              
            );
          
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for keyboardGrabber";
                  handler.trace();
                  return QJSValue();
                
              }
            
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
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RListView_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RListView_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RListView_WrapperSingleton * s = new RListView_WrapperSingleton(handler);
        engine->globalObject().setProperty("RListView_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
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
    SIGNAL(customContextMenuRequested(const QPoint&)), 
    this, 
    SLOT(customContextMenuRequestedEmitter(const QPoint&))
  );

  connect(
    getWrapped(), 
    SIGNAL(doubleClicked(const QModelIndex&)), 
    this, 
    SLOT(doubleClickedEmitter(const QModelIndex&))
  );

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
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::objectName
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
                RListView* w = getWrapped();
                QString res = 
                    
                w->objectName(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setObjectName
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
                RListView* w = getWrapped();
                
                w->setObjectName(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isWidgetType
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isWidgetType(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWidgetType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isWindowType
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isWindowType(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWindowType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::signalsBlocked
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->signalsBlocked(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for signalsBlocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::blockSignals
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
    
  // convert js parameter to cpp: b (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                bool res = 
                    
                w->blockSignals(
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

                  qWarning() << "no matching function variant found for blockSignals";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::findChild
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

   && RJSHelper::is_Qt_FindChildOptions(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: aName (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QString();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
          }
        
  // convert js parameter to cpp: options (Qt::FindChildOptions)
  
Qt::FindChildOptions a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::FindChildrenRecursively;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_FindChildOptions(handler, a2);
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
                RListView* w = getWrapped();
                QObject* res = 
                    
                w->findChild<QObject*>(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QObject*

            return RJSHelper::cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for findChild";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::children
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
                RListView* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QObjectList* res =
                    &
                w->children(
                  
                );
              
                //setRecFlag(false);
              
            // return type: const QObjectList&

            return RJSHelper::cpp2js_QObjectList(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for children";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::installEventFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: filterObj (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->installEventFilter(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for installEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::removeEventFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: obj (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->removeEventFilter(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::dumpObjectTree
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
                RListView* w = getWrapped();
                
                w->dumpObjectTree(
                  
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
                RListView* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectTree";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::dumpObjectInfo
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
                RListView* w = getWrapped();
                
                w->dumpObjectInfo(
                  
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
                RListView* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setProperty
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        

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
                RListView* w = getWrapped();
                bool res = 
                    
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::property
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

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
                RListView* w = getWrapped();
                QVariant res = 
                    
                w->property(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for property";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::dynamicPropertyNames
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
                RListView* w = getWrapped();
                QList<QByteArray> res = 
                    
                w->dynamicPropertyNames(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QList<QByteArray>

            return RJSHelper::cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dynamicPropertyNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: parent
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::parent
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
                RListView* w = getWrapped();
                QObject* res = 
                    
                w->parent(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QObject*

            return RJSHelper::cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::deleteLater
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
                RListView* w = getWrapped();
                
                w->deleteLater(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteLater";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: devType
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::devType
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
                RListView* w = getWrapped();
                int res = 
                    
                w->devType(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for devType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: createWinId
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::createWinId
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
                RListView* w = getWrapped();
                
                w->createWinId(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for createWinId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isWindow
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isWindow
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isWindow(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isModal
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isModal
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isModal(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isModal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: windowModality
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::windowModality
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
                RListView* w = getWrapped();
                Qt::WindowModality res = 
                    
                w->windowModality(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::WindowModality

            return RJSHelper::cpp2js_Qt_WindowModality(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowModality";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setWindowModality
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setWindowModality
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_WindowModality(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: windowModality (Qt::WindowModality)
  
Qt::WindowModality a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_WindowModality(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setWindowModality(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindowModality";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isEnabled
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isEnabled(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isEnabledTo
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isEnabledTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isEnabledTo(
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

                  qWarning() << "no matching function variant found for isEnabledTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setEnabled
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
    
  // convert js parameter to cpp:  (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setEnabled(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setDisabled
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setDisabled
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
    
  // convert js parameter to cpp:  (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setDisabled(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDisabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setWindowModified
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setWindowModified
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
    
  // convert js parameter to cpp:  (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setWindowModified(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindowModified";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: frameGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::frameGeometry
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
                RListView* w = getWrapped();
                QRect res = 
                    
                w->frameGeometry(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for frameGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: geometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::geometry
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
                RListView* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QRect* res =
                    &
                w->geometry(
                  
                );
              
                //setRecFlag(false);
              
            // return type: const QRect&

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for geometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: normalGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::normalGeometry
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
                RListView* w = getWrapped();
                QRect res = 
                    
                w->normalGeometry(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for normalGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: x
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::x
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
                RListView* w = getWrapped();
                int res = 
                    
                w->x(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for x";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: y
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::y
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
                RListView* w = getWrapped();
                int res = 
                    
                w->y(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for y";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: pos
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::pos
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
                RListView* w = getWrapped();
                QPoint res = 
                    
                w->pos(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: frameSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::frameSize
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
                RListView* w = getWrapped();
                QSize res = 
                    
                w->frameSize(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for frameSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: size
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::size
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
                RListView* w = getWrapped();
                QSize res = 
                    
                w->size(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: width
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::width
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
                RListView* w = getWrapped();
                int res = 
                    
                w->width(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for width";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: height
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::height
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
                RListView* w = getWrapped();
                int res = 
                    
                w->height(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for height";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: rect
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::rect
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
                RListView* w = getWrapped();
                QRect res = 
                    
                w->rect(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: childrenRect
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::childrenRect
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
                RListView* w = getWrapped();
                QRect res = 
                    
                w->childrenRect(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for childrenRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: childrenRegion
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::childrenRegion
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
                RListView* w = getWrapped();
                QRegion res = 
                    
                w->childrenRegion(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for childrenRegion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: minimumSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::minimumSize
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
                RListView* w = getWrapped();
                QSize res = 
                    
                w->minimumSize(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: maximumSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::maximumSize
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
                RListView* w = getWrapped();
                QSize res = 
                    
                w->maximumSize(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: minimumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::minimumWidth
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
                RListView* w = getWrapped();
                int res = 
                    
                w->minimumWidth(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: minimumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::minimumHeight
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
                RListView* w = getWrapped();
                int res = 
                    
                w->minimumHeight(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: maximumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::maximumWidth
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
                RListView* w = getWrapped();
                int res = 
                    
                w->maximumWidth(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: maximumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::maximumHeight
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
                RListView* w = getWrapped();
                int res = 
                    
                w->maximumHeight(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setMinimumSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setMinimumSize
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
    
  // convert js parameter to cpp: minw (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: minh (int)
  
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
                RListView* w = getWrapped();
                
                w->setMinimumSize(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setMinimumSize(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMinimumSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setMaximumSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setMaximumSize
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
    
  // convert js parameter to cpp: maxw (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: maxh (int)
  
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
                RListView* w = getWrapped();
                
                w->setMaximumSize(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setMaximumSize(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMaximumSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setMinimumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setMinimumWidth
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
    
  // convert js parameter to cpp: minw (int)
  
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
                RListView* w = getWrapped();
                
                w->setMinimumWidth(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMinimumWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setMinimumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setMinimumHeight
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
    
  // convert js parameter to cpp: minh (int)
  
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
                RListView* w = getWrapped();
                
                w->setMinimumHeight(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMinimumHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setMaximumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setMaximumWidth
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
    
  // convert js parameter to cpp: maxw (int)
  
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
                RListView* w = getWrapped();
                
                w->setMaximumWidth(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMaximumWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setMaximumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setMaximumHeight
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
    
  // convert js parameter to cpp: maxh (int)
  
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
                RListView* w = getWrapped();
                
                w->setMaximumHeight(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMaximumHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: sizeIncrement
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::sizeIncrement
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
                RListView* w = getWrapped();
                QSize res = 
                    
                w->sizeIncrement(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sizeIncrement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setSizeIncrement
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setSizeIncrement
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
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: h (int)
  
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
                RListView* w = getWrapped();
                
                w->setSizeIncrement(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setSizeIncrement(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSizeIncrement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: baseSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::baseSize
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
                RListView* w = getWrapped();
                QSize res = 
                    
                w->baseSize(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for baseSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setBaseSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setBaseSize
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
    
  // convert js parameter to cpp: basew (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: baseh (int)
  
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
                RListView* w = getWrapped();
                
                w->setBaseSize(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setBaseSize(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBaseSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setFixedSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setFixedSize
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
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: h (int)
  
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
                RListView* w = getWrapped();
                
                w->setFixedSize(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setFixedSize(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFixedSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setFixedWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setFixedWidth
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
    
  // convert js parameter to cpp: w (int)
  
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
                RListView* w = getWrapped();
                
                w->setFixedWidth(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFixedWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setFixedHeight
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setFixedHeight
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
    
  // convert js parameter to cpp: h (int)
  
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
                RListView* w = getWrapped();
                
                w->setFixedHeight(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFixedHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: mapToGlobal
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::mapToGlobal
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

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
                RListView* w = getWrapped();
                QPoint res = 
                    
                w->mapToGlobal(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        

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
                RListView* w = getWrapped();
                QPointF res = 
                    
                w->mapToGlobal(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapToGlobal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: mapFromGlobal
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::mapFromGlobal
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

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
                RListView* w = getWrapped();
                QPoint res = 
                    
                w->mapFromGlobal(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        

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
                RListView* w = getWrapped();
                QPointF res = 
                    
                w->mapFromGlobal(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapFromGlobal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: mapToParent
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::mapToParent
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

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
                RListView* w = getWrapped();
                QPoint res = 
                    
                w->mapToParent(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapToParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: mapFromParent
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::mapFromParent
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

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
                RListView* w = getWrapped();
                QPoint res = 
                    
                w->mapFromParent(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapFromParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: mapTo
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::mapTo
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QPoint(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        
  // convert js parameter to cpp:  (QPoint)
  
QPoint a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPoint(handler, a2);
        

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
                RListView* w = getWrapped();
                QPoint res = 
                    
                w->mapTo(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: mapFrom
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::mapFrom
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QPoint(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        
  // convert js parameter to cpp:  (QPoint)
  
QPoint a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPoint(handler, a2);
        

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
                RListView* w = getWrapped();
                QPoint res = 
                    
                w->mapFrom(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QPointF(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        
  // convert js parameter to cpp:  (QPointF)
  
QPointF a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPointF(handler, a2);
        

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
                RListView* w = getWrapped();
                QPointF res = 
                    
                w->mapFrom(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: window
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::window
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
                RListView* w = getWrapped();
                QWidget* res = 
                    
                w->window(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for window";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: nativeParentWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::nativeParentWidget
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
                RListView* w = getWrapped();
                QWidget* res = 
                    
                w->nativeParentWidget(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nativeParentWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: topLevelWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::topLevelWidget
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
                RListView* w = getWrapped();
                QWidget* res = 
                    
                w->topLevelWidget(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topLevelWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: palette
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::palette
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
                RListView* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QPalette* res =
                    &
                w->palette(
                  
                );
              
                //setRecFlag(false);
              
            // return type: const QPalette&

            return RJSHelper::cpp2js_QPalette(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for palette";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setPalette
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setPalette
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPalette(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPalette)
  
QPalette a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setPalette(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPalette";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setBackgroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setBackgroundRole
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPalette_ColorRole(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPalette::ColorRole)
  
QPalette::ColorRole a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette_ColorRole(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setBackgroundRole(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBackgroundRole";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: backgroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::backgroundRole
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
                RListView* w = getWrapped();
                QPalette::ColorRole res = 
                    
                w->backgroundRole(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QPalette::ColorRole

            return RJSHelper::cpp2js_QPalette_ColorRole(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for backgroundRole";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setForegroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setForegroundRole
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPalette_ColorRole(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPalette::ColorRole)
  
QPalette::ColorRole a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette_ColorRole(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setForegroundRole(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setForegroundRole";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: foregroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::foregroundRole
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
                RListView* w = getWrapped();
                QPalette::ColorRole res = 
                    
                w->foregroundRole(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QPalette::ColorRole

            return RJSHelper::cpp2js_QPalette_ColorRole(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for foregroundRole";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: font
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::font
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
                RListView* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QFont* res =
                    &
                w->font(
                  
                );
              
                //setRecFlag(false);
              
            // return type: const QFont&

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for font";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setFont
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setFont
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFont)
  
QFont a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setFont(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: fontInfo
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::fontInfo
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
                RListView* w = getWrapped();
                QFontInfo res = 
                    
                w->fontInfo(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QFontInfo

            return RJSHelper::cpp2js_QFontInfo(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: cursor
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::cursor
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
                RListView* w = getWrapped();
                QCursor res = 
                    
                w->cursor(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QCursor

            return RJSHelper::cpp2js_QCursor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setCursor
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setCursor
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
    
  // convert js parameter to cpp:  (QCursor)
  
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
                RListView* w = getWrapped();
                
                w->setCursor(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: unsetCursor
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::unsetCursor
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
                RListView* w = getWrapped();
                
                w->unsetCursor(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unsetCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setMouseTracking
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setMouseTracking
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
    
  // convert js parameter to cpp: enable (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setMouseTracking(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMouseTracking";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: hasMouseTracking
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::hasMouseTracking
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->hasMouseTracking(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasMouseTracking";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: underMouse
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::underMouse
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->underMouse(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for underMouse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setTabletTracking
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setTabletTracking
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
    
  // convert js parameter to cpp: enable (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setTabletTracking(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTabletTracking";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: hasTabletTracking
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::hasTabletTracking
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->hasTabletTracking(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasTabletTracking";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setMask
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setMask
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QBitmap(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QBitmap)
  
QBitmap a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QBitmap(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setMask(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRegion(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRegion)
  
QRegion a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegion(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setMask(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMask";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: mask
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::mask
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
                RListView* w = getWrapped();
                QRegion res = 
                    
                w->mask(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mask";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: clearMask
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::clearMask
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
                RListView* w = getWrapped();
                
                w->clearMask(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearMask";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: grab
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::grab
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rectangle (QRect)
  
QRect a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QRect(QPoint(0, 0), QSize(-1, -1));
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
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
                RListView* w = getWrapped();
                QPixmap res = 
                    
                w->grab(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QPixmap

            return RJSHelper::cpp2js_QPixmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for grab";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: grabGesture
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::grabGesture
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_GestureType(handler, a1
  )

   && RJSHelper::is_Qt_GestureFlags(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (Qt::GestureType)
  
Qt::GestureType a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_GestureType(handler, a1);
        
  // convert js parameter to cpp: flags (Qt::GestureFlags)
  
Qt::GestureFlags a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::GestureFlags();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_GestureFlags(handler, a2);
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
                RListView* w = getWrapped();
                
                w->grabGesture(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for grabGesture";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: ungrabGesture
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::ungrabGesture
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_GestureType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (Qt::GestureType)
  
Qt::GestureType a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_GestureType(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->ungrabGesture(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ungrabGesture";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setWindowTitle
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setWindowTitle
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
    
  // convert js parameter to cpp:  (QString)
  
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
                RListView* w = getWrapped();
                
                w->setWindowTitle(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindowTitle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setStyleSheet
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setStyleSheet
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
    
  // convert js parameter to cpp: styleSheet (QString)
  
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
                RListView* w = getWrapped();
                
                w->setStyleSheet(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStyleSheet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: styleSheet
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::styleSheet
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
                RListView* w = getWrapped();
                QString res = 
                    
                w->styleSheet(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for styleSheet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: windowTitle
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::windowTitle
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
                RListView* w = getWrapped();
                QString res = 
                    
                w->windowTitle(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowTitle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setWindowIcon
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setWindowIcon
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QIcon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: icon (QIcon)
  
QIcon a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QIcon(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setWindowIcon(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindowIcon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: windowIcon
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::windowIcon
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
                RListView* w = getWrapped();
                QIcon res = 
                    
                w->windowIcon(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QIcon

            return RJSHelper::cpp2js_QIcon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowIcon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setWindowIconText
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setWindowIconText
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
    
  // convert js parameter to cpp:  (QString)
  
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
                RListView* w = getWrapped();
                
                w->setWindowIconText(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindowIconText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: windowIconText
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::windowIconText
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
                RListView* w = getWrapped();
                QString res = 
                    
                w->windowIconText(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowIconText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setWindowRole
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setWindowRole
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
    
  // convert js parameter to cpp:  (QString)
  
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
                RListView* w = getWrapped();
                
                w->setWindowRole(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindowRole";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: windowRole
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::windowRole
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
                RListView* w = getWrapped();
                QString res = 
                    
                w->windowRole(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowRole";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setWindowFilePath
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setWindowFilePath
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
    
  // convert js parameter to cpp: filePath (QString)
  
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
                RListView* w = getWrapped();
                
                w->setWindowFilePath(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindowFilePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: windowFilePath
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::windowFilePath
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
                RListView* w = getWrapped();
                QString res = 
                    
                w->windowFilePath(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowFilePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setWindowOpacity
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setWindowOpacity
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: level (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setWindowOpacity(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindowOpacity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: windowOpacity
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::windowOpacity
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
                RListView* w = getWrapped();
                qreal res = 
                    
                w->windowOpacity(
                  
                );
              
                //setRecFlag(false);
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowOpacity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isWindowModified
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isWindowModified
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isWindowModified(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWindowModified";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setToolTip
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setToolTip
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
    
  // convert js parameter to cpp:  (QString)
  
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
                RListView* w = getWrapped();
                
                w->setToolTip(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setToolTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: toolTip
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::toolTip
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
                RListView* w = getWrapped();
                QString res = 
                    
                w->toolTip(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toolTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setToolTipDuration
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setToolTipDuration
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
    
  // convert js parameter to cpp: msec (int)
  
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
                RListView* w = getWrapped();
                
                w->setToolTipDuration(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setToolTipDuration";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: toolTipDuration
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::toolTipDuration
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
                RListView* w = getWrapped();
                int res = 
                    
                w->toolTipDuration(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toolTipDuration";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setStatusTip
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setStatusTip
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
    
  // convert js parameter to cpp:  (QString)
  
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
                RListView* w = getWrapped();
                
                w->setStatusTip(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStatusTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: statusTip
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::statusTip
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
                RListView* w = getWrapped();
                QString res = 
                    
                w->statusTip(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for statusTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setWhatsThis
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setWhatsThis
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
    
  // convert js parameter to cpp:  (QString)
  
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
                RListView* w = getWrapped();
                
                w->setWhatsThis(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWhatsThis";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: whatsThis
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::whatsThis
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
                RListView* w = getWrapped();
                QString res = 
                    
                w->whatsThis(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for whatsThis";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: accessibleName
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::accessibleName
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
                RListView* w = getWrapped();
                QString res = 
                    
                w->accessibleName(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for accessibleName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setAccessibleName
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setAccessibleName
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
                RListView* w = getWrapped();
                
                w->setAccessibleName(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAccessibleName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: accessibleDescription
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::accessibleDescription
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
                RListView* w = getWrapped();
                QString res = 
                    
                w->accessibleDescription(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for accessibleDescription";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setAccessibleDescription
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setAccessibleDescription
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
    
  // convert js parameter to cpp: description (QString)
  
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
                RListView* w = getWrapped();
                
                w->setAccessibleDescription(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAccessibleDescription";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setLayoutDirection
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setLayoutDirection
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_LayoutDirection(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: direction (Qt::LayoutDirection)
  
Qt::LayoutDirection a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_LayoutDirection(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setLayoutDirection(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: layoutDirection
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::layoutDirection
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
                RListView* w = getWrapped();
                Qt::LayoutDirection res = 
                    
                w->layoutDirection(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::LayoutDirection

            return RJSHelper::cpp2js_Qt_LayoutDirection(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for layoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: unsetLayoutDirection
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::unsetLayoutDirection
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
                RListView* w = getWrapped();
                
                w->unsetLayoutDirection(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unsetLayoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setLocale
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setLocale
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: locale (QLocale)
  
QLocale a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setLocale(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLocale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: locale
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::locale
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
                RListView* w = getWrapped();
                QLocale res = 
                    
                w->locale(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QLocale

            return RJSHelper::cpp2js_QLocale(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for locale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: unsetLocale
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::unsetLocale
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
                RListView* w = getWrapped();
                
                w->unsetLocale(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unsetLocale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isRightToLeft
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isRightToLeft
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isRightToLeft(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRightToLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isLeftToRight
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isLeftToRight
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isLeftToRight(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLeftToRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isActiveWindow
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isActiveWindow
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isActiveWindow(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isActiveWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: activateWindow
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::activateWindow
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
                RListView* w = getWrapped();
                
                w->activateWindow(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for activateWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: clearFocus
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::clearFocus
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
                RListView* w = getWrapped();
                
                w->clearFocus(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setFocus
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setFocus
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_FocusReason(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: reason (Qt::FocusReason)
  
Qt::FocusReason a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_FocusReason(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setFocus(
                  a1_cpp
    
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
                RListView* w = getWrapped();
                
                w->setFocus(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: focusPolicy
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::focusPolicy
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
                RListView* w = getWrapped();
                Qt::FocusPolicy res = 
                    
                w->focusPolicy(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::FocusPolicy

            return RJSHelper::cpp2js_Qt_FocusPolicy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for focusPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setFocusPolicy
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setFocusPolicy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_FocusPolicy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: policy (Qt::FocusPolicy)
  
Qt::FocusPolicy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_FocusPolicy(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setFocusPolicy(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFocusPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: hasFocus
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::hasFocus
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->hasFocus(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setFocusProxy
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setFocusProxy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setFocusProxy(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFocusProxy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: focusProxy
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::focusProxy
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
                RListView* w = getWrapped();
                QWidget* res = 
                    
                w->focusProxy(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for focusProxy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: contextMenuPolicy
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::contextMenuPolicy
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
                RListView* w = getWrapped();
                Qt::ContextMenuPolicy res = 
                    
                w->contextMenuPolicy(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::ContextMenuPolicy

            return RJSHelper::cpp2js_Qt_ContextMenuPolicy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for contextMenuPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setContextMenuPolicy
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setContextMenuPolicy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_ContextMenuPolicy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: policy (Qt::ContextMenuPolicy)
  
Qt::ContextMenuPolicy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_ContextMenuPolicy(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setContextMenuPolicy(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setContextMenuPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: grabMouse
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::grabMouse
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
    
  // convert js parameter to cpp:  (QCursor)
  
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
                RListView* w = getWrapped();
                
                w->grabMouse(
                  a1_cpp
    
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
                RListView* w = getWrapped();
                
                w->grabMouse(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for grabMouse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: releaseMouse
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::releaseMouse
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
                RListView* w = getWrapped();
                
                w->releaseMouse(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for releaseMouse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: grabKeyboard
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::grabKeyboard
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
                RListView* w = getWrapped();
                
                w->grabKeyboard(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for grabKeyboard";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: releaseKeyboard
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::releaseKeyboard
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
                RListView* w = getWrapped();
                
                w->releaseKeyboard(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for releaseKeyboard";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: grabShortcut
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::grabShortcut
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeySequence(handler, a1
  )

   && RJSHelper::is_Qt_ShortcutContext(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QKeySequence)
  
QKeySequence a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QKeySequence(handler, a1);
        
  // convert js parameter to cpp: context (Qt::ShortcutContext)
  
Qt::ShortcutContext a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::WindowShortcut;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_ShortcutContext(handler, a2);
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
                RListView* w = getWrapped();
                int res = 
                    
                w->grabShortcut(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for grabShortcut";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: releaseShortcut
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::releaseShortcut
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
    
  // convert js parameter to cpp: id (int)
  
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
                RListView* w = getWrapped();
                
                w->releaseShortcut(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for releaseShortcut";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setShortcutEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setShortcutEnabled
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

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: enable (bool)
  
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
                RListView* w = getWrapped();
                
                w->setShortcutEnabled(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setShortcutEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setShortcutAutoRepeat
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setShortcutAutoRepeat
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

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: enable (bool)
  
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
                RListView* w = getWrapped();
                
                w->setShortcutAutoRepeat(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setShortcutAutoRepeat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: updatesEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::updatesEnabled
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->updatesEnabled(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for updatesEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setUpdatesEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setUpdatesEnabled
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
    
  // convert js parameter to cpp: enable (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setUpdatesEnabled(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUpdatesEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: repaint
    // Source: QWidget
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::repaint
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        

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
                RListView* w = getWrapped();
                
                w->repaint(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->repaint(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRegion(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRegion)
  
QRegion a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegion(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->repaint(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for repaint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setVisible
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setVisible
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
    
  // convert js parameter to cpp: visible (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setVisible(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setHidden
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setHidden
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
    
  // convert js parameter to cpp: hidden (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setHidden(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHidden";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: show
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::show
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
                RListView* w = getWrapped();
                
                w->show(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for show";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: hide
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::hide
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
                RListView* w = getWrapped();
                
                w->hide(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for hide";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: showMinimized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::showMinimized
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
                RListView* w = getWrapped();
                
                w->showMinimized(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showMinimized";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: showMaximized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::showMaximized
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
                RListView* w = getWrapped();
                
                w->showMaximized(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showMaximized";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: showFullScreen
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::showFullScreen
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
                RListView* w = getWrapped();
                
                w->showFullScreen(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showFullScreen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: showNormal
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::showNormal
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
                RListView* w = getWrapped();
                
                w->showNormal(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showNormal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: close
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::close
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->close(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for close";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: raise
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::raise
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
                RListView* w = getWrapped();
                
                w->raise(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for raise";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: lower
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::lower
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
                RListView* w = getWrapped();
                
                w->lower(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for lower";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: stackUnder
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::stackUnder
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->stackUnder(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for stackUnder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: move
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::move
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
                RListView* w = getWrapped();
                
                w->move(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->move(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for move";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: resize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::resize
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
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: h (int)
  
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
                RListView* w = getWrapped();
                
                w->resize(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->resize(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setGeometry
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        

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
                RListView* w = getWrapped();
                
                w->setGeometry(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setGeometry(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: saveGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::saveGeometry
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
                RListView* w = getWrapped();
                QByteArray res = 
                    
                w->saveGeometry(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for saveGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: restoreGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::restoreGeometry
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: geometry (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        

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
                RListView* w = getWrapped();
                bool res = 
                    
                w->restoreGeometry(
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

                  qWarning() << "no matching function variant found for restoreGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: adjustSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::adjustSize
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
                RListView* w = getWrapped();
                
                w->adjustSize(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for adjustSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isVisible
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isVisible
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isVisible(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isVisibleTo
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isVisibleTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isVisibleTo(
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

                  qWarning() << "no matching function variant found for isVisibleTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isHidden
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isHidden
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isHidden(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isHidden";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isMinimized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isMinimized
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isMinimized(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isMinimized";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isMaximized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isMaximized
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isMaximized(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isMaximized";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isFullScreen
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isFullScreen
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isFullScreen(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isFullScreen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: windowState
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::windowState
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
                RListView* w = getWrapped();
                Qt::WindowStates res = 
                    
                w->windowState(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::WindowStates

            return RJSHelper::cpp2js_Qt_WindowStates(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setWindowState
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setWindowState
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_WindowStates(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: state (Qt::WindowStates)
  
Qt::WindowStates a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_WindowStates(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setWindowState(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindowState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: overrideWindowState
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::overrideWindowState
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_WindowStates(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: state (Qt::WindowStates)
  
Qt::WindowStates a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_WindowStates(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->overrideWindowState(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for overrideWindowState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: sizePolicy
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::sizePolicy
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
                RListView* w = getWrapped();
                QSizePolicy res = 
                    
                w->sizePolicy(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSizePolicy

            return RJSHelper::cpp2js_QSizePolicy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sizePolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setSizePolicy
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setSizePolicy
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSizePolicy_Policy(handler, a1
  )

   && RJSHelper::is_QSizePolicy_Policy(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: horizontal (QSizePolicy::Policy)
  
QSizePolicy::Policy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSizePolicy_Policy(handler, a1);
        
  // convert js parameter to cpp: vertical (QSizePolicy::Policy)
  
QSizePolicy::Policy a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QSizePolicy_Policy(handler, a2);
        

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
                RListView* w = getWrapped();
                
                w->setSizePolicy(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QSizePolicy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSizePolicy)
  
QSizePolicy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSizePolicy(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setSizePolicy(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSizePolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: heightForWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::heightForWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
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
                RListView* w = getWrapped();
                int res = 
                    
                w->heightForWidth(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for heightForWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: hasHeightForWidth
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::hasHeightForWidth
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->hasHeightForWidth(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasHeightForWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: visibleRegion
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::visibleRegion
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
                RListView* w = getWrapped();
                QRegion res = 
                    
                w->visibleRegion(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for visibleRegion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setContentsMargins
    // Source: QWidget
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setContentsMargins
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: left (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: top (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: right (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: bottom (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        

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
                RListView* w = getWrapped();
                
                w->setContentsMargins(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QMargins(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margins (QMargins)
  
QMargins a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMargins(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setContentsMargins(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setContentsMargins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: contentsMargins
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::contentsMargins
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
                RListView* w = getWrapped();
                QMargins res = 
                    
                w->contentsMargins(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QMargins

            return RJSHelper::cpp2js_QMargins(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for contentsMargins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: contentsRect
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::contentsRect
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
                RListView* w = getWrapped();
                QRect res = 
                    
                w->contentsRect(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for contentsRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: layout
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::layout
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
                RListView* w = getWrapped();
                QLayout* res = 
                    
                w->layout(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QLayout*

            return RJSHelper::cpp2js_QLayout(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for layout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setLayout
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setLayout
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLayout_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QLayout)
  

          // pointer:
          QLayout*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLayout_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setLayout(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: updateGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::updateGeometry
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
                RListView* w = getWrapped();
                
                w->updateGeometry(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setParent
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setParent
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_Qt_WindowFlags(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        
  // convert js parameter to cpp: f (Qt::WindowFlags)
  
Qt::WindowFlags a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_WindowFlags(handler, a2);
        

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
                RListView* w = getWrapped();
                
                w->setParent(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

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

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setParent(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: scroll
    // Source: QWidget
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::scroll
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QRect(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: dy (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp:  (QRect)
  
QRect a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QRect(handler, a3);
        

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
                RListView* w = getWrapped();
                
                w->scroll(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: dy (int)
  
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
                RListView* w = getWrapped();
                
                w->scroll(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for scroll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: focusWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::focusWidget
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
                RListView* w = getWrapped();
                QWidget* res = 
                    
                w->focusWidget(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for focusWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: nextInFocusChain
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::nextInFocusChain
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
                RListView* w = getWrapped();
                QWidget* res = 
                    
                w->nextInFocusChain(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nextInFocusChain";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: previousInFocusChain
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::previousInFocusChain
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
                RListView* w = getWrapped();
                QWidget* res = 
                    
                w->previousInFocusChain(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for previousInFocusChain";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: acceptDrops
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::acceptDrops
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->acceptDrops(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for acceptDrops";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setAcceptDrops
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setAcceptDrops
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
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setAcceptDrops(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAcceptDrops";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: addAction
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::addAction
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAction_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: action (QAction)
  

          // pointer:
          QAction*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAction_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->addAction(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: addActions
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::addActions
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QAction_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: actions (QList<QAction*>)
  
QList<QAction*> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QAction_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->addActions(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QList_QAction_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: actions (QList<QAction*>)
  
QList<QAction*> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QAction_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->addActions(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addActions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: insertActions
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::insertActions
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAction_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QList_QAction_ptr(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: before (QAction)
  

          // pointer:
          QAction*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAction_ptr(handler, a1);
        
  // convert js parameter to cpp: actions (QList<QAction*>)
  
QList<QAction*> a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QList_QAction_ptr(handler, a2);
        

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
                RListView* w = getWrapped();
                
                w->insertActions(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QAction_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QList_QAction_ptr(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: before (QAction)
  

          // pointer:
          QAction*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAction_ptr(handler, a1);
        
  // convert js parameter to cpp: actions (QList<QAction*>)
  
QList<QAction*> a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QList_QAction_ptr(handler, a2);
        

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
                RListView* w = getWrapped();
                
                w->insertActions(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertActions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: insertAction
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::insertAction
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAction_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QAction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: before (QAction)
  

          // pointer:
          QAction*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAction_ptr(handler, a1);
        
  // convert js parameter to cpp: action (QAction)
  

          // pointer:
          QAction*
         a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QAction_ptr(handler, a2);
        

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
                RListView* w = getWrapped();
                
                w->insertAction(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: removeAction
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::removeAction
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAction_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: action (QAction)
  

          // pointer:
          QAction*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAction_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->removeAction(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: actions
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::actions
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
                RListView* w = getWrapped();
                QList<QAction*> res = 
                    
                w->actions(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QList<QAction*>

            return RJSHelper::cpp2js_QList_QAction_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for actions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: parentWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::parentWidget
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
                RListView* w = getWrapped();
                QWidget* res = 
                    
                w->parentWidget(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parentWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setWindowFlags
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setWindowFlags
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_WindowFlags(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (Qt::WindowFlags)
  
Qt::WindowFlags a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_WindowFlags(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setWindowFlags(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindowFlags";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: windowFlags
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::windowFlags
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
                RListView* w = getWrapped();
                Qt::WindowFlags res = 
                    
                w->windowFlags(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::WindowFlags

            return RJSHelper::cpp2js_Qt_WindowFlags(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowFlags";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setWindowFlag
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setWindowFlag
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_WindowType(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (Qt::WindowType)
  
Qt::WindowType a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_WindowType(handler, a1);
        
  // convert js parameter to cpp: on (bool)
  
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
                RListView* w = getWrapped();
                
                w->setWindowFlag(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindowFlag";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: overrideWindowFlags
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::overrideWindowFlags
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_WindowFlags(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (Qt::WindowFlags)
  
Qt::WindowFlags a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_WindowFlags(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->overrideWindowFlags(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for overrideWindowFlags";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: windowType
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::windowType
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
                RListView* w = getWrapped();
                Qt::WindowType res = 
                    
                w->windowType(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::WindowType

            return RJSHelper::cpp2js_Qt_WindowType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: childAt
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::childAt
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
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
                RListView* w = getWrapped();
                QWidget* res = 
                    
                w->childAt(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

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
                RListView* w = getWrapped();
                QWidget* res = 
                    
                w->childAt(
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

                  qWarning() << "no matching function variant found for childAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setAttribute
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setAttribute
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_WidgetAttribute(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (Qt::WidgetAttribute)
  
Qt::WidgetAttribute a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_WidgetAttribute(handler, a1);
        
  // convert js parameter to cpp: on (bool)
  
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
                RListView* w = getWrapped();
                
                w->setAttribute(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAttribute";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: testAttribute
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::testAttribute
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_WidgetAttribute(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (Qt::WidgetAttribute)
  
Qt::WidgetAttribute a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_WidgetAttribute(handler, a1);
        

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
                RListView* w = getWrapped();
                bool res = 
                    
                w->testAttribute(
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

                  qWarning() << "no matching function variant found for testAttribute";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: ensurePolished
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::ensurePolished
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
                RListView* w = getWrapped();
                
                w->ensurePolished(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ensurePolished";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isAncestorOf
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isAncestorOf
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: child (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isAncestorOf(
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

                  qWarning() << "no matching function variant found for isAncestorOf";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: autoFillBackground
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::autoFillBackground
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->autoFillBackground(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for autoFillBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setAutoFillBackground
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setAutoFillBackground
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
    
  // convert js parameter to cpp: enabled (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setAutoFillBackground(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoFillBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: customContextMenuRequested
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::customContextMenuRequestedEmitter(
                const QPoint& pos
              ) {
                // convert cpp parameters to js:
                
  // parameter: pos (QPoint)
  


  QJSValue a1_js = RJSHelper::cpp2js_QPoint(
    handler, 
    pos
  );


                emit customContextMenuRequested(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: actionEvent
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      actionEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QActionEvent_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (QActionEvent)
  

          // pointer:
          QActionEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QActionEvent_ptr(handler, a1);
        

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
                  qWarning() << "RListView::actionEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->actionEventPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for actionEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: inputMethodHints
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::inputMethodHints
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
                RListView* w = getWrapped();
                Qt::InputMethodHints res = 
                    
                w->inputMethodHints(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::InputMethodHints

            return RJSHelper::cpp2js_Qt_InputMethodHints(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for inputMethodHints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setInputMethodHints
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setInputMethodHints
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_InputMethodHints(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hints (Qt::InputMethodHints)
  
Qt::InputMethodHints a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_InputMethodHints(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setInputMethodHints(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setInputMethodHints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: frameStyle
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::frameStyle
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
                RListView* w = getWrapped();
                int res = 
                    
                w->frameStyle(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for frameStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setFrameStyle
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setFrameStyle
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
    
  // convert js parameter to cpp:  (int)
  
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
                RListView* w = getWrapped();
                
                w->setFrameStyle(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFrameStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: frameWidth
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::frameWidth
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
                RListView* w = getWrapped();
                int res = 
                    
                w->frameWidth(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for frameWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: frameShape
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::frameShape
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
                RListView* w = getWrapped();
                QFrame::Shape res = 
                    
                w->frameShape(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QFrame::Shape

            return RJSHelper::cpp2js_QFrame_Shape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for frameShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setFrameShape
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setFrameShape
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFrame_Shape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFrame::Shape)
  
QFrame::Shape a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFrame_Shape(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setFrameShape(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFrameShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: frameShadow
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::frameShadow
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
                RListView* w = getWrapped();
                QFrame::Shadow res = 
                    
                w->frameShadow(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QFrame::Shadow

            return RJSHelper::cpp2js_QFrame_Shadow(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for frameShadow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setFrameShadow
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setFrameShadow
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFrame_Shadow(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFrame::Shadow)
  
QFrame::Shadow a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFrame_Shadow(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setFrameShadow(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFrameShadow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: lineWidth
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::lineWidth
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
                RListView* w = getWrapped();
                int res = 
                    
                w->lineWidth(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lineWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setLineWidth
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setLineWidth
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
    
  // convert js parameter to cpp:  (int)
  
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
                RListView* w = getWrapped();
                
                w->setLineWidth(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLineWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: midLineWidth
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::midLineWidth
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
                RListView* w = getWrapped();
                int res = 
                    
                w->midLineWidth(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for midLineWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setMidLineWidth
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setMidLineWidth
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
    
  // convert js parameter to cpp:  (int)
  
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
                RListView* w = getWrapped();
                
                w->setMidLineWidth(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMidLineWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: frameRect
    // Source: QFrame
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::frameRect
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
                RListView* w = getWrapped();
                QRect res = 
                    
                w->frameRect(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for frameRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setFrameRect
    // Source: QFrame
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setFrameRect
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setFrameRect(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFrameRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: verticalScrollBarPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::verticalScrollBarPolicy
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
                RListView* w = getWrapped();
                Qt::ScrollBarPolicy res = 
                    
                w->verticalScrollBarPolicy(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::ScrollBarPolicy

            return RJSHelper::cpp2js_Qt_ScrollBarPolicy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for verticalScrollBarPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setVerticalScrollBarPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setVerticalScrollBarPolicy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_ScrollBarPolicy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (Qt::ScrollBarPolicy)
  
Qt::ScrollBarPolicy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_ScrollBarPolicy(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setVerticalScrollBarPolicy(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVerticalScrollBarPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: verticalScrollBar
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::verticalScrollBar
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
                RListView* w = getWrapped();
                QScrollBar* res = 
                    
                w->verticalScrollBar(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QScrollBar*

            return RJSHelper::cpp2js_QScrollBar(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for verticalScrollBar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setVerticalScrollBar
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setVerticalScrollBar
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QScrollBar_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scrollbar (QScrollBar)
  

          // pointer:
          QScrollBar*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QScrollBar_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setVerticalScrollBar(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVerticalScrollBar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: horizontalScrollBarPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::horizontalScrollBarPolicy
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
                RListView* w = getWrapped();
                Qt::ScrollBarPolicy res = 
                    
                w->horizontalScrollBarPolicy(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::ScrollBarPolicy

            return RJSHelper::cpp2js_Qt_ScrollBarPolicy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for horizontalScrollBarPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setHorizontalScrollBarPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setHorizontalScrollBarPolicy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_ScrollBarPolicy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (Qt::ScrollBarPolicy)
  
Qt::ScrollBarPolicy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_ScrollBarPolicy(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setHorizontalScrollBarPolicy(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHorizontalScrollBarPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: horizontalScrollBar
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::horizontalScrollBar
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
                RListView* w = getWrapped();
                QScrollBar* res = 
                    
                w->horizontalScrollBar(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QScrollBar*

            return RJSHelper::cpp2js_QScrollBar(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for horizontalScrollBar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setHorizontalScrollBar
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setHorizontalScrollBar
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QScrollBar_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scrollbar (QScrollBar)
  

          // pointer:
          QScrollBar*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QScrollBar_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setHorizontalScrollBar(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHorizontalScrollBar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: cornerWidget
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::cornerWidget
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
                RListView* w = getWrapped();
                QWidget* res = 
                    
                w->cornerWidget(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cornerWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setCornerWidget
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setCornerWidget
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: widget (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setCornerWidget(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCornerWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: addScrollBarWidget
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::addScrollBarWidget
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_Qt_Alignment(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: widget (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        
  // convert js parameter to cpp: alignment (Qt::Alignment)
  
Qt::Alignment a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_Alignment(handler, a2);
        

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
                RListView* w = getWrapped();
                
                w->addScrollBarWidget(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addScrollBarWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: viewport
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::viewport
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
                RListView* w = getWrapped();
                QWidget* res = 
                    
                w->viewport(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for viewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setViewport
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setViewport
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: widget (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setViewport(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: maximumViewportSize
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::maximumViewportSize
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
                RListView* w = getWrapped();
                QSize res = 
                    
                w->maximumViewportSize(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumViewportSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: minimumSizeHint
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::minimumSizeHint
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
                RListView* w = getWrapped();
                QSize res = 
                    
                w->minimumSizeHint(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumSizeHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: sizeHint
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::sizeHint
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
                RListView* w = getWrapped();
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
            
    // Class: RListView
    // Function: setupViewport
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setupViewport
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewport (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setupViewport(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setupViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: sizeAdjustPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::sizeAdjustPolicy
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
                RListView* w = getWrapped();
                QAbstractScrollArea::SizeAdjustPolicy res = 
                    
                w->sizeAdjustPolicy(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QAbstractScrollArea::SizeAdjustPolicy

            return RJSHelper::cpp2js_QAbstractScrollArea_SizeAdjustPolicy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sizeAdjustPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setSizeAdjustPolicy
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setSizeAdjustPolicy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAbstractScrollArea_SizeAdjustPolicy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: policy (QAbstractScrollArea::SizeAdjustPolicy)
  
QAbstractScrollArea::SizeAdjustPolicy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAbstractScrollArea_SizeAdjustPolicy(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setSizeAdjustPolicy(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSizeAdjustPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setViewportMargins
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      setViewportMarginsSuper
                    
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: left (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: top (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: right (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: bottom (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        

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
                  qWarning() << "RListView::setViewportMargins: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->setViewportMarginsPublic(
                      a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QMargins(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margins (QMargins)
  
QMargins a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMargins(handler, a1);
        

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
                  qWarning() << "RListView::setViewportMargins: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->setViewportMarginsPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setViewportMargins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: viewportMargins
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      viewportMarginsSuper
                    
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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::viewportMargins: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                QMargins res;
                    res =
                    wb->viewportMarginsPublic(
                      
                    );
                  
                //setRecFlag(false);
              
            // return type: QMargins

            return RJSHelper::cpp2js_QMargins(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for viewportMargins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: eventFilter
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      eventFilterSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QEvent_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        
  // convert js parameter to cpp:  (QEvent)
  

          // pointer:
          QEvent*
         a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QEvent_ptr(handler, a2);
        

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
                  qWarning() << "RListView::eventFilter: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    res =
                    wb->eventFilterPublic(
                      a1_cpp
    , a2_cpp
    
                    );
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for eventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: viewportEvent
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      viewportEventSuper
                    
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
    
  // convert js parameter to cpp:  (QEvent)
  

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
                  qWarning() << "RListView::viewportEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    res =
                    wb->viewportEventPublic(
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

                  qWarning() << "no matching function variant found for viewportEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: mouseDoubleClickEvent
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      mouseDoubleClickEventSuper
                    
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
    
  // convert js parameter to cpp:  (QMouseEvent)
  

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
                  qWarning() << "RListView::mouseDoubleClickEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->mouseDoubleClickEventPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mouseDoubleClickEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: keyPressEvent
    // Source: QAbstractScrollArea
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      keyPressEventSuper
                    
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
    
  // convert js parameter to cpp:  (QKeyEvent)
  

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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::keyPressEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->keyPressEventPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for keyPressEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setModel
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setModel
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAbstractItemModel_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: model (QAbstractItemModel)
  

          // pointer:
          QAbstractItemModel*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAbstractItemModel_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setModel(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: model
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::model
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
                RListView* w = getWrapped();
                QAbstractItemModel* res = 
                    
                w->model(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QAbstractItemModel*

            return RJSHelper::cpp2js_QAbstractItemModel(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for model";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setSelectionModel
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setSelectionModel
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QItemSelectionModel_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: selectionModel (QItemSelectionModel)
  

          // pointer:
          QItemSelectionModel*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QItemSelectionModel_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setSelectionModel(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSelectionModel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: selectionModel
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::selectionModel
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
                RListView* w = getWrapped();
                QItemSelectionModel* res = 
                    
                w->selectionModel(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QItemSelectionModel*

            return RJSHelper::cpp2js_QItemSelectionModel(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for selectionModel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setItemDelegate
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setItemDelegate
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAbstractItemDelegate_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: delegate (QAbstractItemDelegate)
  

          // pointer:
          QAbstractItemDelegate*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAbstractItemDelegate_ptr(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setItemDelegate(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setItemDelegate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setSelectionMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setSelectionMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAbstractItemView_SelectionMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QAbstractItemView::SelectionMode)
  
QAbstractItemView::SelectionMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAbstractItemView_SelectionMode(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setSelectionMode(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSelectionMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: selectionMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::selectionMode
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
                RListView* w = getWrapped();
                QAbstractItemView::SelectionMode res = 
                    
                w->selectionMode(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QAbstractItemView::SelectionMode

            return RJSHelper::cpp2js_QAbstractItemView_SelectionMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for selectionMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setSelectionBehavior
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setSelectionBehavior
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAbstractItemView_SelectionBehavior(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: behavior (QAbstractItemView::SelectionBehavior)
  
QAbstractItemView::SelectionBehavior a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAbstractItemView_SelectionBehavior(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setSelectionBehavior(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSelectionBehavior";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: selectionBehavior
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::selectionBehavior
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
                RListView* w = getWrapped();
                QAbstractItemView::SelectionBehavior res = 
                    
                w->selectionBehavior(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QAbstractItemView::SelectionBehavior

            return RJSHelper::cpp2js_QAbstractItemView_SelectionBehavior(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for selectionBehavior";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: currentIndex
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::currentIndex
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
                RListView* w = getWrapped();
                QModelIndex res = 
                    
                w->currentIndex(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QModelIndex

            return RJSHelper::cpp2js_QModelIndex(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: rootIndex
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::rootIndex
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
                RListView* w = getWrapped();
                QModelIndex res = 
                    
                w->rootIndex(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QModelIndex

            return RJSHelper::cpp2js_QModelIndex(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rootIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setEditTriggers
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setEditTriggers
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAbstractItemView_EditTriggers(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: triggers (QAbstractItemView::EditTriggers)
  
QAbstractItemView::EditTriggers a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAbstractItemView_EditTriggers(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setEditTriggers(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEditTriggers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: editTriggers
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::editTriggers
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
                RListView* w = getWrapped();
                QAbstractItemView::EditTriggers res = 
                    
                w->editTriggers(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QAbstractItemView::EditTriggers

            return RJSHelper::cpp2js_QAbstractItemView_EditTriggers(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for editTriggers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setVerticalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setVerticalScrollMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAbstractItemView_ScrollMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QAbstractItemView::ScrollMode)
  
QAbstractItemView::ScrollMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAbstractItemView_ScrollMode(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setVerticalScrollMode(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVerticalScrollMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: verticalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::verticalScrollMode
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
                RListView* w = getWrapped();
                QAbstractItemView::ScrollMode res = 
                    
                w->verticalScrollMode(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QAbstractItemView::ScrollMode

            return RJSHelper::cpp2js_QAbstractItemView_ScrollMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for verticalScrollMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: resetVerticalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::resetVerticalScrollMode
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
                RListView* w = getWrapped();
                
                w->resetVerticalScrollMode(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resetVerticalScrollMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setHorizontalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setHorizontalScrollMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAbstractItemView_ScrollMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QAbstractItemView::ScrollMode)
  
QAbstractItemView::ScrollMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAbstractItemView_ScrollMode(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setHorizontalScrollMode(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHorizontalScrollMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: horizontalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::horizontalScrollMode
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
                RListView* w = getWrapped();
                QAbstractItemView::ScrollMode res = 
                    
                w->horizontalScrollMode(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QAbstractItemView::ScrollMode

            return RJSHelper::cpp2js_QAbstractItemView_ScrollMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for horizontalScrollMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: resetHorizontalScrollMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::resetHorizontalScrollMode
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
                RListView* w = getWrapped();
                
                w->resetHorizontalScrollMode(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resetHorizontalScrollMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setAutoScroll
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setAutoScroll
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
    
  // convert js parameter to cpp: enable (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setAutoScroll(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoScroll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: hasAutoScroll
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::hasAutoScroll
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->hasAutoScroll(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasAutoScroll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setAutoScrollMargin
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setAutoScrollMargin
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
    
  // convert js parameter to cpp: margin (int)
  
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
                RListView* w = getWrapped();
                
                w->setAutoScrollMargin(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoScrollMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: autoScrollMargin
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::autoScrollMargin
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
                RListView* w = getWrapped();
                int res = 
                    
                w->autoScrollMargin(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for autoScrollMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setTabKeyNavigation
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setTabKeyNavigation
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
    
  // convert js parameter to cpp: enable (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setTabKeyNavigation(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTabKeyNavigation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: tabKeyNavigation
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::tabKeyNavigation
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->tabKeyNavigation(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tabKeyNavigation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setDropIndicatorShown
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setDropIndicatorShown
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
    
  // convert js parameter to cpp: enable (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setDropIndicatorShown(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDropIndicatorShown";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: showDropIndicator
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::showDropIndicator
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->showDropIndicator(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for showDropIndicator";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setDragEnabled
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setDragEnabled
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
    
  // convert js parameter to cpp: enable (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setDragEnabled(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDragEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: dragEnabled
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::dragEnabled
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->dragEnabled(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dragEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setDragDropOverwriteMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setDragDropOverwriteMode
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
    
  // convert js parameter to cpp: overwrite (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setDragDropOverwriteMode(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDragDropOverwriteMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: dragDropOverwriteMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::dragDropOverwriteMode
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->dragDropOverwriteMode(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dragDropOverwriteMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setDragDropMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setDragDropMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAbstractItemView_DragDropMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: behavior (QAbstractItemView::DragDropMode)
  
QAbstractItemView::DragDropMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAbstractItemView_DragDropMode(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setDragDropMode(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDragDropMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: dragDropMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::dragDropMode
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
                RListView* w = getWrapped();
                QAbstractItemView::DragDropMode res = 
                    
                w->dragDropMode(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QAbstractItemView::DragDropMode

            return RJSHelper::cpp2js_QAbstractItemView_DragDropMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dragDropMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setDefaultDropAction
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setDefaultDropAction
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_DropAction(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dropAction (Qt::DropAction)
  
Qt::DropAction a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_DropAction(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setDefaultDropAction(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDefaultDropAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: defaultDropAction
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::defaultDropAction
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
                RListView* w = getWrapped();
                Qt::DropAction res = 
                    
                w->defaultDropAction(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::DropAction

            return RJSHelper::cpp2js_Qt_DropAction(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for defaultDropAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setAlternatingRowColors
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setAlternatingRowColors
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
    
  // convert js parameter to cpp: enable (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setAlternatingRowColors(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAlternatingRowColors";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: alternatingRowColors
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::alternatingRowColors
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->alternatingRowColors(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for alternatingRowColors";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setIconSize
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setIconSize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setIconSize(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setIconSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: iconSize
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::iconSize
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
                RListView* w = getWrapped();
                QSize res = 
                    
                w->iconSize(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for iconSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setTextElideMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setTextElideMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_TextElideMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (Qt::TextElideMode)
  
Qt::TextElideMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_TextElideMode(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setTextElideMode(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextElideMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: textElideMode
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::textElideMode
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
                RListView* w = getWrapped();
                Qt::TextElideMode res = 
                    
                w->textElideMode(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::TextElideMode

            return RJSHelper::cpp2js_Qt_TextElideMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for textElideMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: keyboardSearch
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::keyboardSearch
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
    
  // convert js parameter to cpp: search (QString)
  
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
                RListView* w = getWrapped();
                
                w->keyboardSearch(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for keyboardSearch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isPersistentEditorOpen
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isPersistentEditorOpen
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isPersistentEditorOpen(
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

                  qWarning() << "no matching function variant found for isPersistentEditorOpen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setIndexWidget
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setIndexWidget
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

   && RJSHelper::is_QWidget_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: widget (QWidget)
  

          // pointer:
          QWidget*
         a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a2);
        

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
                RListView* w = getWrapped();
                
                w->setIndexWidget(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setIndexWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: indexWidget
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::indexWidget
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

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
                RListView* w = getWrapped();
                QWidget* res = 
                    
                w->indexWidget(
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

                  qWarning() << "no matching function variant found for indexWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: inputMethodQuery
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::inputMethodQuery
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_InputMethodQuery(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: query (Qt::InputMethodQuery)
  
Qt::InputMethodQuery a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_InputMethodQuery(handler, a1);
        

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
                RListView* w = getWrapped();
                QVariant res = 
                    
                w->inputMethodQuery(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for inputMethodQuery";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: selectAll
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::selectAll
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
                RListView* w = getWrapped();
                
                w->selectAll(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for selectAll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: edit
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::edit
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->edit(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for edit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: clearSelection
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::clearSelection
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
                RListView* w = getWrapped();
                
                w->clearSelection(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearSelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setCurrentIndex
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setCurrentIndex
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setCurrentIndex(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: scrollToTop
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::scrollToTop
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
                RListView* w = getWrapped();
                
                w->scrollToTop(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for scrollToTop";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: scrollToBottom
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::scrollToBottom
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
                RListView* w = getWrapped();
                
                w->scrollToBottom(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for scrollToBottom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: update
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::update
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->update(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for update";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: pressed
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::pressedEmitter(
                const QModelIndex& index
              ) {
                // convert cpp parameters to js:
                
  // parameter: index (QModelIndex)
  


  QJSValue a1_js = RJSHelper::cpp2js_QModelIndex(
    handler, 
    index
  );


                emit pressed(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: clicked
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::clickedEmitter(
                const QModelIndex& index
              ) {
                // convert cpp parameters to js:
                
  // parameter: index (QModelIndex)
  


  QJSValue a1_js = RJSHelper::cpp2js_QModelIndex(
    handler, 
    index
  );


                emit clicked(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: doubleClicked
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::doubleClickedEmitter(
                const QModelIndex& index
              ) {
                // convert cpp parameters to js:
                
  // parameter: index (QModelIndex)
  


  QJSValue a1_js = RJSHelper::cpp2js_QModelIndex(
    handler, 
    index
  );


                emit doubleClicked(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: activated
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::activatedEmitter(
                const QModelIndex& index
              ) {
                // convert cpp parameters to js:
                
  // parameter: index (QModelIndex)
  


  QJSValue a1_js = RJSHelper::cpp2js_QModelIndex(
    handler, 
    index
  );


                emit activated(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: entered
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::enteredEmitter(
                const QModelIndex& index
              ) {
                // convert cpp parameters to js:
                
  // parameter: index (QModelIndex)
  


  QJSValue a1_js = RJSHelper::cpp2js_QModelIndex(
    handler, 
    index
  );


                emit entered(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: viewportEntered
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::viewportEnteredEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit viewportEntered(
                  
                );
              }
            
    // Class: RListView
    // Function: iconSizeChanged
    // Source: QAbstractItemView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListView_Wrapper::iconSizeChangedEmitter(
                const QSize& size
              ) {
                // convert cpp parameters to js:
                
  // parameter: size (QSize)
  


  QJSValue a1_js = RJSHelper::cpp2js_QSize(
    handler, 
    size
  );


                emit iconSizeChanged(
                  a1_js
                );
              }
            
    // Class: RListView
    // Function: setMovement
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setMovement
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QListView_Movement(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: movement (QListView::Movement)
  
QListView::Movement a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QListView_Movement(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setMovement(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMovement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: movement
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::movement
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
                RListView* w = getWrapped();
                QListView::Movement res = 
                    
                w->movement(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QListView::Movement

            return RJSHelper::cpp2js_QListView_Movement(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for movement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setFlow
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setFlow
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QListView_Flow(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flow (QListView::Flow)
  
QListView::Flow a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QListView_Flow(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setFlow(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFlow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: flow
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::flow
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
                RListView* w = getWrapped();
                QListView::Flow res = 
                    
                w->flow(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QListView::Flow

            return RJSHelper::cpp2js_QListView_Flow(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for flow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setWrapping
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setWrapping
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
    
  // convert js parameter to cpp: enable (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setWrapping(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWrapping";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isWrapping
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isWrapping
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isWrapping(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWrapping";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setResizeMode
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setResizeMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QListView_ResizeMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QListView::ResizeMode)
  
QListView::ResizeMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QListView_ResizeMode(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setResizeMode(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setResizeMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: resizeMode
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::resizeMode
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
                RListView* w = getWrapped();
                QListView::ResizeMode res = 
                    
                w->resizeMode(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QListView::ResizeMode

            return RJSHelper::cpp2js_QListView_ResizeMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for resizeMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setLayoutMode
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setLayoutMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QListView_LayoutMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QListView::LayoutMode)
  
QListView::LayoutMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QListView_LayoutMode(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setLayoutMode(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayoutMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: layoutMode
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::layoutMode
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
                RListView* w = getWrapped();
                QListView::LayoutMode res = 
                    
                w->layoutMode(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QListView::LayoutMode

            return RJSHelper::cpp2js_QListView_LayoutMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for layoutMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setSpacing
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setSpacing
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
    
  // convert js parameter to cpp: space (int)
  
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
                RListView* w = getWrapped();
                
                w->setSpacing(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: spacing
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::spacing
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
                RListView* w = getWrapped();
                int res = 
                    
                w->spacing(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for spacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setBatchSize
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setBatchSize
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
    
  // convert js parameter to cpp: batchSize (int)
  
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
                RListView* w = getWrapped();
                
                w->setBatchSize(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBatchSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: batchSize
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::batchSize
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
                RListView* w = getWrapped();
                int res = 
                    
                w->batchSize(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for batchSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setGridSize
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setGridSize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setGridSize(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGridSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: gridSize
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::gridSize
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
                RListView* w = getWrapped();
                QSize res = 
                    
                w->gridSize(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for gridSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setViewMode
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setViewMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QListView_ViewMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QListView::ViewMode)
  
QListView::ViewMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QListView_ViewMode(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setViewMode(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setViewMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: viewMode
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::viewMode
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
                RListView* w = getWrapped();
                QListView::ViewMode res = 
                    
                w->viewMode(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QListView::ViewMode

            return RJSHelper::cpp2js_QListView_ViewMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for viewMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: clearPropertyFlags
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::clearPropertyFlags
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
                RListView* w = getWrapped();
                
                w->clearPropertyFlags(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearPropertyFlags";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isRowHidden
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isRowHidden
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isRowHidden(
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

                  qWarning() << "no matching function variant found for isRowHidden";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setRowHidden
    // Source: QListView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setRowHidden
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

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: hide (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

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
                RListView* w = getWrapped();
                
                w->setRowHidden(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRowHidden";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setModelColumn
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setModelColumn
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
    
  // convert js parameter to cpp: column (int)
  
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
                RListView* w = getWrapped();
                
                w->setModelColumn(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModelColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: modelColumn
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::modelColumn
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
                RListView* w = getWrapped();
                int res = 
                    
                w->modelColumn(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for modelColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setUniformItemSizes
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setUniformItemSizes
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
    
  // convert js parameter to cpp: enable (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setUniformItemSizes(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUniformItemSizes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: uniformItemSizes
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::uniformItemSizes
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->uniformItemSizes(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for uniformItemSizes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setWordWrap
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setWordWrap
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
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setWordWrap(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWordWrap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: wordWrap
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::wordWrap
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->wordWrap(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for wordWrap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setSelectionRectVisible
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setSelectionRectVisible
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
    
  // convert js parameter to cpp: show (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setSelectionRectVisible(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSelectionRectVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isSelectionRectVisible
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::isSelectionRectVisible
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
                RListView* w = getWrapped();
                bool res = 
                    
                w->isSelectionRectVisible(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSelectionRectVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setItemAlignment
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setItemAlignment
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_Alignment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: alignment (Qt::Alignment)
  
Qt::Alignment a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_Alignment(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setItemAlignment(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setItemAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: itemAlignment
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::itemAlignment
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
                RListView* w = getWrapped();
                Qt::Alignment res = 
                    
                w->itemAlignment(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::Alignment

            return RJSHelper::cpp2js_Qt_Alignment(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for itemAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: visualRect
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::visualRect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

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
                RListView* w = getWrapped();
                QRect res = 
                    
                w->visualRect(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for visualRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: scrollTo
    // Source: QListView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::scrollTo
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

   && RJSHelper::is_QAbstractItemView_ScrollHint(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: hint (QAbstractItemView::ScrollHint)
  
QAbstractItemView::ScrollHint a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QAbstractItemView::EnsureVisible;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QAbstractItemView_ScrollHint(handler, a2);
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
                RListView* w = getWrapped();
                
                w->scrollTo(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for scrollTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: indexAt
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::indexAt
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

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
                RListView* w = getWrapped();
                QModelIndex res = 
                    
                w->indexAt(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QModelIndex

            return RJSHelper::cpp2js_QModelIndex(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for indexAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: doItemsLayout
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::doItemsLayout
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
                RListView* w = getWrapped();
                
                w->doItemsLayout(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for doItemsLayout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: reset
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::reset
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
                RListView* w = getWrapped();
                
                w->reset(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setRootIndex
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper::setRootIndex
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

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
                RListView* w = getWrapped();
                
                w->setRootIndex(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRootIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: scrollContentsBy
    // Source: QListView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      scrollContentsBySuper
                    
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
    
  // convert js parameter to cpp: dx (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: dy (int)
  
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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::scrollContentsBy: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->scrollContentsByPublic(
                      a1_cpp
    , a2_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for scrollContentsBy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: resizeContents
    // Source: QListView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      resizeContentsSuper
                    
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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::resizeContents: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->resizeContentsPublic(
                      a1_cpp
    , a2_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resizeContents";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: contentsSize
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      contentsSizeSuper
                    
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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::contentsSize: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                QSize res;
                    res =
                    wb->contentsSizePublic(
                      
                    );
                  
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for contentsSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: dataChanged
    // Source: QListView
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      dataChangedSuper
                    
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
        RJSHelper::is_QModelIndex(handler, a1
  )

   && RJSHelper::is_QModelIndex(handler, a2
  )

   && RJSHelper::is_QList_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: topLeft (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: bottomRight (QModelIndex)
  
QModelIndex a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QModelIndex(handler, a2);
        
  // convert js parameter to cpp: roles (QList<int>)
  
QList<int> a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QList<int>();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QList_int(handler, a3);
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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::dataChanged: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->dataChangedPublic(
                      a1_cpp
    , a2_cpp
    , a3_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dataChanged";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: rowsInserted
    // Source: QListView
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      rowsInsertedSuper
                    
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
        RJSHelper::is_QModelIndex(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: start (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: end (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        

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
                  qWarning() << "RListView::rowsInserted: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->rowsInsertedPublic(
                      a1_cpp
    , a2_cpp
    , a3_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for rowsInserted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: rowsAboutToBeRemoved
    // Source: QListView
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      rowsAboutToBeRemovedSuper
                    
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
        RJSHelper::is_QModelIndex(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: start (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: end (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        

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
                  qWarning() << "RListView::rowsAboutToBeRemoved: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->rowsAboutToBeRemovedPublic(
                      a1_cpp
    , a2_cpp
    , a3_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for rowsAboutToBeRemoved";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: wheelEvent
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      wheelEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWheelEvent_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: e (QWheelEvent)
  

          // pointer:
          QWheelEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWheelEvent_ptr(handler, a1);
        

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
                  qWarning() << "RListView::wheelEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->wheelEventPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for wheelEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: resizeEvent
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
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
    
  // convert js parameter to cpp: e (QResizeEvent)
  

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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::resizeEvent: using base but wrapper is not of type of base class";
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
            
    // Class: RListView
    // Function: paintEvent
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
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
    
  // convert js parameter to cpp: e (QPaintEvent)
  

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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::paintEvent: using base but wrapper is not of type of base class";
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
            
    // Class: RListView
    // Function: horizontalOffset
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      horizontalOffsetSuper
                    
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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::horizontalOffset: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                int res;
                    res =
                    wb->horizontalOffsetPublic(
                      
                    );
                  
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for horizontalOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: verticalOffset
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      verticalOffsetSuper
                    
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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::verticalOffset: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                int res;
                    res =
                    wb->verticalOffsetPublic(
                      
                    );
                  
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for verticalOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: rectForIndex
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      rectForIndexSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

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
                  qWarning() << "RListView::rectForIndex: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                QRect res;
                    res =
                    wb->rectForIndexPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rectForIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: setPositionForIndex
    // Source: QListView
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      setPositionForIndexSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

   && RJSHelper::is_QModelIndex(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: position (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        
  // convert js parameter to cpp: index (QModelIndex)
  
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
                  qWarning() << "RListView::setPositionForIndex: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->setPositionForIndexPublic(
                      a1_cpp
    , a2_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPositionForIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: updateGeometries
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      updateGeometriesSuper
                    
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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::updateGeometries: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->updateGeometriesPublic(
                      
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateGeometries";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: isIndexHidden
    // Source: QListView
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      isIndexHiddenSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

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
                  qWarning() << "RListView::isIndexHidden: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    res =
                    wb->isIndexHiddenPublic(
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

                  qWarning() << "no matching function variant found for isIndexHidden";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListView
    // Function: viewportSizeHint
    // Source: QListView
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RListView_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      viewportSizeHintSuper
                    
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
            
                // call function of RListView_Base class as 
                // function has postfix inheritable class, overridable function):
                RListView_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListView::viewportSizeHint: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                QSize res;
                    res =
                    wb->viewportSizeHintPublic(
                      
                    );
                  
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for viewportSizeHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
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
  
