
  // Auto generated
  
  // include header:
  //#include "RUcsListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rucslistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RUcsListener*> RUcsListener_Wrapper::basecasters_RUcsListener;
    
    // static functions implementation in singleton wrapper:
    
    void RUcsListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RUcsListener_Wrapper>("org.qcad", 1, 0, "RUcsListener_Wrapper");
        qmlRegisterInterface<RUcsListener_Wrapper>("RUcsListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RUcsListener* t = new RJSType_RUcsListener();
          global.setProperty("RJSType_RUcsListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RUcsListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RUcsListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RUcsListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RUcsListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RUcsListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RUcsListener.js";
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
    RUcsListener_Wrapper::RUcsListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RUcsListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RUcsListener_Wrapper::RUcsListener_Wrapper(RJSApi& h, RUcsListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RUcsListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RUcsListener_Wrapper"));
              //setObjectName("RUcsListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RUcsListener_Wrapper::~RUcsListener_Wrapper() {
            //RDebug::decCounter(QString("RUcsListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RUcsListener_Wrapper"));

            //qDebug() << "RUcsListener_Wrapper::~RUcsListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RUcsListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RUcsListener_Wrapper::initConnections() {

          //setObjectName("RUcsListener_Wrapper");

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
    
    // Class: RUcsListener
    // Function: update
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RUcsListener_Wrapper::update
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
                RUcsListener* w = getWrapped();
                
                w->update(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for update";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RUcsListener
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RUcsListener_Wrapper::clear
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
                RUcsListener* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rucslistener_wrapper.cpp"
  
