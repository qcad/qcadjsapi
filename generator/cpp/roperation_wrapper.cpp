
  // Auto generated
  
  // include header:
  //#include "ROperationwrapper.h"
  //#include "header_cpp.h"
  
    #include "roperation_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_ROperation*> ROperation_Wrapper::basecasters_ROperation;
    
    // static functions implementation in singleton wrapper:
    
    void ROperation_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<ROperation_Wrapper>("org.qcad", 1, 0, "ROperation_Wrapper");
        qmlRegisterInterface<ROperation_Wrapper>("ROperation_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_ROperation* t = new RJSType_ROperation();
          global.setProperty("RJSType_ROperation", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_ROperation::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&ROperation_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("ROperation_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&ROperation_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("ROperation_BaseJs", mob);
      
      QString fileName = ":generator/js/ROperation.js";
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
    ROperation_Wrapper::ROperation_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("ROperation_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      ROperation_Wrapper::ROperation_Wrapper(RJSApi& h, ROperation* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("ROperation_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("ROperation_Wrapper"));
              //setObjectName("ROperation_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      ROperation_Wrapper::~ROperation_Wrapper() {
            //RDebug::decCounter(QString("ROperation_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("ROperation_Wrapper"));

            //qDebug() << "ROperation_Wrapper::~ROperation_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of ROperation";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void ROperation_Wrapper::initConnections() {

          //setObjectName("ROperation_Wrapper");

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
    
    // Class: ROperation
    // Function: apply
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              ROperation_Wrapper::apply
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
                ROperation* w = getWrapped();
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
            
    // Class: ROperation
    // Function: getEntityTypeFilter
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              ROperation_Wrapper::getEntityTypeFilter
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
                ROperation* w = getWrapped();
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
            
    // Class: ROperation
    // Function: setRecordAffectedObjects
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROperation_Wrapper::setRecordAffectedObjects
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
                ROperation* w = getWrapped();
                
                w->setRecordAffectedObjects(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRecordAffectedObjects";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROperation
    // Function: setSpatialIndexDisabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROperation_Wrapper::setSpatialIndexDisabled
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
                ROperation* w = getWrapped();
                
                w->setSpatialIndexDisabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSpatialIndexDisabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROperation
    // Function: setAllowInvisible
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROperation_Wrapper::setAllowInvisible
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
                ROperation* w = getWrapped();
                
                w->setAllowInvisible(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAllowInvisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROperation
    // Function: setAllowAll
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROperation_Wrapper::setAllowAll
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
                ROperation* w = getWrapped();
                
                w->setAllowAll(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAllowAll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROperation
    // Function: setKeepChildren
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROperation_Wrapper::setKeepChildren
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
                ROperation* w = getWrapped();
                
                w->setKeepChildren(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setKeepChildren";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROperation
    // Function: setTransactionGroup
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROperation_Wrapper::setTransactionGroup
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
                ROperation* w = getWrapped();
                
                w->setTransactionGroup(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTransactionGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROperation
    // Function: getTransactionGroup
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              ROperation_Wrapper::getTransactionGroup
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
                ROperation* w = getWrapped();
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
            
    // Class: ROperation
    // Function: setText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROperation_Wrapper::setText
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
                ROperation* w = getWrapped();
                
                w->setText(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROperation
    // Function: getText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              ROperation_Wrapper::getText
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
                ROperation* w = getWrapped();
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
            
    // Class: ROperation
    // Function: getTransactionTypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              ROperation_Wrapper::getTransactionTypes
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
                ROperation* w = getWrapped();
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
            
    // Class: ROperation
    // Function: setTransactionType
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              ROperation_Wrapper::setTransactionType
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
                ROperation* w = getWrapped();
                
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
            
    // Class: ROperation
    // Function: getTransactionType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROperation_Wrapper::getTransactionType
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
                ROperation* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_roperation_wrapper.cpp"
  
