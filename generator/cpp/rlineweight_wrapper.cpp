
  // Auto generated
  
  // include header:
  //#include "RLineweightwrapper.h"
  //#include "header_cpp.h"
  
    #include "rlineweight_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RLineweight*> RLineweight_Wrapper::basecasters_RLineweight;
    
    // static functions implementation in singleton wrapper:
    
    // Class: RLineweight
    // Function: getIcon
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLineweight_WrapperSingleton::getIcon
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLineweight_Lineweight(handler, a1
  )

   && RJSHelper::is_QSize(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (RLineweight::Lineweight)
  
RLineweight::Lineweight a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLineweight_Lineweight(handler, a1);
        
  // convert js parameter to cpp: size (QSize)
  
QSize a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_QSIZE_ICON;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QSize(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QIcon res = 
                
                // call static member function:
                RLineweight::getIcon(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QIcon

            return RJSHelper::cpp2js_QIcon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIcon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweight
    // Function: getName
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweight_WrapperSingleton::getName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLineweight_Lineweight(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lineweight (RLineweight::Lineweight)
  
RLineweight::Lineweight a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLineweight_Lineweight(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RLineweight::getName(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLineweight
    // Function: getClosestMatch
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLineweight_WrapperSingleton::getClosestMatch
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lw (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            RLineweight::Lineweight res = 
                
                // call static member function:
                RLineweight::getClosestMatch(
              a1_cpp
    
            );
          
            // return type: RLineweight::Lineweight

            return RJSHelper_qcad::cpp2js_RLineweight_Lineweight(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClosestMatch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RLineweight_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RLineweight_Wrapper>("org.qcad", 1, 0, "RLineweight_Wrapper");
        qmlRegisterInterface<RLineweight_Wrapper>("RLineweight_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RLineweight* t = new RJSType_RLineweight();
          global.setProperty("RJSType_RLineweight", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RLineweight::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RLineweight_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RLineweight_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RLineweight_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RLineweight_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RLineweight_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RLineweight_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RLineweight_WrapperSingleton * s = new RLineweight_WrapperSingleton(handler);
        engine->globalObject().setProperty("RLineweight_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RLineweight.js";
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
    RLineweight_Wrapper::RLineweight_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RLineweight_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RLineweight_Wrapper::RLineweight_Wrapper(RJSApi& h, RLineweight* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RLineweight_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RLineweight_Wrapper"));
              //setObjectName("RLineweight_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RLineweight_Wrapper::~RLineweight_Wrapper() {
            //RDebug::decCounter(QString("RLineweight_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RLineweight_Wrapper"));

            //qDebug() << "RLineweight_Wrapper::~RLineweight_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RLineweight";
                  delete wrapped;
                  wrapped = nullptr;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RLineweight_Wrapper::initConnections() {

          //setObjectName("RLineweight_Wrapper");

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
  
    // Class: RLineweight
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RLineweight_Wrapper::RLineweight_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RLineweight_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RLineweight_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RLineweight(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RLineweight";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rlineweight_wrapper.cpp"
  
