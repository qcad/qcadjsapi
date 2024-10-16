
  // Auto generated
  
  // include header:
  //#include "RSnapRestrictionwrapper.h"
  //#include "header_cpp.h"
  
    #include "rsnaprestriction_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RSnapRestriction*> RSnapRestriction_Wrapper::basecasters_RSnapRestriction;
    
    // static functions implementation in singleton wrapper:
    
    void RSnapRestriction_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RSnapRestriction_Wrapper>("org.qcad", 1, 0, "RSnapRestriction_Wrapper");
        qmlRegisterInterface<RSnapRestriction_Wrapper>("RSnapRestriction_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RSnapRestriction* t = new RJSType_RSnapRestriction();
          global.setProperty("RJSType_RSnapRestriction", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RSnapRestriction::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RSnapRestriction_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RSnapRestriction_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RSnapRestriction_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RSnapRestriction_BaseJs", mob);
      
      QString fileName = ":generator/js/RSnapRestriction.js";
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
    RSnapRestriction_Wrapper::RSnapRestriction_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RSnapRestriction_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RSnapRestriction_Wrapper::RSnapRestriction_Wrapper(RJSApi& h, RSnapRestriction* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RSnapRestriction_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RSnapRestriction_Wrapper"));
              //setObjectName("RSnapRestriction_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RSnapRestriction_Wrapper::~RSnapRestriction_Wrapper() {
            //RDebug::decCounter(QString("RSnapRestriction_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RSnapRestriction_Wrapper"));

            //qDebug() << "RSnapRestriction_Wrapper::~RSnapRestriction_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RSnapRestriction";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RSnapRestriction_Wrapper::initConnections() {

          //setObjectName("RSnapRestriction_Wrapper");

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
    
    // Class: RSnapRestriction
    // Function: restrictSnap
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RSnapRestriction_Wrapper::restrictSnap
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: position (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: relativeZero (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSnapRestriction* w = getWrapped();
                RVector res = 
                    
                w->restrictSnap(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for restrictSnap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapRestriction
    // Function: getLastSnap
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapRestriction_Wrapper::getLastSnap
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSnapRestriction* w = getWrapped();
                RVector res = 
                    
                w->getLastSnap(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLastSnap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSnapRestriction
    // Function: reset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RSnapRestriction_Wrapper::reset
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSnapRestriction* w = getWrapped();
                
                w->reset(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rsnaprestriction_wrapper.cpp"
  
