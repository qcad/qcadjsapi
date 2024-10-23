
  // Auto generated
  
  // include header:
  //#include "RFileExporterFactorywrapper.h"
  //#include "header_cpp.h"
  
    #include "rfileexporterfactory_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RFileExporterFactory*> RFileExporterFactory_Wrapper::basecasters_RFileExporterFactory;
    
    // static functions implementation in singleton wrapper:
    
    void RFileExporterFactory_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFileExporterFactory_Wrapper>("org.qcad", 1, 0, "RFileExporterFactory_Wrapper");
        qmlRegisterInterface<RFileExporterFactory_Wrapper>("RFileExporterFactory_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFileExporterFactory* t = new RJSType_RFileExporterFactory();
          global.setProperty("RJSType_RFileExporterFactory", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFileExporterFactory::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFileExporterFactory_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFileExporterFactory_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFileExporterFactory_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFileExporterFactory_BaseJs", mob);
      
      QString fileName = ":generator/js/RFileExporterFactory.js";
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
    RFileExporterFactory_Wrapper::RFileExporterFactory_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFileExporterFactory_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFileExporterFactory_Wrapper::RFileExporterFactory_Wrapper(RJSApi& h, RFileExporterFactory* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFileExporterFactory_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFileExporterFactory_Wrapper"));
              //setObjectName("RFileExporterFactory_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFileExporterFactory_Wrapper::~RFileExporterFactory_Wrapper() {
            //RDebug::decCounter(QString("RFileExporterFactory_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFileExporterFactory_Wrapper"));

            //qDebug() << "RFileExporterFactory_Wrapper::~RFileExporterFactory_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RFileExporterFactory";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFileExporterFactory_Wrapper::initConnections() {

          //setObjectName("RFileExporterFactory_Wrapper");

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
    
    // Class: RFileExporterFactory
    // Function: getFilterStrings
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileExporterFactory_Wrapper::getFilterStrings
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
                RFileExporterFactory* w = getWrapped();
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
            
    // Class: RFileExporterFactory
    // Function: canExport
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileExporterFactory_Wrapper::canExport
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
                RFileExporterFactory* w = getWrapped();
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
            
    // Class: RFileExporterFactory
    // Function: instantiate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileExporterFactory_Wrapper::instantiate
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
                RFileExporterFactory* w = getWrapped();
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
  
    #include "moc_rfileexporterfactory_wrapper.cpp"
  
