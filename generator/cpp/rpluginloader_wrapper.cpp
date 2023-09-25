
  // Auto generated
  
  // include header:
  //#include "RPluginLoaderwrapper.h"
  //#include "header_cpp.h"
  
    #include "rpluginloader_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RPluginLoader
    // Function: getPluginSuffix
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::getPluginSuffix
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RPluginLoader::getPluginSuffix(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPluginSuffix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginLoader
    // Function: getPluginFiles
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::getPluginFiles
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RPluginLoader::getPluginFiles(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPluginFiles";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginLoader
    // Function: loadPlugins
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::loadPlugins
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
    
  // convert js parameter to cpp: init (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RPluginLoader::loadPlugins(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for loadPlugins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginLoader
    // Function: unloadPlugins
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::unloadPlugins
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RPluginLoader::unloadPlugins(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unloadPlugins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginLoader
    // Function: loadPlugin
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::loadPlugin
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
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
    , true
  
  )

   && RJSHelper::is_QString(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: plugin (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        
  // convert js parameter to cpp: init (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        
  // convert js parameter to cpp: fileName (QString)
  
QString a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QString();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
          }
        
  // convert js parameter to cpp: errorString (QString)
  
QString a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QString();
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QString(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RPluginLoader::loadPlugin(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for loadPlugin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginLoader
    // Function: unloadPlugin
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::unloadPlugin
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

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: remove (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RPluginLoader::unloadPlugin(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: plugin (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        
  // convert js parameter to cpp: remove (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RPluginLoader::unloadPlugin(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unloadPlugin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginLoader
    // Function: postInitPlugins
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::postInitPlugins
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPluginInterface_InitStatus(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: status (RPluginInterface::InitStatus)
  
RPluginInterface::InitStatus a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPluginInterface_InitStatus(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RPluginLoader::postInitPlugins(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for postInitPlugins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginLoader
    // Function: postInitPlugin
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::postInitPlugin
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

   && RJSHelper_qcad::is_RPluginInterface_InitStatus(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: plugin (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        
  // convert js parameter to cpp: status (RPluginInterface::InitStatus)
  
RPluginInterface::InitStatus a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RPluginInterface_InitStatus(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RPluginLoader::postInitPlugin(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for postInitPlugin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginLoader
    // Function: initTranslations
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::initTranslations
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RPluginLoader::initTranslations(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initTranslations";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginLoader
    // Function: countPlugins
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::countPlugins
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RPluginLoader::countPlugins(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for countPlugins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginLoader
    // Function: getPluginInfo
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::getPluginInfo
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
    
            // static member function:
            // call base class static function:
            RPluginInfo res = 
                
                // call static member function:
                RPluginLoader::getPluginInfo(
              a1_cpp
    
            );
          
            // return type: RPluginInfo

            return RJSHelper_qcad::cpp2js_RPluginInfo(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RPluginInfo res = 
                
                // call static member function:
                RPluginLoader::getPluginInfo(
              a1_cpp
    
            );
          
            // return type: RPluginInfo

            return RJSHelper_qcad::cpp2js_RPluginInfo(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPluginInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginLoader
    // Function: getPluginsPath
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::getPluginsPath
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RPluginLoader::getPluginsPath(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPluginsPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginLoader
    // Function: hasPlugin
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::hasPlugin
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
    
  // convert js parameter to cpp: id (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RPluginLoader::hasPlugin(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasPlugin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginLoader
    // Function: checkPluginLicenses
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::checkPluginLicenses
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RPluginLoader::checkPluginLicenses(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for checkPluginLicenses";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginLoader
    // Function: checkPluginLicense
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPluginLoader_WrapperSingleton::checkPluginLicense
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
    
  // convert js parameter to cpp: plugin (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RPluginLoader::checkPluginLicense(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for checkPluginLicense";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RPluginLoader_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPluginLoader_Wrapper>("org.qcad", 1, 0, "RPluginLoader_Wrapper");
        qmlRegisterInterface<RPluginLoader_Wrapper>("RPluginLoader_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPluginLoader* t = new RJSType_RPluginLoader();
          global.setProperty("RJSType_RPluginLoader", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPluginLoader::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPluginLoader_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPluginLoader_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPluginLoader_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPluginLoader_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RPluginLoader_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RPluginLoader_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RPluginLoader_WrapperSingleton * s = new RPluginLoader_WrapperSingleton(handler);
        engine->globalObject().setProperty("RPluginLoader_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RPluginLoader.js";
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
    RPluginLoader_Wrapper::RPluginLoader_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPluginLoader_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPluginLoader_Wrapper::RPluginLoader_Wrapper(RJSApi& h, RPluginLoader* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPluginLoader_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPluginLoader_Wrapper"));
              //setObjectName("RPluginLoader_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPluginLoader_Wrapper::~RPluginLoader_Wrapper() {
            //RDebug::decCounter(QString("RPluginLoader_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPluginLoader_Wrapper"));

            //qDebug() << "RPluginLoader_Wrapper::~RPluginLoader_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RPluginLoader";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPluginLoader_Wrapper::initConnections() {

          //setObjectName("RPluginLoader_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
          }
        }
      

  // constructors:
  
    // Class: RPluginLoader
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RPluginLoader_Wrapper::RPluginLoader_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RPluginLoader_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RPluginLoader_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RPluginLoader(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RPluginLoader";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  