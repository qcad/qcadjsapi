
  // Auto generated
  
  // include header:
  //#include "RDeleteObjectsOperationwrapper.h"
  //#include "header_cpp.h"
  
    #include "rdeleteobjectsoperation_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RDeleteObjectsOperation*> RDeleteObjectsOperation_Wrapper::basecasters_RDeleteObjectsOperation;
    
    // static functions implementation in singleton wrapper:
    
    void RDeleteObjectsOperation_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RDeleteObjectsOperation_Wrapper>("org.qcad", 1, 0, "RDeleteObjectsOperation_Wrapper");
        qmlRegisterInterface<RDeleteObjectsOperation_Wrapper>("RDeleteObjectsOperation_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RDeleteObjectsOperation* t = new RJSType_RDeleteObjectsOperation();
          global.setProperty("RJSType_RDeleteObjectsOperation", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RDeleteObjectsOperation::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RDeleteObjectsOperation_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RDeleteObjectsOperation_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RDeleteObjectsOperation_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RDeleteObjectsOperation_BaseJs", mob);
      
      QString fileName = ":generator/js/RDeleteObjectsOperation.js";
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
    RDeleteObjectsOperation_Wrapper::RDeleteObjectsOperation_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RDeleteObjectsOperation_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RDeleteObjectsOperation_Wrapper::RDeleteObjectsOperation_Wrapper(RJSApi& h, RDeleteObjectsOperation* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RDeleteObjectsOperation_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RDeleteObjectsOperation_Wrapper"));
              //setObjectName("RDeleteObjectsOperation_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RDeleteObjectsOperation_Wrapper::~RDeleteObjectsOperation_Wrapper() {
            //RDebug::decCounter(QString("RDeleteObjectsOperation_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RDeleteObjectsOperation_Wrapper"));

            //qDebug() << "RDeleteObjectsOperation_Wrapper::~RDeleteObjectsOperation_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RDeleteObjectsOperation";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RDeleteObjectsOperation_Wrapper::initConnections() {

          //setObjectName("RDeleteObjectsOperation_Wrapper");

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
  
    // Class: RDeleteObjectsOperation
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
RDeleteObjectsOperation_Wrapper::RDeleteObjectsOperation_Wrapper
                
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
                
                  //RDebug::incCounter(QString("RDeleteObjectsOperation_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RDeleteObjectsOperation_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_QSharedPointer_RObject(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: list (QList<QSharedPointer<RObject>>)
  
QList<QSharedPointer<RObject>> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_QSharedPointer_RObject(handler, a1);
        
  // convert js parameter to cpp: undoable (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new RDeleteObjectsOperation(
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

        
              wrapped = new RDeleteObjectsOperation(
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
   && a2.isUndefined()
  
                      ) {
                      
                        wrapped = nullptr;
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RDeleteObjectsOperation";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RDeleteObjectsOperation
    // Function: getEntityTypeFilter
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::getEntityTypeFilter
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
                RDeleteObjectsOperation* w = getWrapped();
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
            
    // Class: RDeleteObjectsOperation
    // Function: setRecordAffectedObjects
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::setRecordAffectedObjects
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
                RDeleteObjectsOperation* w = getWrapped();
                
                w->setRecordAffectedObjects(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRecordAffectedObjects";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteObjectsOperation
    // Function: setSpatialIndexDisabled
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::setSpatialIndexDisabled
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
                RDeleteObjectsOperation* w = getWrapped();
                
                w->setSpatialIndexDisabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSpatialIndexDisabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteObjectsOperation
    // Function: setAllowInvisible
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::setAllowInvisible
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
                RDeleteObjectsOperation* w = getWrapped();
                
                w->setAllowInvisible(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAllowInvisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteObjectsOperation
    // Function: setAllowAll
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::setAllowAll
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
                RDeleteObjectsOperation* w = getWrapped();
                
                w->setAllowAll(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAllowAll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteObjectsOperation
    // Function: setKeepChildren
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::setKeepChildren
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
                RDeleteObjectsOperation* w = getWrapped();
                
                w->setKeepChildren(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setKeepChildren";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteObjectsOperation
    // Function: setTransactionGroup
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::setTransactionGroup
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
                RDeleteObjectsOperation* w = getWrapped();
                
                w->setTransactionGroup(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTransactionGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteObjectsOperation
    // Function: getTransactionGroup
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::getTransactionGroup
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
                RDeleteObjectsOperation* w = getWrapped();
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
            
    // Class: RDeleteObjectsOperation
    // Function: setText
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::setText
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
                RDeleteObjectsOperation* w = getWrapped();
                
                w->setText(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteObjectsOperation
    // Function: getText
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::getText
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
                RDeleteObjectsOperation* w = getWrapped();
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
            
    // Class: RDeleteObjectsOperation
    // Function: getTransactionTypes
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::getTransactionTypes
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
                RDeleteObjectsOperation* w = getWrapped();
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
            
    // Class: RDeleteObjectsOperation
    // Function: setTransactionType
    // Source: ROperation
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::setTransactionType
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
                RDeleteObjectsOperation* w = getWrapped();
                
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
            
    // Class: RDeleteObjectsOperation
    // Function: getTransactionType
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::getTransactionType
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
                RDeleteObjectsOperation* w = getWrapped();
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
            
    // Class: RDeleteObjectsOperation
    // Function: deleteObject
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::deleteObject
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_RObject(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: o (QSharedPointer<RObject>)
  
QSharedPointer<RObject> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_RObject(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RDeleteObjectsOperation* w = getWrapped();
                
                w->deleteObject(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteObject";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RDeleteObjectsOperation
    // Function: apply
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RDeleteObjectsOperation_Wrapper::apply
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
                RDeleteObjectsOperation* w = getWrapped();
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
  
    #include "moc_rdeleteobjectsoperation_wrapper.cpp"
  
