
  // Auto generated
  
  // include header:
  //#include "RInterTransactionListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rintertransactionlistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RInterTransactionListener*> RInterTransactionListener_Wrapper::basecasters_RInterTransactionListener;
    
    // static functions implementation in singleton wrapper:
    
    void RInterTransactionListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RInterTransactionListener_Wrapper>("org.qcad", 1, 0, "RInterTransactionListener_Wrapper");
        qmlRegisterInterface<RInterTransactionListener_Wrapper>("RInterTransactionListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RInterTransactionListener* t = new RJSType_RInterTransactionListener();
          global.setProperty("RJSType_RInterTransactionListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RInterTransactionListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RInterTransactionListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RInterTransactionListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RInterTransactionListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RInterTransactionListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RInterTransactionListener.js";
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
    RInterTransactionListener_Wrapper::RInterTransactionListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RInterTransactionListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RInterTransactionListener_Wrapper::RInterTransactionListener_Wrapper(RJSApi& h, RInterTransactionListener* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RInterTransactionListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RInterTransactionListener_Wrapper"));
              //setObjectName("RInterTransactionListener_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RInterTransactionListener_Wrapper::~RInterTransactionListener_Wrapper() {
            //RDebug::decCounter(QString("RInterTransactionListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RInterTransactionListener_Wrapper"));

            //qDebug() << "RInterTransactionListener_Wrapper::~RInterTransactionListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RInterTransactionListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RInterTransactionListener_Wrapper::initConnections() {

          //setObjectName("RInterTransactionListener_Wrapper");

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
    
    // Class: RInterTransactionListener
    // Function: updateInterTransactionListener
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RInterTransactionListener_Wrapper::updateInterTransactionListener
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
                RInterTransactionListener* w = getWrapped();
                
                w->updateInterTransactionListener(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateInterTransactionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rintertransactionlistener_wrapper.cpp"
  
