
  // Auto generated
  
  // include header:
  //#include "RTransformwrapper.h"
  //#include "header_cpp.h"
  
    #include "rtransform_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RTransform*> RTransform_Wrapper::basecasters_RTransform;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RTransform
    // Function: squareToQuad
    // Source: QTransform
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransform_WrapperSingleton::squareToQuad
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPolygonF(handler, a1
  )

   && RJSHelper::is_QTransform(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: square (QPolygonF)
  
QPolygonF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPolygonF(handler, a1);
        
  // convert js parameter to cpp: result (QTransform)
  
QTransform a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QTransform(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QTransform::squareToQuad(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for squareToQuad";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: quadToSquare
    // Source: QTransform
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransform_WrapperSingleton::quadToSquare
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPolygonF(handler, a1
  )

   && RJSHelper::is_QTransform(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: quad (QPolygonF)
  
QPolygonF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPolygonF(handler, a1);
        
  // convert js parameter to cpp: result (QTransform)
  
QTransform a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QTransform(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QTransform::quadToSquare(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for quadToSquare";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: quadToQuad
    // Source: QTransform
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RTransform_WrapperSingleton::quadToQuad
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
        RJSHelper::is_QPolygonF(handler, a1
  )

   && RJSHelper::is_QPolygonF(handler, a2
  )

   && RJSHelper::is_QTransform(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: one (QPolygonF)
  
QPolygonF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPolygonF(handler, a1);
        
  // convert js parameter to cpp: two (QPolygonF)
  
QPolygonF a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPolygonF(handler, a2);
        
  // convert js parameter to cpp: result (QTransform)
  
QTransform a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QTransform(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QTransform::quadToQuad(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for quadToQuad";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: fromTranslate
    // Source: QTransform
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransform_WrapperSingleton::fromTranslate
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
            QTransform res = 
                
                // call static member function:
                QTransform::fromTranslate(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QTransform

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromTranslate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: fromScale
    // Source: QTransform
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransform_WrapperSingleton::fromScale
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
            QTransform res = 
                
                // call static member function:
                QTransform::fromScale(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QTransform

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RTransform_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RTransform_Wrapper>("org.qcad", 1, 0, "RTransform_Wrapper");
        qmlRegisterInterface<RTransform_Wrapper>("RTransform_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RTransform* t = new RJSType_RTransform();
          global.setProperty("RJSType_RTransform", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RTransform::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RTransform_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RTransform_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RTransform_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RTransform_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RTransform_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RTransform_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RTransform_WrapperSingleton * s = new RTransform_WrapperSingleton(handler);
        engine->globalObject().setProperty("RTransform_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RTransform.js";
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
    RTransform_Wrapper::RTransform_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RTransform_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RTransform_Wrapper::RTransform_Wrapper(RJSApi& h, RTransform* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RTransform_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTransform_Wrapper"));
              //setObjectName("RTransform_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RTransform_Wrapper::~RTransform_Wrapper() {
            //RDebug::decCounter(QString("RTransform_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RTransform_Wrapper"));

            //qDebug() << "RTransform_Wrapper::~RTransform_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RTransform";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RTransform_Wrapper::initConnections() {

          //setObjectName("RTransform_Wrapper");

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
  
    // Class: RTransform
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RTransform_Wrapper::RTransform_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RTransform_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RTransform_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTransform(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RTransform";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RTransform
    // Function: isAffine
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::isAffine
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
                RTransform* w = getWrapped();
                bool res = 
                    
                w->isAffine(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAffine";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: isIdentity
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::isIdentity
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
                RTransform* w = getWrapped();
                bool res = 
                    
                w->isIdentity(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isIdentity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: isInvertible
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::isInvertible
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
                RTransform* w = getWrapped();
                bool res = 
                    
                w->isInvertible(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isInvertible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: isScaling
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::isScaling
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
                RTransform* w = getWrapped();
                bool res = 
                    
                w->isScaling(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isScaling";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: isRotating
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::isRotating
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
                RTransform* w = getWrapped();
                bool res = 
                    
                w->isRotating(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRotating";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: isTranslating
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::isTranslating
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
                RTransform* w = getWrapped();
                bool res = 
                    
                w->isTranslating(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTranslating";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: type
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::type
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
                RTransform* w = getWrapped();
                QTransform::TransformationType res = 
                    
                w->type(
                  
                );
              
            // return type: QTransform::TransformationType

            return RJSHelper::cpp2js_QTransform_TransformationType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: determinant
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::determinant
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
                RTransform* w = getWrapped();
                qreal res = 
                    
                w->determinant(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for determinant";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: m11
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::m11
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
                RTransform* w = getWrapped();
                qreal res = 
                    
                w->m11(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m11";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: m12
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::m12
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
                RTransform* w = getWrapped();
                qreal res = 
                    
                w->m12(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m12";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: m13
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::m13
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
                RTransform* w = getWrapped();
                qreal res = 
                    
                w->m13(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m13";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: m21
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::m21
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
                RTransform* w = getWrapped();
                qreal res = 
                    
                w->m21(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m21";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: m22
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::m22
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
                RTransform* w = getWrapped();
                qreal res = 
                    
                w->m22(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m22";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: m23
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::m23
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
                RTransform* w = getWrapped();
                qreal res = 
                    
                w->m23(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m23";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: m31
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::m31
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
                RTransform* w = getWrapped();
                qreal res = 
                    
                w->m31(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m31";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: m32
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::m32
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
                RTransform* w = getWrapped();
                qreal res = 
                    
                w->m32(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m32";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: m33
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::m33
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
                RTransform* w = getWrapped();
                qreal res = 
                    
                w->m33(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m33";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: dx
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::dx
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
                RTransform* w = getWrapped();
                qreal res = 
                    
                w->dx(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dx";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: dy
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::dy
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
                RTransform* w = getWrapped();
                qreal res = 
                    
                w->dy(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: setMatrix
    // Source: QTransform
    // Static: false
    // Parameters: 9
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::setMatrix
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5, 
  const QJSValue& 
  a6, 
  const QJSValue& 
  a7, 
  const QJSValue& 
  a8, 
  const QJSValue& 
  a9
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_qreal(handler, a3
  )

   && RJSHelper::is_qreal(handler, a4
  )

   && RJSHelper::is_qreal(handler, a5
  )

   && RJSHelper::is_qreal(handler, a6
  )

   && RJSHelper::is_qreal(handler, a7
  )

   && RJSHelper::is_qreal(handler, a8
  )

   && RJSHelper::is_qreal(handler, a9
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m11 (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: m12 (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: m13 (qreal)
  
qreal a3_cpp;

      a3_cpp = RJSHelper::js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: m21 (qreal)
  
qreal a4_cpp;

      a4_cpp = RJSHelper::js2cpp_qreal(handler, a4);
        
  // convert js parameter to cpp: m22 (qreal)
  
qreal a5_cpp;

      a5_cpp = RJSHelper::js2cpp_qreal(handler, a5);
        
  // convert js parameter to cpp: m23 (qreal)
  
qreal a6_cpp;

      a6_cpp = RJSHelper::js2cpp_qreal(handler, a6);
        
  // convert js parameter to cpp: m31 (qreal)
  
qreal a7_cpp;

      a7_cpp = RJSHelper::js2cpp_qreal(handler, a7);
        
  // convert js parameter to cpp: m32 (qreal)
  
qreal a8_cpp;

      a8_cpp = RJSHelper::js2cpp_qreal(handler, a8);
        
  // convert js parameter to cpp: m33 (qreal)
  
qreal a9_cpp;

      a9_cpp = RJSHelper::js2cpp_qreal(handler, a9);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                
                w->setMatrix(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    , a9_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMatrix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: inverted
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::inverted
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
                RTransform* w = getWrapped();
                QTransform res = 
                    
                w->inverted(
                  
                );
              
            // return type: QTransform

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for inverted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: adjoint
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::adjoint
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
                RTransform* w = getWrapped();
                QTransform res = 
                    
                w->adjoint(
                  
                );
              
            // return type: QTransform

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for adjoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: transposed
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::transposed
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
                RTransform* w = getWrapped();
                QTransform res = 
                    
                w->transposed(
                  
                );
              
            // return type: QTransform

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for transposed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: shear
    // Source: QTransform
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::shear
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
    
  // convert js parameter to cpp: sh (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: sv (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QTransform* res =
                    &
                w->shear(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QTransform&

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for shear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: reset
    // Source: QTransform
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::reset
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
                RTransform* w = getWrapped();
                
                w->reset(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: map
    // Source: QTransform
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::map
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                QPoint res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                QPointF res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QLine(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (QLine)
  
QLine a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLine(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                QLine res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QLine

            return RJSHelper::cpp2js_QLine(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QLineF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (QLineF)
  
QLineF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLineF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                QLineF res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QLineF

            return RJSHelper::cpp2js_QLineF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPolygonF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (QPolygonF)
  
QPolygonF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPolygonF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                QPolygonF res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QPolygonF

            return RJSHelper::cpp2js_QPolygonF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPolygon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (QPolygon)
  
QPolygon a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPolygon(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                QPolygon res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QPolygon

            return RJSHelper::cpp2js_QPolygon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QRegion(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRegion)
  
QRegion a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegion(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                QRegion res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPainterPath)
  
QPainterPath a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                QPainterPath res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QPainterPath

            return RJSHelper::cpp2js_QPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for map";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: mapToPolygon
    // Source: QTransform
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::mapToPolygon
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                QPolygon res = 
                    
                w->mapToPolygon(
                  a1_cpp
    
                );
              
            // return type: QPolygon

            return RJSHelper::cpp2js_QPolygon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapToPolygon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: mapRect
    // Source: QTransform
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::mapRect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                QRect res = 
                    
                w->mapRect(
                  a1_cpp
    
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QRectF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                QRectF res = 
                    
                w->mapRect(
                  a1_cpp
    
                );
              
            // return type: QRectF

            return RJSHelper::cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: operator_multiply_assign
    // Source: QTransform
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::operator_multiply_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTransform(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTransform)
  
QTransform a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTransform(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QTransform* res =
                    &
                w->operator*=(
                  a1_cpp
    
                );
              
            // return type: QTransform&

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_multiply_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: translate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::translate
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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RTransform* res =
                    &
                w->translate(
                  a1_cpp
    , a2_cpp
    
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

                  qWarning() << "no matching function variant found for translate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: scale
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::scale
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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RTransform* res =
                    &
                w->scale(
                  a1_cpp
    , a2_cpp
    
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

                  qWarning() << "no matching function variant found for scale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: rotateRadians
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::rotateRadians
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

   && RJSHelper::is_Qt_Axis(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: angle (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: axis (Qt::Axis)
  
Qt::Axis a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::ZAxis;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_Axis(handler, a2);
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
                RTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RTransform* res =
                    &
                w->rotateRadians(
                  a1_cpp
    , a2_cpp
    
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

                  qWarning() << "no matching function variant found for rotateRadians";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: rotate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::rotate
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

   && RJSHelper::is_Qt_Axis(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: angle (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: axis (Qt::Axis)
  
Qt::Axis a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::ZAxis;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_Axis(handler, a2);
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
                RTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RTransform* res =
                    &
                w->rotate(
                  a1_cpp
    , a2_cpp
    
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

                  qWarning() << "no matching function variant found for rotate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: getOps
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::getOps
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
                RTransform* w = getWrapped();
                QList<RTransformOp> res = 
                    
                w->getOps(
                  
                );
              
            // return type: QList<RTransformOp>

            return RJSHelper_qcad::cpp2js_QList_RTransformOp(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOps";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rtransform_wrapper.cpp"
  
