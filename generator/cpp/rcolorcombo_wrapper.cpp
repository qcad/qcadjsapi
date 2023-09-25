
  // Auto generated
  
  // include header:
  //#include "RColorCombowrapper.h"
  //#include "header_cpp.h"
  
    #include "rcolorcombo_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RColorCombo_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RColorCombo_Wrapper>("org.qcad", 1, 0, "RColorCombo_Wrapper");
        qmlRegisterInterface<RColorCombo_Wrapper>("RColorCombo_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RColorCombo* t = new RJSType_RColorCombo();
          global.setProperty("RJSType_RColorCombo", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RColorCombo::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RColorCombo_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RColorCombo_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RColorCombo_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RColorCombo_BaseJs", mob);
      
      QString fileName = ":generator/js/RColorCombo.js";
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
    RColorCombo_Wrapper::RColorCombo_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RColorCombo_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RColorCombo_Wrapper::RColorCombo_Wrapper(RJSApi& h, RColorCombo* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RColorCombo_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RColorCombo_Wrapper"));
              //setObjectName("RColorCombo_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RColorCombo_Wrapper::~RColorCombo_Wrapper() {
            //RDebug::decCounter(QString("RColorCombo_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RColorCombo_Wrapper"));

            //qDebug() << "RColorCombo_Wrapper::~RColorCombo_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RColorCombo";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RColorCombo_Wrapper::initConnections() {

          //setObjectName("RColorCombo_Wrapper");

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
    SIGNAL(valueChanged(const RColor&)), 
    this, 
    SLOT(valueChangedEmitter(const RColor&))
  );

  connect(
    getWrapped(), 
    SIGNAL(dialogRunning(bool)), 
    this, 
    SLOT(dialogRunningEmitter(bool))
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
  
    // Class: RColorCombo
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RColorCombo_Wrapper::RColorCombo_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RColorCombo_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RColorCombo_Wrapper"));
                
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

        
            wrapped = new RColorCombo_Base(
              handler
              
                ,
              a1_cpp
    
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RColorCombo_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RColorCombo_Base*)wrapped)->self = handler.getSelf();
          

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
                  

                  qWarning() << "no matching constructor variant found for RColorCombo";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RColorCombo
    // Function: getColor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColorCombo_Wrapper::getColor
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
                RColorCombo* w = getWrapped();
                RColor res = 
                    
                w->getColor(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColorCombo
    // Function: setColor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColorCombo_Wrapper::setColor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: col (RColor)
  
RColor a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColorCombo* w = getWrapped();
                
                w->setColor(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColorCombo
    // Function: init
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColorCombo_Wrapper::init
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
                RColorCombo* w = getWrapped();
                
                w->init(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for init";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColorCombo
    // Function: getOnlyFixed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColorCombo_Wrapper::getOnlyFixed
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
                RColorCombo* w = getWrapped();
                bool res = 
                    
                w->getOnlyFixed(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOnlyFixed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColorCombo
    // Function: setOnlyFixed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColorCombo_Wrapper::setOnlyFixed
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
    
  // convert js parameter to cpp: onlyFixed (bool)
  
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
                RColorCombo* w = getWrapped();
                
                w->setOnlyFixed(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOnlyFixed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColorCombo
    // Function: getShowAlphaChannel
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColorCombo_Wrapper::getShowAlphaChannel
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
                RColorCombo* w = getWrapped();
                bool res = 
                    
                w->getShowAlphaChannel(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getShowAlphaChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColorCombo
    // Function: setShowAlphaChannel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColorCombo_Wrapper::setShowAlphaChannel
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
    
  // convert js parameter to cpp: showAlphaChannel (bool)
  
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
                RColorCombo* w = getWrapped();
                
                w->setShowAlphaChannel(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setShowAlphaChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColorCombo
    // Function: valueChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RColorCombo_Wrapper::valueChangedEmitter(
                const RColor& color
              ) {
                // convert cpp parameters to js:
                
  // parameter: color (RColor)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RColor(
    handler, 
    color
  );


                emit valueChanged(
                  a1_js
                );
              }
            
    // Class: RColorCombo
    // Function: dialogRunning
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RColorCombo_Wrapper::dialogRunningEmitter(
                bool isRunning
              ) {
                // convert cpp parameters to js:
                
  // parameter: isRunning (bool)
  


  QJSValue a1_js = RJSHelper::cpp2js_bool(
    handler, 
    isRunning
  );


                emit dialogRunning(
                  a1_js
                );
              }
            
    // Class: RColorCombo
    // Function: colorChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColorCombo_Wrapper::colorChanged
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
                RColorCombo* w = getWrapped();
                
                w->colorChanged(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for colorChanged";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  