
  // Auto generated
  
  // include header:
  //#include "RPatternListImperialwrapper.h"
  //#include "header_cpp.h"
  
    #include "rpatternlistimperial_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RPatternListImperial*> RPatternListImperial_Wrapper::basecasters_RPatternListImperial;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RPatternListImperial
    // Function: init
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPatternListImperial_WrapperSingleton::init
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RPatternListImperial::init(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for init";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPatternListImperial
    // Function: uninit
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPatternListImperial_WrapperSingleton::uninit
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RPatternListImperial::uninit(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for uninit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPatternListImperial
    // Function: getNames
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPatternListImperial_WrapperSingleton::getNames
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RPatternListImperial::getNames(
              
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
            
    // Class: RPatternListImperial
    // Function: get
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPatternListImperial_WrapperSingleton::get
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
                RPatternListImperial::get(
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
            
    void RPatternListImperial_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPatternListImperial_Wrapper>("org.qcad", 1, 0, "RPatternListImperial_Wrapper");
        qmlRegisterInterface<RPatternListImperial_Wrapper>("RPatternListImperial_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPatternListImperial* t = new RJSType_RPatternListImperial();
          global.setProperty("RJSType_RPatternListImperial", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPatternListImperial::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPatternListImperial_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPatternListImperial_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPatternListImperial_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPatternListImperial_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RPatternListImperial_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RPatternListImperial_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RPatternListImperial_WrapperSingleton * s = new RPatternListImperial_WrapperSingleton(handler);
        engine->globalObject().setProperty("RPatternListImperial_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RPatternListImperial.js";
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
    RPatternListImperial_Wrapper::RPatternListImperial_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPatternListImperial_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPatternListImperial_Wrapper::RPatternListImperial_Wrapper(RJSApi& h, RPatternListImperial* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPatternListImperial_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPatternListImperial_Wrapper"));
              //setObjectName("RPatternListImperial_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPatternListImperial_Wrapper::~RPatternListImperial_Wrapper() {
            //RDebug::decCounter(QString("RPatternListImperial_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPatternListImperial_Wrapper"));

            //qDebug() << "RPatternListImperial_Wrapper::~RPatternListImperial_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RPatternListImperial";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPatternListImperial_Wrapper::initConnections() {

          //setObjectName("RPatternListImperial_Wrapper");

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
  
    #include "moc_rpatternlistimperial_wrapper.cpp"
  
