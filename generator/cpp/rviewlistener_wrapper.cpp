
  // Auto generated
  
  // include header:
  //#include "RViewListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rviewlistener_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RViewListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RViewListener_Wrapper>("org.qcad", 1, 0, "RViewListener_Wrapper");
        qmlRegisterInterface<RViewListener_Wrapper>("RViewListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RViewListener* t = new RJSType_RViewListener();
          global.setProperty("RJSType_RViewListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RViewListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RViewListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RViewListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RViewListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RViewListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RViewListener.js";
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
    RViewListener_Wrapper::RViewListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RViewListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RViewListener_Wrapper::RViewListener_Wrapper(RJSApi& h, RViewListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RViewListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RViewListener_Wrapper"));
              //setObjectName("RViewListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RViewListener_Wrapper::~RViewListener_Wrapper() {
            //RDebug::decCounter(QString("RViewListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RViewListener_Wrapper"));

            //qDebug() << "RViewListener_Wrapper::~RViewListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RViewListener";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RViewListener_Wrapper::initConnections() {

          //setObjectName("RViewListener_Wrapper");

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
    
    // Class: RViewListener
    // Function: updateViews
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RViewListener_Wrapper::updateViews
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RViewListener* w = getWrapped();
                
                w->updateViews(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateViews";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RViewListener
    // Function: clearViews
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RViewListener_Wrapper::clearViews
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
                RViewListener* w = getWrapped();
                
                w->clearViews(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearViews";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  