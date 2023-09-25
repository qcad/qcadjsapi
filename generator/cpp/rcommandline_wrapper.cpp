
  // Auto generated
  
  // include header:
  //#include "RCommandLinewrapper.h"
  //#include "header_cpp.h"
  
    #include "rcommandline_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RCommandLine_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RCommandLine_Wrapper>("org.qcad", 1, 0, "RCommandLine_Wrapper");
        qmlRegisterInterface<RCommandLine_Wrapper>("RCommandLine_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RCommandLine* t = new RJSType_RCommandLine();
          global.setProperty("RJSType_RCommandLine", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RCommandLine::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RCommandLine_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RCommandLine_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RCommandLine_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RCommandLine_BaseJs", mob);
      
      QString fileName = ":generator/js/RCommandLine.js";
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
    RCommandLine_Wrapper::RCommandLine_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RCommandLine_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RCommandLine_Wrapper::RCommandLine_Wrapper(RJSApi& h, RCommandLine* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RCommandLine_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RCommandLine_Wrapper"));
              //setObjectName("RCommandLine_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RCommandLine_Wrapper::~RCommandLine_Wrapper() {
            //RDebug::decCounter(QString("RCommandLine_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RCommandLine_Wrapper"));

            //qDebug() << "RCommandLine_Wrapper::~RCommandLine_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RCommandLine";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RCommandLine_Wrapper::initConnections() {

          //setObjectName("RCommandLine_Wrapper");

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
    SIGNAL(clearHistory()), 
    this, 
    SLOT(clearHistoryEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(commandConfirmed(const QString&)), 
    this, 
    SLOT(commandConfirmedEmitter(const QString&))
  );

  connect(
    getWrapped(), 
    SIGNAL(completeCommand(const QString&)), 
    this, 
    SLOT(completeCommandEmitter(const QString&))
  );

  connect(
    getWrapped(), 
    SIGNAL(escape()), 
    this, 
    SLOT(escapeEmitter())
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
  
    // Class: RCommandLine
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RCommandLine_Wrapper::RCommandLine_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RCommandLine_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RCommandLine_Wrapper"));
                
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

        
            wrapped = new RCommandLine_Base(
              handler
              
                ,
              a1_cpp
    
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RCommandLine_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RCommandLine_Base*)wrapped)->self = handler.getSelf();
          

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
                  

                  qWarning() << "no matching constructor variant found for RCommandLine";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RCommandLine
    // Function: clearHistory
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RCommandLine_Wrapper::clearHistoryEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit clearHistory(
                  
                );
              }
            
    // Class: RCommandLine
    // Function: commandConfirmed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RCommandLine_Wrapper::commandConfirmedEmitter(
                const QString& command
              ) {
                // convert cpp parameters to js:
                
  // parameter: command (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    command
  );


                emit commandConfirmed(
                  a1_js
                );
              }
            
    // Class: RCommandLine
    // Function: completeCommand
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RCommandLine_Wrapper::completeCommandEmitter(
                const QString& command
              ) {
                // convert cpp parameters to js:
                
  // parameter: command (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    command
  );


                emit completeCommand(
                  a1_js
                );
              }
            
    // Class: RCommandLine
    // Function: escape
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RCommandLine_Wrapper::escapeEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit escape(
                  
                );
              }
            
    // Class: RCommandLine
    // Function: getLastCommand
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RCommandLine_Wrapper::getLastCommand
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
                RCommandLine* w = getWrapped();
                QString res = 
                    
                w->getLastCommand(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLastCommand";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCommandLine
    // Function: appendCommand
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCommandLine_Wrapper::appendCommand
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
    
  // convert js parameter to cpp: cmd (QString)
  
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
                RCommandLine* w = getWrapped();
                
                w->appendCommand(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for appendCommand";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCommandLine
    // Function: getHistory
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RCommandLine_Wrapper::getHistory
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
                RCommandLine* w = getWrapped();
                QStringList res = 
                    
                w->getHistory(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHistory";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCommandLine
    // Function: setHistory
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCommandLine_Wrapper::setHistory
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RCommandLine* w = getWrapped();
                
                w->setHistory(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHistory";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCommandLine
    // Function: triggerCommand
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCommandLine_Wrapper::triggerCommand
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
    
  // convert js parameter to cpp: cmd (QString)
  
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
                RCommandLine* w = getWrapped();
                
                w->triggerCommand(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for triggerCommand";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCommandLine
    // Function: paste
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RCommandLine_Wrapper::paste
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
                RCommandLine* w = getWrapped();
                
                w->paste(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paste";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  