
  // Auto generated
  
  // include header:
  //#include "RPluginInfowrapper.h"
  //#include "header_cpp.h"
  
    #include "rplugininfo_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RPluginInfo*> RPluginInfo_Wrapper::basecasters_RPluginInfo;
    
    // static functions implementation in singleton wrapper:
    
    void RPluginInfo_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPluginInfo_Wrapper>("org.qcad", 1, 0, "RPluginInfo_Wrapper");
        qmlRegisterInterface<RPluginInfo_Wrapper>("RPluginInfo_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPluginInfo* t = new RJSType_RPluginInfo();
          global.setProperty("RJSType_RPluginInfo", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPluginInfo::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPluginInfo_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPluginInfo_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPluginInfo_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPluginInfo_BaseJs", mob);
      
      QString fileName = ":generator/js/RPluginInfo.js";
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
    RPluginInfo_Wrapper::RPluginInfo_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPluginInfo_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPluginInfo_Wrapper::RPluginInfo_Wrapper(RJSApi& h, RPluginInfo* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPluginInfo_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPluginInfo_Wrapper"));
              //setObjectName("RPluginInfo_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPluginInfo_Wrapper::~RPluginInfo_Wrapper() {
            //RDebug::decCounter(QString("RPluginInfo_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPluginInfo_Wrapper"));

            //qDebug() << "RPluginInfo_Wrapper::~RPluginInfo_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RPluginInfo";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPluginInfo_Wrapper::initConnections() {

          //setObjectName("RPluginInfo_Wrapper");

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
  
    // Class: RPluginInfo
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RPluginInfo_Wrapper::RPluginInfo_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RPluginInfo_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RPluginInfo_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RPluginInfo(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RPluginInfo";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RPluginInfo
    // Function: set
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RPluginInfo_Wrapper::set
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

   && RJSHelper::is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RPluginInfo* w = getWrapped();
                
                w->set(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for set";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginInfo
    // Function: get
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RPluginInfo_Wrapper::get
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

   && RJSHelper::is_QVariant(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: def (QVariant)
  
QVariant a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_QVARIANT;
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RPluginInfo* w = getWrapped();
                QVariant res = 
                    
                w->get(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for get";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPluginInfo
    // Function: getKeys
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPluginInfo_Wrapper::getKeys
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RPluginInfo* w = getWrapped();
                QStringList res = 
                    
                w->getKeys(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getKeys";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rplugininfo_wrapper.cpp"
  
