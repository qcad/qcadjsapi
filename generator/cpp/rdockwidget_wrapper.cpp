
  // Auto generated
  
  // include header:
  //#include "RDockWidgetwrapper.h"
  //#include "header_cpp.h"
  
    #include "rdockwidget_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
#ifdef Q_OS_MAC

#if (QT_VERSION>=0x050601&&QT_VERSION<=0x050602)||QT_VERSION>=0x050F00

#endif

#endif

    void RDockWidget_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RDockWidget_Wrapper>("org.qcad", 1, 0, "RDockWidget_Wrapper");
        qmlRegisterInterface<RDockWidget_Wrapper>("RDockWidget_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RDockWidget* t = new RJSType_RDockWidget();
          global.setProperty("RJSType_RDockWidget", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RDockWidget::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RDockWidget_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RDockWidget_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RDockWidget_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RDockWidget_BaseJs", mob);
      
      QString fileName = ":generator/js/RDockWidget.js";
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
    RDockWidget_Wrapper::RDockWidget_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RDockWidget_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RDockWidget_Wrapper::RDockWidget_Wrapper(RJSApi& h, RDockWidget* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RDockWidget_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RDockWidget_Wrapper"));
              //setObjectName("RDockWidget_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RDockWidget_Wrapper::~RDockWidget_Wrapper() {
            //RDebug::decCounter(QString("RDockWidget_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RDockWidget_Wrapper"));

            //qDebug() << "RDockWidget_Wrapper::~RDockWidget_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RDockWidget";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RDockWidget_Wrapper::initConnections() {

          //setObjectName("RDockWidget_Wrapper");

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
    SIGNAL(shown()), 
    this, 
    SLOT(shownEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(hidden()), 
    this, 
    SLOT(hiddenEmitter())
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
  
    // Class: RDockWidget
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
RDockWidget_Wrapper::RDockWidget_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RDockWidget_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RDockWidget_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QWidget_ptr(handler, a2
    , true
  
  )

   && RJSHelper::is_Qt_WindowFlags(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: title (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: parent (QWidget)
  

          // pointer:
          QWidget*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a2);
          }
        
  // convert js parameter to cpp: flags (Qt::WindowFlags)
  
Qt::WindowFlags a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RDEFAULT_QT_WINDOWFLAGS;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_Qt_WindowFlags(handler, a3);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RDockWidget_Base(
              handler
              
                ,
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RDockWidget_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RDockWidget_Base*)wrapped)->self = handler.getSelf();
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_Qt_WindowFlags(handler, a2
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
        
  // convert js parameter to cpp: flags (Qt::WindowFlags)
  
Qt::WindowFlags a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_QT_WINDOWFLAGS;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_WindowFlags(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RDockWidget_Base(
              handler
              
                ,
              a1_cpp
    , a2_cpp
    
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RDockWidget_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RDockWidget_Base*)wrapped)->self = handler.getSelf();
          

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
   && a3.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RDockWidget";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#ifdef Q_OS_MAC

#if (QT_VERSION>=0x050601&&QT_VERSION<=0x050602)||QT_VERSION>=0x050F00

#endif

#endif


    // non-static functions:
    
    // Class: RDockWidget
    // Function: shown
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RDockWidget_Wrapper::shownEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit shown(
                  
                );
              }
            
    // Class: RDockWidget
    // Function: hidden
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RDockWidget_Wrapper::hiddenEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit hidden(
                  
                );
              }
            
#ifdef Q_OS_MAC

#if (QT_VERSION>=0x050601&&QT_VERSION<=0x050602)||QT_VERSION>=0x050F00

#endif

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  