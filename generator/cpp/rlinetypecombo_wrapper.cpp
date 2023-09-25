
  // Auto generated
  
  // include header:
  //#include "RLinetypeCombowrapper.h"
  //#include "header_cpp.h"
  
    #include "rlinetypecombo_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RLinetypeCombo_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RLinetypeCombo_Wrapper>("org.qcad", 1, 0, "RLinetypeCombo_Wrapper");
        qmlRegisterInterface<RLinetypeCombo_Wrapper>("RLinetypeCombo_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RLinetypeCombo* t = new RJSType_RLinetypeCombo();
          global.setProperty("RJSType_RLinetypeCombo", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RLinetypeCombo::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RLinetypeCombo_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RLinetypeCombo_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RLinetypeCombo_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RLinetypeCombo_BaseJs", mob);
      
      QString fileName = ":generator/js/RLinetypeCombo.js";
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
    RLinetypeCombo_Wrapper::RLinetypeCombo_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RLinetypeCombo_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RLinetypeCombo_Wrapper::RLinetypeCombo_Wrapper(RJSApi& h, RLinetypeCombo* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RLinetypeCombo_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RLinetypeCombo_Wrapper"));
              //setObjectName("RLinetypeCombo_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RLinetypeCombo_Wrapper::~RLinetypeCombo_Wrapper() {
            //RDebug::decCounter(QString("RLinetypeCombo_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RLinetypeCombo_Wrapper"));

            //qDebug() << "RLinetypeCombo_Wrapper::~RLinetypeCombo_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RLinetypeCombo";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RLinetypeCombo_Wrapper::initConnections() {

          //setObjectName("RLinetypeCombo_Wrapper");

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
    SIGNAL(valueChanged(const RLinetypePattern&)), 
    this, 
    SLOT(valueChangedEmitter(const RLinetypePattern&))
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
  
    // Class: RLinetypeCombo
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RLinetypeCombo_Wrapper::RLinetypeCombo_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RLinetypeCombo_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RLinetypeCombo_Wrapper"));
                
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

        
            wrapped = new RLinetypeCombo_Base(
              handler
              
                ,
              a1_cpp
    
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RLinetypeCombo_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RLinetypeCombo_Base*)wrapped)->self = handler.getSelf();
          

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
                  

                  qWarning() << "no matching constructor variant found for RLinetypeCombo";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RLinetypeCombo
    // Function: init
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinetypeCombo_Wrapper::init
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: doc (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLinetypeCombo* w = getWrapped();
                
                w->init(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for init";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinetypeCombo
    // Function: reinit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinetypeCombo_Wrapper::reinit
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
                RLinetypeCombo* w = getWrapped();
                
                w->reinit(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reinit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinetypeCombo
    // Function: getLinetypePattern
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinetypeCombo_Wrapper::getLinetypePattern
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
                RLinetypeCombo* w = getWrapped();
                RLinetypePattern res = 
                    
                w->getLinetypePattern(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RLinetypePattern

            return RJSHelper_qcad::cpp2js_RLinetypePattern(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinetypeCombo
    // Function: getLinetypePatternAt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinetypeCombo_Wrapper::getLinetypePatternAt
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
    
  // convert js parameter to cpp: i (int)
  
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
                RLinetypeCombo* w = getWrapped();
                RLinetypePattern res = 
                    
                w->getLinetypePatternAt(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: RLinetypePattern

            return RJSHelper_qcad::cpp2js_RLinetypePattern(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypePatternAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinetypeCombo
    // Function: setLinetypePattern
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinetypeCombo_Wrapper::setLinetypePattern
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
                RLinetypeCombo* w = getWrapped();
                
                w->setLinetypePattern(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetypePattern(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypePattern (RLinetypePattern)
  
RLinetypePattern a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetypePattern(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLinetypeCombo* w = getWrapped();
                
                w->setLinetypePattern(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinetypeCombo
    // Function: getOnlyFixed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinetypeCombo_Wrapper::getOnlyFixed
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
                RLinetypeCombo* w = getWrapped();
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
            
    // Class: RLinetypeCombo
    // Function: setOnlyFixed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinetypeCombo_Wrapper::setOnlyFixed
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
                RLinetypeCombo* w = getWrapped();
                
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
            
    // Class: RLinetypeCombo
    // Function: valueChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RLinetypeCombo_Wrapper::valueChangedEmitter(
                const RLinetypePattern& linetypePattern
              ) {
                // convert cpp parameters to js:
                
  // parameter: linetypePattern (RLinetypePattern)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RLinetypePattern(
    handler, 
    linetypePattern
  );


                emit valueChanged(
                  a1_js
                );
              }
            
    // Class: RLinetypeCombo
    // Function: linetypePatternChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinetypeCombo_Wrapper::linetypePatternChanged
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
                RLinetypeCombo* w = getWrapped();
                
                w->linetypePatternChanged(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for linetypePatternChanged";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  