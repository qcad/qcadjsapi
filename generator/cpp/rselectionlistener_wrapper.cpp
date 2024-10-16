
  // Auto generated
  
  // include header:
  //#include "RSelectionListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rselectionlistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RSelectionListener*> RSelectionListener_Wrapper::basecasters_RSelectionListener;
    
    // static functions implementation in singleton wrapper:
    
    void RSelectionListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RSelectionListener_Wrapper>("org.qcad", 1, 0, "RSelectionListener_Wrapper");
        qmlRegisterInterface<RSelectionListener_Wrapper>("RSelectionListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RSelectionListener* t = new RJSType_RSelectionListener();
          global.setProperty("RJSType_RSelectionListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RSelectionListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RSelectionListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RSelectionListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RSelectionListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RSelectionListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RSelectionListener.js";
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
    RSelectionListener_Wrapper::RSelectionListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RSelectionListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RSelectionListener_Wrapper::RSelectionListener_Wrapper(RJSApi& h, RSelectionListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RSelectionListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RSelectionListener_Wrapper"));
              //setObjectName("RSelectionListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RSelectionListener_Wrapper::~RSelectionListener_Wrapper() {
            //RDebug::decCounter(QString("RSelectionListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RSelectionListener_Wrapper"));

            //qDebug() << "RSelectionListener_Wrapper::~RSelectionListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RSelectionListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RSelectionListener_Wrapper::initConnections() {

          //setObjectName("RSelectionListener_Wrapper");

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
    
    // Class: RSelectionListener
    // Function: updateSelectionListener
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RSelectionListener_Wrapper::updateSelectionListener
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
                RSelectionListener* w = getWrapped();
                
                w->updateSelectionListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateSelectionListener";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rselectionlistener_wrapper.cpp"
  
