
  // Auto generated
  
  // include header:
  //#include "RFileImporterFactoryAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rfileimporterfactoryadapter_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RFileImporterFactoryAdapter*> RFileImporterFactoryAdapter_Wrapper::basecasters_RFileImporterFactoryAdapter;
    
    // static functions implementation in singleton wrapper:
    
    void RFileImporterFactoryAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFileImporterFactoryAdapter_Wrapper>("org.qcad", 1, 0, "RFileImporterFactoryAdapter_Wrapper");
        qmlRegisterInterface<RFileImporterFactoryAdapter_Wrapper>("RFileImporterFactoryAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFileImporterFactoryAdapter* t = new RJSType_RFileImporterFactoryAdapter();
          global.setProperty("RJSType_RFileImporterFactoryAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFileImporterFactoryAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFileImporterFactoryAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFileImporterFactoryAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFileImporterFactoryAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFileImporterFactoryAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RFileImporterFactoryAdapter.js";
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
    RFileImporterFactoryAdapter_Wrapper::RFileImporterFactoryAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFileImporterFactoryAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFileImporterFactoryAdapter_Wrapper::RFileImporterFactoryAdapter_Wrapper(RJSApi& h, RFileImporterFactoryAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFileImporterFactoryAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFileImporterFactoryAdapter_Wrapper"));
              //setObjectName("RFileImporterFactoryAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFileImporterFactoryAdapter_Wrapper::~RFileImporterFactoryAdapter_Wrapper() {
            //RDebug::decCounter(QString("RFileImporterFactoryAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFileImporterFactoryAdapter_Wrapper"));

            //qDebug() << "RFileImporterFactoryAdapter_Wrapper::~RFileImporterFactoryAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RFileImporterFactoryAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFileImporterFactoryAdapter_Wrapper::initConnections() {

          //setObjectName("RFileImporterFactoryAdapter_Wrapper");

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
  
    // Class: RFileImporterFactoryAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RFileImporterFactoryAdapter_Wrapper::RFileImporterFactoryAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RFileImporterFactoryAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RFileImporterFactoryAdapter_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RFileImporterFactoryAdapter_Base(
              handler
              
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RFileImporterFactoryAdapter_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RFileImporterFactoryAdapter_Base*)wrapped)->self = handler.getSelf();
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RFileImporterFactoryAdapter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RFileImporterFactoryAdapter
    // Function: getFilterStrings
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileImporterFactoryAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      getFilterStringsSuper
                    
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
            
                // call function of RFileImporterFactoryAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileImporterFactoryAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileImporterFactoryAdapter::getFilterStrings: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                QStringList res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->getFilterStringsSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->getFilterStrings(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFilterStrings";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterFactoryAdapter
    // Function: canImport
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileImporterFactoryAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      canImportSuper
                    
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: nameFilter (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = "";
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileImporterFactoryAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileImporterFactoryAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileImporterFactoryAdapter::canImport: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                int res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->canImportSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->canImport(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for canImport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterFactoryAdapter
    // Function: instantiate
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RFileImporterFactoryAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      instantiateSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RMessageHandler_ptr(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RProgressHandler_ptr(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // non copyable:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        
  // convert js parameter to cpp: messageHandler (RMessageHandler)
  

          // pointer:
          RMessageHandler*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RMessageHandler_ptr(handler, a2);
          }
        
  // convert js parameter to cpp: progressHandler (RProgressHandler)
  

          // pointer:
          RProgressHandler*
         a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = NULL;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RProgressHandler_ptr(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RFileImporterFactoryAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileImporterFactoryAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileImporterFactoryAdapter::instantiate: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                RFileImporter* res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->instantiateSup(
                        *a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->instantiate(
                        *a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: RFileImporter*

            return RJSHelper_qcad::cpp2js_RFileImporter(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for instantiate";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
