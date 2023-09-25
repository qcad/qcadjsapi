
  // Auto generated
  
  // include header:
  //#include "RNewDocumentListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rnewdocumentlistener_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RNewDocumentListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RNewDocumentListener_Wrapper>("org.qcad", 1, 0, "RNewDocumentListener_Wrapper");
        qmlRegisterInterface<RNewDocumentListener_Wrapper>("RNewDocumentListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RNewDocumentListener* t = new RJSType_RNewDocumentListener();
          global.setProperty("RJSType_RNewDocumentListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RNewDocumentListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RNewDocumentListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RNewDocumentListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RNewDocumentListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RNewDocumentListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RNewDocumentListener.js";
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
    RNewDocumentListener_Wrapper::RNewDocumentListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RNewDocumentListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RNewDocumentListener_Wrapper::RNewDocumentListener_Wrapper(RJSApi& h, RNewDocumentListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RNewDocumentListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RNewDocumentListener_Wrapper"));
              //setObjectName("RNewDocumentListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RNewDocumentListener_Wrapper::~RNewDocumentListener_Wrapper() {
            //RDebug::decCounter(QString("RNewDocumentListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RNewDocumentListener_Wrapper"));

            //qDebug() << "RNewDocumentListener_Wrapper::~RNewDocumentListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RNewDocumentListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RNewDocumentListener_Wrapper::initConnections() {

          //setObjectName("RNewDocumentListener_Wrapper");

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
    
    // Class: RNewDocumentListener
    // Function: updateNewDocumentListener
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RNewDocumentListener_Wrapper::updateNewDocumentListener
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
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

   && RJSHelper::is_bool(handler, a3
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

      a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
        
  // convert js parameter to cpp: beforeLoad (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RNewDocumentListener* w = getWrapped();
                
                w->updateNewDocumentListener(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateNewDocumentListener";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  