
  // Auto generated
  
  // include header:
  //#include "RSpatialIndexwrapper.h"
  //#include "header_cpp.h"
  
    #include "rspatialindex_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RSpatialIndex*> RSpatialIndex_Wrapper::basecasters_RSpatialIndex;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RSpatialIndex
    // Function: getSIId
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndex_WrapperSingleton::getSIId
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
            
    // Class: RSpatialIndex
    // Function: getId
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndex_WrapperSingleton::getId
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
            
    // Class: RSpatialIndex
    // Function: getPos
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndex_WrapperSingleton::getPos
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
            
    void RSpatialIndex_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RSpatialIndex_Wrapper>("org.qcad", 1, 0, "RSpatialIndex_Wrapper");
        qmlRegisterInterface<RSpatialIndex_Wrapper>("RSpatialIndex_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RSpatialIndex* t = new RJSType_RSpatialIndex();
          global.setProperty("RJSType_RSpatialIndex", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RSpatialIndex::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RSpatialIndex_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RSpatialIndex_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RSpatialIndex_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RSpatialIndex_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RSpatialIndex_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RSpatialIndex_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RSpatialIndex_WrapperSingleton * s = new RSpatialIndex_WrapperSingleton(handler);
        engine->globalObject().setProperty("RSpatialIndex_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RSpatialIndex.js";
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
    RSpatialIndex_Wrapper::RSpatialIndex_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RSpatialIndex_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RSpatialIndex_Wrapper::RSpatialIndex_Wrapper(RJSApi& h, RSpatialIndex* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RSpatialIndex_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RSpatialIndex_Wrapper"));
              //setObjectName("RSpatialIndex_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RSpatialIndex_Wrapper::~RSpatialIndex_Wrapper() {
            //RDebug::decCounter(QString("RSpatialIndex_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RSpatialIndex_Wrapper"));

            //qDebug() << "RSpatialIndex_Wrapper::~RSpatialIndex_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RSpatialIndex";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RSpatialIndex_Wrapper::initConnections() {

          //setObjectName("RSpatialIndex_Wrapper");

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
    
    // Class: RSpatialIndex
    // Function: create
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndex_Wrapper::create
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
                RSpatialIndex* w = getWrapped();
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
            
    // Class: RSpatialIndex
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndex_Wrapper::clear
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
                RSpatialIndex* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSpatialIndex
    // Function: bulkLoadSimple
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndex_Wrapper::bulkLoadSimple
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
                RSpatialIndex* w = getWrapped();
                
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
            
    // Class: RSpatialIndex
    // Function: addToIndex
    // Source: 
    // Static: false
    // Parameters: 8
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndex_Wrapper::addToIndex
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
                RSpatialIndex* w = getWrapped();
                
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
                RSpatialIndex* w = getWrapped();
                
                w->addToIndex(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
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
                RSpatialIndex* w = getWrapped();
                
                w->addToIndex(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addToIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSpatialIndex
    // Function: removeFromIndex
    // Source: 
    // Static: false
    // Parameters: 8
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndex_Wrapper::removeFromIndex
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
                RSpatialIndex* w = getWrapped();
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
                RSpatialIndex* w = getWrapped();
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
                RSpatialIndex* w = getWrapped();
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
            
    // Class: RSpatialIndex
    // Function: queryContainedIds
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndex_Wrapper::queryContainedIds
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
                RSpatialIndex* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rspatialindex_wrapper.cpp"
  
