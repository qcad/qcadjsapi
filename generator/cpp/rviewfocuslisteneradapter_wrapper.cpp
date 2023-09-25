
  // Auto generated
  
  // include header:
  //#include "RViewFocusListenerAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rviewfocuslisteneradapter_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RViewFocusListenerAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RViewFocusListenerAdapter_Wrapper>("org.qcad", 1, 0, "RViewFocusListenerAdapter_Wrapper");
        qmlRegisterInterface<RViewFocusListenerAdapter_Wrapper>("RViewFocusListenerAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RViewFocusListenerAdapter* t = new RJSType_RViewFocusListenerAdapter();
          global.setProperty("RJSType_RViewFocusListenerAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RViewFocusListenerAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RViewFocusListenerAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RViewFocusListenerAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RViewFocusListenerAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RViewFocusListenerAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RViewFocusListenerAdapter.js";
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
    RViewFocusListenerAdapter_Wrapper::RViewFocusListenerAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RViewFocusListenerAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RViewFocusListenerAdapter_Wrapper::RViewFocusListenerAdapter_Wrapper(RJSApi& h, RViewFocusListenerAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RViewFocusListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RViewFocusListenerAdapter_Wrapper"));
              //setObjectName("RViewFocusListenerAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RViewFocusListenerAdapter_Wrapper::~RViewFocusListenerAdapter_Wrapper() {
            //RDebug::decCounter(QString("RViewFocusListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RViewFocusListenerAdapter_Wrapper"));

            //qDebug() << "RViewFocusListenerAdapter_Wrapper::~RViewFocusListenerAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RViewFocusListenerAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RViewFocusListenerAdapter_Wrapper::initConnections() {

          //setObjectName("RViewFocusListenerAdapter_Wrapper");

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
  
    // Class: RViewFocusListenerAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RViewFocusListenerAdapter_Wrapper::RViewFocusListenerAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RViewFocusListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RViewFocusListenerAdapter_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RViewFocusListenerAdapter_Base(
              handler
              
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RViewFocusListenerAdapter_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RViewFocusListenerAdapter_Base*)wrapped)->self = handler.getSelf();
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RViewFocusListenerAdapter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RViewFocusListenerAdapter
    // Function: updateFocus
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RViewFocusListenerAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      updateFocusSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsView_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: view (RGraphicsView)
  

          // pointer:
          RGraphicsView*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RViewFocusListenerAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RViewFocusListenerAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RViewFocusListenerAdapter::updateFocus: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->updateFocusSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->updateFocus(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  