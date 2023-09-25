
  // Auto generated
  
  // include header:
  //#include "RSingleApplicationwrapper.h"
  //#include "header_cpp.h"
  
    #include "rsingleapplication_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
#if defined(Q_OS_X11)

#endif

    // Class: RSingleApplication
    // Function: getInstance
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_WrapperSingleton::getInstance
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RSingleApplication* res = 
                
                // call static member function:
                RSingleApplication::getInstance(
              
            );
          
            // return type: RSingleApplication*

            return RJSHelper_qcad::cpp2js_RSingleApplication(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getInstance";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RSingleApplication_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RSingleApplication_Wrapper>("org.qcad", 1, 0, "RSingleApplication_Wrapper");
        qmlRegisterInterface<RSingleApplication_Wrapper>("RSingleApplication_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RSingleApplication* t = new RJSType_RSingleApplication();
          global.setProperty("RJSType_RSingleApplication", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RSingleApplication::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RSingleApplication_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RSingleApplication_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RSingleApplication_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RSingleApplication_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RSingleApplication_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RSingleApplication_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RSingleApplication_WrapperSingleton * s = new RSingleApplication_WrapperSingleton(handler);
        engine->globalObject().setProperty("RSingleApplication_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RSingleApplication.js";
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
    RSingleApplication_Wrapper::RSingleApplication_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RSingleApplication_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RSingleApplication_Wrapper::RSingleApplication_Wrapper(RJSApi& h, RSingleApplication* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RSingleApplication_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RSingleApplication_Wrapper"));
              //setObjectName("RSingleApplication_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RSingleApplication_Wrapper::~RSingleApplication_Wrapper() {
            //RDebug::decCounter(QString("RSingleApplication_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RSingleApplication_Wrapper"));

            //qDebug() << "RSingleApplication_Wrapper::~RSingleApplication_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RSingleApplication";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RSingleApplication_Wrapper::initConnections() {

          //setObjectName("RSingleApplication_Wrapper");

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
    SIGNAL(messageReceived(const QString&)), 
    this, 
    SLOT(messageReceivedEmitter(const QString&))
  );

  connect(
    getWrapped(), 
    SIGNAL(fileOpenRequestReceived(const QString&)), 
    this, 
    SLOT(fileOpenRequestReceivedEmitter(const QString&))
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
  
#if defined(Q_OS_X11)

#endif


    // non-static functions:
    
#if defined(Q_OS_X11)

#endif

    // Class: RSingleApplication
    // Function: isRunning
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::isRunning
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
                RSingleApplication* w = getWrapped();
                bool res = 
                    
                w->isRunning(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRunning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: id
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::id
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
                RSingleApplication* w = getWrapped();
                QString res = 
                    
                w->id(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for id";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: setActivationWindow
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::setActivationWindow
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

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: aw (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        
  // convert js parameter to cpp: activateOnMessage (bool)
  
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
                RSingleApplication* w = getWrapped();
                
                w->setActivationWindow(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setActivationWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: activationWindow
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::activationWindow
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
                RSingleApplication* w = getWrapped();
                QWidget* res = 
                    
                w->activationWindow(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for activationWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: sendMessage
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::sendMessage
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

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: message (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: timeout (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 5000;
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
                RSingleApplication* w = getWrapped();
                bool res = 
                    
                w->sendMessage(
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

                  qWarning() << "no matching function variant found for sendMessage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: activateWindow
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSingleApplication_Wrapper::activateWindow
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
                RSingleApplication* w = getWrapped();
                
                w->activateWindow(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for activateWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSingleApplication
    // Function: messageReceived
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::messageReceivedEmitter(
                const QString& message
              ) {
                // convert cpp parameters to js:
                
  // parameter: message (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    message
  );


                emit messageReceived(
                  a1_js
                );
              }
            
    // Class: RSingleApplication
    // Function: fileOpenRequestReceived
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RSingleApplication_Wrapper::fileOpenRequestReceivedEmitter(
                const QString& fileName
              ) {
                // convert cpp parameters to js:
                
  // parameter: fileName (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    fileName
  );


                emit fileOpenRequestReceived(
                  a1_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  