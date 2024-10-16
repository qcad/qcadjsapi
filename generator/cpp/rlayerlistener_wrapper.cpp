
  // Auto generated
  
  // include header:
  //#include "RLayerListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rlayerlistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RLayerListener*> RLayerListener_Wrapper::basecasters_RLayerListener;
    
    // static functions implementation in singleton wrapper:
    
    void RLayerListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RLayerListener_Wrapper>("org.qcad", 1, 0, "RLayerListener_Wrapper");
        qmlRegisterInterface<RLayerListener_Wrapper>("RLayerListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RLayerListener* t = new RJSType_RLayerListener();
          global.setProperty("RJSType_RLayerListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RLayerListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RLayerListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RLayerListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RLayerListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RLayerListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RLayerListener.js";
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
    RLayerListener_Wrapper::RLayerListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RLayerListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RLayerListener_Wrapper::RLayerListener_Wrapper(RJSApi& h, RLayerListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RLayerListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RLayerListener_Wrapper"));
              //setObjectName("RLayerListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RLayerListener_Wrapper::~RLayerListener_Wrapper() {
            //RDebug::decCounter(QString("RLayerListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RLayerListener_Wrapper"));

            //qDebug() << "RLayerListener_Wrapper::~RLayerListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RLayerListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RLayerListener_Wrapper::initConnections() {

          //setObjectName("RLayerListener_Wrapper");

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
    
    // Class: RLayerListener
    // Function: updateLayers
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLayerListener_Wrapper::updateLayers
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

   && RJSHelper_qcad::is_QList_RLayer_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        
  // convert js parameter to cpp: layerIds (QList<RLayer::Id>)
  
QList<RLayer::Id> a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_QList_RLayer_Id(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLayerListener* w = getWrapped();
                
                w->updateLayers(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLayerListener
    // Function: setCurrentLayer
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLayerListener_Wrapper::setCurrentLayer
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

   && RJSHelper_qcad::is_RLayer_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        
  // convert js parameter to cpp: previousLayerId (RLayer::Id)
  
RLayer::Id a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RLayerListener* w = getWrapped();
                
                w->setCurrentLayer(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLayerListener
    // Function: clearLayers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLayerListener_Wrapper::clearLayers
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
                RLayerListener* w = getWrapped();
                
                w->clearLayers(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rlayerlistener_wrapper.cpp"
  
