
  // Auto generated
  
  // include header:
  //#include "RPenListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rpenlistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RPenListener*> RPenListener_Wrapper::basecasters_RPenListener;
    
    // static functions implementation in singleton wrapper:
    
    void RPenListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPenListener_Wrapper>("org.qcad", 1, 0, "RPenListener_Wrapper");
        qmlRegisterInterface<RPenListener_Wrapper>("RPenListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPenListener* t = new RJSType_RPenListener();
          global.setProperty("RJSType_RPenListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPenListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPenListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPenListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPenListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPenListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RPenListener.js";
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
    RPenListener_Wrapper::RPenListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPenListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPenListener_Wrapper::RPenListener_Wrapper(RJSApi& h, RPenListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPenListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPenListener_Wrapper"));
              //setObjectName("RPenListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPenListener_Wrapper::~RPenListener_Wrapper() {
            //RDebug::decCounter(QString("RPenListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPenListener_Wrapper"));

            //qDebug() << "RPenListener_Wrapper::~RPenListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RPenListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPenListener_Wrapper::initConnections() {

          //setObjectName("RPenListener_Wrapper");

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
    
    // Class: RPenListener
    // Function: updatePen
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPenListener_Wrapper::updatePen
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
                RPenListener* w = getWrapped();
                
                w->updatePen(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updatePen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPenListener
    // Function: clearPen
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPenListener_Wrapper::clearPen
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
                RPenListener* w = getWrapped();
                
                w->clearPen(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearPen";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
