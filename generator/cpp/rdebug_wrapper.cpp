
  // Auto generated
  
  // include header:
  //#include "RDebugwrapper.h"
  //#include "header_cpp.h"
  
    #include "rdebug_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RDebug*> RDebug_Wrapper::basecasters_RDebug;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RDebug
    // Function: printBacktrace
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDebug_WrapperSingleton::printBacktrace
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: prefix (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_QSTRING;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RDebug::printBacktrace(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for printBacktrace";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDebug
    // Function: startTimer
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDebug_WrapperSingleton::startTimer
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 0;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RDebug::startTimer(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startTimer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDebug
    // Function: stopTimer
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDebug_WrapperSingleton::stopTimer
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

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_uint(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: msg (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: msThreshold (uint)
  
uint a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 0;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_uint(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            uint res = 
                
                // call static member function:
                RDebug::stopTimer(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: uint

            return RJSHelper::cpp2js_uint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  &&
    a2.isUndefined()

    &&
    a3.isUndefined()

    
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: msg (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            uint res = 
                
                // call static member function:
                RDebug::stopTimer(
              a1_cpp
    
            );
          
            // return type: uint

            return RJSHelper::cpp2js_uint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for stopTimer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDebug
    // Function: timeStamp
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDebug_WrapperSingleton::timeStamp
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RDebug::timeStamp(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for timeStamp";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDebug
    // Function: hexDump
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDebug_WrapperSingleton::hexDump
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
    
  // convert js parameter to cpp: str (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RDebug::hexDump(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for hexDump";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDebug
    // Function: incCounter
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDebug_WrapperSingleton::incCounter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_QSTRING;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RDebug::incCounter(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for incCounter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDebug
    // Function: decCounter
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDebug_WrapperSingleton::decCounter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_QSTRING;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RDebug::decCounter(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for decCounter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDebug
    // Function: getCounter
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDebug_WrapperSingleton::getCounter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_QSTRING;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RDebug::getCounter(
              a1_cpp
    
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCounter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDebug
    // Function: printCounter
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDebug_WrapperSingleton::printCounter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_QSTRING;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RDebug::printCounter(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for printCounter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDebug
    // Function: printCounters
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDebug_WrapperSingleton::printCounters
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RDebug::printCounters(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for printCounters";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDebug
    // Function: setPrefix
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDebug_WrapperSingleton::setPrefix
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
    
  // convert js parameter to cpp: p (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RDebug::setPrefix(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPrefix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDebug
    // Function: getPrefix
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDebug_WrapperSingleton::getPrefix
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RDebug::getPrefix(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPrefix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RDebug_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RDebug_Wrapper>("org.qcad", 1, 0, "RDebug_Wrapper");
        qmlRegisterInterface<RDebug_Wrapper>("RDebug_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RDebug* t = new RJSType_RDebug();
          global.setProperty("RJSType_RDebug", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RDebug::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RDebug_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RDebug_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RDebug_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RDebug_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RDebug_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RDebug_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RDebug_WrapperSingleton * s = new RDebug_WrapperSingleton(handler);
        engine->globalObject().setProperty("RDebug_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RDebug.js";
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
    RDebug_Wrapper::RDebug_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RDebug_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RDebug_Wrapper::RDebug_Wrapper(RJSApi& h, RDebug* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RDebug_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RDebug_Wrapper"));
              //setObjectName("RDebug_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RDebug_Wrapper::~RDebug_Wrapper() {
            //RDebug::decCounter(QString("RDebug_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RDebug_Wrapper"));

            //qDebug() << "RDebug_Wrapper::~RDebug_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RDebug";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RDebug_Wrapper::initConnections() {

          //setObjectName("RDebug_Wrapper");

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
  
    #include "moc_rdebug_wrapper.cpp"
  
