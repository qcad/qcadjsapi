
  // Auto generated
  
  // include header:
  //#include "RRestrictVerticalwrapper.h"
  //#include "header_cpp.h"
  
    #include "rrestrictvertical_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RRestrictVertical*> RRestrictVertical_Wrapper::basecasters_RRestrictVertical;
    
    // static functions implementation in singleton wrapper:
    
    void RRestrictVertical_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RRestrictVertical_Wrapper>("org.qcad", 1, 0, "RRestrictVertical_Wrapper");
        qmlRegisterInterface<RRestrictVertical_Wrapper>("RRestrictVertical_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RRestrictVertical* t = new RJSType_RRestrictVertical();
          global.setProperty("RJSType_RRestrictVertical", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RRestrictVertical::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RRestrictVertical_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RRestrictVertical_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RRestrictVertical_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RRestrictVertical_BaseJs", mob);
      
      QString fileName = ":generator/js/RRestrictVertical.js";
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
    RRestrictVertical_Wrapper::RRestrictVertical_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RRestrictVertical_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RRestrictVertical_Wrapper::RRestrictVertical_Wrapper(RJSApi& h, RRestrictVertical* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RRestrictVertical_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RRestrictVertical_Wrapper"));
              //setObjectName("RRestrictVertical_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RRestrictVertical_Wrapper::~RRestrictVertical_Wrapper() {
            //RDebug::decCounter(QString("RRestrictVertical_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RRestrictVertical_Wrapper"));

            //qDebug() << "RRestrictVertical_Wrapper::~RRestrictVertical_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RRestrictVertical";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RRestrictVertical_Wrapper::initConnections() {

          //setObjectName("RRestrictVertical_Wrapper");

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
  
    // Class: RRestrictVertical
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RRestrictVertical_Wrapper::RRestrictVertical_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RRestrictVertical_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RRestrictVertical_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RRestrictVertical(
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
                  

                  qWarning() << "no matching constructor variant found for RRestrictVertical";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RRestrictVertical
    // Function: showUiOptions
    // Source: RSnapRestriction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RRestrictVertical_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      showUiOptionsSuper
                    
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
                RRestrictVertical* w = getWrapped();
                
                w->showUiOptions(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showUiOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RRestrictVertical
    // Function: hideUiOptions
    // Source: RSnapRestriction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RRestrictVertical_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      hideUiOptionsSuper
                    
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
                RRestrictVertical* w = getWrapped();
                
                w->hideUiOptions(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for hideUiOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RRestrictVertical
    // Function: getLastSnap
    // Source: RSnapRestriction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RRestrictVertical_Wrapper::getLastSnap
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RRestrictVertical* w = getWrapped();
                RVector res = 
                    
                w->getLastSnap(
                  
                );
              
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
            
    // Class: RRestrictVertical
    // Function: reset
    // Source: RSnapRestriction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RRestrictVertical_Wrapper::reset
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
                RRestrictVertical* w = getWrapped();
                
                w->reset(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RRestrictVertical
    // Function: restrictSnap
    // Source: RRestrictOrthogonal
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RRestrictVertical_Wrapper::restrictSnap
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RRestrictVertical* w = getWrapped();
                RVector res = 
                    
                w->restrictSnap(
                  a1_cpp
    , a2_cpp
    
                );
              
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rrestrictvertical_wrapper.cpp"
  
