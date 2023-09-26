
  // Auto generated
  
  // include header:
  //#include "RCoordinateListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rcoordinatelistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RCoordinateListener*> RCoordinateListener_Wrapper::basecasters_RCoordinateListener;
    
    // static functions implementation in singleton wrapper:
    
    void RCoordinateListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RCoordinateListener_Wrapper>("org.qcad", 1, 0, "RCoordinateListener_Wrapper");
        qmlRegisterInterface<RCoordinateListener_Wrapper>("RCoordinateListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RCoordinateListener* t = new RJSType_RCoordinateListener();
          global.setProperty("RJSType_RCoordinateListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RCoordinateListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RCoordinateListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RCoordinateListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RCoordinateListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RCoordinateListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RCoordinateListener.js";
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
    RCoordinateListener_Wrapper::RCoordinateListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RCoordinateListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RCoordinateListener_Wrapper::RCoordinateListener_Wrapper(RJSApi& h, RCoordinateListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RCoordinateListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RCoordinateListener_Wrapper"));
              //setObjectName("RCoordinateListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RCoordinateListener_Wrapper::~RCoordinateListener_Wrapper() {
            //RDebug::decCounter(QString("RCoordinateListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RCoordinateListener_Wrapper"));

            //qDebug() << "RCoordinateListener_Wrapper::~RCoordinateListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RCoordinateListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RCoordinateListener_Wrapper::initConnections() {

          //setObjectName("RCoordinateListener_Wrapper");

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
    
    // Class: RCoordinateListener
    // Function: updateCoordinate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCoordinateListener_Wrapper::updateCoordinate
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
                RCoordinateListener* w = getWrapped();
                
                w->updateCoordinate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateCoordinate";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
