
  // Auto generated
  
  // include header:
  //#include "RMouseCoordinateListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rmousecoordinatelistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RMouseCoordinateListener*> RMouseCoordinateListener_Wrapper::basecasters_RMouseCoordinateListener;
    
    // static functions implementation in singleton wrapper:
    
    void RMouseCoordinateListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RMouseCoordinateListener_Wrapper>("org.qcad", 1, 0, "RMouseCoordinateListener_Wrapper");
        qmlRegisterInterface<RMouseCoordinateListener_Wrapper>("RMouseCoordinateListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RMouseCoordinateListener* t = new RJSType_RMouseCoordinateListener();
          global.setProperty("RJSType_RMouseCoordinateListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RMouseCoordinateListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RMouseCoordinateListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RMouseCoordinateListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RMouseCoordinateListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RMouseCoordinateListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RMouseCoordinateListener.js";
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
    RMouseCoordinateListener_Wrapper::RMouseCoordinateListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RMouseCoordinateListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RMouseCoordinateListener_Wrapper::RMouseCoordinateListener_Wrapper(RJSApi& h, RMouseCoordinateListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RMouseCoordinateListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RMouseCoordinateListener_Wrapper"));
              //setObjectName("RMouseCoordinateListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RMouseCoordinateListener_Wrapper::~RMouseCoordinateListener_Wrapper() {
            //RDebug::decCounter(QString("RMouseCoordinateListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RMouseCoordinateListener_Wrapper"));

            //qDebug() << "RMouseCoordinateListener_Wrapper::~RMouseCoordinateListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RMouseCoordinateListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RMouseCoordinateListener_Wrapper::initConnections() {

          //setObjectName("RMouseCoordinateListener_Wrapper");

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
    
    // Class: RMouseCoordinateListener
    // Function: setCoordinate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMouseCoordinateListener_Wrapper::setCoordinate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: wcsPosition (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: ucsPosition (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMouseCoordinateListener* w = getWrapped();
                
                w->setCoordinate(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCoordinate";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rmousecoordinatelistener_wrapper.cpp"
  
