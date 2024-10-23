
  // Auto generated
  
  // include header:
  //#include "RPreferencesListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rpreferenceslistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RPreferencesListener*> RPreferencesListener_Wrapper::basecasters_RPreferencesListener;
    
    // static functions implementation in singleton wrapper:
    
    void RPreferencesListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPreferencesListener_Wrapper>("org.qcad", 1, 0, "RPreferencesListener_Wrapper");
        qmlRegisterInterface<RPreferencesListener_Wrapper>("RPreferencesListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPreferencesListener* t = new RJSType_RPreferencesListener();
          global.setProperty("RJSType_RPreferencesListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPreferencesListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPreferencesListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPreferencesListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPreferencesListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPreferencesListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RPreferencesListener.js";
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
    RPreferencesListener_Wrapper::RPreferencesListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPreferencesListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPreferencesListener_Wrapper::RPreferencesListener_Wrapper(RJSApi& h, RPreferencesListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPreferencesListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPreferencesListener_Wrapper"));
              //setObjectName("RPreferencesListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPreferencesListener_Wrapper::~RPreferencesListener_Wrapper() {
            //RDebug::decCounter(QString("RPreferencesListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPreferencesListener_Wrapper"));

            //qDebug() << "RPreferencesListener_Wrapper::~RPreferencesListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RPreferencesListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPreferencesListener_Wrapper::initConnections() {

          //setObjectName("RPreferencesListener_Wrapper");

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
    
    // Class: RPreferencesListener
    // Function: updatePreferences
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPreferencesListener_Wrapper::updatePreferences
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
    
  // convert js parameter to cpp: di (RDocumentInterface)
  

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
                RPreferencesListener* w = getWrapped();
                
                w->updatePreferences(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updatePreferences";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rpreferenceslistener_wrapper.cpp"
  
