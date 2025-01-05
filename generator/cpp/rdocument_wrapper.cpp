
  // Auto generated
  
  // include header:
  //#include "RDocumentwrapper.h"
  //#include "header_cpp.h"
  
    #include "rdocument_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RDocument*> RDocument_Wrapper::basecasters_RDocument;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RDocument
    // Function: getClipboard
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_WrapperSingleton::getClipboard
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                  // return type is reference:
                  // use pointer instead 1:
                  RDocument* res =
                &
                // call static member function:
                RDocument::getClipboard(
              
            );
          
            // return type: RDocument&

            return RJSHelper_qcad::cpp2js_RDocument(
              handler, 
              // non-copyable: true
                  // return type is reference, type is not copyable:
                  // convert using pointer:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClipboard";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RDocument_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RDocument_Wrapper>("org.qcad", 1, 0, "RDocument_Wrapper");
        qmlRegisterInterface<RDocument_Wrapper>("RDocument_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RDocument* t = new RJSType_RDocument();
          global.setProperty("RJSType_RDocument", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RDocument::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RDocument_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RDocument_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RDocument_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RDocument_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RDocument_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RDocument_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RDocument_WrapperSingleton * s = new RDocument_WrapperSingleton(handler);
        engine->globalObject().setProperty("RDocument_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RDocument.js";
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
    RDocument_Wrapper::RDocument_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RDocument_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RDocument_Wrapper::RDocument_Wrapper(RJSApi& h, RDocument* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RDocument_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RDocument_Wrapper"));
              //setObjectName("RDocument_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RDocument_Wrapper::~RDocument_Wrapper() {
            //RDebug::decCounter(QString("RDocument_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RDocument_Wrapper"));

            //qDebug() << "RDocument_Wrapper::~RDocument_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RDocument";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RDocument_Wrapper::initConnections() {

          //setObjectName("RDocument_Wrapper");

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
  
    // Class: RDocument
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
RDocument_Wrapper::RDocument_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RDocument_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RDocument_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RStorage_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RSpatialIndex_ptr(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: storage (RStorage)
  

          // non copyable:
          RStorage*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RStorage_ptr(handler, a1);
        
  // convert js parameter to cpp: spatialIndex (RSpatialIndex)
  

          // non copyable:
          RSpatialIndex*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RSpatialIndex_ptr(handler, a2);
        
  // convert js parameter to cpp: beforeLoad (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new RDocument(
                  *a1_cpp
    , *a2_cpp
    , a3_cpp
    
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
  
                      ) {
                      
                        wrapped = nullptr;
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RDocument";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RDocument
    // Function: init
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::init
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
    
  // convert js parameter to cpp: beforeLoad (bool)
  
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
                RDocument* w = getWrapped();
                
                w->init(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for init";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: initLinetypes
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::initLinetypes
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTransaction_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = NULL;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a1);
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
                RDocument* w = getWrapped();
                
                w->initLinetypes(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getDefaultLinetypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getDefaultLinetypes
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
                RDocument* w = getWrapped();
                QList<QSharedPointer<RObject>> res = 
                    
                w->getDefaultLinetypes(
                  
                );
              
            // return type: QList<QSharedPointer<RObject>>

            return RJSHelper_qcad::cpp2js_QList_QSharedPointer_RObject(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDefaultLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getStorage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getStorage
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
                RDocument* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RStorage* res =
                    &
                w->getStorage(
                  
                );
              
            // return type: RStorage&

            return RJSHelper_qcad::cpp2js_RStorage(
              handler, 
              // non-copyable: true
                  // return type is reference, type is not copyable:
                  // convert using pointer:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getStorage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getSpatialIndex
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getSpatialIndex
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
                RDocument* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RSpatialIndex* res =
                    &
                w->getSpatialIndex(
                  
                );
              
            // return type: RSpatialIndex&

            return RJSHelper_qcad::cpp2js_RSpatialIndex(
              handler, 
              // non-copyable: true
                  // return type is reference, type is not copyable:
                  // convert using pointer:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSpatialIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getSpatialIndexForBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getSpatialIndexForBlock
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                RSpatialIndex* res = 
                    
                w->getSpatialIndexForBlock(
                  a1_cpp
    
                );
              
            // return type: RSpatialIndex*

            return RJSHelper_qcad::cpp2js_RSpatialIndex(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSpatialIndexForBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getSpatialIndexForCurrentBlock
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getSpatialIndexForCurrentBlock
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
                RDocument* w = getWrapped();
                RSpatialIndex* res = 
                    
                w->getSpatialIndexForCurrentBlock(
                  
                );
              
            // return type: RSpatialIndex*

            return RJSHelper_qcad::cpp2js_RSpatialIndex(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSpatialIndexForCurrentBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getTransactionStack
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getTransactionStack
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
                RDocument* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RTransactionStack* res =
                    &
                w->getTransactionStack(
                  
                );
              
            // return type: RTransactionStack&

            return RJSHelper_qcad::cpp2js_RTransactionStack(
              handler, 
              // non-copyable: true
                  // return type is reference, type is not copyable:
                  // convert using pointer:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTransactionStack";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::clear
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
    
  // convert js parameter to cpp: beforeLoad (bool)
  
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
                RDocument* w = getWrapped();
                
                w->clear(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryClosestXY
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryClosestXY
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
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
  )

   && RJSHelper::is_double(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

   && RJSHelper::is_bool(handler, a6
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: wcsPosition (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: range (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: draft (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        
  // convert js parameter to cpp: strictRange (double)
  
double a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RMAXDOUBLE;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_double(handler, a4);
          }
        
  // convert js parameter to cpp: includeLockedLayers (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = true;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
          }
        
  // convert js parameter to cpp: selectedOnly (bool)
  
bool a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = false;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_bool(handler, a6);
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
                RDocument* w = getWrapped();
                REntity::Id res = 
                    
                w->queryClosestXY(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
                );
              
            // return type: REntity::Id

            return RJSHelper_qcad::cpp2js_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
  )

   && RJSHelper::is_double(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: candidates (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: wcsPosition (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: range (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: draft (bool)
  
bool a4_cpp;

      a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
        
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
                RDocument* w = getWrapped();
                REntity::Id res = 
                    
                w->queryClosestXY(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: REntity::Id

            return RJSHelper_qcad::cpp2js_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryClosestXY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryAllObjects
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryAllObjects
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
                RDocument* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllObjects(
                  
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllObjects";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: querySelectedLayers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::querySelectedLayers
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
                RDocument* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->querySelectedLayers(
                  
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for querySelectedLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryAllVisibleEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryAllVisibleEntities
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryAllVisibleEntities(
                  
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllVisibleEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryAllEntities
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryAllEntities
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
        RJSHelper::is_bool(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RS_EntityType(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: undone (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        
  // convert js parameter to cpp: allBlocks (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: type (RS::EntityType)
  
RS::EntityType a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RS::EntityAll;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a3);
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryAllEntities(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

   && RJSHelper_qcad::is_QList_RS_EntityType(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: undone (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        
  // convert js parameter to cpp: allBlocks (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        
  // convert js parameter to cpp: types (QList<RS::EntityType>)
  
QList<RS::EntityType> a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_QList_RS_EntityType(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryAllEntities(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryWorkingSetEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryWorkingSetEntities
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryWorkingSetEntities(
                  
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryWorkingSetEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryAllUcs
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryAllUcs
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
                RDocument* w = getWrapped();
                QSet<RUcs::Id> res = 
                    
                w->queryAllUcs(
                  
                );
              
            // return type: QSet<RUcs::Id>

            return RJSHelper_qcad::cpp2js_QSet_RUcs_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllUcs";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryAllLayers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryAllLayers
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
                RDocument* w = getWrapped();
                QSet<RLayer::Id> res = 
                    
                w->queryAllLayers(
                  
                );
              
            // return type: QSet<RLayer::Id>

            return RJSHelper_qcad::cpp2js_QSet_RLayer_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryAllLayerStates
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryAllLayerStates
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
                RDocument* w = getWrapped();
                QSet<RLayerState::Id> res = 
                    
                w->queryAllLayerStates(
                  
                );
              
            // return type: QSet<RLayerState::Id>

            return RJSHelper_qcad::cpp2js_QSet_RLayerState_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLayerStates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryAllBlocks
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryAllBlocks
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
                RDocument* w = getWrapped();
                QSet<RBlock::Id> res = 
                    
                w->queryAllBlocks(
                  
                );
              
            // return type: QSet<RBlock::Id>

            return RJSHelper_qcad::cpp2js_QSet_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryAllLayoutBlocks
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryAllLayoutBlocks
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
    
  // convert js parameter to cpp: includeModelSpace (bool)
  
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
                RDocument* w = getWrapped();
                QSet<RBlock::Id> res = 
                    
                w->queryAllLayoutBlocks(
                  a1_cpp
    
                );
              
            // return type: QSet<RBlock::Id>

            return RJSHelper_qcad::cpp2js_QSet_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLayoutBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryAllLayouts
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryAllLayouts
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
                RDocument* w = getWrapped();
                QSet<RBlock::Id> res = 
                    
                w->queryAllLayouts(
                  
                );
              
            // return type: QSet<RBlock::Id>

            return RJSHelper_qcad::cpp2js_QSet_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLayouts";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryAllViews
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryAllViews
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
                RDocument* w = getWrapped();
                QSet<RView::Id> res = 
                    
                w->queryAllViews(
                  
                );
              
            // return type: QSet<RView::Id>

            return RJSHelper_qcad::cpp2js_QSet_RView_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllViews";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryAllLinetypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryAllLinetypes
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
                RDocument* w = getWrapped();
                QSet<RLinetype::Id> res = 
                    
                w->queryAllLinetypes(
                  
                );
              
            // return type: QSet<RLinetype::Id>

            return RJSHelper_qcad::cpp2js_QSet_RLinetype_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryLayerEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryLayerEntities
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
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        
  // convert js parameter to cpp: allBlocks (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryLayerEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayerEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: querySelectedLayerEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::querySelectedLayerEntities
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
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        
  // convert js parameter to cpp: allBlocks (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->querySelectedLayerEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for querySelectedLayerEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: hasBlockEntities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::hasBlockEntities
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->hasBlockEntities(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasBlockEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryBlockEntities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryBlockEntities
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryBlockEntities(
                  a1_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryBlockEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryLayerBlockEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryLayerBlockEntities
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
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

   && RJSHelper_qcad::is_RBlock_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        
  // convert js parameter to cpp: blockId (RBlock::Id)
  
RBlock::Id a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryLayerBlockEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayerBlockEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryChildEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryChildEntities
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
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper_qcad::is_RS_EntityType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parentId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: type (RS::EntityType)
  
RS::EntityType a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RS::EntityAll;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a2);
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryChildEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryChildEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: hasChildEntities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::hasChildEntities
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parentId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->hasChildEntities(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasChildEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryBlockReferences
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryBlockReferences
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryBlockReferences(
                  a1_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryBlockReferences";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryAllBlockReferences
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryAllBlockReferences
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryAllBlockReferences(
                  
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllBlockReferences";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryAllViewports
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryAllViewports
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryAllViewports(
                  
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllViewports";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryContainedEntities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryContainedEntities
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryContainedEntities(
                  a1_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryContainedEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryInfiniteEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryInfiniteEntities
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryInfiniteEntities(
                  
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryInfiniteEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryIntersectedEntitiesXYFast
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryIntersectedEntitiesXYFast
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryIntersectedEntitiesXYFast(
                  a1_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryIntersectedEntitiesXYFast";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryIntersectedShapesXYFast
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryIntersectedShapesXYFast
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: box (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        
  // convert js parameter to cpp: noInfiniteEntities (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryIntersectedShapesXYFast(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryIntersectedShapesXYFast";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryIntersectedEntitiesXY
    // Source: 
    // Static: false
    // Parameters: 7
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryIntersectedEntitiesXY
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
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

   && RJSHelper_qcad::is_RBlock_Id(handler, a4
    , true
  
  )

   && RJSHelper_qcad::is_QList_RS_EntityType(handler, a5
    , true
  
  )

   && RJSHelper::is_bool(handler, a6
    , true
  
  )

   && RJSHelper_qcad::is_RLayer_Id(handler, a7
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: box (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        
  // convert js parameter to cpp: checkBoundingBoxOnly (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: includeLockedLayers (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
          }
        
  // convert js parameter to cpp: blockId (RBlock::Id)
  
RBlock::Id a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RBlock::INVALID_ID;
          }
          else {
            a4_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a4);
          }
        
  // convert js parameter to cpp: filter (QList<RS::EntityType>)
  
QList<RS::EntityType> a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = RDEFAULT_QLIST_RS_ENTITYTYPE;
          }
          else {
            a5_cpp = RJSHelper_qcad::js2cpp_QList_RS_EntityType(handler, a5);
          }
        
  // convert js parameter to cpp: selectedOnly (bool)
  
bool a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = false;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_bool(handler, a6);
          }
        
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a7_cpp;

      
          if (a7.isUndefined()) {
            a7_cpp = RLayer::INVALID_ID;
          }
          else {
            a7_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a7);
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryIntersectedEntitiesXY(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryIntersectedEntitiesXY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryContainedEntitiesXY
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryContainedEntitiesXY
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryContainedEntitiesXY(
                  a1_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryContainedEntitiesXY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: querySelectedEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::querySelectedEntities
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->querySelectedEntities(
                  
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for querySelectedEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryConnectedEntities
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryConnectedEntities
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
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RLayer_Id(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: tolerance (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RS::PointTolerance;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RLayer::INVALID_ID;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a3);
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
                RDocument* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryConnectedEntities(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryConnectedEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryPropertyEditorObjects
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryPropertyEditorObjects
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
                RDocument* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryPropertyEditorObjects(
                  
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryPropertyEditorObjects";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryDocumentVariables
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryDocumentVariables
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
                RDocument* w = getWrapped();
                QSharedPointer<RDocumentVariables> res = 
                    
                w->queryDocumentVariables(
                  
                );
              
            // return type: QSharedPointer<RDocumentVariables>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RDocumentVariables(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryDocumentVariables";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryDocumentVariablesDirect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryDocumentVariablesDirect
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
                RDocument* w = getWrapped();
                QSharedPointer<RDocumentVariables> res = 
                    
                w->queryDocumentVariablesDirect(
                  
                );
              
            // return type: QSharedPointer<RDocumentVariables>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RDocumentVariables(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryDocumentVariablesDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryDimStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryDimStyle
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
                RDocument* w = getWrapped();
                QSharedPointer<RDimStyle> res = 
                    
                w->queryDimStyle(
                  
                );
              
            // return type: QSharedPointer<RDimStyle>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RDimStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryDimStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryDimStyleDirect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryDimStyleDirect
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
                RDocument* w = getWrapped();
                QSharedPointer<RDimStyle> res = 
                    
                w->queryDimStyleDirect(
                  
                );
              
            // return type: QSharedPointer<RDimStyle>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RDimStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryDimStyleDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryObject
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryObject
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectId (RObject::Id)
  
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
                RDocument* w = getWrapped();
                QSharedPointer<RObject> res = 
                    
                w->queryObject(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RObject>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RObject(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryObject";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryObjectDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryObjectDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectId (RObject::Id)
  
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
                RDocument* w = getWrapped();
                QSharedPointer<RObject> res = 
                    
                w->queryObjectDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RObject>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RObject(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryObjectDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryObjectCC
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryObjectCC
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectId (RObject::Id)
  
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
                RDocument* w = getWrapped();
                RObject* res = 
                    
                w->queryObjectCC(
                  a1_cpp
    
                );
              
            // return type: RObject*

            return RJSHelper_qcad::cpp2js_RObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryObjectCC";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryObjectByHandle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryObjectByHandle
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Handle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectHandle (RObject::Handle)
  
RObject::Handle a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Handle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QSharedPointer<RObject> res = 
                    
                w->queryObjectByHandle(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RObject>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RObject(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryObjectByHandle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryEntity
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QSharedPointer<REntity> res = 
                    
                w->queryEntity(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<REntity>

            return RJSHelper_qcad::cpp2js_QSharedPointer_REntity(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryEntityDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryEntityDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QSharedPointer<REntity> res = 
                    
                w->queryEntityDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<REntity>

            return RJSHelper_qcad::cpp2js_QSharedPointer_REntity(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryEntityDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryVisibleEntityDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryVisibleEntityDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QSharedPointer<REntity> res = 
                    
                w->queryVisibleEntityDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<REntity>

            return RJSHelper_qcad::cpp2js_QSharedPointer_REntity(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryVisibleEntityDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryUcs
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryUcs
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RUcs_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ucsId (RUcs::Id)
  
RUcs::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RUcs_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QSharedPointer<RUcs> res = 
                    
                w->queryUcs(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RUcs>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RUcs(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ucsName (QString)
  
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
                RDocument* w = getWrapped();
                QSharedPointer<RUcs> res = 
                    
                w->queryUcs(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RUcs>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RUcs(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryUcs";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryLayer
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryLayer
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                QSharedPointer<RLayer> res = 
                    
                w->queryLayer(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayer>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayer(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

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
                RDocument* w = getWrapped();
                QSharedPointer<RLayer> res = 
                    
                w->queryLayer(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayer>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayer(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryLayerDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryLayerDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                QSharedPointer<RLayer> res = 
                    
                w->queryLayerDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayer>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayer(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayerDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryLayerState
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryLayerState
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayerState_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerStateId (RLayerState::Id)
  
RLayerState::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayerState_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QSharedPointer<RLayerState> res = 
                    
                w->queryLayerState(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayerState>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayerState(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerStateName (QString)
  
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
                RDocument* w = getWrapped();
                QSharedPointer<RLayerState> res = 
                    
                w->queryLayerState(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayerState>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayerState(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayerState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryLayerStateDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryLayerStateDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayerState_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerStateId (RLayerState::Id)
  
RLayerState::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayerState_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QSharedPointer<RLayerState> res = 
                    
                w->queryLayerStateDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayerState>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayerState(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayerStateDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryLayout
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryLayout
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayout_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutId (RLayout::Id)
  
RLayout::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayout_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QSharedPointer<RLayout> res = 
                    
                w->queryLayout(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayout>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayout(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutName (QString)
  
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
                RDocument* w = getWrapped();
                QSharedPointer<RLayout> res = 
                    
                w->queryLayout(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayout>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayout(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryLayoutDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryLayoutDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayout_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutId (RLayout::Id)
  
RLayout::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayout_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QSharedPointer<RLayout> res = 
                    
                w->queryLayoutDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayout>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayout(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayoutDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryBlock
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                QSharedPointer<RBlock> res = 
                    
                w->queryBlock(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RBlock>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RBlock(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockName (QString)
  
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
                RDocument* w = getWrapped();
                QSharedPointer<RBlock> res = 
                    
                w->queryBlock(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RBlock>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RBlock(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryBlockDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryBlockDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                QSharedPointer<RBlock> res = 
                    
                w->queryBlockDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RBlock>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RBlock(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockName (QString)
  
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
                RDocument* w = getWrapped();
                QSharedPointer<RBlock> res = 
                    
                w->queryBlockDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RBlock>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RBlock(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryBlockDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryView
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryView
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RView_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewId (RView::Id)
  
RView::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RView_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QSharedPointer<RView> res = 
                    
                w->queryView(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RView>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RView(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewName (QString)
  
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
                RDocument* w = getWrapped();
                QSharedPointer<RView> res = 
                    
                w->queryView(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RView>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RView(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryLinetype
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryLinetype
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                QSharedPointer<RLinetype> res = 
                    
                w->queryLinetype(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLinetype>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLinetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeName (QString)
  
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
                RDocument* w = getWrapped();
                QSharedPointer<RLinetype> res = 
                    
                w->queryLinetype(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLinetype>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLinetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLinetype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: countSelectedEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::countSelectedEntities
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
                RDocument* w = getWrapped();
                int res = 
                    
                w->countSelectedEntities(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for countSelectedEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: clearSelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::clearSelection
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
                RDocument* w = getWrapped();
                
                w->clearSelection(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearSelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: selectAllEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::selectAllEntities
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
                RDocument* w = getWrapped();
                
                w->selectAllEntities(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for selectAllEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: selectEntity
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::selectEntity
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: add (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
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
                RDocument* w = getWrapped();
                
                w->selectEntity(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for selectEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: deselectEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::deselectEntity
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                
                w->deselectEntity(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deselectEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: selectEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::selectEntities
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: add (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
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
                RDocument* w = getWrapped();
                int res = 
                    
                w->selectEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for selectEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: deselectEntities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::deselectEntities
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                int res = 
                    
                w->deselectEntities(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for deselectEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isSelected
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isSelected
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isSelected(
                  a1_cpp
    
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
            
    // Class: RDocument
    // Function: isSelectedWorkingSet
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isSelectedWorkingSet
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isSelectedWorkingSet(
                  a1_cpp
    
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
            
    // Class: RDocument
    // Function: isLayerLocked
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isLayerLocked
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isLayerLocked(
                  a1_cpp
    
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
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isLayerLocked(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayerLocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isParentLayerLocked
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isParentLayerLocked
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isParentLayerLocked(
                  a1_cpp
    
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
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isParentLayerLocked(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isParentLayerLocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isEntity
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectId (RObject::Id)
  
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isEntity(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isEntityEditable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isEntityEditable
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isEntityEditable(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEntityEditable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isLayerOff
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isLayerOff
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isLayerOff(
                  a1_cpp
    
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
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isLayerOff(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayerOff";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isLayerOffOrFrozen
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isLayerOffOrFrozen
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isLayerOffOrFrozen(
                  a1_cpp
    
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
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isLayerOffOrFrozen(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayerOffOrFrozen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isLayerFrozen
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isLayerFrozen
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isLayerFrozen(
                  a1_cpp
    
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
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isLayerFrozen(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayerFrozen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isLayerPlottable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isLayerPlottable
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isLayerPlottable(
                  a1_cpp
    
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
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isLayerPlottable(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayerPlottable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isLayerSnappable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isLayerSnappable
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isLayerSnappable(
                  a1_cpp
    
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
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isLayerSnappable(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayerSnappable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isParentLayerFrozen
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isParentLayerFrozen
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isParentLayerFrozen(
                  a1_cpp
    
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
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isParentLayerFrozen(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isParentLayerFrozen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isBlockFrozen
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isBlockFrozen
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isBlockFrozen(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBlockFrozen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isLayoutBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isLayoutBlock
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isLayoutBlock(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayoutBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isEntityLayerFrozen
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isEntityLayerFrozen
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isEntityLayerFrozen(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEntityLayerFrozen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isEntityVisible
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isEntityVisible
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
        RJSHelper_qcad::is_REntity_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RBlock_Id(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (REntity)
  

          // non copyable:
          REntity*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a1);
        
  // convert js parameter to cpp: blockId (RBlock::Id)
  
RBlock::Id a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RBlock::INVALID_ID;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a2);
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isEntityVisible(
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

                  qWarning() << "no matching function variant found for isEntityVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isParentLayerSnappable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isParentLayerSnappable
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isParentLayerSnappable(
                  a1_cpp
    
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
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isParentLayerSnappable(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isParentLayerSnappable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isParentLayerPlottable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isParentLayerPlottable
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isParentLayerPlottable(
                  a1_cpp
    
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
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isParentLayerPlottable(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isParentLayerPlottable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: hasSelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::hasSelection
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->hasSelection(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasSelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getBoundingBox
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getBoundingBox
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
        RJSHelper::is_bool(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ignoreHiddenLayers (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = true;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        
  // convert js parameter to cpp: ignoreEmpty (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
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
                RDocument* w = getWrapped();
                RBox res = 
                    
                w->getBoundingBox(
                  a1_cpp
    , a2_cpp
    
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
            
    // Class: RDocument
    // Function: getSelectionBox
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getSelectionBox
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
                RDocument* w = getWrapped();
                RBox res = 
                    
                w->getSelectionBox(
                  
                );
              
            // return type: RBox

            return RJSHelper_qcad::cpp2js_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSelectionBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getEntitiesBox
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getEntitiesBox
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ids (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                RBox res = 
                    
                w->getEntitiesBox(
                  a1_cpp
    
                );
              
            // return type: RBox

            return RJSHelper_qcad::cpp2js_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEntitiesBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: clearSpatialIndices
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::clearSpatialIndices
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
                RDocument* w = getWrapped();
                
                w->clearSpatialIndices(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearSpatialIndices";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: rebuildSpatialIndex
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::rebuildSpatialIndex
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
                RDocument* w = getWrapped();
                
                w->rebuildSpatialIndex(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for rebuildSpatialIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: addToSpatialIndex
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::addToSpatialIndex
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_REntity(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (QSharedPointer<REntity>)
  
QSharedPointer<REntity> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_REntity(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                
                w->addToSpatialIndex(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addToSpatialIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: blockContainsReferences
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::blockContainsReferences
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

   && RJSHelper_qcad::is_RBlock_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
RBlock::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a1);
        
  // convert js parameter to cpp: referencedBlockId (RBlock::Id)
  
RBlock::Id a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->blockContainsReferences(
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

                  qWarning() << "no matching function variant found for blockContainsReferences";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: removeBlockFromSpatialIndex
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::removeBlockFromSpatialIndex
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
                RDocument* w = getWrapped();
                
                w->removeBlockFromSpatialIndex(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeBlockFromSpatialIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: addBlockToSpatialIndex
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::addBlockToSpatialIndex
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

   && RJSHelper_qcad::is_RObject_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
RBlock::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a1);
        
  // convert js parameter to cpp: ignoreBlockId (RObject::Id)
  
RObject::Id a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                bool res = 
                    
                w->addBlockToSpatialIndex(
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

                  qWarning() << "no matching function variant found for addBlockToSpatialIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: removeFromSpatialIndex
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::removeFromSpatialIndex
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_REntity(handler, a1
  )

   && RJSHelper_qcad::is_QList_RBox(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (QSharedPointer<REntity>)
  
QSharedPointer<REntity> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_REntity(handler, a1);
        
  // convert js parameter to cpp: boundingBoxes (QList<RBox>)
  
QList<RBox> a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_QLIST_RBOX;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_QList_RBox(handler, a2);
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
                RDocument* w = getWrapped();
                
                w->removeFromSpatialIndex(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeFromSpatialIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: updateAllEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::updateAllEntities
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
                RDocument* w = getWrapped();
                
                w->updateAllEntities(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateAllEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: undo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::undo
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
                RDocument* w = getWrapped();
                QList<RTransaction> res = 
                    
                w->undo(
                  
                );
              
            // return type: QList<RTransaction>

            return RJSHelper_qcad::cpp2js_QList_RTransaction(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for undo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: redo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::redo
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
                RDocument* w = getWrapped();
                QList<RTransaction> res = 
                    
                w->redo(
                  
                );
              
            // return type: QList<RTransaction>

            return RJSHelper_qcad::cpp2js_QList_RTransaction(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for redo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isUndoAvailable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isUndoAvailable
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isUndoAvailable(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isUndoAvailable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isRedoAvailable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isRedoAvailable
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isRedoAvailable(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRedoAvailable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: startTransactionGroup
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::startTransactionGroup
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
                RDocument* w = getWrapped();
                
                w->startTransactionGroup(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startTransactionGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getTransactionGroup
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getTransactionGroup
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
                RDocument* w = getWrapped();
                int res = 
                    
                w->getTransactionGroup(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTransactionGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setAutoTransactionGroup
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setAutoTransactionGroup
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
                RDocument* w = getWrapped();
                
                w->setAutoTransactionGroup(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoTransactionGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getAutoTransactionGroup
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getAutoTransactionGroup
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->getAutoTransactionGroup(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAutoTransactionGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: resetTransactionStack
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::resetTransactionStack
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
                RDocument* w = getWrapped();
                
                w->resetTransactionStack(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resetTransactionStack";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setFileName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setFileName
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
                RDocument* w = getWrapped();
                
                w->setFileName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFileName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getFileName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getFileName
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getFileName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFileName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setFileVersion
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setFileVersion
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
    
  // convert js parameter to cpp: fv (QString)
  
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
                RDocument* w = getWrapped();
                
                w->setFileVersion(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFileVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getFileVersion
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getFileVersion
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getFileVersion(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFileVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryCurrentLayer
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryCurrentLayer
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
                RDocument* w = getWrapped();
                QSharedPointer<RLayer> res = 
                    
                w->queryCurrentLayer(
                  
                );
              
            // return type: QSharedPointer<RLayer>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayer(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryCurrentLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setCurrentLayer
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setCurrentLayer
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
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
                RDocument* w = getWrapped();
                
                w->setCurrentLayer(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
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
                RDocument* w = getWrapped();
                
                w->setCurrentLayer(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getCurrentLayerId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getCurrentLayerId
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
                RDocument* w = getWrapped();
                RLayer::Id res = 
                    
                w->getCurrentLayerId(
                  
                );
              
            // return type: RLayer::Id

            return RJSHelper_qcad::cpp2js_RLayer_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentLayerId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getCurrentLayerName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getCurrentLayerName
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getCurrentLayerName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentLayerName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setCurrentColor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setCurrentColor
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
                RDocument* w = getWrapped();
                
                w->setCurrentColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getCurrentColor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getCurrentColor
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
                RDocument* w = getWrapped();
                RColor res = 
                    
                w->getCurrentColor(
                  
                );
              
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setCurrentLineweight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setCurrentLineweight
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
    
  // convert js parameter to cpp: lw (RLineweight::Lineweight)
  
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
                RDocument* w = getWrapped();
                
                w->setCurrentLineweight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getCurrentLineweight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getCurrentLineweight
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
                RDocument* w = getWrapped();
                RLineweight::Lineweight res = 
                    
                w->getCurrentLineweight(
                  
                );
              
            // return type: RLineweight::Lineweight

            return RJSHelper_qcad::cpp2js_RLineweight_Lineweight(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setCurrentLinetype
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setCurrentLinetype
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
    
  // convert js parameter to cpp: ltId (RLinetype::Id)
  
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
                RDocument* w = getWrapped();
                
                w->setCurrentLinetype(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                
                w->setCurrentLinetype(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLinetype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setCurrentLinetypePattern
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setCurrentLinetypePattern
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
                RDocument* w = getWrapped();
                
                w->setCurrentLinetypePattern(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getCurrentLinetypeId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getCurrentLinetypeId
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
                RDocument* w = getWrapped();
                RLinetype::Id res = 
                    
                w->getCurrentLinetypeId(
                  
                );
              
            // return type: RLinetype::Id

            return RJSHelper_qcad::cpp2js_RLinetype_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentLinetypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getCurrentLinetypePattern
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getCurrentLinetypePattern
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
                RDocument* w = getWrapped();
                RLinetypePattern res = 
                    
                w->getCurrentLinetypePattern(
                  
                );
              
            // return type: RLinetypePattern

            return RJSHelper_qcad::cpp2js_RLinetypePattern(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryCurrentBlock
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryCurrentBlock
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
                RDocument* w = getWrapped();
                QSharedPointer<RBlock> res = 
                    
                w->queryCurrentBlock(
                  
                );
              
            // return type: QSharedPointer<RBlock>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RBlock(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryCurrentBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setCurrentBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setCurrentBlock
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
                RDocument* w = getWrapped();
                
                w->setCurrentBlock(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockName (QString)
  
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
                RDocument* w = getWrapped();
                
                w->setCurrentBlock(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getCurrentBlockId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getCurrentBlockId
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
                RDocument* w = getWrapped();
                RBlock::Id res = 
                    
                w->getCurrentBlockId(
                  
                );
              
            // return type: RBlock::Id

            return RJSHelper_qcad::cpp2js_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getCurrentBlockName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getCurrentBlockName
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getCurrentBlockName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentBlockName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setCurrentViewport
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setCurrentViewport
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
    
  // convert js parameter to cpp: viewportId (RObject::Id)
  
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
                RDocument* w = getWrapped();
                
                w->setCurrentViewport(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getCurrentViewportId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getCurrentViewportId
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
                RDocument* w = getWrapped();
                RObject::Id res = 
                    
                w->getCurrentViewportId(
                  
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentViewportId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: hasCurrentViewport
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::hasCurrentViewport
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->hasCurrentViewport(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasCurrentViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: unsetCurrentViewport
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::unsetCurrentViewport
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
                RDocument* w = getWrapped();
                
                w->unsetCurrentViewport(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unsetCurrentViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: queryCurrentView
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::queryCurrentView
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
                RDocument* w = getWrapped();
                QSharedPointer<RView> res = 
                    
                w->queryCurrentView(
                  
                );
              
            // return type: QSharedPointer<RView>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RView(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryCurrentView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setCurrentView
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setCurrentView
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RView_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewId (RView::Id)
  
RView::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RView_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                
                w->setCurrentView(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewName (QString)
  
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
                RDocument* w = getWrapped();
                
                w->setCurrentView(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getCurrentViewId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getCurrentViewId
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
                RDocument* w = getWrapped();
                RView::Id res = 
                    
                w->getCurrentViewId(
                  
                );
              
            // return type: RView::Id

            return RJSHelper_qcad::cpp2js_RView_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentViewId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getTempBlockName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getTempBlockName
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getTempBlockName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTempBlockName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getBlockName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getBlockName
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getBlockName(
                  a1_cpp
    
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
            
    // Class: RDocument
    // Function: getBlockNameFromHandle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getBlockNameFromHandle
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Handle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockHandle (RBlock::Handle)
  
RBlock::Handle a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBlock_Handle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getBlockNameFromHandle(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockNameFromHandle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getBlockNameFromLayout
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getBlockNameFromLayout
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutName (QString)
  
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getBlockNameFromLayout(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayout_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutId (RLayout::Id)
  
RLayout::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayout_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getBlockNameFromLayout(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockNameFromLayout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getBlockNames
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getBlockNames
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rxStr (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_QSTRING;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
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
                RDocument* w = getWrapped();
                QSet<QString> res = 
                    
                w->getBlockNames(
                  a1_cpp
    
                );
              
            // return type: QSet<QString>

            return RJSHelper::cpp2js_QSet_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: sortBlocks
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::sortBlocks
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_RBlock_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockIds (QList<RBlock::Id>)
  
QList<RBlock::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RBlock_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QList<RBlock::Id> res = 
                    
                w->sortBlocks(
                  a1_cpp
    
                );
              
            // return type: QList<RBlock::Id>

            return RJSHelper_qcad::cpp2js_QList_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sortBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: sortLayers
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::sortLayers
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerIds (QList<RLayer::Id>)
  
QList<RLayer::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QList<RLayer::Id> res = 
                    
                w->sortLayers(
                  a1_cpp
    
                );
              
            // return type: QList<RLayer::Id>

            return RJSHelper_qcad::cpp2js_QList_RLayer_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sortLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLayerName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLayerName
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getLayerName(
                  a1_cpp
    
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
            
    // Class: RDocument
    // Function: getLayerNames
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLayerNames
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rxStr (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_QSTRING;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
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
                RDocument* w = getWrapped();
                QSet<QString> res = 
                    
                w->getLayerNames(
                  a1_cpp
    
                );
              
            // return type: QSet<QString>

            return RJSHelper::cpp2js_QSet_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLayerStateName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLayerStateName
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayerState_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerStateId (RLayerState::Id)
  
RLayerState::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayerState_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getLayerStateName(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerStateName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLayerStateNames
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLayerStateNames
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rxStr (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_QSTRING;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
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
                RDocument* w = getWrapped();
                QSet<QString> res = 
                    
                w->getLayerStateNames(
                  a1_cpp
    
                );
              
            // return type: QSet<QString>

            return RJSHelper::cpp2js_QSet_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerStateNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLayoutName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLayoutName
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayout_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutId (RLayout::Id)
  
RLayout::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayout_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getLayoutName(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayoutName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getViewNames
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getViewNames
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
                RDocument* w = getWrapped();
                QSet<QString> res = 
                    
                w->getViewNames(
                  
                );
              
            // return type: QSet<QString>

            return RJSHelper::cpp2js_QSet_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getViewNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: hasLayer
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::hasLayer
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->hasLayer(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: hasLayerStates
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::hasLayerStates
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->hasLayerStates(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasLayerStates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: hasLayerState
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::hasLayerState
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerStateName (QString)
  
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->hasLayerState(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasLayerState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: hasBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::hasBlock
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockName (QString)
  
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->hasBlock(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: hasLayout
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::hasLayout
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutName (QString)
  
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->hasLayout(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasLayout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: hasView
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::hasView
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewName (QString)
  
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->hasView(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: hasLinetype
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::hasLinetype
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeName (QString)
  
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->hasLinetype(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasLinetype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLayerId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLayerId
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                RLayer::Id res = 
                    
                w->getLayerId(
                  a1_cpp
    
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
            
    // Class: RDocument
    // Function: getLayer0Id
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLayer0Id
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
                RDocument* w = getWrapped();
                RLayer::Id res = 
                    
                w->getLayer0Id(
                  
                );
              
            // return type: RLayer::Id

            return RJSHelper_qcad::cpp2js_RLayer_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayer0Id";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLayerStateId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLayerStateId
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerStateName (QString)
  
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
                RDocument* w = getWrapped();
                RLayerState::Id res = 
                    
                w->getLayerStateId(
                  a1_cpp
    
                );
              
            // return type: RLayerState::Id

            return RJSHelper_qcad::cpp2js_RLayerState_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerStateId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getBlockId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getBlockId
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockName (QString)
  
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
                RDocument* w = getWrapped();
                RBlock::Id res = 
                    
                w->getBlockId(
                  a1_cpp
    
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
            
    // Class: RDocument
    // Function: getBlockIdAuto
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getBlockIdAuto
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockLayoutName (QString)
  
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
                RDocument* w = getWrapped();
                RBlock::Id res = 
                    
                w->getBlockIdAuto(
                  a1_cpp
    
                );
              
            // return type: RBlock::Id

            return RJSHelper_qcad::cpp2js_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockIdAuto";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getModelSpaceBlockId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getModelSpaceBlockId
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
                RDocument* w = getWrapped();
                RBlock::Id res = 
                    
                w->getModelSpaceBlockId(
                  
                );
              
            // return type: RBlock::Id

            return RJSHelper_qcad::cpp2js_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getModelSpaceBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLinetypeId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLinetypeId
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeName (QString)
  
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
                RDocument* w = getWrapped();
                RLinetype::Id res = 
                    
                w->getLinetypeId(
                  a1_cpp
    
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
            
    // Class: RDocument
    // Function: getLinetypeByLayerId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLinetypeByLayerId
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
                RDocument* w = getWrapped();
                RLinetype::Id res = 
                    
                w->getLinetypeByLayerId(
                  
                );
              
            // return type: RLinetype::Id

            return RJSHelper_qcad::cpp2js_RLinetype_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeByLayerId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLinetypeByBlockId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLinetypeByBlockId
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
                RDocument* w = getWrapped();
                RLinetype::Id res = 
                    
                w->getLinetypeByBlockId(
                  
                );
              
            // return type: RLinetype::Id

            return RJSHelper_qcad::cpp2js_RLinetype_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeByBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLinetypeName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLinetypeName
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getLinetypeName(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLinetypeDescription
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLinetypeDescription
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getLinetypeDescription(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeDescription";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLinetypeLabel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLinetypeLabel
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getLinetypeLabel(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeLabel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLinetypeNames
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLinetypeNames
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
                RDocument* w = getWrapped();
                QSet<QString> res = 
                    
                w->getLinetypeNames(
                  
                );
              
            // return type: QSet<QString>

            return RJSHelper::cpp2js_QSet_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLinetypePatterns
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLinetypePatterns
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
                RDocument* w = getWrapped();
                QList<RLinetypePattern> res = 
                    
                w->getLinetypePatterns(
                  
                );
              
            // return type: QList<RLinetypePattern>

            return RJSHelper_qcad::cpp2js_QList_RLinetypePattern(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypePatterns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isByLayer
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isByLayer
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isByLayer(
                  a1_cpp
    
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
            
    // Class: RDocument
    // Function: isByBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isByBlock
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isByBlock(
                  a1_cpp
    
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
            
    // Class: RDocument
    // Function: getMaxLineweight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getMaxLineweight
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
                RDocument* w = getWrapped();
                RLineweight::Lineweight res = 
                    
                w->getMaxLineweight(
                  
                );
              
            // return type: RLineweight::Lineweight

            return RJSHelper_qcad::cpp2js_RLineweight_Lineweight(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMaxLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getVariables
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getVariables
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
                RDocument* w = getWrapped();
                QStringList res = 
                    
                w->getVariables(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVariables";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setVariable
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setVariable
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        
  // convert js parameter to cpp: overwrite (bool)
  
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
                RDocument* w = getWrapped();
                
                w->setVariable(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getVariable
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getVariable
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: defaultValue (QVariant)
  
QVariant a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_QVARIANT;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
          }
        
  // convert js parameter to cpp: useSettings (bool)
  
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
                RDocument* w = getWrapped();
                QVariant res = 
                    
                w->getVariable(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: hasVariable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::hasVariable
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->hasVariable(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: removeVariable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::removeVariable
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
    
  // convert js parameter to cpp: key (QString)
  
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
                RDocument* w = getWrapped();
                
                w->removeVariable(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setKnownVariable
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setKnownVariable
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
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = NULL;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a3);
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
                RDocument* w = getWrapped();
                
                w->setKnownVariable(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        
  // convert js parameter to cpp: value (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = NULL;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a3);
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
                RDocument* w = getWrapped();
                
                w->setKnownVariable(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setKnownVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getKnownVariable
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getKnownVariable
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
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        
  // convert js parameter to cpp: defaultValue (QVariant)
  
QVariant a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_QVARIANT;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
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
                RDocument* w = getWrapped();
                QVariant res = 
                    
                w->getKnownVariable(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getKnownVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setUnit
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setUnit
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_Unit(handler, a1
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: unit (RS::Unit)
  
RS::Unit a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
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
                RDocument* w = getWrapped();
                
                w->setUnit(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUnit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getUnit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getUnit
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
                RDocument* w = getWrapped();
                RS::Unit res = 
                    
                w->getUnit(
                  
                );
              
            // return type: RS::Unit

            return RJSHelper_qcad::cpp2js_RS_Unit(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getUnit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setMeasurement
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setMeasurement
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_Measurement(handler, a1
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m (RS::Measurement)
  
RS::Measurement a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_Measurement(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
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
                RDocument* w = getWrapped();
                
                w->setMeasurement(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMeasurement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getMeasurement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getMeasurement
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
                RDocument* w = getWrapped();
                RS::Measurement res = 
                    
                w->getMeasurement(
                  
                );
              
            // return type: RS::Measurement

            return RJSHelper_qcad::cpp2js_RS_Measurement(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMeasurement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isMetric
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isMetric
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isMetric(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isMetric";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setDimensionFont
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setDimensionFont
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

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
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
                RDocument* w = getWrapped();
                
                w->setDimensionFont(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimensionFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getDimensionFont
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getDimensionFont
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getDimensionFont(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimensionFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setLinetypeScale
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setLinetypeScale
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

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
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
                RDocument* w = getWrapped();
                
                w->setLinetypeScale(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypeScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLinetypeScale
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLinetypeScale
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
                RDocument* w = getWrapped();
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
            
    // Class: RDocument
    // Function: formatLinear
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::formatLinear
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
    
  // convert js parameter to cpp: value (double)
  
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->formatLinear(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for formatLinear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: formatAngle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::formatAngle
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
    
  // convert js parameter to cpp: value (double)
  
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->formatAngle(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for formatAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setLinearFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setLinearFormat
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_LinearFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (RS::LinearFormat)
  
RS::LinearFormat a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_LinearFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDocument* w = getWrapped();
                
                w->setLinearFormat(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinearFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLinearFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLinearFormat
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
                RDocument* w = getWrapped();
                RS::LinearFormat res = 
                    
                w->getLinearFormat(
                  
                );
              
            // return type: RS::LinearFormat

            return RJSHelper_qcad::cpp2js_RS_LinearFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinearFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLinearPrecision
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLinearPrecision
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
                RDocument* w = getWrapped();
                int res = 
                    
                w->getLinearPrecision(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinearPrecision";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: showLeadingZeroes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::showLeadingZeroes
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->showLeadingZeroes(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for showLeadingZeroes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: showTrailingZeroes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::showTrailingZeroes
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->showTrailingZeroes(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for showTrailingZeroes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: showLeadingZeroesAngle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::showLeadingZeroesAngle
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->showLeadingZeroesAngle(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for showLeadingZeroesAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: showTrailingZeroesAngle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::showTrailingZeroesAngle
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->showTrailingZeroesAngle(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for showTrailingZeroesAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getAngleFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getAngleFormat
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
                RDocument* w = getWrapped();
                RS::AngleFormat res = 
                    
                w->getAngleFormat(
                  
                );
              
            // return type: RS::AngleFormat

            return RJSHelper_qcad::cpp2js_RS_AngleFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAngleFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getAnglePrecision
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getAnglePrecision
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
                RDocument* w = getWrapped();
                int res = 
                    
                w->getAnglePrecision(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAnglePrecision";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getDecimalSeparator
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getDecimalSeparator
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
                RDocument* w = getWrapped();
                char res = 
                    
                w->getDecimalSeparator(
                  
                );
              
            // return type: char

            return RJSHelper::cpp2js_char(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDecimalSeparator";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isModified
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isModified
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isModified(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isModified";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLastModifiedDateTime
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLastModifiedDateTime
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
                RDocument* w = getWrapped();
                QDateTime res = 
                    
                w->getLastModifiedDateTime(
                  
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLastModifiedDateTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getLastModified
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getLastModified
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->getLastModified(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLastModified";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setModified
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setModified
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
    
  // convert js parameter to cpp: m (bool)
  
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
                RDocument* w = getWrapped();
                
                w->setModified(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModified";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: copyVariablesFrom
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::copyVariablesFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (RDocument)
  

          // non copyable:
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
                RDocument* w = getWrapped();
                
                w->copyVariablesFrom(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for copyVariablesFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: addAutoVariable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::addAutoVariable
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
    
  // convert js parameter to cpp: value (double)
  
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->addAutoVariable(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for addAutoVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getAutoVariables
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getAutoVariables
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
                RDocument* w = getWrapped();
                QStringList res = 
                    
                w->getAutoVariables(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAutoVariables";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: substituteAutoVariables
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::substituteAutoVariables
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
    
  // convert js parameter to cpp: expression (QString)
  
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
                RDocument* w = getWrapped();
                QString res = 
                    
                w->substituteAutoVariables(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for substituteAutoVariables";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: eval
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::eval
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
    
  // convert js parameter to cpp: expression (QString)
  
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
                RDocument* w = getWrapped();
                double res = 
                    
                w->eval(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for eval";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: isEditingWorkingSet
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::isEditingWorkingSet
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->isEditingWorkingSet(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEditingWorkingSet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setIgnoreWorkingSet
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setIgnoreWorkingSet
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
                RDocument* w = getWrapped();
                
                w->setIgnoreWorkingSet(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setIgnoreWorkingSet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: setNotifyListeners
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::setNotifyListeners
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
                RDocument* w = getWrapped();
                
                w->setNotifyListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNotifyListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: getNotifyListeners
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::getNotifyListeners
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
                RDocument* w = getWrapped();
                bool res = 
                    
                w->getNotifyListeners(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNotifyListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDocument
    // Function: dump
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDocument_Wrapper::dump
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
                RDocument* w = getWrapped();
                
                w->dump(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dump";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rdocument_wrapper.cpp"
  
