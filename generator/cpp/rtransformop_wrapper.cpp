
  // Auto generated
  
  // include header:
  //#include "RTransformOpwrapper.h"
  //#include "header_cpp.h"
  
    #include "rtransformop_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RTransformOp*> RTransformOp_Wrapper::basecasters_RTransformOp;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RTransformOp
    // Function: createTranslation
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransformOp_WrapperSingleton::createTranslation
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: dy (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RTransformOp res = 
                
                // call static member function:
                RTransformOp::createTranslation(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: RTransformOp

            return RJSHelper_qcad::cpp2js_RTransformOp(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createTranslation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransformOp
    // Function: createScale
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransformOp_WrapperSingleton::createScale
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sx (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: sy (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RTransformOp res = 
                
                // call static member function:
                RTransformOp::createScale(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: RTransformOp

            return RJSHelper_qcad::cpp2js_RTransformOp(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransformOp
    // Function: createRotation
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTransformOp_WrapperSingleton::createRotation
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
    
  // convert js parameter to cpp: a (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RTransformOp res = 
                
                // call static member function:
                RTransformOp::createRotation(
              a1_cpp
    
            );
          
            // return type: RTransformOp

            return RJSHelper_qcad::cpp2js_RTransformOp(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createRotation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RTransformOp_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RTransformOp_Wrapper>("org.qcad", 1, 0, "RTransformOp_Wrapper");
        qmlRegisterInterface<RTransformOp_Wrapper>("RTransformOp_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RTransformOp* t = new RJSType_RTransformOp();
          global.setProperty("RJSType_RTransformOp", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RTransformOp::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RTransformOp_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RTransformOp_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RTransformOp_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RTransformOp_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RTransformOp_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RTransformOp_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RTransformOp_WrapperSingleton * s = new RTransformOp_WrapperSingleton(handler);
        engine->globalObject().setProperty("RTransformOp_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RTransformOp.js";
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
    RTransformOp_Wrapper::RTransformOp_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RTransformOp_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RTransformOp_Wrapper::RTransformOp_Wrapper(RJSApi& h, RTransformOp* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RTransformOp_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTransformOp_Wrapper"));
              //setObjectName("RTransformOp_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RTransformOp_Wrapper::~RTransformOp_Wrapper() {
            //RDebug::decCounter(QString("RTransformOp_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RTransformOp_Wrapper"));

            //qDebug() << "RTransformOp_Wrapper::~RTransformOp_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RTransformOp";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RTransformOp_Wrapper::initConnections() {

          //setObjectName("RTransformOp_Wrapper");

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
  
    // Class: RTransformOp
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RTransformOp_Wrapper::RTransformOp_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RTransformOp_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RTransformOp_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
              wrapped = new RTransformOp(
                  
              );
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RTransformOp";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RTransformOp
    // Function: getType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransformOp_Wrapper::getType
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
                RTransformOp* w = getWrapped();
                RTransformOp::Type res = 
                    
                w->getType(
                  
                );
              
            // return type: RTransformOp::Type

            return RJSHelper_qcad::cpp2js_RTransformOp_Type(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransformOp
    // Function: getD1
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransformOp_Wrapper::getD1
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
                RTransformOp* w = getWrapped();
                qreal res = 
                    
                w->getD1(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getD1";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransformOp
    // Function: getD2
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransformOp_Wrapper::getD2
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
                RTransformOp* w = getWrapped();
                qreal res = 
                    
                w->getD2(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getD2";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rtransformop_wrapper.cpp"
  
