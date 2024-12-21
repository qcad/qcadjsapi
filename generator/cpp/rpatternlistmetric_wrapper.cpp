
  // Auto generated
  
  // include header:
  //#include "RPatternListMetricwrapper.h"
  //#include "header_cpp.h"
  
    #include "rpatternlistmetric_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RPatternListMetric*> RPatternListMetric_Wrapper::basecasters_RPatternListMetric;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RPatternListMetric
    // Function: init
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPatternListMetric_WrapperSingleton::init
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RPatternListMetric::init(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for init";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPatternListMetric
    // Function: uninit
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPatternListMetric_WrapperSingleton::uninit
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RPatternListMetric::uninit(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for uninit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPatternListMetric
    // Function: getNames
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPatternListMetric_WrapperSingleton::getNames
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RPatternListMetric::getNames(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPatternListMetric
    // Function: get
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPatternListMetric_WrapperSingleton::get
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
    
            // static member function:
            // call base class static function:
            RPattern* res = 
                
                // call static member function:
                RPatternListMetric::get(
              a1_cpp
    
            );
          
            // return type: RPattern*

            return RJSHelper_qcad::cpp2js_RPattern(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of RJSHelper_qcad::cpp2js_RPattern:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for get";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RPatternListMetric_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPatternListMetric_Wrapper>("org.qcad", 1, 0, "RPatternListMetric_Wrapper");
        qmlRegisterInterface<RPatternListMetric_Wrapper>("RPatternListMetric_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPatternListMetric* t = new RJSType_RPatternListMetric();
          global.setProperty("RJSType_RPatternListMetric", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPatternListMetric::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPatternListMetric_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPatternListMetric_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPatternListMetric_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPatternListMetric_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RPatternListMetric_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RPatternListMetric_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RPatternListMetric_WrapperSingleton * s = new RPatternListMetric_WrapperSingleton(handler);
        engine->globalObject().setProperty("RPatternListMetric_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RPatternListMetric.js";
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
    RPatternListMetric_Wrapper::RPatternListMetric_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPatternListMetric_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPatternListMetric_Wrapper::RPatternListMetric_Wrapper(RJSApi& h, RPatternListMetric* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPatternListMetric_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPatternListMetric_Wrapper"));
              //setObjectName("RPatternListMetric_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPatternListMetric_Wrapper::~RPatternListMetric_Wrapper() {
            //RDebug::decCounter(QString("RPatternListMetric_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPatternListMetric_Wrapper"));

            //qDebug() << "RPatternListMetric_Wrapper::~RPatternListMetric_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RPatternListMetric";
                  delete wrapped;
                  wrapped = nullptr;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPatternListMetric_Wrapper::initConnections() {

          //setObjectName("RPatternListMetric_Wrapper");

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
  

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rpatternlistmetric_wrapper.cpp"
  
