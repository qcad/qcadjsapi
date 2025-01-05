
  // Auto generated
  
  // include header:
  //#include "RCopyOperationwrapper.h"
  //#include "header_cpp.h"
  
    #include "rcopyoperation_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RCopyOperation*> RCopyOperation_Wrapper::basecasters_RCopyOperation;
    
    // static functions implementation in singleton wrapper:
    
    void RCopyOperation_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RCopyOperation_Wrapper>("org.qcad", 1, 0, "RCopyOperation_Wrapper");
        qmlRegisterInterface<RCopyOperation_Wrapper>("RCopyOperation_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RCopyOperation* t = new RJSType_RCopyOperation();
          global.setProperty("RJSType_RCopyOperation", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RCopyOperation::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RCopyOperation_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RCopyOperation_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RCopyOperation_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RCopyOperation_BaseJs", mob);
      
      QString fileName = ":generator/js/RCopyOperation.js";
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
    RCopyOperation_Wrapper::RCopyOperation_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RCopyOperation_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RCopyOperation_Wrapper::RCopyOperation_Wrapper(RJSApi& h, RCopyOperation* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RCopyOperation_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RCopyOperation_Wrapper"));
              //setObjectName("RCopyOperation_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RCopyOperation_Wrapper::~RCopyOperation_Wrapper() {
            //RDebug::decCounter(QString("RCopyOperation_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RCopyOperation_Wrapper"));

            //qDebug() << "RCopyOperation_Wrapper::~RCopyOperation_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RCopyOperation";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RCopyOperation_Wrapper::initConnections() {

          //setObjectName("RCopyOperation_Wrapper");

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
  
    // Class: RCopyOperation
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
RCopyOperation_Wrapper::RCopyOperation_Wrapper
                
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
                
                  //RDebug::incCounter(QString("RCopyOperation_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RCopyOperation_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: offset (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: src (RDocument)
  

          // non copyable:
          RDocument*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new RCopyOperation(
                  a1_cpp
    , *a2_cpp
    
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
                  

                  qWarning() << "no matching constructor variant found for RCopyOperation";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RCopyOperation
    // Function: getEntityTypeFilter
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::getEntityTypeFilter
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
                RCopyOperation* w = getWrapped();
                RS::EntityType res = 
                    
                w->getEntityTypeFilter(
                  
                );
              
            // return type: RS::EntityType

            return RJSHelper_qcad::cpp2js_RS_EntityType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEntityTypeFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: setRecordAffectedObjects
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::setRecordAffectedObjects
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
                RCopyOperation* w = getWrapped();
                
                w->setRecordAffectedObjects(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRecordAffectedObjects";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: setSpatialIndexDisabled
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::setSpatialIndexDisabled
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
                RCopyOperation* w = getWrapped();
                
                w->setSpatialIndexDisabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSpatialIndexDisabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: setAllowInvisible
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::setAllowInvisible
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
                RCopyOperation* w = getWrapped();
                
                w->setAllowInvisible(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAllowInvisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: setAllowAll
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::setAllowAll
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
                RCopyOperation* w = getWrapped();
                
                w->setAllowAll(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAllowAll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: setKeepChildren
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::setKeepChildren
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
                RCopyOperation* w = getWrapped();
                
                w->setKeepChildren(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setKeepChildren";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: setTransactionGroup
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::setTransactionGroup
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
    
  // convert js parameter to cpp: g (int)
  
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
                RCopyOperation* w = getWrapped();
                
                w->setTransactionGroup(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTransactionGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: getTransactionGroup
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::getTransactionGroup
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
                RCopyOperation* w = getWrapped();
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
            
    // Class: RCopyOperation
    // Function: setText
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::setText
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
                RCopyOperation* w = getWrapped();
                
                w->setText(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: getText
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::getText
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
                RCopyOperation* w = getWrapped();
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
            
    // Class: RCopyOperation
    // Function: getTransactionTypes
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::getTransactionTypes
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
                RCopyOperation* w = getWrapped();
                RTransaction::Types res = 
                    
                w->getTransactionTypes(
                  
                );
              
            // return type: RTransaction::Types

            return RJSHelper_qcad::cpp2js_RTransaction_Types(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTransactionTypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: setTransactionType
    // Source: ROperation
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::setTransactionType
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTransaction_Type(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: t (RTransaction::Type)
  
RTransaction::Type a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTransaction_Type(handler, a1);
        
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
                RCopyOperation* w = getWrapped();
                
                w->setTransactionType(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTransactionType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: getTransactionType
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::getTransactionType
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTransaction_Type(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: t (RTransaction::Type)
  
RTransaction::Type a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTransaction_Type(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RCopyOperation* w = getWrapped();
                bool res = 
                    
                w->getTransactionType(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTransactionType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: copyEntity
    // Source: RClipboardOperation
    // Static: false
    // Parameters: 18
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::copyEntity
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
  a9, 
  const QJSValue& 
  a10, 
  const QJSValue& 
  a11, 
  const QJSValue& 
  a12, 
  const QJSValue& 
  a13, 
  const QJSValue& 
  a14, 
  const QJSValue& 
  a15, 
  const QJSValue& 
  a16, 
  const QJSValue& 
  a17, 
  const QJSValue& 
  a18
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a2
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a3
  )

   && RJSHelper_qcad::is_RVector(handler, a4
  )

   && RJSHelper::is_double(handler, a5
  )

   && RJSHelper::is_double(handler, a6
  )

   && RJSHelper::is_double(handler, a7
  )

   && RJSHelper_qcad::is_RVector(handler, a8
  )

   && RJSHelper::is_bool(handler, a9
  )

   && RJSHelper::is_bool(handler, a10
  )

   && RJSHelper::is_bool(handler, a11
  )

   && RJSHelper::is_bool(handler, a12
  )

   && RJSHelper::is_bool(handler, a13
  )

   && RJSHelper::is_bool(handler, a14
  )

   && RJSHelper::is_QString(handler, a15
  )

   && RJSHelper::is_QString(handler, a16
  )

   && RJSHelper_qcad::is_RTransaction(handler, a17
  )

   && RJSHelper::is_bool(handler, a18
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (REntity)
  

          // non copyable:
          REntity*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a1);
        
  // convert js parameter to cpp: src (RDocument)
  

          // non copyable:
          RDocument*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a2);
        
  // convert js parameter to cpp: dest (RDocument)
  

          // non copyable:
          RDocument*
         a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a3);
        
  // convert js parameter to cpp: offset (RVector)
  
RVector a4_cpp;

      a4_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a4);
        
  // convert js parameter to cpp: scale (double)
  
double a5_cpp;

      a5_cpp = RJSHelper::js2cpp_double(handler, a5);
        
  // convert js parameter to cpp: unitScale (double)
  
double a6_cpp;

      a6_cpp = RJSHelper::js2cpp_double(handler, a6);
        
  // convert js parameter to cpp: rotation (double)
  
double a7_cpp;

      a7_cpp = RJSHelper::js2cpp_double(handler, a7);
        
  // convert js parameter to cpp: center (RVector)
  
RVector a8_cpp;

      a8_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a8);
        
  // convert js parameter to cpp: flipHorizontal (bool)
  
bool a9_cpp;

      a9_cpp = RJSHelper::js2cpp_bool(handler, a9);
        
  // convert js parameter to cpp: flipVertical (bool)
  
bool a10_cpp;

      a10_cpp = RJSHelper::js2cpp_bool(handler, a10);
        
  // convert js parameter to cpp: toCurrentLayer (bool)
  
bool a11_cpp;

      a11_cpp = RJSHelper::js2cpp_bool(handler, a11);
        
  // convert js parameter to cpp: toCurrentBlock (bool)
  
bool a12_cpp;

      a12_cpp = RJSHelper::js2cpp_bool(handler, a12);
        
  // convert js parameter to cpp: overwriteLayers (bool)
  
bool a13_cpp;

      a13_cpp = RJSHelper::js2cpp_bool(handler, a13);
        
  // convert js parameter to cpp: overwriteBlocks (bool)
  
bool a14_cpp;

      a14_cpp = RJSHelper::js2cpp_bool(handler, a14);
        
  // convert js parameter to cpp: blockName (QString)
  
QString a15_cpp;

      a15_cpp = RJSHelper::js2cpp_QString(handler, a15);
        
  // convert js parameter to cpp: layerName (QString)
  
QString a16_cpp;

      a16_cpp = RJSHelper::js2cpp_QString(handler, a16);
        
  // convert js parameter to cpp: transaction (RTransaction)
  
RTransaction a17_cpp;

      a17_cpp = RJSHelper_qcad::js2cpp_RTransaction(handler, a17);
        
  // convert js parameter to cpp: toModelSpaceBlock (bool)
  
bool a18_cpp;

      a18_cpp = RJSHelper::js2cpp_bool(handler, a18);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RCopyOperation* w = getWrapped();
                
                w->copyEntity(
                  *a1_cpp
    , *a2_cpp
    , *a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    , a9_cpp
    , a10_cpp
    , a11_cpp
    , a12_cpp
    , a13_cpp
    , a14_cpp
    , a15_cpp
    , a16_cpp
    , a17_cpp
    , a18_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for copyEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: copyEntityBlock
    // Source: RClipboardOperation
    // Static: false
    // Parameters: 7
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::copyEntityBlock
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
        RJSHelper_qcad::is_REntity_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a2
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
  )

   && RJSHelper::is_bool(handler, a5
  )

   && RJSHelper::is_QString(handler, a6
  )

   && RJSHelper_qcad::is_RTransaction(handler, a7
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (REntity)
  

          // non copyable:
          REntity*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a1);
        
  // convert js parameter to cpp: src (RDocument)
  

          // non copyable:
          RDocument*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a2);
        
  // convert js parameter to cpp: dest (RDocument)
  

          // non copyable:
          RDocument*
         a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a3);
        
  // convert js parameter to cpp: overwriteBlocks (bool)
  
bool a4_cpp;

      a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
        
  // convert js parameter to cpp: toCurrentBlock (bool)
  
bool a5_cpp;

      a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
        
  // convert js parameter to cpp: blockName (QString)
  
QString a6_cpp;

      a6_cpp = RJSHelper::js2cpp_QString(handler, a6);
        
  // convert js parameter to cpp: transaction (RTransaction)
  
RTransaction a7_cpp;

      a7_cpp = RJSHelper_qcad::js2cpp_RTransaction(handler, a7);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RCopyOperation* w = getWrapped();
                QSharedPointer<RBlock> res = 
                    
                w->copyEntityBlock(
                  *a1_cpp
    , *a2_cpp
    , *a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    
                );
              
            // return type: QSharedPointer<RBlock>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RBlock(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for copyEntityBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: copyBlock
    // Source: RClipboardOperation
    // Static: false
    // Parameters: 7
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::copyBlock
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
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a2
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
  )

   && RJSHelper::is_bool(handler, a5
  )

   && RJSHelper::is_QString(handler, a6
  )

   && RJSHelper_qcad::is_RTransaction(handler, a7
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
RBlock::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a1);
        
  // convert js parameter to cpp: src (RDocument)
  

          // non copyable:
          RDocument*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a2);
        
  // convert js parameter to cpp: dest (RDocument)
  

          // non copyable:
          RDocument*
         a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a3);
        
  // convert js parameter to cpp: overwriteBlocks (bool)
  
bool a4_cpp;

      a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
        
  // convert js parameter to cpp: toCurrentBlock (bool)
  
bool a5_cpp;

      a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
        
  // convert js parameter to cpp: blockName (QString)
  
QString a6_cpp;

      a6_cpp = RJSHelper::js2cpp_QString(handler, a6);
        
  // convert js parameter to cpp: transaction (RTransaction)
  
RTransaction a7_cpp;

      a7_cpp = RJSHelper_qcad::js2cpp_RTransaction(handler, a7);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RCopyOperation* w = getWrapped();
                QSharedPointer<RBlock> res = 
                    
                w->copyBlock(
                  a1_cpp
    , *a2_cpp
    , *a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    
                );
              
            // return type: QSharedPointer<RBlock>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RBlock(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for copyBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: copyEntityLayer
    // Source: RClipboardOperation
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::copyEntityLayer
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
        RJSHelper_qcad::is_REntity_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a2
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
  )

   && RJSHelper_qcad::is_RTransaction(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (REntity)
  

          // non copyable:
          REntity*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a1);
        
  // convert js parameter to cpp: src (RDocument)
  

          // non copyable:
          RDocument*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a2);
        
  // convert js parameter to cpp: dest (RDocument)
  

          // non copyable:
          RDocument*
         a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a3);
        
  // convert js parameter to cpp: overwriteLayers (bool)
  
bool a4_cpp;

      a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
        
  // convert js parameter to cpp: transaction (RTransaction)
  
RTransaction a5_cpp;

      a5_cpp = RJSHelper_qcad::js2cpp_RTransaction(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RCopyOperation* w = getWrapped();
                QSharedPointer<RLayer> res = 
                    
                w->copyEntityLayer(
                  *a1_cpp
    , *a2_cpp
    , *a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: QSharedPointer<RLayer>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayer(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for copyEntityLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: copyLayer
    // Source: RClipboardOperation
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::copyLayer
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
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a2
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
  )

   && RJSHelper_qcad::is_RTransaction(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        
  // convert js parameter to cpp: src (RDocument)
  

          // non copyable:
          RDocument*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a2);
        
  // convert js parameter to cpp: dest (RDocument)
  

          // non copyable:
          RDocument*
         a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a3);
        
  // convert js parameter to cpp: overwriteLayers (bool)
  
bool a4_cpp;

      a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
        
  // convert js parameter to cpp: transaction (RTransaction)
  
RTransaction a5_cpp;

      a5_cpp = RJSHelper_qcad::js2cpp_RTransaction(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RCopyOperation* w = getWrapped();
                QSharedPointer<RLayer> res = 
                    
                w->copyLayer(
                  a1_cpp
    , *a2_cpp
    , *a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: QSharedPointer<RLayer>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayer(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for copyLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: copyEntityLinetype
    // Source: RClipboardOperation
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::copyEntityLinetype
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
        RJSHelper_qcad::is_REntity_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a2
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
  )

   && RJSHelper_qcad::is_RTransaction(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (REntity)
  

          // non copyable:
          REntity*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a1);
        
  // convert js parameter to cpp: src (RDocument)
  

          // non copyable:
          RDocument*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a2);
        
  // convert js parameter to cpp: dest (RDocument)
  

          // non copyable:
          RDocument*
         a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a3);
        
  // convert js parameter to cpp: overwriteLinetypes (bool)
  
bool a4_cpp;

      a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
        
  // convert js parameter to cpp: transaction (RTransaction)
  
RTransaction a5_cpp;

      a5_cpp = RJSHelper_qcad::js2cpp_RTransaction(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RCopyOperation* w = getWrapped();
                QSharedPointer<RLinetype> res = 
                    
                w->copyEntityLinetype(
                  *a1_cpp
    , *a2_cpp
    , *a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: QSharedPointer<RLinetype>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLinetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for copyEntityLinetype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: copyLinetype
    // Source: RClipboardOperation
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::copyLinetype
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
        RJSHelper_qcad::is_RLinetype_Id(handler, a1
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a2
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
  )

   && RJSHelper_qcad::is_RTransaction(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeId (RLinetype::Id)
  
RLinetype::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetype_Id(handler, a1);
        
  // convert js parameter to cpp: src (RDocument)
  

          // non copyable:
          RDocument*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a2);
        
  // convert js parameter to cpp: dest (RDocument)
  

          // non copyable:
          RDocument*
         a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a3);
        
  // convert js parameter to cpp: overwriteLinetypes (bool)
  
bool a4_cpp;

      a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
        
  // convert js parameter to cpp: transaction (RTransaction)
  
RTransaction a5_cpp;

      a5_cpp = RJSHelper_qcad::js2cpp_RTransaction(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RCopyOperation* w = getWrapped();
                QSharedPointer<RLinetype> res = 
                    
                w->copyLinetype(
                  a1_cpp
    , *a2_cpp
    , *a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: QSharedPointer<RLinetype>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLinetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for copyLinetype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: setCopyEmptyBlocks
    // Source: RClipboardOperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::setCopyEmptyBlocks
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
                RCopyOperation* w = getWrapped();
                
                w->setCopyEmptyBlocks(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCopyEmptyBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: setCopyAllLayers
    // Source: RClipboardOperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::setCopyAllLayers
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
                RCopyOperation* w = getWrapped();
                
                w->setCopyAllLayers(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCopyAllLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: setKeepSelection
    // Source: RClipboardOperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::setKeepSelection
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
                RCopyOperation* w = getWrapped();
                
                w->setKeepSelection(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setKeepSelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: setBlockOwnership
    // Source: RClipboardOperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::setBlockOwnership
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
                RCopyOperation* w = getWrapped();
                
                w->setBlockOwnership(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBlockOwnership";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: apply
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::apply
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // non copyable:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        
  // convert js parameter to cpp: preview (bool)
  
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
                RCopyOperation* w = getWrapped();
                RTransaction res = 
                    
                w->apply(
                  *a1_cpp
    , a2_cpp
    
                );
              
            // return type: RTransaction

            return RJSHelper_qcad::cpp2js_RTransaction(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for apply";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCopyOperation
    // Function: setClear
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCopyOperation_Wrapper::setClear
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
                RCopyOperation* w = getWrapped();
                
                w->setClear(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setClear";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rcopyoperation_wrapper.cpp"
  
