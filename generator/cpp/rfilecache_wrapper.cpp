
  // Auto generated
  
  // include header:
  //#include "RFileCachewrapper.h"
  //#include "header_cpp.h"
  
    #include "rfilecache_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RFileCache*> RFileCache_Wrapper::basecasters_RFileCache;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RFileCache
    // Function: getContents
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileCache_WrapperSingleton::getContents
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
        
  // convert js parameter to cpp: forceReload (bool)
  
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
            QString res = 
                
                // call static member function:
                RFileCache::getContents(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getContents";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileCache
    // Function: getBuffer
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileCache_WrapperSingleton::getBuffer
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
        
  // convert js parameter to cpp: forceReload (bool)
  
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
            QBuffer* res = 
                
                // call static member function:
                RFileCache::getBuffer(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QBuffer*

            return RJSHelper::cpp2js_QBuffer(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBuffer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RFileCache_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFileCache_Wrapper>("org.qcad", 1, 0, "RFileCache_Wrapper");
        qmlRegisterInterface<RFileCache_Wrapper>("RFileCache_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFileCache* t = new RJSType_RFileCache();
          global.setProperty("RJSType_RFileCache", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFileCache::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFileCache_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFileCache_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFileCache_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFileCache_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RFileCache_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RFileCache_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RFileCache_WrapperSingleton * s = new RFileCache_WrapperSingleton(handler);
        engine->globalObject().setProperty("RFileCache_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RFileCache.js";
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
    RFileCache_Wrapper::RFileCache_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFileCache_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFileCache_Wrapper::RFileCache_Wrapper(RJSApi& h, RFileCache* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFileCache_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFileCache_Wrapper"));
              //setObjectName("RFileCache_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFileCache_Wrapper::~RFileCache_Wrapper() {
            //RDebug::decCounter(QString("RFileCache_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFileCache_Wrapper"));

            //qDebug() << "RFileCache_Wrapper::~RFileCache_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RFileCache";
                  delete wrapped;
                  wrapped = nullptr;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFileCache_Wrapper::initConnections() {

          //setObjectName("RFileCache_Wrapper");

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
  
    // Class: RFileCache
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RFileCache_Wrapper::RFileCache_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RFileCache_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RFileCache_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RFileCache(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RFileCache";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rfilecache_wrapper.cpp"
  
