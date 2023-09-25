
  // Auto generated
  
  // include header:
  //#include "RDimArcLengthDatawrapper.h"
  //#include "header_cpp.h"
  
    #include "rdimarclengthdata_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RDimArcLengthData
    // Function: getDefaultDrawOrder
    // Source: REntityData
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_WrapperSingleton::getDefaultDrawOrder
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                REntityData::getDefaultDrawOrder(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDefaultDrawOrder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RDimArcLengthData_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RDimArcLengthData_Wrapper>("org.qcad", 1, 0, "RDimArcLengthData_Wrapper");
        qmlRegisterInterface<RDimArcLengthData_Wrapper>("RDimArcLengthData_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RDimArcLengthData* t = new RJSType_RDimArcLengthData();
          global.setProperty("RJSType_RDimArcLengthData", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RDimArcLengthData::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RDimArcLengthData_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RDimArcLengthData_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RDimArcLengthData_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RDimArcLengthData_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RDimArcLengthData_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RDimArcLengthData_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RDimArcLengthData_WrapperSingleton * s = new RDimArcLengthData_WrapperSingleton(handler);
        engine->globalObject().setProperty("RDimArcLengthData_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RDimArcLengthData.js";
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
    RDimArcLengthData_Wrapper::RDimArcLengthData_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RDimArcLengthData_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RDimArcLengthData_Wrapper::RDimArcLengthData_Wrapper(RJSApi& h, RDimArcLengthData* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RDimArcLengthData_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RDimArcLengthData_Wrapper"));
              //setObjectName("RDimArcLengthData_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RDimArcLengthData_Wrapper::~RDimArcLengthData_Wrapper() {
            //RDebug::decCounter(QString("RDimArcLengthData_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RDimArcLengthData_Wrapper"));

            //qDebug() << "RDimArcLengthData_Wrapper::~RDimArcLengthData_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RDimArcLengthData";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RDimArcLengthData_Wrapper::initConnections() {

          //setObjectName("RDimArcLengthData_Wrapper");

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
  
    // Class: RDimArcLengthData
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
RDimArcLengthData_Wrapper::RDimArcLengthData_Wrapper
                
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
  a4
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RDimArcLengthData_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RDimArcLengthData_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDimensionData_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper_qcad::is_RVector(handler, a3
  )

   && RJSHelper_qcad::is_RVector(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dimData (RDimensionData)
  

          // non copyable:
          RDimensionData*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDimensionData_ptr(handler, a1);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: extensionLine1End (RVector)
  
RVector a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a3);
        
  // convert js parameter to cpp: extensionLine2End (RVector)
  
RVector a4_cpp;

      a4_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a4);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RDimArcLengthData(
                *a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
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

        
            wrapped = new RDimArcLengthData(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RDimArcLengthData";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RDimArcLengthData
    // Function: getDocument
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDocument
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
                RDimArcLengthData* w = getWrapped();
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
            
    // Class: RDimArcLengthData
    // Function: setDocument
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDocument
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setDocument(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: isPointType
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::isPointType
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->isPointType(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPointType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getClosestSubEntityId
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getClosestSubEntityId
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: range (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: ignoreComplex (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                RObject::Id res = 
                    
                w->getClosestSubEntityId(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClosestSubEntityId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getClosestShape
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getClosestShape
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: range (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RNANDOUBLE;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        
  // convert js parameter to cpp: ignoreComplex (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
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
                RDimArcLengthData* w = getWrapped();
                QSharedPointer<RShape> res = 
                    
                w->getClosestShape(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QSharedPointer<RShape>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClosestShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: copyAttributesFrom
    // Source: REntityData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::copyAttributesFrom
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntityData_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityData (REntityData)
  

          // non copyable:
          REntityData*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntityData_ptr(handler, a1);
        
  // convert js parameter to cpp: copyBlockId (bool)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->copyAttributesFrom(
                  *a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for copyAttributesFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setZ
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setZ
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
    
  // convert js parameter to cpp: z (double)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setZ(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setZ";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getBoundingBoxes
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getBoundingBoxes
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ignoreEmpty (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
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
                RDimArcLengthData* w = getWrapped();
                QList<RBox> res = 
                    
                w->getBoundingBoxes(
                  a1_cpp
    
                );
              
            // return type: QList<RBox>

            return RJSHelper_qcad::cpp2js_QList_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBoundingBoxes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getHull
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getHull
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: offset (double)
  
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
                RDimArcLengthData* w = getWrapped();
                RPolyline res = 
                    
                w->getHull(
                  a1_cpp
    
                );
              
            // return type: RPolyline

            return RJSHelper_qcad::cpp2js_RPolyline(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHull";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: isUpdatesEnabled
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::isUpdatesEnabled
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->isUpdatesEnabled(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isUpdatesEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setUpdatesEnabled
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setUpdatesEnabled
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
                RDimArcLengthData* w = getWrapped();
                
                w->setUpdatesEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUpdatesEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: cloneOnChange
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::cloneOnChange
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->cloneOnChange(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cloneOnChange";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: isSelected
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::isSelected
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->isSelected(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSelected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setSelected
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setSelected
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
                RDimArcLengthData* w = getWrapped();
                
                w->setSelected(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSelected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: isSelectedWorkingSet
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::isSelectedWorkingSet
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->isSelectedWorkingSet(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSelectedWorkingSet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setSelectedWorkingSet
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setSelectedWorkingSet
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
                RDimArcLengthData* w = getWrapped();
                
                w->setSelectedWorkingSet(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSelectedWorkingSet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDrawOrder
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDrawOrder
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
                RDimArcLengthData* w = getWrapped();
                int res = 
                    
                w->getDrawOrder(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDrawOrder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDrawOrder
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDrawOrder
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
    
  // convert js parameter to cpp: drawOrder (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setDrawOrder(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDrawOrder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setLayerId
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setLayerId
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setLayerId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayerId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getLayerId
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getLayerId
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
                RDimArcLengthData* w = getWrapped();
                RLayer::Id res = 
                    
                w->getLayerId(
                  
                );
              
            // return type: RLayer::Id

            return RJSHelper_qcad::cpp2js_RLayer_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setLayerName
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setLayerName
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
    
  // convert js parameter to cpp: layerName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setLayerName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayerName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getLayerName
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getLayerName
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
                RDimArcLengthData* w = getWrapped();
                QString res = 
                    
                w->getLayerName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setBlockId
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setBlockId
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
RBlock::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setBlockId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getBlockId
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getBlockId
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
                RDimArcLengthData* w = getWrapped();
                RBlock::Id res = 
                    
                w->getBlockId(
                  
                );
              
            // return type: RBlock::Id

            return RJSHelper_qcad::cpp2js_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setParentId
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setParentId
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parentId (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setParentId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setParentId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getParentId
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getParentId
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
                RDimArcLengthData* w = getWrapped();
                RObject::Id res = 
                    
                w->getParentId(
                  
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getParentId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getBlockName
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getBlockName
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
                RDimArcLengthData* w = getWrapped();
                QString res = 
                    
                w->getBlockName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setLinetypeId
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setLinetypeId
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetype_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeId (RLinetype::Id)
  
RLinetype::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetype_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setLinetypeId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getLinetypeId
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getLinetypeId
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
                RDimArcLengthData* w = getWrapped();
                RLinetype::Id res = 
                    
                w->getLinetypeId(
                  
                );
              
            // return type: RLinetype::Id

            return RJSHelper_qcad::cpp2js_RLinetype_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setLinetypePattern
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setLinetypePattern
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetypePattern(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RLinetypePattern)
  
RLinetypePattern a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetypePattern(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setLinetypePattern(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getLinetypePattern
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getLinetypePattern
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
                RDimArcLengthData* w = getWrapped();
                RLinetypePattern res = 
                    
                w->getLinetypePattern(
                  
                );
              
            // return type: RLinetypePattern

            return RJSHelper_qcad::cpp2js_RLinetypePattern(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setLinetypeScale
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setLinetypeScale
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
    
  // convert js parameter to cpp: linetypeScale (double)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setLinetypeScale(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypeScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getLinetypeScale
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getLinetypeScale
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getLinetypeScale(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getLineweight
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getLineweight
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
                RDimArcLengthData* w = getWrapped();
                RLineweight::Lineweight res = 
                    
                w->getLineweight(
                  
                );
              
            // return type: RLineweight::Lineweight

            return RJSHelper_qcad::cpp2js_RLineweight_Lineweight(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setLineweight
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setLineweight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLineweight_Lineweight(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lineweight (RLineweight::Lineweight)
  
RLineweight::Lineweight a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLineweight_Lineweight(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setLineweight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setColor
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setColor
              (
                
  const QJSValue& 
  a1
              ) 
              
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
                RDimArcLengthData* w = getWrapped();
                
                w->setColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getColor
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getColor
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
                RDimArcLengthData* w = getWrapped();
                RColor res = 
                    
                w->getColor(
                  
                );
              
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDisplayColor
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDisplayColor
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
                RDimArcLengthData* w = getWrapped();
                RColor res = 
                    
                w->getDisplayColor(
                  
                );
              
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDisplayColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getInternalReferencePoints
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getInternalReferencePoints
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_ProjectionRenderingHint(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hint (RS::ProjectionRenderingHint)
  
RS::ProjectionRenderingHint a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RS::RenderTop;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RS_ProjectionRenderingHint(handler, a1);
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
                RDimArcLengthData* w = getWrapped();
                QList<RRefPoint> res = 
                    
                w->getInternalReferencePoints(
                  a1_cpp
    
                );
              
            // return type: QList<RRefPoint>

            return RJSHelper_qcad::cpp2js_QList_RRefPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getInternalReferencePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getEndPoints
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getEndPoints
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_RBOX;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
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
                RDimArcLengthData* w = getWrapped();
                QList<RVector> res = 
                    
                w->getEndPoints(
                  a1_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEndPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getMiddlePoints
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getMiddlePoints
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_RBOX;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
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
                RDimArcLengthData* w = getWrapped();
                QList<RVector> res = 
                    
                w->getMiddlePoints(
                  a1_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMiddlePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getCenterPoints
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getCenterPoints
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_RBOX;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
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
                RDimArcLengthData* w = getWrapped();
                QList<RVector> res = 
                    
                w->getCenterPoints(
                  a1_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCenterPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getArcReferencePoints
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getArcReferencePoints
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_RBOX;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
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
                RDimArcLengthData* w = getWrapped();
                QList<RVector> res = 
                    
                w->getArcReferencePoints(
                  a1_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getArcReferencePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getPointsWithDistanceToEnd
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getPointsWithDistanceToEnd
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RBox(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: distance (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: from (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RS::FromAny;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RDEFAULT_RBOX;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a3);
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
                RDimArcLengthData* w = getWrapped();
                QList<RVector> res = 
                    
                w->getPointsWithDistanceToEnd(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointsWithDistanceToEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getClosestPointOnEntity
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getClosestPointOnEntity
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: range (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RNANDOUBLE;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
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
                RDimArcLengthData* w = getWrapped();
                RVector res = 
                    
                w->getClosestPointOnEntity(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClosestPointOnEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getIntersectionPoints
    // Source: REntityData
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getIntersectionPoints
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
  a5
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntityData_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper_qcad::is_RBox(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (REntityData)
  

          // non copyable:
          REntityData*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntityData_ptr(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: same (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RDEFAULT_RBOX;
          }
          else {
            a4_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a4);
          }
        
  // convert js parameter to cpp: ignoreComplex (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = true;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
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
                RDimArcLengthData* w = getWrapped();
                QList<RVector> res = 
                    
                w->getIntersectionPoints(
                  *a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RBox(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RDEFAULT_RBOX;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a3);
          }
        
  // convert js parameter to cpp: ignoreComplex (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = true;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
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
                RDimArcLengthData* w = getWrapped();
                QList<RVector> res = 
                    
                w->getIntersectionPoints(
                  *a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntersectionPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getVectorTo
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getVectorTo
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: strictRange (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RMAXDOUBLE;
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
                RDimArcLengthData* w = getWrapped();
                RVector res = 
                    
                w->getVectorTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVectorTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: isInside
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::isInside
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: box (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->isInside(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isInside";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: isOnEntity
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::isOnEntity
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: tolerance (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RDEFAULT_TOLERANCE_1E_MIN4;
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->isOnEntity(
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

                  qWarning() << "no matching function variant found for isOnEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: flipHorizontal
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::flipHorizontal
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->flipHorizontal(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for flipHorizontal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: flipVertical
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::flipVertical
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->flipVertical(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for flipVertical";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: stretch
    // Source: REntityData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::stretch
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPolyline(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: area (RPolyline)
  
RPolyline a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPolyline(handler, a1);
        
  // convert js parameter to cpp: offset (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->stretch(
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

                  qWarning() << "no matching function variant found for stretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setAutoUpdatesBlocked
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setAutoUpdatesBlocked
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
                RDimArcLengthData* w = getWrapped();
                
                w->setAutoUpdatesBlocked(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoUpdatesBlocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getBoundingBox
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getBoundingBox
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ignoreEmpty (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
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
                RDimArcLengthData* w = getWrapped();
                RBox res = 
                    
                w->getBoundingBox(
                  a1_cpp
    
                );
              
            // return type: RBox

            return RJSHelper_qcad::cpp2js_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBoundingBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: render
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::render
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
                RDimArcLengthData* w = getWrapped();
                
                w->render(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for render";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: updateBoundingBox
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::updateBoundingBox
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: box (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->updateBoundingBox(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateBoundingBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: updateTextPositionCenter
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::updateTextPositionCenter
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->updateTextPositionCenter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateTextPositionCenter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: updateTextPositionSide
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::updateTextPositionSide
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->updateTextPositionSide(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateTextPositionSide";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: updateTextData
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::updateTextData
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTextData(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: d (RTextData)
  
RTextData a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTextData(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->updateTextData(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateTextData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: updateShapes
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::updateShapes
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_QSharedPointer_RShape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QList<QSharedPointer<RShape>>)
  
QList<QSharedPointer<RShape>> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_QSharedPointer_RShape(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->updateShapes(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateShapes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: updateArrowPos1
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::updateArrowPos1
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->updateArrowPos1(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateArrowPos1";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: updateArrowPos2
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::updateArrowPos2
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->updateArrowPos2(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateArrowPos2";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: clearStyleOverrides
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::clearStyleOverrides
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
                RDimArcLengthData* w = getWrapped();
                
                w->clearStyleOverrides(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearStyleOverrides";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getShapes
    // Source: RDimensionData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getShapes
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: queryBox (RBox)
  
RBox a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_RBOX;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
          }
        
  // convert js parameter to cpp: ignoreComplex (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: segment (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
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
                RDimArcLengthData* w = getWrapped();
                QList<QSharedPointer<RShape>> res = 
                    
                w->getShapes(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QList<QSharedPointer<RShape>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getShapes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getPointOnEntity
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getPointOnEntity
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
                RDimArcLengthData* w = getWrapped();
                RVector res = 
                    
                w->getPointOnEntity(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointOnEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDefinitionPoint
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDefinitionPoint
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
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDefinitionPoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDefinitionPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDefinitionPoint
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDefinitionPoint
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
                RDimArcLengthData* w = getWrapped();
                RVector res = 
                    
                w->getDefinitionPoint(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDefinitionPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setText
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setText
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
    
  // convert js parameter to cpp: t (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setText(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getText
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getText
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
                RDimArcLengthData* w = getWrapped();
                QString res = 
                    
                w->getText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setUpperTolerance
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setUpperTolerance
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
    
  // convert js parameter to cpp: t (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setUpperTolerance(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUpperTolerance";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setLowerTolerance
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setLowerTolerance
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
    
  // convert js parameter to cpp: t (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setLowerTolerance(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLowerTolerance";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setTextPosition
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setTextPosition
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
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setTextPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getTextPosition
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getTextPosition
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
                RDimArcLengthData* w = getWrapped();
                RVector res = 
                    
                w->getTextPosition(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTextPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setFontName
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setFontName
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
    
  // convert js parameter to cpp: fn (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setFontName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getFontName
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getFontName
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
                RDimArcLengthData* w = getWrapped();
                QString res = 
                    
                w->getFontName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFontName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimBlockName
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimBlockName
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
    
  // convert js parameter to cpp: bn (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setDimBlockName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimBlockName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimBlockName
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimBlockName
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
                RDimArcLengthData* w = getWrapped();
                QString res = 
                    
                w->getDimBlockName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimBlockName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: hasOverrides
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::hasOverrides
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->hasOverrides(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasOverrides";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: hasOverride
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::hasOverride
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->hasOverride(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getOverrides
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getOverrides
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
                RDimArcLengthData* w = getWrapped();
                RDimStyleData res = 
                    
                w->getOverrides(
                  
                );
              
            // return type: RDimStyleData

            return RJSHelper_qcad::cpp2js_RDimStyleData(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOverrides";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimXVariant
    // Source: RDimensionData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimXVariant
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        
  // convert js parameter to cpp: v (QVariant)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDimXVariant(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimXVariant";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimXDouble
    // Source: RDimensionData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimXDouble
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        
  // convert js parameter to cpp: v (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setDimXDouble(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimXDouble";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimXInt
    // Source: RDimensionData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimXInt
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        
  // convert js parameter to cpp: v (int)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDimXInt(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimXInt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimXBool
    // Source: RDimensionData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimXBool
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        
  // convert js parameter to cpp: v (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setDimXBool(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimXBool";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimXColor
    // Source: RDimensionData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimXColor
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

   && RJSHelper_qcad::is_RColor(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        
  // convert js parameter to cpp: v (RColor)
  
RColor a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setDimXColor(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimXColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimXVariant
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimXVariant
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                QVariant res = 
                    
                w->getDimXVariant(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimXVariant";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getVariantOverride
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getVariantOverride
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                QVariant res = 
                    
                w->getVariantOverride(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVariantOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimXDouble
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimXDouble
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getDimXDouble(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimXDouble";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDoubleOverride
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDoubleOverride
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getDoubleOverride(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDoubleOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimXInt
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimXInt
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                int res = 
                    
                w->getDimXInt(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimXInt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getIntOverride
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getIntOverride
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                int res = 
                    
                w->getIntOverride(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimXBool
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimXBool
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->getDimXBool(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimXBool";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getBoolOverride
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getBoolOverride
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->getBoolOverride(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBoolOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimXColor
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimXColor
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                RColor res = 
                    
                w->getDimXColor(
                  a1_cpp
    
                );
              
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimXColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getColorOverride
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getColorOverride
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                RColor res = 
                    
                w->getColorOverride(
                  a1_cpp
    
                );
              
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColorOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimlfac
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimlfac
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getDimlfac(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimlfac";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimlfac
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimlfac
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDimlfac(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimlfac";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getLinearFactor
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getLinearFactor
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getLinearFactor(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinearFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setLinearFactor
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setLinearFactor
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
                RDimArcLengthData* w = getWrapped();
                
                w->setLinearFactor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinearFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimscale
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimscale
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getDimscale(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimscale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimscale
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimscale
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDimscale(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimscale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: isArrow1Flipped
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::isArrow1Flipped
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->isArrow1Flipped(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isArrow1Flipped";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setArrow1Flipped
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setArrow1Flipped
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
                RDimArcLengthData* w = getWrapped();
                
                w->setArrow1Flipped(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setArrow1Flipped";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: isArrow2Flipped
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::isArrow2Flipped
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->isArrow2Flipped(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isArrow2Flipped";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setArrow2Flipped
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setArrow2Flipped
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
                RDimArcLengthData* w = getWrapped();
                
                w->setArrow2Flipped(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setArrow2Flipped";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: isExtLineFix
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::isExtLineFix
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->isExtLineFix(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isExtLineFix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setExtLineFix
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setExtLineFix
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
                RDimArcLengthData* w = getWrapped();
                
                w->setExtLineFix(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setExtLineFix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getExtLineFixLength
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getExtLineFixLength
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getExtLineFixLength(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getExtLineFixLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setExtLineFixLength
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setExtLineFixLength
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
    
  // convert js parameter to cpp: v (double)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setExtLineFixLength(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setExtLineFixLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: adjustExtensionLineFixLength
    // Source: RDimensionData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::adjustExtensionLineFixLength
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

   && RJSHelper_qcad::is_RLine(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: extLine1 (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        
  // convert js parameter to cpp: extLine2 (RLine)
  
RLine a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a2);
        
  // convert js parameter to cpp: addDimExe (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
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
                RDimArcLengthData* w = getWrapped();
                
                w->adjustExtensionLineFixLength(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for adjustExtensionLineFixLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: hasSpaceForArrows
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::hasSpaceForArrows
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->hasSpaceForArrows(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasSpaceForArrows";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDistanceTo
    // Source: RDimensionData
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDistanceTo
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
  a5
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_double(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: limited (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: range (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 0.0;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        
  // convert js parameter to cpp: draft (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: strictRange (double)
  
double a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = RMAXDOUBLE;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_double(handler, a5);
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getDistanceTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDistanceTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: intersectsWith
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::intersectsWith
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->intersectsWith(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersectsWith";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: clickReferencePoint
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::clickReferencePoint
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
    
  // convert js parameter to cpp: referencePoint (RVector)
  
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->clickReferencePoint(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clickReferencePoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: scaleVisualProperties
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::scaleVisualProperties
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
    
  // convert js parameter to cpp: scaleFactor (double)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->scaleVisualProperties(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for scaleVisualProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimexo
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimexo
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getDimexo(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimexo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimexo
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimexo
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
    
  // convert js parameter to cpp: v (double)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDimexo(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimexo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimexe
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimexe
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getDimexe(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimexe";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimexe
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimexe
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
    
  // convert js parameter to cpp: v (double)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDimexe(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimexe";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimasz
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimasz
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getDimasz(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimasz";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimasz
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimasz
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
    
  // convert js parameter to cpp: v (double)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDimasz(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimasz";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimdli
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimdli
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getDimdli(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimdli";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimdli
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimdli
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
    
  // convert js parameter to cpp: v (double)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDimdli(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimdli";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimgap
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimgap
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getDimgap(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimgap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimgap
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimgap
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
    
  // convert js parameter to cpp: v (double)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDimgap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimgap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimtxt
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimtxt
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getDimtxt(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimtxt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimtxt
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimtxt
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
    
  // convert js parameter to cpp: t (double)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDimtxt(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimtxt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimlunit
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimlunit
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
                RDimArcLengthData* w = getWrapped();
                int res = 
                    
                w->getDimlunit(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimlunit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimlunit
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimlunit
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
    
  // convert js parameter to cpp: l (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setDimlunit(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimlunit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimjust
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimjust
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
                RDimArcLengthData* w = getWrapped();
                int res = 
                    
                w->getDimjust(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimjust";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimtad
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimtad
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
                RDimArcLengthData* w = getWrapped();
                int res = 
                    
                w->getDimtad(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimtad";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimtad
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimtad
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
    
  // convert js parameter to cpp: v (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setDimtad(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimtad";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimtih
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimtih
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->getDimtih(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimtih";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimtih
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimtih
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
    
  // convert js parameter to cpp: v (bool)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDimtih(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimtih";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimtsz
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimtsz
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getDimtsz(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimtsz";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimtsz
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimtsz
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
    
  // convert js parameter to cpp: t (double)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDimtsz(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimtsz";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimzin
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimzin
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
                RDimArcLengthData* w = getWrapped();
                int res = 
                    
                w->getDimzin(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimzin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimzin
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimzin
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
    
  // convert js parameter to cpp: v (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setDimzin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimzin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimaunit
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimaunit
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
                RDimArcLengthData* w = getWrapped();
                int res = 
                    
                w->getDimaunit(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimaunit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimaunit
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimaunit
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
    
  // convert js parameter to cpp: v (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setDimaunit(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimaunit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimadec
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimadec
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
                RDimArcLengthData* w = getWrapped();
                int res = 
                    
                w->getDimadec(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimadec";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimadec
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimadec
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
    
  // convert js parameter to cpp: v (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setDimadec(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimadec";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimdec
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimdec
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
                RDimArcLengthData* w = getWrapped();
                int res = 
                    
                w->getDimdec(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimdec";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimdec
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimdec
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
    
  // convert js parameter to cpp: v (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setDimdec(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimdec";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimazin
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimazin
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
                RDimArcLengthData* w = getWrapped();
                int res = 
                    
                w->getDimazin(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimazin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimazin
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimazin
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
    
  // convert js parameter to cpp: v (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setDimazin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimazin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimdsep
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimdsep
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
                RDimArcLengthData* w = getWrapped();
                int res = 
                    
                w->getDimdsep(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimdsep";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimdsep
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimdsep
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
    
  // convert js parameter to cpp: v (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setDimdsep(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimdsep";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimclrt
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimclrt
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
                RDimArcLengthData* w = getWrapped();
                RColor res = 
                    
                w->getDimclrt(
                  
                );
              
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimclrt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimclrt
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimclrt
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (RColor)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDimclrt(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimclrt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: useArchTick
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::useArchTick
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->useArchTick(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for useArchTick";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimblk
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimblk
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
                RDimArcLengthData* w = getWrapped();
                int res = 
                    
                w->getDimblk(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimblk";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimblkName
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimblkName
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
                RDimArcLengthData* w = getWrapped();
                QString res = 
                    
                w->getDimblkName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimblkName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: isDimXScaled
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::isDimXScaled
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: var (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->isDimXScaled(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDimXScaled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: hasCustomTextPosition
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::hasCustomTextPosition
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->hasCustomTextPosition(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasCustomTextPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setCustomTextPosition
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setCustomTextPosition
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
                RDimArcLengthData* w = getWrapped();
                
                w->setCustomTextPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCustomTextPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getLineSpacingStyle
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getLineSpacingStyle
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
                RDimArcLengthData* w = getWrapped();
                RS::TextLineSpacingStyle res = 
                    
                w->getLineSpacingStyle(
                  
                );
              
            // return type: RS::TextLineSpacingStyle

            return RJSHelper_qcad::cpp2js_RS_TextLineSpacingStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLineSpacingStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getLineSpacingFactor
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getLineSpacingFactor
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getLineSpacingFactor(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLineSpacingFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getTextAngle
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getTextAngle
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getTextAngle(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTextAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getTextData
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getTextData
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: noRender (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
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
                RDimArcLengthData* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RTextData* res =
                    &
                w->getTextData(
                  a1_cpp
    
                );
              
            // return type: RTextData&

            return RJSHelper_qcad::cpp2js_RTextData(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTextData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: initTextData
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::initTextData
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
                RDimArcLengthData* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RTextData* res =
                    &
                w->initTextData(
                  
                );
              
            // return type: RTextData&

            return RJSHelper_qcad::cpp2js_RTextData(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for initTextData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: formatLabel
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::formatLabel
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: distance (double)
  
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
                RDimArcLengthData* w = getWrapped();
                QString res = 
                    
                w->formatLabel(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for formatLabel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: formatAngleLabel
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::formatAngleLabel
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: textAngle (double)
  
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
                RDimArcLengthData* w = getWrapped();
                QString res = 
                    
                w->formatAngleLabel(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for formatAngleLabel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: update
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::update
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
                RDimArcLengthData* w = getWrapped();
                
                w->update(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for update";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimensionBlockReference
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimensionBlockReference
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
                RDimArcLengthData* w = getWrapped();
                QSharedPointer<RBlockReferenceEntity> res = 
                    
                w->getDimensionBlockReference(
                  
                );
              
            // return type: QSharedPointer<RBlockReferenceEntity>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RBlockReferenceEntity(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimensionBlockReference";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: hasDimensionBlockReference
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::hasDimensionBlockReference
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->hasDimensionBlockReference(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasDimensionBlockReference";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getAngle
    // Source: RDimAngularData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getAngle
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getAngle(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimensionArc
    // Source: RDimAngularData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimensionArc
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
                RDimArcLengthData* w = getWrapped();
                RArc res = 
                    
                w->getDimensionArc(
                  
                );
              
            // return type: RArc

            return RJSHelper_qcad::cpp2js_RArc(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimensionArc";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getType
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
                RDimArcLengthData* w = getWrapped();
                RS::EntityType res = 
                    
                w->getType(
                  
                );
              
            // return type: RS::EntityType

            return RJSHelper_qcad::cpp2js_RS_EntityType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::isValid
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
                RDimArcLengthData* w = getWrapped();
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
            
    // Class: RDimArcLengthData
    // Function: isSane
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::isSane
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->isSane(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSane";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getCenter
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getCenter
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
                RDimArcLengthData* w = getWrapped();
                RVector res = 
                    
                w->getCenter(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCenter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setCenter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setCenter
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
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setCenter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCenter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getRadius
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getRadius
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getRadius(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getRadius";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setExtensionLine1End
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setExtensionLine1End
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
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setExtensionLine1End(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setExtensionLine1End";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getExtensionLine1End
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getExtensionLine1End
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
                RDimArcLengthData* w = getWrapped();
                RVector res = 
                    
                w->getExtensionLine1End(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getExtensionLine1End";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setExtensionLine2End
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setExtensionLine2End
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
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setExtensionLine2End(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setExtensionLine2End";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getExtensionLine2End
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getExtensionLine2End
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
                RDimArcLengthData* w = getWrapped();
                RVector res = 
                    
                w->getExtensionLine2End(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getExtensionLine2End";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setDimArcPosition
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setDimArcPosition
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
    
  // convert js parameter to cpp: p (RVector)
  
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
                RDimArcLengthData* w = getWrapped();
                
                w->setDimArcPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimArcPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getDimArcPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getDimArcPosition
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
                RDimArcLengthData* w = getWrapped();
                RVector res = 
                    
                w->getDimArcPosition(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimArcPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: setArcSymbolType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::setArcSymbolType
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
    
  // convert js parameter to cpp: t (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                
                w->setArcSymbolType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setArcSymbolType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getArcSymbolType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getArcSymbolType
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
                RDimArcLengthData* w = getWrapped();
                int res = 
                    
                w->getArcSymbolType(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getArcSymbolType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getReferencePoints
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getReferencePoints
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_ProjectionRenderingHint(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hint (RS::ProjectionRenderingHint)
  
RS::ProjectionRenderingHint a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RS::RenderTop;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RS_ProjectionRenderingHint(handler, a1);
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
                RDimArcLengthData* w = getWrapped();
                QList<RRefPoint> res = 
                    
                w->getReferencePoints(
                  a1_cpp
    
                );
              
            // return type: QList<RRefPoint>

            return RJSHelper_qcad::cpp2js_QList_RRefPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getReferencePoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: moveReferencePoint
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::moveReferencePoint
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

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper::is_Qt_KeyboardModifiers(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: referencePoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: targetPoint (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: modifiers (Qt::KeyboardModifiers)
  
Qt::KeyboardModifiers a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::NoModifier;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_Qt_KeyboardModifiers(handler, a3);
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
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->moveReferencePoint(
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

                  qWarning() << "no matching function variant found for moveReferencePoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: move
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::move
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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->move(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for move";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: rotate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::rotate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rotation (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->rotate(
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

                  qWarning() << "no matching function variant found for rotate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: scale
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::scale
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scaleFactors (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->scale(
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

                  qWarning() << "no matching function variant found for scale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: mirror
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::mirror
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: axis (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->mirror(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mirror";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getAngles
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getAngles
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
  a5
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
  )

   && RJSHelper_qcad::is_RVector(handler, a4
  )

   && RJSHelper_qcad::is_RVector(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ang1 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: ang2 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: reversed (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        
  // convert js parameter to cpp: p1 (RVector)
  
RVector a4_cpp;

      a4_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a4);
        
  // convert js parameter to cpp: p2 (RVector)
  
RVector a5_cpp;

      a5_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDimArcLengthData* w = getWrapped();
                bool res = 
                    
                w->getAngles(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAngles";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getMeasuredValue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getMeasuredValue
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
                RDimArcLengthData* w = getWrapped();
                double res = 
                    
                w->getMeasuredValue(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMeasuredValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getAutoLabel
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getAutoLabel
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
                RDimArcLengthData* w = getWrapped();
                QString res = 
                    
                w->getAutoLabel(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAutoLabel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: getMeasurement
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::getMeasurement
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: resolveAutoMeasurement (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = true;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
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
                RDimArcLengthData* w = getWrapped();
                QString res = 
                    
                w->getMeasurement(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMeasurement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDimArcLengthData
    // Function: to2D
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDimArcLengthData_Wrapper::to2D
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
                RDimArcLengthData* w = getWrapped();
                
                w->to2D(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for to2D";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  