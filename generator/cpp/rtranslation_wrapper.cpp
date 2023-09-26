
  // Auto generated
  
  // include header:
  //#include "RTranslationwrapper.h"
  //#include "header_cpp.h"
  
    #include "rtranslation_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RTranslation*> RTranslation_Wrapper::basecasters_RTranslation;
    
    // static functions implementation in singleton wrapper:
    
    void RTranslation_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RTranslation_Wrapper>("org.qcad", 1, 0, "RTranslation_Wrapper");
        qmlRegisterInterface<RTranslation_Wrapper>("RTranslation_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RTranslation* t = new RJSType_RTranslation();
          global.setProperty("RJSType_RTranslation", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RTranslation::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RTranslation_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RTranslation_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RTranslation_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RTranslation_BaseJs", mob);
      
      QString fileName = ":generator/js/RTranslation.js";
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
    RTranslation_Wrapper::RTranslation_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RTranslation_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RTranslation_Wrapper::RTranslation_Wrapper(RJSApi& h, RTranslation* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RTranslation_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTranslation_Wrapper"));
              //setObjectName("RTranslation_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RTranslation_Wrapper::~RTranslation_Wrapper() {
            //RDebug::decCounter(QString("RTranslation_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RTranslation_Wrapper"));

            //qDebug() << "RTranslation_Wrapper::~RTranslation_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RTranslation";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RTranslation_Wrapper::initConnections() {

          //setObjectName("RTranslation_Wrapper");

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
  
    // Class: RTranslation
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
RTranslation_Wrapper::RTranslation_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RTranslation_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RTranslation_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

   && RJSHelper::is_double(handler, a3
    , true
  
  )

   && RJSHelper_qcad::is_RVector(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: offset (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: rotationAngle (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0.0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
          }
        
  // convert js parameter to cpp: scaleFactor (double)
  
double a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 1.0;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_double(handler, a3);
          }
        
  // convert js parameter to cpp: center (RVector)
  
RVector a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = RVector::nullVector;
          }
          else {
            a4_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a4);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTranslation(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
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
   && a3.isUndefined()
   && a4.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RTranslation";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
