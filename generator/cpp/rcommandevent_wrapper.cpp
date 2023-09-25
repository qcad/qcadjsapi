
  // Auto generated
  
  // include header:
  //#include "RCommandEventwrapper.h"
  //#include "header_cpp.h"
  
    #include "rcommandevent_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RCommandEvent_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RCommandEvent_Wrapper>("org.qcad", 1, 0, "RCommandEvent_Wrapper");
        qmlRegisterInterface<RCommandEvent_Wrapper>("RCommandEvent_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RCommandEvent* t = new RJSType_RCommandEvent();
          global.setProperty("RJSType_RCommandEvent", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RCommandEvent::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RCommandEvent_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RCommandEvent_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RCommandEvent_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RCommandEvent_BaseJs", mob);
      
      QString fileName = ":generator/js/RCommandEvent.js";
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
    RCommandEvent_Wrapper::RCommandEvent_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RCommandEvent_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RCommandEvent_Wrapper::RCommandEvent_Wrapper(RJSApi& h, RCommandEvent* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RCommandEvent_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RCommandEvent_Wrapper"));
              //setObjectName("RCommandEvent_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RCommandEvent_Wrapper::~RCommandEvent_Wrapper() {
            //RDebug::decCounter(QString("RCommandEvent_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RCommandEvent_Wrapper"));

            //qDebug() << "RCommandEvent_Wrapper::~RCommandEvent_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RCommandEvent";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RCommandEvent_Wrapper::initConnections() {

          //setObjectName("RCommandEvent_Wrapper");

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
  
    // Class: RCommandEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RCommandEvent_Wrapper::RCommandEvent_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RCommandEvent_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RCommandEvent_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cmd (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RCommandEvent(
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
                  

                  qWarning() << "no matching constructor variant found for RCommandEvent";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RCommandEvent
    // Function: getCommand
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RCommandEvent_Wrapper::getCommand
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
                RCommandEvent* w = getWrapped();
                QString res = 
                    
                w->getCommand(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCommand";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCommandEvent
    // Function: accept
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RCommandEvent_Wrapper::accept
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
                RCommandEvent* w = getWrapped();
                
                w->accept(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for accept";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RCommandEvent
    // Function: isAccepted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RCommandEvent_Wrapper::isAccepted
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
                RCommandEvent* w = getWrapped();
                bool res = 
                    
                w->isAccepted(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAccepted";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  