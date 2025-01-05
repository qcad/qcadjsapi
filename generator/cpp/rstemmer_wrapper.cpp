
  // Auto generated
  
  // include header:
  //#include "RStemmerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rstemmer_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RStemmer*> RStemmer_Wrapper::basecasters_RStemmer;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RStemmer
    // Function: stem
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RStemmer_WrapperSingleton::stem
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: word (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: locale (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RStemmer::stem(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for stem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RStemmer_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RStemmer_Wrapper>("org.qcad", 1, 0, "RStemmer_Wrapper");
        qmlRegisterInterface<RStemmer_Wrapper>("RStemmer_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RStemmer* t = new RJSType_RStemmer();
          global.setProperty("RJSType_RStemmer", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RStemmer::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RStemmer_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RStemmer_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RStemmer_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RStemmer_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RStemmer_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RStemmer_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RStemmer_WrapperSingleton * s = new RStemmer_WrapperSingleton(handler);
        engine->globalObject().setProperty("RStemmer_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RStemmer.js";
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
    RStemmer_Wrapper::RStemmer_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RStemmer_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RStemmer_Wrapper::RStemmer_Wrapper(RJSApi& h, RStemmer* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RStemmer_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RStemmer_Wrapper"));
              //setObjectName("RStemmer_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RStemmer_Wrapper::~RStemmer_Wrapper() {
            //RDebug::decCounter(QString("RStemmer_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RStemmer_Wrapper"));

            //qDebug() << "RStemmer_Wrapper::~RStemmer_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RStemmer";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void RStemmer_Wrapper::initConnections() {

          //setObjectName("RStemmer_Wrapper");

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
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rstemmer_wrapper.cpp"
  
