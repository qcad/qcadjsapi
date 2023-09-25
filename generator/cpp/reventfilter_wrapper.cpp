
  // Auto generated
  
  // include header:
  //#include "REventFilterwrapper.h"
  //#include "header_cpp.h"
  
    #include "reventfilter_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void REventFilter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<REventFilter_Wrapper>("org.qcad", 1, 0, "REventFilter_Wrapper");
        qmlRegisterInterface<REventFilter_Wrapper>("REventFilter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_REventFilter* t = new RJSType_REventFilter();
          global.setProperty("RJSType_REventFilter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_REventFilter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&REventFilter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("REventFilter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&REventFilter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("REventFilter_BaseJs", mob);
      
      QString fileName = ":generator/js/REventFilter.js";
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
    REventFilter_Wrapper::REventFilter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("REventFilter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      REventFilter_Wrapper::REventFilter_Wrapper(RJSApi& h, REventFilter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("REventFilter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("REventFilter_Wrapper"));
              //setObjectName("REventFilter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      REventFilter_Wrapper::~REventFilter_Wrapper() {
            //RDebug::decCounter(QString("REventFilter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("REventFilter_Wrapper"));

            //qDebug() << "REventFilter_Wrapper::~REventFilter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of REventFilter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void REventFilter_Wrapper::initConnections() {

          //setObjectName("REventFilter_Wrapper");

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
  
    // Class: REventFilter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
REventFilter_Wrapper::REventFilter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("REventFilter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("REventFilter_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QEvent_Type(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (QEvent::Type)
  
QEvent::Type a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QEvent::None;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QEvent_Type(handler, a1);
          }
        
  // convert js parameter to cpp: forward (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new REventFilter(
                a1_cpp
    , a2_cpp
    
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
   && a2.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for REventFilter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  