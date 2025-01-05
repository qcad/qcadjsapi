
  // Auto generated
  
  // include header:
  //#include "RFileExporterFactoryAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rfileexporterfactoryadapter_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RFileExporterFactoryAdapter*> RFileExporterFactoryAdapter_Wrapper::basecasters_RFileExporterFactoryAdapter;
    
    // static functions implementation in singleton wrapper:
    
    void RFileExporterFactoryAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFileExporterFactoryAdapter_Wrapper>("org.qcad", 1, 0, "RFileExporterFactoryAdapter_Wrapper");
        qmlRegisterInterface<RFileExporterFactoryAdapter_Wrapper>("RFileExporterFactoryAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFileExporterFactoryAdapter* t = new RJSType_RFileExporterFactoryAdapter();
          global.setProperty("RJSType_RFileExporterFactoryAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFileExporterFactoryAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFileExporterFactoryAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFileExporterFactoryAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFileExporterFactoryAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFileExporterFactoryAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RFileExporterFactoryAdapter.js";
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
    RFileExporterFactoryAdapter_Wrapper::RFileExporterFactoryAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFileExporterFactoryAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFileExporterFactoryAdapter_Wrapper::RFileExporterFactoryAdapter_Wrapper(RJSApi& h, RFileExporterFactoryAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFileExporterFactoryAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFileExporterFactoryAdapter_Wrapper"));
              //setObjectName("RFileExporterFactoryAdapter_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFileExporterFactoryAdapter_Wrapper::~RFileExporterFactoryAdapter_Wrapper() {
            //RDebug::decCounter(QString("RFileExporterFactoryAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFileExporterFactoryAdapter_Wrapper"));

            //qDebug() << "RFileExporterFactoryAdapter_Wrapper::~RFileExporterFactoryAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RFileExporterFactoryAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFileExporterFactoryAdapter_Wrapper::initConnections() {

          //setObjectName("RFileExporterFactoryAdapter_Wrapper");

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
  
    // Class: RFileExporterFactoryAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RFileExporterFactoryAdapter_Wrapper::RFileExporterFactoryAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RFileExporterFactoryAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RFileExporterFactoryAdapter_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
              wrapped = new RFileExporterFactoryAdapter(
                  
              );
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RFileExporterFactoryAdapter";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RFileExporterFactoryAdapter
    // Function: getFilterStrings
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterFactoryAdapter_Wrapper:: 
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterFactoryAdapter* w = getWrapped();
                QStringList res = 
                    
                w->getFilterStrings(
                  
                );
              
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
            
    // Class: RFileExporterFactoryAdapter
    // Function: canExport
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterFactoryAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      canExportSuper
                    
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterFactoryAdapter* w = getWrapped();
                int res = 
                    
                w->canExport(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for canExport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileExporterFactoryAdapter
    // Function: instantiate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterFactoryAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      instantiateSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // non copyable:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileExporterFactoryAdapter* w = getWrapped();
                RFileExporter* res = 
                    
                w->instantiate(
                  *a1_cpp
    
                );
              
            // return type: RFileExporter*

            return RJSHelper_qcad::cpp2js_RFileExporter(
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
  
    #include "moc_rfileexporterfactoryadapter_wrapper.cpp"
  
