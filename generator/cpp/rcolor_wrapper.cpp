
  // Auto generated
  
  // include header:
  //#include "RColorwrapper.h"
  //#include "header_cpp.h"
  
    #include "rcolor_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RColor
    // Function: removeColor
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::removeColor
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
    
  // convert js parameter to cpp: cn (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RColor::removeColor(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: addColor
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::addColor
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

   && RJSHelper_qcad::is_RColor(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cn (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: c (RColor)
  
RColor a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RColor::addColor(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: createFromCadIndex
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::createFromCadIndex
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
    
  // convert js parameter to cpp: code (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RColor::createFromCadIndex(
              a1_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: code (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RColor::createFromCadIndex(
              a1_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createFromCadIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: createFromCadCustom
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::createFromCadCustom
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
    
  // convert js parameter to cpp: code (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RColor::createFromCadCustom(
              a1_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: code (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RColor::createFromCadCustom(
              a1_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createFromCadCustom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: createFromName
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::createFromName
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
            RColor res = 
                
                // call static member function:
                RColor::createFromName(
              a1_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createFromName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: getNameList
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::getNameList
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
    
  // convert js parameter to cpp: onlyFixed (bool)
  
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
            QStringList res = 
                
                // call static member function:
                RColor::getNameList(
              a1_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNameList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: getColorList
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::getColorList
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
    
  // convert js parameter to cpp: onlyFixed (bool)
  
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
            QList<RColor> res = 
                
                // call static member function:
                RColor::getColorList(
              a1_cpp
    
            );
          
            // return type: QList<RColor>

            return RJSHelper_qcad::cpp2js_QList_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColorList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: getIcon
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::getIcon
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RColor(handler, a1
  )

   && RJSHelper::is_QSize(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (RColor)
  
RColor a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a1);
        
  // convert js parameter to cpp: size (QSize)
  
QSize a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_QSIZE_ICON;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QSize(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QIcon res = 
                
                // call static member function:
                RColor::getIcon(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QIcon

            return RJSHelper::cpp2js_QIcon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIcon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: getHighlighted
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::getHighlighted
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
        RJSHelper_qcad::is_RColor(handler, a1
  )

   && RJSHelper::is_QColor(handler, a2
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (RColor)
  
RColor a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a1);
        
  // convert js parameter to cpp: bgColor (QColor)
  
QColor a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QColor(handler, a2);
        
  // convert js parameter to cpp: minDist (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 75;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RColor::getHighlighted(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHighlighted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: getFaded
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::getFaded
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
        RJSHelper_qcad::is_RColor(handler, a1
  )

   && RJSHelper::is_QColor(handler, a2
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (RColor)
  
RColor a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a1);
        
  // convert js parameter to cpp: bgColor (QColor)
  
QColor a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QColor(handler, a2);
        
  // convert js parameter to cpp: factor (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            RColor res = 
                
                // call static member function:
                RColor::getFaded(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFaded";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: reinit
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_WrapperSingleton::reinit
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RColor::reinit(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reinit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RColor_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RColor_Wrapper>("org.qcad", 1, 0, "RColor_Wrapper");
        qmlRegisterInterface<RColor_Wrapper>("RColor_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RColor* t = new RJSType_RColor();
          global.setProperty("RJSType_RColor", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RColor::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RColor_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RColor_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RColor_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RColor_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RColor_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RColor_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RColor_WrapperSingleton * s = new RColor_WrapperSingleton(handler);
        engine->globalObject().setProperty("RColor_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RColor.js";
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
    RColor_Wrapper::RColor_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RColor_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RColor_Wrapper::RColor_Wrapper(RJSApi& h, RColor* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RColor_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RColor_Wrapper"));
              //setObjectName("RColor_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RColor_Wrapper::~RColor_Wrapper() {
            //RDebug::decCounter(QString("RColor_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RColor_Wrapper"));

            //qDebug() << "RColor_Wrapper::~RColor_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RColor";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RColor_Wrapper::initConnections() {

          //setObjectName("RColor_Wrapper");

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
  
    // Class: RColor
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1
RColor_Wrapper::RColor_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RColor_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RColor_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
    , true
  
  )

   && RJSHelper_qcad::is_RColor_Mode(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: g (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: b (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
          }
        
  // convert js parameter to cpp: mode (RColor::Mode)
  
RColor::Mode a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = RColor::Fixed;
          }
          else {
            a5_cpp = RJSHelper_qcad::js2cpp_RColor_Mode(handler, a5);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RColor(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper_qcad::is_RColor_Mode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (RColor::Mode)
  
RColor::Mode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RColor::Fixed;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RColor_Mode(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RColor(
                a1_cpp
    , a2_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RColor_Mode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (RColor::Mode)
  
RColor::Mode a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor_Mode(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RColor(
                a1_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RColor(
                
            );
            wrappedCreated = true;
          

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
   && a2.isUndefined()
   && a3.isUndefined()
   && a4.isUndefined()
   && a5.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RColor";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RColor
    // Function: getCustomColorCode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::getCustomColorCode
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
                RColor* w = getWrapped();
                int res = 
                    
                w->getCustomColorCode(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCustomColorCode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: getColorIndex
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::getColorIndex
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
                RColor* w = getWrapped();
                int res = 
                    
                w->getColorIndex(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColorIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::isValid
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
                RColor* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: getName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::getName
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
                RColor* w = getWrapped();
                QString res = 
                    
                w->getName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: isByLayer
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::isByLayer
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
                RColor* w = getWrapped();
                bool res = 
                    
                w->isByLayer(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isByLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: isByBlock
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::isByBlock
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
                RColor* w = getWrapped();
                bool res = 
                    
                w->isByBlock(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isByBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: isFixed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::isFixed
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
                RColor* w = getWrapped();
                bool res = 
                    
                w->isFixed(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isFixed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: toCompat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::toCompat
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
                RColor* w = getWrapped();
                QColor res = 
                    
                w->toCompat(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toCompat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: setCompat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::setCompat
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: col (QColor)
  
QColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColor* w = getWrapped();
                
                w->setCompat(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCompat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RColor
    // Function: equals
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RColor_Wrapper::equals
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (RColor)
  
RColor a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RColor* w = getWrapped();
                bool res = 
                    
                w->operator==(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for equals";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  