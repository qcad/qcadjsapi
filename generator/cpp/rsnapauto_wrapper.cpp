
  // Auto generated
  
  // include header:
  //#include "RSnapAutowrapper.h"
  //#include "header_cpp.h"
  
    #include "rsnapauto_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RSnapAuto*> RSnapAuto_Wrapper::basecasters_RSnapAuto;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RSnapAuto
    // Function: init
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::init
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: force (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSnapAuto::init(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for init";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getModes
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::getModes
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RSnapAuto::Modes res = 
                
                // call static member function:
                RSnapAuto::getModes(
              
            );
          
            // return type: RSnapAuto::Modes

            return RJSHelper_qcad::cpp2js_RSnapAuto_Modes(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getModes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: setModes
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::setModes
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSnapAuto_Modes(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m (RSnapAuto::Modes)
  
RSnapAuto::Modes a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSnapAuto_Modes(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSnapAuto::setModes(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: setMode
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::setMode
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSnapAuto_Mode(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (RSnapAuto::Mode)
  
RSnapAuto::Mode a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSnapAuto_Mode(handler, a1);
        
  // convert js parameter to cpp: on (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSnapAuto::setMode(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getMode
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::getMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSnapAuto_Mode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (RSnapAuto::Mode)
  
RSnapAuto::Mode a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSnapAuto_Mode(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSnapAuto::getMode(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: setIntersections
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::setIntersections
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
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSnapAuto::setIntersections(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setIntersections";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getIntersections
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::getIntersections
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSnapAuto::getIntersections(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersections";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: setEndPoints
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::setEndPoints
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
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSnapAuto::setEndPoints(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEndPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getEndPoints
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::getEndPoints
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSnapAuto::getEndPoints(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEndPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: setMiddlePoints
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::setMiddlePoints
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
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSnapAuto::setMiddlePoints(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMiddlePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getMiddlePoints
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::getMiddlePoints
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSnapAuto::getMiddlePoints(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMiddlePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: setCenterPoints
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::setCenterPoints
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
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSnapAuto::setCenterPoints(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCenterPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getCenterPoints
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::getCenterPoints
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSnapAuto::getCenterPoints(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCenterPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: setPerpendicular
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::setPerpendicular
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
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSnapAuto::setPerpendicular(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPerpendicular";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getPerpendicular
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::getPerpendicular
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSnapAuto::getPerpendicular(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPerpendicular";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: setTangential
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::setTangential
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
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSnapAuto::setTangential(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTangential";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getTangential
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::getTangential
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSnapAuto::getTangential(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTangential";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: setReferencePoints
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::setReferencePoints
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
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSnapAuto::setReferencePoints(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setReferencePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getReferencePoints
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::getReferencePoints
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSnapAuto::getReferencePoints(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getReferencePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: setGridPoints
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::setGridPoints
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
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSnapAuto::setGridPoints(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGridPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getGridPoints
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::getGridPoints
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSnapAuto::getGridPoints(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGridPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: setPointsOnEntity
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::setPointsOnEntity
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
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSnapAuto::setPointsOnEntity(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPointsOnEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getPointsOnEntity
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::getPointsOnEntity
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSnapAuto::getPointsOnEntity(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointsOnEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: setFreePositioning
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::setFreePositioning
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
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RSnapAuto::setFreePositioning(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFreePositioning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getFreePositioning
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_WrapperSingleton::getFreePositioning
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RSnapAuto::getFreePositioning(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFreePositioning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RSnapAuto_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RSnapAuto_Wrapper>("org.qcad", 1, 0, "RSnapAuto_Wrapper");
        qmlRegisterInterface<RSnapAuto_Wrapper>("RSnapAuto_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RSnapAuto* t = new RJSType_RSnapAuto();
          global.setProperty("RJSType_RSnapAuto", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RSnapAuto::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RSnapAuto_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RSnapAuto_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RSnapAuto_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RSnapAuto_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RSnapAuto_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RSnapAuto_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RSnapAuto_WrapperSingleton * s = new RSnapAuto_WrapperSingleton(handler);
        engine->globalObject().setProperty("RSnapAuto_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RSnapAuto.js";
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
    RSnapAuto_Wrapper::RSnapAuto_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RSnapAuto_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RSnapAuto_Wrapper::RSnapAuto_Wrapper(RJSApi& h, RSnapAuto* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RSnapAuto_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RSnapAuto_Wrapper"));
              //setObjectName("RSnapAuto_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RSnapAuto_Wrapper::~RSnapAuto_Wrapper() {
            //RDebug::decCounter(QString("RSnapAuto_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RSnapAuto_Wrapper"));

            //qDebug() << "RSnapAuto_Wrapper::~RSnapAuto_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RSnapAuto";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RSnapAuto_Wrapper::initConnections() {

          //setObjectName("RSnapAuto_Wrapper");

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
  
    // Class: RSnapAuto
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RSnapAuto_Wrapper::RSnapAuto_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RSnapAuto_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RSnapAuto_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
              wrapped = new RSnapAuto(
                  
              );
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RSnapAuto";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RSnapAuto
    // Function: showUiOptions
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      showUiOptionsSuper
                    
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSnapAuto* w = getWrapped();
                
                w->showUiOptions(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showUiOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: hideUiOptions
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      hideUiOptionsSuper
                    
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSnapAuto* w = getWrapped();
                
                w->hideUiOptions(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for hideUiOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: suspendEvent
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_Wrapper::suspendEvent
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSnapAuto* w = getWrapped();
                
                w->suspendEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for suspendEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: finishEvent
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_Wrapper::finishEvent
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSnapAuto* w = getWrapped();
                
                w->finishEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for finishEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getEntityIds
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_Wrapper::getEntityIds
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSnapAuto* w = getWrapped();
                QList<REntity::Id> res = 
                    
                w->getEntityIds(
                  
                );
              
            // return type: QList<REntity::Id>

            return RJSHelper_qcad::cpp2js_QList_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEntityIds";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getStatus
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_Wrapper::getStatus
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
                RSnapAuto* w = getWrapped();
                RSnap::Status res = 
                    
                w->getStatus(
                  
                );
              
            // return type: RSnap::Status

            return RJSHelper_qcad::cpp2js_RSnap_Status(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: setStatus
    // Source: RSnap
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_Wrapper::setStatus
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RSnap_Status(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RSnap::Status)
  
RSnap::Status a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RSnap_Status(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSnapAuto* w = getWrapped();
                
                w->setStatus(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: getLastSnap
    // Source: RSnap
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_Wrapper::getLastSnap
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
                RSnapAuto* w = getWrapped();
                RVector res = 
                    
                w->getLastSnap(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLastSnap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: setLastSnap
    // Source: RSnap
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_Wrapper::setLastSnap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSnapAuto* w = getWrapped();
                
                w->setLastSnap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLastSnap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: snap
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_Wrapper::snap
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
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RGraphicsView_ptr(handler, a2
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: position (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: view (RGraphicsView)
  

          // non copyable:
          RGraphicsView*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a2);
        
  // convert js parameter to cpp: range (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RNANDOUBLE;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
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
                RSnapAuto* w = getWrapped();
                RVector res = 
                    
                w->snap(
                  a1_cpp
    , *a2_cpp
    , a3_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for snap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapAuto
    // Function: reset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapAuto_Wrapper::reset
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSnapAuto* w = getWrapped();
                
                w->reset(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rsnapauto_wrapper.cpp"
  
