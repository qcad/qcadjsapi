
  // Auto generated
  
  // include header:
  //#include "RListWidgetwrapper.h"
  //#include "header_cpp.h"
  
    #include "rlistwidget_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RListWidget_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RListWidget_Wrapper>("org.qcad", 1, 0, "RListWidget_Wrapper");
        qmlRegisterInterface<RListWidget_Wrapper>("RListWidget_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RListWidget* t = new RJSType_RListWidget();
          global.setProperty("RJSType_RListWidget", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RListWidget::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RListWidget_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RListWidget_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RListWidget_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RListWidget_BaseJs", mob);
      
      QString fileName = ":generator/js/RListWidget.js";
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
    RListWidget_Wrapper::RListWidget_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RListWidget_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RListWidget_Wrapper::RListWidget_Wrapper(RJSApi& h, RListWidget* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RListWidget_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RListWidget_Wrapper"));
              //setObjectName("RListWidget_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RListWidget_Wrapper::~RListWidget_Wrapper() {
            //RDebug::decCounter(QString("RListWidget_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RListWidget_Wrapper"));

            //qDebug() << "RListWidget_Wrapper::~RListWidget_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RListWidget";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RListWidget_Wrapper::initConnections() {

          //setObjectName("RListWidget_Wrapper");

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
    SIGNAL(iconClicked(int, QListWidgetItem*)), 
    this, 
    SLOT(iconClickedEmitter(int, QListWidgetItem*))
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
  
    // Class: RListWidget
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RListWidget_Wrapper::RListWidget_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RListWidget_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RListWidget_Wrapper"));
                
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

        
            wrapped = new RListWidget_Base(
              handler
              
                ,
              a1_cpp
    
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RListWidget_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RListWidget_Base*)wrapped)->self = handler.getSelf();
          

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
                  

                  qWarning() << "no matching constructor variant found for RListWidget";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RListWidget
    // Function: setIconOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListWidget_Wrapper::setIconOffset
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
    
  // convert js parameter to cpp: o (int)
  
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
                RListWidget* w = getWrapped();
                
                w->setIconOffset(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setIconOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RListWidget
    // Function: contextMenuEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListWidget_Wrapper:: 
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
            
                // call function of RListWidget_Base class as 
                // function has postfix inheritable class, overridable function):
                RListWidget_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListWidget::contextMenuEvent: using base but wrapper is not of type of base class";
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
            
    // Class: RListWidget
    // Function: mousePressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListWidget_Wrapper:: 
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
            
                // call function of RListWidget_Base class as 
                // function has postfix inheritable class, overridable function):
                RListWidget_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListWidget::mousePressEvent: using base but wrapper is not of type of base class";
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
            
    // Class: RListWidget
    // Function: mouseReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListWidget_Wrapper:: 
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
            
                // call function of RListWidget_Base class as 
                // function has postfix inheritable class, overridable function):
                RListWidget_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListWidget::mouseReleaseEvent: using base but wrapper is not of type of base class";
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
            
    // Class: RListWidget
    // Function: mouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RListWidget_Wrapper:: 
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
            
                // call function of RListWidget_Base class as 
                // function has postfix inheritable class, overridable function):
                RListWidget_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RListWidget::mouseMoveEvent: using base but wrapper is not of type of base class";
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
            
    // Class: RListWidget
    // Function: iconClicked
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RListWidget_Wrapper::iconClickedEmitter(
                int x, QListWidgetItem* item
              ) {
                // convert cpp parameters to js:
                
  // parameter: x (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    x
  );

  // parameter: item (QListWidgetItem)
  


  QJSValue a2_js = RJSHelper::cpp2js_QListWidgetItem(
    handler, 
    item
  );


                emit iconClicked(
                  a1_js, a2_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  