
  // Auto generated
  
  // include header:
  //#include "RPropertyListenerAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rpropertylisteneradapter_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RPropertyListenerAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPropertyListenerAdapter_Wrapper>("org.qcad", 1, 0, "RPropertyListenerAdapter_Wrapper");
        qmlRegisterInterface<RPropertyListenerAdapter_Wrapper>("RPropertyListenerAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPropertyListenerAdapter* t = new RJSType_RPropertyListenerAdapter();
          global.setProperty("RJSType_RPropertyListenerAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPropertyListenerAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPropertyListenerAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPropertyListenerAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPropertyListenerAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPropertyListenerAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RPropertyListenerAdapter.js";
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
    RPropertyListenerAdapter_Wrapper::RPropertyListenerAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPropertyListenerAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPropertyListenerAdapter_Wrapper::RPropertyListenerAdapter_Wrapper(RJSApi& h, RPropertyListenerAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPropertyListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPropertyListenerAdapter_Wrapper"));
              //setObjectName("RPropertyListenerAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPropertyListenerAdapter_Wrapper::~RPropertyListenerAdapter_Wrapper() {
            //RDebug::decCounter(QString("RPropertyListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPropertyListenerAdapter_Wrapper"));

            //qDebug() << "RPropertyListenerAdapter_Wrapper::~RPropertyListenerAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RPropertyListenerAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPropertyListenerAdapter_Wrapper::initConnections() {

          //setObjectName("RPropertyListenerAdapter_Wrapper");

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
    SIGNAL(updatedFromDocument(RDocument*, bool, RS::EntityType, bool, bool)), 
    this, 
    SLOT(updatedFromDocumentEmitter(RDocument*, bool, RS::EntityType, bool, bool))
  );

  connect(
    getWrapped(), 
    SIGNAL(updatedFromObject(RObject*, RDocument*)), 
    this, 
    SLOT(updatedFromObjectEmitter(RObject*, RDocument*))
  );

  connect(
    getWrapped(), 
    SIGNAL(clearedEditor()), 
    this, 
    SLOT(clearedEditorEmitter())
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
  

    // non-static functions:
    
    // Class: RPropertyListenerAdapter
    // Function: updatedFromDocument
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RPropertyListenerAdapter_Wrapper::updatedFromDocumentEmitter(
                RDocument* document, bool onlyChanges, RS::EntityType entityTypeFilter, bool manual, bool showOnRequest
              ) {
                // convert cpp parameters to js:
                
  // parameter: document (RDocument)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RDocument(
    handler, 
    document
  );

  // parameter: onlyChanges (bool)
  


  QJSValue a2_js = RJSHelper::cpp2js_bool(
    handler, 
    onlyChanges
  );

  // parameter: entityTypeFilter (RS::EntityType)
  


  QJSValue a3_js = RJSHelper_qcad::cpp2js_RS_EntityType(
    handler, 
    entityTypeFilter
  );

  // parameter: manual (bool)
  


  QJSValue a4_js = RJSHelper::cpp2js_bool(
    handler, 
    manual
  );

  // parameter: showOnRequest (bool)
  


  QJSValue a5_js = RJSHelper::cpp2js_bool(
    handler, 
    showOnRequest
  );


                emit updatedFromDocument(
                  a1_js, a2_js, a3_js, a4_js, a5_js
                );
              }
            
    // Class: RPropertyListenerAdapter
    // Function: updatedFromObject
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RPropertyListenerAdapter_Wrapper::updatedFromObjectEmitter(
                RObject* object, RDocument* document
              ) {
                // convert cpp parameters to js:
                
  // parameter: object (RObject)
  


  QJSValue a1_js = RJSHelper_qcad::cpp2js_RObject(
    handler, 
    object
  );

  // parameter: document (RDocument)
  


  QJSValue a2_js = RJSHelper_qcad::cpp2js_RDocument(
    handler, 
    document
  );


                emit updatedFromObject(
                  a1_js, a2_js
                );
              }
            
    // Class: RPropertyListenerAdapter
    // Function: clearedEditor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RPropertyListenerAdapter_Wrapper::clearedEditorEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit clearedEditor(
                  
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  