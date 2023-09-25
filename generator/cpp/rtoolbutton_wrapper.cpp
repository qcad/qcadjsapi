
  // Auto generated
  
  // include header:
  //#include "RToolButtonwrapper.h"
  //#include "header_cpp.h"
  
    #include "rtoolbutton_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RToolButton_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RToolButton_Wrapper>("org.qcad", 1, 0, "RToolButton_Wrapper");
        qmlRegisterInterface<RToolButton_Wrapper>("RToolButton_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RToolButton* t = new RJSType_RToolButton();
          global.setProperty("RJSType_RToolButton", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RToolButton::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RToolButton_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RToolButton_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RToolButton_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RToolButton_BaseJs", mob);
      
      QString fileName = ":generator/js/RToolButton.js";
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
    RToolButton_Wrapper::RToolButton_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RToolButton_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RToolButton_Wrapper::RToolButton_Wrapper(RJSApi& h, RToolButton* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RToolButton_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RToolButton_Wrapper"));
              //setObjectName("RToolButton_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RToolButton_Wrapper::~RToolButton_Wrapper() {
            //RDebug::decCounter(QString("RToolButton_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RToolButton_Wrapper"));

            //qDebug() << "RToolButton_Wrapper::~RToolButton_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RToolButton";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RToolButton_Wrapper::initConnections() {

          //setObjectName("RToolButton_Wrapper");

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
  
    // Class: RToolButton
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RToolButton_Wrapper::RToolButton_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RToolButton_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RToolButton_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RToolButton_Base(
              handler
              
                ,
              a1_cpp
    
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RToolButton_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RToolButton_Base*)wrapped)->self = handler.getSelf();
          

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
                  

                  qWarning() << "no matching constructor variant found for RToolButton";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  