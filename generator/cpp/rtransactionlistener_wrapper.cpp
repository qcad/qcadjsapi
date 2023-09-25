
  // Auto generated
  
  // include header:
  //#include "RTransactionListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rtransactionlistener_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RTransactionListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RTransactionListener_Wrapper>("org.qcad", 1, 0, "RTransactionListener_Wrapper");
        qmlRegisterInterface<RTransactionListener_Wrapper>("RTransactionListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RTransactionListener* t = new RJSType_RTransactionListener();
          global.setProperty("RJSType_RTransactionListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RTransactionListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RTransactionListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RTransactionListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RTransactionListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RTransactionListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RTransactionListener.js";
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
    RTransactionListener_Wrapper::RTransactionListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RTransactionListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RTransactionListener_Wrapper::RTransactionListener_Wrapper(RJSApi& h, RTransactionListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RTransactionListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTransactionListener_Wrapper"));
              //setObjectName("RTransactionListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RTransactionListener_Wrapper::~RTransactionListener_Wrapper() {
            //RDebug::decCounter(QString("RTransactionListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RTransactionListener_Wrapper"));

            //qDebug() << "RTransactionListener_Wrapper::~RTransactionListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RTransactionListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RTransactionListener_Wrapper::initConnections() {

          //setObjectName("RTransactionListener_Wrapper");

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
    
    // Class: RTransactionListener
    // Function: updateTransactionListener
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransactionListener_Wrapper::updateTransactionListener
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
    , true
  
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        
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
                RTransactionListener* w = getWrapped();
                
                w->updateTransactionListener(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateTransactionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransactionListener
    // Function: setCurrentBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RTransactionListener_Wrapper::setCurrentBlock
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
                RTransactionListener* w = getWrapped();
                
                w->setCurrentBlock(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  