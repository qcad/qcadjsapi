
  // Auto generated
  
  // include header:
  //#include "RGraphicsSceneDrawablewrapper.h"
  //#include "header_cpp.h"
  
    #include "rgraphicsscenedrawable_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RGraphicsSceneDrawable*> RGraphicsSceneDrawable_Wrapper::basecasters_RGraphicsSceneDrawable;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RGraphicsSceneDrawable
    // Function: createFromPainterPath
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_WrapperSingleton::createFromPainterPath
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPainterPath(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pp (RPainterPath)
  
RPainterPath a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPainterPath(handler, a1);
        
  // convert js parameter to cpp: offset (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RVector::nullVector;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            RGraphicsSceneDrawable res = 
                
                // call static member function:
                RGraphicsSceneDrawable::createFromPainterPath(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: RGraphicsSceneDrawable

            return RJSHelper_qcad::cpp2js_RGraphicsSceneDrawable(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createFromPainterPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: createFromImage
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_WrapperSingleton::createFromImage
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RImageData(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: img (RImageData)
  
RImageData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RImageData(handler, a1);
        
  // convert js parameter to cpp: offset (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RVector::nullVector;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            RGraphicsSceneDrawable res = 
                
                // call static member function:
                RGraphicsSceneDrawable::createFromImage(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: RGraphicsSceneDrawable

            return RJSHelper_qcad::cpp2js_RGraphicsSceneDrawable(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createFromImage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: createFromText
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_WrapperSingleton::createFromText
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTextBasedData(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: txt (RTextBasedData)
  
RTextBasedData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTextBasedData(handler, a1);
        
  // convert js parameter to cpp: offset (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RVector::nullVector;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            RGraphicsSceneDrawable res = 
                
                // call static member function:
                RGraphicsSceneDrawable::createFromText(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: RGraphicsSceneDrawable

            return RJSHelper_qcad::cpp2js_RGraphicsSceneDrawable(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createFromText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: createFromTransform
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_WrapperSingleton::createFromTransform
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTransform(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: transform (RTransform)
  
RTransform a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTransform(handler, a1);
        
  // convert js parameter to cpp: offset (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RVector::nullVector;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            RGraphicsSceneDrawable res = 
                
                // call static member function:
                RGraphicsSceneDrawable::createFromTransform(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: RGraphicsSceneDrawable

            return RJSHelper_qcad::cpp2js_RGraphicsSceneDrawable(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createFromTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: createEndTransform
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_WrapperSingleton::createEndTransform
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
    
  // convert js parameter to cpp: offset (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RGraphicsSceneDrawable res = 
                
                // call static member function:
                RGraphicsSceneDrawable::createEndTransform(
              a1_cpp
    
            );
          
            // return type: RGraphicsSceneDrawable

            return RJSHelper_qcad::cpp2js_RGraphicsSceneDrawable(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createEndTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RGraphicsSceneDrawable_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RGraphicsSceneDrawable_Wrapper>("org.qcad", 1, 0, "RGraphicsSceneDrawable_Wrapper");
        qmlRegisterInterface<RGraphicsSceneDrawable_Wrapper>("RGraphicsSceneDrawable_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RGraphicsSceneDrawable* t = new RJSType_RGraphicsSceneDrawable();
          global.setProperty("RJSType_RGraphicsSceneDrawable", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RGraphicsSceneDrawable::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RGraphicsSceneDrawable_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RGraphicsSceneDrawable_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RGraphicsSceneDrawable_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RGraphicsSceneDrawable_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RGraphicsSceneDrawable_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RGraphicsSceneDrawable_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RGraphicsSceneDrawable_WrapperSingleton * s = new RGraphicsSceneDrawable_WrapperSingleton(handler);
        engine->globalObject().setProperty("RGraphicsSceneDrawable_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RGraphicsSceneDrawable.js";
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
    RGraphicsSceneDrawable_Wrapper::RGraphicsSceneDrawable_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RGraphicsSceneDrawable_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RGraphicsSceneDrawable_Wrapper::RGraphicsSceneDrawable_Wrapper(RJSApi& h, RGraphicsSceneDrawable* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RGraphicsSceneDrawable_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RGraphicsSceneDrawable_Wrapper"));
              //setObjectName("RGraphicsSceneDrawable_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RGraphicsSceneDrawable_Wrapper::~RGraphicsSceneDrawable_Wrapper() {
            //RDebug::decCounter(QString("RGraphicsSceneDrawable_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RGraphicsSceneDrawable_Wrapper"));

            //qDebug() << "RGraphicsSceneDrawable_Wrapper::~RGraphicsSceneDrawable_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RGraphicsSceneDrawable";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RGraphicsSceneDrawable_Wrapper::initConnections() {

          //setObjectName("RGraphicsSceneDrawable_Wrapper");

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
  
    // Class: RGraphicsSceneDrawable
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
RGraphicsSceneDrawable_Wrapper::RGraphicsSceneDrawable_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RGraphicsSceneDrawable_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RGraphicsSceneDrawable_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPainterPath(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pp (RPainterPath)
  
RPainterPath a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPainterPath(handler, a1);
        
  // convert js parameter to cpp: os (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RVector::nullVector;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RGraphicsSceneDrawable(
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
        RJSHelper_qcad::is_RImageData(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: img (RImageData)
  
RImageData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RImageData(handler, a1);
        
  // convert js parameter to cpp: os (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RVector::nullVector;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RGraphicsSceneDrawable(
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
        RJSHelper_qcad::is_RTextBasedData(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: txt (RTextBasedData)
  
RTextBasedData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTextBasedData(handler, a1);
        
  // convert js parameter to cpp: os (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RVector::nullVector;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RGraphicsSceneDrawable(
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
        RJSHelper_qcad::is_RTransform(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: tf (RTransform)
  
RTransform a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTransform(handler, a1);
        
  // convert js parameter to cpp: os (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RVector::nullVector;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RGraphicsSceneDrawable(
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
        RJSHelper_qcad::is_RGraphicsSceneDrawable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (RGraphicsSceneDrawable)
  
RGraphicsSceneDrawable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsSceneDrawable(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RGraphicsSceneDrawable(
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

        
            wrapped = new RGraphicsSceneDrawable(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RGraphicsSceneDrawable";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RGraphicsSceneDrawable
    // Function: uninit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::uninit
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
                RGraphicsSceneDrawable* w = getWrapped();
                
                w->uninit(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for uninit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: getType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::getType
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
                RGraphicsSceneDrawable* w = getWrapped();
                RGraphicsSceneDrawable::Type res = 
                    
                w->getType(
                  
                );
              
            // return type: RGraphicsSceneDrawable::Type

            return RJSHelper_qcad::cpp2js_RGraphicsSceneDrawable_Type(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: isPainterPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::isPainterPath
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
                RGraphicsSceneDrawable* w = getWrapped();
                bool res = 
                    
                w->isPainterPath(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPainterPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: isText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::isText
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
                RGraphicsSceneDrawable* w = getWrapped();
                bool res = 
                    
                w->isText(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: isImage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::isImage
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
                RGraphicsSceneDrawable* w = getWrapped();
                bool res = 
                    
                w->isImage(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isImage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: setMode
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::setMode
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsSceneDrawable_Mode(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (RGraphicsSceneDrawable::Mode)
  
RGraphicsSceneDrawable::Mode a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsSceneDrawable_Mode(handler, a1);
        
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneDrawable* w = getWrapped();
                
                w->setMode(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: getMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::getMode
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsSceneDrawable_Mode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (RGraphicsSceneDrawable::Mode)
  
RGraphicsSceneDrawable::Mode a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsSceneDrawable_Mode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneDrawable* w = getWrapped();
                bool res = 
                    
                w->getMode(
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
            
    // Class: RGraphicsSceneDrawable
    // Function: setNoPlot
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::setNoPlot
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneDrawable* w = getWrapped();
                
                w->setNoPlot(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNoPlot";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: getNoPlot
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::getNoPlot
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
                RGraphicsSceneDrawable* w = getWrapped();
                bool res = 
                    
                w->getNoPlot(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNoPlot";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: setPixelUnit
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::setPixelUnit
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneDrawable* w = getWrapped();
                
                w->setPixelUnit(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPixelUnit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: getPixelUnit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::getPixelUnit
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
                RGraphicsSceneDrawable* w = getWrapped();
                bool res = 
                    
                w->getPixelUnit(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPixelUnit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: setWorkingSet
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::setWorkingSet
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneDrawable* w = getWrapped();
                
                w->setWorkingSet(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWorkingSet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: isWorkingSet
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::isWorkingSet
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
                RGraphicsSceneDrawable* w = getWrapped();
                bool res = 
                    
                w->isWorkingSet(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWorkingSet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: getPainterPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::getPainterPath
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
                RGraphicsSceneDrawable* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RPainterPath* res =
                    &
                w->getPainterPath(
                  
                );
              
            // return type: RPainterPath&

            return RJSHelper_qcad::cpp2js_RPainterPath(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPainterPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: getImage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::getImage
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
                RGraphicsSceneDrawable* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RImageData* res =
                    &
                w->getImage(
                  
                );
              
            // return type: RImageData&

            return RJSHelper_qcad::cpp2js_RImageData(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getImage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: getText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::getText
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
                RGraphicsSceneDrawable* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RTextBasedData* res =
                    &
                w->getText(
                  
                );
              
            // return type: RTextBasedData&

            return RJSHelper_qcad::cpp2js_RTextBasedData(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: getTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::getTransform
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
                RGraphicsSceneDrawable* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RTransform* res =
                    &
                w->getTransform(
                  
                );
              
            // return type: RTransform&

            return RJSHelper_qcad::cpp2js_RTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: getOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::getOffset
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
                RGraphicsSceneDrawable* w = getWrapped();
                RVector res = 
                    
                w->getOffset(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: setOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::setOffset
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
    
  // convert js parameter to cpp: o (RVector)
  
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
                RGraphicsSceneDrawable* w = getWrapped();
                
                w->setOffset(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: getDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::getDocument
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
                RGraphicsSceneDrawable* w = getWrapped();
                RDocument* res = 
                    
                w->getDocument(
                  
                );
              
            // return type: RDocument*

            return RJSHelper_qcad::cpp2js_RDocument(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: setSelected
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::setSelected
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneDrawable* w = getWrapped();
                
                w->setSelected(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSelected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsSceneDrawable
    // Function: setHighlighted
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsSceneDrawable_Wrapper::setHighlighted
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsSceneDrawable* w = getWrapped();
                
                w->setHighlighted(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHighlighted";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rgraphicsscenedrawable_wrapper.cpp"
  
