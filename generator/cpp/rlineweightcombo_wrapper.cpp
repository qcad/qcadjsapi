
  // Auto generated
  
  // include header:
  //#include "RLineweightCombowrapper.h"
  //#include "header_cpp.h"
  
    #include "rlineweightcombo_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RLineweightCombo*> RLineweightCombo_Wrapper::basecasters_RLineweightCombo;
    
    // static functions implementation in singleton wrapper:
    
    void RLineweightCombo_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RLineweightCombo_Wrapper>("org.qcad", 1, 0, "RLineweightCombo_Wrapper");
        qmlRegisterInterface<RLineweightCombo_Wrapper>("RLineweightCombo_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RLineweightCombo* t = new RJSType_RLineweightCombo();
          global.setProperty("RJSType_RLineweightCombo", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RLineweightCombo::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RLineweightCombo_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RLineweightCombo_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RLineweightCombo_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RLineweightCombo_BaseJs", mob);
      
      QString fileName = ":generator/js/RLineweightCombo.js";
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
    RLineweightCombo_Wrapper::RLineweightCombo_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RLineweightCombo_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RLineweightCombo_Wrapper::RLineweightCombo_Wrapper(RJSApi& h, RLineweightCombo* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RLineweightCombo_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RLineweightCombo_Wrapper"));
              //setObjectName("RLineweightCombo_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RLineweightCombo_Wrapper::~RLineweightCombo_Wrapper() {
            //RDebug::decCounter(QString("RLineweightCombo_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RLineweightCombo_Wrapper"));

            //qDebug() << "RLineweightCombo_Wrapper::~RLineweightCombo_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RLineweightCombo";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RLineweightCombo_Wrapper::initConnections() {

          //setObjectName("RLineweightCombo_Wrapper");

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
    SIGNAL(editTextChanged(const QString&)), 
    this, 
    SLOT(editTextChangedEmitter(const QString&))
  );

  connect(
    getWrapped(), 
    SIGNAL(activated(int)), 
    this, 
    SLOT(activatedEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(textActivated(const QString&)), 
    this, 
    SLOT(textActivatedEmitter(const QString&))
  );

  connect(
    getWrapped(), 
    SIGNAL(highlighted(int)), 
    this, 
    SLOT(highlightedEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(textHighlighted(const QString&)), 
    this, 
    SLOT(textHighlightedEmitter(const QString&))
  );

  connect(
    getWrapped(), 
    SIGNAL(currentIndexChanged(int)), 
    this, 
    SLOT(currentIndexChangedEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(currentTextChanged(const QString&)), 
    this, 
    SLOT(currentTextChangedEmitter(const QString&))
  );

  connect(
    getWrapped(), 
    SIGNAL(valueChanged(RLineweight::Lineweight)), 
    this, 
    SLOT(valueChangedEmitter(RLineweight::Lineweight))
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
  
    // Class: RLineweightCombo
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RLineweightCombo_Wrapper::RLineweightCombo_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RLineweightCombo_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RLineweightCombo_Wrapper"));
                
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

        
                wrapped = new RLineweightCombo_Base(
                  handler
                  
                    ,
                  a1_cpp
    
                );
                wrappedCreated = true;

                // set handler for wrapped base object:
                //((RLineweightCombo_Base*)wrapped)->setHandler(handler);

                // store self to call into JS:
                ((RLineweightCombo_Base*)wrapped)->self = handler.getSelf();
              

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
                  

                  qWarning() << "no matching constructor variant found for RLineweightCombo";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RLineweightCombo
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::objectName
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setObjectName
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isWidgetType
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isWindowType
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::signalsBlocked
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::blockSignals
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::findChild
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::children
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::installEventFilter
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::removeEventFilter
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::dumpObjectTree
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectTree";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::dumpObjectInfo
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setProperty
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::property
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::dynamicPropertyNames
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: parent
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::parent
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::deleteLater
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
                RLineweightCombo* w = getWrapped();
                
                w->deleteLater(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteLater";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: devType
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::devType
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: createWinId
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::createWinId
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
                RLineweightCombo* w = getWrapped();
                
                w->createWinId(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for createWinId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: isWindow
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isWindow
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: isModal
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isModal
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: windowModality
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::windowModality
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setWindowModality
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setWindowModality
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: isEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isEnabled
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: isEnabledTo
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isEnabledTo
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setEnabled
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setDisabled
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setDisabled
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setWindowModified
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setWindowModified
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: frameGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::frameGeometry
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: geometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::geometry
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: normalGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::normalGeometry
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: x
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::x
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: y
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::y
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: pos
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::pos
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: frameSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::frameSize
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: size
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::size
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: width
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::width
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: height
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::height
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: rect
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::rect
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: childrenRect
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::childrenRect
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: childrenRegion
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::childrenRegion
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: minimumSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::minimumSize
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: maximumSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::maximumSize
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: minimumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::minimumWidth
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: minimumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::minimumHeight
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: maximumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::maximumWidth
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: maximumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::maximumHeight
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setMinimumSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setMinimumSize
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setMaximumSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setMaximumSize
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setMinimumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setMinimumWidth
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setMinimumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setMinimumHeight
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setMaximumWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setMaximumWidth
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setMaximumHeight
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setMaximumHeight
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: sizeIncrement
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::sizeIncrement
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setSizeIncrement
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setSizeIncrement
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: baseSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::baseSize
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setBaseSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setBaseSize
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setFixedSize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setFixedSize
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setFixedWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setFixedWidth
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setFixedHeight
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setFixedHeight
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: mapToGlobal
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::mapToGlobal
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
                RLineweightCombo* w = getWrapped();
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: mapFromGlobal
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::mapFromGlobal
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
                RLineweightCombo* w = getWrapped();
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: mapToParent
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::mapToParent
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: mapFromParent
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::mapFromParent
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: mapTo
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::mapTo
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: mapFrom
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::mapFrom
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
                RLineweightCombo* w = getWrapped();
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: window
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::window
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: nativeParentWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::nativeParentWidget
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: topLevelWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::topLevelWidget
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: palette
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::palette
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setPalette
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setPalette
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setBackgroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setBackgroundRole
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: backgroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::backgroundRole
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setForegroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setForegroundRole
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: foregroundRole
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::foregroundRole
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: font
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::font
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setFont
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setFont
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: fontInfo
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::fontInfo
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: cursor
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::cursor
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setCursor
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setCursor
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: unsetCursor
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::unsetCursor
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
                RLineweightCombo* w = getWrapped();
                
                w->unsetCursor(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unsetCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setMouseTracking
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setMouseTracking
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: hasMouseTracking
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::hasMouseTracking
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: underMouse
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::underMouse
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setTabletTracking
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setTabletTracking
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: hasTabletTracking
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::hasTabletTracking
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setMask
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setMask
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: mask
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::mask
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: clearMask
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::clearMask
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
                RLineweightCombo* w = getWrapped();
                
                w->clearMask(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearMask";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: grab
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::grab
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: grabGesture
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::grabGesture
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: ungrabGesture
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::ungrabGesture
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setWindowTitle
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setWindowTitle
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setStyleSheet
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setStyleSheet
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: styleSheet
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::styleSheet
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: windowTitle
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::windowTitle
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setWindowIcon
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setWindowIcon
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: windowIcon
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::windowIcon
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setWindowIconText
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setWindowIconText
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: windowIconText
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::windowIconText
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setWindowRole
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setWindowRole
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: windowRole
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::windowRole
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setWindowFilePath
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setWindowFilePath
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: windowFilePath
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::windowFilePath
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setWindowOpacity
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setWindowOpacity
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: windowOpacity
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::windowOpacity
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: isWindowModified
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isWindowModified
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setToolTip
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setToolTip
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: toolTip
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::toolTip
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setToolTipDuration
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setToolTipDuration
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: toolTipDuration
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::toolTipDuration
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setStatusTip
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setStatusTip
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: statusTip
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::statusTip
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setWhatsThis
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setWhatsThis
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: whatsThis
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::whatsThis
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: accessibleName
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::accessibleName
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setAccessibleName
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setAccessibleName
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: accessibleDescription
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::accessibleDescription
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setAccessibleDescription
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setAccessibleDescription
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setLayoutDirection
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setLayoutDirection
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: layoutDirection
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::layoutDirection
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: unsetLayoutDirection
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::unsetLayoutDirection
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
                RLineweightCombo* w = getWrapped();
                
                w->unsetLayoutDirection(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unsetLayoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setLocale
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setLocale
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: locale
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::locale
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: unsetLocale
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::unsetLocale
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
                RLineweightCombo* w = getWrapped();
                
                w->unsetLocale(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unsetLocale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: isRightToLeft
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isRightToLeft
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: isLeftToRight
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isLeftToRight
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: isActiveWindow
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isActiveWindow
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: activateWindow
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::activateWindow
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
                RLineweightCombo* w = getWrapped();
                
                w->activateWindow(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for activateWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: clearFocus
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::clearFocus
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
                RLineweightCombo* w = getWrapped();
                
                w->clearFocus(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setFocus
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setFocus
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
                w->setFocus(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: focusPolicy
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::focusPolicy
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setFocusPolicy
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setFocusPolicy
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: hasFocus
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::hasFocus
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setFocusProxy
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setFocusProxy
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: focusProxy
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::focusProxy
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: contextMenuPolicy
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::contextMenuPolicy
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setContextMenuPolicy
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setContextMenuPolicy
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: grabMouse
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::grabMouse
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
                w->grabMouse(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for grabMouse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: releaseMouse
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::releaseMouse
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
                RLineweightCombo* w = getWrapped();
                
                w->releaseMouse(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for releaseMouse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: grabKeyboard
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::grabKeyboard
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
                RLineweightCombo* w = getWrapped();
                
                w->grabKeyboard(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for grabKeyboard";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: releaseKeyboard
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::releaseKeyboard
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
                RLineweightCombo* w = getWrapped();
                
                w->releaseKeyboard(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for releaseKeyboard";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: grabShortcut
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::grabShortcut
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: releaseShortcut
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::releaseShortcut
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setShortcutEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setShortcutEnabled
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setShortcutAutoRepeat
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setShortcutAutoRepeat
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: updatesEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::updatesEnabled
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setUpdatesEnabled
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setUpdatesEnabled
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: update
    // Source: QWidget
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::update
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
                RLineweightCombo* w = getWrapped();
                
                w->update(
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
                RLineweightCombo* w = getWrapped();
                
                w->update(
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
                RLineweightCombo* w = getWrapped();
                
                w->update(
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
                RLineweightCombo* w = getWrapped();
                
                w->update(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for update";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: repaint
    // Source: QWidget
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::repaint
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setVisible
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setVisible
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setHidden
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setHidden
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: show
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::show
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
                RLineweightCombo* w = getWrapped();
                
                w->show(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for show";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: hide
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::hide
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
                RLineweightCombo* w = getWrapped();
                
                w->hide(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for hide";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: showMinimized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::showMinimized
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
                RLineweightCombo* w = getWrapped();
                
                w->showMinimized(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showMinimized";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: showMaximized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::showMaximized
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
                RLineweightCombo* w = getWrapped();
                
                w->showMaximized(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showMaximized";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: showFullScreen
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::showFullScreen
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
                RLineweightCombo* w = getWrapped();
                
                w->showFullScreen(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showFullScreen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: showNormal
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::showNormal
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
                RLineweightCombo* w = getWrapped();
                
                w->showNormal(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showNormal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: close
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::close
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: raise
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::raise
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
                RLineweightCombo* w = getWrapped();
                
                w->raise(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for raise";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: lower
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::lower
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
                RLineweightCombo* w = getWrapped();
                
                w->lower(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for lower";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: stackUnder
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::stackUnder
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: move
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::move
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: resize
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::resize
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setGeometry
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: saveGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::saveGeometry
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: restoreGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::restoreGeometry
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: adjustSize
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::adjustSize
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
                RLineweightCombo* w = getWrapped();
                
                w->adjustSize(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for adjustSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: isVisible
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isVisible
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: isVisibleTo
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isVisibleTo
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: isHidden
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isHidden
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: isMinimized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isMinimized
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: isMaximized
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isMaximized
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: isFullScreen
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isFullScreen
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: windowState
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::windowState
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setWindowState
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setWindowState
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: overrideWindowState
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::overrideWindowState
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: sizePolicy
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::sizePolicy
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setSizePolicy
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setSizePolicy
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: heightForWidth
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::heightForWidth
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: hasHeightForWidth
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::hasHeightForWidth
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: visibleRegion
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::visibleRegion
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setContentsMargins
    // Source: QWidget
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setContentsMargins
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: contentsMargins
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::contentsMargins
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: contentsRect
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::contentsRect
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: layout
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::layout
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setLayout
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setLayout
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: updateGeometry
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::updateGeometry
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
                RLineweightCombo* w = getWrapped();
                
                w->updateGeometry(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setParent
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setParent
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: scroll
    // Source: QWidget
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::scroll
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: focusWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::focusWidget
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: nextInFocusChain
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::nextInFocusChain
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: previousInFocusChain
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::previousInFocusChain
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: acceptDrops
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::acceptDrops
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setAcceptDrops
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setAcceptDrops
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: addAction
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::addAction
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: addActions
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::addActions
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: insertActions
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::insertActions
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
                RLineweightCombo* w = getWrapped();
                
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: insertAction
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::insertAction
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: removeAction
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::removeAction
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: actions
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::actions
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: parentWidget
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::parentWidget
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setWindowFlags
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setWindowFlags
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: windowFlags
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::windowFlags
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setWindowFlag
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setWindowFlag
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: overrideWindowFlags
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::overrideWindowFlags
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: windowType
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::windowType
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: childAt
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::childAt
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
                RLineweightCombo* w = getWrapped();
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setAttribute
    // Source: QWidget
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setAttribute
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: testAttribute
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::testAttribute
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: ensurePolished
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::ensurePolished
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
                RLineweightCombo* w = getWrapped();
                
                w->ensurePolished(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ensurePolished";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: isAncestorOf
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isAncestorOf
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: autoFillBackground
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::autoFillBackground
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setAutoFillBackground
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setAutoFillBackground
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: customContextMenuRequested
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RLineweightCombo_Wrapper::customContextMenuRequestedEmitter(
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
            
    // Class: RLineweightCombo
    // Function: inputMethodHints
    // Source: QWidget
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::inputMethodHints
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setInputMethodHints
    // Source: QWidget
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setInputMethodHints
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: maxVisibleItems
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::maxVisibleItems
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
                RLineweightCombo* w = getWrapped();
                int res = 
                    
                w->maxVisibleItems(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maxVisibleItems";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setMaxVisibleItems
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setMaxVisibleItems
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
    
  // convert js parameter to cpp: maxItems (int)
  
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
                RLineweightCombo* w = getWrapped();
                
                w->setMaxVisibleItems(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMaxVisibleItems";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: count
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::count
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
                RLineweightCombo* w = getWrapped();
                int res = 
                    
                w->count(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for count";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setMaxCount
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setMaxCount
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
    
  // convert js parameter to cpp: max (int)
  
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
                RLineweightCombo* w = getWrapped();
                
                w->setMaxCount(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMaxCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: maxCount
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::maxCount
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
                RLineweightCombo* w = getWrapped();
                int res = 
                    
                w->maxCount(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maxCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: duplicatesEnabled
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::duplicatesEnabled
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
                RLineweightCombo* w = getWrapped();
                bool res = 
                    
                w->duplicatesEnabled(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for duplicatesEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setDuplicatesEnabled
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setDuplicatesEnabled
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
                RLineweightCombo* w = getWrapped();
                
                w->setDuplicatesEnabled(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDuplicatesEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setFrame
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setFrame
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
                RLineweightCombo* w = getWrapped();
                
                w->setFrame(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFrame";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: hasFrame
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::hasFrame
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
                RLineweightCombo* w = getWrapped();
                bool res = 
                    
                w->hasFrame(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasFrame";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: findText
    // Source: QComboBox
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::findText
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
  )

   && RJSHelper::is_Qt_MatchFlags(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: flags (Qt::MatchFlags)
  
Qt::MatchFlags a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = static_cast<Qt::MatchFlags>(Qt::MatchExactly|Qt::MatchCaseSensitive);
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_MatchFlags(handler, a2);
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
                RLineweightCombo* w = getWrapped();
                int res = 
                    
                w->findText(
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

                  qWarning() << "no matching function variant found for findText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: findData
    // Source: QComboBox
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::findData
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QVariant(handler, a1
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

   && RJSHelper::is_Qt_MatchFlags(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (QVariant)
  
QVariant a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QVariant(handler, a1);
        
  // convert js parameter to cpp: role (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::UserRole;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        
  // convert js parameter to cpp: flags (Qt::MatchFlags)
  
Qt::MatchFlags a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = static_cast<Qt::MatchFlags>(Qt::MatchExactly|Qt::MatchCaseSensitive);
          }
          else {
            a3_cpp = RJSHelper::js2cpp_Qt_MatchFlags(handler, a3);
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
                RLineweightCombo* w = getWrapped();
                int res = 
                    
                w->findData(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for findData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: insertPolicy
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::insertPolicy
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
                RLineweightCombo* w = getWrapped();
                QComboBox::InsertPolicy res = 
                    
                w->insertPolicy(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QComboBox::InsertPolicy

            return RJSHelper::cpp2js_QComboBox_InsertPolicy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for insertPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setInsertPolicy
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setInsertPolicy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QComboBox_InsertPolicy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: policy (QComboBox::InsertPolicy)
  
QComboBox::InsertPolicy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QComboBox_InsertPolicy(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLineweightCombo* w = getWrapped();
                
                w->setInsertPolicy(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setInsertPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: sizeAdjustPolicy
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::sizeAdjustPolicy
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
                RLineweightCombo* w = getWrapped();
                QComboBox::SizeAdjustPolicy res = 
                    
                w->sizeAdjustPolicy(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QComboBox::SizeAdjustPolicy

            return RJSHelper::cpp2js_QComboBox_SizeAdjustPolicy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sizeAdjustPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setSizeAdjustPolicy
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setSizeAdjustPolicy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QComboBox_SizeAdjustPolicy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: policy (QComboBox::SizeAdjustPolicy)
  
QComboBox::SizeAdjustPolicy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QComboBox_SizeAdjustPolicy(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: minimumContentsLength
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::minimumContentsLength
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
                RLineweightCombo* w = getWrapped();
                int res = 
                    
                w->minimumContentsLength(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumContentsLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setMinimumContentsLength
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setMinimumContentsLength
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
    
  // convert js parameter to cpp: characters (int)
  
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
                RLineweightCombo* w = getWrapped();
                
                w->setMinimumContentsLength(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMinimumContentsLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: iconSize
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::iconSize
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setIconSize
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setIconSize
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setPlaceholderText
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setPlaceholderText
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
    
  // convert js parameter to cpp: placeholderText (QString)
  
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
                RLineweightCombo* w = getWrapped();
                
                w->setPlaceholderText(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPlaceholderText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: placeholderText
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::placeholderText
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
                RLineweightCombo* w = getWrapped();
                QString res = 
                    
                w->placeholderText(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for placeholderText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: isEditable
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::isEditable
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
                RLineweightCombo* w = getWrapped();
                bool res = 
                    
                w->isEditable(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEditable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setEditable
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setEditable
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
    
  // convert js parameter to cpp: editable (bool)
  
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
                RLineweightCombo* w = getWrapped();
                
                w->setEditable(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEditable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setLineEdit
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setLineEdit
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLineEdit_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: edit (QLineEdit)
  

          // pointer:
          QLineEdit*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLineEdit_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLineweightCombo* w = getWrapped();
                
                w->setLineEdit(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLineEdit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: lineEdit
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::lineEdit
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
                RLineweightCombo* w = getWrapped();
                QLineEdit* res = 
                    
                w->lineEdit(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QLineEdit*

            return RJSHelper::cpp2js_QLineEdit(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lineEdit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setValidator
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setValidator
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QValidator_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (QValidator)
  

          // pointer:
          QValidator*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QValidator_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLineweightCombo* w = getWrapped();
                
                w->setValidator(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setValidator";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setCompleter
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setCompleter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QCompleter_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (QCompleter)
  

          // pointer:
          QCompleter*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QCompleter_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLineweightCombo* w = getWrapped();
                
                w->setCompleter(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCompleter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: completer
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::completer
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
                RLineweightCombo* w = getWrapped();
                QCompleter* res = 
                    
                w->completer(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QCompleter*

            return RJSHelper::cpp2js_QCompleter(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for completer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: model
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::model
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: modelColumn
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::modelColumn
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setModelColumn
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setModelColumn
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
    
  // convert js parameter to cpp: visibleColumn (int)
  
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: currentIndex
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::currentIndex
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
                RLineweightCombo* w = getWrapped();
                int res = 
                    
                w->currentIndex(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: currentText
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::currentText
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
                RLineweightCombo* w = getWrapped();
                QString res = 
                    
                w->currentText(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: currentData
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::currentData
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: role (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = Qt::UserRole;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
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
                RLineweightCombo* w = getWrapped();
                QVariant res = 
                    
                w->currentData(
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

                  qWarning() << "no matching function variant found for currentData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: itemText
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::itemText
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
                RLineweightCombo* w = getWrapped();
                QString res = 
                    
                w->itemText(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for itemText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: itemIcon
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::itemIcon
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
                RLineweightCombo* w = getWrapped();
                QIcon res = 
                    
                w->itemIcon(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QIcon

            return RJSHelper::cpp2js_QIcon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for itemIcon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: itemData
    // Source: QComboBox
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::itemData
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: role (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::UserRole;
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
                RLineweightCombo* w = getWrapped();
                QVariant res = 
                    
                w->itemData(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for itemData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: addItem
    // Source: QComboBox
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::addItem
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
        RJSHelper::is_QIcon(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QVariant(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: icon (QIcon)
  
QIcon a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QIcon(handler, a1);
        
  // convert js parameter to cpp: text (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: userData (QVariant)
  
QVariant a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QVariant();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QVariant(handler, a3);
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
                RLineweightCombo* w = getWrapped();
                
                w->addItem(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: text (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: userData (QVariant)
  
QVariant a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QVariant();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
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
                RLineweightCombo* w = getWrapped();
                
                w->addItem(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: addItems
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::addItems
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
    
  // convert js parameter to cpp: texts (QStringList)
  
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
                RLineweightCombo* w = getWrapped();
                
                w->addItems(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addItems";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: insertItem
    // Source: QComboBox
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::insertItem
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

   && RJSHelper::is_QIcon(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper::is_QVariant(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: icon (QIcon)
  
QIcon a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QIcon(handler, a2);
        
  // convert js parameter to cpp: text (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: userData (QVariant)
  
QVariant a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QVariant();
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QVariant(handler, a4);
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
                RLineweightCombo* w = getWrapped();
                
                w->insertItem(
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QVariant(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: text (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: userData (QVariant)
  
QVariant a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QVariant();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QVariant(handler, a3);
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
                RLineweightCombo* w = getWrapped();
                
                w->insertItem(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: insertItems
    // Source: QComboBox
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::insertItems
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

   && RJSHelper::is_QStringList(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: texts (QStringList)
  
QStringList a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QStringList(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLineweightCombo* w = getWrapped();
                
                w->insertItems(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertItems";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: insertSeparator
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::insertSeparator
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
                RLineweightCombo* w = getWrapped();
                
                w->insertSeparator(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertSeparator";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: removeItem
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::removeItem
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
                RLineweightCombo* w = getWrapped();
                
                w->removeItem(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setItemText
    // Source: QComboBox
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setItemText
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

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: text (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLineweightCombo* w = getWrapped();
                
                w->setItemText(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setItemText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setItemIcon
    // Source: QComboBox
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setItemIcon
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

   && RJSHelper::is_QIcon(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: icon (QIcon)
  
QIcon a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QIcon(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLineweightCombo* w = getWrapped();
                
                w->setItemIcon(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setItemIcon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setItemData
    // Source: QComboBox
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setItemData
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

   && RJSHelper::is_QVariant(handler, a2
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        
  // convert js parameter to cpp: role (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::UserRole;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
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
                RLineweightCombo* w = getWrapped();
                
                w->setItemData(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setItemData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: sizeHint
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::sizeHint
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: minimumSizeHint
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::minimumSizeHint
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: showPopup
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::showPopup
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
                RLineweightCombo* w = getWrapped();
                
                w->showPopup(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showPopup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: hidePopup
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::hidePopup
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
                RLineweightCombo* w = getWrapped();
                
                w->hidePopup(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for hidePopup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: inputMethodQuery
    // Source: QComboBox
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::inputMethodQuery
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
        RJSHelper::is_Qt_InputMethodQuery(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: query (Qt::InputMethodQuery)
  
Qt::InputMethodQuery a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_InputMethodQuery(handler, a1);
        
  // convert js parameter to cpp: argument (QVariant)
  
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
                RLineweightCombo* w = getWrapped();
                QVariant res = 
                    
                w->inputMethodQuery(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_Qt_InputMethodQuery(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (Qt::InputMethodQuery)
  
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: clear
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::clear
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
                RLineweightCombo* w = getWrapped();
                
                w->clear(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: clearEditText
    // Source: QComboBox
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::clearEditText
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
                RLineweightCombo* w = getWrapped();
                
                w->clearEditText(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearEditText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setEditText
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setEditText
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
    
  // convert js parameter to cpp: text (QString)
  
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
                RLineweightCombo* w = getWrapped();
                
                w->setEditText(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEditText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setCurrentIndex
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setCurrentIndex
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: setCurrentText
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setCurrentText
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
    
  // convert js parameter to cpp: text (QString)
  
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
                RLineweightCombo* w = getWrapped();
                
                w->setCurrentText(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: editTextChanged
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RLineweightCombo_Wrapper::editTextChangedEmitter(
                const QString& a1
              ) {
                // convert cpp parameters to js:
                
  // parameter:  (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    a1
  );


                emit editTextChanged(
                  a1_js
                );
              }
            
    // Class: RLineweightCombo
    // Function: activated
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RLineweightCombo_Wrapper::activatedEmitter(
                int index
              ) {
                // convert cpp parameters to js:
                
  // parameter: index (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    index
  );


                emit activated(
                  a1_js
                );
              }
            
    // Class: RLineweightCombo
    // Function: textActivated
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RLineweightCombo_Wrapper::textActivatedEmitter(
                const QString& a1
              ) {
                // convert cpp parameters to js:
                
  // parameter:  (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    a1
  );


                emit textActivated(
                  a1_js
                );
              }
            
    // Class: RLineweightCombo
    // Function: highlighted
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RLineweightCombo_Wrapper::highlightedEmitter(
                int index
              ) {
                // convert cpp parameters to js:
                
  // parameter: index (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    index
  );


                emit highlighted(
                  a1_js
                );
              }
            
    // Class: RLineweightCombo
    // Function: textHighlighted
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RLineweightCombo_Wrapper::textHighlightedEmitter(
                const QString& a1
              ) {
                // convert cpp parameters to js:
                
  // parameter:  (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    a1
  );


                emit textHighlighted(
                  a1_js
                );
              }
            
    // Class: RLineweightCombo
    // Function: currentIndexChanged
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RLineweightCombo_Wrapper::currentIndexChangedEmitter(
                int index
              ) {
                // convert cpp parameters to js:
                
  // parameter: index (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    index
  );


                emit currentIndexChanged(
                  a1_js
                );
              }
            
    // Class: RLineweightCombo
    // Function: currentTextChanged
    // Source: QComboBox
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RLineweightCombo_Wrapper::currentTextChangedEmitter(
                const QString& a1
              ) {
                // convert cpp parameters to js:
                
  // parameter:  (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    a1
  );


                emit currentTextChanged(
                  a1_js
                );
              }
            
    // Class: RLineweightCombo
    // Function: init
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::init
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
                RLineweightCombo* w = getWrapped();
                
                w->init(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for init";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: getLineweight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::getLineweight
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
                RLineweightCombo* w = getWrapped();
                RLineweight::Lineweight res = 
                    
                w->getLineweight(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RLineweight::Lineweight

            return RJSHelper_qcad::cpp2js_RLineweight_Lineweight(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setLineweight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setLineweight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLineweight_Lineweight(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lw (RLineweight::Lineweight)
  
RLineweight::Lineweight a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLineweight_Lineweight(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLineweightCombo* w = getWrapped();
                
                w->setLineweight(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: getOnlyFixed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::getOnlyFixed
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
                RLineweightCombo* w = getWrapped();
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
            
    // Class: RLineweightCombo
    // Function: setOnlyFixed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setOnlyFixed
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
                RLineweightCombo* w = getWrapped();
                
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
            
    // Class: RLineweightCombo
    // Function: getNoDefault
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::getNoDefault
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
                RLineweightCombo* w = getWrapped();
                bool res = 
                    
                w->getNoDefault(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNoDefault";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: setNoDefault
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::setNoDefault
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
    
  // convert js parameter to cpp: noDefault (bool)
  
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
                RLineweightCombo* w = getWrapped();
                
                w->setNoDefault(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNoDefault";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweightCombo
    // Function: valueChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RLineweightCombo_Wrapper::valueChangedEmitter(
                RLineweight::Lineweight lw
              ) {
                // convert cpp parameters to js:
                
  // parameter: lw (RLineweight::Lineweight)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RLineweight_Lineweight(
    handler, 
    lw
  );


                emit valueChanged(
                  a1_js
                );
              }
            
    // Class: RLineweightCombo
    // Function: lineweightChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweightCombo_Wrapper::lineweightChanged
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
                RLineweightCombo* w = getWrapped();
                
                w->lineweightChanged(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for lineweightChanged";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rlineweightcombo_wrapper.cpp"
  
