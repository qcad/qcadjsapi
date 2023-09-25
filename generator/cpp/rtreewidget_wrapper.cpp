
  // Auto generated
  
  // include header:
  //#include "RTreeWidgetwrapper.h"
  //#include "header_cpp.h"
  
    #include "rtreewidget_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RTreeWidget_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RTreeWidget_Wrapper>("org.qcad", 1, 0, "RTreeWidget_Wrapper");
        qmlRegisterInterface<RTreeWidget_Wrapper>("RTreeWidget_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RTreeWidget* t = new RJSType_RTreeWidget();
          global.setProperty("RJSType_RTreeWidget", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RTreeWidget::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RTreeWidget_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RTreeWidget_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RTreeWidget_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RTreeWidget_BaseJs", mob);
      
      QString fileName = ":generator/js/RTreeWidget.js";
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
    RTreeWidget_Wrapper::RTreeWidget_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RTreeWidget_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RTreeWidget_Wrapper::RTreeWidget_Wrapper(RJSApi& h, RTreeWidget* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RTreeWidget_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTreeWidget_Wrapper"));
              //setObjectName("RTreeWidget_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RTreeWidget_Wrapper::~RTreeWidget_Wrapper() {
            //RDebug::decCounter(QString("RTreeWidget_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RTreeWidget_Wrapper"));

            //qDebug() << "RTreeWidget_Wrapper::~RTreeWidget_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RTreeWidget";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RTreeWidget_Wrapper::initConnections() {

          //setObjectName("RTreeWidget_Wrapper");

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
    SIGNAL(itemColumnClicked(QTreeWidgetItem*, int)), 
    this, 
    SLOT(itemColumnClickedEmitter(QTreeWidgetItem*, int))
  );

  connect(
    getWrapped(), 
    SIGNAL(contextMenuRequested(QTreeWidgetItem*, int)), 
    this, 
    SLOT(contextMenuRequestedEmitter(QTreeWidgetItem*, int))
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
  
    // Class: RTreeWidget
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RTreeWidget_Wrapper::RTreeWidget_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RTreeWidget_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RTreeWidget_Wrapper"));
                
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

        
            wrapped = new RTreeWidget_Base(
              handler
              
                ,
              a1_cpp
    
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RTreeWidget_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RTreeWidget_Base*)wrapped)->self = handler.getSelf();
          

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
                  

                  qWarning() << "no matching constructor variant found for RTreeWidget";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RTreeWidget
    // Function: setSelectableColumn
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTreeWidget_Wrapper::setSelectableColumn
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
    
  // convert js parameter to cpp: c (int)
  
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
                RTreeWidget* w = getWrapped();
                
                w->setSelectableColumn(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSelectableColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTreeWidget
    // Function: getIndex
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTreeWidget_Wrapper::getIndex
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTreeWidgetItem_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: item (QTreeWidgetItem)
  

          // pointer:
          QTreeWidgetItem*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTreeWidgetItem_ptr(handler, a1);
        
  // convert js parameter to cpp: column (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
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
                RTreeWidget* w = getWrapped();
                QModelIndex res = 
                    
                w->getIndex(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QModelIndex

            return RJSHelper::cpp2js_QModelIndex(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTreeWidget
    // Function: getActiveItem
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTreeWidget_Wrapper::getActiveItem
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
                RTreeWidget* w = getWrapped();
                QTreeWidgetItem* res = 
                    
                w->getActiveItem(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QTreeWidgetItem*

            return RJSHelper::cpp2js_QTreeWidgetItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getActiveItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTreeWidget
    // Function: contextMenuEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTreeWidget_Wrapper:: 
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
            
                // call function of RTreeWidget_Base class as 
                // function has postfix inheritable class, overridable function):
                RTreeWidget_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RTreeWidget::contextMenuEvent: using base but wrapper is not of type of base class";
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
            
    // Class: RTreeWidget
    // Function: mousePressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTreeWidget_Wrapper:: 
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
            
                // call function of RTreeWidget_Base class as 
                // function has postfix inheritable class, overridable function):
                RTreeWidget_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RTreeWidget::mousePressEvent: using base but wrapper is not of type of base class";
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
            
    // Class: RTreeWidget
    // Function: mouseReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTreeWidget_Wrapper:: 
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
            
                // call function of RTreeWidget_Base class as 
                // function has postfix inheritable class, overridable function):
                RTreeWidget_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RTreeWidget::mouseReleaseEvent: using base but wrapper is not of type of base class";
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
            
    // Class: RTreeWidget
    // Function: mouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTreeWidget_Wrapper:: 
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
            
                // call function of RTreeWidget_Base class as 
                // function has postfix inheritable class, overridable function):
                RTreeWidget_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RTreeWidget::mouseMoveEvent: using base but wrapper is not of type of base class";
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
            
    // Class: RTreeWidget
    // Function: resizeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTreeWidget_Wrapper:: 
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
            
                // call function of RTreeWidget_Base class as 
                // function has postfix inheritable class, overridable function):
                RTreeWidget_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RTreeWidget::resizeEvent: using base but wrapper is not of type of base class";
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
            
    // Class: RTreeWidget
    // Function: itemColumnClicked
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RTreeWidget_Wrapper::itemColumnClickedEmitter(
                QTreeWidgetItem* item, int column
              ) {
                // convert cpp parameters to js:
                
  // parameter: item (QTreeWidgetItem)
  


  QJSValue a1_js = RJSHelper::cpp2js_QTreeWidgetItem(
    handler, 
    item
  );

  // parameter: column (int)
  


  QJSValue a2_js = RJSHelper::cpp2js_int(
    handler, 
    column
  );


                emit itemColumnClicked(
                  a1_js, a2_js
                );
              }
            
    // Class: RTreeWidget
    // Function: contextMenuRequested
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RTreeWidget_Wrapper::contextMenuRequestedEmitter(
                QTreeWidgetItem* item, int column
              ) {
                // convert cpp parameters to js:
                
  // parameter: item (QTreeWidgetItem)
  


  QJSValue a1_js = RJSHelper::cpp2js_QTreeWidgetItem(
    handler, 
    item
  );

  // parameter: column (int)
  


  QJSValue a2_js = RJSHelper::cpp2js_int(
    handler, 
    column
  );


                emit contextMenuRequested(
                  a1_js, a2_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  