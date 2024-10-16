
  // Auto generated
  
  // include header:
  //#include "RTransactionStackwrapper.h"
  //#include "header_cpp.h"
  
    #include "rtransactionstack_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RTransactionStack*> RTransactionStack_Wrapper::basecasters_RTransactionStack;
    
    // static functions implementation in singleton wrapper:
    
    void RTransactionStack_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RTransactionStack_Wrapper>("org.qcad", 1, 0, "RTransactionStack_Wrapper");
        qmlRegisterInterface<RTransactionStack_Wrapper>("RTransactionStack_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RTransactionStack* t = new RJSType_RTransactionStack();
          global.setProperty("RJSType_RTransactionStack", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RTransactionStack::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RTransactionStack_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RTransactionStack_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RTransactionStack_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RTransactionStack_BaseJs", mob);
      
      QString fileName = ":generator/js/RTransactionStack.js";
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
    RTransactionStack_Wrapper::RTransactionStack_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RTransactionStack_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RTransactionStack_Wrapper::RTransactionStack_Wrapper(RJSApi& h, RTransactionStack* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RTransactionStack_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTransactionStack_Wrapper"));
              //setObjectName("RTransactionStack_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RTransactionStack_Wrapper::~RTransactionStack_Wrapper() {
            //RDebug::decCounter(QString("RTransactionStack_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RTransactionStack_Wrapper"));

            //qDebug() << "RTransactionStack_Wrapper::~RTransactionStack_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RTransactionStack";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RTransactionStack_Wrapper::initConnections() {

          //setObjectName("RTransactionStack_Wrapper");

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
  
    // Class: RTransactionStack
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RTransactionStack_Wrapper::RTransactionStack_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RTransactionStack_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RTransactionStack_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RStorage_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: storage (RStorage)
  

          // non copyable:
          RStorage*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RStorage_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTransactionStack(
                *a1_cpp
    
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
                  

                  qWarning() << "no matching constructor variant found for RTransactionStack";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RTransactionStack
    // Function: reset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransactionStack_Wrapper::reset
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
                RTransactionStack* w = getWrapped();
                
                w->reset(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransactionStack
    // Function: undo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransactionStack_Wrapper::undo
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
                RTransactionStack* w = getWrapped();
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
            
    // Class: RTransactionStack
    // Function: redo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransactionStack_Wrapper::redo
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
                RTransactionStack* w = getWrapped();
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
            
    // Class: RTransactionStack
    // Function: isUndoAvailable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransactionStack_Wrapper::isUndoAvailable
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
                RTransactionStack* w = getWrapped();
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
            
    // Class: RTransactionStack
    // Function: isRedoAvailable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransactionStack_Wrapper::isRedoAvailable
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
                RTransactionStack* w = getWrapped();
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
            
    // Class: RTransactionStack
    // Function: getUndoableTransactionText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransactionStack_Wrapper::getUndoableTransactionText
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
                RTransactionStack* w = getWrapped();
                QString res = 
                    
                w->getUndoableTransactionText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getUndoableTransactionText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransactionStack
    // Function: getRedoableTransactionText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransactionStack_Wrapper::getRedoableTransactionText
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
                RTransactionStack* w = getWrapped();
                QString res = 
                    
                w->getRedoableTransactionText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getRedoableTransactionText";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rtransactionstack_wrapper.cpp"
  
