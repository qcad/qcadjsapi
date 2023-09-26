
  // Auto generated
  
  // include header:
  //#include "RAutoLoadJswrapper.h"
  //#include "header_cpp.h"
  
    #include "rautoloadjs_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RAutoLoadJs*> RAutoLoadJs_Wrapper::basecasters_RAutoLoadJs;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RAutoLoadJs
    // Function: addAutoLoadFile
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RAutoLoadJs_WrapperSingleton::addAutoLoadFile
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: file (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RAutoLoadJs::addAutoLoadFile(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addAutoLoadFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RAutoLoadJs
    // Function: getAutoLoadFiles
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RAutoLoadJs_WrapperSingleton::getAutoLoadFiles
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                RAutoLoadJs::getAutoLoadFiles(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAutoLoadFiles";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RAutoLoadJs_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RAutoLoadJs_Wrapper>("org.qcad", 1, 0, "RAutoLoadJs_Wrapper");
        qmlRegisterInterface<RAutoLoadJs_Wrapper>("RAutoLoadJs_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RAutoLoadJs* t = new RJSType_RAutoLoadJs();
          global.setProperty("RJSType_RAutoLoadJs", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RAutoLoadJs::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RAutoLoadJs_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RAutoLoadJs_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RAutoLoadJs_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RAutoLoadJs_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RAutoLoadJs_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RAutoLoadJs_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RAutoLoadJs_WrapperSingleton * s = new RAutoLoadJs_WrapperSingleton(handler);
        engine->globalObject().setProperty("RAutoLoadJs_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RAutoLoadJs.js";
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
    RAutoLoadJs_Wrapper::RAutoLoadJs_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RAutoLoadJs_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RAutoLoadJs_Wrapper::RAutoLoadJs_Wrapper(RJSApi& h, RAutoLoadJs* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RAutoLoadJs_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RAutoLoadJs_Wrapper"));
              //setObjectName("RAutoLoadJs_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RAutoLoadJs_Wrapper::~RAutoLoadJs_Wrapper() {
            //RDebug::decCounter(QString("RAutoLoadJs_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RAutoLoadJs_Wrapper"));

            //qDebug() << "RAutoLoadJs_Wrapper::~RAutoLoadJs_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RAutoLoadJs";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RAutoLoadJs_Wrapper::initConnections() {

          //setObjectName("RAutoLoadJs_Wrapper");

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
  
    // Class: RAutoLoadJs
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RAutoLoadJs_Wrapper::RAutoLoadJs_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RAutoLoadJs_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RAutoLoadJs_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RAutoLoadJs(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RAutoLoadJs";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
