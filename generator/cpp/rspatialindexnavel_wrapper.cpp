
  // Auto generated
  
  // include header:
  //#include "RSpatialIndexNavelwrapper.h"
  //#include "header_cpp.h"
  
    #include "rspatialindexnavel_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RSpatialIndexNavel*> RSpatialIndexNavel_Wrapper::basecasters_RSpatialIndexNavel;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RSpatialIndexNavel
    // Function: getSIId
    // Source: RSpatialIndex
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndexNavel_WrapperSingleton::getSIId
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
    
  // convert js parameter to cpp: id (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: pos (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            qint64 res = 
                
                // call static member function:
                RSpatialIndex::getSIId(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSIId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSpatialIndexNavel
    // Function: getId
    // Source: RSpatialIndex
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndexNavel_WrapperSingleton::getId
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: siid (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSpatialIndex::getId(
              a1_cpp
    
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSpatialIndexNavel
    // Function: getPos
    // Source: RSpatialIndex
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndexNavel_WrapperSingleton::getPos
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: siid (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                RSpatialIndex::getPos(
              a1_cpp
    
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RSpatialIndexNavel_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RSpatialIndexNavel_Wrapper>("org.qcad", 1, 0, "RSpatialIndexNavel_Wrapper");
        qmlRegisterInterface<RSpatialIndexNavel_Wrapper>("RSpatialIndexNavel_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RSpatialIndexNavel* t = new RJSType_RSpatialIndexNavel();
          global.setProperty("RJSType_RSpatialIndexNavel", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RSpatialIndexNavel::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RSpatialIndexNavel_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RSpatialIndexNavel_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RSpatialIndexNavel_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RSpatialIndexNavel_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RSpatialIndexNavel_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RSpatialIndexNavel_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RSpatialIndexNavel_WrapperSingleton * s = new RSpatialIndexNavel_WrapperSingleton(handler);
        engine->globalObject().setProperty("RSpatialIndexNavel_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RSpatialIndexNavel.js";
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
    RSpatialIndexNavel_Wrapper::RSpatialIndexNavel_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RSpatialIndexNavel_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RSpatialIndexNavel_Wrapper::RSpatialIndexNavel_Wrapper(RJSApi& h, RSpatialIndexNavel* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RSpatialIndexNavel_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RSpatialIndexNavel_Wrapper"));
              //setObjectName("RSpatialIndexNavel_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RSpatialIndexNavel_Wrapper::~RSpatialIndexNavel_Wrapper() {
            //RDebug::decCounter(QString("RSpatialIndexNavel_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RSpatialIndexNavel_Wrapper"));

            //qDebug() << "RSpatialIndexNavel_Wrapper::~RSpatialIndexNavel_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RSpatialIndexNavel";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RSpatialIndexNavel_Wrapper::initConnections() {

          //setObjectName("RSpatialIndexNavel_Wrapper");

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
  
    // Class: RSpatialIndexNavel
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RSpatialIndexNavel_Wrapper::RSpatialIndexNavel_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RSpatialIndexNavel_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RSpatialIndexNavel_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
              wrapped = new RSpatialIndexNavel(
                  
              );
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RSpatialIndexNavel";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RSpatialIndexNavel
    // Function: bulkLoadSimple
    // Source: RSpatialIndex
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndexNavel_Wrapper::bulkLoadSimple
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_int(handler, a1
  )

   && RJSHelper_qcad::is_QList_RBox(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ids (QList<int>)
  
QList<int> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_int(handler, a1);
        
  // convert js parameter to cpp: bbs (QList<RBox>)
  
QList<RBox> a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_QList_RBox(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSpatialIndexNavel* w = getWrapped();
                
                w->bulkLoadSimple(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for bulkLoadSimple";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSpatialIndexNavel
    // Function: queryContainedIds
    // Source: RSpatialIndex
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndexNavel_Wrapper::queryContainedIds
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
    
  // convert js parameter to cpp: x1 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: y1 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: z1 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: x2 (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: y2 (double)
  
double a5_cpp;

      a5_cpp = RJSHelper::js2cpp_double(handler, a5);
        
  // convert js parameter to cpp: z2 (double)
  
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
                RSpatialIndexNavel* w = getWrapped();
                QList<int> res = 
                    
                w->queryContainedIds(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
                );
              
            // return type: QList<int>

            return RJSHelper::cpp2js_QList_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryContainedIds";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSpatialIndexNavel
    // Function: create
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndexNavel_Wrapper::create
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
                RSpatialIndexNavel* w = getWrapped();
                RSpatialIndex* res = 
                    
                w->create(
                  
                );
              
            // return type: RSpatialIndex*

            return RJSHelper_qcad::cpp2js_RSpatialIndex(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for create";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSpatialIndexNavel
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndexNavel_Wrapper::clear
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
                RSpatialIndexNavel* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSpatialIndexNavel
    // Function: addToIndex
    // Source: 
    // Static: false
    // Parameters: 8
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndexNavel_Wrapper::addToIndex
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
  a8
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

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: pos (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: x1 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: y1 (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: z1 (double)
  
double a5_cpp;

      a5_cpp = RJSHelper::js2cpp_double(handler, a5);
        
  // convert js parameter to cpp: x2 (double)
  
double a6_cpp;

      a6_cpp = RJSHelper::js2cpp_double(handler, a6);
        
  // convert js parameter to cpp: y2 (double)
  
double a7_cpp;

      a7_cpp = RJSHelper::js2cpp_double(handler, a7);
        
  // convert js parameter to cpp: z2 (double)
  
double a8_cpp;

      a8_cpp = RJSHelper::js2cpp_double(handler, a8);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSpatialIndexNavel* w = getWrapped();
                
                w->addToIndex(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper_qcad::is_RBox(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: pos (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: bb (RBox)
  
RBox a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSpatialIndexNavel* w = getWrapped();
                
                w->addToIndex(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addToIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSpatialIndexNavel
    // Function: removeFromIndex
    // Source: 
    // Static: false
    // Parameters: 8
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndexNavel_Wrapper::removeFromIndex
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
  a8
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

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: pos (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: x1 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: y1 (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: z1 (double)
  
double a5_cpp;

      a5_cpp = RJSHelper::js2cpp_double(handler, a5);
        
  // convert js parameter to cpp: x2 (double)
  
double a6_cpp;

      a6_cpp = RJSHelper::js2cpp_double(handler, a6);
        
  // convert js parameter to cpp: y2 (double)
  
double a7_cpp;

      a7_cpp = RJSHelper::js2cpp_double(handler, a7);
        
  // convert js parameter to cpp: z2 (double)
  
double a8_cpp;

      a8_cpp = RJSHelper::js2cpp_double(handler, a8);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSpatialIndexNavel* w = getWrapped();
                bool res = 
                    
                w->removeFromIndex(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper_qcad::is_RBox(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: pos (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: bb (RBox)
  
RBox a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSpatialIndexNavel* w = getWrapped();
                bool res = 
                    
                w->removeFromIndex(
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper_qcad::is_QList_RBox(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: bb (QList<RBox>)
  
QList<RBox> a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_QList_RBox(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSpatialIndexNavel* w = getWrapped();
                bool res = 
                    
                w->removeFromIndex(
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

                  qWarning() << "no matching function variant found for removeFromIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSpatialIndexNavel
    // Function: queryIntersectedSimple
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndexNavel_Wrapper::queryIntersectedSimple
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
    
  // convert js parameter to cpp: b (RBox)
  
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
                RSpatialIndexNavel* w = getWrapped();
                QList<int> res = 
                    
                w->queryIntersectedSimple(
                  a1_cpp
    
                );
              
            // return type: QList<int>

            return RJSHelper::cpp2js_QList_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryIntersectedSimple";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSpatialIndexNavel
    // Function: queryContained
    // Source: 
    // Static: false
    // Parameters: 7
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndexNavel_Wrapper::queryContained
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
  a7
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

   && RJSHelper_qcad::is_RSpatialIndexVisitor_ptr(handler, a7
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x1 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: y1 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: z1 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: x2 (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: y2 (double)
  
double a5_cpp;

      a5_cpp = RJSHelper::js2cpp_double(handler, a5);
        
  // convert js parameter to cpp: z2 (double)
  
double a6_cpp;

      a6_cpp = RJSHelper::js2cpp_double(handler, a6);
        
  // convert js parameter to cpp: dataVisitor (RSpatialIndexVisitor)
  

          // pointer:
          RSpatialIndexVisitor*
         a7_cpp;

      
          if (a7.isUndefined()) {
            a7_cpp = NULL;
          }
          else {
            a7_cpp = RJSHelper_qcad::js2cpp_RSpatialIndexVisitor_ptr(handler, a7);
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
                RSpatialIndexNavel* w = getWrapped();
                
                w->queryContained(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for queryContained";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSpatialIndexNavel
    // Function: queryNearestNeighbor
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndexNavel_Wrapper::queryNearestNeighbor
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
    
  // convert js parameter to cpp: x (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: y (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: z (double)
  
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
                RSpatialIndexNavel* w = getWrapped();
                QPair<int,int> res = 
                    
                w->queryNearestNeighbor(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QPair<int,int>

            return RJSHelper::cpp2js_QPair_int_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryNearestNeighbor";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rspatialindexnavel_wrapper.cpp"
  
