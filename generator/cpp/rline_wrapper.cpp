
  // Auto generated
  
  // include header:
  //#include "RLinewrapper.h"
  //#include "header_cpp.h"
  
    #include "rline_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RLine*> RLine_Wrapper::basecasters_RLine;
    
    // static functions implementation in singleton wrapper:
    
#if QT_VERSION>=0x060000

#endif

    void RLine_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RLine_Wrapper>("org.qcad", 1, 0, "RLine_Wrapper");
        qmlRegisterInterface<RLine_Wrapper>("RLine_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RLine* t = new RJSType_RLine();
          global.setProperty("RJSType_RLine", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RLine::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RLine_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RLine_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RLine_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RLine_BaseJs", mob);
      
      QString fileName = ":generator/js/RLine.js";
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
    RLine_Wrapper::RLine_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RLine_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RLine_Wrapper::RLine_Wrapper(RJSApi& h, RLine* o, bool wrappedCreated) : RJSWrapperObj(h), 

            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RLine_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RLine_Wrapper"));
              //setObjectName("RLine_Wrapper");
              //setHandler(h);

              
                spWrapped.reset(o);
              

              // signal forwarding:
              initConnections();
            }
          
        // special constructor to wrap existing object from shared pointer:
        RLine_Wrapper::RLine_Wrapper(RJSApi& h, QSharedPointer<RLine> o) : RJSWrapperObj(h), spWrapped(o), wrappedCreated(false) {
              //RDebug::incCounter(QString("RLine_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RLine_Wrapper"));
              //setObjectName("RLine_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RLine_Wrapper::~RLine_Wrapper() {
            //RDebug::decCounter(QString("RLine_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RLine_Wrapper"));

            //qDebug() << "RLine_Wrapper::~RLine_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RLine";
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void RLine_Wrapper::initConnections() {

          //setObjectName("RLine_Wrapper");

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
  
    // Class: RLine
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
RLine_Wrapper::RLine_Wrapper
                
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
                
                  //RDebug::incCounter(QString("RLine_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RLine_Wrapper"));
                
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
    
  // convert js parameter to cpp: x1 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: y1 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: x2 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: y2 (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        

    // call function:
    
        // construct wrapper:

        
              spWrapped = QSharedPointer<RLine>(new RLine(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
              ));
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: startPoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: angle (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: distance (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        

    // call function:
    
        // construct wrapper:

        
              spWrapped = QSharedPointer<RLine>(new RLine(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
              ));
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: startPoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: endPoint (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
              spWrapped = QSharedPointer<RLine>(new RLine(
                  a1_cpp
    , a2_cpp
    
              ));
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

        
              spWrapped = QSharedPointer<RLine>(new RLine(
                  
              ));
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
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RLine";
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if QT_VERSION>=0x060000

#endif


    // non-static functions:
    
    // Class: RLine
    // Function: isInterpolated
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::isInterpolated
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
                RLine* w = getWrapped();
                bool res = 
                    
                w->isInterpolated(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isInterpolated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getClosestPointOnShape
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getClosestPointOnShape
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
    
  // convert js parameter to cpp: p (RVector)
  
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
                RLine* w = getWrapped();
                RVector res = 
                    
                w->getClosestPointOnShape(
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

                  qWarning() << "no matching function variant found for getClosestPointOnShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: to2D
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::to2D
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
                RLine* w = getWrapped();
                
                w->to2D(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for to2D";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: equals
    // Source: RShape
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::equals
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
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        
  // convert js parameter to cpp: tolerance (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RS::PointTolerance;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
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
                RLine* w = getWrapped();
                bool res = 
                    
                w->equals(
                  *a1_cpp
    , a2_cpp
    
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
            
    // Class: RLine
    // Function: getIntProperties
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getIntProperties
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
                RLine* w = getWrapped();
                QList<int> res = 
                    
                w->getIntProperties(
                  
                );
              
            // return type: QList<int>

            return RJSHelper::cpp2js_QList_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIntProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getDoubleProperties
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getDoubleProperties
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
                RLine* w = getWrapped();
                QList<double> res = 
                    
                w->getDoubleProperties(
                  
                );
              
            // return type: QList<double>

            return RJSHelper::cpp2js_QList_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDoubleProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getBoolProperties
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getBoolProperties
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
                RLine* w = getWrapped();
                QList<bool> res = 
                    
                w->getBoolProperties(
                  
                );
              
            // return type: QList<bool>

            return RJSHelper::cpp2js_QList_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBoolProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getDistanceTo
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getDistanceTo
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
                RLine* w = getWrapped();
                double res = 
                    
                w->getDistanceTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
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
            
    // Class: RLine
    // Function: getMaxDistanceTo
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getMaxDistanceTo
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
        RJSHelper_qcad::is_QList_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: points (QList<RVector>)
  
QList<RVector> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RVector(handler, a1);
        
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
                RLine* w = getWrapped();
                double res = 
                    
                w->getMaxDistanceTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMaxDistanceTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: isOnShape
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::isOnShape
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
                RLine* w = getWrapped();
                bool res = 
                    
                w->isOnShape(
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

                  qWarning() << "no matching function variant found for isOnShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: filterOnShape
    // Source: RShape
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::filterOnShape
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
        RJSHelper_qcad::is_QList_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pointList (QList<RVector>)
  
QList<RVector> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RVector(handler, a1);
        
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
                RLine* w = getWrapped();
                QList<RVector> res = 
                    
                w->filterOnShape(
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

                  qWarning() << "no matching function variant found for filterOnShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getVectorFromEndpointTo
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getVectorFromEndpointTo
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
    
  // convert js parameter to cpp: point (RVector)
  
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
                RLine* w = getWrapped();
                RVector res = 
                    
                w->getVectorFromEndpointTo(
                  a1_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVectorFromEndpointTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getArcReferencePoints
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getArcReferencePoints
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
                RLine* w = getWrapped();
                QList<RVector> res = 
                    
                w->getArcReferencePoints(
                  
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
            
    // Class: RLine
    // Function: getPointOnShape
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getPointOnShape
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
                RLine* w = getWrapped();
                RVector res = 
                    
                w->getPointOnShape(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointOnShape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getPointWithDistanceToStart
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getPointWithDistanceToStart
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
                RLine* w = getWrapped();
                RVector res = 
                    
                w->getPointWithDistanceToStart(
                  a1_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointWithDistanceToStart";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getPointWithDistanceToEnd
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getPointWithDistanceToEnd
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
                RLine* w = getWrapped();
                RVector res = 
                    
                w->getPointWithDistanceToEnd(
                  a1_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointWithDistanceToEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getAngleAtPoint
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getAngleAtPoint
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
    
  // convert js parameter to cpp: pos (RVector)
  
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
                RLine* w = getWrapped();
                double res = 
                    
                w->getAngleAtPoint(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAngleAtPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getPointAtPercent
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getPointAtPercent
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
    
  // convert js parameter to cpp: p (double)
  
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
                RLine* w = getWrapped();
                RVector res = 
                    
                w->getPointAtPercent(
                  a1_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointAtPercent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getAngleAtPercent
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getAngleAtPercent
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
    
  // convert js parameter to cpp: p (double)
  
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
                RLine* w = getWrapped();
                double res = 
                    
                w->getAngleAtPercent(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAngleAtPercent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: intersectsWith
    // Source: RShape
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::intersectsWith
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
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (RShape)
  

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
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLine* w = getWrapped();
                bool res = 
                    
                w->intersectsWith(
                  *a1_cpp
    , a2_cpp
    
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
            
    // Class: RLine
    // Function: getIntersectionPoints
    // Source: RShape
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getIntersectionPoints
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
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RShape_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RShape_ptr(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: shape1 (RShape)
  

          // non copyable:
          RShape*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a1);
        
  // convert js parameter to cpp: shape2 (RShape)
  

          // non copyable:
          RShape*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RShape_ptr(handler, a2);
        
  // convert js parameter to cpp: limited (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: same (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: force (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = false;
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
                RLine* w = getWrapped();
                QList<RVector> res = 
                    
                w->getIntersectionPoints(
                  *a1_cpp
    , *a2_cpp
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

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (RShape)
  

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
        
  // convert js parameter to cpp: same (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: force (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
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
                RLine* w = getWrapped();
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
            
    // Class: RLine
    // Function: getSelfIntersectionPoints
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getSelfIntersectionPoints
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: tolerance (double)
  
double a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RS::PointTolerance;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_double(handler, a1);
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
                RLine* w = getWrapped();
                QList<RVector> res = 
                    
                w->getSelfIntersectionPoints(
                  a1_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSelfIntersectionPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getDistancesFromStart
    // Source: RShape
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getDistancesFromStart
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
                RLine* w = getWrapped();
                QList<double> res = 
                    
                w->getDistancesFromStart(
                  a1_cpp
    
                );
              
            // return type: QList<double>

            return RJSHelper::cpp2js_QList_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDistancesFromStart";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: dump
    // Source: RShape
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::dump
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
                RLine* w = getWrapped();
                
                w->dump(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dump";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getShapeType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getShapeType
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
                RLine* w = getWrapped();
                RShape::Type res = 
                    
                w->getShapeType(
                  
                );
              
            // return type: RShape::Type

            return RJSHelper_qcad::cpp2js_RShape_Type(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getShapeType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: clone
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::clone
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
                RLine* w = getWrapped();
                QSharedPointer<RShape> res = 
                    
                w->clone(
                  
                );
              
            // return type: QSharedPointer<RShape>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clone";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: isDirected
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::isDirected
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
                RLine* w = getWrapped();
                bool res = 
                    
                w->isDirected(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDirected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: setZ
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::setZ
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
                RLine* w = getWrapped();
                
                w->setZ(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setZ";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getVectorProperties
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getVectorProperties
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
                RLine* w = getWrapped();
                QList<RVector> res = 
                    
                w->getVectorProperties(
                  
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVectorProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::isValid
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
                RLine* w = getWrapped();
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
            
    // Class: RLine
    // Function: getBoundingBox
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getBoundingBox
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
                RLine* w = getWrapped();
                RBox res = 
                    
                w->getBoundingBox(
                  
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
            
    // Class: RLine
    // Function: getEndPoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getEndPoints
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
                RLine* w = getWrapped();
                QList<RVector> res = 
                    
                w->getEndPoints(
                  
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
            
    // Class: RLine
    // Function: getMiddlePoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getMiddlePoints
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
                RLine* w = getWrapped();
                QList<RVector> res = 
                    
                w->getMiddlePoints(
                  
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
            
    // Class: RLine
    // Function: getCenterPoints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getCenterPoints
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
                RLine* w = getWrapped();
                QList<RVector> res = 
                    
                w->getCenterPoints(
                  
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
            
    // Class: RLine
    // Function: getPointsWithDistanceToEnd
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getPointsWithDistanceToEnd
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_int(handler, a2
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
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLine* w = getWrapped();
                QList<RVector> res = 
                    
                w->getPointsWithDistanceToEnd(
                  a1_cpp
    , a2_cpp
    
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
            
    // Class: RLine
    // Function: getPointCloud
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getPointCloud
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
    
  // convert js parameter to cpp: segmentLength (double)
  
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
                RLine* w = getWrapped();
                QList<RVector> res = 
                    
                w->getPointCloud(
                  a1_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPointCloud";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getAngleAt
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getAngleAt
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
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RS_From(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: distance (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: from (RS::From)
  
RS::From a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RS::FromStart;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RS_From(handler, a2);
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
                RLine* w = getWrapped();
                double res = 
                    
                w->getAngleAt(
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

                  qWarning() << "no matching function variant found for getAngleAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getVectorTo
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getVectorTo
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
                RLine* w = getWrapped();
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
            
    // Class: RLine
    // Function: getStartPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getStartPoint
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
                RLine* w = getWrapped();
                RVector res = 
                    
                w->getStartPoint(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getStartPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: setStartPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::setStartPoint
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
    
  // convert js parameter to cpp: vector (RVector)
  
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
                RLine* w = getWrapped();
                
                w->setStartPoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStartPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getEndPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getEndPoint
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
                RLine* w = getWrapped();
                RVector res = 
                    
                w->getEndPoint(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEndPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: setEndPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::setEndPoint
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
    
  // convert js parameter to cpp: vector (RVector)
  
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
                RLine* w = getWrapped();
                
                w->setEndPoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEndPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getMiddlePoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getMiddlePoint
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
                RLine* w = getWrapped();
                RVector res = 
                    
                w->getMiddlePoint(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMiddlePoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getLength
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getLength
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
                RLine* w = getWrapped();
                double res = 
                    
                w->getLength(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getAngle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getAngle
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
                RLine* w = getWrapped();
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
            
    // Class: RLine
    // Function: setLength
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::setLength
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

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: fromStart (bool)
  
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
                RLine* w = getWrapped();
                
                w->setLength(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: setAngle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::setAngle
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
    
  // convert js parameter to cpp: a (double)
  
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
                RLine* w = getWrapped();
                
                w->setAngle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: isParallel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::isParallel
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line (RLine)
  
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
                RLine* w = getWrapped();
                bool res = 
                    
                w->isParallel(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isParallel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: isVertical
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::isVertical
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: tolerance (double)
  
double a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RS::PointTolerance;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_double(handler, a1);
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
                RLine* w = getWrapped();
                bool res = 
                    
                w->isVertical(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isVertical";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: isHorizontal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::isHorizontal
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: tolerance (double)
  
double a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RS::PointTolerance;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_double(handler, a1);
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
                RLine* w = getWrapped();
                bool res = 
                    
                w->isHorizontal(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isHorizontal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getDirection1
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getDirection1
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
                RLine* w = getWrapped();
                double res = 
                    
                w->getDirection1(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDirection1";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getDirection2
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getDirection2
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
                RLine* w = getWrapped();
                double res = 
                    
                w->getDirection2(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDirection2";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getSideOfPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getSideOfPoint
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
    
  // convert js parameter to cpp: point (RVector)
  
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
                RLine* w = getWrapped();
                RS::Side res = 
                    
                w->getSideOfPoint(
                  a1_cpp
    
                );
              
            // return type: RS::Side

            return RJSHelper_qcad::cpp2js_RS_Side(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSideOfPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: clipToXY
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::clipToXY
              (
                
  const QJSValue& 
  a1
              ) 
              
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
                RLine* w = getWrapped();
                
                w->clipToXY(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clipToXY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: move
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::move
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
                RLine* w = getWrapped();
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
            
    // Class: RLine
    // Function: rotate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::rotate
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rotation (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_RVECTOR;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
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
                RLine* w = getWrapped();
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
            
    // Class: RLine
    // Function: scale
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::scale
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scaleFactors (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_RVECTOR;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
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
                RLine* w = getWrapped();
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
            
    // Class: RLine
    // Function: mirror
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::mirror
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
                RLine* w = getWrapped();
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
            
    // Class: RLine
    // Function: flipHorizontal
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::flipHorizontal
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
                RLine* w = getWrapped();
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
            
    // Class: RLine
    // Function: flipVertical
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::flipVertical
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
                RLine* w = getWrapped();
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
            
    // Class: RLine
    // Function: reverse
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::reverse
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
                RLine* w = getWrapped();
                bool res = 
                    
                w->reverse(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for reverse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: stretch
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::stretch
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
                RLine* w = getWrapped();
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
            
    // Class: RLine
    // Function: moveTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::moveTo
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
    
  // convert js parameter to cpp: dest (RVector)
  
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
                RLine* w = getWrapped();
                bool res = 
                    
                w->moveTo(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for moveTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getTransformed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getTransformed
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTransform(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: transform (QTransform)
  
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
                RLine* w = getWrapped();
                QSharedPointer<RShape> res = 
                    
                w->getTransformed(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RShape>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTransformed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getTrimEnd
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getTrimEnd
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
    
  // convert js parameter to cpp: trimPoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: clickPoint (RVector)
  
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
                RLine* w = getWrapped();
                RS::Ending res = 
                    
                w->getTrimEnd(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: RS::Ending

            return RJSHelper_qcad::cpp2js_RS_Ending(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTrimEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: trimStartPoint
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::trimStartPoint
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
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: trimPoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: clickPoint (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RVector::invalid;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        
  // convert js parameter to cpp: extend (bool)
  
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
                RLine* w = getWrapped();
                bool res = 
                    
                w->trimStartPoint(
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

      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: trimDist (double)
  
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
                RLine* w = getWrapped();
                bool res = 
                    
                w->trimStartPoint(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for trimStartPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: trimEndPoint
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::trimEndPoint
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
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: trimPoint (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: clickPoint (RVector)
  
RVector a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RVector::invalid;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
          }
        
  // convert js parameter to cpp: extend (bool)
  
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
                RLine* w = getWrapped();
                bool res = 
                    
                w->trimEndPoint(
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

      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: trimDist (double)
  
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
                RLine* w = getWrapped();
                bool res = 
                    
                w->trimEndPoint(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for trimEndPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getDistanceFromStart
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getDistanceFromStart
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
                RLine* w = getWrapped();
                double res = 
                    
                w->getDistanceFromStart(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDistanceFromStart";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: getOffsetShapes
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::getOffsetShapes
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

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper_qcad::is_RS_Side(handler, a3
  )

   && RJSHelper_qcad::is_RVector(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: distance (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: number (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: side (RS::Side)
  
RS::Side a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RS_Side(handler, a3);
        
  // convert js parameter to cpp: position (RVector)
  
RVector a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RVector::invalid;
          }
          else {
            a4_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a4);
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
                RLine* w = getWrapped();
                QList<QSharedPointer<RShape>> res = 
                    
                w->getOffsetShapes(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QList<QSharedPointer<RShape>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOffsetShapes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLine
    // Function: splitAt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::splitAt
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: points (QList<RVector>)
  
QList<RVector> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLine* w = getWrapped();
                QList<QSharedPointer<RShape>> res = 
                    
                w->splitAt(
                  a1_cpp
    
                );
              
            // return type: QList<QSharedPointer<RShape>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RShape(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for splitAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_VERSION>=0x060000

    // Class: RLine
    // Function: copy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLine_Wrapper::copy
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
                RLine* w = getWrapped();
                RLine res = 
                    
                w->copy(
                  
                );
              
            // return type: RLine

            return RJSHelper_qcad::cpp2js_RLine(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for copy";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rline_wrapper.cpp"
  
