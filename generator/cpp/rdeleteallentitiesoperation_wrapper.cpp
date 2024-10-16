
  // Auto generated
  
  // include header:
  //#include "RDeleteAllEntitiesOperationwrapper.h"
  //#include "header_cpp.h"
  
    #include "rdeleteallentitiesoperation_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RDeleteAllEntitiesOperation*> RDeleteAllEntitiesOperation_Wrapper::basecasters_RDeleteAllEntitiesOperation;
    
    // static functions implementation in singleton wrapper:
    
    void RDeleteAllEntitiesOperation_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RDeleteAllEntitiesOperation_Wrapper>("org.qcad", 1, 0, "RDeleteAllEntitiesOperation_Wrapper");
        qmlRegisterInterface<RDeleteAllEntitiesOperation_Wrapper>("RDeleteAllEntitiesOperation_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RDeleteAllEntitiesOperation* t = new RJSType_RDeleteAllEntitiesOperation();
          global.setProperty("RJSType_RDeleteAllEntitiesOperation", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RDeleteAllEntitiesOperation::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RDeleteAllEntitiesOperation_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RDeleteAllEntitiesOperation_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RDeleteAllEntitiesOperation_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RDeleteAllEntitiesOperation_BaseJs", mob);
      
      QString fileName = ":generator/js/RDeleteAllEntitiesOperation.js";
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
    RDeleteAllEntitiesOperation_Wrapper::RDeleteAllEntitiesOperation_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RDeleteAllEntitiesOperation_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RDeleteAllEntitiesOperation_Wrapper::RDeleteAllEntitiesOperation_Wrapper(RJSApi& h, RDeleteAllEntitiesOperation* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RDeleteAllEntitiesOperation_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RDeleteAllEntitiesOperation_Wrapper"));
              //setObjectName("RDeleteAllEntitiesOperation_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RDeleteAllEntitiesOperation_Wrapper::~RDeleteAllEntitiesOperation_Wrapper() {
            //RDebug::decCounter(QString("RDeleteAllEntitiesOperation_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RDeleteAllEntitiesOperation_Wrapper"));

            //qDebug() << "RDeleteAllEntitiesOperation_Wrapper::~RDeleteAllEntitiesOperation_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RDeleteAllEntitiesOperation";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RDeleteAllEntitiesOperation_Wrapper::initConnections() {

          //setObjectName("RDeleteAllEntitiesOperation_Wrapper");

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
  
    // Class: RDeleteAllEntitiesOperation
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RDeleteAllEntitiesOperation_Wrapper::RDeleteAllEntitiesOperation_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RDeleteAllEntitiesOperation_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RDeleteAllEntitiesOperation_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: undoable (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = true;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RDeleteAllEntitiesOperation(
                a1_cpp
    
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RDeleteAllEntitiesOperation";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RDeleteAllEntitiesOperation
    // Function: getEntityTypeFilter
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDeleteAllEntitiesOperation_Wrapper::getEntityTypeFilter
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
                RDeleteAllEntitiesOperation* w = getWrapped();
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
            
    // Class: RDeleteAllEntitiesOperation
    // Function: setRecordAffectedObjects
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteAllEntitiesOperation_Wrapper::setRecordAffectedObjects
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
                RDeleteAllEntitiesOperation* w = getWrapped();
                
                w->setRecordAffectedObjects(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRecordAffectedObjects";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteAllEntitiesOperation
    // Function: setSpatialIndexDisabled
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteAllEntitiesOperation_Wrapper::setSpatialIndexDisabled
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
                RDeleteAllEntitiesOperation* w = getWrapped();
                
                w->setSpatialIndexDisabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSpatialIndexDisabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteAllEntitiesOperation
    // Function: setAllowInvisible
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteAllEntitiesOperation_Wrapper::setAllowInvisible
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
                RDeleteAllEntitiesOperation* w = getWrapped();
                
                w->setAllowInvisible(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAllowInvisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteAllEntitiesOperation
    // Function: setAllowAll
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteAllEntitiesOperation_Wrapper::setAllowAll
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
                RDeleteAllEntitiesOperation* w = getWrapped();
                
                w->setAllowAll(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAllowAll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteAllEntitiesOperation
    // Function: setKeepChildren
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteAllEntitiesOperation_Wrapper::setKeepChildren
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
                RDeleteAllEntitiesOperation* w = getWrapped();
                
                w->setKeepChildren(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setKeepChildren";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteAllEntitiesOperation
    // Function: setTransactionGroup
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteAllEntitiesOperation_Wrapper::setTransactionGroup
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
                RDeleteAllEntitiesOperation* w = getWrapped();
                
                w->setTransactionGroup(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTransactionGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteAllEntitiesOperation
    // Function: getTransactionGroup
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDeleteAllEntitiesOperation_Wrapper::getTransactionGroup
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
                RDeleteAllEntitiesOperation* w = getWrapped();
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
            
    // Class: RDeleteAllEntitiesOperation
    // Function: setText
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteAllEntitiesOperation_Wrapper::setText
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
                RDeleteAllEntitiesOperation* w = getWrapped();
                
                w->setText(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteAllEntitiesOperation
    // Function: getText
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDeleteAllEntitiesOperation_Wrapper::getText
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
                RDeleteAllEntitiesOperation* w = getWrapped();
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
            
    // Class: RDeleteAllEntitiesOperation
    // Function: getTransactionTypes
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDeleteAllEntitiesOperation_Wrapper::getTransactionTypes
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
                RDeleteAllEntitiesOperation* w = getWrapped();
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
            
    // Class: RDeleteAllEntitiesOperation
    // Function: setTransactionType
    // Source: ROperation
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDeleteAllEntitiesOperation_Wrapper::setTransactionType
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
                RDeleteAllEntitiesOperation* w = getWrapped();
                
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
            
    // Class: RDeleteAllEntitiesOperation
    // Function: getTransactionType
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteAllEntitiesOperation_Wrapper::getTransactionType
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
                RDeleteAllEntitiesOperation* w = getWrapped();
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
            
    // Class: RDeleteAllEntitiesOperation
    // Function: apply
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDeleteAllEntitiesOperation_Wrapper::apply
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
                RDeleteAllEntitiesOperation* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rdeleteallentitiesoperation_wrapper.cpp"
  
