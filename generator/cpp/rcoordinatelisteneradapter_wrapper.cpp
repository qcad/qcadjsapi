
  // Auto generated
  
  // include header:
  //#include "RCoordinateListenerAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rcoordinatelisteneradapter_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RCoordinateListenerAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RCoordinateListenerAdapter_Wrapper>("org.qcad", 1, 0, "RCoordinateListenerAdapter_Wrapper");
        qmlRegisterInterface<RCoordinateListenerAdapter_Wrapper>("RCoordinateListenerAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RCoordinateListenerAdapter* t = new RJSType_RCoordinateListenerAdapter();
          global.setProperty("RJSType_RCoordinateListenerAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RCoordinateListenerAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RCoordinateListenerAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RCoordinateListenerAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RCoordinateListenerAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RCoordinateListenerAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RCoordinateListenerAdapter.js";
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
    RCoordinateListenerAdapter_Wrapper::RCoordinateListenerAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RCoordinateListenerAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RCoordinateListenerAdapter_Wrapper::RCoordinateListenerAdapter_Wrapper(RJSApi& h, RCoordinateListenerAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RCoordinateListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RCoordinateListenerAdapter_Wrapper"));
              //setObjectName("RCoordinateListenerAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RCoordinateListenerAdapter_Wrapper::~RCoordinateListenerAdapter_Wrapper() {
            //RDebug::decCounter(QString("RCoordinateListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RCoordinateListenerAdapter_Wrapper"));

            //qDebug() << "RCoordinateListenerAdapter_Wrapper::~RCoordinateListenerAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RCoordinateListenerAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RCoordinateListenerAdapter_Wrapper::initConnections() {

          //setObjectName("RCoordinateListenerAdapter_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is a QObject and not a wrapper for a null pointer:
              // wrapper is managed by the QObject as child:
              if (hasWrapped()) {
                QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
              }
            

          if (hasWrapped()) {
            
                // set parent of wrapper to wrapped:
                // wrapper can be looked up for object:
                QVariant vThis = QVariant::fromValue(this);
                getWrapped()->setProperty("__wrapper__",  vThis);

                // make sure wrapper is deleted when object is deleted:
                // make sure wrapper stays alive as long as the wrapped stays alive::
                QObject::setParent(getWrapped());
              
            // set up signal forwarding:
            
  connect(
    getWrapped(), 
    SIGNAL(coordinateUpdated(RDocumentInterface*)), 
    this, 
    SLOT(coordinateUpdatedEmitter(RDocumentInterface*))
  );

              /*
              connect(
                getWrapped(),
                SIGNAL(destroyed(QObject*)),
                &handler,
                SLOT(slotDestroyed(QObject*))
              );
              */
            
          }
        }
      

  // constructors:
  
    // Class: RCoordinateListenerAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RCoordinateListenerAdapter_Wrapper::RCoordinateListenerAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RCoordinateListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RCoordinateListenerAdapter_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = NULL;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RCoordinateListenerAdapter(
                a1_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

                    // no constructor without arguments defined
                    // allow constructor for prototype objects without args:
                    if (
                      a1.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RCoordinateListenerAdapter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RCoordinateListenerAdapter
    // Function: updateCoordinate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RCoordinateListenerAdapter_Wrapper::updateCoordinate
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
                RCoordinateListenerAdapter* w = getWrapped();
                
                w->updateCoordinate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateCoordinate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCoordinateListenerAdapter
    // Function: coordinateUpdated
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RCoordinateListenerAdapter_Wrapper::coordinateUpdatedEmitter(
                RDocumentInterface* documentInterface
              ) {
                // convert cpp parameters to js:
                
  // parameter: documentInterface (RDocumentInterface)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RDocumentInterface(
    handler, 
    documentInterface
  );


                emit coordinateUpdated(
                  a1_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  