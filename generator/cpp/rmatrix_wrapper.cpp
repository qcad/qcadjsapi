
  // Auto generated
  
  // include header:
  //#include "RMatrixwrapper.h"
  //#include "header_cpp.h"
  
    #include "rmatrix_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RMatrix
    // Function: createIdentity2x2
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMatrix_WrapperSingleton::createIdentity2x2
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RMatrix res = 
                
                // call static member function:
                RMatrix::createIdentity2x2(
              
            );
          
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createIdentity2x2";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: createIdentity3x3
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMatrix_WrapperSingleton::createIdentity3x3
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RMatrix res = 
                
                // call static member function:
                RMatrix::createIdentity3x3(
              
            );
          
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createIdentity3x3";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: createIdentity
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMatrix_WrapperSingleton::createIdentity
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RMatrix res = 
                
                // call static member function:
                RMatrix::createIdentity(
              a1_cpp
    
            );
          
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createIdentity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: createRotation
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMatrix_WrapperSingleton::createRotation
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: angle (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RMatrix res = 
                
                // call static member function:
                RMatrix::createRotation(
              a1_cpp
    
            );
          
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createRotation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: create2x2
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RMatrix_WrapperSingleton::create2x2
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_double(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a11 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: a12 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: a21 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: a22 (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RMatrix res = 
                
                // call static member function:
                RMatrix::create2x2(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for create2x2";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: create3x3
    // Source: 
    // Static: true
    // Parameters: 9
    // preceding Parameters: -1

                QJSValue 
              RMatrix_WrapperSingleton::create3x3
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_double(handler, a4
  )

   && RJSHelper::is_double(handler, a5
  )

   && RJSHelper::is_double(handler, a6
  )

   && RJSHelper::is_double(handler, a7
  )

   && RJSHelper::is_double(handler, a8
  )

   && RJSHelper::is_double(handler, a9
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a11 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: a12 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: a13 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: a21 (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: a22 (double)
  
double a5_cpp;

      a5_cpp = RJSHelper::js2cpp_double(handler, a5);
        
  // convert js parameter to cpp: a23 (double)
  
double a6_cpp;

      a6_cpp = RJSHelper::js2cpp_double(handler, a6);
        
  // convert js parameter to cpp: a31 (double)
  
double a7_cpp;

      a7_cpp = RJSHelper::js2cpp_double(handler, a7);
        
  // convert js parameter to cpp: a32 (double)
  
double a8_cpp;

      a8_cpp = RJSHelper::js2cpp_double(handler, a8);
        
  // convert js parameter to cpp: a33 (double)
  
double a9_cpp;

      a9_cpp = RJSHelper::js2cpp_double(handler, a9);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RMatrix res = 
                
                // call static member function:
                RMatrix::create3x3(
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
          
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for create3x3";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: create3x1
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMatrix_WrapperSingleton::create3x1
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a11 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: a21 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: a31 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RMatrix res = 
                
                // call static member function:
                RMatrix::create3x1(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for create3x1";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: create2x3
    // Source: 
    // Static: true
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              RMatrix_WrapperSingleton::create2x3
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
  a6
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_double(handler, a4
  )

   && RJSHelper::is_double(handler, a5
  )

   && RJSHelper::is_double(handler, a6
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a11 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: a12 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: a13 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: a21 (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: a22 (double)
  
double a5_cpp;

      a5_cpp = RJSHelper::js2cpp_double(handler, a5);
        
  // convert js parameter to cpp: a23 (double)
  
double a6_cpp;

      a6_cpp = RJSHelper::js2cpp_double(handler, a6);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RMatrix res = 
                
                // call static member function:
                RMatrix::create2x3(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
            );
          
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for create2x3";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RMatrix_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RMatrix_Wrapper>("org.qcad", 1, 0, "RMatrix_Wrapper");
        qmlRegisterInterface<RMatrix_Wrapper>("RMatrix_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RMatrix* t = new RJSType_RMatrix();
          global.setProperty("RJSType_RMatrix", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RMatrix::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RMatrix_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RMatrix_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RMatrix_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RMatrix_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RMatrix_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RMatrix_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RMatrix_WrapperSingleton * s = new RMatrix_WrapperSingleton(handler);
        engine->globalObject().setProperty("RMatrix_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RMatrix.js";
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
    RMatrix_Wrapper::RMatrix_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RMatrix_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RMatrix_Wrapper::RMatrix_Wrapper(RJSApi& h, RMatrix* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RMatrix_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RMatrix_Wrapper"));
              //setObjectName("RMatrix_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RMatrix_Wrapper::~RMatrix_Wrapper() {
            //RDebug::decCounter(QString("RMatrix_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RMatrix_Wrapper"));

            //qDebug() << "RMatrix_Wrapper::~RMatrix_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RMatrix";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RMatrix_Wrapper::initConnections() {

          //setObjectName("RMatrix_Wrapper");

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
  
    // Class: RMatrix
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
RMatrix_Wrapper::RMatrix_Wrapper
                
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
                
                  //RDebug::incCounter(QString("RMatrix_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RMatrix_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: c (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RMatrix(
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
        RJSHelper_qcad::is_RMatrix(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (RMatrix)
  
RMatrix a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMatrix(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RMatrix(
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

        
            wrapped = new RMatrix(
                
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
                  

                  qWarning() << "no matching constructor variant found for RMatrix";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RMatrix
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::isValid
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
                RMatrix* w = getWrapped();
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
            
    // Class: RMatrix
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMatrix(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (RMatrix)
  
RMatrix a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMatrix(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMatrix* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RMatrix* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: RMatrix&

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: operator_equal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::operator_equal
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMatrix(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (RMatrix)
  
RMatrix a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMatrix(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMatrix* w = getWrapped();
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

                  qWarning() << "no matching function variant found for operator_equal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: operator_multiply_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::operator_multiply_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMatrix* w = getWrapped();
                RMatrix res = 
                    
                w->operator*=(
                  a1_cpp
    
                );
              
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_multiply_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: operator_multiply
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::operator_multiply
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMatrix(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (RMatrix)
  
RMatrix a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMatrix(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMatrix* w = getWrapped();
                RMatrix res = 
                    
                w->operator*(
                  a1_cpp
    
                );
              
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_multiply";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: multiplyWith
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::multiplyWith
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMatrix(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (RMatrix)
  
RMatrix a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMatrix(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMatrix* w = getWrapped();
                RMatrix res = 
                    
                w->multiplyWith(
                  a1_cpp
    
                );
              
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMatrix* w = getWrapped();
                RMatrix res = 
                    
                w->multiplyWith(
                  a1_cpp
    
                );
              
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (RVector)
  
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
                RMatrix* w = getWrapped();
                RVector res = 
                    
                w->multiplyWith(
                  a1_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for multiplyWith";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: init
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::init
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: c (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMatrix* w = getWrapped();
                
                w->init(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for init";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: reset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::reset
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
                RMatrix* w = getWrapped();
                
                w->reset(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::clear
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
                RMatrix* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: set3x3
    // Source: 
    // Static: false
    // Parameters: 9
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::set3x3
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_double(handler, a4
  )

   && RJSHelper::is_double(handler, a5
  )

   && RJSHelper::is_double(handler, a6
  )

   && RJSHelper::is_double(handler, a7
  )

   && RJSHelper::is_double(handler, a8
  )

   && RJSHelper::is_double(handler, a9
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a11 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: a12 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: a13 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: a21 (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: a22 (double)
  
double a5_cpp;

      a5_cpp = RJSHelper::js2cpp_double(handler, a5);
        
  // convert js parameter to cpp: a23 (double)
  
double a6_cpp;

      a6_cpp = RJSHelper::js2cpp_double(handler, a6);
        
  // convert js parameter to cpp: a31 (double)
  
double a7_cpp;

      a7_cpp = RJSHelper::js2cpp_double(handler, a7);
        
  // convert js parameter to cpp: a32 (double)
  
double a8_cpp;

      a8_cpp = RJSHelper::js2cpp_double(handler, a8);
        
  // convert js parameter to cpp: a33 (double)
  
double a9_cpp;

      a9_cpp = RJSHelper::js2cpp_double(handler, a9);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMatrix* w = getWrapped();
                
                w->set3x3(
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

                  qWarning() << "no matching function variant found for set3x3";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: set3x1
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::set3x1
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a11 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: a21 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: a31 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMatrix* w = getWrapped();
                
                w->set3x1(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for set3x1";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: set2x3
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::set2x3
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
  a6
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_double(handler, a4
  )

   && RJSHelper::is_double(handler, a5
  )

   && RJSHelper::is_double(handler, a6
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a11 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: a12 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: a13 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: a21 (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: a22 (double)
  
double a5_cpp;

      a5_cpp = RJSHelper::js2cpp_double(handler, a5);
        
  // convert js parameter to cpp: a23 (double)
  
double a6_cpp;

      a6_cpp = RJSHelper::js2cpp_double(handler, a6);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMatrix* w = getWrapped();
                
                w->set2x3(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for set2x3";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: set
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::set
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

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: c (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: v (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMatrix* w = getWrapped();
                
                w->set(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for set";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: get
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::get
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: c (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMatrix* w = getWrapped();
                double res = 
                    
                w->get(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for get";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: getRows
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::getRows
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
                RMatrix* w = getWrapped();
                int res = 
                    
                w->getRows(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getRows";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: getCols
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::getCols
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
                RMatrix* w = getWrapped();
                int res = 
                    
                w->getCols(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCols";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: rref
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::rref
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
                RMatrix* w = getWrapped();
                bool res = 
                    
                w->rref(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rref";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: getInverse
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::getInverse
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
                RMatrix* w = getWrapped();
                RMatrix res = 
                    
                w->getInverse(
                  
                );
              
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getInverse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: getTransposed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::getTransposed
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
                RMatrix* w = getWrapped();
                RMatrix res = 
                    
                w->getTransposed(
                  
                );
              
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTransposed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: getAppended
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::getAppended
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMatrix(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (RMatrix)
  
RMatrix a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMatrix(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMatrix* w = getWrapped();
                RMatrix res = 
                    
                w->getAppended(
                  a1_cpp
    
                );
              
            // return type: RMatrix

            return RJSHelper_qcad::cpp2js_RMatrix(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAppended";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: isRotationAndUniformScale
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::isRotationAndUniformScale
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
                RMatrix* w = getWrapped();
                bool res = 
                    
                w->isRotationAndUniformScale(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRotationAndUniformScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: getUniformScaleFactor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::getUniformScaleFactor
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
                RMatrix* w = getWrapped();
                double res = 
                    
                w->getUniformScaleFactor(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getUniformScaleFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMatrix
    // Function: getRotationAngle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMatrix_Wrapper::getRotationAngle
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
                RMatrix* w = getWrapped();
                double res = 
                    
                w->getRotationAngle(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getRotationAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  