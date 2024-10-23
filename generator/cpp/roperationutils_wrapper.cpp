
  // Auto generated
  
  // include header:
  //#include "ROperationUtilswrapper.h"
  //#include "header_cpp.h"
  
    #include "roperationutils_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_ROperationUtils*> ROperationUtils_Wrapper::basecasters_ROperationUtils;
    
    // static functions implementation in singleton wrapper:
    
    // Class: ROperationUtils
    // Function: normalizeDrawOrder
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              ROperationUtils_WrapperSingleton::normalizeDrawOrder
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: di (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        
  // convert js parameter to cpp: useTransactionGroup (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                ROperationUtils::normalizeDrawOrder(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for normalizeDrawOrder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void ROperationUtils_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<ROperationUtils_Wrapper>("org.qcad", 1, 0, "ROperationUtils_Wrapper");
        qmlRegisterInterface<ROperationUtils_Wrapper>("ROperationUtils_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_ROperationUtils* t = new RJSType_ROperationUtils();
          global.setProperty("RJSType_ROperationUtils", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_ROperationUtils::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&ROperationUtils_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("ROperationUtils_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&ROperationUtils_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("ROperationUtils_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&ROperationUtils_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("ROperationUtils_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        ROperationUtils_WrapperSingleton * s = new ROperationUtils_WrapperSingleton(handler);
        engine->globalObject().setProperty("ROperationUtils_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/ROperationUtils.js";
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
    ROperationUtils_Wrapper::ROperationUtils_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("ROperationUtils_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      ROperationUtils_Wrapper::ROperationUtils_Wrapper(RJSApi& h, ROperationUtils* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("ROperationUtils_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("ROperationUtils_Wrapper"));
              //setObjectName("ROperationUtils_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      ROperationUtils_Wrapper::~ROperationUtils_Wrapper() {
            //RDebug::decCounter(QString("ROperationUtils_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("ROperationUtils_Wrapper"));

            //qDebug() << "ROperationUtils_Wrapper::~ROperationUtils_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of ROperationUtils";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void ROperationUtils_Wrapper::initConnections() {

          //setObjectName("ROperationUtils_Wrapper");

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
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_roperationutils_wrapper.cpp"
  
